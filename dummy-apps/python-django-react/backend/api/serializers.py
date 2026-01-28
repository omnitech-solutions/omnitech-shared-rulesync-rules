from rest_framework import serializers
from .models import Tax


class TaxSerializer(serializers.ModelSerializer):
    tax_type_display = serializers.CharField(source='get_tax_type_display', read_only=True)
    calculated_amount = serializers.DecimalField(max_digits=14, decimal_places=2, read_only=True)

    class Meta:
        model = Tax
        fields = [
            'id', 'name', 'description', 'tax_type', 'tax_type_display',
            'rate', 'amount', 'calculated_amount', 'is_active',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
