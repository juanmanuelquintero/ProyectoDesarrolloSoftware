from django.db import models

class Empleado(models.Model):
    id_empleado = models.IntegerField(db_column='ID_empleado', primary_key=True)  # Field name made lowercase.
    nombre1 = models.CharField(db_column='Nombre1', max_length=50)  # Field name made lowercase.
    nombre2 = models.CharField(db_column='Nombre2', max_length=50, blank=True, null=True)  # Field name made lowercase.
    apellido1 = models.CharField(db_column='Apellido1', max_length=50)  # Field name made lowercase.
    apellido2 = models.CharField(db_column='Apellido2', max_length=50, blank=True, null=True)  # Field name made lowercase.
    telefono1 = models.CharField(db_column='Telefono1', max_length=15)  # Field name made lowercase.
    telefono2 = models.CharField(db_column='Telefono2', max_length=15, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', unique=True, max_length=100)  # Field name made lowercase.
    direccion = models.CharField(db_column='Direccion', max_length=100)  # Field name made lowercase.
    cargo_empleado = models.CharField(db_column='Cargo_empleado', max_length=50)  # Field name made lowercase.
    contraseña = models.CharField(db_column='Contraseña', max_length=50)

    class Meta:
        managed = False
        db_table = 'empleado'