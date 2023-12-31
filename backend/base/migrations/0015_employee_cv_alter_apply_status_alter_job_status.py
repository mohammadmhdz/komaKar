# Generated by Django 4.2.3 on 2023-08-04 15:42

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_employee_workexperience_language_education_apply'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='cv',
            field=models.FileField(blank=True, null=True, upload_to='', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf'])]),
        ),
        migrations.AlterField(
            model_name='apply',
            name='status',
            field=models.CharField(choices=[('در انتظار بررسی', 'در انتظار بررسی'), ('بررسی شده', 'بررسی شده'), ('رد شده', 'رد شده'), ('استخدام شده', 'استخدام شده')], max_length=15),
        ),
        migrations.AlterField(
            model_name='job',
            name='status',
            field=models.CharField(choices=[('فعال', 'فعال'), ('درانتظار تایید', 'درانتظار تایید'), ('تکمیل شده', 'تکمیل شده'), ('منقضی شده', 'منقضی شده')], max_length=15),
        ),
    ]
