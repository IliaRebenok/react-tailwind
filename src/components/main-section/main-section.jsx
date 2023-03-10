import React from 'react'
import {ReactComponent as Databiz} from '../../images/client-databiz.svg'
import {ReactComponent as Audiophile} from '../../images/client-audiophile.svg'
import {ReactComponent as Meet} from '../../images/client-meet.svg'
import {ReactComponent as Maker} from '../../images/client-maker.svg'
import MainImage from '../../images/image-hero-desktop.png'
import MobileMainImage from '../../images/image-hero-mobile.png'
import Button from '../button'

const MainSection = () => {
    return (
        <section className='w-full flex-col xl:flex-row flex mt-6 h-full justify-between'>
            <div className='relative order-2 xl:order-1 xl:w-2/4 text-center xl:text-left mt-6 xl:mt-60'>
                <h1 className='text-3xl xl:text-8xl font-black  xl:whitespace-pre-line'>
                    {`Make\n remote work`}
                </h1>
                <p className='text-medium-gray whitespace-pre-line text-lg my-12'>
                    {`But I must explain to you how all this mistaken idea of denouncing\n pleasure and praising pain was born and I will give you\n a complete account of the system, and expound the actual`}
                </p>
                <Button isFilled={true}>Learn More</Button> 
                <div className='flex justify-around xl:absolute bottom-2 w-full mt-20 '>
                    <Databiz />
                    <Audiophile />
                    <Meet />
                    <Maker />
                </div>
            </div>            
            <div className='hidden xl:flex order-2 w-2/4 mt-20'>
                <img src={ MainImage } alt='men'/>
            </div>
            <div className='flex w-f xl:hidden mt-20 justify-center mb-8 order-1'>
                <img src={ MobileMainImage } alt='men'/>
            </div>
        </section>
    )
}

export default MainSection