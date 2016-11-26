var express = require('express')
var router = express.Router()
var superagent = require('superagent')

router.get('/:code', function(req, res, next){
    var code = req.params.code
    console.log(code)

    url = 'https://api.instagram.com/oembed/?url=http://instagram.com/p/'+code
    superagent
    .get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end(function(err, response){
        console.log(JSON.stringify(response.body))
        //res.json(response.body)
        res.render('post', response.body)
    })

	
})

module.exports = router