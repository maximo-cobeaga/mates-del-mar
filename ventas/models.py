from django.db import models

# Create your models here.
class Comprobante(models.Model):
    titulo = models.CharField(max_length=300, default='')
    comprobante = models.ImageField(upload_to='comprobantes/')