import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const webScrappingTest = async () => {
  const { data } = await axios.get(
    'https://www.otodom.pl/pl/oferta/wroclaw-mokronos-dolny-super-oferta-ID4aFmj.html#db90a66f92'
  );

  // fs.writeFile('sample.html', data, function (err) {
  //   if (err) return console.log(err);
  //   console.log('Hello World > helloworld.txt');
  // });

  const $ = cheerio.load(data);

  const name = $('h1.css-46s0sq.edo911a18').text();
  console.log(name);

  const generalPicture = $('picture').find('img').attr('src');
  console.log(generalPicture);

  $('div').each((i, e) => {
    console.log($(e).attr('aria-label'));
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
