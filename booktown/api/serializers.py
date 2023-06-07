from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Book, Contact

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = User
		fields = ['url', 'username', 'email', 'groups']
class RegisterUserSerializer(serializers.ModelSerializer):
	def create(self, validated_data):
		user = User.objects.create_user(
			      email=validated_data['email'], 
				  username=validated_data['username'], 
				  password=validated_data['password'])
		return user
	class Meta:
		model = User
		fields = ['url', 'username', 'password','email', 'groups']
		

class GroupSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Group
		fields = ['url', 'name']
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__' 
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__' 