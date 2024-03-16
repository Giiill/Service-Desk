import './styles.css';
import Image from 'next/image';
import Logo from'./images/Logo.svg'
import ApplicationImage from'./images/Application.svg'
import EmployeeImage from './images/Employees.svg'
import SettingsImage from './images/Settings.svg'
import Link from 'next/link';

const SideNavigation = () => {
    return (
        <div className="side-navigation">
            <div className='btn-div'>
            <Image
            src={Logo}
            alt="My Image"
            className='logo-image'
            />
        <div className='application-div'>
            <Link href={'/'}>
            <Image
            src={ApplicationImage}
            alt="My Image"
            className='application-image'
            />
            </Link>
        </div>

        <div className='employee-div'>
            <Link href={'/'}>
            <Image
            src={EmployeeImage}
            alt="My Image"
            className='employee-image'
            />
            </Link>
        </div>

        <div className='settings-div'>
            <Link href={'/'}>
            <Image
            src={SettingsImage}
            alt="My Image"
            className='setting-image'
            />
            </Link>
        </div>

            </div>
        </div>
    )
}

export { SideNavigation };
