import React, { useEffect, useRef, useState } from 'react'
import "./Code.css";


const Code = () =>{

    return(
        <pre className="language-html">
            <code className="language-html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>grid <span className="code-highlight bg-code-highlight">grid-cols-4</span> gap-4<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>01<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
            <span className="token comment">&lt;!-- ... --&gt;</span>
            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>09<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
            </code>
        </pre>
       )
}
export default Code;