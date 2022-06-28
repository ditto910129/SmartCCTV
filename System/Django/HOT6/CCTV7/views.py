from django.shortcuts import render
from django.http.response import StreamingHttpResponse
from CCTV6.camera import VideoCamera
from kafka import KafkaConsumer
import time

# Create your views here.

def index(request):
    return render(request, 'CCTV7/Webcam2.html')

def gen(camera):
    
    consumer = KafkaConsumer(bootstrap_servers=['14.7.128.55:9092'], enable_auto_commit=True, auto_offset_reset='latest')
    consumer.subscribe(['webcam2'])
    
    while True:
        for frame in consumer:
            time.sleep(0.033)
            yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame.value + b'\r\n')

def video_stream(request):
    return StreamingHttpResponse(gen(VideoCamera()),
                    content_type='multipart/x-mixed-replace; boundary=frame')