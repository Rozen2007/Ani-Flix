
const express=require('express');
const router =express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const api = require('gogoanime')
router.get('/', urlencodedParser,function(req, res){
    
    api.popular(2).then(function(result){
        let animelist=[]
        result.forEach(function(anime){
            try{
                var dummy = anime['episodes'][0]['id']
                animelist.push(anime)
            }catch(e){
                //pass
            }
        })
        res.render('index', {data:animelist})
    })

})
module.exports=router;