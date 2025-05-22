from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer
from .models import Empleado
from .serializers import EmpleadoSerializer

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
