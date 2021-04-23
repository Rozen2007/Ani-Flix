const express=require('express');
const router =express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const api = require('gogoanime')
router.get('/:title', urlencodedParser,function(req, res){
   var titlee= req.params.title
   var n = titlee.indexOf('episode') + 8;
  // console.log(n)
var editedLink = titlee.slice(0,n) 
   if(editedLink.includes('dub')){
      var name = editedLink.replace(/[-]/g,' ').replace('episode','').replace('dub','(DUB)').toUpperCase();
   }else{
      var name = editedLink.replace(/[-]/g,' ').replace('episode','').toUpperCase();
   }

   var currentEpi = titlee.slice(n) //for sending current episode
   //console.log(currentEpi)
  // console.log(name)
   api.animeEpisodeHandler(titlee).then(function(result){
       res.render('episodepage', {data:result, links:editedLink , title:name , episode: currentEpi})
   })

})

module.exports=router;