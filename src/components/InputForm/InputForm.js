import "./InputForm.css";

const InputForm = ({handleUpdateState,inputUser,addUser}) => {
    return (
        <div className="input-container">
            <input onChange={handleUpdateState} value={inputUser} placeholder="Github Nickname" />
            <button onClick={addUser}>Add</button>
        </div>
    )
}

export default InputForm