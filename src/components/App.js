import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';

const App = () => {

	return (
		<BrowserRouter>
			<div className="ui container">
				<Switch>		
					<Route 
						path="/companies/:ticker"
						component={CompanyDetail}
					/>	
					<Route 
						path="/companies" 
						component={CompaniesList} 
					/>
					<Route path="/"><Redirect to="/companies"/></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;