# backend/config/urls.py
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
 openapi.Info(
    title="Instrument Engineering Design Software API",
    default_version='v1',
    description="API documentation for Instrument Engineering Design Software",
 ),
 public=True,
)

urlpatterns = [
  # ... other urls
  path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]