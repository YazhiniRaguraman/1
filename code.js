function insertImage(){
    document.querySelectorAll('.box').forEach(image=>{
    if(image.innerText.length!==0){ if(image.innerText=="WTitan")
      { image.innerHTML="WTitan <img  src='WTitan.png' alt='' width='110' height='110' style='vertical-align:middle; position:absolute' >"
     image.style.cursor='pointer'}

     if(image.innerText=="WCanon")
      { image.innerHTML="WCanon <img  src='WCannon.png' alt='' width='50' height='50' style='vertical-align:middle; position:absolute' >"
     image.style.cursor='pointer'}

     if(image.innerText=="WTank")
      { image.innerHTML="WTank <img  src='WTank.png' alt='' width='50' height='50' style='vertical-align:middle; position:absolute' >"
     image.style.cursor='pointer'}
     if(image.innerText=="BTitan")
      { image.innerHTML="BTitan <img   src='BTitan.png' alt='' width='110' height='110' style='vertical-align:middle; position:absolute' >"
     image.style.cursor='pointer'}

     if(image.innerText=="BCanon")
      { image.innerHTML="BCanon <img   src='BCannon.png' alt='' width='50' height='50' style='vertical-align:middle; position:absolute' >"
     image.style.cursor='pointer'}

     if(image.innerText=="BTank")
      { image.innerHTML="BTank <img   src='BTank.png' alt='' width='50' height='50' style='vertical-align:middle; position:absolute' >"
     image.style.cursor='pointer'}


 } })
}
insertImage();









let tog = 1;


function color(){
  document.querySelectorAll('.box').forEach(elem=>{
    elem.addEventListener("click",function(){
    let gettext1=elem.textContent;
            console.log(gettext1)
               let arr3=Array.from(gettext1);
               let c = arr3.length > 0 ? arr3.shift() : '';
               console.log(c);
               console.log(gettext1);
               console.log(tog);
   if(tog%2==0){
    if(c=='W'){
      elem.style.backgroundColor='blue';
      console.log("blue working");
      tog++;
      coloringotheritems();
      
    }
    else if(c==''){
              
    }
    else if(c=='B'){
      alert('!');
    }
   }
  
   else{
    if(c=='B'){
      elem.style.backgroundColor='blue';
      console.log("blue working");
      tog++;
      coloringotheritems();
      
    }
    else if(c==''){
  
    }
    else if(c=='W'){
          alert('!');
    }
   }
  })
  
  } )
  }




color();


function coloringotheritems(){
      document.querySelectorAll('.box').forEach(item=>{
           if(item.style.backgroundColor=='blue') {
              
            const getId=item.id;
            const arr=Array.from(getId);
             arr.shift();
             const i=eval(arr.shift());
             const j=eval(arr.pop());
             const targetid10=100*(i-1)+(j-1);
             const targetid20=100*(i-1)+(j);
             const targetid30=100*(i-1)+(j+1);
             const targetid40=100*(i+1)+(j-1);
             const targetid50=100*(i+1)+(j);
             const targetid60=100*(i+1)+(j+1);
             const targetid70=100*(i)+(j-1);
             const targetid80=100*(i)+(j+1);
             
             
         
          document.querySelectorAll('.box').forEach(item1=>{
              
            let getId1=item1.id;
            const arr1=Array.from(getId1);
             arr1.shift();
            const a=eval(arr1.shift());
             const b=eval(arr1.pop());
             const targetid11 =100*a + b ;
      
                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid10) && document.getElementById('B'+targetid11).innerText.length==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                    { item1.style.backgroundColor='pink';
                      item1.style.cursor='pointer';

                    replacing();
}
        

                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid20) && document.getElementById('B'+targetid11).innerText.length==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                  { item1.style.backgroundColor='pink';
                item1.style.cursor='pointer';
                replacing();
              
                  }
              
              
                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid30) && document.getElementById('B'+targetid11).innerText.length==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                  { item1.style.backgroundColor='pink';
                item1.style.cursor='pointer';

               replacing();
                  }
              
                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid40) && document.getElementById('B'+targetid11).innerText.length==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                  { item1.style.backgroundColor='pink';
                item1.style.cursor='pointer';
                  replacing();
                  }
              
              
                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid50) && document.getElementById('B'+targetid11).innerText.length==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                  { item1.style.backgroundColor='pink';
                item1.style.cursor='pointer';
                 replacing();
                  }
              
              
                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid60) && document.getElementById('B'+targetid11).innerText.length==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                  { item1.style.backgroundColor='pink';
                item1.style.cursor='pointer';
                 replacing();
                  }
              
              
                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid70) && document.getElementById('B'+targetid11).innerText.length==0)
                  { item1.style.backgroundColor='pink';
                item1.style.cursor='pointer';
                 replacing();
                  }
              
              
                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid80) && document.getElementById('B'+targetid11).innerText.length==0)
                  { item1.style.backgroundColor='pink';
                item1.style.cursor='pointer';
                   replacing();
                  }








                if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid10) && document.getElementById('B'+targetid11).innerText.length !==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                  { item1.style.backgroundColor='red';}

              if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid20) && document.getElementById('B'+targetid11).innerText.length !==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                { item1.style.backgroundColor='red';}
            
            
              if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid30) && document.getElementById('B'+targetid11).innerText.length !==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan") 
                { item1.style.backgroundColor='red';}
            
              if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid40) && document.getElementById('B'+targetid11).innerText.length !==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                { item1.style.backgroundColor='red';}
            
            
              if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid50) && document.getElementById('B'+targetid11).innerText.length !==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                { item1.style.backgroundColor='red';}
            
            
              if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid60) && document.getElementById('B'+targetid11).innerText.length !==0 && item.innerText !=="WTitan" && item.innerText !=="BTitan")
                { item1.style.backgroundColor='red';}
            
            
              if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid70) && document.getElementById('B'+targetid11).innerText.length !==0)
                { item1.style.backgroundColor='red';}
            
            
              if(document.getElementById('B'+targetid11)==document.getElementById('B'+targetid80) && document.getElementById('B'+targetid11).innerText.length !==0)
                { item1.style.backgroundColor='red';}
              


              } ); 
            
            
          
            

          }
        })}


coloringotheritems();










function replacing(){

  document.querySelectorAll('.box').forEach(item5=>{
    if(item5.style.backgroundColor=='blue'){
  
        const temp1HTML =item5.innerHTML;
        console.log("check1");
  
      document.querySelectorAll('.box').forEach(item4=>{
  
        if(item4.style.backgroundColor==='pink'){
                       console.log("check2");
          item4.addEventListener("click",function(){
            
            item5.innerHTML="";
           item4.innerHTML=temp1HTML;
                   
           console.log(item4.innerText.length);  
           console.log("check3"); 
             
          insertImage();

              document.querySelectorAll('.box').forEach(y=>{
               if(y.innerText.length!==0){
                 y.style.backgroundColor='bisque';
                 y.style.cursor='pointer';
               }
               else{
                 y.style.backgroundColor='bisque';
                 y.style.cursor='auto';
                
               }
              })
          }
        
      )
        
      
      }
      })
    }
  })
  
  
  }




  













