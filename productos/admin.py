from django.contrib import admin
from .models import Productos, Categoria, ImagenProducto, VariacionProducto
# Register your models here.


class ImagenProductoAdmin(admin.TabularInline):
    model = ImagenProducto

class VariacionProductoAdmin(admin.TabularInline):
    model = VariacionProducto

class ProductoAdmin(admin.ModelAdmin):
    inlines = [
        VariacionProductoAdmin,
        ImagenProductoAdmin
    ]
    list_display = ('titulo', 'precio', 'stock',)



admin.site.register(Productos, ProductoAdmin)
admin.site.register(Categoria)
