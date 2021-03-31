import axios from 'axios';
import cheerio from 'cheerio';

const webScrappingTest = async () => {
  const { data } = await axios.get(
    'https://www.otodom.pl/sprzedaz/dom/wroclaw/?search%5Bregion_id%5D=1&search%5Bsubregion_id%5D=381&search%5Bcity_id%5D=39'
  );

  const $ = cheerio.load(data);

  $('article').each((i, elem) => {
    const article = $(elem);

    const figure = article.find('.offer-item-image');
    const a = figure.find('a');

    console.log(a.attr('href'));
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
