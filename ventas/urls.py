from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'comprobante', views.ComprobanteView, 'comprobante')

urlpatterns = [
    path('', views.VentasView.as_view(), name='Ventas'),
    path('comprobante/', include(router.urls))
]
