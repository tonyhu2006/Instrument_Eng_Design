  # apps/calculations/tasks.py
  from back_end_django.backend_main.celery import shared_task
  from .models import Instrument
  from .services import perform_calculation

  @shared_task
  def calculate_instrument(instrument_id):
      instrument = Instrument.objects.get(id=instrument_id)
      result = perform_calculation(instrument)
      instrument.calculation_result = result
      instrument.save()