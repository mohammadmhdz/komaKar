# Generated by Django 4.2.3 on 2023-08-03 10:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_alter_company_city_alter_job_city'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='verification',
            name='Company',
        ),
    ]
