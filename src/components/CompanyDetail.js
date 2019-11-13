import React from 'react';
import intrinio from '../apis/intrinio';
import CompanyNews from './CompanyNews';
import CommentsBlock from './CommentsBlock';

const companiesInfo = {
	ticker: 'Ticker',
	name: 'Name',
	legal_name: 'Legal Name',
	stock_exchange: 'Stock Exchange',
	ceo: 'CEO Name',
	entity_status: 'Entity Status',
	hq_country: 'Head Quarters Country',
	sector: 'Sector',
	short_description: 'Description'
}

class CompanyDetail extends React.Component {
	state = { companiesDetail: null, companiesNews: [] };

	componentDidMount() {	
		this.LoadCompaniesDetail();
	}

	LoadCompaniesDetail = async () => {
		const response = await intrinio.get(`/companies/${this.props.match.params.ticker}`);
		const responseNews = await intrinio.get(`/companies/${this.props.match.params.ticker}/news`);

		this.setState({ 
			companiesDetail: response.data,
			companiesNews: responseNews.data.news
		});
	};

	render() {
		if (this.state.companiesDetail === null) {
			return <div>Loading...</div>;
		}else{
			return (
				<div>
					<div className="ui list">
						{Object.keys(companiesInfo).map(key=> (
					  	<div className="item" key={key}><b>{companiesInfo[key]}</b> {this.state.companiesDetail[key]}</div>
						))}
					</div>
					<CommentsBlock />
					<h2>News</h2>
					<CompanyNews news={this.state.companiesNews} />
				</div>
			);
		}
	}
}

export default CompanyDetail;