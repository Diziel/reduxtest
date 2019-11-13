import React from 'react';
import intrinio from '../apis/intrinio';

class Search extends React.Component {
	state = { term: '', companies: []	};

	componentDidMount() {
		this.SearchLoading();
	}

	SearchLoading = async () => {
		const response = await intrinio.get('/companies/search', {
			params: {
				query: 'APSOQ'
			}
		});

		this.setState({ 
			companies: response
		});
	};

	render() {
		console.log(this.state.companies);
		return <div className="ui container">Search</div>;
	}
}

export default Search;