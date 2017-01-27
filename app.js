

const text_arr = [
  "That’s what she jazzed-hands.",
  "Jazz hands say celebrate with a piñata party!",
  "Begin jazz-handing with wives numbers, 3, 5, and 6.",
  "You’re not emotionally exploding with your jazz hands.",
  "Praise be unto him, our sweet lord of jazz hands. Go forth, and spread jazz hands.",
  "You are unstoppable in a flock of jazz hands.",
  "Jazz hands say that you are the hero that Denver deserves.",
  "Your jazz hands are decidedly over-rated and really not even that pretty",
  "Wheeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  "Jazz hands implore that you make it so. Live long and jazz hands.",
  "Bitch, I ain’t got no time for your jazz hands!",
  "Jazz hands don’t know why my thumbs are on the same side.",
  "Jazz hands don’t give af."
];
const gif_arr = [
  "https://media.tenor.co/images/d283f313c3c0d0d40afce76ebcd4f808/raw",
  "http://25.media.tumblr.com/f780ef9576a417fc1ecb5d98b3540acd/tumblr_mzu6pgg51b1r6bbvso1_400.gif",
  "http://cdn.theatlantic.com/static/easel/images/galleries/120051_romney_sparkles_jazz_hands.gif",
  "http://www.reactiongifs.com/wp-content/uploads/2013/03/in-the-zone.gif",
  "https://media.tenor.co/images/67abe24a76a98fbd5221d67c9385a5b7/raw",
  "http://www.pbh2.com/wordpress/wp-content/uploads/2015/04/jazz-hands.gif",
  "http://24.media.tumblr.com/756ceea44b312be6c795454f75ded50a/tumblr_mza4a0jBPs1rpozpso1_1280.gif",
  "http://31.media.tumblr.com/b518307c0477dea27b00c22955032744/tumblr_mpage1wm6w1rjdxtio1_400.gif",
  "http://68.media.tumblr.com/de6653a411750925ec4465b65b025b85/tumblr_inline_nut06mvc9L1rp6gwm_500.gif",
  "http://artfcity.com/wp-content/uploads/2016/06/3144263_o.gif",
  "https://m.popkey.co/21a00d/AoDYm.gif",
  "http://reactiongifs.me/wp-content/uploads/2013/10/zach-galifianakis-clapping.gif",
  "http://lolsnaps.com/upload_pic/2bfcaba3-everything-s-better-with-jazz-hands.gif"
]

$(document).ready(function() {
  $('#jazzbutton').click(function(event) { //the button id
    event.preventDefault();
    console.log("hi");
    let rando = Math.floor(Math.random() * 13);
    let randurl = gif_arr[rando];
    $('#homeHeading').html(text_arr[rando]); //the response text div id
    $('#gif').html(`<img src=${gif_arr[rando]}></img>`);

    $('#fakeq').val(''); //the text input id
  });
});
