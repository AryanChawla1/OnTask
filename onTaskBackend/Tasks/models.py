from django.db import models

# Create your models here.
class Task(models.Model):
   name = models.CharField(max_length=255, blank=False)
   className = models.CharField(max_length=255, blank=False)
   dueDate = models.DateField(blank=False)
   progress = models.IntegerField(blank=False)
   priority = models.BooleanField(blank=False)
   type = models.CharField(max_length=255, blank=False)