import { useState } from "react";


export const Addcategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setinputValue('');

    }

  return (
    <form onSubmit={(e) => onSubmit(e)}>

    <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
        />

    </form>    
  )
}
