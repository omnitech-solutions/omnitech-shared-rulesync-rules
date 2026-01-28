from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Tax
from .serializers import TaxSerializer


class TaxViewSet(viewsets.ModelViewSet):
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer

    def get_queryset(self):
        queryset = Tax.objects.all()
        is_active = self.request.query_params.get('is_active')
        tax_type = self.request.query_params.get('tax_type')
        
        if is_active is not None:
            queryset = queryset.filter(is_active=is_active.lower() == 'true')
        
        if tax_type:
            queryset = queryset.filter(tax_type=tax_type)
            
        return queryset

    @action(detail=False, methods=['get'])
    def summary(self, request):
        """Get summary statistics for taxes"""
        taxes = self.get_queryset()
        total_taxes = taxes.count()
        active_taxes = taxes.filter(is_active=True).count()
        total_amount = sum(tax.calculated_amount for tax in taxes)
        
        # Group by tax type
        tax_type_summary = {}
        for tax in taxes:
            if tax.tax_type not in tax_type_summary:
                tax_type_summary[tax.tax_type] = {
                    'count': 0,
                    'total_amount': 0
                }
            tax_type_summary[tax.tax_type]['count'] += 1
            tax_type_summary[tax.tax_type]['total_amount'] += float(tax.calculated_amount)

        return Response({
            'total_taxes': total_taxes,
            'active_taxes': active_taxes,
            'total_calculated_amount': total_amount,
            'tax_type_summary': tax_type_summary
        })

    @action(detail=True, methods=['post'])
    def toggle_active(self, request, pk=None):
        """Toggle active status of a tax"""
        tax = get_object_or_404(Tax, pk=pk)
        tax.is_active = not tax.is_active
        tax.save()
        serializer = self.get_serializer(tax)
        return Response(serializer.data)
