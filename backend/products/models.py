from django.db import models

class Product(models.Model):
    name_en = models.CharField(max_length=255)
    name_fa = models.CharField(max_length=255)
    description_en = models.TextField()
    description_fa = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name_en
