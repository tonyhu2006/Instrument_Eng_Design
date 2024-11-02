  # apps/user_management/models.py
  from django.contrib.auth.models import AbstractUser, Group
  from django.db import models

  class User(AbstractUser):
      department = models.ForeignKey('Department', on_delete=models.SET_NULL, null=True, related_name='users')
      groups = models.ManyToManyField(Group, related_name='users')

  class Department(models.Model):
      name = models.CharField(max_length=100)

      def __str__(self):
          return self.name