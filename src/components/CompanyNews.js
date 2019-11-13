import React from 'react';

const CompanyNews = ({news}) => {
	
	const renderList = news.map((singleNews) => (
			<div className="item" key={singleNews.id}>
				<a href={singleNews.url}>
					<div className="content">
			      <div className="header">{singleNews.title}</div>
			      <br/>
			      <p>{singleNews.publication_date}</p>
			      <p>{singleNews.summary}</p>
			    </div>
		    </a>
	    </div>
		)
	);

	return <div className="ui relaxed divided list">{renderList}</div>;
}

export default CompanyNews;