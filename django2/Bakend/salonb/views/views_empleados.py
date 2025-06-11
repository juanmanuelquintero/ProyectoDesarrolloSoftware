from rest_framework import viewsets
from ..models.models_Empleado import Empleado
from ..serializers import EmpleadoSerializer

class EmpleadoViewSet(viewsets.ModelViewSet):
    serializer_class = EmpleadoSerializer

    def get_queryset(self):
        queryset = Empleado.objects.all()
        id_empleado = self.request.query_params.get('id_empleado')

        if id_empleado:
            queryset = queryset.filter(id_empleado=id_empleado)
        
        return queryset