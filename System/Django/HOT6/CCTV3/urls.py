from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name='Davao'),
    path('Davao_Stream', views.video_stream, name='Davao_Stream'),
]
