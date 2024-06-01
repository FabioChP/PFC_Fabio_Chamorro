from django.shortcuts import render
from .models import Tusers, Turls
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password, make_password
import datetime
import json, jwt

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

def verify_token(request):
	token = request.META.get('HTTP_AUTHORIZATION', None)
	if not token:
		return JsonResponse({'message': 'Token is missing'}, status=401), None	

	try:
		if token.startswith('Bearer '):
			token = token.split(' ')[1]
		
		payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
		return None, payload
	except jwt.ExpiredSignatureError:
		return JsonResponse({'message':'Token has expired!'}, status=401), None
	except jwt.InvalidTokenError:
		return JsonResponse({'message': 'Invalid token!'}, status=401), None	


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

# --- GESTIÓN DE SESIONES ---

@csrf_exempt
def inicio_sesion(request):
    return JsonResponse({'error': 'Usuario existente'}, status=404)