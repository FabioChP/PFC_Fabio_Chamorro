from django.db import models

class Tusers(models.Model):
    uname = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    passwd = models.CharField(max_length=100)
    session_token = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tusers'

class Turls(models.Model):
    old_route = models.CharField(max_length=200)
    new_route = models.CharField(max_length=100)
    clicks = models.IntegerField()
    fcreacion = models.DateTimeField()
    creator = models.ForeignKey(Tusers, models.DO_NOTHING, db_column='creator')

    class Meta:
        managed = False
        db_table = 'turls'

