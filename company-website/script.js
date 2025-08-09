(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }

  // Active nav by pathname
  const path = (location.pathname || '').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a => {
    if(path.endsWith('index.html') && a.dataset.nav === 'home') a.classList.add('active');
    else if(path.endsWith('about.html') && a.dataset.nav === 'about') a.classList.add('active');
    else if(path.endsWith('services.html') && a.dataset.nav === 'services') a.classList.add('active');
    else if(path.endsWith('contact.html') && a.dataset.nav === 'contact') a.classList.add('active');
  });

  // Contact form
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      const get = (id) => form.querySelector('#'+id);
      const setErr = (id, msg) => {
        const el = form.querySelector(`.error[data-for="${id}"]`);
        if(el) el.textContent = msg || '';
      };

      const name = get('name').value.trim();
      const email = get('email').value.trim();
      const message = get('message').value.trim();

      let hasError = false;
      setErr('name', ''); setErr('email', ''); setErr('message','');
      if(!name){ setErr('name','请输入您的称呼'); hasError = true; }
      if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setErr('email','请输入有效的邮箱'); hasError = true; }
      if(!message){ setErr('message','请填写您的需求'); hasError = true; }
      if(hasError){ return; }

      status.textContent = '正在提交...';

      try{
        // 默认仅做前端演示。若需要直连表单服务，可替换为 Formspree 或自建接口。
        await new Promise(r => setTimeout(r, 800));
        status.textContent = '已收到，我们会尽快联系您！';
        form.reset();
      }catch(err){
        status.textContent = '提交失败，请稍后再试';
      }
    });
  }
})();