var messages = ["Wild Psyduck!!! You have no pokeballs!", "Meowth to rule them all", "Team Rocket wants to challenge you!", "Dr. Oak is calling!", "Oh no! Youve lost your pokedex!"];


function generate() {

  return Math.floor(Math.random()* messages.length)
}

$('button').on("click", function(){
  $('#result h1').html(messages[generate()]);

})
