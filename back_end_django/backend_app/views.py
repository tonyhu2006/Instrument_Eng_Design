from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
# Create your views here.

def home(request):
    return HttpResponse("Welcome to the Instrument Engineering Design App!")
    return JsonResponse(data)

from django.http import JsonResponse
def get_data(request):
    data = {
        'message': 'Hello from Django! I love you!',
        'status': 'success'
    }
    return JsonResponse(data)