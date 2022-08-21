from django.http import JsonResponse
from django.shortcuts import render
from Tasks.models import Task
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from Tasks.serializers import TaskSerializer
# Create your views here.

@api_view(['GET'])
def tasks(request):

   if request.method == 'GET':
      tasks = Task.objects.all()
      task_serializer = TaskSerializer(tasks, many=True)
      return JsonResponse(task_serializer.data, safe=False)


@api_view(['POST'])
def add_task(request):

   if request.method == 'POST':
      task_date = JSONParser().parse(request)
      task_serializer = TaskSerializer(data=task_date)
      if task_serializer.is_valid():
         task_serializer.save()
         return JsonResponse(task_serializer.data, status=status.HTTP_201_CREATED)
      return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def task(request, pk):

   try:
      task = Task.objects.get(pk=pk)
   except Task.DoesNotExist:
       return JsonResponse({'message': 'The task does not exist'}, status=status.HTTP_404_NOT_FOUND)

   if request.method == 'GET':
      task_serializer = TaskSerializer(task)
      return JsonResponse(task_serializer.data)


@api_view(['PUT'])
def edit_task(request, pk):
   try:
      task = Task.objects.get(pk=pk)
   except Task.DoesNotExist:
      return JsonResponse({'message': 'The task does not exist'}, status=status.HTTP_404_NOT_FOUND)
   
   if request.method == 'PUT':
      task_data = JSONParser().parse(request)
      task_serializer = TaskSerializer(task, data=task_data)
      if task_serializer.is_valid():
         task_serializer.save()
         return JsonResponse(task_serializer.data)
      return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)