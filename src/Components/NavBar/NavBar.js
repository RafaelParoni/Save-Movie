import './Navbar.css'
import FavIcon from './../../Icons/FavIcon.png'

import SearchNavBtn from './components/SearchBtn'
import AccountNavbar from './components/UsersBtns'

function Navbar(){

    function redirection(){
        window.location = '/'
    }
    
    return (
        <nav>
            <div className='Icon'><button onClick={()=> redirection('Icon')}><img alt='Logo Icon' src={FavIcon}/> <h3>Save<span>M</span>ovie</h3></button> </div>
            <SearchNavBtn/>
            <AccountNavbar/>
        </nav>
    )
}

export default Navbar;