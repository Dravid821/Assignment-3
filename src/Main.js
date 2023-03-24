import React from 'react'
import { useEffect } from 'react'
import carddata from './Services/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';

import PersonalCard from './Components/CardImage';

export default function Main() {
  const items = useSelector((state) => state.datareducer.user)
  console.log("item", items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(carddata());
  }, [dispatch]);
  return (
    <>
      <div className='contaner-fluid'>
        <div className='row text-center d-flex justify-content-center '>
      
            {
              items ? items.map(item => {
                return (
                  <PersonalCard
                    key={item.id} data={item}
                  />
                )
              }) : null
            }
        </div>
      </div>
    </>
  )
}
