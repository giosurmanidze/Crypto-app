import React from 'react'
import '../Styles/Coins.css'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'

const Coins = ( {coins} ) => {
    
  return (
    <div className='containar'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>
            {coins.map(coin => {
                return (
                    <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}  >
                        <CoinItem coin={coin} />
                    </Link>
                )
            })}

        </div>    
    </div>
  )
}

export default Coins