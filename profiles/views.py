
from django.shortcuts import render, redirect
from django.views.decorators.http import require_http_methods


def home(request):
    return render(request, 'profiles/home.html')

def manage(request):
    return render(request, 'profiles/manage.html')

def ianne(request):
    return render(request, 'profiles/ianne.html')

def angel(request):
    return render(request, 'profiles/angel.html')

def jenny(request):
    return render(request, 'profiles/jenny.html')

def gado(request):
    return render(request, 'profiles/gado.html')



@require_http_methods(["POST"])
def check_pin(request):

    pin1 = request.POST.get('pin1')
    pin2 = request.POST.get('pin2')
    pin3 = request.POST.get('pin3')
    pin4 = request.POST.get('pin4')
    

    full_pin = f"{pin1}{pin2}{pin3}{pin4}"


    if full_pin == '0101':
        return redirect('ianne')
    elif full_pin == '0202':
        return redirect('angel')
    elif full_pin == '0303':
        return redirect('jenny')
    elif full_pin == '0404':
        return redirect('gado')
    else:
        return render(request, 'profiles/home.html', {'error': 'Invalid PIN'})
