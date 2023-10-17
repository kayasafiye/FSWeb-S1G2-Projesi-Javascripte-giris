/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
  let surucuYasi = 19 ;
  if( surucuYasi > 18)
  {
    console.log(true);
  }
  else
  {
    console.log(false);
  }

/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
let birinciDeger = 20 ;
let ikinciDeger = 30;
if( ikinciDeger < birinciDeger)
{
  console.log("Hello World")
}
else
{
let birinciDeger = 40;
console.log(birinciDeger)
}

/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
let sayi = "1999";
let sayiNumber = Number(sayi);
console.log(sayiNumber);
console.log(typeof sayiNumber);

/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/
function carpma(a,b) {
  return a*b;
}
console.log(carpma(7,4));
/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(personage) {
  if (personage < 0) {
      return "Geçersiz yaş"; // Negatif yaş girişi durumu
  } else if (personage === 0) {
      return 0; // İnsan yaşının 0 olması durumu
  } else {
      return personage * 7; // Köpek yaşını hesaplama
  }
}
let personage = 7; 
let kopekYasi = kopeginYasi(personage); // Köpeğin yaşı hesaplanır
console.log("Köpeğin yaşı: " + kopekYasi);

/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/

function oyun(oyuncu, bilgisayar) {
  oyuncu = oyuncu.toLowerCase();
  bilgisayar = bilgisayar.toLowerCase();

  if( oyuncu === bilgisayar){
    return "Beraberlik";
  }
  else if( (oyuncu === "makas" && bilgisayar === "kağıt") || (oyuncu === "kağıt" && bilgisayar === "taş") || (oyuncu === "taş" && bilgisayar === "makas"))
  {
    return "Kazandın!";
  }
  else{
    return "Kaybettin!" ;
  }
}
// let oyuncu = "Kağıt"; 
// let bilgisayar = "Taş"; 
// let sonuc = oyun(oyuncu, bilgisayar); 
// console.log(sonuc);
console.log(oyun("Kağıt","Taş"));

// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yap:
1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/
function bilgisayarinSecimi() {
  let rastgeleSayi = Math.floor(Math.random() * 3); // 0 ile 1 arasında rastgele bir sayı alınır
  if (rastgeleSayi == 0) {
      return "Taş";
  } else if (rastgeleSayi == 1) {
      return "Kağıt";
  } else {
      return "Makas";
  }
}

let oyuncu = "Taş"; // Oyuncunun tercihini girin
let bilgisayar = bilgisayarinSecimi(); // Bilgisayarın tercihini rastgele oluşturun
let sonuc = oyun(oyuncu, bilgisayar); // Oyunu oyna
console.log(sonuc);
// console.log(oyun("Taş",bilgisayarinSecimi()))


/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(km) {
  return km * 0.621371;   // 1 kilometre = 0.621371 mil
}
console.log(milDonusturucu(3))

//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(cm) {
  let feet = cm / 30.48;       // 1 santimetre = 0.0328084 feet
  return feet;
}

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/

let maymunSayisi = 5; // Başlangıçta var olan maymun sayısı
function cocukSarkisi(sayi) {
  return `${sayi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`;
}
while (maymunSayisi > 0) {
   console.log(cocukSarkisi(maymunSayisi)) ;
    maymunSayisi--;
}

/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(examResult) {
  if (examResult >= 90 && examResult <= 100) {
    return 'A aldın';
} else if (examResult >= 80 && examResult < 90) {
    return 'B aldın';
} else if (examResult >= 70 && examResult < 80) {
    return 'C aldın';
} else if (examResult >= 60 && examResult < 70) {
    return 'D aldın';
} else {
    return 'F aldın';
}
}
let examResult = 100; // Sınav sonucunu girin
var not = notHesapla(examResult); // Notu hesapla
console.log(not);

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

function sesliHarfSayaci(metin) {
  // Metindeki sesli harfleri içeren bir dizi oluştur
  let sesliHarfler = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    
  // Sayacı başlat
  let sesliHarfSayisi = 0;
  
  // Metin üzerinde dönerek sesli harfleri say
  for (let i = 0; i < metin.length; i++) {
      if (sesliHarfler.includes(metin[i])) {
          sesliHarfSayisi++;
      }
  }
  return sesliHarfSayisi;
}

let metin = "Hello World"; // Sesli harf sayısını hesaplamak için bir metin girin
let result = sesliHarfSayaci(metin); // Sesli harf sayısını hesapla
console.log("Metindeki sesli harf sayısı: " + result);




/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
