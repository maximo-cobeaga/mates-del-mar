from rest_framework import serializers
from .models import Comprobante

class ComprobanteSerializar(serializers.ModelSerializer):
    class Meta:
        model = Comprobante
        fields = '__all__'