;(function() {
    function getArgs() {
        let search = decodeURIComponent(location.search.substring(1));
        let reg = /(?:([^&]+)=([^&]+))/g;
        let match = null;
        let args = {};
        while((match = reg.exec(search)) !== null){
            args[match[1]] = match[2];
        }
        return args;
    }

    function dispLanguage() {
        let lang = window.localStorage.getItem('people_xuxingshun_lang');
        let zhElemList = document.querySelectorAll('.zh');
        let enElemList = document.querySelectorAll('.en');
        if (lang === 'en') {
            zhElemList.forEach((e) => e.style.display = 'none');
            enElemList.forEach((e) => e.style.display = 'inline-block');
        } else {
            zhElemList.forEach((e) => e.style.display = 'inline-block');
            enElemList.forEach((e) => e.style.display = 'none');
        }
    }
    dispLanguage();

    (function() {
        let elemHeader = document.getElementById('header');
        let elemLanguage = document.getElementById('language');
        if (!elemHeader || !elemLanguage)
            return;
        elemHeader.addEventListener('mouseover', function(evt) {
            elemLanguage.classList.remove('dim');
        });
        elemHeader.addEventListener('mouseout', function(evt) {
            elemLanguage.classList.add('dim');
        });
        elemLanguage.addEventListener('click', function(evt) {
            let lang = window.localStorage.getItem('people_xuxingshun_lang') === 'zh' ? 'en' : 'zh';
            window.localStorage.setItem('people_xuxingshun_lang', lang);
            dispLanguage();
        });
    }());

    let elemStyle = document.createElement('style');
    elemStyle.innerHTML = `.dim { opacity:0.2; 
transition: color 0.2s, background-color 0.2s, border-color 0.2s, opacity 0.2s; }`;
    document.getElementsByTagName('body')[0].appendChild(elemStyle);

}());
