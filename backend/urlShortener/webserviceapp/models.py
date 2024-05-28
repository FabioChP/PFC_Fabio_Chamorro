# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Users(models.Model):
    uname = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    passwd = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'users'

class Urls(models.Model):
    old_route = models.CharField(max_length=200)
    new_route = models.CharField(max_length=100)
    clicks = models.IntegerField()
    fcreacion = models.DateTimeField()
    user_creador = models.ForeignKey(Users, models.DO_NOTHING, db_column='user_creador')

    class Meta:
        managed = False
        db_table = 'urls'
