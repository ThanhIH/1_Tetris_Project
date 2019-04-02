// Tetris JS

//Setting up
const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');
ctx.scale(20,20);

// Exemple of the tetris container 
ctx.fillStyle = "#000";
ctx.fillRect(0,0, canvas.width, canvas.height);

// Création (test) d'une figure en matrice
// Espace en + pour le pivot 
const Tsign = [
    [0,0,0],
    [1,1,1],
    [0,1,0],
];

function draw(){
    drawMatrice(player1.matrice, player1.pos);
}


// Impressions des value matrice dans le canvas 
function drawMatrice(Tsign, offset){
    Tsign.forEach((row,y) => {  //Recherche sur la longueur/largeur
        row.forEach((value,x) => { // recherher des cases (0,1)
            if (value !== 0) { // Si la case est 1, dessiner une case bleu
                ctx.fillStyle = 'purple';
                ctx.fillRect(x + offset.x,
                                 y + offset.y,
                                 1, 1)};
        });
    })  ;
}


function update(){
    draw();
    requestAnimationFrame(update);
}


const player1 = {
    pos:{x:5 , y:5},
    matrice : Tsign,
}

update();