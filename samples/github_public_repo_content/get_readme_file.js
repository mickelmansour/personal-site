const request = require('request');

// Send GET request to Github API with the following url: 
//     https://api.github.com/repos/<username>/<repo name>/contents/<path to file or folder (case sensitive)>
request.get({
        url: 'https://api.github.com/repos/mickelmansour/personal-site/contents/README.md',
        headers: {
            'User-Agent': 'node app'
        }
    }, (error, response, body) => {
	// The README.md file information is returned in body, with encoded content
	// NOTE: If the path provided in the url maps to a folder, details about 
	//       each child file/folder will be returned. 
        console.log(JSON.parse(body));
    }); 