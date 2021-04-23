var express = require('express');
var bodyParser = require('body-parser');
var app=express();
var mainpageRoute = require('./routes/mainpage')
var episodepageRoute = require('./routes/episodepage')
var animepageRoute = require('./routes/animepage')
var animelistRoute = require('./routes/animelist')
const api = require('gogoanime')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','ejs')
app.use(express.static(__dirname + '/Public'));
// ROUTING
app.use('/',mainpageRoute)
app.use('/episodepage',episodepageRoute)
app.use('/animepage',animepageRoute)
app.use('/animelist', animelistRoute)
app.get('/help', function(req,res){
    res.render('help')
})
//ERROR HANDLING 
/*  */
app.use(function(err,req,res,next){
    const errorobj={
        text:"NOOOOOOOOOO! I'm sorry but the anime you are trying to access/search has messed up links, it's the problem of the API i'm using, so i am sorry! But!! there's a workaround for that, if you tried searching for an anime and faced this error then the chances are that the anime can still be viewed but you have to find it in the anime list page!!. ",
        errorname: 500,
        imgurl:'/images/crying.png'
    }
    res.status(500).render('errorpage',{data:errorobj})
});     
app.all('*',function(req,res){
    var pathname=req.path
 //   console.log(pathname)
    const errorobj={
        text:'So? Where were you trying to go chief? where is this '+'"' +pathname + '"' + ' :) . Well if you accidentaly ended up here then i am sorry, but if you intentionally tried this then WHY? just WHY? ',
        errorname: 404,
        imgurl:'/images/confused.png'
    }
    res.status(404).render('errorpage',{data:errorobj})
});
// INITIATING PORT REQ
app.listen(process.env.PORT || 3000)