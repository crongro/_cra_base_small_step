import React, { Component } from 'react';

class  Content extends Component {

	addGame({target}) {
		const newGameName = target.previousElementSibling.value;

  	const {dispatch} = this.props;
		dispatch({
			type : "ADD_GAME",
			value : newGameName
		})
	}

  render() {
  	let {title, gamelist} = this.props;
  	let gamelistJSX = gamelist.map((value, i) => {
  		return <li key={i}> {value} </li>
  	});

    return (
      <div>
      	<p> {title} </p>
      	<div>
	      	<input type="text" />
	      	<button onClick={this.addGame.bind(this)}>추가</button>
	      	<ul>{gamelistJSX}</ul>
      	</div>
      </div>
    );
  }
}

export default Content ;