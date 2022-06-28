from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name='Webcam2'),
    path('Webcam2_Stream', views.video_stream, name='Webcam2_Stream'),
]