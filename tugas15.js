console.log('Nilai AB : 8')
console.log('Nilai BC : 6')

function sisiSegitiga(){
    var x = 8;
    var y = 6;
    var z = (Math.sqrt(Math.pow(x,2)+Math.pow(y,2)));

    console.log('panjang sisi AC pada segitiga siku-siku tersebut adalah : ' + z);
}

sisiSegitiga();