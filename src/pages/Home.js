import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
	return (
		<>
		<Hero hero="defaultHero">
			<Banner title="Luxurious rooms starting at $99" subtitle="Deluxe rooms">
				<Link className="btn-primary" to="/rooms">
					Our rooms
				</Link>
			</Banner>
		</Hero>
		<Services title="Services"/>
		<FeaturedRooms />
		</>
	)
}

// hero="defaultHero" sets the hero prop of Hero to be equal to class defaultHero in order for the correct CSS to be applied
// Alternatively we can set default props this way (it's better to write default props inside the component itself (Hero.js)):
Hero.defaultProps = {
	hero: "defaultHero"
}