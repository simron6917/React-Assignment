import React from 'react'
import './index.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import EventScreen from './screens/EventScreen'
import MangaScreen from './screens/MangaScreen'
import CommunityScreen from './screens/CommunityScreen'
import NewsScreen from './screens/NewsScreen'



function App() {
  return (
<Router>
<Route path='/' component={HomeScreen} exact/>
<Route path='/login' component={LoginScreen} />
<Route path='/register' component={RegisterScreen} />
<Route path='/news' component={NewsScreen} />
<Route path='/community' component={CommunityScreen} />
<Route path='/manga' component={MangaScreen} />
<Route path='/event' component={EventScreen} />


  </Router>
  );

}

export default App;
