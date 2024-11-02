  # apps/user_management/serializers.py
  from rest_framework import serializers
  from .models import User, Department
  from django.contrib.auth.models import Group

  class DepartmentSerializer(serializers.ModelSerializer):
      class Meta:
          model = Department
          fields = '__all__'

  class GroupSerializer(serializers.ModelSerializer):
      class Meta:
          model = Group
          fields = '__all__'

  class UserSerializer(serializers.ModelSerializer):
      department = DepartmentSerializer(read_only=True)
      groups = GroupSerializer(many=True, read_only=True)

      class Meta:
          model = User
          fields = ['id', 'username', 'email', 'department', 'groups', 'is_active']