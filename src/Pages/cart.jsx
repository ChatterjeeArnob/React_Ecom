import React, { useEffect, useState } from "react";

const Cart = ({ cart }) => {
  const [CART, setCART] = useState([]);
  const[total,setTotal] = useState(0);
  useEffect(() => {
    setCART(cart);
   

  }, [cart]);
  useEffect(()=>{
    let total1 = 0
    CART.map(item=>total1 += item.price*item.quantity)
    console.log(CART);
    setTotal(total1)
  console.log(total1,'this is total');
  },[CART])

  function checkout(){
    alert(total)
  }
  return (
    <div>
      {CART.map((cartItem, cartIndex) => {
        return (
          <div key={cartIndex}>
            <img src={cartItem.url} width={30} alt="" />
            <span>{cartItem.name}</span>
            <button
              onClick={() => {
                const Cart = CART.map((item, index) => {
                  return cartIndex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(Cart);
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => {
                const Cart = CART.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(Cart);
              }}
            >
              +
            </button>
            <span>Rs.{cartItem.price * cartItem.quantity}</span>
          </div>
        );
      })}
      <p>
        Total:
        {
          total
          
          // CART.map((item) => {
          //   console.log(item);
          // })
        }
        <button onClick={checkout}>Checkout</button>
      </p>
    </div>
  );
};

export default Cart;
