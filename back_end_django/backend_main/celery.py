  # back_end_django/celery.py
  import os
  from back_end_django.backend_main.celery import Celery

  os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project_name.settings')

  app = Celery('project_name')
  app.config_from_object('django.conf:settings', namespace='CELERY')
  app.autodiscover_tasks()