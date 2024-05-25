import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='nav-container'>
			{isLoaded && (
					<ProfileButton user={sessionUser} />
			)}
				<NavLink exact to="/" className="home">Home</NavLink>
		</div>
	);
}

export default Navigation;