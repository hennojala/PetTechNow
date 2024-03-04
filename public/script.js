// Funktio vaalean teeman asettamiseksi
function setLightTheme() {
  document.body.style.backgroundColor = "#edffff";
  document.body.style.color = "black";
  document.querySelector(".navbar").style.backgroundColor = "#edffff";
  document.querySelectorAll("i").forEach(function (link) {
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

  document.getElementById("banner").src = "photos/banneri.png";
  document.getElementById("popup").style.backgroundColor = "#bdfafa;";
  document.getElementById("Dpopup").style.backgroundColor = "#bdfafa;";
  document.getElementById("lowerNav").style.backgroundColor = "#9accd1";
  document.getElementById("topNav").style.backgroundColor = "#edffff";
  document.getElementById("newsletter").style.color = "#052b14";
  document.getElementById("newsletter").style.backgroundColor = "#b9cbca";
  document.querySelector("footer").style.backgroundColor = "#ced0d0";
}

// Funktio tumman teeman asettamiseksi
function setDarkTheme() {
  document.body.style.backgroundColor = "#1E2F2D";
  document.querySelectorAll("i").forEach(function (link) {
    link.style.color = "white";
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
  document.getElementById("popup").style.backgroundColor = "#050706";
  document.getElementById("Dpopup").style.backgroundColor = "#050706";
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
          link.style.backgroundColor = "#acd4d7";
        }
      });

      // Lisää boldaus ja alleviivaus valittuun linkkiin
      navLink.classList.add("active");
      navLink.style.fontWeight = "900";
      navLink.style.textDecoration = "underline";
      navLink.style.backgroundColor = "#B8C7C8";
    });
  });
  // Päivitä aktiivinen sivu sivun latauksen yhteydessä
  updateActivePage();
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
    // Siirrä sivu
    window.scrollTo({ top: 0, behavior: "smooth" });
    const link = document.getElementById("etusivu-link");
    link.style.fontWeight = "800";
    link.style.textDecoration = "underline";
    document.getElementById("light-theme-toggle").disabled = false;

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
  var buttons = document.querySelectorAll("card-link, #tuotteet-page .btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Siirrä sivu
      window.scrollTo({ top: 300, behavior: "smooth" });
      hideProductDetails();
    });
  });
});
function showProductDetails(productName) {
  // Siirrä sivu
  window.scrollTo({ top: 300, behavior: "smooth" });
  var productData = getProductData(productName);

  if (productData) {
    document.getElementById("tuote-uusi").style.display = productData.new;
    document.getElementById("tuote-nimi").innerText = productData.name;
    document.getElementById("tuote-kuva").src = productData.img;

    if (productData.img2 !== "") {
      document.getElementById("tuote-kuva2").style.display = "block";
      document.getElementById("tuote-kuva2").src = productData.img2;
    } else {
      document.getElementById("tuote-kuva2").style.display = "none";
    }

    if (productData.video !== "") {
      document.getElementById("video").style.display = "block";
      document.getElementById("video").src = productData.video;
    } else {
      document.getElementById("video").style.display = "none";
    }

    document.getElementById("tuote-kuvaus").innerHTML = productData.description;
    document.getElementById("tuote-ominaisuudet").innerHTML =
      productData.features;
    document.getElementById("tuote-lähde").innerHTML =
      "Lähteet ja tuotteen ostomahdollisuus: " + productData.source;

    // Piilota tuotekortit
    document.getElementById("tuote-kortit").style.display = "none";
    // Näytä tuotetiedot
    document.getElementById("tuote-tiedot").style.display = "block";

    // Siirrä sivu yläreunaan
    window.scrollTo({ top: 300, behavior: "smooth" });
  } else {
    console.error("Tuotetietoja ei löytynyt.");
  }
}
function hideProductDetails() {
  // Siirrä sivu yläreunaan
  window.scrollTo({ top: 300, behavior: "smooth" });
  document.getElementById("tuotteet-link").classList.add("active");
  document.getElementById("kaikki-tuotteet-link").classList.add("active");
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
      video: "https://www.youtube.com/embed/F0UWI2GBMt0",
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

    "Catit Pixi Smart -vesiautomaatti": {
      new: "none",
      img: "photos/Ajankohtaista ja Tuotteet/4.png",
      name: "Catit Pixi Smart -vesiautomaatti",
      source:
        "https://www.petenkoiratarvike.com/kissat/koti-ja-piha/kissan-juoma-automaatti/catit-pixi-smart–vesiautomaatti-kissalle/153831?82684",
      description:
        "Catit Pixi Smart -vesiautomaatti on innovatiivinen tuote, joka on suunniteltu helpottamaan kissan juomista ja tukemaan sen hyvinvointia. Tämä älykäs vesiautomaatti tarjoaa useita ominaisuuksia, jotka voivat tehdä lemmikkisi juomisesta mukavampaa ja terveellisempää. Tässä muutamia piirteitä:",
      features:
        "<ul>" +
        "<li><strong>Älykäs toiminta:</strong> Catit Pixi Smart -vesiautomaatti reagoi automaattisesti lemmikin läsnäoloon. Se aktivoituu, kun kissa lähestyy ja samenee pois sen poistuessa.</li>" +
        "<li><strong>Virtaava vesi:</strong> Vesiautomaatti tarjoaa jatkuvasti virtaavaa vettä, mikä voi houkutella kissoja juomaan enemmän. Virtaava vesi voi myös pysyä raikkaampana pidempään.</li>" +
        "<li><strong>Suodatusjärjestelmä:</strong> Laite on varustettu suodatusjärjestelmällä, joka poistaa epäpuhtaudet ja epämiellyttävät hajut vedestä. Tämä varmistaa, että kissasi juo puhdasta ja raikasta vettä.</li>" +
        "<li><strong>Älypuhelinsovellus:</strong> Catit Pixi Smart -vesiautomaatin voi yhdistää älypuhelimeen sovelluksen avulla. Sovelluksen avulla voit seurata kissan juomistottumuksia ja saada ilmoituksia esimerkiksi veden täyttötarpeesta.</li>" +
        "<li><strong>Helppo Puhdistus:</strong> Laite on suunniteltu helppoon purkamiseen ja puhdistukseen, mikä tekee ylläpidosta vaivatonta ja pitää veden laadun optimaalisena.</li>" +
        "<li><strong>Virtapihimpi Toiminta:</strong> Catit Pixi Smart on suunniteltu virtapihimmäksi kuin monet perinteiset vesiautomaatit, mikä voi olla hyödyllistä energiankulutuksen optimoinnissa.</li>" +
        "</ul>" +
        "<p>Tämä vesiautomaatti tarjoaa siten monipuolisia ominaisuuksia, jotka tekevät siitä käytännöllisen ja hyödyllisen ratkaisun kissan juomisen hallintaan ja tukemiseen. Suositeltavaa on tutustua tarkempiin teknisiin yksityiskohtiin ja arvioihin valmistajan verkkosivuilla tai asiakkaiden arvosteluissa saadaksesi lisätietoja.</p>",

      img2: "",
      video: "",
    },

    "Petnet SmartFeeder": {
      new: "none",
      img: "photos/Ajankohtaista ja Tuotteet/1.png",
      name: "Petnet SmartFeeder",
      source:
        "https://smart-home-products.myshopify.com/products/petnet-smartfeeder-automatic-pet-feeding-from-your-smartphone",
      description:
        "Petnet SmartFeeder on älykäs automaattiruokkija, joka tarjoaa omistajille mahdollisuuden hallita lemmikin ruokailua älypuhelimen avulla. Tässä muutamia piirteitä, jotka tekevät siitä merkittävän esimerkin:",
      features:
        "<p><strong>Älykäs annostelu:</strong><br>Petnet SmartFeeder pystyy annostelemaan tarkkoja ruoka-annoksia lemmikillesi. Voit ohjelmoida ja säätää ruoka-annosten kokoja älypuhelimesi sovelluksen avulla.</p>" +
        "<p><strong>Personoitu ruokavalio:</strong><br>Sovelluksen avulla voit luoda personoidun ruokavalion lemmikillesi ottaen huomioon sen koon, iän ja terveydentilan. Tämä auttaa varmistamaan, että lemmikkisi saa oikeanlaista ravintoa.</p>" +
        "<p><strong>Etäohjaus:</strong><br>Omistajat voivat hallita ruokintalaitteistoa etänä mistä tahansa älypuhelimen sovelluksen avulla. Voit antaa ruokaa lemmikillesi vaikka olisit poissa kotoa.</p>" +
        "<p><strong>Terveyden seuranta:</strong><br>Petnet SmartFeeder voi myös auttaa omistajia seuraamaan lemmikin ruokailutottumuksia ja kalorien saantia. Tämä on erityisen hyödyllistä, jos lemmikilläsi on erityistarpeita, kuten painonhallintaa tai ruoka-aineallergioita.</p>" +
        "<p><strong>Ilmoitukset ja muistutukset:</strong><br>Sovellus lähettää ilmoituksia, kun on aika täyttää ruokasäiliö tai jos ruokinta on suoritettu onnistuneesti. Tämä auttaa varmistamaan, että lemmikillesi tarjotaan säännöllisesti ruokaa.</p>" +
        "<p>Petnet SmartFeeder on esimerkki siitä, miten älykkäät ruokintalaitteet voivat helpottaa lemmikinruokintaan liittyviä tehtäviä ja samalla tarjota mahdollisuuden personoituihin ruokavalioihin. Tällainen teknologia ei ainoastaan säästä omistajan aikaa, vaan myös edistää lemmikin terveyttä ja hyvinvointia.</p>",
      img2: "",
      video: "",
    },
    "PetCube Bites 2": {
      new: "none",
      img: "photos/Ajankohtaista ja Tuotteet/5.png",
      name: "PetCube Bites 2",
      source: "https://petcube.com/bites-2-lite/",
      description:
        "Yksi kotikäyttöinen teknologiatuote lemmikin hyvinvoinnin seurantaan ja valvontaan on Petcube Bites 2. Tämä on älykäs lemmikkikamera, joka tarjoaa useita toimintoja lemmikin seurantaan ja vuorovaikutukseen.",
      features:
        "<p><strong>HD-kamera ja live-stream:</strong><br>Petcube Bites 2 on varustettu HD-kameralla, joka mahdollistaa reaaliaikaisen videostreamauksen lemmikin toimista. Voit tarkkailla lemmikkiäsi päivän aikana mistä tahansa älypuhelinsovelluksen avulla.</p>" +
        "<p><strong>Heittotoiminto leikkejä ja palkitsemista Varten:</strong><br>Yksi erottuva piirre on ruoan heittotoiminto. Voit etänä heittää herkkuja tai lempiruokaa lemmikillesi, mikä tarjoaa vuorovaikutteista leikkiä ja palkitsemista.</p>" +
        "<p><strong>Älykäs hälytysjärjestelmä:</strong><br>Laitteessa on älykäs hälytysjärjestelmä, joka ilmoittaa liikkeestä tai äänestä. Tämä voi auttaa seuraamaan, mitä lemmikkisi tekee silloinkin, kun et ole kotona.</p>" +
        "<p><strong>Kaksisuuntainen ääni:</strong><br>Puhelimella voit puhua lemmikillesi kaksisuuntaisen äänitoiminnon avulla. Tämä voi olla lohdullista ja auttaa rauhoittamaan lemmikkiäsi, jos se on levoton.</p>" +
        "<p><strong>Videotallennus ja valokuvanotto:</strong><br>Petcube Bites 2 mahdollistaa videotallennuksen ja valokuvien ottamisen, jotta voit tallentaa ja jakaa hauskoja tai suloisia hetkiä lemmikkisi kanssa.</p>" +
        "<p><strong>Yhteensopivuus älylaitteiden Kanssa:</strong><br>Laite on yhteensopiva useiden älylaitteiden, kuten Amazon Alexan ja Google Assistantin, kanssa, mikä tekee sen integroimisesta osaksi älykotijärjestelmää helpompaa.</p>",
      img2: "",
      video: "https://www.youtube.com/embed/PJ-seNwO4xY",
    },
    "PetSafe® FroliCat® Bolt Laser -kissanlelu": {
      new: "none",
      img: "photos/Ajankohtaista ja Tuotteet/6.png",
      name: "PetSafe® FroliCat® Bolt Laser Cat Toy",
      source:
        "https://www.zooplus.com/shop/cats/cat_toys/laser_cat_toys/185593",
      description:
        "PetSafe® FroliCat® Bolt Laser Cat Toy on älykäs ja virikkeellinen lelu, joka on suunniteltu tuomaan iloa ja aktiivisuutta kissasi elämään. Tämä älykäs lelu käyttää laserpistettä houkutellakseen kissasi mukaan interaktiiviseen ja liikunnalliseen leikkiin.",
      features:
        "<p><strong>Automaattinen liike- ja valotoiminto:</strong><br>FroliCat Bolt luo jatkuvasti liikkuvan laserpisteen ympäri huonetta, joka stimuloi kissan metsästysvaistoa. Automaattinen liiketunnistin ohjaa laseria sattumanvaraisesti, mikä pitää leikin jännittävänä ja yllätyksellisenä.</p>" +
        "<p><strong>Käsinohjattava liike:</strong><br>Laitteessa on myös manuaalinen ohjausmahdollisuus, joka antaa omistajalle mahdollisuuden ohjata laserin liikettä. Tämä mahdollistaa vuorovaikutteisen leikin ja luo vahvemman siteen kissan ja omistajan välille.</p>" +
        "<p><strong>Turvallinen ja virikkeellinen leikki:</strong><br>Laserpisteen jahtaaminen tarjoaa turvallisen ja virikkeellisen leikin, joka auttaa kissaa pysymään aktiivisena ja viihdyttää sitä pitkiäkin aikoja.</p>" +
        "<p><strong>Automaattinen sammutus:</strong><br>Boltissa on automaattinen sammutustoiminto, joka estää lemmikkiäsi ylirasittumasta pitkän leikin aikana. Tämä ominaisuus myös säästää paristoja.</p>" +
        "<p><strong>Helppo käyttö:</strong><br>FroliCat Bolt on helppo käyttää yksinkertaisella painikkeella. Voit käynnistää ja pysäyttää lelun helposti tarpeesi mukaan.</p>" +
        "<p><strong>Monipuolinen virike:</strong><br>Tämä älykäs lelu tarjoaa monipuolisen virikkeen kissallesi, auttaen sitä käyttämään energiaansa ja tyydyttämään luonnollisia vaistojaan.</p>",
      img2: "",
      video: "",
    },
  };

  return productData[productName];
}

// Initialize and add the map
let map;

async function initMap() {
  const position = { lat: 62.240622, lng: 25.745344 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "PetTechNow",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "PetTechNow",
  });
}

initMap();

function hideNavbar() {
  $("#navbarSupportedContentLowerNav").collapse("hide");
}

document.addEventListener("DOMContentLoaded", function () {
  var navigationLinks = document.querySelectorAll(".navigation");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navigationLinks = document.querySelectorAll(".card-link");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    });
  });
});

var popupBtn = document.getElementById("newsbtn");
var popup = document.getElementById("popup");
var closeBtn = document.getElementById("close");

popupBtn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

var LpopupBtn = document.getElementById("lomakebtn");
var Lpopup = document.getElementById("Lpopup");
var LcloseBtn = document.getElementById("Lclose");

LpopupBtn.addEventListener("click", function (event) {
  event.preventDefault();
  Lpopup.style.display = "block";
});

LcloseBtn.addEventListener("click", function () {
  Lpopup.style.display = "none";
});

var newsbtnDelete = document.getElementById("btnDelete");
var Dpopup = document.getElementById("Dpopup");
var DcloseBtn = document.getElementById("Dclose");

newsbtnDelete.addEventListener("click", function (event) {
  event.preventDefault();
  Dpopup.style.display = "block";
});

DcloseBtn.addEventListener("click", function () {
  Dpopup.style.display = "none";
});
