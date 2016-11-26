var express = require('express')
var router = express.Router()
var superagent = require('superagent')

router.get('/', function(req, res, next){

	res.render('profilesearch', {title: 'Profile Search'})

})

router.get('/:username', function(req, res, next){

	var username = req.params.username
    res.json({
    	confirmation: username
    })
})

module.exports = router