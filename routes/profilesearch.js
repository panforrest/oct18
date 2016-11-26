var express = require('express')
var router = express.Router()
var superagent = require('superagent')

router.get('/', function(req, res, next){

	res.render('profilesearch', {title: 'Profile Search'})

})

router.get('/:username', function(req, res, next){

	var username = req.params.username

    var url = 'https://www.instagram.com/'+username+'/media/'
    superagent
    .get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end(function(err, response){
        if (err) {
        	res.json({
        		confirmation: 'fail'
        	})
        	return
        }

        res.json(response.body)   //per superagent documentation
    })
})

router.post('/', function(req, res, next){
	var username = req.body.username      //verytime post method, it's alway req.body
 
    console.log(username)
})

module.exports = router