
from .serializer import ProyectosSerializer
from rest_framework import viewsets
from .models import Proyectos

class ProyectoView(viewsets.ModelViewSet):
    serializer_class = ProyectosSerializer
    queryset = Proyectos.objects.all()
    
