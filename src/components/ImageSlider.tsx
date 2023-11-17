import React, {useState} from 'react';
interface ImagesProps{
    images: string[]
}

const ImageSlider:React.FC<ImagesProps>= ({images}) =>{
    const [current, setCurrent] = useState<number>(0);
    const showPrev = ()=>{
        if(current!=0){
            setCurrent(current-1)
        }else{
            setCurrent(images.length-1)
        }
    }
    const showNext = ()=>{
        if(current!=images.length-1){
            setCurrent(current+1)
        }else{
            setCurrent(0)
        }
    }

    return(
        <>
        <div className="relative">
        <h1 className="text-2xl font-extrabold text-gray-700">Слайдер</h1>
        <button onClick={showPrev} className="absolute left-0 top-1/2 transform -traslate-y-1/2 bg-gray-800 test-white px-4 py-2 rounded-md hover:bg-gray-600">Previos</button>
            <img src={images[current]} className="mx-auto max-w-full" />
        <button onClick={showNext} className="absolute right-0 top-1/2 transform -traslate-y-1/2 bg-gray-800 test-white px-4 py-2 rounded-md hover:bg-gray-600">Next</button>
        </div>
        </>
    )
}

export default ImageSlider;