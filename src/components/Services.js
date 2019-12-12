import React, { Component } from "react";
import Title from './Title';
import {FaBeer, FaShuttleVan, FaHiking, FaCocktail} from 'react-icons/fa';

export default class Services extends Component {
	
	// State used for demonstration purposes
	state = {
		services: [
			{
				icon: <FaCocktail/>,
				title: "Free cocktails",
				info: "lorem ipsum test my Name is Nikos Kougianos and I am the best"
			},
			{
				icon: <FaBeer/>,
				title: "Best Beer",
				info: "lorem ipsum test my Name is Nikos Kougianos and I am the best"
			},
			{
				icon: <FaHiking/>,
				title: "Enjoy hiking",
				info: "lorem ipsum test my Name is Nikos Kougianos and I am the best"
			},
			{
				icon: <FaShuttleVan/>,
				title: "Free transportation",
				info: "lorem ipsum test my Name is Nikos Kougianos and I am the best"
			}
		]
	}

	render() {
		return(
			<section className="services">
				<Title title="Services"/>
				<div className="services-center">

					{/* Loop each icon */}
					{this.state.services.map((item, index) => {	

						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);

					})}

				</div>
			</section>
		)
	}

}