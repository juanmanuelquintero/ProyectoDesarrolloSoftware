from django.db import models

class Producto(models.Model):
    id_producto = models.IntegerField(db_column='ID_producto', primary_key=True)  
    nombre = models.CharField(db_column='Nombre', max_length=100)  
    descripcion = models.TextField(db_column='Descripcion')  
    precio_compra_cu = models.DecimalField(db_column='Precio_compra_CU', max_digits=10, decimal_places=2)          
    precio_venta_cu = models.DecimalField(db_column='Precio_venta_CU', max_digits=10, decimal_places=2)  
    ganancia = models.DecimalField(db_column='Ganancia', max_digits=10, decimal_places=2)  
    marca = models.CharField(db_column='Marca', max_length=50)  
    categoria = models.CharField(db_column='Categoria', max_length=50)  
    stock = models.IntegerField(db_column='Stock')  

    class Meta:
        managed = False
        db_table = 'producto'