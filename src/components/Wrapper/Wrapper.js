import React, { Component } from "react";
import friends from "./../../friends.json"
import FriendCard from "./../FriendCard"

import "./Wrapper.css";



function shuffleArr(array) {
  var array = array.map(function(x){return x});
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
class Wrapper extends Component {
	state = {
		friends: friends.concat(friends).concat(friends),
		score: 0
	}

	handleIncrement = () => {
		let score = this.state.score;
		this.setState({score: score+1});
		this.shuffleFriends();
		console.log("score", this.state.score)
	}
	handleDecriment = () => {
		let score = this.state.score;
		this.setState({score: 0});
		this.shuffleFriends();
		console.log("score",this.state.score);

	}
	shuffleFriends = () => {
		let friends  = this.state.friends;
		let shuffledFriends = shuffleArr(friends);
		this.setState({friends: shuffledFriends});

	}

	render() {
		return (
		
		<div className="wrapper">
		<h1>{this.state.score}</h1>
		{
	    this.state.friends.map((friend,idx)=> (
	    		<FriendCard key={idx}
	    					image={friend.image}
	    					handleIncrement={this.handleIncrement}
	    					handleDecriment={this.handleDecriment}
	    		></FriendCard>
	    	))
	    }
		</div>
		)

	}
}

export default Wrapper;
