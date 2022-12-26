import './ImageSlider.scss'
import {useRef} from 'react'


export default function ImageSlider(){

    const img1Ref = useRef()
    const img2Ref = useRef()    
    const img3Ref = useRef()



    return(
        <>
            <div className='productDisplay' ref={img1Ref}><img src="src\assets\logoSultec.png" alt="" /></div>
            <div className='productDisplay' ref={img2Ref}><img src="src\assets\logoSultec.png" alt="" /></div>
            <div className='productDisplay' ref={img3Ref}><img src="src\assets\logoSultec.png" alt="" /></div>
        </>
)}

export function ButtonSlider(e){

    function HandleChange(e){
        console.log(e.target.value)
    }

    return(
        <>
            <input onChange={HandleChange} value='selector1' type='radio' name='isSelect' className='selectButton'></input>
            <input onChange={HandleChange} value='selector2' type='radio' name='isSelect' className='selectButton'></input>
            <input onChange={HandleChange} value='selector3' type='radio' name='isSelect' className='selectButton'></input>
        </>
    )
}