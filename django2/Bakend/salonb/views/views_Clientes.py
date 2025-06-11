from rest_framework import viewsets
from ..models.models_Cliente import Cliente
from ..serializers import ClienteSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer

    def get_queryset(self):
        queryset = Cliente.objects.all()
        id_cliente = self.request.query_params.get('id_cliente')

        if id_cliente:
            queryset = queryset.filter(id_cliente=id_cliente)
        
        return queryset
