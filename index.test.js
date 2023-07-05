const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
  //Arrange
  const input = { isim: '  jane  ' , yas: ' 34 '};
  const expected = { isim: 'jane' , yas: ' 34 '};  
  let actual;  
  beforeEach(()=>{
  //Act
    actual= utils.verileniTrimle(input,"isim")
  })
  test('[3] verilen propu trimliyor', () => {
  //Assert
    expect(actual).toEqual(expected);
  })
  //Assert
  test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {
    expect(actual.yas).toEqual(expected.yas);
  })
})

describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  //Arrange
  const inputTamsayilar =  [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 },{tamsayi:8}];
  const expected = 8; 
  //Act
  actualMax=utils.enBuyukTamsayiyiBul(inputTamsayilar) 
  test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 8 }', () => {
    expect(actualMax).toEqual(expected);
  })
})

describe('[Görev 4] Sayici', () => {
  //Arrange
  let sayici
  beforeEach(() => {
    sayici = new utils.Sayici(3) // her test yeni bir sayı ile başlatılıyor
  })
  test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {
  //Act
  let actualSayici = sayici.asagiSay();
  //Assert
    expect(actualSayici).toEqual(3);
  })
  // test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {})
  test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    //Act
    let i =0;
    do{
      sayici.asagiSay();
      i++
    }while(i<50)
    let actualSayici=sayici.asagiSay();
    //Assert
    expect(actualSayici).toEqual(0);

  })
})

describe('[Görev 5] Mevsimler', () => {
  //Arrange
  let mevsimler
  //Act
  beforeEach(() => {
    mevsimler = new utils.Mevsimler() // her test yeni bir mevsimle başlar
  })
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
  //ACT
  let actualMevsim =mevsimler.sonraki();  
  //Assert
  expect(actualMevsim).toEqual("yaz")

  })
  // test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {})
  // test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {})
  // test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {})
  // test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {})
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
  //Act
    i=0;
    while(i<39)
    {
      mevsimler.sonraki()
      i++
    }
  let actualMevsim =mevsimler.sonraki();  
  //Assert
  expect(actualMevsim).toEqual("ilkbahar")
  })
})

describe('[Görev 6] Araba', () => {
  //Arrange
  let focus
  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30) // her test yeni bir araba oluşturur
  })
  test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    //ACT
    let actualOdometer = focus.sur(100)
    //Assert
    expect(actualOdometer).toBe(100);

  })
  // test('[16] arabayı sürmek benzin tüketiyor', () => {})
  // test('[17] benzinalma arabayı sürmeye izin veriyor', () => {})
  test('[18] dolu depoya benzin alma etki etmiyor', () => {
    //ACT
    focus.sur(600)
    focus.benzinal(500)
    focus.sur(300)
    let actualDepo = focus.benzinal(500)
    //Assert
    expect(actualDepo).toBe(600);

  })
})

describe('[Görev 7] asenkronCiftSayi', () => {
  test('[19] bir çift sayı verilirse true çözümlüyor', async() => {
    //Act
    let actualBoolean = await utils.asenkronCiftSayi(2);
    //Assert
    expect(actualBoolean).toBe(true);


  })
  test('[20] tek sayı verilirse false çözümlüyor',async () => {
 //Act
 let actualBoolean = await utils.asenkronCiftSayi(3);
 //Assert
 expect(actualBoolean).toBe(false);

  })
})
