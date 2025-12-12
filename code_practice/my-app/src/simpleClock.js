import {useState , useEffect} from 'react'

const SimpleClock =() =>{

    const [time , setTime] = useState(new Date())

    useEffect(()=>{
        const interval = setInterval(() => {
            setTime( new Date());
        }, 1000);
        console.log(time)
        return ()=> clearInterval(interval);
    },[]
    )

    return (
        <div>{time.toLocaleTimeString()}</div>
    )

}

export default SimpleClock;