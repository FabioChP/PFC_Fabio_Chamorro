from django.shortcuts import render
from .models import Users, Urls
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password, make_password
import json

# Create your views here.

error_method = JsonResponse({"error":"Método incorrecto"},status=405)

def comprobar_url(request, url_comprobar):
    if request.method != "GET":
        return error_method
    urls = Urls.objects.get(url = url_comprobar)
    return JsonResponse ({"se_repite":len(urls)}, safe = False, json_dumps_params={'ensure_ascii': False})

# --- GESTIÓN DE USUARIOS ---

@csrf_exempt
def crear_usuario(request):
	if request.method != 'POST':
		return error_method
	data = json.loads(request.body)
	try:
		user=Users.objects.get(uname=data['username'])
	except Users.DoesNotExist:
		new_user = Users(
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
        usuario = Users.objects.get(uname = nombre_user)
    
        urls = usuario.urls_set.all()
        
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
    except Users.DoesNotExist:
        return JsonResponse({'error': 'El usuario no existe'}, status=405)
    return JsonResponse(respuesta, safe=False, json_dumps_params={'ensure_ascii': False})

# --- SIGUIENTE PUNTO ---