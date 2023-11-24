
// import css
import './Profile.css';

// import components
import Navbar from './../../Components/NavBar/NavBar'

// import icons
import { BiPackage } from 'react-icons/bi';


function ProfilePage() {
    return (
        <main className='profilePage'>
            <Navbar/>
            <h2><BiPackage /> Profile is still being created, come back later, click <a href={false} onClick={()=> window.history.back()}>HERE</a> to return </h2>
        </main>
    );
  }
  
  export default ProfilePage;