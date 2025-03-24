// Send GET request to advertience API, then push returned data to dataLayer
window.attributeControl = (clientTab) => {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = () => {
    const data = JSON.parse(xhttp.responseText);
    data.event = 'adv_pageview';
  
    window.dataLayer = window.dataLayer || [];
    dataLayer.push(data);
  };

  xhttp.onerror = () => {
    console.log('Error while sending GET request to Advertience API');

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({event: 'adv_pageview'});
  };
  
  xhttp.open('GET', 'https://advertience-api.advertience.com/v1/attribute/' + clientTab + '/' + window.location.search);
  xhttp.send();
}
