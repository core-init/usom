const axios = require('axios');

const usomhedef = 'https://www.usom.gov.tr/url-list.txt';

axios.get(usomhedef)
  .then(response => {
    const htmlContent = response.data;

    if (htmlContent.includes('parafhepyaninda.tk')) {
      console.log(`parafhepyaninda.tk`);
    } else {
      console.log('Not found');
    }
  })
  .catch(error => {
    console.error('Hata oluştu:', error);
  });
