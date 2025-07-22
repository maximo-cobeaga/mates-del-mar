from django.shortcuts import render
from .models import Productos, ImagenProducto, VariacionProducto, Categoria
from .serializer import ProductosSerializer, ImagenProductoSerializer, VariacionProductoSerializer, CategoriaSerializer
from rest_framework import viewsets
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

def helloworld(request):
    return HttpResponse("Hola Mundo")

class PorductosView(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    queryset = Productos.objects.all()
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            print("❌ Error de validación:", serializer.errors)
            return Response(serializer.errors, status=400)

        producto = serializer.save()

        # Procesar imágenes del producto
        index = 0
        while f'images[{index}][imagen]' in request.FILES:
            imagen_file = request.FILES.get(f'images[{index}][imagen]')
            titulo = request.data.get(f'images[{index}][titulo]', '')

            ImagenProducto.objects.create(
                producto=producto,
                titulo=titulo,
                imagen=imagen_file,
            )
            index += 1

        # Procesar variaciones del producto
        index = 0
        while f'variaciones[{index}][variacion]' in request.data:
            variacion = request.data.get(f'variaciones[{index}][variacion]')
            VariacionProducto.objects.create(
                producto=producto,
                variacion=variacion
            )
            index += 1

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ImagenProductoView(viewsets.ModelViewSet):
    serializer_class = ImagenProductoSerializer
    queryset = ImagenProducto.objects.all()


class VariacionesProductoView(viewsets.ModelViewSet):
    serializer_class = VariacionProductoSerializer
    queryset = VariacionProducto.objects.all()


class CategoriaView(viewsets.ModelViewSet):
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()

