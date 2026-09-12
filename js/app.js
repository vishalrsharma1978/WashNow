/* ==========================================================================
   WashNow - Interactive Application Logic
   Tailored for Indian Commercial Laundry, Climate Adaptation & Fabric Lab
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initWeatherTabs();
  initFabricLab();
  initServiceExplorer();
  initRoiCalculator();
  initHubsNetwork();
  initIndustryTabs();
  initModals();
  initRfidSimulation();
  initMetricsCounter();
  initHeroShowcase();
  initLanguageSwitch();
  initImpactCounter();
  initLinenTracker();
  initAuditScheduler();
  initChatbot();
});

/* --------------------------------------------------------------------------
   1. Navigation & Scroll Effects
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isOpen = navMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside or on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Weather & Climate Adaptation Tabs
   -------------------------------------------------------------------------- */
function initWeatherTabs() {
  const tabBtns = document.querySelectorAll('.weather-tab-btn');
  const tabContents = document.querySelectorAll('.weather-tab-content');

  const weatherSimulatorValues = {
    monsoon: {
      humidity: '94% Relative Humidity',
      moldRisk: '98% Prevented via Ozone',
      temp: '32°C Controlled Dehumidification',
      speed: '4.5 Hr Rapid Turnaround',
      progress: 95
    },
    summer: {
      humidity: '28% Arid Heat',
      moldRisk: '100% Perspiration Salt Removed',
      temp: '44°C Fiber Thermal Lock',
      speed: '3.8 Hr Express Service',
      progress: 88
    },
    coastal: {
      humidity: '85% Saline Coastal Air',
      moldRisk: 'Zero Salt Encrustation',
      temp: '30°C Anti-Corrosion Treatment',
      speed: '4.0 Hr Dock-to-Closet',
      progress: 92
    },
    winter: {
      humidity: '65% Winter Inversion & Smog',
      moldRisk: '100% Carbon/Soot Extraction',
      temp: '14°C Micro-Thermal Steaming',
      speed: '4.2 Hr Deep Wash Cycle',
      progress: 85
    }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(`weather-${target}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }

      // Update hero/preview simulator stats if present
      const simData = weatherSimulatorValues[target];
      if (simData) {
        const simHumidity = document.getElementById('sim-humidity');
        const simWash = document.getElementById('sim-wash-formula');
        const simSpeed = document.getElementById('sim-speed');
        const simBar = document.getElementById('sim-bar');

        if (simHumidity) simHumidity.textContent = simData.humidity;
        if (simWash) simWash.textContent = simData.moldRisk;
        if (simSpeed) simSpeed.textContent = simData.speed;
        if (simBar) simBar.style.width = `${simData.progress}%`;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Fabric Lab Interactive Matrix
   -------------------------------------------------------------------------- */
function initFabricLab() {
  const fabricCards = document.querySelectorAll('.fabric-card');
  fabricCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--color-secondary)';
    });
    card.addEventListener('mouseleave', () => {
      if (!card.classList.contains('active-card')) {
        card.style.borderColor = '';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3b. Interactive Service Explorer (Hospitality & Healthcare)
   -------------------------------------------------------------------------- */
function initServiceExplorer() {
  const explorers = document.querySelectorAll('.svc-explorer');

  explorers.forEach(explorer => {
    const tabs = explorer.querySelectorAll('.svc-tab');
    const panels = explorer.querySelectorAll('.svc-panel');

    function activate(target) {
      tabs.forEach(t => t.classList.toggle('active', t.dataset.target === target));
      panels.forEach(p => p.classList.toggle('active', p.id === target));
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => activate(tab.dataset.target));
      tab.addEventListener('mouseenter', () => activate(tab.dataset.target));
    });
  });
}


function initRoiCalculator() {
  const roomCountSlider = document.getElementById('calc-rooms');
  const linenWeightSlider = document.getElementById('calc-weight');
  const propertyTypeSelect = document.getElementById('calc-property-type');
  const waterSourceSelect = document.getElementById('calc-water-source');

  const displayRooms = document.getElementById('disp-rooms');
  const displayWeight = document.getElementById('disp-weight');
  
  const resAnnualSavings = document.getElementById('res-annual-savings');
  const resWaterSaved = document.getElementById('res-water-saved');
  const resLinenLife = document.getElementById('res-linen-life');
  const resCarbonReduced = document.getElementById('res-carbon-reduced');

  function calculateROI() {
    if (!roomCountSlider || !linenWeightSlider) return;

    const rooms = parseInt(roomCountSlider.value, 10);
    const weightPerRoom = parseFloat(linenWeightSlider.value);
    const propertyMultiplier = parseFloat(propertyTypeSelect ? propertyTypeSelect.value : '1.0');
    const waterFactor = parseFloat(waterSourceSelect ? waterSourceSelect.value : '1.0');

    // Display updates
    if (displayRooms) displayRooms.textContent = `${rooms} Rooms / Keys`;
    if (displayWeight) displayWeight.textContent = `${weightPerRoom} kg / room`;

    // Calculations for Indian Hospitality & Healthcare Economics
    // Total daily linen in kg:
    const dailyKg = rooms * weightPerRoom * 0.82; // 82% average occupancy
    const annualKg = dailyKg * 365;

    // Traditional In-House OPL or Unorganized Dhobi cost per kg in India approx INR 28-36/kg
    // WashNow outsourced high-efficiency model optimizes to INR 20-22/kg + linen loss reduction
    const costSavingsPerKg = 7.50 * propertyMultiplier * waterFactor;
    const annualInrSavings = annualKg * costSavingsPerKg;

    // Water saved (WashNow CBW tunnels consume 4.5L/kg vs 16L/kg in traditional washers)
    const waterSavedLiters = annualKg * (16 - 4.5);
    const waterSavedLakhLiters = (waterSavedLiters / 100000).toFixed(1);

    // Carbon reduction in Metric Tonnes
    const carbonSavedTons = ((annualKg * 0.32) / 1000).toFixed(1);

    // Format Indian Rupees in Lakhs / Crores
    let formattedSavings = '';
    if (annualInrSavings >= 10000000) {
      formattedSavings = `₹ ${(annualInrSavings / 10000000).toFixed(2)} Cr`;
    } else {
      formattedSavings = `₹ ${(annualInrSavings / 100000).toFixed(1)} Lakhs`;
    }

    if (resAnnualSavings) resAnnualSavings.textContent = formattedSavings;
    if (resWaterSaved) resWaterSaved.textContent = `${waterSavedLakhLiters} Lakh Liters`;
    if (resLinenLife) resLinenLife.textContent = `+38% Wash Cycles`;
    if (resCarbonReduced) resCarbonReduced.textContent = `${carbonSavedTons} Tons CO₂`;
  }

  if (roomCountSlider) roomCountSlider.addEventListener('input', calculateROI);
  if (linenWeightSlider) linenWeightSlider.addEventListener('input', calculateROI);
  if (propertyTypeSelect) propertyTypeSelect.addEventListener('change', calculateROI);
  if (waterSourceSelect) waterSourceSelect.addEventListener('change', calculateROI);

  // Initial calculation
  calculateROI();
}

/* --------------------------------------------------------------------------
   5. Pan-India Hubs Network Showcase
   -------------------------------------------------------------------------- */
function initHubsNetwork() {
  const hubCards = document.querySelectorAll('.hub-card');
  const hubCityDisplay = document.getElementById('net-disp-city');
  const hubCapDisplay = document.getElementById('net-disp-cap');
  const hubTechDisplay = document.getElementById('net-disp-tech');
  const hubFleetDisplay = document.getElementById('net-disp-fleet');

  const hubDetails = {
    'delhi-ncr': {
      city: 'Delhi NCR Mega Facility (Manesar & Noida)',
      capacity: '65,000 kg / day',
      tech: '2x 14-Module Continuous Batch Tunnel Washers, Zero Liquid Discharge (ZLD) RO Plant',
      fleet: '24 GPS-Tracked Dehumidified Electric Vans'
    },
    'mumbai': {
      city: 'Mumbai & MMR Facility (Bhiwandi & Navi Mumbai)',
      capacity: '75,000 kg / day',
      tech: 'Monsoon Anti-Mildew Atmospheric Chamber, 3x High-Speed Ironing Lines',
      fleet: '30 Monsoon-Sealed Climate-Controlled Cargo Trucks'
    },
    'bengaluru': {
      city: 'Bengaluru Tech & Hospitality Hub (Peenya)',
      capacity: '50,000 kg / day',
      tech: 'RFID High-Frequency Gate Scanners, Automated Garment Sorting Tunnel',
      fleet: '18 Dedicated Express Logistics Vehicles'
    },
    'hyderabad': {
      city: 'Hyderabad Mega Hub (Shamshabad Airport Zone)',
      capacity: '40,000 kg / day',
      tech: 'Biomedical Barrier Washers for Healthcare, Natural Gas Clean Steam Boilers',
      fleet: '14 Climate-Insulated Delivery Fleets'
    },
    'chennai': {
      city: 'Chennai & South Hub (Sriperumbudur)',
      capacity: '35,000 kg / day',
      tech: 'Desalination & Hard-Water Softening Unit, Silk & Linen Neutralizers',
      fleet: '12 Logistics Trucks with Live Temp Monitoring'
    },
    'goa-jaipur': {
      city: 'Luxury Resort Hubs (Goa & Jaipur Palaces)',
      capacity: '30,000 kg / day',
      tech: 'Heritage Zari & Fine Fabric pH-Balancing Baths, Turmeric Stain Extractors',
      fleet: '10 Resort-Direct Fast Response Shuttles'
    }
  };

  hubCards.forEach(card => {
    card.addEventListener('click', () => {
      hubCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const hubKey = card.dataset.hub;
      const details = hubDetails[hubKey];

      if (details) {
        if (hubCityDisplay) hubCityDisplay.textContent = details.city;
        if (hubCapDisplay) hubCapDisplay.textContent = details.capacity;
        if (hubTechDisplay) hubTechDisplay.textContent = details.tech;
        if (hubFleetDisplay) hubFleetDisplay.textContent = details.fleet;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Industries Filter Tabs
   -------------------------------------------------------------------------- */
function initIndustryTabs() {
  const tabs = document.querySelectorAll('.industry-tab-btn');
  const cards = document.querySelectorAll('.industry-item-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Modals: Request Quote & Client Portal
   -------------------------------------------------------------------------- */
function initModals() {
  // Quote Modal
  const openQuoteBtns = document.querySelectorAll('.btn-open-quote');
  const quoteModal = document.getElementById('quote-modal');
  const portalModal = document.getElementById('portal-modal');
  const openPortalBtns = document.querySelectorAll('.btn-client-portal');
  const closeBtns = document.querySelectorAll('.modal-close, .btn-modal-cancel');

  openQuoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (quoteModal) quoteModal.classList.add('active');
      const navMenu = document.querySelector('.nav-menu');
      if (navMenu) navMenu.classList.remove('active');
    });
  });

  openPortalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (portalModal) portalModal.classList.add('active');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (quoteModal) quoteModal.classList.remove('active');
      if (portalModal) portalModal.classList.remove('active');
    });
  });

  // Close when clicking modal backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  // Handle Form Submissions
  const rfqForm = document.getElementById('rfq-form');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = rfqForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting to Engineering Team...</span>`;

      setTimeout(() => {
        alert('Thank you for contacting WashNow! Our Indian Regional Commercial Operations Lead will share an audit proposal within 2 hours.');
        rfqForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (quoteModal) quoteModal.classList.remove('active');
      }, 1200);
    });
  }

  const portalForm = document.getElementById('portal-login-form');
  if (portalForm) {
    portalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const portalFeedback = document.getElementById('portal-feedback');
      if (portalFeedback) {
        portalFeedback.style.display = 'block';
        portalFeedback.innerHTML = `<strong>Connected:</strong> Live RFID Dispatch active for Delhi Hub & Mumbai Hub. Accessing encrypted par-level stream...`;
      }
    });
  }
}

/* --------------------------------------------------------------------------
   8. Live RFID Stream Simulation in Tech Hub
   -------------------------------------------------------------------------- */
function initRfidSimulation() {
  const streamContainer = document.getElementById('rfid-stream');
  if (!streamContainer) return;

  const mockItems = [
    { tag: 'WN-TC400-8842', item: '400TC King Duvet Cover (Taj Palace)', status: 'Ironed & Folded', time: 'Just now' },
    { tag: 'WN-TRY-5519', item: '700 GSM Bath Sheet (Marriott Juhu)', status: 'Moisture Checked 0.2%', time: '12s ago' },
    { tag: 'WN-MED-3104', item: 'Barrier Surgical Drape (Apollo Hospital)', status: 'Autoclave Disinfected', time: '28s ago' },
    { tag: 'WN-FNB-9921', item: 'Damask Saffron Table Runner (ITC Maurya)', status: 'Turmeric Stain Extracted', time: '45s ago' },
    { tag: 'WN-SLK-1290', item: 'Mulberry Silk Uniform Coat (The Oberoi)', status: 'pH-Neutral Steam Finish', time: '1m ago' }
  ];

  let currentIndex = 0;

  setInterval(() => {
    const item = mockItems[currentIndex];
    const newRow = document.createElement('div');
    newRow.className = 'rfid-stream-row';
    newRow.innerHTML = `
      <div>
        <span class="rfid-tag-id">${item.tag}</span>
        <span style="color: #cbd5e1; margin-left: 8px;">${item.item}</span>
      </div>
      <div class="rfid-tag-status">${item.status}</div>
    `;

    streamContainer.prepend(newRow);
    if (streamContainer.children.length > 5) {
      streamContainer.removeChild(streamContainer.lastChild);
    }

    currentIndex = (currentIndex + 1) % mockItems.length;
  }, 3500);
}

/* --------------------------------------------------------------------------
   9. Metrics Animated Counter
   -------------------------------------------------------------------------- */
function initMetricsCounter() {
  const counters = document.querySelectorAll('.counter-val');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1800; // ms
          const step = Math.ceil(target / (duration / 25));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target.toLocaleString('en-IN');
              clearInterval(timer);
            } else {
              counter.textContent = current.toLocaleString('en-IN');
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.hero-stats-row');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* --------------------------------------------------------------------------
   10. Hero Offering Showcase (auto-rotating images)
   -------------------------------------------------------------------------- */
function initHeroShowcase() {
  const showcase = document.getElementById('hero-showcase');
  if (!showcase) return;

  const slides = Array.from(showcase.querySelectorAll('.showcase-slide'));
  const dotsWrap = document.getElementById('showcase-dots');
  if (slides.length === 0) return;

  let current = 0;
  let timer = null;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'showcase-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Show offering ' + (i + 1));
    dot.addEventListener('click', () => { show(i); restart(); });
    dotsWrap && dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { show(current + 1); }

  function restart() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, 3500);
  }

  // Pause on hover
  showcase.addEventListener('mouseenter', () => timer && clearInterval(timer));
  showcase.addEventListener('mouseleave', restart);

  restart();
}

/* --------------------------------------------------------------------------
   11. Multilingual Language Switch (EN / हिन्दी / मराठी)
   -------------------------------------------------------------------------- */
function initLanguageSwitch() {
  const dict = window.WASHNOW_I18N;
  if (!dict) return;
  const buttons = document.querySelectorAll('.lang-btn');
  if (buttons.length === 0) return;

  function apply(lang) {
    const pack = dict[lang] || dict.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (pack[key] != null) el.textContent = pack[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (pack[key] != null) el.innerHTML = pack[key];
    });
    document.documentElement.setAttribute('lang', lang);
    // Sync active state across ALL language switches (header + mobile menu)
    buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    try { localStorage.setItem('washnow_lang', lang); } catch (e) {}
  }

  buttons.forEach(btn => btn.addEventListener('click', () => apply(btn.dataset.lang)));

  let saved = 'en';
  try { saved = localStorage.getItem('washnow_lang') || 'en'; } catch (e) {}
  if (saved !== 'en') apply(saved);
}

/* --------------------------------------------------------------------------
   12. Live Sustainability Impact Counter (ticks upward in real time)
   -------------------------------------------------------------------------- */
function initImpactCounter() {
  const water = document.getElementById('impact-water');
  const co2 = document.getElementById('impact-co2');
  const linen = document.getElementById('impact-linen');
  const hours = document.getElementById('impact-hours');
  if (!water) return;

  // Seed values so the numbers look established, then keep incrementing live.
  const state = {
    water: 48250000,   // litres saved this year
    co2: 1860000,      // kg CO2 avoided
    linen: 9420000,    // linen pieces processed
    hours: 128400      // staff hours freed
  };
  const inc = { water: 27, co2: 1.4, linen: 6, hours: 0.12 };

  function fmt(n) { return Math.floor(n).toLocaleString('en-IN'); }

  function render() {
    water.textContent = fmt(state.water);
    co2.textContent = fmt(state.co2);
    linen.textContent = fmt(state.linen);
    hours.textContent = fmt(state.hours);
  }
  render();

  setInterval(() => {
    state.water += inc.water;
    state.co2 += inc.co2;
    state.linen += inc.linen;
    state.hours += inc.hours;
    render();
  }, 1000);
}

/* --------------------------------------------------------------------------
   13. Track My Linen — animated RFID journey demo
   -------------------------------------------------------------------------- */
function initLinenTracker() {
  const section = document.getElementById('track');
  if (!section) return;

  const input = document.getElementById('tracker-tag');
  const btn = document.getElementById('tracker-btn');
  const demo = document.getElementById('tracker-demo');
  const fill = document.getElementById('tracker-fill');
  const statusBox = document.getElementById('tracker-status');
  const statusText = document.getElementById('tracker-status-text');
  const steps = Array.from(section.querySelectorAll('.tracker-step'));

  const stepMessages = [
    'Collected from your property and RFID-logged into the soiled-side dock.',
    'Running through a segregated barrier tunnel washer with EcoPure™ chemistry.',
    'Held at 85°C for validated thermal disinfection — pathogens neutralised.',
    'Passed quality control and re-scanned; every piece counted by UHF RFID.',
    'Packed and dispatched — arriving dock-to-closet, fresh and ready.'
  ];

  let running = false;

  function reset() {
    steps.forEach(s => s.classList.remove('done', 'active'));
    steps.forEach(s => { const t = s.querySelector('.tracker-step-time'); if (t) t.textContent = ''; });
    fill.style.width = '0%';
    statusBox.classList.remove('done');
  }

  function stamp(offsetMin) {
    const d = new Date(Date.now() - offsetMin * 60000);
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  }

  function run(tag) {
    if (running) return;
    running = true;
    reset();
    const label = (tag && tag.trim()) ? tag.trim().toUpperCase() : 'WN-DEMO-' + Math.floor(1000 + Math.random() * 9000);
    if (input) input.value = label;

    let i = 0;
    const total = steps.length;

    function advance() {
      if (i > 0) {
        steps[i - 1].classList.remove('active');
        steps[i - 1].classList.add('done');
      }
      if (i < total) {
        const step = steps[i];
        step.classList.add('active');
        const timeEl = step.querySelector('.tracker-step-time');
        if (timeEl) timeEl.textContent = stamp((total - i) * 42);
        fill.style.width = (i / (total - 1)) * 100 + '%';
        statusText.textContent = `Batch ${label}: ` + stepMessages[i];
        i++;
        setTimeout(advance, 1400);
      } else {
        steps[total - 1].classList.remove('active');
        steps[total - 1].classList.add('done');
        fill.style.width = '100%';
        statusBox.classList.add('done');
        statusText.textContent = `Batch ${label} delivered ✓ — 100% linen readiness, fully traceable.`;
        running = false;
      }
    }
    advance();
  }

  btn && btn.addEventListener('click', () => run(input ? input.value : ''));
  demo && demo.addEventListener('click', () => run(''));
  input && input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); run(input.value); } });
}

/* --------------------------------------------------------------------------
   14. Book a Free Linen Audit — scheduler with instant confirmation
   -------------------------------------------------------------------------- */
function initAuditScheduler() {
  const form = document.getElementById('audit-form');
  if (!form) return;

  const confirm = document.getElementById('audit-confirm');
  const confirmText = document.getElementById('audit-confirm-text');
  const refEl = document.getElementById('audit-ref');
  const resetBtn = document.getElementById('audit-reset');
  const dateInput = document.getElementById('audit-date');

  // Set date min to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Segmented chip groups (single-select within each group)
  document.querySelectorAll('#audit-type, #audit-slots').forEach(group => {
    group.querySelectorAll('.audit-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        group.querySelectorAll('.audit-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  });

  function selected(groupId) {
    const el = document.querySelector('#' + groupId + ' .audit-chip.active');
    return el ? el.dataset.value : '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('audit-name').value.trim();
    const type = selected('audit-type');
    const slot = selected('audit-slots');
    const date = dateInput ? dateInput.value : '';

    const ref = 'WN-AUDIT-' + Math.floor(100000 + Math.random() * 900000);
    if (refEl) refEl.textContent = ref;

    let dateText = date;
    try { dateText = new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) {}

    if (confirmText) {
      confirmText.textContent = `${name || 'Your ' + type} is booked for a ${slot.toLowerCase()} visit on ${dateText}. Our Pune-based specialist will call to confirm.`;
    }

    form.style.display = 'none';
    if (confirm) confirm.classList.add('show');
  });

  resetBtn && resetBtn.addEventListener('click', () => {
    if (confirm) confirm.classList.remove('show');
    form.style.display = 'block';
    form.reset();
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
    // Restore default active chips
    document.querySelectorAll('#audit-type .audit-chip, #audit-slots .audit-chip').forEach((c, i) => {
      c.classList.toggle('active', c === c.parentElement.firstElementChild);
    });
  });
}

/* --------------------------------------------------------------------------
   15. WashBot Chatbot (driven by owner-editable chatbot-config.js)
   -------------------------------------------------------------------------- */
function initChatbot() {
  const cfg = window.WASHNOW_CHATBOT_CONFIG;
  const widget = document.getElementById('washbot');
  if (!cfg || !widget) return;

  const toggleBtn = document.getElementById('washbot-toggle');
  const closeBtn = document.getElementById('washbot-close');
  const panel = document.getElementById('washbot-panel');
  const messages = document.getElementById('washbot-messages');
  const suggestions = document.getElementById('washbot-suggestions');
  const form = document.getElementById('washbot-form');
  const input = document.getElementById('washbot-text');
  const nameEl = document.getElementById('washbot-name');

  if (nameEl && cfg.botName) nameEl.textContent = cfg.botName;

  let greeted = false;

  function openBot() {
    widget.classList.add('open');
    if (!greeted) {
      greeted = true;
      addBot(cfg.greeting || 'Hello! How can I help you?');
      renderSuggestions();
    }
    setTimeout(() => input && input.focus(), 200);
  }

  function closeBot() {
    widget.classList.remove('open');
  }

  function scrollDown() {
    messages.scrollTop = messages.scrollHeight;
  }

  function addUser(text) {
    const el = document.createElement('div');
    el.className = 'washbot-msg user';
    el.textContent = text;
    messages.appendChild(el);
    scrollDown();
  }

  function addBot(text, withContact) {
    const el = document.createElement('div');
    el.className = 'washbot-msg bot';
    el.textContent = text;
    if (withContact) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'washbot-contact-btn';
      btn.innerHTML = `${escapeHtml(cfg.contactButtonLabel || 'Contact Us')}` +
        ` <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
      btn.addEventListener('click', goToContact);
      el.appendChild(document.createElement('br'));
      el.appendChild(btn);
    }
    messages.appendChild(el);
    scrollDown();
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'washbot-typing';
    t.id = 'washbot-typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(t);
    scrollDown();
  }

  function hideTyping() {
    const t = document.getElementById('washbot-typing');
    if (t) t.remove();
  }

  function goToContact() {
    const id = cfg.contactSectionId || 'contact';
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    closeBot();
  }

  function renderSuggestions() {
    if (!suggestions) return;
    suggestions.innerHTML = '';
    (cfg.questionnaire || []).forEach(item => {
      if (!item.question) return;
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'washbot-chip';
      chip.textContent = item.question;
      chip.addEventListener('click', () => handleUserMessage(item.question));
      suggestions.appendChild(chip);
    });
  }

  // Keyword-based matching against the questionnaire
  function findAnswer(text) {
    const q = text.toLowerCase();
    let best = null;
    let bestScore = 0;

    (cfg.questionnaire || []).forEach(item => {
      let score = 0;
      (item.keywords || []).forEach(kw => {
        if (kw && q.indexOf(kw.toLowerCase()) !== -1) {
          score += kw.split(' ').length; // multi-word keywords weigh more
        }
      });
      // Exact/near match on the question text is a strong signal
      if (item.question && q === item.question.toLowerCase()) score += 100;
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    });

    return bestScore > 0 ? best : null;
  }

  function handleUserMessage(text) {
    const clean = (text || '').trim();
    if (!clean) return;
    addUser(clean);
    if (input) input.value = '';

    showTyping();
    setTimeout(() => {
      hideTyping();
      const match = findAnswer(clean);
      if (match) {
        addBot(match.answer);
      } else {
        const parts = (cfg.fallbackMessage || 'Please contact us. {contact}').split('{contact}');
        addBot(parts[0].trim(), true);
      }
    }, 650);
  }

  function escapeHtml(s) {
    const d = document.createElement('div');
    d.textContent = s == null ? '' : String(s);
    return d.innerHTML;
  }

  toggleBtn && toggleBtn.addEventListener('click', () => {
    widget.classList.contains('open') ? closeBot() : openBot();
  });
  closeBtn && closeBtn.addEventListener('click', closeBot);

  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleUserMessage(input.value);
  });
}

