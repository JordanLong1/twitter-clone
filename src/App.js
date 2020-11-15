import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom';
import Feed from './components/Feed'; 
import Search from './components/Search'; 
import Notifications from './components/Notifications'; 
import Messages from './components/Messages';

class App extends React.Component {
  render() {
    return (
      <div data-test="links-container">
        <BrowserRouter data-test="browser-router-tag">
      <Route data-test='routes' exact path='/' component={Feed} />
      <Route data-test='routes' exact path='/search' component={Search}/>
      <Route data-test='routes' exact path='/notifications' component={Notifications}/>
      <Route data-test='routes' exact path='/messages' component={Messages} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
