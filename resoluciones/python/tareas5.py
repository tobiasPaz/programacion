#1))

numeros = [6,5,4,3,2,1]

def ordenarArr(arr):
    for i in range(0,len(arr),1):
        ayudante = 0
        for j in range(i + 1,len(arr),1):
            if(arr[i] > arr[j]):
                ayudante = arr[i]
                arr[i] = arr[j]
                arr[j] = ayudante
    return arr

print(ordenarArr(numeros))

#2)
import random

numeros2 = [6,5,4,3,2,1]
numeroObjetivo = [numeros[random.randint(0,5)]]

def numerObjetivo(arr, numObj):
    for i in range(0,len(arr),1):
        for j in range(i + 1,len(arr),1):
            if(arr[i] + arr[j] == numObj):
                print(f"el numero {arr[i]} + el numero {arr[j]} es igual a: {numObj}")

print(numerObjetivo(numeros))

