import React from 'react'
import type { Metadata } from "next";
import { getApplications } from '@/app/api';
import Applications from './Applications/Applications';
import "./styles.css";


export const metadata: Metadata = {
  title: "ApplicationsList | Service Desk"
};

const ApplicationsList = async() => {

    const applications = await getApplications();
    console.log(applications)
    return (
        <div>
            <div className='container__applications'>
                <button className="styled-button">
                    Создать заявку
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Статус</th>
                    <th>Исполнитель</th>
                    <th></th>
                    </tr>
                </thead>

                    <Applications applications={applications} />
                  
            </table>
        </div>
    
    )
}

export default ApplicationsList