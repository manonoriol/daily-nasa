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
  const illustrationTarget = document.querySelector('.container');
  const copyrightTarget = document.querySelector('.copyright');

  console.log(data);

  titleTarget.insertAdjacentHTML('beforeend', title);
  textTarget.insertAdjacentHTML('beforeend', text);


   if(mediaType == 'video') {
    illustrationTarget.innerHTML = `
    <h1 style ="color: white; text-transform: lowercase; font-family: monument regular; text-align: center;">${title}</h1>
    <iframe width="600" height="300" style="margin: 80px 0px; border: 1px solid black;"
    src="${url}">
    </iframe>`
   } else {
   illustrationTarget.innerHTML =
   `<div class="image-container style="background-image: url('${url}')">
                        <h2 class="text text-dark">
                            <span class="parallax-title">
                            </span>
                        </h2>
                    </div>`
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

