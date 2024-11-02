    # apps/drawing/views.py
    from rest_framework.decorators import action
    from rest_framework.response import Response
    from rest_framework import viewsets
    from .models import Drawing
    from .serializers import DrawingSerializer
    import dxfwrite

    class DrawingViewSet(viewsets.ModelViewSet):
        queryset = Drawing.objects.all()
        serializer_class = DrawingSerializer

        @action(detail=True, methods=['get'])
        def export_dxf(self, request, pk=None):
            drawing = self.get_object()
            dwg = dxfwrite.DXFEngine.drawing(drawing.name)
            # 添加图形元素到dwg...
            dwg.saveas(f'dxf_exports/{drawing.name}.dxf')
            return Response({'status': 'DXF导出成功'}, status=200)