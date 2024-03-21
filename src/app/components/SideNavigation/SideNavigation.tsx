import './styles.css';
import Image from 'next/image';
import Logo from'./images/Logo.svg'
import ApplicationImage from'./images/Application.svg'
import EmployeeImage from './images/Employees.svg'
import SettingsImage from './images/Settings.svg'
import CustomLink from './CustomLink/CustomLink';

const SideNavigation = () => {
    return (
        <div className="side-navigation">
        <div className='btn-div'>
        <Image
        src={Logo}
        alt="My Image"
        className='logo-image'
        />
        <CustomLink
        href="/"
        src={ApplicationImage}
        alt="Application Image"
        className="application-div"
      />
      <CustomLink
        href="/"
        src={EmployeeImage}
        alt="Employee Image"
        className="employee-div"
      />
      <CustomLink
        href="/"
        src={SettingsImage}
        alt="Settings Image"
        className="settings-div"
      />
            </div>
        </div>
    )
}

export { SideNavigation };
