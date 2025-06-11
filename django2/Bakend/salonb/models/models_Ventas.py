from django.db import models

class Ventas(models.Model):
    id_venta = models.BigAutoField(db_column='ID_venta', primary_key=True)  # Field name made lowercase.
    fecha_venta = models.DateField(db_column='Fecha_venta', auto_now_add=True)  # Field name made lowercase.
    id_cliente = models.IntegerField(db_column='ID_cliente', blank=True, null=True)  # Field name made lowercase.
    id_empleado = models.IntegerField(db_column='ID_empleado', blank=True, null=True)  # Field name made lowercase.
    total_venta = models.DecimalField(db_column='Total_venta', max_digits=10, decimal_places=2)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ventas'