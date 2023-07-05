/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  // ✨ kodlar buraya
  for (const property in obj){
    obj[property]=obj[property].trim()
  }
  return obj;
}

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  // ✨ kodlar buraya
  for (const property in obj){
    property === prop ? obj[property]=obj[property].trim(): obj[property]=obj[property];
  }
  return obj;
}

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  return Math.max(...tamsayilar.map(item=>item.tamsayi));
}

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */
  
  // ✨ gerekli propları ekleyin
  //Alternative Solution
  // this.initial = ilkSayi
  // this.first = true
  

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.asagiSay = () => {
    // ✨ kodlar buraya
    //Alternative Solution
  //   if (!this.first) {
  //     if (this.initial <= 0) {
  //       return 0
  //     } else {
  //       this.initial = this.initial - 1
  //       return this.initial
  //     }
  //   } else {
  //     this.first = false
  //     return this.initial
  //   }
  // }
    return ilkSayi <=0 ? 0 : ilkSayi--;//first gives you ilksayi then reduces
  }
}


function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  // ✨ gerekli propları ekleyin
  let mevsimlerArray =["ilkbahar","yaz","sonbahar","kış",]
  //Çözüm 2
    // let mevsimler = ["ilkbahar","yaz","sonbahar","kış"];
    // let currentIndex = 0;


  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.sonraki = () => {
    // ✨ kodlar buraya 
    mevsimlerArray.push(mevsimlerArray.shift());
    return mevsimlerArray[0];
    //Çözüm 2
    // currentIndex = currentIndex + 1;
    // currentIndex = currentIndex % 4; //mod alma 
    // let mevsim = mevsimler[currentIndex];
    // return mevsim;
  }
}


function Araba(isim,depol,kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */
 
    this.odometer = 0 // araba 0 kilometrede yüklenecek
    this.depo = depol // araba full depoyla yüklenecek
    // ✨ gerekli propları ekleyin
    this.isim=isim
  


  

  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya
    if(gidilecekyol> this.depo*kml){
      this.odometer=this.depo*kml;
      this.depo=0;//depodaki litre kadar gidildiginden depo sifirlaniyor
    }else{
      this.odometer=this.odometer+gidilecekyol;
      this.depo=this.depo-gidilecekyol/kml
    }
    return this.odometer;
  }

  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    // ✨ kodlar buraya
   this.depo+=litre;
   return this.depo>depol ? depol*kml : this.depo*kml;
  }
}

/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
async function asenkronCiftSayi(sayi) {
  // ✨ implement
  return sayi%2===0 ? true:false;

}

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
}
