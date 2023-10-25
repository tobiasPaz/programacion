#1)
nombreUsuario = input("como te llamas?")

if(nombreUsuario == "Tobias"):
    print(f"Hola {nombreUsuario}, yo tambien me llamo Tobias")
elif(nombreUsuario == "Jose"):
    print(f"hola {nombreUsuario}, mi amigao tambien se llama {nombreUsuario}")
else:
    print(f"hola {nombreUsuario}")

#2)
documentoUsuario = input("tenes documento?")

if (documentoUsuario == "si"):
    edadUsuario = int((input("cual es tu edad?")))
    if(edadUsuario >= 18):
        print("podes pasar")
    else:
        print("no podes pasar")
elif(documentoUsuario == "no"):
    print("no podes pasar")
else:
    print("no te entendi un culo amigo")

