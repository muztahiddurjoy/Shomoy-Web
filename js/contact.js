var firebaseConfig = {
    apiKey: "AIzaSyDFYVBNYfpKlBlh5hEx82wzZWo_OqbDJMU",
    authDomain: "shomoy20-s.firebaseapp.com",
    projectId: "shomoy20-s",
    storageBucket: "shomoy20-s.appspot.com",
    messagingSenderId: "972870485738",
    appId: "1:972870485738:web:6226b75280ed82476f3993",
    measurementId: "G-JH4LYB87Q7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var d = new Date();
  var mill = d.getTime();

  var m = new Date(),
  countUpDate = new Date();
  m.setDate(m.getDate() + 1);

  firebase.database().ref('/eventdata').on('value',function(snap){
    var val = snap.val();
    document.getElementById('currentEvent').innerHTML = val.name;
    document.getElementById('eventDescription').innerHTML = val.description;
    document.getElementById('imageEvent').src = val.image;
    document.getElementById('overlayEvent').style.background = `linear-gradient(0deg, ${val.color1} 0%, ${val.color2} 35%, ${val.color3} 100%)`;
    
    simplyCountdown('.simply-countdown-one', {
      year: m.getFullYear(),
      month: val.time.month,
      day: val.time.date,
      enableUtc: true
      });
  });
    

   
  var first = document.getElementById('FirstName').value.length;
  var last = document.getElementById('LastName').value.length;
  var mail = document.getElementById('E-mail').value.length;
  var message = document.getElementById('textMain').value.length;
  
  var btn = document.getElementById('contact-btn');
  var try_m = document.querySelector('.btn-shomoy');
  if(first>0&&last>0&&mail>0&&message>0){
    try_m.classList.add = "disabled";
  }
  else{
    
  }

  btn.addEventListener('click',function(){
    var first = document.getElementById('FirstName').value;
    var last = document.getElementById('LastName').value;
    var mail = document.getElementById('E-mail').value;
    var message = document.getElementById('textMain').value;
    if(first==""){
      M.toast({html: 'Please Enter Your First Name',
            classes: 'rounded'});
    }
    else if(last==""){
      M.toast({html: 'Please Enter Your Last Name',
            classes: 'rounded'});
    }
    else if(mail==""){
      M.toast({html: 'Please Enter Your E-mail Address',
            classes: 'rounded'});
    }
    else if(message==""){
      M.toast({html: 'Please write the message',
            classes: 'rounded'});
    }
    else{
      database.ref('contact/'+mill).set({
        Name: first+" "+last,
        MailAdress: mail,
        MainText: message
      }).then(function(){
        document.getElementById('FirstName').value = "";
        document.getElementById('LastName').value = "";
        document.getElementById('E-mail').value = "";
        document.getElementById('textMain').value = "";
        M.toast({html: 'Message Sent Successfully!',
                classes: 'rounded'});
      });
    }
  
  });