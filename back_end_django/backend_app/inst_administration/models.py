  # apps/user_management/models.py
from django.contrib.auth.models import AbstractUser, Group
from django.contrib.auth.models import AbstractUser, Permission
from django.db import models

class User(AbstractUser):
      department = models.ForeignKey('Department', on_delete=models.SET_NULL, null=True, related_name='users')
      groups = models.ManyToManyField(Group, related_name='users')
       # Override the user_permissions field to change the related_name
      user_permissions = models.ManyToManyField(
          Permission,
          verbose_name='user permissions',
          blank=True,
          help_text='Specific permissions for this user.',
          related_name='custom_user_set'  # Change this to a unique name
      )
class Department(models.Model):
      name = models.CharField(max_length=100)

      def __str__(self):
          return self.name