  # back_end_django/__init__.py
  from .backend_main.celery import app as celery_app

  __all__ = ['celery_app']