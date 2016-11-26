var express = require('express')
var router = express.Router()
var superagent = require('superagent')

router.get('/:code', function(req, res, next){
    var code = req.params.code
    console.log(code)

    url = 'https://api.instagram.com/oembed/?url=http://instagram.com/p/BBNtIVxras8/'
    superagent
    .get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end(function(err, response){
        console.log(JSON.stringify(response.body))
        res.render('post', null)
    })

	
})

module.exports = router