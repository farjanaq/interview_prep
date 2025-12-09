import { useState, useEffect } from 'react';
// trafficLight.js

const TrafficLight = () => { 

    const [light, setLight] = useState('red');

    useEffect(()=>
    {
        const interval = setInterval(() => {
            setLight((prev) => {
                console.log(prev);
                if (prev === 'red') return 'yellow';
                if (prev === 'yellow') return 'green';
                if (prev === 'green') return 'red'
             })
                
        }, 1000)
        return (()=>clearInterval(interval));
    }
        
       
)

 

    return (
        <div style={{
        height: '180px',
        width:'50px',
        backgroundColor: 'black'

    }}>
            <div style={{
                height: '60px',
                width: '50px',
                backgroundColor:  light =='red' ? light : 'grey',
                borderRadius : '50%'
            }}>
            </div>
            <div style={{
                height: '60px',
                width: '50px',
                backgroundColor: light == 'yellow' ? light : 'grey',
                borderRadius: '50%'
            }}>
            </div>
            <div style={{
                height: '60px',
                width: '50px',
                backgroundColor: light == 'green' ? light : 'grey',
                borderRadius : '50%'
            }}>
            </div>
    </div>)




}


export default TrafficLight;