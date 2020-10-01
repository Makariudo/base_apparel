const app =  {
  
  emailSaisi : "",
  buttonSubmit : document.getElementById("submit"),
  input: document.getElementById('input'),

  start() {
    app.input.addEventListener('change', app.ecouteMail)
    console.log("coucou de start");
    app.buttonSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(app.emailSaisi);
      if (app.emailSaisi === "") {
        app.mailWrong();
      }
      console.log('clicked !')
      app.input.addEventListener('change', app.ecouteMail)
      //remettre l'input à zero
      
    })
    
  },

  ecouteMail(event) {
    console.log(event.target.value);
    app.emailSaisi = event.target.value;
    app.verifMail(app.emailSaisi);
  },

  verifMail(email) {
    //regex de verif format mail
    let expRegex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      if (expRegex.test(email)) {
          console.log('mail ok');
          app.mailOk();

      }else {
        console.log('mail wrong!');
        app.mailWrong();
      }
  },

  mailOk() {
    app.input.value = "";
    app.buttonSubmit.classList.remove("submit_wrong");
    app.buttonSubmit.classList.add("submit");
  
  },

  mailWrong() {
    app.buttonSubmit.classList.remove("submit");
    app.buttonSubmit.classList.add("submit_wrong");
    setTimeout(app.mailOk, 1500);
  }

}



document.addEventListener('DOMContentLoaded', app.start);
