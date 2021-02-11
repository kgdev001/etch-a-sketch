//create a 16x16 grid of divs
//div color to change upon hover
// grid density controllable by user

//GRID CREATED USING FLOAT

//const container = document.querySelector('.container');
//const gridrow = document.createElement('div');
//container.style.borderColor='black';
//container.style.borderWidth='10 px';
//const grid = document.createElement('div');
//grid.classList='gridelement';
//grid.style.backgroundColor='blue';
//container.appendChild(grid);
const container = document.querySelector('.container');

//const gridcolumn = document.createElement('div');// only one div is formed

function GenerateGrid(columnNumber=16){
    for(let i=1; i<=columnNumber**2; i++){
        const gridcolumn = document.createElement('div');// Proper 16*16 grid of div is formed
        gridcolumn.classList='gridCell';
        gridcolumn.style.backgroundColor='red';
        gridcolumn.style.float='left';
        let width= 100/columnNumber;
        gridcolumn.style.width=width +'%';
        let height= 100/columnNumber;
        gridcolumn.style.height=height+'%';
        //grid.style.margin='0.5%';
        //grid.style.padding='1%';
        //grid.style.border='2%';
        //grid.style.borderStyle='solid';
        //grid.style.position='relative';
        //gridcolumn.onmouseover=() => gridcolumn.style.backgroundColor='black';
        container.appendChild(gridcolumn);
        
    };

};
GenerateGrid();
const button=document.querySelector('.button');
const gridcell=document.querySelectorAll('.gridCell');
button.onclick= ()=> gridcell.forEach(element =>  element.style.backgroundColor = 'red');
container.addEventListener('click', Draw);
    
function Draw(){
    const startDraw = document.querySelectorAll('.gridCell');
    
    //startDraw.forEach.onmouseover= () =>startDraw.forEach.style.backgroundColor='black' ;
    startDraw.forEach((item)=>{
        //item.addEventListener('mouseover', () =>item.style.backgroundColor='black' ); }
        

            item.onmouseover = ()=>item.style.backgroundColor='black' ;

        //else  {return "'nil'";}

    
        
        }
    );

}
  