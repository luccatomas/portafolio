from django.urls import path,include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from portafolioback import views

router = routers.DefaultRouter()
router.register(r'proyecto',views.ProyectoView,'proyecto')

urlpatterns = [
    path('api/v1/',include(router.urls)),
    path('docs/', include_docs_urls(title="Proyecto Api"))
]