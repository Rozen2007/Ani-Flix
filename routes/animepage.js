const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const api = require('gogoanime')
router.get('/:title', urlencodedParser, function (req, res,next) {
    var titlee = req.params.title
    api.search(titlee).then(function (result) {
        let animelist=[]
        result.forEach(function(anime){
            try{
                var dummy = anime['episodes'][0]['id']
                animelist.push(anime)
            }catch(e){
                //
            }
        })
            res.render('animepage', {
                data: animelist
            })
    }).catch(next)
})
module.exports = router;