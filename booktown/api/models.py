from django.db import models

# Create your models
class Book(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone_no = models.IntegerField()
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    pin_code = models.CharField(max_length=100)
    no_of_books = models.IntegerField()
    username= models.CharField(max_length=100)

    def __str__(self):
        return self.full_name