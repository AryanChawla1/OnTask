# Generated by Django 4.0.3 on 2022-08-20 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('class_name', models.CharField(max_length=255)),
                ('due_date', models.DateField()),
                ('progress', models.IntegerField()),
                ('priority', models.BooleanField()),
                ('type', models.CharField(max_length=255)),
            ],
        ),
    ]