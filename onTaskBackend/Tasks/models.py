from django.db import models

# Create your models here.
class Task(models.Model):
   name = models.CharField(max_length=255, blank=False)
   class_name = models.CharField(max_length=255, blank=False)
   due_date = models.DateField(blank=False)
   progress = models.IntegerField(blank=False)
   priority = models.BooleanField(blank=False)
   type = models.CharField(max_length=255, blank=False)