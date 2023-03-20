// codigos do carro

let xCarros = [1000, 1000, 1000, 1000, 1000,1000 ,1000];
let yCarros = [80, 192, 300, 420, 530, 636];
let velocidadeCarros = [4, 8, 14, 10, 12, 7];
let comprimentoCarro = 100;
let alturaCarro = 80;

function mostraCarro(){  
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){  
  for (let i = 0; i < imagemCarros.length; i++){  
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 1000;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50; 
}





