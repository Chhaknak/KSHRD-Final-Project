

     var characterList = [{
             name: 'Angkor Wat',
             description: 'Angkor Wat is a Hindu temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares. ',
             img: 'http://www.vhappytravel.com/userfiles/angkorwat-att-b.jpg',
             detail: 'angkorwat.html'
         },
         {
             name: 'Bayon',
             description: 'xxxx',
             img: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/bac74c7535fc9079461678dd8737d5d1-bayon.jpg',
             detail: 'adminLogin.html'
         },

         {
             name: 'Ta Prohm',
             description: 'xxxx',
             img: 'https://live.staticflickr.com/4703/38984388405_580670398a_b.jpg',
             detail: 'adminLogin.html'
         },
         {
             name: 'Neak Pean',
             description: 'xxxx',
             img: 'http://www.visitcambodia.org/sites/default/files/2018-09/neak-pean.jpg',
             detail: 'adminLogin.html'
         },
         {
             name: 'Preah Khan',
             description: 'xxxx',
             img: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Preah_Khan_temple_at_Angkor%2C_Cambodia.jpg',
             detail: 'adminLogin.html'
         },
         {
             name: 'Koh Ker',
             description: 'xxxx',
             img: 'https://cambodiagoldentours.com/wp-content/uploads/2018/06/koh-ker-temple.jpg',
             detail: 'adminLogin.html'
         }

     ]

 let content = ''

 function getCharacterList() {
     for (c of characterList) {
         content = `
                    <div class="swiper-slide">
                        <!-- Card Wider -->
                            <a href="${c.detail}">
                                <div class="card card-cascade wider">

                                <!-- Card image -->
                                <div class="view view-cascade">
                                    <img class="card-img-top" src="${c.img}" alt="Card image cap">
                                </div>

                                <!-- Card content -->
                                <div class="card-body card-body-cascade text-center">
                                    <!-- Title -->
                                    <h4 class="card-title black-text headingText"><strong>${c.name}</strong></h4>
                                    <!-- Text -->
                                    <p class="card-text">${c.description}</p>
                                </div>

                                </div>
                            </a>
                        <!-- Card Wider -->
                    `
         $('.swiper-wrapper').append(content);
     }

 }

 $(function () {
         getCharacterList();
         var swiper = new Swiper('.swiper-container', {
             effect: 'coverflow',
             grabCursor: true,
             centeredSlides: true,
             slidesPerView: 'auto',
             spacebetween: 30,
             loop: true,
             coverflowEffect: {
                 rotate: 50,
                 stretch: 0,
                 depth: 100,
                 modifier: 1,
                 slideShadows: true,
             },
             autoplay: {
                 delay: 2500,
                 disableOnInteraction: false,
             },
             pagination: {
                 el: '.swiper-pagination',
                 clickable: true,
             },
             navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
             },

         });
     }) 