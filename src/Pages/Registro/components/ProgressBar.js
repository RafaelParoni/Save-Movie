import './../Registro.css';


function ProgressBar() {

    var Language = {
        creation: 'Creation',
        customization: 'Customization',
        conclude: 'Conclude'
   
    }
    
    function setLanguage(){
        if(window.location.pathname.includes("/pt/")){
            Language = {
                creation: 'Inicio',
                customization: 'Personalização',
                conclude: 'Conclusão'
               
            }
        }
    }
    setLanguage()

    return (
        <div id='ProgressBar' className='FormStats'>
            <h4>Progress:</h4>
            <div className='FormStatsProgess'>
                <div id='FormClicleOne' style={{backgroundColor: '#f14a2c'}}  className='FormCircle'> <span>{Language.creation}</span> </div>
                <div className='FormLine'> <div id='ProgressBarOne' style={{width: '0%'}} /> </div>
                <div id='FormClicleTwo'  className='FormCircle' > <span>{Language.customization}</span> </div>
                <div className='FormLine'> <div id='ProgressBarTwo' style={{width: '0%'}} /> </div>
                <div id='FormClicleThree'  className='FormCircle' > <span>{Language.conclude}</span> </div>
            </div>
        </div>
    );
  }
  
export default ProgressBar;