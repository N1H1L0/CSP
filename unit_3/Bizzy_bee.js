// link to project: https://studio.code.org/projects/applab/lfIBgwqQJ0pmbHr-2hKTHxwGuzBTUZsTM_WWJzrsdTQ

var answer_default = " \n This question has not been answered yet. It will be answered by our staff as soon as possible:) Thank you for your patience.";
var already_answered = "The question you asked was already answered. Look above please:)";
hideElement("user_question"); //hide where you will display imputed question
hideElement("user_q_answer");

onEvent("imput_enter", "click", function( ) {
  hideElement("imput1"); //hide both imput bar and enter button
  hideElement("imput_enter"); 
  setText("user_question", getText("imput1")); // set the text of question box to imputed question 
  showElement("user_question");// show the text box where user question has been imputed
  if (getText("imput1") == "What if my business fails?"){ // check if they question has already been answered
    setText("user_q_answer", already_answered); // set text of answer to already_answered
    showElement("user_q_answer"); // show the text box where question will show up
  } else if (getText("imput1") == "What kind of business is the best to start?"){
    setText("user_q_answer", already_answered); 
    showElement("user_q_answer"); 
  } else { // if other statements wheren't true do this 
    setText("user_q_answer", answer_default ); // set text of answer to default answer
    showElement("user_q_answer"); // show the text box where question will show up
  }
});

// doens't actually have data base of answers bc that would make this way too complicated
// instead of a simple project like it should be

onEvent("buttonHome", "click", function( ) { // do the code below on click
  setScreen("homeScreen"); // change screen to screen name in command
});

onEvent("buttonLearning", "click", function( ) { //do the code below on click
  setScreen("learn2fPage"); //change screen to screen name in command 
  playSound("sound://category_whoosh/animation_whoosh12.mp3", false); // play sound described and don't loop it
});

onEvent("buttonTakeoff", "click", function( ) {
  setScreen("takeoffPage");
  playSound("sound://category_whoosh/animation_whoosh12.mp3", false);
});

onEvent("buttonPreflight", "click", function( ) {
  setScreen("preflightPage");
  playSound("sound://category_whoosh/animation_whoosh12.mp3", false);
});

onEvent("buttonHom", "click", function( ) {
  setScreen("homeScreen");
});

onEvent("buttonHo", "click", function( ) {
  setScreen("homeScreen");
});

onEvent("FAQ_button", "click", function ( ){ 
  setScreen("FAQ");
  playSound("sound://category_whoosh/animation_whoosh12.mp3", false);
});

onEvent("button4", "click", function( ) {
  setScreen("homeScreen");
});

onEvent("buttonStep4", "click", function( ) {
  setScreen("learn2fPage");
});

onEvent("buttonStep7", "click", function( ) {
  setScreen("takeoffPage");
});

onEvent("buttonFaqNext", "click", function( ) {
  setScreen("FAQ");
});

