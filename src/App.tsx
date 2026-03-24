import './App.css'
import PasswordInput from "./PasswordInput.tsx";
import PasswordStrength from "./PasswordStrength.tsx";
import CharacterSequenceValidator from "./CharacterSequenceValidator.tsx";
import PasswordTimeValidator from "./PasswordTimeValidator.tsx";
import CountryFlagValidator from "./CountryFlagValidator.tsx";
import {useState} from "react";

function App() {
    const [password, setPassword] = useState('');
    const [time, setTime] = useState(0);

  return (
    <>
      <div>
          <CountryFlagValidator password={password}/>
          <h1>Password Game</h1>
          <PasswordInput setPassword={setPassword} setTime={setTime} />
          <PasswordStrength password={password} />
          <CharacterSequenceValidator password={password} />
          <PasswordTimeValidator password={password} time={time} />
      </div>
    </>
  )
}

export default App
