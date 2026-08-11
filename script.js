function createParticles() {
            const container = document.getElementById('particles');
            const colors = ['rgba(124, 58, 237, 0.25)', 'rgba(168, 85, 247, 0.15)', 'rgba(59, 130, 246, 0.15)'];
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
                particle.style.animationDelay = (Math.random() * 20) + 's';
                container.appendChild(particle);
            }
        }
        createParticles();

        // ===== Scroll Reveal =====
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach((el, index) => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const revealPoint = 120;
                if (elementTop < windowHeight - revealPoint) {
                    el.style.transitionDelay = (index % 3) * 0.1 + 's';
                    el.classList.add('active');
                }
            });
        }

        // ===== Skill Bars =====
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-fill');
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    bar.classList.add('animate');
                }
            });
        }

        // ===== Mobile Menu =====
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('open');
        }

        // ===== Contact Form =====
        function handleSubmit(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const msg = document.getElementById('successMsg');
            btn.textContent = 'Sending...';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Send Message ✨';
                btn.disabled = false;
                msg.classList.remove('hidden');
                e.target.reset();
                setTimeout(() => msg.classList.add('hidden'), 5000);
            }, 1500);
        }

        // ===== Active Nav =====
        function updateActiveNav() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('text-purple-400');
                link.classList.add('text-gray-400');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('text-purple-400');
                    link.classList.remove('text-gray-400');
                }
            });
        }

        // ===== Events =====
        window.addEventListener('scroll', () => {
            revealOnScroll();
            animateSkillBars();
            updateActiveNav();
        });

        window.addEventListener('load', () => {
            revealOnScroll();
            animateSkillBars();
        });

        // ===== Smooth scroll =====
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });