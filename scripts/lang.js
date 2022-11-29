const lang_btns = document.querySelectorAll('.language *');
const main_text = document.querySelector('main');

function changeLanguage(lang){
    let elem = document.getElementById(lang);
    lang_btns.forEach(el => el.classList.remove('switch-hidden'));
    elem.classList.add("switch-hidden");
    storage_lang = lang;

    document.querySelectorAll("[data-locale]").forEach((el => {
        let key = el.getAttribute("data-locale");
        let translation = lang_data[lang][key];
        el.innerText = translation;
    }));
}

const lang_data = {
    "english": {
        "nav.work": "Work",
        "nav.about": "About",
        "nav.blog": "Blog",
        "nav.contacts": "Contacts",
        "frame.sab.h1": "Style & Beauty",
        "frame.sab.h2": "New fashion brand",
        "frame.lrg.h1": "Living Room Girls",
        "frame.lrg.h2": "Interior Design - Red Room",
        "frame.tsowf.h1": "The shape of water flowers",
        "frame.tsowf.h2": "Book Cover",
        "frame.cts.h1": "Capturing the sunlight",
        "frame.cts.h2": "Fashion Photoshoot",
        "frame.lotos.h1": "Looking on the other side",
        "frame.lotos.h2": "Portrait photography",
        "frame.start.h1": "Let's do something amazing.",
        "frame.start.h2": "Get in touch with us today",
        "button.view": "VIEW PROJECT",
        "button.start": "START A PROJECT"
    },
    "russian": {
        "nav.work": "Работа",
        "nav.about": "О нас",
        "nav.blog": "Блог",
        "nav.contacts": "Контакты",
        "frame.sab.h1": "Стиль & Красота",
        "frame.sab.h2": "Новый модный бренд",
        "frame.lrg.h1": "Комнатные Девушки",
        "frame.lrg.h2": "Дизайн Интерьера - Красная Комната",
        "frame.tsowf.h1": "Форма водных цветов",
        "frame.tsowf.h2": "Книжная Обложка",
        "frame.cts.h1": "Улавливая солнечный свет",
        "frame.cts.h2": "Модная фотосессия",
        "frame.lotos.h1": "Глядя по другую сторону",
        "frame.lotos.h2": "Портретная фотография",
        "frame.start.h1": "Давайте сделаем что-то невероятное.",
        "frame.start.h2": "Свяжитесь с нами сегодня",
        "button.view": "ПОСМОТРЕТЬ ПРОЕКТ",
        "button.start": "НАЧАТЬ ПРОЕКТ"
    }
}