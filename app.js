

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      prenom: document.getElementById("prenom").value,
    //   mail: document.getElementById("mail").value,
      numero: document.getElementById("numero").value,
    };
  
    const serviceID = "service_oge70bb";
    const templateID = "template_570q5ro";

    let name = document.getElementById("name").value
    let prenom = document.getElementById("prenom").value
    // let mail = document.getElementById("mail").value
    let numero = document.getElementById("numero").value
    

    if(name == '' && prenom == '' && numero == ''){
        alert('please entre information ')
    }else{
        emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("name").value = "";
            document.getElementById("prenom").value = "";
            // document.getElementById("mail").value = "";
            document.getElementById("numero").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
      
        })
        .catch(err=>console.log(err));

    }

  
  }
  
  




  // menu code ///////////////////////////////////////////////////////////

  const menuBtn = document.querySelector('.menu-phone');

  const menuList = document.querySelector('.links-cont');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active')
  })