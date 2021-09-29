import React from 'react';
import './team-logo.module.scss'

class Teamlogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded: false,
            items: []
         }
    }

componentDidMount() {
    fetch("https://api-nba-v1.p.rapidapi.com/teams/city/miami", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "7f51638886mshb6044789af2675bp1460bbjsnd9fea588a224"
	}
})
.then(res => {
	console.log(res.body);
})
.catch(err => {
	console.error(err);
});
}

    render() { 
        return ( <div>
            <h1>Testing</h1>
            </div> );
    }
}
 
export default Teamlogo;