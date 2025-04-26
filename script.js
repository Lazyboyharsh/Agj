
document.addEventListener('DOMContentLoaded', () => {
  let countersStarted = false;

  const startCounters = () => {
    if (countersStarted) return;
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / 40);

        if (current < target) {
          counter.innerText = current + increment > target ? target : current + increment;
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    countersStarted = true;
  };

  const statsSection = document.getElementById('stats');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startCounters();
      observer.disconnect(); // stop observing once triggered
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
  },
});

