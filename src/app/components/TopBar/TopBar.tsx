import './styles.css';
import Image from 'next/image';
import MainImage from './images/main-picture.jpg'
import Link from 'next/link';
import LoupeImage from './images/loupe.svg'

const TopBar = () => {
    return (
        <div className="top-bar-main">
            <div className="top-bar-searching">
            <input type="text" className='top-bar-input'/>
            <Image
            src={LoupeImage}
            alt='Searching'
            width={30}
            height={25}
            className='loupe-input'
            />
            </div>
                <Link href={'/'}>
            <div className="user-info-div">
                <div className="name-surname-div">
                <h1>Name</h1>
                <h1>Surname</h1>
                </div>
                <Image
                src={MainImage}
                alt="My Image"
                className='main-image'
                width={50}
                height={45}
            />
            </div>
            </Link>
        </div>
    )
};

export {TopBar}