//Funções extras
function criarestrelas() {
    var aux = Math.round(random(1, 3));
    switch (aux) {
        case 1:
            premio = createSprite(92, 274, 10, 10);
            premio.setAnimation("star2_1");
            premio.scale = 0.05;
            break;
        case 2:
            premio = createSprite(190, 74, 10, 10);
            premio.setAnimation("star2_1");
            premio.scale = 0.05;
            break;

        case 3:
            premio = createSprite(98, 218, 10, 10);
            premio.setAnimation("star2_1");
            premio.scale = 0.05;
            break;
    }
}

//paredes
var wall1 = createSprite(200, 54, 250, 10);
wall1.shapeColor = "DeepPink";
var wall2 = createSprite(194, 154, 150, 10);
wall2.shapeColor = "DeepPink";
var wall3 = createSprite(75, 200, 8, 300);
wall3.shapeColor = "DeepPink";
var wall4 = createSprite(120, 252, 8, 200);
wall4.shapeColor = "DeepPink";
var wall5 = createSprite(324, 145, 8, 181);
wall5.shapeColor = "DeepPink";
var wall6 = createSprite(268, 195, 8, 80);
wall6.shapeColor = "DeepPink";
var wall7 = createSprite(97, 350, 50, 10);
wall7.shapeColor = "DeepPink";
var wall8 = createSprite(296, 230, 58, 10);
wall8.shapeColor = "DeepPink";

var premio = createSprite(296, 200, 10, 10);
premio.setAnimation("star2_1");
premio.scale = 0.05;

//personagem principal
var Bambu = createSprite(98, 330, 13, 13);
Bambu.shapeColor = "ligthCoral";

//inimigos
var ruitu1 = createSprite(144, 130, 13, 13);
var ruitu2 = createSprite(244, 130, 13, 13);
var ruitu3 = createSprite(80, 218, 10, 10);

//cor dos inimigos 
ruitu1.shapeColor = "Purple";
ruitu2.shapeColor = "Purple";
ruitu3.shapeColor = "Purple";

//velocidade dos inimigos 
ruitu1.velocityY = 5;
ruitu2.velocityY = 5;
ruitu3.velocityX = 1;

//variável para contagem das perdas 
var count = 0;

var ganhou;

//som do jogo
//playSound("sound://category_background/eerie_beginnings.mp3", false);

function draw() {
    //cor de fundo
    background("pink");

    //tamanho do texto,contorno do texto, cor do texto, exibição do texto + valor da variável
    textSize(25);
    stroke("DeepPink");
    fill("black");
    text("Mortes: " + count, 258, 24);

    //rebatendo nas paredes 
    ruitu1.bounceOff(wall1);
    ruitu1.bounceOff(wall2);
    ruitu2.bounceOff(wall1);
    ruitu2.bounceOff(wall2);
    ruitu3.bounceOff(wall4);
    ruitu3.bounceOff(wall3);


    //Movimentação  
    if (keyDown("right")) {
        Bambu.x = Bambu.x + 5;
    }
    if (keyDown("left")) {
        Bambu.x = Bambu.x - 5;
    }
    if (keyDown("up")) {
        Bambu.y = Bambu.y - 5;
    }
    if (keyDown("down")) {
        Bambu.y = Bambu.y + 5;
    }

    if (Bambu.isTouching(premio)) {
        ganhou = ganhou + 5;
        premio.destroy();
        criarestrelas();
    }

    //verificando se o bambu toca alguma parede ou o ruitu1 ou 2
    if (Bambu.isTouching(wall1) ||
        Bambu.isTouching(wall2) ||
        Bambu.isTouching(wall3) ||
        Bambu.isTouching(wall4) ||
        Bambu.isTouching(wall5) ||
        Bambu.isTouching(wall6) ||
        Bambu.isTouching(wall7) ||
        Bambu.isTouching(wall8) ||
        Bambu.isTouching(ruitu1) ||
        Bambu.isTouching(ruitu2) ||
        Bambu.isTouching(ruitu3)) {
        //se ele tocar precisa reiniciar
        Bambu.x = 94;
        Bambu.y = 328;
        //e somar uma perda 
        count = count + 1;
    }
    //desenha os sprites
    drawSprites();
}


