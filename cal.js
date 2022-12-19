function changeq(){
    let qtt =document.getElementById('quantity').value;
    let bld2 = document.getElementById('building').value;
    let lvl2 = document.getElementById('level').value;
    
        document.getElementById('total').innerText="RM(A)"+qtt*5+"+"+"RM(B)"+bld2+"+"+"RM(C)"+lvl2;
    
    }
    
    function changeq1(){
    
        let qtt =document.getElementById('quantity').value;
        let bld2 = document.getElementById('building').value;
        let lvl2 = document.getElementById('level').value;
    
        
       
        document.getElementById('total').innerText="RM(A)"+qtt*5+"+"+"RM(B)"+bld2+"+"+"RM(C)"+lvl2;
       
    }
    
    function changeq2(){
    
        let qtt =document.getElementById('quantity').value;
        let bld2 = document.getElementById('building').value;
        let lvl2 = document.getElementById('level').value;
      
    
    
       
        
        document.getElementById('total').innerText="RM(A)"+qtt*5+"+"+"RM(B)"+bld2+"+"+"RM(C)"+lvl2;
    
    }
    
    function totalprice(){
    
    
        let qtt =document.getElementById('quantity').value;
        let bld2 = document.getElementById('building').value;
        let lvl2 = document.getElementById('level').value;
    
        let total=qtt+bld2+lvl2;
        document.getElementById('total').innerText=total;
    
    
    }