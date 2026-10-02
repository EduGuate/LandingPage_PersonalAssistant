(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (id) => document.getElementById(id);

  const I18N = {
    en: {
      skip: 'Skip to content', freeBar: 'AI assistant landing — 100% free', freeRepo: 'View on GitHub',
      navServices: 'Services', navBenefits: 'Benefits', navFeatures: 'Features', navTestimonials: 'Testimonials', navCta: 'Get started',
      heroBadge: 'AI + human assistants, 24/7', heroTitle: 'Your day, <span class="grad">handled.</span>',
      heroDesc: 'Transform your daily life with our professional assistant services. We help you focus on what matters the most!',
      heroCta: 'Start free trial', heroCta2: 'How it works', trust: 'from 2,000+ busy professionals',
      online: 'online · replies in seconds', typeHere: 'Ask Aria anything…', chip1: 'Meeting booked', chip2: 'Flight + hotel ready',
      probEyebrow: 'The problem', probTitle: 'You spend <span class="grad">4.5 hours a day</span> on tasks someone else could do.',
      p1: 'of the workweek goes to admin work', p2: 'emails a day just to schedule meetings', p3: 'more stress when travel goes wrong',
      servEyebrow: 'What we do', servicesTitle: 'Our Services',
      s1: 'Scheduling', s1d: 'Professional appointment management', s2: 'Travel Management', s2d: 'Comprehensive travel planning',
      s3: 'Task Management', s3d: 'Efficient task organization', s4: 'Event Planning', s4d: 'Complete event coordination',
      howEyebrow: 'How it works', howTitle: 'Three steps to a lighter day',
      h1: 'Tell us what you need', h1d: 'Chat, email or voice — however you like.', h2: 'Aria gets to work', h2d: 'AI drafts, a human assistant reviews.',
      h3: 'You get it done', h3d: 'Confirmations land in your calendar and inbox.',
      benEyebrow: 'Why Aria', benefitsTitle: 'Why Choose Us?', benDesc: 'More time for the work and people that matter. Less time on logistics.',
      b1: 'Save Time', b1d: 'Focus on what matters most to you', b2: 'Reduce Stress', b2d: 'Let us handle the details',
      b3: '24/7 Availability', b3d: 'Always here when you need us', b4: 'Personalized Service', b4d: 'Tailored to your specific needs',
      featEyebrow: 'Under the hood', featuresTitle: 'Key Features',
      f1: 'AI-Powered', f1d: 'Advanced AI assistance', f2: 'Device Integration', f2d: 'Seamless connectivity',
      f3: 'Smart Recommendations', f3d: 'Personalized suggestions', f4: 'Security', f4d: 'Enterprise-grade protection',
      testEyebrow: 'Social proof', testimonialsTitle: 'What Our Clients Say',
      t1: '“This service has made my life so much easier!”', t1r: 'Founder, design studio', t2: '“Highly recommend! Truly professional.”', t2r: 'Sales director',
      t3: '“My calendar finally makes sense. I got my evenings back.”', t3r: 'Physician',
      ctaEyebrow: "Let's talk", contactTitle: 'Contact Us', ctaDesc: "Tell us about your day. We'll show you how much of it Aria can take off your plate.",
      cEmail: 'Email', cPhone: 'Phone',
      osTitle: 'Launch your assistant service. Free.', osDesc: 'Aria is a free Bootstrap 5 landing template in English, Spanish and Portuguese. Responsive, animated and MIT licensed.', osBtn: 'Download on GitHub',
      rights: 'Personal Assistant Services. Demo template.', top: 'Back to top ↑', privacy: 'Privacy', terms: 'Terms',
      prev: 'Previous', next: 'Next', pause: 'Pause', play: 'Play',
      chat: [
        ['me', 'Move my 3pm with Laura to tomorrow and book a table for 4 tonight 🍝'],
        ['ai', 'Done! Laura confirmed <b>tomorrow 10:00</b>. Table for 4 at <b>Trattoria Nonna, 20:30</b>.'],
        ['card', 'bi-calendar-check', 'Calendar updated', '2 events · reminders set'],
        ['me', 'Also flights to Madrid for next Thursday'],
        ['ai', 'Found <b>3 options</b> under $420. Booking the 08:15 direct flight + hotel near your meeting ✈️'],
      ],
    },
    es: {
      skip: 'Saltar al contenido', freeBar: 'Landing de asistente IA — 100% gratis', freeRepo: 'Ver en GitHub',
      navServices: 'Servicios', navBenefits: 'Beneficios', navFeatures: 'Funciones', navTestimonials: 'Testimonios', navCta: 'Empezar',
      heroBadge: 'Asistentes IA + humanos, 24/7', heroTitle: 'Tu día, <span class="grad">resuelto.</span>',
      heroDesc: 'Transforma tu vida diaria con nuestros servicios de asistente personal. ¡Te ayudamos a enfocarte en lo que realmente importa!',
      heroCta: 'Prueba gratis', heroCta2: 'Cómo funciona', trust: 'de más de 2.000 profesionales ocupados',
      online: 'en línea · responde en segundos', typeHere: 'Pídele lo que quieras a Aria…', chip1: 'Reunión agendada', chip2: 'Vuelo + hotel listos',
      probEyebrow: 'El problema', probTitle: 'Pasas <span class="grad">4,5 horas al día</span> en tareas que otro podría hacer.',
      p1: 'de la semana laboral se va en tareas administrativas', p2: 'correos al día solo para agendar reuniones', p3: 'más estrés cuando un viaje sale mal',
      servEyebrow: 'Lo que hacemos', servicesTitle: 'Nuestros Servicios',
      s1: 'Agenda', s1d: 'Gestión profesional de citas', s2: 'Gestión de Viajes', s2d: 'Planificación integral de viajes',
      s3: 'Gestión de Tareas', s3d: 'Organización eficiente de pendientes', s4: 'Planificación de Eventos', s4d: 'Coordinación completa de eventos',
      howEyebrow: 'Cómo funciona', howTitle: 'Tres pasos hacia un día más ligero',
      h1: 'Dinos qué necesitas', h1d: 'Chat, correo o voz — como prefieras.', h2: 'Aria se pone a trabajar', h2d: 'La IA prepara, un asistente humano revisa.',
      h3: 'Tú lo tienes resuelto', h3d: 'Las confirmaciones llegan a tu calendario y correo.',
      benEyebrow: 'Por qué Aria', benefitsTitle: '¿Por qué elegirnos?', benDesc: 'Más tiempo para el trabajo y las personas que importan. Menos tiempo en logística.',
      b1: 'Ahorra tiempo', b1d: 'Enfócate en lo que más te importa', b2: 'Menos estrés', b2d: 'Nosotros nos ocupamos de los detalles',
      b3: 'Disponible 24/7', b3d: 'Siempre aquí cuando nos necesitas', b4: 'Servicio personalizado', b4d: 'Adaptado a tus necesidades',
      featEyebrow: 'Por dentro', featuresTitle: 'Características Clave',
      f1: 'Impulsado por IA', f1d: 'Asistencia con IA avanzada', f2: 'Integración de dispositivos', f2d: 'Conectividad sin fricciones',
      f3: 'Recomendaciones inteligentes', f3d: 'Sugerencias personalizadas', f4: 'Seguridad', f4d: 'Protección de nivel empresarial',
      testEyebrow: 'Opiniones reales', testimonialsTitle: 'Lo que dicen nuestros clientes',
      t1: '“¡Este servicio me ha facilitado muchísimo la vida!”', t1r: 'Fundadora, estudio de diseño', t2: '“¡Muy recomendado! Realmente profesional.”', t2r: 'Director comercial',
      t3: '“Por fin mi calendario tiene sentido. Recuperé mis tardes.”', t3r: 'Médica',
      ctaEyebrow: 'Hablemos', contactTitle: 'Contáctanos', ctaDesc: 'Cuéntanos cómo es tu día. Te mostraremos cuánto de él puede resolver Aria por ti.',
      cEmail: 'Correo', cPhone: 'Teléfono',
      osTitle: 'Lanza tu servicio de asistente. Gratis.', osDesc: 'Aria es una plantilla gratuita en Bootstrap 5 en inglés, español y portugués. Responsive, animada y con licencia MIT.', osBtn: 'Descargar en GitHub',
      rights: 'Servicios de Asistente Personal. Plantilla de demostración.', top: 'Volver arriba ↑', privacy: 'Privacidad', terms: 'Términos',
      prev: 'Anterior', next: 'Siguiente', pause: 'Pausar', play: 'Reproducir',
      chat: [
        ['me', 'Pasa mi reunión de las 3 con Laura a mañana y reserva mesa para 4 esta noche 🍝'],
        ['ai', '¡Listo! Laura confirmó <b>mañana 10:00</b>. Mesa para 4 en <b>Trattoria Nonna, 20:30</b>.'],
        ['card', 'bi-calendar-check', 'Calendario actualizado', '2 eventos · recordatorios listos'],
        ['me', 'También vuelos a Madrid para el jueves'],
        ['ai', 'Encontré <b>3 opciones</b> por menos de $420. Reservo el directo de las 08:15 + hotel cerca de tu reunión ✈️'],
      ],
    },
    pt: {
      skip: 'Pular para o conteúdo', freeBar: 'Landing de assistente IA — 100% grátis', freeRepo: 'Ver no GitHub',
      navServices: 'Serviços', navBenefits: 'Benefícios', navFeatures: 'Recursos', navTestimonials: 'Depoimentos', navCta: 'Começar',
      heroBadge: 'Assistentes IA + humanos, 24/7', heroTitle: 'Seu dia, <span class="grad">resolvido.</span>',
      heroDesc: 'Transforme sua vida diária com nossos serviços profissionais de assistente pessoal. Ajudamos você a se concentrar no que realmente importa!',
      heroCta: 'Teste grátis', heroCta2: 'Como funciona', trust: 'de mais de 2.000 profissionais ocupados',
      online: 'online · responde em segundos', typeHere: 'Peça qualquer coisa à Aria…', chip1: 'Reunião marcada', chip2: 'Voo + hotel prontos',
      probEyebrow: 'O problema', probTitle: 'Você gasta <span class="grad">4,5 horas por dia</span> em tarefas que outra pessoa poderia fazer.',
      p1: 'da semana de trabalho vai para tarefas administrativas', p2: 'e-mails por dia só para marcar reuniões', p3: 'mais estresse quando uma viagem dá errado',
      servEyebrow: 'O que fazemos', servicesTitle: 'Nossos Serviços',
      s1: 'Agendamento', s1d: 'Gestão profissional de compromissos', s2: 'Gestão de Viagens', s2d: 'Planejamento completo de viagens',
      s3: 'Gestão de Tarefas', s3d: 'Organização eficiente de tarefas', s4: 'Planejamento de Eventos', s4d: 'Coordenação completa de eventos',
      howEyebrow: 'Como funciona', howTitle: 'Três passos para um dia mais leve',
      h1: 'Diga do que precisa', h1d: 'Chat, e-mail ou voz — como preferir.', h2: 'A Aria começa a trabalhar', h2d: 'A IA prepara, um assistente humano revisa.',
      h3: 'Pronto, resolvido', h3d: 'As confirmações chegam no seu calendário e e-mail.',
      benEyebrow: 'Por que a Aria', benefitsTitle: 'Por que nos escolher?', benDesc: 'Mais tempo para o trabalho e as pessoas que importam. Menos tempo com logística.',
      b1: 'Economize tempo', b1d: 'Foque no que mais importa para você', b2: 'Menos estresse', b2d: 'Deixe os detalhes com a gente',
      b3: 'Disponível 24/7', b3d: 'Sempre aqui quando você precisar', b4: 'Serviço personalizado', b4d: 'Feito para as suas necessidades',
      featEyebrow: 'Por dentro', featuresTitle: 'Características Principais',
      f1: 'Com IA', f1d: 'Assistência de IA avançada', f2: 'Integração de dispositivos', f2d: 'Conectividade sem atrito',
      f3: 'Recomendações inteligentes', f3d: 'Sugestões personalizadas', f4: 'Segurança', f4d: 'Proteção de nível empresarial',
      testEyebrow: 'Prova social', testimonialsTitle: 'O que nossos clientes dizem',
      t1: '“Este serviço facilitou muito a minha vida!”', t1r: 'Fundadora, estúdio de design', t2: '“Recomendo muito! Realmente profissional.”', t2r: 'Diretor comercial',
      t3: '“Meu calendário finalmente faz sentido. Recuperei minhas noites.”', t3r: 'Médica',
      ctaEyebrow: 'Vamos conversar', contactTitle: 'Contate-nos', ctaDesc: 'Conte como é o seu dia. Mostraremos quanto dele a Aria pode resolver por você.',
      cEmail: 'E-mail', cPhone: 'Telefone',
      osTitle: 'Lance seu serviço de assistente. Grátis.', osDesc: 'Aria é um template gratuito em Bootstrap 5 em inglês, espanhol e português. Responsivo, animado e com licença MIT.', osBtn: 'Baixar no GitHub',
      rights: 'Serviços de Assistente Pessoal. Template de demonstração.', top: 'Voltar ao topo ↑', privacy: 'Privacidade', terms: 'Termos',
      prev: 'Anterior', next: 'Próximo', pause: 'Pausar', play: 'Reproduzir',
      chat: [
        ['me', 'Passe minha reunião das 15h com a Laura para amanhã e reserve mesa para 4 hoje à noite 🍝'],
        ['ai', 'Feito! Laura confirmou <b>amanhã 10:00</b>. Mesa para 4 na <b>Trattoria Nonna, 20:30</b>.'],
        ['card', 'bi-calendar-check', 'Calendário atualizado', '2 eventos · lembretes prontos'],
        ['me', 'Também voos para Madri na quinta'],
        ['ai', 'Achei <b>3 opções</b> abaixo de $420. Reservando o direto das 08:15 + hotel perto da sua reunião ✈️'],
      ],
    },
  };

  let lang;
  try { lang = localStorage.getItem('aria-lang'); } catch (e) { lang = null; }
  if (!I18N[lang]) lang = ['es', 'pt'].find((l) => (navigator.language || 'en').toLowerCase().startsWith(l)) || 'en';

  const applyLang = () => {
    const d = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => { if (d[el.dataset.i18n]) el.textContent = d[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { if (d[el.dataset.i18nHtml]) el.innerHTML = d[el.dataset.i18nHtml]; });
    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    $('tprev').setAttribute('aria-label', d.prev); $('tnext').setAttribute('aria-label', d.next);
    setPauseLabel();
    restartChat();
  };
  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('aria-lang', lang); } catch (e) { /* storage unavailable */ }
    applyLang();
  }));

  $('year').textContent = new Date().getFullYear();
  const nav = document.querySelector('.site-nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  const menu = $('menu');
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a') && menu.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });

  // Hero chat demo (loops)
  const chat = $('chat');
  let chatTimer; let chatRun = 0;
  const bubble = (m) => {
    const el = document.createElement('div');
    if (m[0] === 'card') { el.className = 'msg card'; el.innerHTML = `<i class="bi ${m[1]}"></i><span><b>${m[2]}</b><small>${m[3]}</small></span>`; }
    else { el.className = `msg ${m[0]}`; el.innerHTML = m[1]; }
    return el;
  };
  function restartChat() {
    clearTimeout(chatTimer); chatRun++;
    const run = chatRun; const script = I18N[lang].chat;
    chat.innerHTML = '';
    if (reduce) { script.slice(-3).forEach((m) => chat.appendChild(bubble(m))); return; }
    let i = 0;
    const step = () => {
      if (run !== chatRun) return;
      if (i >= script.length) { chatTimer = setTimeout(() => { chat.innerHTML = ''; i = 0; step(); }, 3500); return; }
      const m = script[i++];
      const push = () => {
        chat.appendChild(bubble(m));
        while (chat.children.length > 4) chat.firstElementChild.remove();
        chatTimer = setTimeout(step, m[0] === 'me' ? 700 : 1600);
      };
      if (m[0] === 'me') { push(); return; }
      const typing = document.createElement('div');
      typing.className = 'typing'; typing.innerHTML = '<i></i><i></i><i></i>';
      chat.appendChild(typing);
      chatTimer = setTimeout(() => { typing.remove(); push(); }, 1100);
    };
    chatTimer = setTimeout(step, 600);
  }

  // Reveal + count-up
  const countUp = (el) => {
    const target = Number(el.dataset.count);
    if (reduce) { el.textContent = target; return; }
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1400, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('visible');
      en.target.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(en.target);
    }), { threshold: 0.15 });
    reveals.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 80}ms`; io.observe(el); });
  } else {
    reveals.forEach((el) => { el.classList.add('visible'); el.querySelectorAll('[data-count]').forEach(countUp); });
  }

  // Testimonials carousel: prev/next/pause, stops on hover/focus and reduced motion
  const slides = [...document.querySelectorAll('.slide')];
  let cur = 0; let paused = reduce; let rot;
  const show = (n) => {
    cur = (n + slides.length) % slides.length;
    slides.forEach((s, i) => { s.classList.toggle('active', i === cur); s.setAttribute('aria-hidden', String(i !== cur)); });
    $('tpos').textContent = `${cur + 1} / ${slides.length}`;
  };
  function setPauseLabel() {
    const d = I18N[lang];
    $('tpause').innerHTML = `<i class="bi ${paused ? 'bi-play-fill' : 'bi-pause-fill'}"></i>`;
    $('tpause').setAttribute('aria-label', paused ? d.play : d.pause);
  }
  const schedule = () => { clearInterval(rot); if (!paused) rot = setInterval(() => show(cur + 1), 5500); };
  $('tprev').addEventListener('click', () => { show(cur - 1); schedule(); });
  $('tnext').addEventListener('click', () => { show(cur + 1); schedule(); });
  $('tpause').addEventListener('click', () => { paused = !paused; setPauseLabel(); schedule(); });
  const car = $('tcar');
  car.addEventListener('mouseenter', () => clearInterval(rot));
  car.addEventListener('mouseleave', schedule);
  car.addEventListener('focusin', () => clearInterval(rot));
  car.addEventListener('focusout', schedule);
  show(0); schedule();

  applyLang();
})();
