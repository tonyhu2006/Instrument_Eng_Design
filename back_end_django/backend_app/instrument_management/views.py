  # apps/instrument_management/views.py
  from rest_framework import viewsets
  from .models import Instrument
  from .serializers import InstrumentSerializer
  from .tasks import calculate_instrument

  class InstrumentViewSet(viewsets.ModelViewSet):
      queryset = Instrument.objects.all()
      serializer_class = InstrumentSerializer

      def perform_create(self, serializer):
          instrument = serializer.save()
          calculate_instrument.delay(instrument.id)