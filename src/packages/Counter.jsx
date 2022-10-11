import React from 'react';
import CountUp, {useCountUp} from 'react-countup';
import 'bootstrap/dist/css/bootstrap.min.css'
import './counter.css';

function Counter() {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } =useCountUp({ref: countUpRef,start: 0,
        end: 75})
  return (
    <div className='counter'>
        <div className='boxes'>
            <div className='box box1'>{<CountUp end={100} duration={2.5} delay={3}/>}</div>
            <div className='box box2' ref={countUpRef}></div>
            <div className='box box3'>{<CountUp end={19115} duration={2} prefix='&#8383;'  suffix=' USD'/>}</div>

            
        </div>
            <div className='buttons'>
                <button className='btn btn-dark' onClick={start}>Start</button>
                <button className='btn btn-dark' onClick={pauseResume}>Pause Resume</button>
                <button className='btn btn-dark' onClick={reset}>Reset</button>
                <button className='btn btn-dark' onClick={()=>update(150)}>Update</button>
                

            </div>
         
    </div>
  )
}

export default Counter