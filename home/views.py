from django.shortcuts import render
from consts.variables import projectName, developerName


### FUNC ### RETURNS HOME PAGE
def welcome(request):
    return render(request, "home/index.html", {"developerName":developerName, "projectName":projectName})

