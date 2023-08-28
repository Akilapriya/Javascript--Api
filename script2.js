// var color=["blue", "orange", "yellow", "Black", "purple", "green"];

// function box(color){
//   for(var i=0; i<color.length;i++){
//     document.getElementById("container").innerHTML += `<div id="box" style="height:50px;width:50px;background-color:${color[i]}"></div><br/>`
//   }
// }
// box(color);

let obj = {
  questions: [
    {
      question: "What is the scientific name of a butterfly?",
      answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
      correctIndex: 3,
    },
    {
      question: "How hot is the surface of the sun?",
      answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
      correctIndex: 1,
    },
    {
      question: "Who are the actors in The Internship?",
      answers: [
        "Ben Stiller, Jonah Hill",
        "Courteney Cox, Matt LeBlanc",
        "Kaley Cuoco, Jim Parsons",
        "Vince Vaughn, Owen Wilson",
      ],
      correctIndex: 3,
    },
    {
      question: "What is the capital of Spain?",
      answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
      correctIndex: 2,
    },
    {
      question:
        "What are the school colors of the University of Texas at Austin?",
      answers: [
        "Black, Red",
        "Blue, Orange",
        "White, Burnt Orange",
        "White, Old gold, Gold",
      ],
      correctIndex: 2,
    },
    {
      question: "What is 70 degrees Fahrenheit in Celsius?",
      answers: ["18.8889", "20", "21.1111", "158"],
      correctIndex: 2,
    },
    {
      question: "When was Mahatma Gandhi born?",
      answers: [
        "October 2, 1869",
        "December 15, 1872",
        "July 18, 1918",
        "January 15, 1929",
      ],
      correctIndex: 0,
    },
    {
      question: "How far is the moon from Earth?",
      answers: [
        "7,918 miles (12,742 km)",
        "86,881 miles (139,822 km)",
        "238,400 miles (384,400 km)",
        "35,980,000 miles (57,910,000 km)",
      ],
      correctIndex: 2,
    },
    {
      question: "What is 65 times 52?",
      answers: ["117", "3120", "3380", "3520"],
      correctIndex: 2,
    },
    {
      question: "How tall is Mount Everest?",
      answers: [
        "6,683 ft (2,037 m)",
        "7,918 ft (2,413 m)",
        "19,341 ft (5,895 m)",
        "29,029 ft (8,847 m)",
      ],
      correctIndex: 3,
    },
    {
      question: "When did The Avengers come out?",
      answers: ["May 2, 2008", "May 4, 2012", "May 3, 2013", "April 4, 2014"],
      correctIndex: 1,
    },
    {
      question: "What is 48,879 in hexidecimal?",
      answers: ["0x18C1", "0xBEEF", "0xDEAD", "0x12D591"],
      correctIndex: 1,
    },
  ],
};

const init = () => {
  let quiz = document.getElementById("quiz");

  for (let i = 0; i < obj.questions.length; i++) {
    quiz.innerHTML += ` 
                        <div class="container col-md-6 ">
                                  <div class="card mb-4">                   
                           <h4 class="mt-2 ms-2">${i+1}.${obj.questions[i].question}</h4>
                           <div class="card-body">
                           <input type="radio" id="${i}0" name="answer${i}" onchange="checkAns(${i}, 0, ${obj.questions[i].correctIndex})"> 
                           <label for="${i}0">${obj.questions[i].answers[0]}</label><br/>                       
              
                           <input type="radio" id="${i}1" name="answer${i}" onchange="checkAns(${i}, 1, ${obj.questions[i].correctIndex})"> 
                           <label for="${i}1">${obj.questions[i].answers[1]}</label><br/>
                            
                           <input type="radio" id="${i}2" name="answer${i}" onchange="checkAns(${i}, 2, ${obj.questions[i].correctIndex})"> 
                           <label for="${i}2">${obj.questions[i].answers[2]}</label><br/> 

                           <input type="radio"id="${i}3"  name="answer${i}" onchange="checkAns(${i}, 3, ${obj.questions[i].correctIndex})"> 
                           <label for="${i}">${obj.questions[i].answers[3]}</label><br/> 

                           </div>
                           <div id="correctans${i}" class="ms-2"> </div>
                           <br/>
                                                                                             
                         </div>
                       </div>`;
                       
  }
};


let score = 0;
function checkAns(ques, ans, c_ans) {
  console.log(ques, ans, c_ans)
  let res = "";
  if (ans == c_ans) {
    res =  "Correct Answer"  
    score++;
  } else {
    res = "Wrong Answer";
  }

  document.getElementById(`correctans${ques}`).innerHTML = res;
  

}
document.getElementById("score").innerHTML="score :" +" "+ score;







init();
