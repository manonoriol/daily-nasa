const endpoint = 'https://api.nasa.gov/planetary/apod?api_key=xXO2hiFlxhuWJTf2pRMqsgsS9ecQtebItfGumZud';

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
  const title = data.title;
  const date = data.date;
  const text = data.explanation;
  const url = data.url;
  const copyright = data.copyright;
  const mediaType = data.media_type;

  const titleTarget = document.querySelector('h1');
  const textTarget = document.getElementById('description');
  const illustrationTarget = document.querySelector('.illustration');
  const dateTarget = document.querySelector('.date');
  const copyrightTarget = document.querySelector('.copyright');

  console.log(data);

  titleTarget.insertAdjacentHTML('beforeend', title);
  textTarget.insertAdjacentHTML('beforeend', text);
  dateTarget.insertAdjacentHTML('beforeend', date);
  copyrightTarget.insertAdjacentHTML('beforeend', `${copyright}`);


   if(mediaType == 'video') {
    illustrationTarget.innerHTML = `<iframe width="420" height="315"
src="${url}">
</iframe>`
   } else {
   illustrationTarget.innerHTML = `<div class="image" style="background-image: url(${url});">
 <img src="${url}" style="visibility: hidden;"/>
</div>`
   }

  });
