import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import './Subtotal.css'

function Subtotal() {

    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <><p>
                        Subtotal({basket?.length} items): <strong>{value}</strong>
                  </p>
                </>
            )} 
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"} />

            <button onClick={e => navigate('/payment')}>proceed to checkout</button>
        </div>
    )
}

export default Subtotal
