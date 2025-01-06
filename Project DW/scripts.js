// Carousel untuk bawah navbar
const navbarSwiper = new Swiper('.navbar-swiper', {
    loop: true, // Loop through slides
    autoplay: {
      delay: 3000, // 3 seconds per slide
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
  
  const reviewSwiper = new Swiper('.review-swiper', {
    loop: false, // Tidak looping otomatis
    slidesPerView: 4, // Tampilkan 3 review sekaligus
    spaceBetween: 30, // Jarak antar review
    navigation: {
      nextEl: '.swiper-button-next', // Tombol next
      prevEl: '.swiper-button-prev', // Tombol prev
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1, // 1 review untuk layar kecil
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2, // 2 review untuk layar sedang
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3, // 3 review untuk layar besar
        spaceBetween: 30,
      },
    },
  });


  //API Untuk waktu indonesia
  async function fetchTime() {
    try {
      const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta');
      const data = await response.json();
      return new Date(data.datetime);
    } catch (error) {
      console.error('Gagal mengambil waktu dari API:', error);
      return new Date(); // Fallback ke waktu lokal
    }
  }

  async function updateClock() {
    const clockContainer = document.getElementById('digital-clock');
    const currentTime = await fetchTime();

    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    clockContainer.textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  updateClock();

  function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
      console.log('Menu toggled:', menu.classList); // Debug log
    } else {
      console.error('Mobile menu not found!');
    }
  }

  new Swiper('.review-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
