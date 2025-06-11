from rest_framework import viewsets
from ..models.models_DetalleVenta import DetalleVenta
from ..serializers import DetalleVentaSerializer

class DetalleVentaViewSet(viewsets.ModelViewSet):
    serializer_class = DetalleVentaSerializer

    def get_queryset(self):
        queryset = DetalleVenta.objects.all()
        id_detalle_venta = self.request.query_params.get('id_detalle_venta')

        if id_detalle_venta:
            queryset = queryset.filter(id_detalle_venta=id_detalle_venta)
        
        return queryset