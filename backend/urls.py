"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title='Mercadopago Api',
        default_version= 'v1',
        description='API Django',
        terms_of_service='https://policies.google.com/terms',
        contact=openapi.Contact(email='maxicobeaga@gmail.com'),
        license=openapi.License(name='MIT LICENSE'),
    )
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('productos.urls')),
    path('banner/', include('banner.urls')),
    path('payment/', include('payment.urls')),
    path('ventas/', include('ventas.urls')),
    path('blog/', include('blog.urls')),
    path('swagger/', schema_view.with_ui('swagger',cache_timeout=0), name='schema-swagger-ui'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
