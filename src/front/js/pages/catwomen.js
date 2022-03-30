import React, {useContext} from 'react'
import WomenProducts from '../component/womenProducts'
import { Context } from '../store/appContext'

export const CatWomen = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-6'>
            {store.catWomen.map((item,i)=>{
            return(<WomenProducts key={i} title={item.title} price={item.price} image={item.image}/>)})}</div>
        </div>
    </div>
    )
}
 export default CatWomen;