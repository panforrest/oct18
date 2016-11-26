var express = require('express')
var router = express.Router()
var superagent = require('superagent')

router.get('/', function(req, res, next){

	res.render('profilesearch', {title: 'Profile Search'})

})

module.exports = router