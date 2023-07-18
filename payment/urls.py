from django.urls import path
from .views import *

urlpatterns = [
    path('proccess-payment/', PaymentView.as_view(), name='proccess-payment'),
    path('redirect-payment/', RedirectView.as_view(), name='redirect-payment'),
]
