
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


