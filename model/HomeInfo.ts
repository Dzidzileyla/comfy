import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const webScrappingTest = async () => {
  const { data } = await axios.get(
    'https://www.otodom.pl/pl/oferta/sprzedam-dom-prezyce-z-basenem-boisko-wroclaw-ID49QTQ.html#bf77ac3b94'
  );

  // fs.writeFile('sample.html', data, function (err) {
  //   if (err) return console.log(err);
  //   console.log('Hello World > helloworld.txt');
  // });

  const $ = cheerio.load(data);

  const offerDescription = $('h1[data-cy=adPageAdTitle]').text();
  console.log(offerDescription);

  const price = $('strong[aria-label=Cena]').text();
  console.log(price);

  const pricePerSquare = $('div[aria-label="Cena za metr kwadratowy"]').text();
  console.log(pricePerSquare);

  const imageLink = $(`img[alt="${offerDescription}"]`).attr('src');
  console.log(imageLink);

  const landArea = $('div[aria-label="Powierzchnia działki"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(landArea);

  const numberOfRooms = $('div[aria-label="Liczba pokoi"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(numberOfRooms);

  const buildingMaterial = $('div[aria-label="Materiał budynku"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(buildingMaterial);

  const roofType = $('div[aria-label="Dach"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(roofType);

  const windowType = $('div[aria-label="Okna"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(windowType);

  const area = $('div[aria-label="Powierzchnia"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(area);

  const typeOfBuilding = $('div[aria-label="Rodzaj zabudowy"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(typeOfBuilding);

  const yearOfBuilding = $('div[aria-label="Rok budowy"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(yearOfBuilding);

  const roofing = $('div[aria-label="Pokrycie dachu"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(roofing);

  const location = $('div[aria-label="Położenie"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(location);

  const typeOfMarket = $('div[aria-label="Rynek"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(typeOfMarket);

  const numberOfFloors = $('div[aria-label="Liczba pięter"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(numberOfFloors);

  const typeOfAttic = $('div[aria-label="Poddasze"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(typeOfAttic);

  const state = $('div[aria-label="Stan wykończenia"]')
    .find('div[class="css-1ytkscc ecjfvbm0"]')
    .text();
  console.log(state);

  const description = $('div[data-cy=adPageAdDescription]').find('p').text();
  console.log(description);

  const categories = $('div[class="css-1spf00e e9d1vc83"]');

  categories.each((i, e) => {
    const category = $(e);
    const nameOfCategory = category.find('h3[class="css-1tohpeb e9d1vc82"]');

    // 'zabezpieczenia'
    if (nameOfCategory.text() === 'zabezpieczenia') {
      console.log(nameOfCategory.text());

      category
        .find(
          'li[data-cy="ad.ad-features.categorized-list.item-with-category"]'
        )
        .each((i, e) => {
          console.log($(e).text());
        });
    }

    if (nameOfCategory.text() === 'ogrodzenie') {
      console.log(nameOfCategory.text());

      category
        .find(
          'li[data-cy="ad.ad-features.categorized-list.item-with-category"]'
        )
        .each((i, e) => {
          console.log($(e).text());
        });
    }
  });

  const req = JSON.parse(String($('script[id="__NEXT_DATA__"]').html()));
  console.log(String($('script[id="__NEXT_DATA__"]').html()));
  console.log(req);

  const { props } = req;
  // console.log(props);
  const { pageProps } = props;
  console.log(pageProps);

  // Opis ogloszenia
  console.log(pageProps.ad.title);

  // Address w wersji skroconej
  console.log(JSON.stringify(pageProps.ad.location.address[0].value));

  // Cena
  console.log(JSON.stringify(pageProps.ad.target.Price));

  // Cena Zakres
  console.log(JSON.stringify(pageProps.ad.target.PriceRange));

  // Cena za metr
  console.log(JSON.stringify(pageProps.ad.target.Price_per_m));

  // Powierzchnia dzialki
  console.log(JSON.stringify(pageProps.ad.target.Terrain_area));

  // Powierzchnia dzialki
  console.log(JSON.stringify(pageProps.ad.target.Rooms_num));

  return null;
};

webScrappingTest()
  .then(res => {
    console.log('');
  })
  .catch(err => {
    console.log(err);
  });
