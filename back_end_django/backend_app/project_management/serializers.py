  # apps/project_management/serializers.py
  from rest_framework import serializers
  from .models import Project
  from user_management.serializers import UserSerializer

  class ProjectSerializer(serializers.ModelSerializer):
      owner = UserSerializer(read_only=True)
      collaborators = UserSerializer(many=True, read_only=True)

      class Meta:
          model = Project
          fields = ['id', 'name', 'description', 'owner', 'collaborators', 'created_at', 'updated_at']