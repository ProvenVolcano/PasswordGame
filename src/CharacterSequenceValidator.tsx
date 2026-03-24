interface CharSequenceProps {
    password: string;
}

function CharacterSequenceValidator(props: CharSequenceProps) {
    let seqCount = 0;
    const check = () => {
        for (let i = 0; i < props.password.length - 3; i++) {
            if (/[A-Z][a-z][0-9][!@#$%^&*]/.test(props.password.substring(i, i + 4))) {
                seqCount++;
            }
        }
    }

    check();
    const result = () => {
        if (seqCount > 0) {
            return "Obsahuje sekvenci";
        } else return "Neobsahuje sekvenci (např.: Ab1@)";
    }

    return (
        <>
            <p>{ result() }</p>
            <p>Počet sekvencí: { seqCount }</p>
        </>
    )
}

export default CharacterSequenceValidator;