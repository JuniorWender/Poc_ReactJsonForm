function CustomSelect({inputList}) {

    function createComponent(){
        return(
            <select className="w-75">
                {inputList.map((input) =>  <option value={input.value}> {input.name} </option> )}
            </select>
        )
    }

    return (
        <div>
            {createComponent()}
        </div>
    );
}

export default CustomSelect;