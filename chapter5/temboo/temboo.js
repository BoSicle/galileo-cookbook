// You'll need a single TembooSession object in your code, eg:
var tsession = require("temboo/core/temboosession");
var session = new tsession.TembooSession("your_temboo_name", "app_name", "app_token");

var Facebook = require("temboo/Library/Facebook/Reading");

var getLatestMentionChoreo = new Facebook.GetLatestMention(session);

// Instantiate and populate the input set for the choreo
var getLatestMentionInputs = getLatestMentionChoreo.newInputSet();

// Set inputs
getLatestMentionInputs.set_Name("facebook_name");
getLatestMentionInputs.set_AccessToken("facebook_app_token");

// Run the choreo, specifying success and error callback handlers
getLatestMentionChoreo.execute(
    getLatestMentionInputs,
    function(results){console.log(results.get_Response());},
    function(error){console.log(error.type); console.log(error.message);}
);