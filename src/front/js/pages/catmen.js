import React, {useContext} from 'react'
import  MenProducts from '../component/menProducts'
import { Context } from '../store/appContext'

export const CatMen = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="row container mx-auto">
      <h1 className='text-center py-2'>MEN CLOTHES</h1>
          {store.catMen.map((item, i) => {
            return (
        <div className="col-sm-6 col-md-4 col-lg-3 py-4 d-inline-flex" >
              <MenProducts
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

export default CatMen;