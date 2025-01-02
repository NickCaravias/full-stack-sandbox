Sure, here's the content for the file `/django-server/django-server/api/urls.py`:

from django.urls import path
from .views import YourViewName  # Replace with your actual view names

urlpatterns = [
    path('your-endpoint/', YourViewName.as_view(), name='your_endpoint'),  # Replace with your actual endpoint and view
]