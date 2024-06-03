from django.shortcuts import render
from .models import Tusers, Turls
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password, make_password
import datetime
from datetime import date
import json, random, jwt

import logging

# Create your views here.

error_method = JsonResponse({"error":"Método incorrecto"},status=405)

def comprobar_url(request, url_comprobar):
    if request.method != "GET":
        return error_method
    urls = Turls.objects.get(url = url_comprobar)
    return JsonResponse ({"se_repite":len(urls)}, safe = False, json_dumps_params={'ensure_ascii': False})

# --- GESTIÓN DEL TOKEN ---

SECRET_KEY = '3st@Cl4v3es1mp0s1bl3deR0mp3ryN03sp3r0qu3n@d1eL0inTente'

def create_token(nombreusuario):
	payload = {
		'nombreusuario': nombreusuario,
		'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
		'iat': datetime.datetime.utcnow()
	}
	token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
	return token	


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

def devolver_usuario(request, username):
    try:
        usuario = Tusers.objects.get(uname = username)
    
        urls = usuario.turls_set.all()
        
        lista_urls = []
        for fila in urls:
            diccionario = {}
            diccionario['new_route'] = fila.new_route
            diccionario['old_route'] = fila.old_route
            diccionario['clicks'] = fila.clicks
            diccionario['fcreacion'] = fila.fcreacion
            lista_urls.append(diccionario)
        
        respuesta = {
            'nombre':usuario.uname,
            'email': usuario.email,
            'urls': lista_urls
        }
    except Tusers.DoesNotExist:
        return JsonResponse({'error': 'El usuario no existe'}, status=404)
    return JsonResponse(respuesta, safe=False, json_dumps_params={'ensure_ascii': False})


# --- GESTIÓN DE SESIONES ---

@csrf_exempt
def inicio_sesion(request):
    if request.method == 'POST':
        try:
            data=json.loads(request.body)
            user=Tusers.objects.get(email=data['email'])
            print (user.passwd)
            print("\n" + str(check_password(data['password'], user.passwd)))
            if check_password(data['password'], user.passwd):
                token = create_token(user.uname)
                user.session_token = token
                user.save()
                return JsonResponse({'token': token, 'uname':user.uname}, status=200)
            else:
                return JsonResponse({'error': 'contraseña incorrecta'}, status=401)
        except Tusers.DoesNotExist:
            return JsonResponse({'error': 'Usuario no encontrado'}, status=404)
    else:
        return JsonResponse({'error': 'metodo no soportado'}, status=405)
    
@csrf_exempt
def cierre_sesion(request):
    if request.method == 'PATCH':	
        try:
            user = Tusers.objects.get(session_token = request.headers.get("Authorization", None))
            user.session_token = None
            user.save()
            return JsonResponse({'message':'Sesión cerrada con éxito'}, status=200)
        except Tusers.DoesNotExist:
            return JsonResponse({'error':'Usuario no logueado'}, status=404)
    else:
        return JsonResponse({'error': 'metodo no soportado'}, status=405)


# --- GESTIÓN DE URLS ---


def crear_cadena():
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_0123456789'
    result = ''
    for i in range(10):
        result = result + chars[random.randint(0, len(chars)-1)]
    return result

@csrf_exempt
def crear_url(request):
    if request.method != "POST":
        return error_method
    
    data = json.loads(request.body)

    session_token = request.headers.get("Authorization", None)
    try:
        user = Tusers.objects.get(session_token = session_token)
    except Tusers.DoesNotExist:
        return JsonResponse({'error': "request.headers"}, status=403)

    old_route = data["url"]
    try:
        old_url = Turls.objects.get(old_route = old_route)
    except Turls.DoesNotExist:
        newroute = crear_cadena()
        newUrl = Turls(
            old_route = old_route,
            new_route = newroute,
            clicks = 0,
            fcreacion = date.today(),
            creator = user
        )
        newUrl.save()
        return JsonResponse({"new_url" : newroute}, safe=False, json_dumps_params={'ensure_ascii': False})
    else:
        return JsonResponse({'error': "No se ha podido crear la Url"}, status=404)

# def devolver_url(request, old_url):
#     if request.method != "GET":
#         return error_method
    
#     try:
#         url = Turls.objects.get(old_route = old_url)
#         respuesta = {
#             "new_url":  url.new_route
#         }
#         return JsonResponse(respuesta, safe=False, json_dumps_params={'ensure_ascii': False})
#     except Tusers.DoesNotExist:
#         return JsonResponse({'error': "La url no existe"}, status=404)
    

 
# --- REDIRECCIÓN ---

def redirect_url(request, url):
    if request.method != "GET":
        return error_method
    
    try:
        url = Turls.objects.get(new_route = url)
        respuesta = {
            "old_url":url.old_route,
        }
        return JsonResponse(respuesta, safe=False, json_dumps_params={'ensure_ascii': False})
    except Turls.DoesNotExist:
        return JsonResponse({"error": "La url no existe"}, status=404)
        return JsonResponse({'error': "No se ha podido crear la Url"}, status=400)