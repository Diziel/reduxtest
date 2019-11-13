import React from 'react';
import intrinio from '../apis/intrinio';
import { Link } from 'react-router-dom';

class CompanyItem extends React.Component {
	state = {securities: []};

	componentDidMount() {
		this.LoadSecurities();
	}

	LoadSecurities = async () => {
		const response = await intrinio.get(`/securities/${this.props.company.ticker}/prices`,
			{
				params: {
					page_size: 1
				}	
			});

		this.setState({ 
			securities: response.data.stock_prices[0]
		});
	};

	render() {
		return (
			<Link to={ "/companies/" + this.props.company.ticker }>
				<div className="content">
		      <div className="header">{this.props.company.name}</div>
		      <ul>
		      	<li><b>Open: </b>{this.state.securities.open}</li>
		      	<li><b>Close: </b>{this.state.securities.close}</li>
		      	<li><b>High: </b>{this.state.securities.high}</li>
		      </ul>
		    </div>
			</Link>
		);
	}
}

export default CompanyItem;