// Основная логика сайта
document.addEventListener('DOMContentLoaded', function () {
    console.log('Сайт Поддарск загружен!'); // Для отладки

    // Инициализация
    initApp();
});

function initApp() {
    // Плавная прокрутка
    initSmoothScroll();

    // Модальные окна
    initModals();

    // Формы
    initForms();

    // Анимации при скролле
    initScrollAnimations();
}

// Плавная прокрутка
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Модальные окна
function initModals() {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('residentLogin');

    console.log('Элементы модального окна:', { loginBtn, modal, closeBtn, loginForm }); // Отладка

    // Открытие модального окна
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Кнопка входа нажата!');
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Закрытие модального окна
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Закрытие по клику вне окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Обработка формы входа
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Форма входа отправлена');

            const userId = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;

            // Симуляция входа
            simulateLogin(userId, password);
        });
    }
}

// Симуляция входа и переход на страницу услуг
function simulateLogin(userId, password) {
    console.log('Попытка входа:', { userId, password });

    // Показываем индикатор загрузки
    const submitBtn = document.querySelector('.login-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Вход в систему...';
    submitBtn.disabled = true;

    // Имитация задержки сети
    setTimeout(() => {
        // В реальном приложении здесь был бы запрос к API
        if (userId && password) {
            console.log('Вход успешен!');
            // Успешный вход - создаем страницу услуг
            createServicesPage();
        } else {
            alert('Пожалуйста, заполните все поля');
            console.log('Ошибка: не заполнены поля');
        }

        // Восстанавливаем кнопку
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Создание страницы умных услуг
function createServicesPage() {
    console.log('Создание страницы услуг...');

    // Скрываем модальное окно
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.body.style.overflow = 'auto';

    // Создаем контейнер для услуг
    const servicesHTML = `
        <div class="services-page">
            <div class="services-header">
                <button onclick="closeServicesPage()" class="back-btn">← Назад</button>
                <h1>Умные услуги Поддарска</h1>
                <p>Добро пожаловать в систему умного города</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card" onclick="openService('transport')">
                    <div class="service-icon">🚗</div>
                    <h3>Умный транспорт</h3>
                    <p>Роботы-такси, каршеринг, планирование маршрутов</p>
                    <div class="service-status active">Доступно</div>
                </div>
                
                <div class="service-card" onclick="openService('delivery')">
                    <div class="service-icon">🤖</div>
                    <h3>Роботы-доставщики</h3>
                    <p>Доставка еды, товаров и вывоз мусора</p>
                    <div class="service-status active">Доступно</div>
                </div>
                
                <div class="service-card" onclick="openService('energy')">
                    <div class="service-icon">⚡</div>
                    <h3>Умная энергия</h3>
                    <p>Мониторинг потребления, умные сети</p>
                    <div class="service-status development">Скоро</div>
                </div>
                
                <div class="service-card" onclick="openService('health')">
                    <div class="service-icon">🏥</div>
                    <h3>Цифровое здоровье</h3>
                    <p>Телемедицина, мониторинг здоровья</p>
                    <div class="service-status planning">В планах</div>
                </div>
                
                <div class="service-card" onclick="openService('gov')">
                    <div class="service-icon">🏛️</div>
                    <h3>Электронное правительство</h3>
                    <p>Голосования, услуги, обратная связь</p>
                    <div class="service-status active">Доступно</div>
                </div>
                
                <div class="service-card" onclick="openService('eco')">
                    <div class="service-icon">🌿</div>
                    <h3>Эко-мониторинг</h3>
                    <p>Качество воздуха, переработка отходов</p>
                    <div class="service-status active">Доступно</div>
                </div>
            </div>
            
            <div class="user-panel">
                <div class="user-info">
                    <h3>Ваш экологический след</h3>
                    <div class="eco-stats">
                        <div class="eco-stat">
                            <span class="stat-value">85%</span>
                            <span class="stat-label">Переработка</span>
                        </div>
                        <div class="eco-stat">
                            <span class="stat-value">12 kW</span>
                            <span class="stat-label">Энергия сегодня</span>
                        </div>
                        <div class="eco-stat">
                            <span class="stat-value">2.1 L</span>
                            <span class="stat-label">Вода сэкономлена</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Добавляем стили для страницы услуг
    const servicesStyles = `
        <style>
            .services-page {
                min-height: 100vh;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 80px 20px 40px;
            }
            
            .services-header {
                text-align: center;
                margin-bottom: 3rem;
                position: relative;
            }
            
            .back-btn {
                position: absolute;
                left: 0;
                top: 0;
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                padding: 10px 20px;
                border-radius: 25px;
                cursor: pointer;
                backdrop-filter: blur(10px);
            }
            
            .services-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                max-width: 1200px;
                margin: 0 auto 3rem;
            }
            
            .service-card {
                background: rgba(255,255,255,0.1);
                padding: 2rem;
                border-radius: 20px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.2);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .service-card:hover {
                transform: translateY(-5px);
                background: rgba(255,255,255,0.15);
            }
            
            .service-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            
            .service-status {
                display: inline-block;
                padding: 0.3rem 1rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: 600;
                margin-top: 1rem;
            }
            
            .service-status.active {
                background: #4CAF50;
            }
            
            .service-status.development {
                background: #FF9800;
            }
            
            .service-status.planning {
                background: #9E9E9E;
            }
            
            .user-panel {
                max-width: 1200px;
                margin: 0 auto;
                background: rgba(255,255,255,0.1);
                padding: 2rem;
                border-radius: 20px;
                backdrop-filter: blur(10px);
            }
            
            .eco-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .eco-stat {
                text-align: center;
                padding: 1rem;
                background: rgba(255,255,255,0.1);
                border-radius: 10px;
            }
            
            .stat-value {
                display: block;
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 0.5rem;
            }
        </style>
    `;

    // Заменяем содержимое страницы
    document.body.innerHTML = servicesStyles + servicesHTML;
}

// Закрытие страницы услуг
function closeServicesPage() {
    window.location.reload();
}

// Открытие конкретного сервиса
function openService(serviceName) {
    alert(`Открывается сервис: ${serviceName}\nВ реальном приложении здесь будет переход к конкретному сервису`);
}

// Инициализация форм
function initForms() {
    const founderForm = document.querySelector('.founder-form');
    if (founderForm) {
        founderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
}

// Анимации при скролле
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за карточками
    document.querySelectorAll('.philosophy-card, .project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Сделаем функции глобальными для HTML onclick
window.scrollToSection = function (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
};

window.simulateLogin = simulateLogin;
window.closeServicesPage = closeServicesPage;
window.openService = openService;
// Регистрация Service Worker для PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
            .then(function (registration) {
                console.log('ServiceWorker зарегистрирован: ', registration.scope);
            })
            .catch(function (error) {
                console.log('Ошибка регистрации ServiceWorker: ', error);
            });
    });
}

// Показываем кнопку установки
let deferredPrompt;
const installBtn = document.createElement('button');
installBtn.innerHTML = '📱 Установить приложение';
installBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #2c5530;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  font-size: 14px;
`;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.body.appendChild(installBtn);

    installBtn.addEventListener('click', () => {
        installBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Пользователь установил приложение');
            }
            deferredPrompt = null;
        });
    });
});