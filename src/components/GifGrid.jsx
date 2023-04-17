
import { Gifitem } from "./Gifitem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category}) => {

  const  { images, isLoading}  = useFetchGifs(category);

  console.log({isLoading});





  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>) 
        }
        
        <div className="card-grid">
        {
          images.map((img) => (
            
              <Gifitem 

                  key={img.id}
                  // title={img.title}
                  // url={img.url}
                  {...img}
              />
            
          ))
        }

        </div>
    </>
  );
}
