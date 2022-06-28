from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name='Webcam'),
    path('Webcam_Stream', views.video_stream, name='Webcam_Stream'),
]