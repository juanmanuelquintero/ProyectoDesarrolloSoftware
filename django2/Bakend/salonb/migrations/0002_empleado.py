# Generated by Django 5.2 on 2025-04-22 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('salonb', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('id_empleado', models.IntegerField(db_column='ID_empleado', primary_key=True, serialize=False)),
                ('nombre1', models.CharField(db_column='Nombre1', max_length=50)),
                ('nombre2', models.CharField(blank=True, db_column='Nombre2', max_length=50, null=True)),
                ('apellido1', models.CharField(db_column='Apellido1', max_length=50)),
                ('apellido2', models.CharField(blank=True, db_column='Apellido2', max_length=50, null=True)),
                ('telefono1', models.CharField(db_column='Telefono1', max_length=15)),
                ('telefono2', models.CharField(blank=True, db_column='Telefono2', max_length=15, null=True)),
                ('email', models.CharField(db_column='Email', max_length=100, unique=True)),
                ('direccion', models.CharField(db_column='Direccion', max_length=100)),
                ('cargo_empleado', models.CharField(db_column='Cargo_empleado', max_length=50)),
            ],
            options={
                'db_table': 'empleado',
                'managed': False,
            },
        ),
    ]
