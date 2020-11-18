

function myCookie(){
    document.cookie="name=Kadeem";
    document.cookie=" age=19";
    document.cookie="class=IS117";
    document.cookie="section=001";
    
    var allcookies = document.cookie;
               
    cookiearray = allcookies.split(';');
               
    
    for(var i=0; i<cookiearray.length; i++) {
       name = cookiearray[i].split('=')[0];
       value = cookiearray[i].split('=')[1]; 
    };

    alert(document.cookie)
};



