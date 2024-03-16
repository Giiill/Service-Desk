import './styles.css';
import Image from 'next/image';
import Logo from'./images/Logo.svg'
import ApplicationImage from'./images/Application.svg'
import EmployeeImage from './images/Employees.svg'
import SettingsImage from './images/Settings.svg'

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
            <Image
            src={ApplicationImage}
            alt="My Image"
            className='application-image'
            />
        </div>

        <div className='employee-div'>
            <Image
            src={EmployeeImage}
            alt="My Image"
            className='employee-image'
            />
        </div>

        <div className='settings-div'>
            <Image
            src={SettingsImage}
            alt="My Image"
            className='setting-image'
            />
        </div>

            </div>
        </div>
    )
}

export { SideNavigation };
