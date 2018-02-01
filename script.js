var quoteArray = [
    ["Because, because I’m not giving up! I’m still here and I’m staying!", "- Kermit the Frog"],
    ["I base most of my fashion taste on what doesn't itch.", "- Gilda Radner"],
    ["Bad days happen to everyone, but when one happens to you, just keep doing your best and never let a bad day make you feel bad about yourself.", "- Big Bird"],
    ["There is no normal life that is free of pain. It's the very wrestling with our problems that can be the impetus for our growth.", "- Mr. Rogers"],
    ["I don't care what they say about me. I just want to eat.", "- Pam Beesly"],
    ["I'm exceedingly smart. I graduated college at fourteen. While my brother was getting an STD, I was getting a Ph.D. Penicillin can't take this away.", "- Sheldon Cooper"],
    ["You wanna hurt me? Go right ahead if it makes you feel any better. I'm an easy target. Yeah, you're right, I talk too much. I also listen too much. I could be a cold-hearted cynic like you... but I don't like to hurt people's feelings. Well, you think what you want about me; I'm not changing. I like... I like me.", "- Del Griffith"],
    ["The point is, how do you know the Guarantee Fairy isn't a crazy glue sniffer?", "- Tommy Callihan"]
  ];

var newQuote, newAuthor;

function randomQuote() {
  var randQuote = Math.floor(Math.random() * quoteArray.length);
  newQuote = document.getElementById("quote").innerHTML=quoteArray[randQuote][0];
  newAuthor = document.getElementById("author").innerHTML=quoteArray[randQuote][1];
}

function randomColor() {
  var randColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  document.body.style.background = randColor;
  document.getElementById("leftQuote").style.color = randColor;
  document.getElementById("author").style.color = randColor;
  document.getElementById("quote").style.color = randColor;
  document.getElementById("tweetQuote").style.color = randColor;
  document.getElementById("tumbleQuote").style.color = randColor;
  document.getElementById("quoteButton").style.background = randColor;
}

$(document).ready(function() {
  randomQuote();
  randomColor();
})

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
                  
  $("#tweetQuote").on('click', function() {
    openURL('https://twitter.com/intent/tweet?text=' + '"' + encodeURIComponent( newQuote + '" ' + newAuthor));
  });
  
  
  /* This is the link that's not working. Using documentation from Tumblr documentation https://www.tumblr.com/docs/en/share_button but not sure how to use the data attributes*/
   
  $('#tumblr-quote').on('click', function() {
   openURL('https://www.tumblr.com/share' + '" ' + encodeURIComponent( newQuote + '"' + newAuthor )); 
  });
