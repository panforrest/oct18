var express = require('express')
var router = express.Router()
var superagent = require('superagent')

router.get('/', function(req, res, next){

	res.render('profilesearch', {title: 'Profile Search'})

})

router.get('/test', function(req, res, next){

	// var test = require.params.test
    res.json({
    	confirmation: 'Hey!'
    })
})

module.exports = router