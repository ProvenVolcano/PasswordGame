import React, {useEffect, useState} from 'react';
import "./App.css";
import "./index.css"

interface PasswordInputProps {
    setPassword: (password: string) => void;
    setTime: (time: number) => void;
}

function PasswordInput(props: PasswordInputProps) {
    const [password, setLocalPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [check, setCheck] = useState(false);
    const [prevTime, setPrevTime] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setLocalPassword(newPassword);
        props.setPassword(newPassword);

        if (check) {
            setTotalTime(totalTime + (performance.now() - prevTime));
        }
        setPrevTime(performance.now());
        setCheck(true);
        props.setTime(totalTime);
    };

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setLocalPassword(prevPassword => {
                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {
                    return prevPassword + "😼";
                } else {
                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });
        },120000);
        props.setPassword(password);
        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <div >
            <input
                className="form-control m-3"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handleChange}
                placeholder="Zadejte heslo"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Skrýt' : 'Zobrazit'}
            </button>
        </div>
    );
}

export default PasswordInput;