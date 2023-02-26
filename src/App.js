import React from 'react';


// function MyForm() {
//   // function duplicationcheck(section1,section2){
//   //   if (section1.value===section2.value) {
//   //   alert("Course choices cannot be duplicated!");
//   //   section1.style.borderColor="red";
//   //   section2.style.borderColor="red";
//   //   section2.focus();
//   //   return false;
//   // }
//   //   return true;
//   // };
  
//   // function check() {
//   //   var choice1=document.getElementById('first');
//   //   var choice2=document.getElementById('second');
//   //   var choice3=document.getElementById('third');
//   //   var choice4=document.getElementById('fourth');
//   //   var choice5=document.getElementById('fifth');
//   //   var continuecheck=true;
//   //   if (choice1.value!=="0"){
//   //     if(choice2.value!=="0"){
//   //       continuecheck=duplicationcheck(choice1,choice2)
//   //     }
//   //     if(continuecheck && choice3.value!=="0"){
//   //       continuecheck=duplicationcheck(choice1,choice3)
//   //     }
//   //     if(continuecheck && choice4.value!=="0"){
//   //       continuecheck=duplicationcheck(choice1,choice4)
//   //     }
//   //     if(continuecheck && choice5.value!=="0"){
//   //       continuecheck=duplicationcheck(choice1,choice5)
//   //     }
//   //   }
//   //   if (continuecheck && choice2.value!=="0"){
//   //     if(continuecheck && choice3.value!=="0"){
//   //       continuecheck=duplicationcheck(choice2,choice3)
//   //     }
//   //     if(continuecheck && choice4.value!=="0"){
//   //       continuecheck=duplicationcheck(choice2,choice4)
//   //     }
//   //     if(continuecheck && choice5.value!=="0"){
//   //       continuecheck=duplicationcheck(choice2,choice5)
//   //     }
//   //   }
//   //   if (continuecheck && choice3.value!=="0"){
//   //     if(continuecheck && choice4.value!=="0"){
//   //       continuecheck=duplicationcheck(choice3,choice4)
//   //     }
//   //     if(continuecheck && choice5.value!=="0"){
//   //       continuecheck=duplicationcheck(choice3,choice5)
//   //     }
//   //   }
//   //   if (continuecheck && choice4.value!=="0"){
//   //     if(continuecheck && choice5.value!=="0"){
//   //       continuecheck=duplicationcheck(choice4,choice5)
//   //     }
//   //   }
//   // };
//   return (
//     <form method="GET" action="./result.html">
//       <label for="firstclass">Choose class ID for first class:</label>
//           <select id="first" name="first">
//             <option value="0">None</option>
//             <option value="1">CSCI103</option>
//             <option value="2">CSCI104</option>
//             <option value="3">CSCI170</option>
//             <option value="4">MATH125</option>
//             <option value="5">MATH126</option>
//             <option value="6">MATH129</option>
//             <option value="7">MATH118</option>
//             <option value="8">MATH117</option>
//             <option value="9">MATH114</option>
//             <option value="10">MATH108</option>
//             <option value="11">CSCI102</option>
//           </select><br/>
//           <label for="secondclass">Choose class ID for second class:</label>
//           <select id="second" name="second">
//             <option value="0">None</option>
//             <option value="1">CSCI103</option>
//             <option value="2">CSCI104</option>
//             <option value="3">CSCI170</option>
//             <option value="4">MATH125</option>
//             <option value="5">MATH126</option>
//             <option value="6">MATH129</option>
//             <option value="7">MATH118</option>
//             <option value="8">MATH117</option>
//             <option value="9">MATH114</option>
//             <option value="10">MATH108</option>
//             <option value="11">CSCI102</option>
//           </select><br/>
//           <label for="thirdclass">Choose class ID for third class:</label>
//           <select id="third" name="third">
//             <option value="0">None</option>
//             <option value="1">CSCI103</option>
//             <option value="2">CSCI104</option>
//             <option value="3">CSCI170</option>
//             <option value="4">MATH125</option>
//             <option value="5">MATH126</option>
//             <option value="6">MATH129</option>
//             <option value="7">MATH118</option>
//             <option value="8">MATH117</option>
//             <option value="9">MATH114</option>
//             <option value="10">MATH108</option>
//             <option value="11">CSCI102</option>
//           </select><br/>
//           <label for="fourthclass">Choose class ID for fourth class:</label>
//           <select id="fourth" name="fourth">
//             <option value="0">None</option>
//             <option value="1">CSCI103</option>
//             <option value="2">CSCI104</option>
//             <option value="3">CSCI170</option>
//             <option value="4">MATH125</option>
//             <option value="5">MATH126</option>
//             <option value="6">MATH129</option>
//             <option value="7">MATH118</option>
//             <option value="8">MATH117</option>
//             <option value="9">MATH114</option>
//             <option value="10">MATH108</option>
//             <option value="11">CSCI102</option>
//           </select><br/>
//           <label for="fifthclass">Choose class ID for fifth class:</label>
//           <select id="fifth" name="fifth">
//             <option value="0">None</option>
//             <option value="1">CSCI103</option>
//             <option value="2">CSCI104</option>
//             <option value="3">CSCI170</option>
//             <option value="4">MATH125</option>
//             <option value="5">MATH126</option>
//             <option value="6">MATH129</option>
//             <option value="7">MATH118</option>
//             <option value="8">MATH117</option>
//             <option value="9">MATH114</option>
//             <option value="10">MATH108</option>
//             <option value="11">CSCI102</option>
//           </select><br/>
//           <input type="submit" value="Submit"/> 
//           <input type="reset"/>
//     </form>
//   )
// }

function App() {
  return (
    <div>
      {/* <div class="content">
        <h2>Welcome to class registration for Summer 2023! </h2>
        <h2>To create your customized schedule, enter the class names for the 4-5 classes you would like to sign up for.</h2>
      </div>
      {MyForm()} */}
    </div>
  );
}

export default App;
