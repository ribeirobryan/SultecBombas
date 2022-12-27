import './ImageSlider.scss'
import {useRef, useEffect} from 'react'


export default function ImageSlider(e){

    const img1Ref = useRef()
    const img2Ref = useRef()    
    const img3Ref = useRef()
    
    let buttonValue = '';
    let controlVar = 1

    function HandleClick(e){

        buttonValue = e.target.value

        if (buttonValue === '>' && controlVar == 1) {
            img2Ref.current.scrollIntoView({behavior:'smooth'})
            controlVar = 2
        } else if (buttonValue === '>' && controlVar == 2) {
            img3Ref.current.scrollIntoView({behavior:'smooth'})
            controlVar = 3
        } else if (buttonValue === '>' && controlVar == 3){
            img1Ref.current.scrollIntoView({behavior:'smooth'})
            controlVar = 1
        } else if (buttonValue === '<' && controlVar == 1){
            img3Ref.current.scrollIntoView({behavior:'smooth'})
            controlVar = 3
        } else if (buttonValue === '<' && controlVar == 2) {
            img1Ref.current.scrollIntoView({behavior:'smooth'})
            controlVar = 1
        } else if (buttonValue === '<' && controlVar == 3){
            img2Ref.current.scrollIntoView({behavior:'smooth'})
            controlVar = 2
        }
    }
    

    return(
        <div className='imageSliderWrapper'>
            <div className='productDisplayWrapper'>
                <div className='productDisplay' ref={img1Ref}><img src="src\assets\logoSultec.png" alt="" /></div>
                <div className='productDisplay' ref={img2Ref}><img src="src\assets\logoSultec.png" alt="" /></div>
                <div className='productDisplay' ref={img3Ref}><img src="src\assets\logoSultec.png" alt="" /></div>
            </div>
            <div className="selectButtons">
                <input onClick={HandleClick} type='button' className='selectButton' value="<" id='backwards'></input>
                <input onClick={HandleClick} type='button' className='selectButton' value=">" id='forward'></input>
            </div>
        </div>
)



}