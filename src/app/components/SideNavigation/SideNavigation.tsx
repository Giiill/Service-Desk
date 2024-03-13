import './styles.css';
import Image from 'next/image';
import Logo from'./images/Логотип.png'
import ApplicationImage from'./images/ЗаявкиСВГ.png'
import EmployeeImage from './images/Сотрудники.png'
import SettingsImage from './images/Настройки.png'

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
            className='logo-image'
            />
            <button className='application-btn'>Заявки</button>
        </div>

        <div className='employee-div'>
            <Image
            src={EmployeeImage}
            alt="My Image"
            className='employee-image'
            />
            <button className='employee-btn'>Сотрудники</button>
        </div>

        <div className='settings-div'>
            <Image
            src={SettingsImage}
            alt="My Image"
            className='setting-image'
            />
            <button className='setting-btn'>Настройки</button>
        </div>

            </div>
        </div>
    )
}

export { SideNavigation };
