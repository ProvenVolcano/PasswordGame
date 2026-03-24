interface PasswordTimeProps {
    password: string;
    time: number;
}

function PasswordTimeValidator(props: PasswordTimeProps) {

    if (props.time == 0) return (<></>);

    const valid = props.time > 5000;

    return (
        <>
            <p>{ valid ? "Zadáno v pořádku" : "Zadáno moc rychle"}</p>
        </>
    )
}

export default PasswordTimeValidator;