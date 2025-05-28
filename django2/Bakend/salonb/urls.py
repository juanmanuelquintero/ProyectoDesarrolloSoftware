from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet
from .views import EmpleadoViewSet
from .views import VentasViewSet
from .views import DetalleVentaViewSet

router = DefaultRouter()
router.register(r'productos', ProductoViewSet, basename='productos')
router.register(r'empleados', EmpleadoViewSet, basename='empleados')
router.register(r'ventas', VentasViewSet, basename='ventas')
router.register(r'detalleVenta', DetalleVentaViewSet, basename='detalleVenta')


urlpatterns = [
    path('', include(router.urls)),
]