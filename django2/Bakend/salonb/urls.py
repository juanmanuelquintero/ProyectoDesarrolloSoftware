from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet
from .views import EmpleadoViewSet

router = DefaultRouter()
router.register(r'productos', ProductoViewSet, basename='productos')
router.register(r'empleados', EmpleadoViewSet, basename='empleados')

urlpatterns = [
    path('', include(router.urls)),
]