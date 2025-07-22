import mercadopago
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
import paypalrestsdk


class PaymentView(APIView):
    def post(self, request):
        sdk = mercadopago.SDK(
            'APP_USR-65922356739854-082518-5496598cc17f4a36279035a15865d720-457288724')

        preference_data = {
            "items": request.data,
            "back_urls": {
                "success": "http://62.72.11.104/",
                "failure": "http://62.72.11.104/",
                "pending": "http://62.72.11.104/"
            },
            "auto_return": "approved",
            "notification_url":  "https://090d-2803-9800-9991-8e10-61ea-2d97-c4e1-1e75.ngrok-free.app/payment/redirect-payment/",
        }

        prefererence_response = sdk.preference().create(preference_data)
        preference = prefererence_response["response"]

        return Response({"id": preference["id"], "mensaje": preference})


class RedirectView(APIView):
    def post(self, request):
        print(request.data)

        return Response({"request": request.data})
