#1)
primerValor = int(input("deme su primer valor"))
segundoValor = int(input("deme su segundo valor"))
def medidorDelMenor(a,b):
	if (a < b):
		return(a)
	elif (a == b):
		return("tus dos parametros son iguales")
	else:
		return(b)
		
print(medidorDelMenor(primerValor,segundoValor))

#2)
primerValor1 = int(input("deme su primer valor"))
segundoValor1 = int(input("deme su segundo valor"))
tercerValor1 = int(input("deme su tercer valor"))

def medidorDelMayor(A,B,C):
    if(A > B & A > C):
        return(A)
    elif(B > A & B > C):
        return(B)
    elif(C > B & C > A):
        return(C)

print(medidorDelMayor(primerValor1,segundoValor1,tercerValor1))

#3)
def deMenorAMayor(A,B,C):
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

print(deMenorAMayor(primerValor1,segundoValor1,tercerValor1))