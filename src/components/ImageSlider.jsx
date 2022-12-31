import './ImageSlider.scss'
import {useRef} from 'react'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


export default function ImageSlider(e){

    const img1Ref = useRef()
    const img2Ref = useRef()    
    const img3Ref = useRef()
    
    let buttonValue = '';
    let controlVar = 1

    function HandleClick(e){

        buttonValue = e.target.id

        if (buttonValue === 'forward' && controlVar == 1) {
            img2Ref.current.scrollIntoView({behavior:'smooth', block:'nearest'})
            controlVar = 2
        } else if (buttonValue === 'forward' && controlVar == 2) {
            img3Ref.current.scrollIntoView({behavior:'smooth', block:'nearest'})
            controlVar = 3
        } else if (buttonValue === 'forward' && controlVar == 3){
            img1Ref.current.scrollIntoView({behavior:'smooth', block:'nearest'})
            controlVar = 1
        } else if (buttonValue === 'backwards' && controlVar == 1){
            img3Ref.current.scrollIntoView({behavior:'smooth', block:'nearest'})
            controlVar = 3
        } else if (buttonValue === 'backwards' && controlVar == 2) {
            img1Ref.current.scrollIntoView({behavior:'smooth', block:'nearest'})
            controlVar = 1
        } else if (buttonValue === 'backwards' && controlVar == 3){
            img2Ref.current.scrollIntoView({behavior:'smooth', block:'nearest'})
            controlVar = 2
        }
    }
    

    return(
        <div className='imageSliderWrapper'>
            <div className="selectButtons"><button onClick={HandleClick} className='selectButton' id='backwards'><FaAngleLeft className='buttonIcons'/></button></div>
            <div className='productDisplayWrapper'>
                <div className='productDisplay' ref={img1Ref}><p>AERADORES</p><img src="src\assets\aerador-petalas.png" alt="" /></div>
                <div className='productDisplay' ref={img2Ref}><p>BOMBAS</p><img src="src\assets\bombas.webp" alt="" /></div>
                <div className='productDisplay' ref={img3Ref}><p>ACOPLAMENTOS</p><img src="src\assets\acoplador.webp" alt="" /></div>
            </div>
            <div className="selectButtons"><button onClick={HandleClick} className='selectButton' id='forward'><FaAngleRight className='buttonIcons'/></button></div>
        </div>
)



}