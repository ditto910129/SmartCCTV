from django.shortcuts import render
from django.http.response import StreamingHttpResponse
from CCTV4.camera import VideoCamera
from kafka import KafkaConsumer
import time

# Create your views here.

def index(request):
    return render(request, 'CCTV4/FallingDown.html')