from django.db import models

# Create your models here.


class Categoria(models.Model):
    titulo = models.CharField(max_length=200)

    def __str__(self):
        return self.titulo


class Productos(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    precio = models.IntegerField(default=0)
    precioDolar = models.IntegerField(blank=True, null=True)
    oferta = models.IntegerField(default=0, blank=True)
    stock = models.IntegerField(blank=True, default=0)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    etiqueta = models.CharField(max_length=100, blank=True)
    video = models.CharField(max_length=100, blank=True, default='')
    principal = models.BooleanField(default=False)
    envio_gratis = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo


class ImagenProducto(models.Model):
    titulo = models.CharField(blank=True, default='',max_length=100)
    imagen = models.ImageField(upload_to='imagenes/')
    producto = models.ForeignKey(
        Productos, on_delete=models.CASCADE, related_name='images')


class VariacionProducto(models.Model):
    producto = models.ForeignKey(
        Productos, on_delete=models.CASCADE, related_name='variaciones')
    variacion = models.CharField(max_length=100)
