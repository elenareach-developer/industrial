import React,{useState,useEffect} from 'react';
import WheelComponent from "../components/WheelComponent"
import { FingerPrintIcon } from '@heroicons/react/outline'
import {segColorsWheel,segmentsWheel} from "../services/constants"


const Wheel = () =>{
    const [winner,setWinner] = useState(segmentsWheel[3]);
    const [segments, setSegments] = useState(segmentsWheel)
    const [values, setValues] = useState("")
    const [segmentColors, setSegmentColors] = useState(segColorsWheel)
    const onFinished = (winner:string)=> {
        setWinner(winner)
        console.log(winner)
      }
      const [commentText,setCommentText] = useState("")

      const handleSubmit = (evt:any) => {
             evt.preventDefault();
             //todo get data by enter
             setSegments(commentText.split("\n"))
         }

  useEffect(()=>{
      console.log(segments)
  })

  return (
    <>
       <div className="text-2xl font-bold flex items-center">
        <FingerPrintIcon className="mr-4 w-6 h-6" />
        <div>Wheel of Fortune</div>
      </div>
    <div className="wheelContainer">
    <div>
  {segments && <WheelComponent
        segments={segments}
        segColors={segColorsWheel}
        winningSegment={segmentsWheel[3]}
        onFinished={(winner)=>onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={false}
        size={190}
        upDuration={100}
        downDuration={1000}
      />}
      </div>
       <form  id="wheelForm" onSubmit={handleSubmit} >
      <div>
          <label
              htmlFor="CommentsOrAdditionalInformation">Wheel of Fortune: insert fields via Enter key</label>
                    <textarea 
                        name = "commentTextArea"
                        id="CommentsOrAdditionalInformation"
                        rows={4} 
                        cols={40}
                        value = {commentText}
                        onChange={e => setCommentText(e.target.value)}
                        className='resize rounded-md'
                          >
                  </textarea>
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" value="Submit">Enter</button>
            </div>
    </form>

      </div>
    </>

  )
}


export default Wheel
