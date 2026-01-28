from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Tax(models.Model):
    TAX_TYPES = [
        ('income', 'Income Tax'),
        ('sales', 'Sales Tax'),
        ('property', 'Property Tax'),
        ('corporate', 'Corporate Tax'),
        ('vat', 'VAT'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    rate = models.DecimalField(
        max_digits=5, 
        decimal_places=2,
        validators=[MinValueValidator(0), MaxValueValidator(100)]
    )
    amount = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} ({self.get_tax_type_display()})"

    @property
    def calculated_amount(self):
        """Calculate tax amount based on rate and base amount"""
        return (self.amount * self.rate) / 100
