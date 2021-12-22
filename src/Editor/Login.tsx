import * as React from 'react';
import { UserObj } from "../Utils/UserObj";
import { useNavigate } from 'react-router-dom';

export type LoginProp = {
    user: UserObj,
   
}

const Login: React.FC<LoginProp> = ({ user }) => {

    const [username, setUsername] = React.useState('');
    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUsername(event.target.value);
    }

    const [password, setPassword] = React.useState('');
    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    }

        const handleLogin = () => {
            if (username === "Ezog" && password === "Music") {

                navigate("/forms");
            }
        }

        let navigate = useNavigate();






        return (
            <section className='loginPopup'>
                <input placeholder={'Usuario'} type={'text'} onChange={handleUsernameChange} />
                <input placeholder={'Contraseña'} type={"password"} onChange={handlePasswordChange} />
                <button className="button" onClick={handleLogin}>Ingresar</button>
            </section>
        );
    }
    export default Login;