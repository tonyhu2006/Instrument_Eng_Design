  # apps/user_management/views.py
  from rest_framework import viewsets, permissions
  from .models import User, Department
  from .serializers import UserSerializer, DepartmentSerializer

  class UserViewSet(viewsets.ModelViewSet):
      queryset = User.objects.all()
      serializer_class = UserSerializer
      permission_classes = [permissions.IsAuthenticated]

      def get_queryset(self):
          user = self.request.user
          if user.is_superuser:
              return User.objects.all()
          return User.objects.filter(department=user.department)

  class DepartmentViewSet(viewsets.ModelViewSet):
      queryset = Department.objects.all()
      serializer_class = DepartmentSerializer
      permission_classes = [permissions.IsAdminUser]