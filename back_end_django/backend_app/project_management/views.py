  # apps/project_management/views.py
  from rest_framework import viewsets, permissions
  from .models import Project
  from .serializers import ProjectSerializer
  from .permissions import IsOwnerOrReadOnly

  class ProjectViewSet(viewsets.ModelViewSet):
      serializer_class = ProjectSerializer
      permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

      def get_queryset(self):
          user = self.request.user
          return Project.objects.filter(collaborators=user)

      def perform_create(self, serializer):
          serializer.save(owner=self.request.user)
