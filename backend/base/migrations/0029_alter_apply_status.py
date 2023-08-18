# Generated by Django 4.2.3 on 2023-08-18 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0028_review_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apply',
            name='status',
            field=models.CharField(choices=[('در انتظار بررسی', 'در انتظار بررسی'), ('بررسی شده', 'بررسی شده'), ('رد شده', 'رد شده')], max_length=15),
        ),
    ]
