import React ,{useState} from 'react'

function HookCounterTow() {
const intial = 0
const [count, setCount] = useState(intial)
const fiveIncrment= ()=>{
for(var i=0;i<5;i++){
    setCount(prevCount =>prevCount+1)
}
}
    return (
        <div>
            count : {count}
            <button onClick={()=>setCount(intial)}>Reset</button>
            <button onClick={()=>setCount(prevCount =>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount =>prevCount-1)}>Decrement</button>
            <button onClick={fiveIncrment}>fiveIncrment</button>

        </div>
    )
}

export default HookCounterTow
