# Generated by Django 4.2 on 2023-05-15 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0002_alter_treatmenthistory_patient_allowedappointments'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='gender',
            field=models.CharField(default='male', max_length=10),
            preserve_default=False,
        ),
    ]
