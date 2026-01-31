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

  // --- Counter animation ---
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = new Set();

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
          countersAnimated.add(entry.target);
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

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
        return;
      }

      if (showreelVideo.muted) {
        showreelVideo.muted = false;
        playOverlay.classList.add('hidden');
        return;
      }

      showreelVideo.pause();
      playOverlay.classList.remove('hidden');
    });

    showreelVideo.addEventListener('play', () => {
      playOverlay.classList.add('hidden');
    });

    showreelVideo.addEventListener('pause', () => {
      playOverlay.classList.remove('hidden');
    });

    if (!showreelVideo.paused) {
      playOverlay.classList.add('hidden');
    }

    showreelVideo.addEventListener('ended', () => {
      playOverlay.classList.remove('hidden');
    });
  }

  // --- Expandable event cards ---
  document.querySelectorAll('[data-expandable]').forEach(card => {
    const header = card.querySelector('.event-card-header');
    header.addEventListener('click', () => {
      const wasExpanded = card.classList.contains('expanded');

      // Close all other cards
      document.querySelectorAll('[data-expandable].expanded').forEach(other => {
        if (other !== card) {
          other.classList.remove('expanded');
        }
      });

      // Toggle this card
      card.classList.toggle('expanded', !wasExpanded);
    });
  });

  // --- Testimonial dots ---
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('testimonialDots');

  if (track && dotsContainer) {
    const cards = track.querySelectorAll('.testimonial-card');
    const getGap = () => {
      const styles = window.getComputedStyle(track);
      const gapValue = parseFloat(styles.columnGap || styles.gap || '0');
      return Number.isFinite(gapValue) ? gapValue : 0;
    };

    const scrollToIndex = (index, behavior = 'smooth') => {
      const gap = getGap();
      const cardWidth = cards[0].offsetWidth + gap;
      track.scrollTo({ left: index * cardWidth, behavior });
    };

    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.classList.add('testimonial-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', () => {
        scrollToIndex(i);
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.testimonial-dot');

    const updateDots = () => {
      const gap = getGap();
      const cardWidth = cards[0].offsetWidth + gap;
      const activeIndex = Math.round(track.scrollLeft / cardWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
      });
    };

    track.addEventListener('scroll', updateDots, { passive: true });
    window.addEventListener('resize', updateDots);

    requestAnimationFrame(() => {
      scrollToIndex(0, 'auto');
      updateDots();
    });

    let autoAdvanceInterval = null;
    let userPaused = false;

    const startAutoAdvance = () => {
      if (autoAdvanceInterval || userPaused) return;
      autoAdvanceInterval = setInterval(() => {
        const gap = getGap();
        const cardWidth = cards[0].offsetWidth + gap;
        const currentIndex = Math.round(track.scrollLeft / cardWidth);
        const nextIndex = (currentIndex + 1) % cards.length;
        scrollToIndex(nextIndex);
      }, 5000);
    };

    const stopAutoAdvance = () => {
      if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = null;
      }
    };

    const autoAdvanceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAutoAdvance();
          } else {
            stopAutoAdvance();
          }
        });
      },
      { threshold: 0.4 }
    );

    autoAdvanceObserver.observe(track);

    const pauseAutoAdvance = () => {
      userPaused = true;
      stopAutoAdvance();
    };

    track.addEventListener('pointerdown', pauseAutoAdvance);
    track.addEventListener('wheel', pauseAutoAdvance, { passive: true });
    track.addEventListener('mouseenter', pauseAutoAdvance);
  }

  // --- Web3Forms contact form ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const chatWindow = document.getElementById('chatWindow');
  const chatInput = document.getElementById('chatInput');
  const chatSelect = document.getElementById('chatSelect');
  const chatTextarea = document.getElementById('chatTextarea');
  const chatDates = document.getElementById('chatDates');
  const chatNext = document.getElementById('chatNext');

  if (contactForm && chatWindow && chatInput && chatSelect && chatTextarea && chatDates && chatNext) {
    contactForm.addEventListener('submit', (e) => e.preventDefault());

    const hiddenFields = {
      name: document.getElementById('formName'),
      email: document.getElementById('formEmail'),
      service: document.getElementById('formService'),
      description: document.getElementById('formDescription'),
      dates: document.getElementById('formDates'),
    };

    const steps = [
      { key: 'name', prompt: 'Hey! What is your name?', type: 'text', input: chatInput, autocomplete: 'name' },
      { key: 'email', prompt: 'Great. What is your email address?', type: 'email', input: chatInput, autocomplete: 'email' },
      { key: 'service', prompt: 'Which service do you need?', type: 'select', input: chatSelect },
      { key: 'description', prompt: 'Tell me about the project.', type: 'textarea', input: chatTextarea },
      { key: 'dates', prompt: 'What are the project dates?', type: 'text', input: chatDates, autocomplete: 'off' },
    ];

    let stepIndex = 0;
    let mode = 'collect';

    const addMessage = (text, type) => {
      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${type}`;
      bubble.textContent = text;
      chatWindow.appendChild(bubble);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    const hideAllInputs = () => {
      chatInput.classList.add('chat-hidden');
      chatSelect.classList.add('chat-hidden');
      chatTextarea.classList.add('chat-hidden');
      chatDates.classList.add('chat-hidden');
    };

    const setActiveInput = (step) => {
      hideAllInputs();
      if (!step) return;
      if (step.input === chatInput) {
        chatInput.type = step.type === 'email' ? 'email' : 'text';
        chatInput.autocomplete = step.autocomplete || 'on';
        chatInput.value = '';
        chatInput.classList.remove('chat-hidden');
        chatInput.focus();
      } else if (step.input === chatSelect) {
        chatSelect.value = '';
        chatSelect.classList.remove('chat-hidden');
        chatSelect.focus();
      } else if (step.input === chatTextarea) {
        chatTextarea.value = '';
        chatTextarea.classList.remove('chat-hidden');
        chatTextarea.focus();
      } else if (step.input === chatDates) {
        chatDates.value = '';
        chatDates.classList.remove('chat-hidden');
        chatDates.focus();
      }
    };

    const getValue = (step) => {
      if (step.input === chatSelect) return chatSelect.value.trim();
      if (step.input === chatTextarea) return chatTextarea.value.trim();
      if (step.input === chatDates) return chatDates.value.trim();
      return chatInput.value.trim();
    };

    const validateValue = (step, value) => {
      if (!value) {
        formStatus.textContent = 'Please add a response to continue.';
        formStatus.className = 'form-status error';
        return false;
      }
      if (step.key === 'email') {
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!emailOk) {
          formStatus.textContent = 'Please enter a valid email address.';
          formStatus.className = 'form-status error';
          return false;
        }
      }
      formStatus.textContent = '';
      formStatus.className = 'form-status';
      return true;
    };

    const finishCollection = () => {
      mode = 'send';
      hideAllInputs();
      chatNext.textContent = 'Send';
      addMessage('Perfect. Ready to send your request?', 'bot');
    };

    const handleNext = async () => {
      if (mode === 'send') {
        chatNext.disabled = true;
        formStatus.textContent = 'Sending...';
        formStatus.className = 'form-status';
        try {
          const formData = new FormData(contactForm);
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
          });
          const result = await response.json();
          if (result.success) {
            addMessage('Thanks for sending! I will be in touch shortly.', 'bot');
            formStatus.textContent = 'Sent successfully.';
            formStatus.classList.add('success');
            setTimeout(() => {
              window.location.reload();
            }, 30000);
          } else {
            formStatus.textContent = 'Something went wrong. Please try again.';
            formStatus.classList.add('error');
            chatNext.disabled = false;
          }
        } catch (err) {
          formStatus.textContent = 'Network error. Please try again later.';
          formStatus.classList.add('error');
          chatNext.disabled = false;
        }
        return;
      }

      const step = steps[stepIndex];
      const value = getValue(step);
      if (!validateValue(step, value)) return;

      addMessage(value, 'user');
      if (hiddenFields[step.key]) {
        hiddenFields[step.key].value = value;
      }

      stepIndex += 1;
      if (stepIndex < steps.length) {
        addMessage(steps[stepIndex].prompt, 'bot');
        setActiveInput(steps[stepIndex]);
      } else {
        finishCollection();
      }
    };

    const handleInputKeydown = (event) => {
      if (event.key === 'Enter' && event.target !== chatTextarea) {
        event.preventDefault();
        handleNext();
      }
      if (event.key === 'Enter' && event.target === chatTextarea && !event.shiftKey) {
        event.preventDefault();
        handleNext();
      }
    };

    chatInput.addEventListener('keydown', handleInputKeydown);
    chatSelect.addEventListener('keydown', handleInputKeydown);
    chatTextarea.addEventListener('keydown', handleInputKeydown);
    chatDates.addEventListener('keydown', handleInputKeydown);
    chatNext.addEventListener('click', handleNext);

    addMessage(steps[0].prompt, 'bot');
    setActiveInput(steps[0]);
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

  // --- Parallax effect on hero video ---
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrollY < heroHeight) {
        heroVideo.style.transform = 'translateY(' + (scrollY * 0.3) + 'px) scale(1.05)';
      }
    }, { passive: true });
  }

  // --- Active nav link highlight on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
});
