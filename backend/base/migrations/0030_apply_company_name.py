# Generated by Django 4.2.3 on 2023-08-21 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0029_alter_apply_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='apply',
            name='company_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]