from django.shortcuts import render

from .models import *


def index(request):
    board = TodoBoard.objects.get(pk=1)

    context = {'board': board}
    return render(request, 'index.html', context)
