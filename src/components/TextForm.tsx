import React, {useState} from 'react';

const TextForm: React.FC =()=>{
//1. input from inpyt 
//2. get that value
//3. show that value in the screen
//to do get traslation fo the pages
    const [text, setText] = useState<string>('')
    
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value) 
    }

    return(
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-extrabold text-gray-700 p-4">Введеннный текст покажется в отдельном окошке</h1>
                <input 
                    type="text" 
                    value={text}
                    onChange={handleChange}
                    placeholder = "Введите текст"
                    className="w-full p-2 rounded-md shadow-md border-gray-700 focus:outline-none focus: ring focus:border-blue-300"
                    />
                {text && (
                    <div className="bg-gray-100 p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semiold">Введенный текст:</h2>
                        <p className="mt-2">{text}</p>
                    </div>
                
                )}
            </div>
        </>
    )
}
export default TextForm