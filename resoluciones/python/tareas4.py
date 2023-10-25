#1)
primerValor = int(input("deme su primer valor"))
segundoValor = int(input("deme su segundo valor"))
tercerValor = int(input("deme su tercer valor"))
def deMenorAMayor(A,B,C):
    while(A == B or B == C or A == C):
        print("ingrese de nuevo sus datos")
        A = int(input("deme su primer valor"))
        B = int(input("deme su segundo valor"))
        C = int(input("deme su tercer valor"))
    if(A > B & B > C):
        return(C,B,A)
    elif(A > C & C > B):
        return(B,C,A)
    elif(B > A & A > C):
        return(C,A,B)
    elif(B > C & C > A):
        return(A,C,B)
    elif(C > B & B > A):
        return(A,B,C)
    elif(C > A & A > B):
        return(B,A,C)
print(deMenorAMayor(primerValor,segundoValor,tercerValor))

#2)
numeros1 = [10,20,30]

def sumatoria(arr):
    auxiliar = 0
    for i in range(0,len(arr),1):
        auxiliar += arr[i]
    return auxiliar
print(sumatoria(numeros1))

#3)
numeros = [6,3,10]
def promediar(arr):
    auxiliar = 0
    for i in range(0,len(arr),1):
        auxiliar += arr[i]
    resultado = auxiliar / len(numeros)
    return resultado
print(promediar(numeros))