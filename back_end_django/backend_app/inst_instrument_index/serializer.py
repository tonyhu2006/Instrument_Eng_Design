# backend/apps/instrument_management/serializers.py
from rest_framework import serializers
from .models import Instrument

class InstrumentSerializer(serializers.ModelSerializer):
  class Meta:
      model = Instrument
      fields = ['tag', 'type', ...]

  def validate(self, data):
      # Custom validation logic
      return data