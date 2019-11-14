import React from 'react';
import intrinio from '../apis/intrinio';

class Search extends React.Component {
	state = { term: '', companies: []	}

	debounce = (fn, delay) => {
      let timer = null;
      return function (...args) {
          const context = this;
          timer && clearTimeout(timer);
          timer = setTimeout(() => {
              fn.apply(context, args);
          }, delay);
      };
	}

	SearchLoading = async () => {
		const response = await intrinio.get('/companies/search', {
			params: {
				query: this.state.term
			}
		});

		if (response.data.companies[0] !== undefined) {
			this.setState({ 
				companies: response.data.companies[0]
			});
		}
	}
	constructor(props) {
      super(props);
      this.SearchLoading = this.debounce(this.SearchLoading, 200);
  }

  handleTermChange = (e) => {
		this.setState({companies: []});
    this.setState({term: e.target.value});
    this.SearchLoading();
  }
  

	render() {
		return (
			<div className="ui container">
				<div className="ui icon input">
				  <input type="text" placeholder="Search..." value={this.state.term} onChange={this.handleTermChange} />
				  <div>
				  	Result: {this.state.companies.name}
				  </div>
				</div>
			</div>
		);
	}
}

export default Search;