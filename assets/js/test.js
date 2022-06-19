//  function sounds(){

//      var rand = [
//          'assets/audio/outuby_exeos.mp3',
//          'assets/audio/outuby_skush.mp3',
//          'assets/audio/outuby_justin.mp3',
//          'assets/audio/outuby_matthew.mp3',
//          'assets/audio/outuby_joey.mp3',
//          'assets/audio/outuby_petermann.mp3',
//          'assets/audio/outuby_gaffi.mp3',];
//      var randSound = rand[Math.floor(Math.random() * rand.length)];

//      var player=document.getElementById('player');
//      var sourceMp3=document.getElementById('sourceMp3');
//      sourceMp3.src='' + randSound + '';

//     player.load();
//     player.play();
//  }
//  $('.box').click(sounds);

function playRandomSound(){ 
    var sounds = [
        "assets/audio/outuby_exeos.mp3",
        "assets/audio/outuby_skush.mp3",
        "assets/audio/outuby_justin.mp3",
        "assets/audio/outuby_matthew.mp3",
        "assets/audio/outuby_joey.mp3",
        "assets/audio/outuby_petermann.mp3",
        "assets/audio/outuby_gaffi.mp3",
        "assets/audio/outuby_exeos.mp3",
        "assets/audio/outuby_skush.mp3",
        "assets/audio/outuby_justin.mp3",
        "assets/audio/outuby_matthew.mp3",
        
    ];
        
  
    var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
    document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

    console.log("mobile");

  }else{

    console.log("desktop");

    // var audio = new Audio('assets/audio/Startklar2.ogg');
    // audio.play();
    // audio.loop =true;

}

function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-volume-xmark');
    icon.classList.toggle('fa-volume-high');
  
    anchor.querySelector("span").textContent = icon.classList.contains('fa-volume-xmark') ? " " : " ";
}