import React, { Component } from "react";
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true
	};

	// function that runs when all components mount
	componentDidMount() {
		let rooms = this.formatData(items);
		let featuredRooms = rooms.filter((room) => room.featured === true);
		this.setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false 
		});
	}

	formatData(items) {
		let tempItems = items.map(item => {

			// Create variables for better structuring 
			let id = item.sys.id;

			let images = item.fields.images.map(image => image.fields.file.url);

			// Structure object
			let room = {...item.fields, images, id};

			return room;
		});

		return tempItems;
	}

	getRoom = (slug) => {
		let tempRooms = [...this.state.rooms];
		const room = tempRooms.find((room)=>room.slug === slug);
		return room;
	}

    	render() {
		return(
			// pass different variables (value and getRoom in Room context provider)
			<RoomContext.Provider value={{
				...this.state,
				getRoom:this.getRoom
			}}>

				{this.props.children}

			</RoomContext.Provider>
		); 
    	}
}

const RoomConsumer = RoomContext.Consumer;

// Higher order function (returns another function)
// This is done to avoid complex coding in RoomsContainer.js
export function withRoomConsumer(Component) {
	return function ConsumerWrapper(props) {
		return (
			<RoomConsumer>
				{value => <Component {...props} context={value}/>}
			</RoomConsumer>
		);
	}
}

export { RoomProvider, RoomConsumer, RoomContext };
