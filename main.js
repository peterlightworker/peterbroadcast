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
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    let activeIndex = 0;
    let autoAdvanceInterval = null;
    let userPaused = false;

    const updateTrackHeight = () => {
      const activeCard = cards[activeIndex];
      if (activeCard) {
        track.style.height = `${activeCard.offsetHeight}px`;
      }
    };

    const updateClasses = () => {
      cards.forEach((card, index) => {
        card.classList.remove(
          'is-active',
          'is-prev',
          'is-next',
          'is-far-prev',
          'is-far-next',
          'is-hidden'
        );

        if (index === activeIndex) {
          card.classList.add('is-active');
          return;
        }

        if (index === (activeIndex - 1 + cards.length) % cards.length) {
          card.classList.add('is-prev');
          return;
        }

        if (index === (activeIndex + 1) % cards.length) {
          card.classList.add('is-next');
          return;
        }

        if (index === (activeIndex - 2 + cards.length) % cards.length) {
          card.classList.add('is-far-prev');
          return;
        }

        if (index === (activeIndex + 2) % cards.length) {
          card.classList.add('is-far-next');
          return;
        }

        card.classList.add('is-hidden');
      });

      const dots = dotsContainer.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });

      updateTrackHeight();
    };

    const goToIndex = (index) => {
      activeIndex = (index + cards.length) % cards.length;
      updateClasses();
    };

    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        if (index === activeIndex) {
          goToIndex(activeIndex + 1);
          return;
        }
        goToIndex(index);
      });
    });

    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.classList.add('testimonial-dot');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', () => {
        goToIndex(i);
      });
      dotsContainer.appendChild(dot);
    });

    const startAutoAdvance = () => {
      if (autoAdvanceInterval || userPaused) return;
      autoAdvanceInterval = setInterval(() => {
        goToIndex(activeIndex + 1);
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

    updateClasses();
    window.addEventListener('resize', updateTrackHeight);
  }

  // --- Web3Forms contact form ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const chatWindow = document.getElementById('chatWindow');
  const chatInput = document.getElementById('chatInput');
  const chatSelect = document.getElementById('chatSelect');
  const chatTextarea = document.getElementById('chatTextarea');
  const chatOtherService = document.getElementById('chatOtherService');
  const chatDates = document.getElementById('chatDates');
  const chatNext = document.getElementById('chatNext');

  if (contactForm && chatWindow && chatInput && chatSelect && chatTextarea && chatOtherService && chatDates && chatNext) {
    contactForm.addEventListener('submit', (e) => e.preventDefault());

    const hiddenFields = {
      name: document.getElementById('formName'),
      email: document.getElementById('formEmail'),
      service: document.getElementById('formService'),
      otherService: document.getElementById('formOtherService'),
      description: document.getElementById('formDescription'),
      dates: document.getElementById('formDates'),
    };

    const steps = [
      { key: 'name', prompt: 'Hey! What is your name?', type: 'text', input: chatInput, autocomplete: 'name' },
      { key: 'email', prompt: 'Great. What is your email address?', type: 'email', input: chatInput, autocomplete: 'email' },
      { key: 'service', prompt: 'Which service do you need?', type: 'select', input: chatSelect },
      { key: 'otherService', prompt: 'Tell me the other service you need.', type: 'text', input: chatOtherService, autocomplete: 'off', conditional: (state) => state.service === 'Other' },
      { key: 'description', prompt: 'Tell me about the project.', type: 'textarea', input: chatTextarea },
      { key: 'dates', prompt: 'What are the project dates?', type: 'text', input: chatDates, autocomplete: 'off' },
    ];

    const chatState = {
      name: '',
      email: '',
      service: '',
      otherService: '',
      description: '',
      dates: '',
    };

    let stepIndex = 0;
    let mode = 'collect';
    const formStartTime = Date.now();
    let isSending = false;
    let hasSubmitted = false;

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
      chatOtherService.classList.add('chat-hidden');
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
      } else if (step.input === chatOtherService) {
        chatOtherService.value = '';
        chatOtherService.classList.remove('chat-hidden');
        chatOtherService.focus();
      } else if (step.input === chatDates) {
        chatDates.value = '';
        chatDates.classList.remove('chat-hidden');
        chatDates.focus();
      }
    };

    const getValue = (step) => {
      if (step.input === chatSelect) return chatSelect.value.trim();
      if (step.input === chatTextarea) return chatTextarea.value.trim();
      if (step.input === chatOtherService) return chatOtherService.value.trim();
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
        if (isSending || hasSubmitted) return;
        const timeOnForm = Date.now() - formStartTime;
        if (timeOnForm < 6000) {
          formStatus.textContent = 'Please take a moment to complete the form before sending.';
          formStatus.className = 'form-status error';
          return;
        }
        chatNext.disabled = true;
        formStatus.textContent = 'Sending...';
        formStatus.className = 'form-status';
        isSending = true;
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
            hasSubmitted = true;
            setTimeout(() => {
              window.location.reload();
            }, 30000);
          } else {
            formStatus.textContent = 'Something went wrong. Please try again.';
            formStatus.classList.add('error');
            chatNext.disabled = false;
            isSending = false;
          }
        } catch (err) {
          formStatus.textContent = 'Network error. Please try again later.';
          formStatus.classList.add('error');
          chatNext.disabled = false;
          isSending = false;
        }
        return;
      }

      let step = steps[stepIndex];
      while (step && step.conditional && !step.conditional(chatState)) {
        stepIndex += 1;
        step = steps[stepIndex];
      }
      if (!step) {
        finishCollection();
        return;
      }

      const value = getValue(step);
      if (!validateValue(step, value)) return;

      addMessage(value, 'user');
      chatState[step.key] = value;
      if (step.key === 'service') {
        hiddenFields.service.value = value;
      }
      if (step.key === 'otherService') {
        hiddenFields.otherService.value = value;
      }
      if (step.key === 'name') hiddenFields.name.value = value;
      if (step.key === 'email') hiddenFields.email.value = value;
      if (step.key === 'description') hiddenFields.description.value = value;
      if (step.key === 'dates') hiddenFields.dates.value = value;

      stepIndex += 1;
      let nextStep = steps[stepIndex];
      while (nextStep && nextStep.conditional && !nextStep.conditional(chatState)) {
        stepIndex += 1;
        nextStep = steps[stepIndex];
      }
      if (nextStep) {
        addMessage(nextStep.prompt, 'bot');
        setActiveInput(nextStep);
        return;
      }

      finishCollection();
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
    chatOtherService.addEventListener('keydown', handleInputKeydown);
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
