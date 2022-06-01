import react from 'react';
import Card from '../components/Card';
import {robots} from '../robots';

const robot = ({ robots }) => {
	return (
		<div>
		   {
			robots.map((user, i) => {
				return( 
					<Card 
					key={i} 
					id={robots[i].id} 
					name={robots[i].name} 
					username={robots[i].username} 
					email={robots[i].email} 
					/>
				); 
	        })
	    }
	    </div>
    );
}


export default robot;	