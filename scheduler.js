function duplicationcheck(section1,section2){
    if (section1.value==section2.value) {
    alert("Course choices cannot be duplicated!");
    section1.style.borderColor="red";
    section2.style.borderColor="red";
    section2.focus();
    return false;
  }
    return true;
};

function check() {
  var choice1=document.getElementById('first');
  var choice2=document.getElementById('second');
  var choice3=document.getElementById('third');
  var choice4=document.getElementById('fourth');
  var choice5=document.getElementById('fifth');
  var continuecheck=true;
  if (choice1.value!="0"){
    if(choice2.value!="0"){
      continuecheck=duplicationcheck(choice1,choice2)
    }
    if(continuecheck && choice3.value!="0"){
      continuecheck=duplicationcheck(choice1,choice3)
    }
    if(continuecheck && choice4.value!="0"){
      continuecheck=duplicationcheck(choice1,choice4)
    }
    if(continuecheck && choice5.value!="0"){
      continuecheck=duplicationcheck(choice1,choice5)
    }
  }
  if (continuecheck && choice2.value!="0"){
    if(continuecheck && choice3.value!="0"){
      continuecheck=duplicationcheck(choice2,choice3)
    }
    if(continuecheck && choice4.value!="0"){
      continuecheck=duplicationcheck(choice2,choice4)
    }
    if(continuecheck && choice5.value!="0"){
      continuecheck=duplicationcheck(choice2,choice5)
    }
  }
  if (continuecheck && choice3.value!="0"){
    if(continuecheck && choice4.value!="0"){
      continuecheck=duplicationcheck(choice3,choice4)
    }
    if(continuecheck && choice5.value!="0"){
      continuecheck=duplicationcheck(choice3,choice5)
    }
  }
  if (continuecheck && choice4.value!="0"){
    if(continuecheck && choice5.value!="0"){
      continuecheck=duplicationcheck(choice4,choice5)
    }
  }
  
};

