import { useState } from "react";
import { Addcategory, GifGrid } from "./components";
 

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch']);

// console.log(categories);

const onAddcategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([newCategory ,...categories]);
}

  return (
    <>
        <h1>GifExpertApp</h1>

        <Addcategory 
            onNewCategory = {(e) => onAddcategory(e)}
        />

        
        {
            categories.map((category) =>(
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                    ))
        }
    
    </>
  )
}
