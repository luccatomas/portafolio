from django.db import models
from django.db.models.fields.files import ImageField


# Create your models here.
class Proyectos(models.Model):
    titulo = models.CharField(max_length=200)
    imagen = ImageField(upload_to="portafolio/imagen/")
    url = models.URLField()
    descripcion = models.TextField()