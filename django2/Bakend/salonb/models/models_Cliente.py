from django.db import models

class Cliente(models.Model):
    id_cliente = models.IntegerField(db_column='ID_cliente', primary_key=True)  # Field name made lowercase.
    nombre1 = models.CharField(db_column='Nombre1', max_length=50)  # Field name made lowercase.
    nombre2 = models.CharField(db_column='Nombre2', max_length=50, blank=True, null=True)  # Field name made lowercase.
    apellido1 = models.CharField(db_column='Apellido1', max_length=50)  # Field name made lowercase.
    apellido2 = models.CharField(db_column='Apellido2', max_length=50, blank=True, null=True)  # Field name made lowercase.
    telefono1 = models.CharField(db_column='Telefono1', max_length=15)  # Field name made lowercase.
    telefono2 = models.CharField(db_column='Telefono2', max_length=15, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'cliente'