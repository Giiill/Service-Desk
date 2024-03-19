import { Application } from '@/app/types/applications'
import React from 'react'
import "./styles.css"

interface ApplicationsProps {
    applications: Application[]
}

const Applications:React.FC<ApplicationsProps> = ({applications}) => {

  return (
    <tbody>
        {applications.map((app) => (
            <tr key = {app.id}> 
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>
                    <button className = {(() => {
                        if(app.status === "Открыта") {
                            return "app-status";
                        } else if (app.status === "Закрыта") {
                            return "app-status__done";
                        } else {
                            return "app-status__inwork";
                        }
                    })()}
                    >{app.status}</button>
                </td>
                <td>{app.executor}</td>
                <td></td>
            </tr>
            
        ))}
    </tbody>
  )
}

export default Applications