from django.shortcuts import render
from rest_framework import viewsets
from .models import Blog
from .serializer import BlogSerializer
# Create your views here.

class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
