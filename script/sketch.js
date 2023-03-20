function setup() {
  createCanvas(1000, 800);
  somDaTrilha.loop();
  drawBotao();  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  mostrarRecorde();
  placarRecorde();  
  drawGui();
  botao();
}
