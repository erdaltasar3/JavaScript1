let sayi = Number(prompt("sayi giriniz : "));

r = 0;
if (sayi == 2) {
    console.log("sayi asal !");
}else{
    for (let index = 2; index < sayi; index++) {
        if (sayi%index==0) {
            r=1;
            break
        }
    }

    if (r == 1) {
        console.log("sayi asal degil !");
    }else{
        console.log("sayi asal !");
    }
}