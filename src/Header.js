 import picture from './airbnb.png' ; 
 import {MagnifyingGlassIcon,
          Bars4Icon,
          HomeIcon,
          GlobeAltIcon,
          UserIcon,

} from '@heroicons/react/24/solid';

    function Header() {
        return (
          <header className='nav'>
          {/* This is the left hand section of the Header page*/ }
          
           <div className='nav1' > 
           <img src={picture}  className='img1'/>
    
           </div>


           
          {/* This is the middle  section of the  headerpage*/ }
          <div className='nav2'>
          
          <input type='text' className='searchbar' placeholder='enter your search' />
          <MagnifyingGlassIcon className='searchicon'/>
          </div>



        {/* This is the right hand  section of the  headerpage*/ }
          
             <div className='nav3'>
                <p className='become'>Become a host</p>
                <GlobeAltIcon   className='globe'/>
              
                      <div className='section'>
                      <Bars4Icon className='barsicon' />
                      <UserIcon className='usericon'  />
                      </div>
                       
            </div>   
               
           



        
          
          
</header>

        );
    }

    export default Header