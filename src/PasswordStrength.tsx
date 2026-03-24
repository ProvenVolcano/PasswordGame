import React, {useEffect} from 'react';
import "./App";

interface PasswordStrengthProps {
    password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
    const checkStrength = () => {
        const lengthCriteria = password.length >= 8;
        const uppercaseCriteria = /[A-Z]/.test(password);
        const numberCriteria = /\d/.test(password);
        const specialCharCriteria = /[!@#$%^&*]/.test(password);

        const criteriaMet = [lengthCriteria, uppercaseCriteria, numberCriteria, specialCharCriteria];
        const strengthScore = criteriaMet.filter(Boolean).length;

        return {
            score: strengthScore,
            metCriteria: criteriaMet,
        };
    };

    const { score, metCriteria } = checkStrength();
    const strengthLabels = ['Žádná', 'Slabá', 'Střední', 'Silná', 'Velmi Silná']
    const strengthColors = ['grey', 'red', 'orange', 'green', '#2f77dd'];

    const displayIndex = Math.min(score, 4);

    useEffect(() => {
        document.title = `Síla hesla: ${strengthLabels[displayIndex]}`;
    }, [strengthLabels[displayIndex]]);

    return (
        <div>
            <div className="shadow rounded border m-3" style={{ backgroundColor: strengthColors[displayIndex], height: '10px', width: '100%' }} />
            <p>Síla hesla: {strengthLabels[displayIndex]}</p>
            <ul>
                <li style={{ textDecoration: metCriteria[0] ? 'line-through' : 'none' }}>
                    Minimálně 8 znaků
                </li>
                <li style={{ textDecoration: metCriteria[1] ? 'line-through' : 'none' }}>
                    Alespoň jedno velké písmeno
                </li>
                <li style={{ textDecoration: metCriteria[2] ? 'line-through' : 'none' }}>
                    Alespoň jedno číslo
                </li>
                <li style={{ textDecoration: metCriteria[3] ? 'line-through' : 'none' }}>
                    Alespoň jeden speciální znak (!@#$%^&*)
                </li>
            </ul>
        </div>
    );
};

export default PasswordStrength;