import mercadopago
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
import paypalrestsdk


class PaymentView(APIView):
    def post(self, request):
        sdk = mercadopago.SDK(
            'TEST-6611530024366504-071014-d02c435f10e841acab6e45a66e5648c2-1420296772')

        preference_data = {
            "items": request.data,
            "back_urls": {
                "success": "http://localhost:5173/",
                "failure": "https://preview.wnpower.host/matesdelmar.com/",
                "pending": "https://preview.wnpower.host/matesdelmar.com/"
            },
            "auto_return": "approved",
            "notification_url":  "https://8752-2803-9800-9991-8e10-6125-871a-567d-b325.ngrok-free.app/payment/redirect-payment/",
        }

        prefererence_response = sdk.preference().create(preference_data)
        preference = prefererence_response["response"]

        return Response({"id": preference["id"], "mensaje": preference})


class RedirectView(APIView):
    def post(self, request):
        print(request.data)

        return Response({"request": request.data})
