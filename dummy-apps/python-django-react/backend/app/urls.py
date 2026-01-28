from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_info(request):
    return JsonResponse({
        'message': 'Tax Management API',
        'version': '1.0.0',
        'endpoints': {
            'admin': '/admin/',
            'api': '/api/',
            'taxes': '/api/taxes/',
            'taxes_summary': '/api/taxes/summary/',
        },
        'frontend': 'http://localhost:5179'
    })

urlpatterns = [
    path('', api_info),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
