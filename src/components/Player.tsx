//custom hook
import React,{useState, useEffect, useCallback} from 'react';

const useAudio = (url: string | undefined): [boolean, ()=>void] =>{

    const [audio] = useState<HTMLAudioElement>(new Audio(url))
    const [playing, setPlaying] = useState<boolean>(false)
    const toggle = () => setPlaying(!playing)

    useEffect(()=>{
        playing ? audio.play() : audio.pause()
    }, [playing, audio])

    useEffect(()=>{
        const endListener = ()=>setPlaying(false);
        audio.addEventListener('ended', endListener)

        return () =>{
            audio.removeEventListener('ended',endListener)
        }
    },[audio])
    return [playing, toggle]

};

interface PlayerProps{
    url: string
}

const Player: React.FC<PlayerProps>=({url})=>{
    const [playing, toggle] = useAudio(url)

    return(
        <div>
            <h1 className="text-2xl font-extrabold text-gray-700">Музыка</h1>
            <div className='flex justify-center items-center'>
            <button onClick={toggle} className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus: outline-none focus: ring-blue-400 focus: ring-opacity-75'>
                {playing?'Pause Music':"Start Music"}
            </button>
            </div>
        </div>
    )

}
export default Player