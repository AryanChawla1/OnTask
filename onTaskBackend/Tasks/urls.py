from django.urls import path
from Tasks import views


urlpatterns = [
   path('get/tasks', views.tasks),
   path('post/task', views.add_task),
   path('get/task/<pk>', views.task),
   path('put/task/<pk>', views.edit_task),
]
