class balok {
  panjang: number = 0;
  lebar: number = 0;
  tinggi: number = 0;
  constructor(panjang: number, lebar: number, tinggi: number) {
    this.panjang = panjang;
    this.lebar = lebar;
    this.tinggi = tinggi;
  }
}

function persegi(sisi:number) {
  return sisi*sisi
}

function keliling(sisi:number) {
  return sisi*4
}

function segitiga(tinggi:number, alas:number) {
  return alas*0.5*tinggi
}

console.log(persegi(4));
console.log(segitiga(2, 8));

console.log();