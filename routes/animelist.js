const express=require('express');
const router =express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const api = require('gogoanime')

router.get('/0', urlencodedParser,function(req, res){
    api.alphabetList(0,1).then(function(result){
        let animelist= []
        result.forEach(function(anime){
            try{
                var dummy = anime['episodes'][0]['id']
                animelist.push(anime)
            }catch(e){
              //  console.log('This is just a api problem',e)
            }
        })
        res.render('animelist',{data1:animelist})

    })

})
router.get('/:alphabet', urlencodedParser,function(req, res){
    var alpha = req.params.alphabet
    api.alphabetList(alpha,1).then(function(result){
        let animelist= []
        result.forEach(function(anime){
            try{
                var dummy = anime['episodes'][0]['id']
                animelist.push(anime)
            }catch(e){
               //pass
            }
        })
        res.render('animelist',{data1:animelist})

    })

})
router.get('/:alphabet/:pageno', urlencodedParser,function(req, res){
    var alpha = req.params.alphabet
    var no = req.params.pageno
    api.alphabetList(alpha,no).then(function(result){
        let animelist= []
        result.forEach(function(anime){
            try{
                var dummy = anime['episodes'][0]['id']
                animelist.push(anime)
            }catch(e){
                //pass
            }
        })
     //   console.log(animelist)
        res.render('animelist',{ data1:animelist})

    })

})
module.exports=router;