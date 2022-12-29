var chance =1; 
const tictactoe = [];
setInterval(()=>{
    $('.refresh').toggleClass('color');
},500);

$("#player1").click(()=>{
    $('.refresh').addClass('hidden');
    $('.choose').addClass('hidden');
    for(let i=1;i<10;i++){
       
        $('.box'+i).click(()=>{
           
            if($('.box1').text()===$('.box5').text() && $('.box1').text() === $('.box9').text() 
            && $('.box1').text() !== ""){
                $('.winner').text("Winner! "+$('.box1').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
               
               
            }
            else if($('.box1').text()===$('.box2').text() && $('.box1').text()===$('.box3').text()
            && $('.box1').text() !== ""){
                $('.winner').text("Winner! "+$('.box1').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box1').text()===$('.box4').text() && $('.box1').text()===$('.box7').text()
            && $('.box1').text() !== ""){
                $('.winner').text("Winner! "+$('.box1').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box1').text()===$('.box2').text() && $('.box1').text()===$('.box3').text()
            && $('.box1').text() !== ""){
                $('.winner').text("Winner! "+$('.box1').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box4').text()===$('.box5').text() && $('.box4').text()===$('.box6').text()
            && $('.box4').text() !== ""){
                $('.winner').text("Winner! "+$('.box4').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box7').text()===$('.box8').text() && $('.box7').text()===$('.box9').text()
            && $('.box7').text() !== ""){
                $('.winner').text("Winner! "+$('.box7').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box2').text()===$('.box5').text() && $('.box2').text()===$('.box8').text()
            && $('.box2').text() !== ""){
                $('.winner').text("Winner! "+$('.box2').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box3').text()===$('.box6').text() && $('.box3').text()===$('.box9').text()
            && $('.box3').text() !== ""){
                $('.winner').text("Winner! "+$('.box3').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box3').text()===$('.box5').text() && $('.box3').text()===$('.box7').text()
            && $('.box3').text() !== ""){
                $('.winner').text("Winner! "+$('.box5').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if(tictactoe.length===9){
                $('.refresh').removeClass('hidden');
                $('.winner').text("Tie!");
                $('.refresh').text("Refresh To Play Again!")
               
            }
            else if(chance===1){
                if($('.box'+i).text()==="X" || $('.box'+i).text()==="O" ){
                    alert(" this box already has a value!")
                    
                }
                else{
                    $('.box'+i).text('X');
                    chance++;
                    tictactoe.push(1+'X');
                }
               
                
            }
            
            else{
                if($('.box'+i).text()==="X" || $('.box'+i).text()==="O" ){
                    alert(" this box already has a value!")
                   
                }
                else{
                    $('.box'+i).text('O');
                    chance--;
                    tictactoe.push(2+'O');
                }
                
                
            }
            
        })
        
    }
})

$("#player2").on('click',()=>{
    $('.refresh').addClass('hidden');
    $('.choose').addClass('hidden');
    for(let i=1;i<10;i++){
       
        $('.box'+i).click(()=>{
           
            if($('.box1').text()===$('.box5').text() && $('.box1').text() === $('.box9').text() 
            && $('.box1').text() !== ""){
                $('.winner').text("Winner! "+$('.box1').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
               
            }
            else if($('.box1').text()===$('.box2').text() && $('.box1').text()===$('.box3').text()
            && $('.box1').text() !== ""){
                $('.winner').text("Winner! "+$('.box1').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box1').text()===$('.box4').text() && $('.box1').text()===$('.box7').text()
            && $('.box1').text() !== ""){
                $('.winner').text("Winner! "+$('.box1').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box1').text()===$('.box2').text() && $('.box1').text()===$('.box3').text()
            && $('.box1').text() !== ""){
                $('.winner').text("Winner! "+$('.box1').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box4').text()===$('.box5').text() && $('.box4').text()===$('.box6').text()
            && $('.box4').text() !== ""){
                $('.winner').text("Winner! "+$('.box4').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box7').text()===$('.box8').text() && $('.box7').text()===$('.box9').text()
            && $('.box7').text() !== ""){
                $('.winner').text("Winner! "+$('.box7').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box2').text()===$('.box5').text() && $('.box2').text()===$('.box8').text()
            && $('.box2').text() !== ""){
                $('.winner').text("Winner! "+$('.box2').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box3').text()===$('.box6').text() && $('.box3').text()===$('.box9').text()
            && $('.box3').text() !== ""){
                $('.winner').text("Winner! "+$('.box3').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            else if($('.box3').text()===$('.box5').text() && $('.box3').text()===$('.box7').text()
            && $('.box3').text() !== ""){
                $('.winner').text("Winner! "+$('.box5').text());
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                
            }
            if(tictactoe.length===9){
                $('.refresh').removeClass('hidden');
                $('.refresh').text("Refresh To Play Again!")
                $('.winner').text("Tie!");
                
            }
           
            else if(chance===1){
                $('.box'+i).text('O');
                chance++;
                tictactoe.push(2+'O');
            }
            
            else{
                $('.box'+i).text('X');
                chance--;
                tictactoe.push(1+'X');
                
            }
            
            
        })
        
    }
})
