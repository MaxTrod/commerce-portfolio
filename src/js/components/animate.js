// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init({
  disable: function () {
    var maxWidth = 767.98;
    return window.innerWidth < maxWidth;
  }
});
