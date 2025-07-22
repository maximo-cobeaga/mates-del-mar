from rest_framework.documentation import include_docs_urls
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'productos', views.PorductosView, 'productos')
router.register(r'categorias', views.CategoriaView, 'categorias')
router.register(r'productos', views.ImagenProductoView, 'imagenes')
router.register(r'productos', views.VariacionesProductoView, 'variaciones')

urlpatterns = [
    path('api/', include(router.urls)),
    path('docs/', include_docs_urls('Productos API')),
]
