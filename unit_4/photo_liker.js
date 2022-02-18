// link to project: https://studio.code.org/projects/applab/E_B25qiOTsy1_NRzLpyPO2l98tGfk95p3jL446lWbGw

//global vars
var likes = 0;
var comments = "OMG soooo cute!" + "\n";

//like button that updates counter
onEvent("upButton", "click", function( ) {
  likes = likes + 1;
  setText("likeCounterOutput", "Likes: " + likes  );
  playSound("sound://category_app/app_menu_button_4.mp3", false);
  
});

//dislike button that updates counter
onEvent("downButton", "click", function ( ) {
  likes = likes - 1;
  setText("likeCounterOutput", "Likes: " + likes  );
  playSound("sound://category_app/app_menu_button_4.mp3", false);
  
});

//add comment to comment board
onEvent("commentButton", "click", function( ) {
  comments += getText("newCommentInput") + "\n";
  setText("allCommentsOutput", comments ); 

});

