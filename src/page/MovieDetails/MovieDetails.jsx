import { getProductById } from "apiService/apiService";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    console.log("💚 ~ id:", id)
    useEffect(() => {
        const product = getProductById(id)
            .then(refs => {
                console.log(refs.data)
                setMovie(refs.data)
            })
        .catch(er => console.log(er));
        console.log("🚀 ~ product:", product)
    }, [])
    
  return (
      <main>
          <NavLink to='/'>{`<-`}go Back</NavLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          {/* Product - {product.name} - {id} */}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};