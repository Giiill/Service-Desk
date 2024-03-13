import { cache } from "react";
import { Application } from "./types/applications"

const baseUrl = "http://localhost:3001/applications"

export const getApplications = async(): Promise<Application[]> => {
    try {
        const res = await fetch(`${baseUrl}`, {cache: 'no-store'});
        if (!res.ok) {
            throw new Error('Failed to fetch applications');
        }
        const applications = await res.json();
        return applications;
    } catch (error) {
        console.error('Error fetching applications:', error);
        throw error; // Пробросим ошибку наверх для обработки в компоненте
    }
}