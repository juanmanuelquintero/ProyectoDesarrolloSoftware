from rest_framework import viewsets
from ..models.models_Productos import Producto
from ..serializers import ProductoSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer

    def get_queryset(self):
        queryset = Producto.objects.all()
        id_producto = self.request.query_params.get('id_producto')

        if id_producto:
            queryset = queryset.filter(id_producto=id_producto)
        
        return queryset