# Generated by Django 4.2.3 on 2023-07-15 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0011_variacionproducto'),
    ]

    operations = [
        migrations.AddField(
            model_name='productos',
            name='principal',
            field=models.BooleanField(default=False),
        ),
    ]
