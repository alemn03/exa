/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    
 document.getElementById("mcss").onclick = function() {anonimaMovileFirst();};
 document.getElementById("dcss").onclick = function() {anonimaDesktopFirst();};




var anonimaMovileFirst = function(){
    var link = document.getElementById('css');
    link.href = 'styles/mobile_First.css';
 

}

var anonimaDesktopFirst = function(){
    var link = document.getElementById('css');
    link.href = 'styles/desktop_first.css';
 

}


