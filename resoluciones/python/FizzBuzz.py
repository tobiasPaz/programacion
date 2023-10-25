for i in range(0,100,1):
    ayudante = ""
    if (i % 3 == 0):
        ayudante +="fizz"
    if(i % 5 == 0):
        ayudante +="buzz"
    print(ayudante or i)
