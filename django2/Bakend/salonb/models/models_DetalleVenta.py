from django.db import models

class DetalleVenta(models.Model):
    id_detalle_venta = models.BigAutoField(db_column='ID_detalle_venta', primary_key=True)  # Field name made lowercase.
    id_venta = models.IntegerField(db_column='ID_venta', blank=True, null=True)  # Field name made lowercase.
    id_producto = models.IntegerField(db_column='ID_producto', blank=True, null=True)  # Field name made lowercase.
    cantidad = models.IntegerField(db_column='Cantidad')  # Field name made lowercase.
    subtotal = models.DecimalField(db_column='Subtotal', max_digits=10, decimal_places=2)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'detalle_venta'