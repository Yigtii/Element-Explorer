var elements = [
    { symbol: 'H', name: 'Hidrojen', atomicNumber: 1, atomicWeight: 1.008, properties: 'Renksiz, kokusuz, tatsız gaz.' },
    { symbol: 'He', name: 'Helyum', atomicNumber: 2, atomicWeight: 4.0026, properties: 'Renksiz, kokusuz, tatsız gaz.' },
    { symbol: 'Li', name: 'Lityum', atomicNumber: 3, atomicWeight: 6.94, properties: 'Gümüş beyazı metal.' },
    { symbol: 'Be', name: 'Berilyum', atomicNumber: 4, atomicWeight: 9.0122, properties: 'Gümüş beyazı, hafif, sert metal.' },
    { symbol: 'B', name: 'Bor', atomicNumber: 5, atomicWeight: 10.81, properties: 'Siyah veya kahverengi bir katı, metal olmayan element.' },
    { symbol: 'C', name: 'Karbon', atomicNumber: 6, atomicWeight: 12.011, properties: 'Renksiz, kokusuz, tatsız bir gazdır.' },
    { symbol: 'N', name: 'Azot', atomicNumber: 7, atomicWeight: 14.007, properties: 'Koku olmayan, renksiz, tatsız bir gaz.' },
    { symbol: 'O', name: 'Oksijen', atomicNumber: 8, atomicWeight: 15.999, properties: 'Renksiz, kokusuz, tatsız bir gaz.' },
    { symbol: 'F', name: 'Flor', atomicNumber: 9, atomicWeight: 18.998, properties: 'Rengi açık yeşil gaz.' },
    { symbol: 'Ne', name: 'Neon', atomicNumber: 10, atomicWeight: 20.180, properties: 'Renksiz, kokusuz, tatsız bir gaz.' },
    { symbol: 'Na', name: 'Sodyum', atomicNumber: 11, atomicWeight: 22.989, properties: 'Gümüş beyazı, yumuşak, parlak bir metal.' },
    { symbol: 'Mg', name: 'Magnezyum', atomicNumber: 12, atomicWeight: 24.305, properties: 'Gümüş beyazı, hafif, parlak bir metal.' },
    { symbol: 'Al', name: 'Alüminyum', atomicNumber: 13, atomicWeight: 26.982, properties: 'Gümüş beyazı, hafif, yumuşak bir metal.' },
    { symbol: 'Si', name: 'Silisyum', atomicNumber: 14, atomicWeight: 28.085, properties: 'Mavi-gri metalik parlaklığa sahip katı.' },
    { symbol: 'P', name: 'Fosfor', atomicNumber: 15, atomicWeight: 30.974, properties: 'Renksiz, kokusuz, tatsız bir gaz.' },
    { symbol: 'S', name: 'Sülfür', atomicNumber: 16, atomicWeight: 32.06, properties: 'Küçük bir küre, soluk sarı bir katıdır.' },
    { symbol: 'Cl', name: 'Klor', atomicNumber: 17, atomicWeight: 35.45, properties: 'Zehirli, soluk yeşilimsi sarı bir gaz.' },
    { symbol: 'Ar', name: 'Argon', atomicNumber: 18, atomicWeight: 39.948, properties: 'Renksiz, kokusuz, tatsız bir gaz.' },
    { symbol: 'K', name: 'Potasyum', atomicNumber: 19, atomicWeight: 39.098, properties: 'Gümüş beyazı, yumuşak bir metal.' },
    { symbol: 'Ca', name: 'Kalsiyum', atomicNumber: 20, atomicWeight: 40.078, properties: 'Gümüş beyazı, sert, alkali toprak metalidir.' },
    { symbol: 'Sc', name: 'Skandiyum', atomicNumber: 21, atomicWeight: 44.956, properties: 'Gümüş beyazı, sert, parlak, dövülebilir, mıknatıslanabilen bir metal.' },
    { symbol: 'Ti', name: 'Titanyum', atomicNumber: 22, atomicWeight: 47.867, properties: 'Gümüş beyazı, hafif, güçlü, parlak, paslanmaz bir metal.' },
    { symbol: 'V', name: 'Vanadyum', atomicNumber: 23, atomicWeight: 50.942, properties: 'Gümüş beyazı, sert, parlak, dövülebilir bir metal.' },
    { symbol: 'Cr', name: 'Krom', atomicNumber: 24, atomicWeight: 51.996, properties: 'Gümüş gri, sert, kırılgan, parlak bir metaldir.' },
    { symbol: 'Mn', name: 'Manganez', atomicNumber: 25, atomicWeight: 54.938, properties: 'Gümüş beyazı, yumuşak, parlak bir metal.' },
    { symbol: 'Fe', name: 'Demir', atomicNumber: 26, atomicWeight: 55.845, properties: 'Gümüş beyazı, parlak, dövülebilir bir metal.' },
    { symbol: 'Co', name: 'Kobalt', atomicNumber: 27, atomicWeight: 58.933, properties: 'Gümüş beyazı, sert, parlak bir metal.' },
    { symbol: 'Ni', name: 'Nikel', atomicNumber: 28, atomicWeight: 58.693, properties: 'Gümüş beyazı, dövülebilir, esnek bir metal.' },
    { symbol: 'Cu', name: 'Bakır', atomicNumber: 29, atomicWeight: 63.546, properties: 'Portakal sarısı metalik bir element.' },
    { symbol: 'Zn', name: 'Çinko', atomicNumber: 30, atomicWeight: 65.38, properties: 'Mavi beyaz, parlak, dövülebilir, paslanmaz bir metal.' },
    { symbol: 'Ga', name: 'Galium', atomicNumber: 31, atomicWeight: 69.723, properties: 'Beyaz parlak, yumuşak, dövülebilir bir metaldir.' },
    { symbol: 'Ge', name: 'Cermanyum', atomicNumber: 32, atomicWeight: 72.63, properties: 'Gümüş beyazı, kristal yapılı, yarı metalik bir element.' },
    { symbol: 'As', name: 'Arsenik', atomicNumber: 33, atomicWeight: 74.922, properties: 'Gümüş beyazı metalik parlaklıkta, katı bir elementtir.' },
    { symbol: 'Se', name: 'Selenyum', atomicNumber: 34, atomicWeight: 78.971, properties: 'Gümüş beyazı, metalik parlaklıkta, kırılgan, katı bir elementtir.' },
    { symbol: 'Br', name: 'Brom', atomicNumber: 35, atomicWeight: 79.904, properties: 'Koyu kırmızı kahverengi, zehirli, sıvı, uçucu, halojen bir elementtir.' },
    { symbol: 'Kr', name: 'Kripton', atomicNumber: 36, atomicWeight: 83.798, properties: 'Renksiz, kokusuz, tatsız, gaz halinde, inert, halojen bir elementtir.' },
    { symbol: 'Rb', name: 'Rubidyum', atomicNumber: 37, atomicWeight: 85.468, properties: 'Gümüş beyazı, yumuşak, parlak, alkali metaldir.' },
    { symbol: 'Sr', name: 'Stronsiyum', atomicNumber: 38, atomicWeight: 87.62, properties: 'Gümüş beyazı, yumuşak, parlak, alkali toprak metalidir.' },
    { symbol: 'Y', name: 'İtriyum', atomicNumber: 39, atomicWeight: 88.906, properties: 'Gümüş beyazı, yumuşak, parlak, toprak metalidir.' },
    { symbol: 'Zr', name: 'Zirkonyum', atomicNumber: 40, atomicWeight: 91.224, properties: 'Gümüş beyazı, sert, paslanmaz, metalik parlaklıkta, ağır bir metaldir.' },
    { symbol: 'Nb', name: 'Niobyum', atomicNumber: 41, atomicWeight: 92.906, properties: 'Sert, gri, dövülebilir, sünek bir metaldir.' },
    { symbol: 'Mo', name: 'Molibden', atomicNumber: 42, atomicWeight: 95.95, properties: 'Gümüş beyazı, sert, dövülebilir, yüksek ergime noktasına sahip bir metaldir.' },
    { symbol: 'Tc', name: 'Teknesyum', atomicNumber: 43, atomicWeight: 98, properties: 'Radyoaktif metal.' },
    { symbol: 'Ru', name: 'Rutenyum', atomicNumber: 44, atomicWeight: 101.07, properties: 'Sert, beyazımsı, dövülebilir bir metaldir.' },
    { symbol: 'Rh', name: 'Rodyum', atomicNumber: 45, atomicWeight: 102.91, properties: 'Gümüş beyazı, sert, parlak, dövülebilir bir metaldir.' },
    { symbol: 'Pd', name: 'Paladyum', atomicNumber: 46, atomicWeight: 106.42, properties: 'Gümüş beyazı, yumuşak, dövülebilir, parlak bir metaldir.' },
    { symbol: 'Ag', name: 'Gümüş', atomicNumber: 47, atomicWeight: 107.87, properties: 'Beyaz metalik parlaklıkta, yumuşak bir elementtir.' },
    { symbol: 'Cd', name: 'Kadmiyum', atomicNumber: 48, atomicWeight: 112.41, properties: 'Kolay işlenebilir, gümüş beyazı, yumuşak bir metaldir.' },
    { symbol: 'In', name: 'Indiyum', atomicNumber: 49, atomicWeight: 114.82, properties: 'Beyaz, dövülebilir, yumuşak, parlak, metalik bir elementtir.' },
    { symbol: 'Sn', name: 'Kalay', atomicNumber: 50, atomicWeight: 118.71, properties: 'Gümüş beyazı, yumuşak, dövülebilir bir metaldir.' },
    { symbol: 'Sb', name: 'Antimon', atomicNumber: 51, atomicWeight: 121.76, properties: 'Gümüş beyazı, parlak, dövülebilir, malleable ve duktildir.' },
    { symbol: 'Te', name: 'Tellerium', atomicNumber: 52, atomicWeight: 127.60, properties: 'Gümüş beyazı, kırılgan, kristal yapılı bir metaloiddir.' },
    { symbol: 'I', name: 'İyot', atomicNumber: 53, atomicWeight: 126.90, properties: 'Koyu gri katı, mor kristaller halinde buharlaşabilen bir elementtir.' },
    { symbol: 'Xe', name: 'Ksenon', atomicNumber: 54, atomicWeight: 131.29, properties: 'Renksiz, kokusuz, tatsız bir gazdır.' },
    { symbol: 'Cs', name: 'Seryum', atomicNumber: 55, atomicWeight: 132.91, properties: 'Gümüş beyazı, yumuşak, dövülebilir bir metaldir.' },
    { symbol: 'Ba', name: 'Baryum', atomicNumber: 56, atomicWeight: 137.33, properties: 'Gümüş beyazı, yumuşak, dövülebilir bir metaldir.' },
    { symbol: 'La', name: 'Lantan', atomicNumber: 57, atomicWeight: 138.91, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Ce', name: 'Seryum', atomicNumber: 58, atomicWeight: 140.12, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Pr', name: 'Praseodim', atomicNumber: 59, atomicWeight: 140.91, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Nd', name: 'Neodimyum', atomicNumber: 60, atomicWeight: 144.24, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Pm', name: 'Prometyum', atomicNumber: 61, atomicWeight: 145, properties: 'Radyoaktif element.' },
    { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, atomicWeight: 150.36, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Eu', name: 'Avrupa', atomicNumber: 63, atomicWeight: 151.96, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Gd', name: 'Gadolinyum', atomicNumber: 64, atomicWeight: 157.25, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Tb', name: 'Terbiyum', atomicNumber: 65, atomicWeight: 158.93, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, atomicWeight: 162.50, properties: 'Gümüş beyazı, sert, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Ho', name: 'Holmiyum', atomicNumber: 67, atomicWeight: 164.93, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Er', name: 'Erbiyum', atomicNumber: 68, atomicWeight: 167.26, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Tm', name: 'Tulium', atomicNumber: 69, atomicWeight: 168.93, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Yb', name: 'İtterbiyum', atomicNumber: 70, atomicWeight: 173.05, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Lu', name: 'Lütyum', atomicNumber: 71, atomicWeight: 174.97, properties: 'Gümüş beyazı, yumuşak, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Hf', name: 'Hafniyum', atomicNumber: 72, atomicWeight: 178.49, properties: 'Gümüş beyazı, sert, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'Ta', name: 'Tantal', atomicNumber: 73, atomicWeight: 180.95, properties: 'Gümüş beyazı, sert, dövülebilir, mıknatıslanabilir bir metaldir.' },
    { symbol: 'W', name: 'Volfram', atomicNumber: 74, atomicWeight: 183.84, properties: 'Gümüş beyazı, sert, dövülebilir, yüksek ergime noktasına sahip bir metaldir.' },
    { symbol: 'Re', name: 'Renyum', atomicNumber: 75, atomicWeight: 186.21, properties: 'Gümüş beyazı, sert, dövülebilir, yüksek ergime noktasına sahip bir metaldir.' },
    { symbol: 'Os', name: 'Osmiyum', atomicNumber: 76, atomicWeight: 190.23, properties: 'Gümüş beyazı, sert, dövülebilir, yüksek ergime noktasına sahip bir metaldir.' },
    { symbol: 'Ir', name: 'İriyum', atomicNumber: 77, atomicWeight: 192.22, properties: 'Gümüş beyazı, sert, dövülebilir, yüksek ergime noktasına sahip bir metaldir.' },
    { symbol: 'Pt', name: 'Platin', atomicNumber: 78, atomicWeight: 195.08, properties: 'Gümüş beyazı, yumuşak, dövülebilir, parlak bir metaldir.' },
    { symbol: 'Au', name: 'Altın', atomicNumber: 79, atomicWeight: 196.97, properties: 'Sarı parlak bir metaldir.' },
    { symbol: 'Hg', name: 'Civa', atomicNumber: 80, atomicWeight: 200.59, properties: 'Gümüş beyazı, ağır, sıvı bir metaldir.' },
    { symbol: 'Tl', name: 'Talyum', atomicNumber: 81, atomicWeight: 204.38, properties: 'Kırılgan, gri renkte, yumuşak bir metaldir.' },
    { symbol: 'Pb', name: 'Kurşun', atomicNumber: 82, atomicWeight: 207.2, properties: 'Mavi-siyah renkte, yumuşak ve dövülebilir bir metaldir.' },
    { symbol: 'Bi', name: 'Bizmut', atomicNumber: 83, atomicWeight: 208.98, properties: 'Pembe, beyaz veya soluk gri renkte, kırılgan bir metaldir.' },
    { symbol: 'Po', name: 'Polonyum', atomicNumber: 84, atomicWeight: 209, properties: 'Radyoaktif metaloid.' },
    { symbol: 'At', name: 'Astatin', atomicNumber: 85, atomicWeight: 210, properties: 'Radyoaktif halojen.' },
    { symbol: 'Rn', name: 'Radon', atomicNumber: 86, atomicWeight: 222, properties: 'Renksiz, kokusuz, radyoaktif bir gazdır.' },
    { symbol: 'Fr', name: 'Fransiyum', atomicNumber: 87, atomicWeight: 223, properties: 'Radyoaktif alkali metal.' },
    { symbol: 'Ra', name: 'Radyum', atomicNumber: 88, atomicWeight: 226, properties: 'Radyoaktif, gümüş beyazı, yumuşak bir metaldir.' },
    { symbol: 'Ac', name: 'Aktinyum', atomicNumber: 89, atomicWeight: 227, properties: 'Radyoaktif, gümüş beyazı, yumuşak bir metaldir.' },
    { symbol: 'Th', name: 'Toryum', atomicNumber: 90, atomicWeight: 232.04, properties: 'Radyoaktif, metalik, gri renkte, yumuşak bir metaldir.' },
    { symbol: 'Pa', name: 'Proaktinyum', atomicNumber: 91, atomicWeight: 231.04, properties: 'Radyoaktif, gümüş beyazı, yumuşak bir metaldir.' },
    // Diğer elementler buraya eklenebilir
    { symbol: 'U', name: 'Uranyum', atomicNumber: 92, atomicWeight: 238.03, properties: 'Rengi gümüş beyazı olan, parlak, ağır, radyoaktif bir metal.' }
];

var selectElement = document.getElementById('element-select');
var searchInput = document.getElementById('search-input');
var elementInfoDiv = document.getElementById('element-info');

// Elementleri seçeneklere ekle
elements.forEach(function(element) {
    var option = document.createElement('option');
    option.value = element.symbol;
    option.textContent = element.name;
    selectElement.appendChild(option);
});

// Element seçildiğinde veya arama kutusuna yazıldığında bilgileri göster
function displayElementInfo(symbol) {
    var element = elements.find(function(e) {
        return e.symbol === symbol;
    });

    if (element) {
        elementInfoDiv.innerHTML = `
            <h2>${element.symbol}</h2>
            <p>İsim: ${element.name}</p>
            <p>Atom Numarası: ${element.atomicNumber}</p>
            <p>Atom Ağırlığı: ${element.atomicWeight}</p>
            <p>Özellikler: ${element.properties}</p>
        `;
    } else {
        elementInfoDiv.innerHTML = 'Böyle bir element bulunamadı.';
    }
}

// Element seçildiğinde veya arama kutusuna yazıldığında bilgileri göster
selectElement.addEventListener('change', function() {
    var selectedSymbol = this.value;
    displayElementInfo(selectedSymbol);
});

searchInput.addEventListener('input', function() {
    var searchText = this.value.toLowerCase();
    var matchedElement = elements.find(function(element) {
        return element.name.toLowerCase().includes(searchText) || element.symbol.toLowerCase().includes(searchText);
    });
    if (matchedElement) {
        selectElement.value = matchedElement.symbol;
        displayElementInfo(matchedElement.symbol);
    } else {
        selectElement.value = '';
        elementInfoDiv.innerHTML = 'Böyle bir element bulunamadı.';
    }
});

document.getElementById("info-button").addEventListener("click", function() {
    window.open("programhakkinda.html", "_blank");
});
