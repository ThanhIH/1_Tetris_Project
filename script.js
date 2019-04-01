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

// Impressions des value matrice dans le canvas 
function drawMatrice(Tsign){
    Tsign.forEach((row,y) => {  //Recherche sur la longueur
        row.forEach((value,x) => { // recherher des cases (0,1)
            if (value !== 0) { // Si la case est 1, dessiner une case bleu
                ctx.fillStyle = 'purple';
                ctx.fillRect(x,y,1,1);
            };
        });
    })  ;
}
drawMatrice(Tsign);