let userName = prompt("You came just in time! What's your name fellow explorer?")

alert ("Welcome," + userName)

console.log(userName);

alert("We are now going on an adventure to find treasure");
  alert("On the adventure you will be presented with different options. Where we end up is solely based on your choices. Choose wisely :O");
  alert("Ready when you are!");
  alert("You are in a magical forest.There are two paths you can take. On the right side, there's the path called doomsday. On the left hand side, there is a path called rainbow. Which path will you take?")

let path = prompt("type 'rainbow' or 'doomsday' ")

if (path === 'rainbow') {
        alert('Oof, that was a close one! You had me worried for a sec. Nice choice! Over here there are fairies that can help guide the way.')
        let fairy = prompt ("type 'Blossom' or 'Nightmare'.")
        if (fairy === 'Blossom'){
        alert("Oh goodie! She's the sweetest and knows rainbow road inside out. By that I mean she left a trail to lead us to the treasure haha. ")
        alert("Let's follow her trail of cookies.")
        alert ("We just arrived. There's a cloud. It's made of cotton candy. To find the treasure you have to eat it,are you down?")
        let treasure = prompt("type 'yes' or 'no'")

        if (treasure === 'yes')
        alert("Score! We found the treasure! We got a code that'll give us an unlimited amount of tacos.")
        alert("Thanks for playing! Enjoy your tacos!")
        }
        else if('Nightmare'){
          alert("Nightmare cannot be found here silly! She's by the doomsday road dun dun dun!")
        }
        else if('no'){
          alert("I guess better luck next time buddy.")
        } 
        else {
          alert('Error')
        }
      }
      else if (path === 'doomsday') {
        alert('Oh we are goners for sure buddy :O! Well over here there are fairies that can help guide the way.')
              let fairy = prompt ("type 'Blossom' or 'Nightmare'.")
              if (fairy === 'Nightmare'){
              alert("Well...she isn't the greatest. She might pummel us, but she does know doomsday road inside out. By that I mean she left a trail of serpents to lead us to the treasure haha.")
              alert("Let's follow her trail of serpents.") 

              alert ("We just arrived. There's a cloud. It's made of beetles. I know, strange!To find the treasure amongst the beetles you have to cast a spell to get them to scatter away, are you down?")
              let treasure = prompt("type 'yes' or 'no'")

              if (treasure === 'yes')
              alert("Dang! She played us. This is a pile of mud. Well that sucked.")
              alert("Thanks for playing! Enjoy your mud!")
             } 
             else if ('Blossom') {
             alert('Oop. If you are looking for Blossom you stumbled upon the wrong place. She is by the rainbow road.')
             } 
             else if('no') {
              alert('Maybe its for the best.Thanks for playing anyways!')
              }
              else {
                alert('Error')
              }
            } else {
        alert("Error!")
      }