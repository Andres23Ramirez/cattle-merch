import React, { useContext } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Payment.css';

const Payment = () => {

  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state
  const navigate = useNavigate()

  const paypalOptions = {
    clientId: 'AZ5B_r44WjtHNTSe8w_Vdz07QaN5eqwrRu2rxAsfCqO1krWL7_WOxqONrwMbkStovHOpC2vXjqUl__4j',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }

      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item)=>(
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>Item: {item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={err => console.log('Error: ', err)}
            onCancel={(data) => console.log('Cancel Payment' + data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;