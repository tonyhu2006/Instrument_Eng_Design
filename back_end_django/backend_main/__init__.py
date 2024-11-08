  # back_end_django/__init__.py
from .celery import app as celery_app

__all_= ['celery_app']