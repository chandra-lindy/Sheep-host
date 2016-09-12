import React from 'react';


const SecondNavBar = (props) => {
	return (
		<div className="display">
			<ul className="nav nav-tabs col-md-8" data-toggle="button">
				<li><h3 className="collection-display-name font">Collections:</h3></li>
				{props.names.map((el, i)=> {
					return <button className="tabs btn btn-primary info font" aria-pressed="true" onClick={props.click} id={i} key={i} name={el} role="button">{el}</button>;
				})}
			</ul>
		</div>
	)
}


export default SecondNavBar;
