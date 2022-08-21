from asyncio import Task
from rest_framework import serializers
from Tasks.models import Task


class TaskSerializer(serializers.ModelSerializer):
   class Meta:
      model = Task
      fields = ('id', 'name', 'className', 'dueDate', 'progress', 'priority', 'type')
