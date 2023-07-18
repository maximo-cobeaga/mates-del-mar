from django.urls import path, include
from .views import *

urlpatterns = [
    path('', VentasView.as_view(), name='Ventas')
]
