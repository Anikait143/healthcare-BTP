# Generated by Django 4.2 on 2023-05-15 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0003_patient_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicine',
            name='With',
            field=models.TextField(default='anyway'),
            preserve_default=False,
        ),
    ]