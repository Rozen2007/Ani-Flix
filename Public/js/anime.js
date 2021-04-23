$(document).ready(function(){
    $("form.searchbar").submit(function(event){
        event.preventDefault();
        var searchQuery = $("#searchbox").val();   
        window.location.href ="/animepage/"+searchQuery
    });
});

function searchPage(){
   var pageNo = $('#pageno').val();
    var pathName = window.location.pathname;
    var urlName = '/animelist/'
    var alphaName = pathName.replace(urlName,'')
    var myelement = alphaName.slice(0,1)
    if(pageNo.length >= 3 || pageNo>63){
        alert('Do not try to excceed the limits please ')
    } else{
        window.location.href =urlName + myelement + '/'+ pageNo
    }
    
}

function redirectToNext(epicount){
   // console.log(epicount, window.location.pathname)
    let a = window.location.pathname
    let b = a.indexOf('-episode-')+9
    let c = a.slice(b) //for current episode number
    let d = a.slice(0,b) // to redirect
    let e= parseInt(c)+1
  //  console.log(a,b,c, epicount,e)
    if(c == epicount){
        window.location.href= d + '1'
    }else if(c < epicount){
        window.location.href= d + e
    }else{
        window.alert('Error!')  
    }
}

function redirectToPrev(epicount){
    // console.log(epicount, window.location.pathname)
     let a = window.location.pathname
     let b = a.indexOf('-episode-')+9
     let c = a.slice(b) //for current episode number
     let d = a.slice(0,b) // to redirect
     let e= parseInt(c)-1
   //  console.log(a,b,c, epicount,e)
     if(c == 1){
         window.location.href= d + epicount
     }else if(c > 1){
         window.location.href= d + e
     }else{
         window.alert('Error!')  
     }
 }