from rest_framework import viewsets
from ..models.models_Ventas import Ventas
from ..serializers import VentasSerializer

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