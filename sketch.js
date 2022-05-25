let comprimentoTela = 800;
let larguraTela = 600;
let xBolinha = 400;
let yBolinha = 300;
let diametroBolinha = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raioBolinha = diametroBolinha / 2;
let larguraRaquete = 20;
let comprimentoRaquete = 80;
let xMinhaRaquete = 10;
let yMinhaRaquete = larguraTela / 2 - comprimentoRaquete / 2;
let xRaqueteOponente = comprimentoTela - larguraRaquete - 10;
let yRaqueteOponente = larguraTela / 2 - comprimentoRaquete / 2;
let colidiu = false;
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(100);
  criaBolinha();
  moveBolinha();
  colideBolinha();
  criaMinhaRaquete(xMinhaRaquete, yMinhaRaquete);
  criaMinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
//  colideRaquete();
  colisaoRaquete(xMinhaRaquete, yMinhaRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraPlacar();
  marcaPontos();
}
function criaBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}
function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function colideBolinha() {
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}

function criaMinhaRaquete(posicaoX, posicaoY) {
  rect(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yMinhaRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yMinhaRaquete += 10;
  }
  yRaqueteOponente = yBolinha - comprimentoRaquete/2;
  
}

function colideRaquete() {
  if (
    xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete &&
    yBolinha - raioBolinha < yMinhaRaquete + comprimentoRaquete &&
    yBolinha + raioBolinha > yMinhaRaquete
  ) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoRaquete(posicaoX, posicaoY) {
  colidiu = collideRectCircle(
    posicaoX, posicaoY,
    larguraRaquete,
    comprimentoRaquete,
    xBolinha,
    yBolinha,
    diametroBolinha
  );
  if (colidiu){
      velocidadeXBolinha *= -1;
      }
  
}

function mostraPlacar(){
  fill(255);
  textSize(30);
  text(meusPontos, 200, 50);
  text(pontosOponente, 600, 50);
  
}

function marcaPontos(){
  if (xBolinha < xMinhaRaquete){
    pontosOponente += 1;
  }
  
  if(xBolinha > xRaqueteOponente){
    meusPontos += 1
  }
}