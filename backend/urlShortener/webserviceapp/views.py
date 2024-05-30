
from django.shortcuts import render
from .models import 
from django.http import JsonResponse


# Create your views here.

error_method = JsonResponse({"error":"Método incorrecto"}, status=405)

def comprobar_url(request, url_comprobar):
    if request.method != "GET":
        return error_method
    urls = Urls.objects.get(url = url_comprobar)
    return JsonResponse ({"se_repite":len(urls)}, safe = False, json_dumps_params={'ensure_ascii': False})