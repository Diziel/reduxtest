import React from 'react';
import intrinio from '../apis/intrinio';
import CompanyItem from './CompanyItem';

class CompaniesList extends React.Component {
	state = { companies: []	};

	componentDidMount() {
		this.LoadCompanies();
	}

	LoadCompanies = async () => {
		const response = await intrinio.get('/companies', {
			params: {
				page_size: 10
			}
		});

		this.setState({ 
			companies: response.data.companies,
		});
	};

	render() {
		
		const renderList = this.state.companies.map((company) => {
			return (
				<CompanyItem 
					key={company.id}
					company={company}
				/>
			);
		});  
		return <div className="ui relaxed divided list">{renderList}</div>;
	}
}

export default CompaniesList;