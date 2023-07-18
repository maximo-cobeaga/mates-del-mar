from rest_framework import serializers
from .models import Productos, ImagenProducto, VariacionProducto, Categoria


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class VariacionProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VariacionProducto
        fields = '__all__'


class ImagenProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagenProducto
        fields = '__all__'


class ProductosSerializer(serializers.ModelSerializer):
    images = ImagenProductoSerializer(many=True, read_only=True)
    variaciones = VariacionProductoSerializer(many=True, read_only=True)

    class Meta:
        model = Productos
        fields = ["id", "titulo", "descripcion", 'precio', 'precioDolar',
                  'oferta', 'stock', 'categoria', 'etiqueta', 'images', 'video', 'variaciones', 'principal', 'envio_gratis']
