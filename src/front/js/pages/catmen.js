import React, {useContext} from 'react'
import  MenProducts from '../component/menProducts'
import { Context } from '../store/appContext'

export const CatMen = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className='container'>
        <div className='row  d-flex justify-content-center'>
          <div className='col-md'>
            {store.catMen.map((item,i)=>{
            return(<MenProducts key={i} title={item.title} price={item.price} image={item.image}/>)})}</div>
        </div>
    </div>
  )
}

export default CatMen;