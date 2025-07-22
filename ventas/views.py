from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
import json
from email.message import EmailMessage
import ssl
import smtplib
from .models import Comprobante
from .serializer import ComprobanteSerializar


# Create your views here.
class ComprobanteView(viewsets.ModelViewSet):
    serializer_class = ComprobanteSerializar
    queryset = Comprobante.objects.all()


class VentasView(APIView):
    def post(self, request):

        datos = []
        for req in request.data:
            for data in req:
                dato = data + ': ' + str(req[data])
                datos.append(dato)
                if data == 'email':
                    mail_comprador = str(req[data])
            


        email_emisor = 'mates.mailsender@gmail.com'
        email_contraseña = 'tingjmplerckteux'
        email_receptor = 'matesdelmar1@gmail.com'
        asunto = 'Nueva venta Mates del Mar'
        compra = 'Confirmacion de compra'
        cuerpo = ' - '.join(map(str, datos))
        cuerpo2 = ' Su compra en Mates del mar fue confirmada.\nDependiendo del producto comprado, la demora en ser despachado puede variar entre 10 a 25 días.\nTus pedido es: \n' + cuerpo + '\nSi no realizaste esta compra o simplemente estabas probando nuestro sitio, por favor desconsiderá este e-mail.\n Gracias por sumarte a la mateada!\n Atentamente,\nMates del Mar\nElegí tu compañía..'

        em = EmailMessage()
        em['From'] = email_emisor
        em['To'] = email_receptor
        em['Subject'] = asunto
        em.set_content(cuerpo)

        context = ssl.create_default_context()
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_emisor, email_contraseña)
            smtp.sendmail(email_emisor, email_receptor, em.as_string())

        em = EmailMessage()
        em['From'] = email_emisor
        em['To'] = mail_comprador
        em['Subject'] = compra
        em.set_content(cuerpo2)

        context = ssl.create_default_context()
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_emisor, email_contraseña)
            smtp.sendmail(email_emisor, mail_comprador, em.as_string())


        return Response({'data': request.data})
