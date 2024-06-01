from django.shortcuts import render
from .models import Tusers, Turls
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password, make_password
import json, random

# Create your views here.

error_method = JsonResponse({"error":"Método incorrecto"},status=405)

def comprobar_url(request, url_comprobar):
    if request.method != "GET":
        return error_method
    urls = Turls.objects.get(url = url_comprobar)
    return JsonResponse ({"se_repite":len(urls)}, safe = False, json_dumps_params={'ensure_ascii': False})

# --- GESTIÓN DE USUARIOS ---

@csrf_exempt
def crear_usuario(request):
	if request.method != 'POST':
		return error_method
	data = json.loads(request.body)
	try:
		user=Tusers.objects.get(uname=data['username'])
	except Tusers.DoesNotExist:
		new_user = Tusers(
			uname=data['username'],
			email=data['email'],
			passwd=make_password(data['password']),
		)
		new_user.save()
		return JsonResponse({'message': 'Usuario registrado exitosamente'}, status=201)
	else:
		return JsonResponse({'error': 'Usuario existente'}, status=404)

def devolver_usuario(request, nombre_user):
    try:
        usuario = Tusers.objects.get(uname = nombre_user)
    
        urls = usuario.turls_set.all()
        
        lista_urls = []
        for fila in urls:
            diccionario = {}
            diccionario['new_route']
            diccionario['old_route']
            diccionario['clicks']
            diccionario['fcreacion']
            lista_urls.append(diccionario)
        
        respuesta = {
            'nombre':usuario.uname,
            'urls': lista_urls
        }
    except Tusers.DoesNotExist:
        return JsonResponse({'error': 'El usuario no existe'}, status=405)
    return JsonResponse(respuesta, safe=False, json_dumps_params={'ensure_ascii': False})

# --- SIGUIENTE PUNTO ---

# --- GESTIÓN DE URLS ---

def crear_cadena():
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_0123456789'
    result = ''
    for i in range(10):
        result = result + chars[random.randint(0, len(chars)-1)]
    return result

def crear_url(request):
    if request.method != "POST":
        return error_method
    data = json.loads(request.body)
    try:
        oldurl = Turls.objects.get(old_route = data["UrlOg"])
    except Turls.DoesNotExist:
        newUrl = crear_cadena
        return JsonResponse({'error': newUrl}, status=405)  