import { useEffect, useState } from "react";

function QuestionTimer({timeout, onTimeout, mode}){
    const [ time, setTime] = useState(timeout);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime-10);
        },10)
        return () => {
            clearInterval(timer);
        }
    }, [])
    
    useEffect(() => {
        const t = setTimeout(onTimeout, timeout);
          return () => {
            clearTimeout(t);
          }
    },[timeout, onTimeout])



    return(
        <progress id="question-time" value={time} max={timeout} className={mode} />
    )
}

export default QuestionTimer;