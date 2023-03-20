// codigos do ator
let yAtor = 732;
let xAtor = 470;
let colisao = false;
let meusPontos = 0;
let recorde = 0;
let showRecorde = "Recorde: ";

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 60, 60);
}

function movimentaAtor(){
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 6;
    }
  }
  if (keyIsDown(87) || keyIsDown(UP_ARROW)){
    yAtor -= 6;
  }
}

function verificaColisao(){
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 30)
    if (colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos--;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 732;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(50);
  fill(color(128,0,128))
  text(meusPontos, width / 2, 50)
}

function mostrarRecorde(){
  textAlign(CENTER);
  textSize(50);
  fill(color(255,255,0))
  text(recorde, 260, 50)
  text(showRecorde, 130, 50) 
}

function marcaPonto(){
  if (yAtor < 30){
    meusPontos++;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 732;
}

function incluirRecorde(meusPontos, recorde){
  return meusPontos > recorde
}

function placarRecorde(){
  if (incluirRecorde(meusPontos, recorde)){
    recorde = meusPontos
  }
}


