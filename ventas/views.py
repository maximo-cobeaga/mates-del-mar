from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import json
from email.message import EmailMessage
import ssl
import smtplib

# Create your views here.


class VentasView(APIView):
    def post(self, request):

        datos = []
        for req in request.data:
            for data in req:
                dato = data + ': ' + str(req[data])
                datos.append(dato)

        email_emisor = 'mates.mailsender@gmail.com'
        email_contraseña = 'tingjmplerckteux'
        email_receptor = 'maxicobeagaprc@gmail.com'
        asunto = 'Nueva venta Mates del Mar'
        cuerpo = ' - '.join(map(str, datos))

        em = EmailMessage()
        em['From'] = email_emisor
        em['To'] = email_receptor
        em['Subject'] = asunto
        em.set_content(cuerpo)

        context = ssl.create_default_context()
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_emisor, email_contraseña)
            smtp.sendmail(email_emisor, email_receptor, em.as_string())

        return Response({'data': request.data})
