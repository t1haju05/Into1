var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("Kukkuluuruu")
});

router.use(function (request,response,next) {
  console.log("Olen välivehje 1!");
  next();
});

router.get ('/toka',function(request,response)
{
  response.send("Moro.");
  console.log("Toka");

});

router.use(function (request,response,next) {
  console.log("Olen välivehje 2!");
  next();
});

router.get ('/kolmas/:nimi',function(request,response)
{
  response.send("Olenpa vaan "+request.params.nimi);
  console.log(request.params.nimi);

});

router.use(function (request,response,next) {
  console.log("Olen välivehje 3!");
  next();
});

router.get ('/neljas/:enimi/:snimi',function(request,response)
{
  response.send("Olenpa vaan "+request.params.enimi+" "+request.params.snimi);

});

router.get ('/viides/:enimi/:snimi/:sposti',function(request,response)
{
  response.send("Tietoni on "+request.params.enimi+" "+request.params.snimi+" "+request.params.sposti);

});

router.post('/',function(request,response)
{
  response.send(request.body);
});

module.exports = router;
