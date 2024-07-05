const Data = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        ans:"Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        ans:"Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        ans:"Harper Lee"
    }
];
let index = 0,opi = 0,sum = 0;
function load() {
    const qns = Data[index];
    document.getElementById('question').textContent = qns.question;
    let choice = document.getElementById('options')
    choice.innerHTML = ''; 
    qns.options.forEach((a, i) => {
      const radioInput = document.createElement("input");
      radioInput.type = 'radio';
      radioInput.name = 'option'; 
      radioInput.value = a;
      const label = document.createElement("label");
      label.textContent = a;
      choice.appendChild(radioInput);
      choice.appendChild(label);
    });
  } 

  function onSubmission() {
    const options = document.getElementsByName('option');
    let selectedOption;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }

    if (selectedOption) {
        if (selectedOption === Data[index].ans) { 
            document.getElementById('result').textContent = "Correct!";
            sum++; 
        } else {
            document.getElementById('result').textContent = "Wrong! The correct answer is " + Data[index].ans;
        }
        index++; 
        load(); 
    } else {
        document.getElementById('result').textContent = "Please select an option!";
    }
}

load();
// console.log(Data[0].options[0])
// console.log(Data[0].ans)
// console.log(index)
// console.log(sum)
