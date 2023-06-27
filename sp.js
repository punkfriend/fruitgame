items = [
    { itemName: "avocado", imageUrl: "/assets/avocado-svgrepo-com.svg" },
    { itemName: "avocados", imageUrl: "/assets/avocados-svgrepo-com.svg" },
    { itemName: "banana", imageUrl: "/assets/banana-svgrepo-com.svg" },
    { itemName: "blueberry", imageUrl: "/assets/blueberry-svgrepo-com.svg" },
    { itemName: "broccoli", imageUrl: "/assets/broccoli-svgrepo-com.svg" },
    { itemName: "carrot", imageUrl: "/assets/carrot-svgrepo-com.svg" },
    { itemName: "cherry", imageUrl: "/assets/cherry-svgrepo-com.svg" },
    { itemName: "chilli", imageUrl: "/assets/chilli-svgrepo-com.svg" },
    { itemName: "corn", imageUrl: "/assets/corn-svgrepo-com.svg" },
    { itemName: "eggplant", imageUrl: "/assets/eggplant-svgrepo-com.svg" },
    { itemName: "food", imageUrl: "/assets/food-svgrepo-com.svg" },
    { itemName: "garlic", imageUrl: "/assets/garlic-svgrepo-com.svg" },
    { itemName: "grapes", imageUrl: "/assets/grapes-svgrepo-com.svg" },
    { itemName: "kiwi", imageUrl: "/assets/kiwi-svgrepo-com.svg" },
    { itemName: "leek", imageUrl: "/assets/leek-svgrepo-com.svg" },
    { itemName: "lemon", imageUrl: "/assets/lemon-svgrepo-com.svg" },
    { itemName: "lettuce", imageUrl: "/assets/lettuce-svgrepo-com.svg" },
    { itemName: "mango", imageUrl: "/assets/mango-svgrepo-com.svg" },
    { itemName: "mushrooms", imageUrl: "/assets/images/mushrooms-svgrepo-com.svg" },
    { itemName: "orange", imageUrl: "/assets/orange-svgrepo-com.svg" },
    { itemName: "paprika", imageUrl: "/assets/paprika-svgrepo-com.svg" },
    { itemName: "paprikas", imageUrl: "/assets/paprikas-svgrepo-com.svg" },
    { itemName: "potatoes", imageUrl: "/assets/potatoes-svgrepo-com.svg" },
    { itemName: "strawberry", imageUrl: "/assets/strawberry-svgrepo-com.svg" },
    { itemName: "watermelon", imageUrl: "/assets/water-svgrepo-com.svg" }
  ];
  // console.log(items)

  function clearClicked() {
    const myDiv = document.querySelector("#fruitGuess");
    myDiv.innerHTML = "";

  }
  

function fruitClicked() {
  const randomElement = Math.floor(Math.random() * items.length);
  const randomAnswer = items[randomElement];
  const randomAnswerImageUrl = randomAnswer.imageUrl;
  const randomAnswerName = randomAnswer.itemName;
  const myDiv = document.querySelector("#fruitGuess");
  // create a text element 
  const textElement = document.createElement("p");
  textElement.innerHTML = "Guess The Name Of This Fruit:"

   // Create <img> element for the photo
   const imgElement = document.createElement("img");
   imgElement.src = randomAnswerImageUrl;
   imgElement.alt = "Fruit";
   imgElement.width = 100;
   imgElement.height = 100;

   // append the text element and image element
   myDiv.appendChild(textElement);
   myDiv.appendChild(imgElement);
   // Create the input element
   const inputElement = document.createElement('input');
   inputElement.type = 'text';
   inputElement.placeholder = 'Enter your answer';
  // Create the submit button
   const submitButton = document.createElement('input');
   submitButton.type = 'submit';
   submitButton.value = 'Submit';
   submitButton.addEventListener('click', answerCheck);
   myDiv.appendChild(inputElement);
   myDiv.appendChild(submitButton);

  // Function to handle answer submission
  function answerCheck() {
  // Retrieve the entered answer from the input element
    const answer = inputElement.value;
    //create an image element for success image
    const succElement = document.createElement("img");
    succElement.src = "/assets/trophy-svgrepo-com.svg";
    succElement.alt = "Trophy";
    succElement.width = 100;
    succElement.height = 100;
    //create an image element for failure image
    const failElement = document.createElement("img");
    failElement.src = "/assets/thumb-down-svgrepo-com.svg";
    failElement.alt = "Thumbs Down Emoji";
    failElement.width = 100;
    failElement.height = 100;
    if (answer === randomAnswerName) {
      const success = document.createElement("p");
      success.innerHTML = "You guessed correctly! The answer was: " + randomAnswerName;
      myDiv.appendChild(success);
      myDiv.appendChild(succElement);

    } else {
      const failure = document.createElement("p");
      failure.innerHTML = "You guessed incorrectly! Please Try Again.";
      myDiv.appendChild(failure);
      myDiv.appendChild(failElement);

    }
  
}
   


}

