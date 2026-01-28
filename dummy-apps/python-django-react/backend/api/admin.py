from django.contrib import admin
from .models import Tax


@admin.register(Tax)
class TaxAdmin(admin.ModelAdmin):
    list_display = ['name', 'tax_type', 'rate', 'amount', 'calculated_amount', 'is_active', 'created_at']
    list_filter = ['tax_type', 'is_active', 'created_at']
    search_fields = ['name', 'description']
    readonly_fields = ['created_at', 'updated_at', 'calculated_amount']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'description', 'tax_type')
        }),
        ('Financial Details', {
            'fields': ('rate', 'amount', 'calculated_amount')
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
