  # back_end_django/celery.py
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_main.settings')

app = Celery('backend_main')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()