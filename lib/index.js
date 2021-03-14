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

  const titleTarget = document.querySelector('.parallax-title');
  const textTarget = document.getElementById('description');
  const illustrationTarget = document.querySelector('.image-container');
  // const dateTarget = document.querySelector('.date');
  const copyrightTarget = document.querySelector('.copyright');

  console.log(data);

  titleTarget.insertAdjacentHTML('beforeend', title);
  textTarget.insertAdjacentHTML('beforeend', text);
  // dateTarget.insertAdjacentHTML('beforeend', date);



   if(mediaType == 'video') {
    illustrationTarget.innerHTML = `<iframe width="420" height="315"
    src="${url}">
    </iframe>`
   } else {
   illustrationTarget.style.backgroundImage = `url('${url}')`;
   }

  if (copyright.value === 'undefined') {
    copyrightTarget.insertAdjacentHTML('beforeend', '');
  } else {
    copyrightTarget.insertAdjacentHTML('beforeend', `${copyright}`);
  }
  });


  let atScroll = false;
  let parallaxTitle = document.querySelectorAll(".parallax-title");

  const scrollProgress = () => {
      atScroll = true;
  };

  const raf = () => {
      if (atScroll) {
          parallaxTitle.forEach((element, index) => {
              element.style.transform = "translateX(" + window.scrollY / 8 + "%)";
          });
          atScroll = false;
      }
      requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
  window.addEventListener("scroll", scrollProgress);

