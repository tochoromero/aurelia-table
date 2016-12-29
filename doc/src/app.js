import $ from 'jquery';

export class App {

  attached() {
    let hash = window.location.hash;
    if (!hash) {
      return;
    }

    setTimeout(() => {
      $('.page-host').animate({
        scrollTop: $(hash).offset().top - 70
      });
    }, 500);
  }
}
