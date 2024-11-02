from django.core.cache import cache
from ..api.v1.serializers import UserSerializer

def get_user_data(user_id):
  cache_key = f'user_{user_id}'
  cached_data = cache.get(cache_key)
  
  if not cached_data:
      try:
          user = User.objects.get(id=user_id)
          # Serialize for API response
          serializer = UserSerializer(user)
          cached_data = serializer.data
          cache.set(cache_key, cached_data, timeout=300)
      except User.DoesNotExist:
          return None
          
  return cached_data