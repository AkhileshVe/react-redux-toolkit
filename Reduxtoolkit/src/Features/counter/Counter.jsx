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
      <div style={{ background: "white", border: "5px dotted red", width: "500px", height: "500px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

        <div>  <div style={{ color: "white", background: "#9ddcdc" }}>{count1}</div>
          <div style={{ background: "white", border: "5px dotted red", }}>
            <div style={{display:"flex", flexDirection:"row"}}>   <input
              style={{
                color: "black", background: "white", height:
                  "30px", width: "70px", border: "5px dotted blue"
              }}
              type="number" value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
              placeholder='enter a number'
            />
              <button style={{ color: "black", background: "#b3e06bff" ,height:40, fontSize:"10px"}}
                aria-label="Increment value"
                onClick={() => handlevaluebynumber()} >
                Increment by input number
              </button>
            </div>
          </div>


      <div><button style={{ color: "blue", background: "yellow" }}
            aria-label="Increment value"
            onClick={() => dispatch(colorchange())} >
            Increment by 10
          </button></div>
        <button style={{ color: "blue", background: "green" }}
          aria-label="Decrement value"
          onClick={() => dispatch(colordecrement())}
        >
          Decrement by 5
        </button>
</div>
        <div>

          <div style={{ color: "white", background: "blue" }}>{count}</div>
          <button style={{ color: "blue", background: "red" }}
            aria-label="Increment value"
            onClick={() => dispatch(increment())} >
            Increment
          </button>
          <button style={{ color: "blue", background: "green" }}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

        </div>

      </div>
    </div>
  )
}