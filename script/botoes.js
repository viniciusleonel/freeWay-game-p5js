let gui;
let b;
let c;


function drawBotao(){
    gui = createGui();
    b = createButton("Up", 100, 740, 200, 50);
    c = createButton("Down", 700, 740, 200, 50);
}

function botao(){
    if (c.isPressed){
        if(podeSeMover()){
          yAtor += 80;
        }
      }
      if (b.isPressed){
        yAtor -= 80;
      }
    }

function touchMoved() {
    return false;
}