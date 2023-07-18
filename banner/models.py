from django.db import models

# Create your models here.
class Banner(models.Model):
    titulo = models.CharField(max_length=200)
    imagen = models.ImageField(upload_to='banner/')

    def __str__(self):
        return self.titulo