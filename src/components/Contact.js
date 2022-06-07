import React, { useEffect } from 'react';

export default function Contact(props) {
	console.log(props);
	return (
		<div className='card'>
			<img className='imgCard' src='logo192.png' />
			<div className='container'>
				<h4>
					<b>{props.name}</b>
				</h4>
				<p>{props.profession}</p>
			</div>
		</div>
	);
}
