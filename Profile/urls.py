
from django.contrib import admin
from django.urls import path
from home.views import downloadCv, welcome

urlpatterns = [
    path('', welcome, name="welcome"),
    path('admin/', admin.site.urls),
    path("download/mycv", downloadCv, name="downloadMyCv")
]
