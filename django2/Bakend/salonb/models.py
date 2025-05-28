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

class Ventas(models.Model):
    id_venta = models.BigAutoField(db_column='ID_venta', primary_key=True)  # Field name made lowercase.
    fecha_venta = models.DateField(db_column='Fecha_venta', auto_now_add=True)  # Field name made lowercase.
    id_cliente = models.IntegerField(db_column='ID_cliente', blank=True, null=True)  # Field name made lowercase.
    id_empleado = models.IntegerField(db_column='ID_empleado', blank=True, null=True)  # Field name made lowercase.
    total_venta = models.DecimalField(db_column='Total_venta', max_digits=10, decimal_places=2)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ventas'

class DetalleVenta(models.Model):
    id_detalle_venta = models.BigAutoField(db_column='ID_detalle_venta', primary_key=True)  # Field name made lowercase.
    id_venta = models.IntegerField(db_column='ID_venta', blank=True, null=True)  # Field name made lowercase.
    id_producto = models.IntegerField(db_column='ID_producto', blank=True, null=True)  # Field name made lowercase.
    cantidad = models.IntegerField(db_column='Cantidad')  # Field name made lowercase.
    subtotal = models.DecimalField(db_column='Subtotal', max_digits=10, decimal_places=2)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'detalle_venta'