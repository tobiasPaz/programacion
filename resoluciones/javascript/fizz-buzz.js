var N

for (let N=1;N<100;N++) {
    if (N%3==0 & N%5==0) {
        document.write("fizzbuzz")
    } 
    else if (N%3==0) {
        document.write("fizz")
    } 
    else if (N%5==0) {
        document.write("buzz")
    } 
    else {
        document.write(N)
    }
    document.write("<br>")
}


for (let N=1;N<100;N++) {
    let texto = ""
    if (N%3===0) {
        texto += "Fizz"
    }
    if (N%5===0) {
        texto += "Buzz"
    }
    console.log(texto||N)
}