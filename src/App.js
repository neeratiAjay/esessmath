import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ThankYou from './components/ThankYou'

import './App.css'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  </Router>
)

export default App
