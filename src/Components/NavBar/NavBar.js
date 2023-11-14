import './Navbar.css'
import FavIcon from './../../Icons/FavIcon.png'

import SearchNavBtn from './components/SearchBtn'

function Navbar(){

    function redirection(value){
        switch(value){
            case 'Icon':

            break
            case 'Account':

            break
            default: 

            break
        }
        
    }
    return (
        <nav>
            <div className='Icon'><button onClick={()=> redirection('Icon')}><img alt='Logo Icon' src={FavIcon}/> <h3>Save<span>M</span>ovie</h3></button> </div>
            <SearchNavBtn/>
            <div className='Account'></div>
        </nav>
    )
}

export default Navbar;