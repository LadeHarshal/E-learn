
import React from 'react';
import {Container} from 'reactstrap';

const navLinks =[
    {
        display:'Home',
        url:'#'
    },
    {
        display:'Courses',
        url:'#'
    },
    {
        display:'About Us',
        url:'#'
    }
    
]

const Header = () => {
  return (
    <section>
        <Container>
            <div className='navigation'>
            <h2><i class="ri-pantone-line"></i>Learners.</h2>
            </div>

            <div className='nav'>
                <div className='nav__menu'>
                <ul className='nav__list'>
                   {
                    navLinks.map((item,index)=>(
                        <li key={index} className='nav__items'>
                        <a href={item.url}>{item.display}</a>
                    </li>
                    ))
                   }
                </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Header;
