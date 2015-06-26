// Required module
var Twit = require('twit')

// Twitter data
var T = new Twit({
    consumer_key:         '...'
  , consumer_secret:      '...'
  , access_token:         '...'
  , access_token_secret:  '...'
})

// Tweet
T.post('statuses/update', { status: 'My First Tweet posted by Intel Galileo.' }, function(err, data, response) {
  console.log(data);
});