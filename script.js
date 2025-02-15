function openLetter() {
    document.getElementById("letterContainer").style.display = "none";
    document.getElementById("secondPage").style.display = "flex";
}

function goToSurprise() {
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("surpriseBox").style.display = "flex";

    // Start the music
    let music = document.getElementById("bgMusic");
    music.play();
}



    
