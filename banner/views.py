from django.shortcuts import render
from rest_framework import viewsets
from .models import Banner
from . serializer import BannerSerializer

# Create your views here.
class BannerView(viewsets.ModelViewSet):
    serializer_class = BannerSerializer
    queryset = Banner.objects.all()