// Funktio vaalean teeman asettamiseksi
function setLightTheme() {
  document.body.style.backgroundColor = "#edffff";
  document.body.style.color = "black";
  document.querySelector(".navbar").style.backgroundColor = "#edffff";
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.style.color = "black";
  });

  document
    .querySelectorAll(
      "p:not(.card p), h2:not(.card h2), h5:not(.card h5), h1:not(.card h1, #yhteystiedot-page h1), h6:not(.card h6)"
    )
    .forEach(function (element) {
      if (!element.closest("#yhteystiedot-page")) {
        element.style.color = "#052b14";
      }
    });

  document
    .querySelectorAll(".card-container:not(#yhteystiedot-page .card-container)")
    .forEach(function (container) {
      container.style.backgroundColor = "#c6d6d4"; 
    });

  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.style.backgroundColor = "white";
  });

  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.style.backgroundColor = "transparent";
    button.style.color = "#1E2F2D";
  });
  document.getElementById("banner").src = "photos/banneri.png";
  document.getElementById("lowerNav").style.backgroundColor = "#9accd1";
  document.getElementById("topNav").style.backgroundColor = "#edffff";
  document.getElementById("newsletter").style.color = "#052b14";
  document.getElementById("newsletter").style.backgroundColor = "#b9cbca";
  document.querySelector("footer").style.backgroundColor = "#ced0d0";
}

// Funktio tumman teeman asettamiseksi
function setDarkTheme() {
  document.body.style.backgroundColor = "#1E2F2D";
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.style.color = "#E8E8E8";
  });
  document
    .querySelectorAll(
      "p:not(.card p), h2:not(.card h2), h5:not(.card h5), h1:not(.card h1, #yhteystiedot-page h1), h6:not(.card h6)"
    )
    .forEach(function (element) {
      if (!element.closest("#yhteystiedot-page")) {
        element.style.color = "#E8E8E8";
      }
    });

  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.style.backgroundColor = "#94ABA8";
    button.style.color = "darkgray";
  });

  document
    .querySelectorAll(".card-container:not(#yhteystiedot-page .card-container)")
    .forEach(function (container) {
      container.style.backgroundColor = "#050706";
    });

  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.style.backgroundColor = "#7AA6A4";
  });

  document.querySelector("footer").style.backgroundColor = "#050706";
  document.getElementById("lowerNav").style.backgroundColor = "#050706";
  document.getElementById("newsletter").style.color = "#E8E8E8";
  document.getElementById("newsletter").style.backgroundColor = "#182721";
  document.getElementById("topNav").style.backgroundColor = "#050706";
  document.getElementById("banner").src = "photos/banneriDark.png";
}

function disableLightThemeButton() {
  document.getElementById("light-theme-toggle").disabled = true;
}

function disableDarkThemeButton() {
  document.getElementById("dark-theme-toggle").disabled = true;
}

// TEEMA VAALEAKSI
document
  .getElementById("light-theme-toggle")
  .addEventListener("click", function () {
    if (document.body.style.backgroundColor === "rgb(237, 255, 255)") {
      return;
    }
    setLightTheme();
    localStorage.setItem("theme", "light");
    disableLightThemeButton();
    document.getElementById("dark-theme-toggle").disabled = false;
  });

// TEEMA TUMMAKSI
document
  .getElementById("dark-theme-toggle")
  .addEventListener("click", function () {
    if (document.body.style.backgroundColor === "rgb(30, 47, 45)") {
      return;
    }
    setDarkTheme();
    localStorage.setItem("theme", "dark");
    disableDarkThemeButton();
    document.getElementById("light-theme-toggle").disabled = false;
  });

// Tarkista tallennettu teema, kun sivu ladataan
document.addEventListener("DOMContentLoaded", function () {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setDarkTheme();
    disableDarkThemeButton();
    document.getElementById("light-theme-toggle").disabled = false;
  } else if (savedTheme === "light") {
    setLightTheme();
    disableLightThemeButton();
    document.getElementById("dark-theme-toggle").disabled = false;
  }
});

//ASETA FONTTI

// Tarkista tallennettu fonttikoko, kun sivu ladataan tai päivitetään
window.addEventListener("DOMContentLoaded", checkFontSize);
window.addEventListener("load", checkFontSize); // Varmuuden vuoksi lisätään myös load-tapahtumankuuntelija

function checkFontSize() {
  var savedFontSize = localStorage.getItem("fontSize");
  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + "px";
  }
}

function changeFontSize(change) {
  var currentFontSize = parseInt(getComputedStyle(document.body).fontSize); // Hae nykyinen fonttikoko
  var newFontSize = currentFontSize + change * 2; // Laske uusi fonttikoko lisäämällä tai vähentämällä 2 pikseliä

  document.body.style.fontSize = newFontSize + "px";
  localStorage.setItem("fontSize", newFontSize);
}

//FONTTI ISOMMAKSI
document
  .getElementById("plus-font-button")
  .addEventListener("click", function () {
    changeFontSize(1); // Kutsu changeFontSize-funktiota ja anna parametriksi 1, joka tarkoittaa kasvatetaan fonttikokoa
  });

//FONTTI PIENEMMÄKSI
document
  .getElementById("minus-font-button")
  .addEventListener("click", function () {
    changeFontSize(-1); // Kutsu changeFontSize-funktiota ja anna parametriksi -1, joka tarkoittaa pienennetään fonttikokoa
  });

//KIELIVALINTA
// Tallenna valittu kieli paikalliseen varastoon
$(".language-option").click(function () {
  var selectedLanguage = $(this).data("language");
  localStorage.setItem("language", selectedLanguage);
});

// Tarkista tallennettu kieli, kun sivu ladataan tai päivitetään
$(document).ready(function () {
  checkLanguage(); // Tarkista kieli sivun latauksessa
});

$(window).on("load", function () {
  checkLanguage(); // Tarkista kieli sivun päivityksessä
});

function checkLanguage() {
  var savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
    $("#languageDropdown").html(
      '<i class="fas fa-globe fa-lg"></i> ' + savedLanguage
    );
  }
}

// LUE LISÄÄ JA NÄYTÄ VÄHEMMÄN AJANKOHTAISTA
$(document).ready(function () {
  $("[id^='lueLisaaNappi']").click(function (e) {
    e.preventDefault();
    var lisatekstiId = $(this)
      .attr("id")
      .replace("lueLisaaNappi", "lisateksti");
    $("#" + lisatekstiId).toggle();
    $(this).text(function (_, text) {
      return text === "Lue lisää" ? "Näytä vähemmän" : "Lue lisää";
    });
  });
});

// NÄKYMÄT

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault(); // Estä oletustoiminto, kuten linkin klikkaaminen

      const viewId = this.getAttribute("data-view"); // Hae kohdenäkymän id
      localStorage.setItem("activeViewId", viewId); // Tallenna aktiivinen näkymä

      hideAllViews(); // Piilota kaikki näkymät
      showView(viewId); // Näytä vastaava näkymä

      // Poista boldaus ja alleviivaus kaikista muista linkeistä
      navLinks.forEach(function (link) {
        if (link !== navLink) {
          link.classList.remove("active");
          link.style.fontWeight = "700";
          link.style.textDecoration = "none";
          link.style.backgroundColor = "transparent";
        }
      });

      // Lisää boldaus ja alleviivaus valittuun linkkiin
      navLink.classList.add("active");
      navLink.style.fontWeight = "800";
      navLink.style.textDecoration = "underline";
      navLink.style.backgroundColor = "#B8C7C8";

      // Päivitä aktiivinen sivun nimi pienellä viiveellä
      setTimeout(updateActivePageLink, 100);
    });
  });
  // Päivitä aktiivinen sivu sivun latauksen yhteydessä
  updateActivePage();

  // Päivitä aktiivinen sivun linkki
  updateActivePageLink();
});

// Funktio näkymän näyttämiseksi ja scrollaamiseksi yläosaan
function showView(viewId) {
  const view = document.getElementById(viewId);
  if (view) {
    view.style.display = "block";
  }
}

// Funktio näkymien näyttämiseksi
function hideAllViews() {
  const views = document.querySelectorAll(".view");
  views.forEach((view) => {
    view.style.display = "none";
  });
}

// Funktio aktiivisen sivun päivittämiseksi
function updateActivePage() {
  const activeViewId = localStorage.getItem("activeViewId");
  if (activeViewId) {
    hideAllViews();
    showView(activeViewId);
  }
}
function updateActivePageLink() {
  // Etsitään aktiivinen navigaatiolinkki
  var activeLink = document.querySelector(".nav-link.active");

  // Etsitään aktiivinen sivun nimen linkki hampurilaisvalikon vierestä
  var activePageLink = document.querySelector(".navbar-text #active-Name");

  // Tarkistetaan, että aktiivinen linkki ja sivun nimen linkki ovat olemassa
  if (activeLink && activePageLink) {
    // Haetaan aktiivisen linkin teksti
    var activeLinkText = activeLink.innerText;
    // Jos aktiivinen linkki on dropdown-valikon alivalikossa
    if (activeLink.closest(".dropdown-menu")) {
      // Haetaan päälinkin teksti
      var productsLinkText = document.getElementById("tuotteet-link").innerText;
      // Yhdistetään päälinkin teksti ja aktiivisen linkin teksti

      activeLinkText = productsLinkText + " | " + activeLinkText;
    }

    // Päivitetään aktiivisen sivun nimen linkin teksti ja href-attribuutti
    activePageLink.innerText = activeLinkText;
  }
}

// TUOTEET KATEGORIOIDEN NÄYTTÖ
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#tuotteet-page .btn");
  const pcards = document.querySelectorAll("#tuotteet-page .card-link");
  const dropdownLinks = document.querySelectorAll("#lowerNav .dropdown-item");
  document.getElementById("tuote-tiedot").style.display = "none";
  // Funktio, joka näyttää kortit halutun kategorian perusteella
  function showCards(category) {
    // Piilota tuotetiedot

    const visibleCards = [];

    pcards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      if (category === "kaikki") {
        card.style.display = "block";
        visibleCards.unshift(card); // Lisätään kaikki kortit näkyvien korttien taulukkoon
      } else {
        if (category === cardCategory) {
          card.style.display = "block";
          visibleCards.unshift(card); // Lisätään vain halutut kortit näkyvien korttien taulukkoon
        } else {
          card.style.display = "none";
        }

        if (category === "muut") {
          document.getElementById("muut-info").style.display = "block";
        }
      }
    });

    // Järjestä näkyvissä olevat kortit ensimmäisiksi
    const cardContainer = document.getElementById("tuote-kortit");
    visibleCards.forEach((card) => {
      cardContainer.prepend(card.parentElement);
    });
  }

  // Funktio, joka piilottaa kaikki kortit
  function hideAllCards() {
    pcards.forEach((card) => {
      card.style.display = "none";
    });
    document.getElementById("muut-info").style.display = "none";
  }
  // Funktio, joka tallentaa aktiivisen näkymän local storageen
  function saveActiveView(viewId) {
    localStorage.setItem("activeViewId", viewId);
  }
  // Funktio, joka asettaa valitun kategorian aktiiviseksi
  function setActiveButton(category) {
    buttons.forEach((btn) => {
      if (btn.getAttribute("data-category") === category) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Etsi vastaava dropdown-linkki ja aseta se aktiiviseksi
    dropdownLinks.forEach((link) => {
      if (link.getAttribute("data-view") === category) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Kategoriapainikkeiden ja alavalikon linkkien kuuntelija
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("data-category");
      hideAllCards();
      showCards(category);
      setActiveButton(category);
      saveActiveView("tuotteet");
    });
  });

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const category = link.getAttribute("data-view");
      hideAllCards();
      showCards(category);
      setActiveButton(category);
      saveActiveView("tuotteet");
    });
  });
});

// Pääotsikon linkin kuuntelija
const mainProductsLink = document.getElementById("tuotteet-link");

mainProductsLink.addEventListener("click", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  // Poista boldaus ja alleviivaus kaikista muista linkeistä
  navLinks.forEach(function (link) {
    link.classList.remove("active");
    link.style.fontWeight = "700";
    link.style.textDecoration = "none";
  });

  // Lisää boldaus ja alleviivaus pääotsikon linkkiin
  mainProductsLink.classList.add("active");
  mainProductsLink.style.fontWeight = "800";
  mainProductsLink.style.textDecoration = "underline";
});

// SELAIMEN REFRESHAUS, NÄYTÄ ETUSIVU
window.addEventListener("load", function () {
  // Piilota sivun sisältö ennen latauksen valmistumista
  document.body.style.display = "none";
  hideAllViews();
  this.localStorage.clear();

  setTimeout(function () {
    showView("etusivu-page");
    const link = document.getElementById("etusivu-link");
    link.style.fontWeight = "800";
    link.style.textDecoration = "underline";
    document.body.style.display = "";
  });
});

// Aseta "kaikki tuotteet" -alavalikosta ja  aktiiviseksi oletuksena
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("kaikkibtn").classList.add("active");
  document.getElementById("kaikki-tuotteet-link").classList.add("active");
});

// YKSITTÄISEN TUOTTEEN NÄKYMÄT

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      hideProductDetails();
    });
  });
});
function showProductDetails(productName) {
  var productData = getProductData(productName);

  if (productData) {
    document.getElementById("tuote-uusi").style = productData.new;
    document.getElementById("tuote-nimi").innerText = productData.name;
    document.getElementById("tuote-kuva").src = productData.img;
    document.getElementById("tuote-kuva2").src = productData.img2;
    document.getElementById("video").src = productData.video;
    document.getElementById("tuote-kuvaus").innerHTML = productData.description;
    document.getElementById("tuote-ominaisuudet").innerHTML =
      productData.features;
    document.getElementById("tuote-lähde").innerHTML =
      "Lähde: " + productData.source;

    // Piilota tuotekortit
    document.getElementById("tuote-kortit").style.display = "none";
    // Näytä tuotetiedot
    document.getElementById("tuote-tiedot").style.display = "block";
  } else {
    console.error("Tuotetietoja ei löytynyt.");
  }
}

function hideProductDetails() {
  // Näytä tuotekortit
  document.getElementById("tuote-kortit").style.display = "flex";

  // Piilota tuotetiedot
  document.getElementById("tuote-tiedot").style.display = "none";
}

function getProductData(productName) {
  var productData = {
    "PetPuls -älypanta": {
      new: "block",
      img: "photos/Ajankohtaista ja Tuotteet/3.png",
      name: "PetPuls -älypanta",
      description:
        "<p>Petpuls on Eteläkorealaisen teknologiayhtiön kehittämä älypanta, joka toimii maailman ensimmäisenä koiran tunteita tulkitsevana laitteena. Panta hyödyntää edistyksellistä tekoälyä ja algoritmeja, jotka analysoivat yli 10 000 koiran haukuntaääntä, luoden kategoriat kuten ilo, suru, ahdistus ja viha.</p>" +
        "<p>Yhteistyössä Seoul National Universityn kanssa kehitetty tekoälyalgoritmi keskittyy koiran koon perusteella tapahtuvaan tunneanalyysiin. Petpuls mahdollistaa omistajille paremman ymmärryksen lemmikkinsä tunteista tarjoamalla reaaliaikaista seurantaa koiran toiminnoista ja tunteista.</p>" +
        "<p>Laite tarjoaa ominaisuuksia, kuten aikajanaseuranta, toimintalokit ja tunneanalyysi, joka auttaa tunnistamaan, onko koira iloinen, vihainen, jännittynyt, surullinen vai rentoutunut. Älypanta on sertifioitu turvalliseksi ja mukavaksi, ja sitä on saatavilla eri väreissä.</p>" +
        "<p>Petpuls on saanut tunnustusta innovatiivisesta lähestymistavastaan lemmikkien hoitoon, ja se palkittiin toisella sijalla Consumer Electronics Show -tavaramessujen innovaatiokategoriassa. Viimeisin päivitys, Petpuls App V2.0, tuo lisää ominaisuuksia, kuten reaaliaikaisen toiminnan ja tunnetilojen aikajanan, toimintatiedot kuten maksiminopeuden ja kulutetut kalorit, sekä jatkuvan tunneanalyysin myös omistajan ollessa poissa.</p>",
      features:
        'Laiteominaisuudet: <ul><li>iOS- ja Android-sovellusyhteensopivuus: iOS-versio 11 tai uudempi, Android-versio 4.1 tai uudempi.</li><li>Saatavana kahdessa koossa sopivaksi pienille ja suurille koiraroduille.</li><li>Kaulapannan mitat: <li>Laite: Pituus: 2” x Korkeus: 1.38” x Syvyys: 0.70”</li><li>Hihna: Korkeus: 0.63” x Syvyys: 0.13”</li><li>Laite + Hihna: <li>Pieni: Pituus: 16.3” x Korkeus: 1.38” x Syvyys: 0.70”</li><li>Iso: Pituus: 30.5" x Korkeus: 1.38” x Syvyys: 0.70”</li></li></li><li>Petpuls-laitteessa on 3-värinen LED-taustavalaistu näyttö, virtapainike, mikrofoni, USB-latausportti ja reset-painike.</li><li>Paino: Juuri alle 25 grammaa</li><li>Vedenkestävyys (IP54): Laite ei saa upota veteen tai olla koiran uimisen aikana.</li><li>Akunkesto: 8-10 tuntia yhdellä täydellä latauksella; suositellaan yöllistä lataamista.</li><li>Wi-Fi-paritus etäisyys: Noin 15 jalkaa (5 metriä). Älypanta kytkeytyy omistajan älypuhelimeen ulkona ollessaan ja synkronoi paritetun sovelluksen kanssa, kun olet takaisin Wi-Fi-verkossa.</li><li>KC, ROHS ja MSDS -sertifikaatit; FCC-sertifiointi.</li><li>Tunnetilojen tulkinta sovelluksessa.</li></ul> Kuva tunnetilojen tulkinnasta sovelluksessa:',
      img2: "photos/Ajankohtaista ja Tuotteet/2.png",
      video: "https://www.youtube.com/watch?v=F0UWI2GBMt0",
      source:
        "<a href='https://www.petpuls.net/buy?lang=en'>https://www.petpuls.net/buy?lang=en</a>",
    },

    "Tractive GPS Tracker for Cats": {
      new: "none",
      img: "photos/Ajankohtaista ja Tuotteet/cattrack.png",
      name: "Tractive GPS Tracker for Cats",
      description:
        "<p>Tractive GPS Tracker for Cats on innovatiivinen laite, joka on suunniteltu erityisesti kissojen seurantaan. Tämä GPS-tracker tarjoaa omistajille mahdollisuuden pitää lemmikkinsä turvassa ja tietää niiden sijainti reaaliajassa.</p>" +
        "<p>Kevyt ja kompakti Muotoilu: Tractive Tracker on suunniteltu ottaen huomioon kissojen pienet koot. Se on kevyt ja kompakti, joten se ei aiheuta lemmikillesi epämukavuutta.</p>" +
        "<p>Reaaliaikainen seuranta: Laitteen avulla voit seurata kissasi sijaintia reaaliajassa mobiilisovelluksen kautta. Näet tarkasti, missä kissasi liikkuu ja mihin se seikkailee.</p>" +
        "<p>Virtuaaliset aitiot: Tractive mahdollistaa virtuaalisten aitioitten asettamisen, mikä tarkoittaa, että voit määrittää turva-alueen. Jos kissa poistuu tästä alueesta, saat välittömästi ilmoituksen.</p>" +
        "<p>Historiatiedot: Laite tallentaa kissan liikkumistiedot, joten voit tarkastella sen liikkeitä ja käyttäytymistä ajanjaksoina.</p>" +
        "<p>Kestävyys ja vesitiiviys: Tractive Tracker on suunniteltu kestämään erilaisia sääolosuhteita, ja se on vesitiivis. Näin ollen se soveltuu käytettäväksi myös sateisina päivinä tai kosteissa ympäristöissä.</p>" +
        "<p>Akunkestävyys: Laitteessa on pitkäkestoinen akku, mikä tarkoittaa, että se ei vaadi jatkuvaa lataamista. Voit seurata lemmikkiäsi pitkiäkin aikoja ilman huolta akun loppumisesta.</p>" +
        "<p>Tractive GPS Tracker for Cats tarjoaa kätevän ja luotettavan tavan seurata kissasi sijaintia ja pitää ne turvassa. Lisäksi se tarjoaa omistajille rauhan mielen, kun he tietävät, missä heidän karvainen ystävänsä liikkuu.</p>",
      features:
        "<ul><li>Kevyt ja kompakti muotoilu</li><li>Reaaliaikainen seuranta</li><li>Virtuaaliset aitiot</li><li>Historiatiedot</li><li>Kestävyys ja vesitiiviys</li><li>Akunkestävyys</li></ul>",
      img2: "",
      video: "https://www.youtube.com/embed/PAaippcfKTo",
      source:
        "<a href='https://tractive.com/en/pd/gps-tracker-cat'>https://tractive.com/en/pd/gps-tracker-cat</a>",
    },
  };
  return productData[productName];
}
