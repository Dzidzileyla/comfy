import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const webScrappingTest = async () => {
  const { data } = await axios.get(
    'https://www.otodom.pl/sprzedaz/dom/wroclaw/?search%5Bfilter_enum_market%5D=secondary&search%5Bpaidads_listing%5D=1&search%5Bregion_id%5D=1&search%5Bsubregion_id%5D=381&search%5Bcity_id%5D=39&search%5Bdist%5D=15&nrAdsPerPage=72'
  );

  // fs.writeFile('sample.html', data, function (err) {
  //   if (err) return console.log(err);
  //   console.log('Hello World > helloworld.txt');
  // });

  const $ = cheerio.load(data);

  // wyciaga mi link z pierwszej stony po odsortowaniu
  $('.offer-item-image').each((index, elem) => {
    const figure = $(elem);
    const a = figure.find('a');

    console.log(a.attr('href'));
  });

  $('.pager')
    .find('li')
    .each((index, elem) => {
      const li = $(elem);
      const a = li.find('a');

      if (index === 2) {
        console.log(a.text());
        console.log(a.attr('href'));
      }
    });

  return null;
};

webScrappingTest()
  .then(res => {
    console.log('');
  })
  .catch(err => {
    console.log(err);
  });
