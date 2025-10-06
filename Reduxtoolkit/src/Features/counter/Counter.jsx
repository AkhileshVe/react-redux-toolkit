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
      <div>
        <div style={{ background: "white", border: "5px dotted red", }}>
          <input
            style={{
              color: "black", background: "white", height:
                "30px", width: "120px", border: "5px dotted blue"
            }}
            type="number" value={amount}
            onChange={(e) => { 
               setAmount(e.target.value)}}
            placeholder='enter a number'
          ></input> <button style={{ color: "black", background: "" }}
            aria-label="Increment value"
            onClick={() => handlevaluebynumber()} >
            Increment by input number
          </button></div>
        <button style={{ color: "blue", background: "red" }}
          aria-label="Increment value"
          onClick={() => dispatch(increment())} >
          Increment
        </button>
        <button style={{ color: "blue", background: "yellow" }}
          aria-label="Increment value"
          onClick={() => dispatch(colorchange())} >
          Increment by 10
        </button>

        <div style={{ color: "white", background: "blue" }}>{count1}</div>

        <div style={{ color: "white", background: "blue" }}>{count}</div>
        <button style={{ color: "blue", background: "green" }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button style={{ color: "blue", background: "green" }}
          aria-label="Decrement value"
          onClick={() => dispatch(colordecrement())}
        >
          Decrement by 5
        </button>
      </div>
    </div>
  )
}