// link to project: https://studio.code.org/projects/applab/SokQxwyIvyydj0AFkBnRVz0btJmlqvCuQOuI651ZLzo

var reminders = ["Add reminders!"];

//sets beginning text
setText("reminderOutput", reminders [0]);

//adds a reminder
onEvent("addButton","click", function ( ){
  appendItem(reminders, getText("reminderInput"));
  if (getNumber("countOutput") == 0){
    setText("countOutput", 1);
    setText("reminderOutput", reminders[1]);
  }
  setText("reminderInput", "");
});

// moves one reminder to the right
onEvent("rightButton","click", function ( ){
  if(getNumber("countOutput") < reminders.length - 1){
    update_screen(+1);
  }
});

// moves one reminder to the left
onEvent("leftButton","click", function ( ){
  if(getNumber("countOutput") > 1){
    update_screen(-1);
  }
});

// changes the reminder on the screen
function update_screen(math){
  var number = math;
  setText("countOutput", getNumber("countOutput") + number);
  setText("reminderOutput", reminders [getNumber("countOutput")]);
}

