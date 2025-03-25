// Send GET request to Helio API, then push returned data to dataLayer
window.attributeControl = (clientTab) => {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = () => {
    const data = JSON.parse(xhttp.responseText);
    data.event = 'helio_pageview';
  
    window.dataLayer = window.dataLayer || [];
    dataLayer.push(data);
  };

  xhttp.onerror = () => {
    console.log('Error while sending GET request to Helio API');

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({event: 'helio_pageview'});
  };
  
  xhttp.open('GET', 'https://advertience-api.advertience.com/v1/attribute/' + clientTab + '/' + window.location.search);
  xhttp.send();
}
