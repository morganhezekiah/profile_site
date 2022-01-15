
from django.contrib import admin
from django.urls import path
from home.views import downloadCv, welcome, favicon

urlpatterns = [
    path('', welcome, name="welcome"),
    path('admin/', admin.site.urls),
    # path("favicon.ico", favicon, name="handleFavconRequest"),
    path("download/mycv", downloadCv, name="downloadMyCv")
]
