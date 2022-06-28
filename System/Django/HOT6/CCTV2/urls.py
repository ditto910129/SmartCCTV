from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name='KohSamui'),
    path('KohSamui_Stream', views.video_stream, name='KohSamui_Stream'),
]