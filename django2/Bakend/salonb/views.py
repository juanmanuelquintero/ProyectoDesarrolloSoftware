from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer
from .models import Empleado
from .serializers import EmpleadoSerializer
from .models import Ventas
from .serializers import VentasSerializer
from .models import DetalleVenta
from .serializers import DetalleVentaSerializer
from .models import Cliente
from .serializers import ClienteSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer

    def get_queryset(self):
        queryset = Producto.objects.all()
        id_producto = self.request.query_params.get('id_producto')

        if id_producto:
            queryset = queryset.filter(id_producto=id_producto)
        
        return queryset
    

class EmpleadoViewSet(viewsets.ModelViewSet):
    serializer_class = EmpleadoSerializer

    def get_queryset(self):
        queryset = Empleado.objects.all()
        id_empleado = self.request.query_params.get('id_empleado')

        if id_empleado:
            queryset = queryset.filter(id_empleado=id_empleado)
        
        return queryset

class VentasViewSet(viewsets.ModelViewSet):
    serializer_class = VentasSerializer

    def get_queryset(self):
        queryset = Ventas.objects.all()
        id_venta = self.request.query_params.get('id_venta')
        usar_max_id = self.request.query_params.get('usar_max_id')

        if id_venta:
            queryset = queryset.filter(id_venta=id_venta)

        if usar_max_id:
            venta_con_max_id = Ventas.objects.order_by('-id_venta').first()
            if venta_con_max_id:
                queryset = queryset.filter(id_venta=venta_con_max_id.id_venta)

        return queryset

class DetalleVentaViewSet(viewsets.ModelViewSet):
    serializer_class = DetalleVentaSerializer

    def get_queryset(self):
        queryset = DetalleVenta.objects.all()
        id_detalle_venta = self.request.query_params.get('id_detalle_venta')

        if id_detalle_venta:
            queryset = queryset.filter(id_detalle_venta=id_detalle_venta)
        
        return queryset

class ClienteViewSet(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer

    def get_queryset(self):
        queryset = Cliente.objects.all()
        id_cliente = self.request.query_params.get('id_cliente')

        if id_cliente:
            queryset = queryset.filter(id_cliente=id_cliente)
        
        return queryset
