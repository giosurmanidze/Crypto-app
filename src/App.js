import { useState, useEffect } from 'react'
import axios from 'axios';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coin from './routes/Coin';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {  
  const [coins,setCoins] = useState([])
  

  useEffect(() => {
    axios.get(url)
    .then(response => { setCoins(response.data) })
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
          <Route path='/' element={ <Coins coins={coins} />} />
          <Route path='/coin' element={<Coin />}>
              <Route path=':coinId' element={<Coin />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
