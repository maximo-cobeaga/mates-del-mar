# Generated by Django 4.2.3 on 2023-07-08 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0004_productos_oferta_productos_preciodolar'),
    ]

    operations = [
        migrations.AddField(
            model_name='productos',
            name='etiqueta',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]