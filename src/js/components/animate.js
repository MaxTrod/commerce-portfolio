// Подключение анимаций по скроллу
import AOS from 'aos';


document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    AOS.init({
      disable: function () {
        var maxWidth = 767.98;
        return window.innerWidth < maxWidth;
      }
    });
  }
};
