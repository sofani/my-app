import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import registerServiceWorker from './component/registerServiceWorker';

class App extends React.Component {
    render() {
        var user = {
            name: "Anna",
            hobbies: ["sports", "reading"]
        }
    	return (
           <div className="container">
    		   <div>
    		      <Header/>
    		   </div>

               
               <Home name={"Max"} age={27} user={user}>
                 <p>This is a paragraph</p>
              </Home>

    		   <div>
    		   <Footer/>
    		   </div>
    		</div>
       );
    		
    	
    }


}
ReactDOM.render(<App/>, window.document.getElementById('root'));


