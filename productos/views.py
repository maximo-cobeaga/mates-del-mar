from django.shortcuts import render
from .models import Productos, ImagenProducto, VariacionProducto, Categoria
from .serializer import ProductosSerializer, ImagenProductoSerializer, VariacionProductoSerializer, CategoriaSerializer
from rest_framework import viewsets
# Create your views here.


class PorductosView(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    queryset = Productos.objects.all()


class ImagenProductoView(viewsets.ModelViewSet):
    serializer_class = ImagenProductoSerializer
    queryset = ImagenProducto.objects.all()


class VariacionesProductoView(viewsets.ModelViewSet):
    serializer_class = VariacionProductoSerializer
    queryset = VariacionProducto.objects.all()


class CategoriaView(viewsets.ModelViewSet):
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()
