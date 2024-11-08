  # apps/project_management/models.py
from django.db import models
from django.conf import settings

class Project(models.Model):
      name = models.CharField(max_length=200)
      description = models.TextField()
      owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='owned_projects')
      collaborators = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='projects')
      created_at = models.DateTimeField(auto_now_add=True)
      updated_at = models.DateTimeField(auto_now=True)

      def __str__(self):
          return self.name