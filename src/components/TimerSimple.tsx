import React, {useState, useEffect} from 'react'

export default function TimerSimple(){
    const [second, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
            let interval: number| undefined;
            if(isRunning){
                interval = setInterval(()=>{
                    setSeconds((prevSeconds)=>prevSeconds+1)
                },1000);
            }else{
                clearInterval(interval)
            }
           

            return ()=> clearInterval(interval)
    },[isRunning])

    const startTimer = () =>{
        setIsRunning(true)
    }
    const stopTimer = () =>{
        setIsRunning(false)
    }

    const resetTimer = () =>{
        setIsRunning(false);
        setSeconds(0)
    }

    const formatTime = (seconds:number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };

    return(
        <>
        <div>
            <h1 className="text-2xl font-extrabold text-gray-700">Таймер</h1>
            <p>прошло времени <span className="font-bold  text-gray-700">{formatTime(second)}</span></p>
            <div className="p-10">
            {!isRunning&&<button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2" onClick = {startTimer}>Старт</button>}
            {isRunning&&<button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2" onClick = {stopTimer}>Стоп</button>}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"  onClick = {resetTimer}>Сбросить</button>
            </div>
        </div>
        </>
    )

}