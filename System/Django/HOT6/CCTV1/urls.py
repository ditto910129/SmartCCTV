from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name='Seoul'),
    path('Seoul_Stream', views.video_stream, name='Seoul_Stream'),
]