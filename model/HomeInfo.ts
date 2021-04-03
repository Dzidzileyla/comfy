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

  const security = $('h3[class="css-1tohpeb e9d1vc82"]').get(0);
  console.log($(security).text());
  console.log($(security).html());

  // $(security).find('li').each((i,e) => {
  //   console.log($(e).text());
  // });

  return null;
};

webScrappingTest()
  .then(res => {
    console.log('');
  })
  .catch(err => {
    console.log(err);
  });
