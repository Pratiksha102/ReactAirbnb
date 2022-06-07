import React from 'react';

// export default function Contact({name,profession}) {
// 	//console.log(props);
// 	return (
// 		<div className='card'>
// 			<img className='imgCard' src='logo192.png' />
// 			<div className='container'>
// 				<h4>
// 					<b>{name}</b>
// 				</h4>
// 				<p>{profession}</p>
// 			</div>
// 		</div>
// 	);
// }

export default function Contact(props) {
	console.log(props + 'props');

	//console.log(output);
	return (
		<div className='card'>
			<img className='imgCard' src='logo192.png' />
			<div className='container'>
				<h4>
					<b style={{ display: props.name ? 'block' : 'none' }}>{props.name}</b>
				</h4>
				<p>{props.profession}</p>
				<p>{props.rating}</p>
			</div>
		</div>
	);
}
