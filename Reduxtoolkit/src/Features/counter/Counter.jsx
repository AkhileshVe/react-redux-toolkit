import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { colorchange, colordecrement, colorincrementByAmount } from './colorSlice'

export function Counter() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const count1 = useSelector((state) => state.color.value)
  const dispatch = useDispatch()

  function handlevaluebynumber() {
    dispatch(colorincrementByAmount(amount))
  }

  return (
    <div>
      <div
        style={{
          background: "white", border: "15px solid gray",
          width: "500px", height: "500px", display: "flex",
          flexDirection: "row", alignItems: "center", justifyContent: "center"
        }}>

        <div style={{ border: "1px solid black", background: "#e2f2f6" }}>  <div style={{
          color: "white", background: "#9ddcdc",
          marginBottom: "50px"
        }}>{count1}</div>
          <div style={{  background: "#9ddcdc", border: "5px solid red", }}>
            <div style={{ display: "flex", flexDirection: "row" }}>   <input
              style={{
                color: "black", background: "white", height:
                  "30px", width: "70px", border: "5px solid blue"
              }}
              type="number" value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
              placeholder='enter a number'
            />
              <button
                style={{
                  color: "black", background: "#b3e06bff",
                  height: 40, fontSize: "10px"
                }}
                aria-label="Increment value"
                onClick={() => handlevaluebynumber()} >
                Increment by input number
              </button>
            </div>
          </div>


          <div><button style={{ color: "blue", background: "yellow" }}
            aria-label="Increment value"
            onClick={() => dispatch(colorchange())} >
            Increment by +10
          </button>
          <button style={{ color: "blue", background: "green" }}
            aria-label="Decrement value"
            onClick={() => dispatch(colordecrement())}
          >
            Decrement by -5
          </button></div>
        </div>
        <div style={{ border: "1px solid black" }}>
          <div style={{ color: "white", background: "#9ddcdc",  }}>{count}</div>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center" , backgroundColor:"#e2f2f6", height:"182px"}}>
             <button style={{ color: "white", background: "red" }}
            aria-label="Increment value"
            onClick={() => dispatch(increment())} >
            Increment +
          </button>
            <button style={{ color: "white", background: "green" }}
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}>
              Decrement -
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}