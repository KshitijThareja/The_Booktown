from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import UserSerializer, GroupSerializer, RegisterUserSerializer
from rest_framework import viewsets
from rest_framework.generics import RetrieveAPIView, CreateAPIView

from .models import Book
class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all().order_by('-date_joined')
	serializer_class = UserSerializer
	permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
	queryset = Group.objects.all()
	serializer_class = GroupSerializer
	permission_classes = [permissions.IsAuthenticated]

class UserAPIView(RetrieveAPIView):
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = UserSerializer

	def get_object(self):
		return self.request.user
class RegisterUserAPIView(CreateAPIView):
	permission_classes=[permissions.AllowAny]
	serializer_class=RegisterUserSerializer 
def create_book(request):
    if request.method == 'POST':
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        phone_no = request.POST.get('phone_no')
        address = request.POST.get('address')
        city = request.POST.get('city')
        pin_code = request.POST.get('pin_code')
        no_of_books = request.POST.get('no_of_books')
        book = Book(full_name=full_name, email=email, phone_no=phone_no, address=address, city=city, pin_code=pin_code, no_of_books=no_of_books)
        book.save()
        return JsonResponse({'success': 'Book created successfully!'})
	