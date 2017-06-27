import React, { Component } from 'react';

class Home extends React.Component {

	render () {
      
		return (
             <div>
                <ul>

                   {this.props.user.hobbies.map((hobbie, i) => <li key={i}>{hobbie} </li>)}
                </ul>
                <hr></hr>
                {this.props.children}
             </div>

			)

		}


		
	
	
}
Home.propTypes = {
   name: React.PropTypes.string,
   age: React.PropTypes.number,
   user: React.PropTypes.object,
   children: React.PropTypes.element.isRequired
}

export default Home;