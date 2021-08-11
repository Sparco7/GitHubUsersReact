import "./InputForm.css";

const InputForm = ({handleUpdateState,inputUser,addUser}) => {
    return (
        <div className="input-container">
            <input onChange={handleUpdateState} value={inputUser} />
            <button onClick={addUser}>Enter</button>
        </div>
    )
}

export default InputForm