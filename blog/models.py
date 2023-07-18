from django.db import models

# Create your models here.


class Blog(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='imagenes/', blank=True, default=None)
    video = models.CharField(max_length=100, blank=True, default=None)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo