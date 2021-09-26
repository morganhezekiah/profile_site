from Profile.settings import BASE_DIR
from django.http.response import FileResponse
from django.urls.conf import path
from home.models import Message
import json
from django.shortcuts import render
from consts.variables import projectName, developerName
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.core.mail import send_mail

import os
import threading

### FUNC ### RETURNS HOME PAGE
@csrf_exempt
def welcome(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        email = data.get("email")
        name = data.get("name")
        subject = data.get("subject")
        message = data.get("message")
        
        if email == "" or name == "" or subject == "" or message == "":
            return JsonResponse({"message":"Please enter all fields"}, 400)
        else:
            t = threading.Thread(target=saveMessage, args=(email, name, subject,message))
            emailSend = threading.Thread(target=sendEmail, args=(email, name, subject, message))
            emailSend.start()
            t.start()
            return JsonResponse({"message":"Message sent, thanks for staying in touch"})
    return render(request, "home/index.html", {"developerName":developerName, "projectName":projectName, "phone":"+237 8122510760", "email":"morganhezekiah11@gmail.com"})


def downloadCv(request):
    path = os.path.join(settings.BASE_DIR, "statics/hezekiahMorgan.pdf")
    return FileResponse(open(path, "rb"))




def saveMessage(email, name, subject,message):
    try:
       #m = Message.objects.create(email=email,name=name,subject=subject,message=message)
       pass
    except Exception as e:
        pass

def sendEmail(email, name, subject, message):
    try:
        mail = send_mail(subject,message, email,("morganhezekiah11@gmail.com",),fail_silently=True)
    except Exception as e:
        pass
    

def favicon(request):
    path = os.path.join(settings.BASE_DIR, "statics/favicon.ico")
    return FileResponse(open(path, "rb"))