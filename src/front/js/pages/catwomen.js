import React, { useContext } from "react";
import WomenProducts from "../component/womenProducts";
import { Context } from "../store/appContext";

export const CatWomen = () => {
  const { store, actions } = useContext(Context);
  return (
      <div className="row container mx-auto">
         <h1 className='text-center py-2'>WOMEN CLOTHES</h1>
          {store.catWomen.map((item, i) => {
            return (
        <div className="col-sm-6 col-md-4 col-lg-4 py-4 d-inline-flex" >
              <WomenProducts
                key={i}
                title={item.title}
                price={item.price}
                image={item.image}
              />
              </div>
            );
          })}
        </div>
      
  );
};
export default CatWomen;
