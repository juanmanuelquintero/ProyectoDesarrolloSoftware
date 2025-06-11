from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.views_Productos import ProductoViewSet
from .views.views_empleados import EmpleadoViewSet
from .views.views_Ventas import VentasViewSet
from .views.views_DetalleVenta import DetalleVentaViewSet
from .views.views_Clientes import ClienteViewSet

router = DefaultRouter()
router.register(r'productos', ProductoViewSet, basename='productos')
router.register(r'empleados', EmpleadoViewSet, basename='empleados')
router.register(r'ventas', VentasViewSet, basename='ventas')
router.register(r'detalleVenta', DetalleVentaViewSet, basename='detalleVenta')
router.register(r'cliente', ClienteViewSet, basename='cliente')


urlpatterns = [
    path('', include(router.urls)),
]