from rest_framework.viewsets import ModelViewSet
from .models import Attendance
from .serializers import AttendanceSerializer
from django_filters.rest_framework import DjangoFilterBackend


class AttendanceViewSet(ModelViewSet):

    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer
    
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["date", "status"]