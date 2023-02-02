import React from 'react'
import {ReactComponent as LogoIcon} from '../../images/logo.svg';
import Button from '../button';
import NavItem from '../nav-item';
import NavMenu from '../nav-menu';
import { COMPANY, FEATURES } from './constants';

const Header = () => {
    return (
        <header className='flex w-full items-center'>
            <LogoIcon />
            <nav className='flex space-x-6 ml-8 items-center'>
                <NavItem text='Feature'>
                    <NavMenu items={FEATURES}/>
                </NavItem>
                <NavItem text='Company'>
                <NavMenu items={COMPANY}/>
                </NavItem>
                <NavItem text='Careers'/>
                <NavItem text='About'/>
            </nav>
            <div className='ml-auto flex space-x-5'>
                <Button> Log in </Button>
                <Button hasBorder={true} > Register </Button>
            </div>
        </header>
    )
}

export default Header