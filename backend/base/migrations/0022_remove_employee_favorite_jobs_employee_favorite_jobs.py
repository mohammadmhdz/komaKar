# Generated by Django 4.2.3 on 2023-08-11 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0021_alter_company_favorite_employee'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='favorite_jobs',
        ),
        migrations.AddField(
            model_name='employee',
            name='favorite_jobs',
            field=models.ManyToManyField(to='base.job'),
        ),
    ]
