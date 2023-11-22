import './../Registro.css';


function ProgressBar() {

    return (
        <div id='ProgressBar' className='FormStats'>
            <h4>Progress:</h4>
            <div className='FormStatsProgess'>
                <div id='FormClicleOne' style={{backgroundColor: '#f14a2c'}}  className='FormCircle'> <span>Creation</span> </div>
                <div className='FormLine'> <div id='ProgressBarOne' style={{width: '0%'}} /> </div>
                <div id='FormClicleTwo'  className='FormCircle' > <span>Customization</span> </div>
                <div className='FormLine'> <div id='ProgressBarTwo' style={{width: '0%'}} /> </div>
                <div id='FormClicleThree'  className='FormCircle' > <span>conclude</span> </div>
            </div>
        </div>
    );
  }
  
export default ProgressBar;