import './Projects.scss'


export default function Projects(){

    return(
        <div className='projectsContainer'>
            <div className='projectItem'>
                <h3>Tratamento Primário Industrial</h3>
                <img src="src\assets\logoSultec.png" alt="" />
            </div>
            <div className='projectItem'>
                <h3>Tratamento Primário Sanitário</h3>
                <img src="src\assets\logoSultec.png" alt="" />
            </div>
            <div className='projectItem'>
                <h3>Tratamento Secundário e Terciário </h3>
                <img src="src\assets\logoSultec.png" alt="" />
                </div>
            <div className='projectItem'>
                <h3>ETE - Esgoto Doméstico</h3>
                <img src="src\assets\logoSultec.png" alt="" />
                </div>
        </div>
    )
}