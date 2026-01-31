document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar scroll effect ---
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- Mobile menu ---
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  const openMenu = () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', openMenu);
  mobileMenuClose.addEventListener('click', closeMenu);

  // Close mobile menu when a nav link is clicked
  mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // --- Scroll-triggered reveal animations ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Showreel video click-to-play ---
  const showreelVideo = document.getElementById('showreelVideo');
  const playOverlay = document.getElementById('playOverlay');
  const showreelWrapper = document.getElementById('showreelWrapper');

  if (showreelVideo && playOverlay) {
    showreelWrapper.addEventListener('click', () => {
      if (showreelVideo.paused) {
        showreelVideo.muted = false;
        showreelVideo.play();
        playOverlay.classList.add('hidden');
      } else {
        showreelVideo.pause();
        playOverlay.classList.remove('hidden');
      }
    });

    showreelVideo.addEventListener('ended', () => {
      playOverlay.classList.remove('hidden');
    });
  }

  // --- Testimonial dots ---
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('testimonialDots');

  if (track && dotsContainer) {
    const cards = track.querySelectorAll('.testimonial-card');
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.classList.add('testimonial-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      dot.addEventListener('click', () => {
        cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.testimonial-dot');

    const updateDots = () => {
      const scrollLeft = track.scrollLeft;
      const cardWidth = cards[0].offsetWidth + 24; // gap
      const activeIndex = Math.round(scrollLeft / cardWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
      });
    };

    track.addEventListener('scroll', updateDots, { passive: true });
  }

  // --- Scroll to top ---
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Smooth scroll offset for fixed nav ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
