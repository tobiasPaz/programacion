#1)
añoDeNacimiento = int(input("en que año nacisite?"))
añoactual = int(input("en que años estamos?"))

def calculator3000(añoActual,añoNacimiento):
    return (añoActual - añoNacimiento)

resultado = calculator3000(añoactual,añoDeNacimiento)

print(f"su edad es de {resultado} años")

#2)
salarioMensual = int(input("cual es tu salario mensual?"))

def SAnual(SM):
    return SM * 12

def SSemanal(SM):
    return SM / 4

salarioSemanal = SSemanal(salarioMensual)
salarioAnual = SAnual(salarioMensual)

print(F"tu salario anual es de {salarioAnual} y tu salario semanala es de {salarioSemanal}")