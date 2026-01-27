---
targets:
  - '*'
root: false
description: Ruby on Rails best practices and patterns
globs:
  - '**/*.rb'
  - '**/app/**'
  - '**/config/**'
cursor:
  description: Ruby on Rails best practices and patterns
  globs:
    - '**/*.rb'
---
# Ruby on Rails Rules

## Rails Best Practices

- **Convention over Configuration:** Follow Rails conventions
- **MVC Pattern:** Keep controllers thin, models fat, views simple
- **RESTful Routes:** Use RESTful routing conventions
- **ActiveRecord:** Use ActiveRecord query methods, avoid raw SQL
- **Service Objects:** Extract complex business logic into service objects
- **Strong Parameters:** Always use strong parameters for mass assignment
- **N+1 Queries:** Use `includes`, `preload`, or `eager_load` to prevent N+1 queries
- **Testing:** Write tests using RSpec or Minitest
- **Security:** Use `has_secure_password`, protect against CSRF, SQL injection
- **Performance:** Use database indexes, caching, and background jobs

---

## MVC Pattern

### Controllers

```ruby
# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  def index
    @users = User.includes(:posts).page(params[:page])
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    head :no_content
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
```

### Models

```ruby
# app/models/user.rb
class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy
  
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true, length: { minimum: 2 }
  
  scope :active, -> { where(active: true) }
  scope :recent, -> { order(created_at: :desc) }
  
  def full_name
    "#{first_name} #{last_name}".strip
  end
end
```

### Service Objects

```ruby
# app/services/user_creation_service.rb
class UserCreationService
  def initialize(params)
    @params = params
  end

  def call
    user = User.new(@params)
    
    if user.save
      send_welcome_email(user)
      create_default_settings(user)
      { success: true, user: user }
    else
      { success: false, errors: user.errors }
    end
  end

  private

  def send_welcome_email(user)
    UserMailer.welcome_email(user).deliver_later
  end

  def create_default_settings(user)
    user.create_user_settings!
  end
end
```

---

## ActiveRecord Patterns

### Query Methods

```ruby
# ✅ GOOD: Use ActiveRecord methods
User.where(active: true).order(created_at: :desc).limit(10)

# ❌ BAD: Raw SQL
User.find_by_sql("SELECT * FROM users WHERE active = true ORDER BY created_at DESC LIMIT 10")
```

### Preventing N+1 Queries

```ruby
# ❌ BAD: N+1 query problem
users = User.all
users.each { |user| puts user.posts.count } # N queries!

# ✅ GOOD: Eager loading
users = User.includes(:posts).all
users.each { |user| puts user.posts.count } # 2 queries total
```

### Scopes

```ruby
class User < ApplicationRecord
  scope :active, -> { where(active: true) }
  scope :recent, -> { order(created_at: :desc) }
  scope :by_role, ->(role) { where(role: role) }
end

# Usage
User.active.recent.by_role('admin')
```

---

## Routing

### RESTful Routes

```ruby
# config/routes.rb
Rails.application.routes.draw do
  resources :users do
    resources :posts, shallow: true
  end
  
  resources :sessions, only: [:create, :destroy]
  
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end
```

### Custom Routes

```ruby
# config/routes.rb
resources :users do
  member do
    post :activate
    post :deactivate
  end
  
  collection do
    get :search
  end
end
```

---

## Testing

### RSpec Examples

```ruby
# spec/models/user_spec.rb
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
  end

  describe 'associations' do
    it { should have_many(:posts) }
  end

  describe '#full_name' do
    it 'returns concatenated first and last name' do
      user = User.new(first_name: 'John', last_name: 'Doe')
      expect(user.full_name).to eq('John Doe')
    end
  end
end
```

### Controller Specs

```ruby
# spec/controllers/users_controller_spec.rb
require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new user' do
        expect {
          post :create, params: { user: { name: 'John', email: 'john@example.com' } }
        }.to change(User, :count).by(1)
      end
    end
  end
end
```

---

## Background Jobs

### Active Job

```ruby
# app/jobs/user_creation_job.rb
class UserCreationJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    user = User.find(user_id)
    UserMailer.welcome_email(user).deliver_now
  end
end

# Usage
UserCreationJob.perform_later(user.id)
```

---

## Security

### Strong Parameters

```ruby
# ✅ GOOD: Strong parameters
def user_params
  params.require(:user).permit(:name, :email, :password)
end

# ❌ BAD: Mass assignment without protection
User.create(params[:user])
```

### CSRF Protection

```ruby
# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end
```

---

## Anti-Patterns

### Don't: Put Business Logic in Controllers

```ruby
# ❌ BAD: Business logic in controller
class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.welcome_email(@user).deliver_now
      @user.create_user_settings!
      # More business logic...
    end
  end
end

# ✅ GOOD: Use service objects
class UsersController < ApplicationController
  def create
    result = UserCreationService.new(user_params).call
    if result[:success]
      render json: result[:user], status: :created
    else
      render json: { errors: result[:errors] }, status: :unprocessable_entity
    end
  end
end
```

### Don't: Ignore N+1 Queries

```ruby
# ❌ BAD: N+1 queries
users = User.all
users.each { |user| puts user.posts.count }

# ✅ GOOD: Eager loading
users = User.includes(:posts).all
users.each { |user| puts user.posts.count }
```

---

## Related Documentation

- [Rails Guides](https://guides.rubyonrails.org/)
- `.rulesync/rules/architecture.md` - Architecture patterns
- `.rulesync/rules/testing.md` - Testing patterns
