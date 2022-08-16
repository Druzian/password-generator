import "./styles.css";

const CopyPasswordButton = ({password}) =>{
    const copyPasswordToClipboard = () =>{
        navigator.clipboard.writeText(password);
    }


    return <div className="actions">
         <button
            className="copy-password-to-clipboard"
            onClick={copyPasswordToClipboard}
            
            
        >Copiar para a área de tranferência</button>
        </div>
}

export default CopyPasswordButton;