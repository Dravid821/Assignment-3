import React from 'react'
import { useEffect } from 'react'
import carddata from './Services/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';

import PersonalCard from './Components/PersonalCard';

export default function Main() {
  const items = useSelector((state) => state.datareducer.user)
  console.log("item", items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(carddata());
  }, [dispatch]);
  return (
    <>
      <div className='container'>
        <div className='row text-center'>
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


// return (
//   <PersonalCard
//     key={item.id}
//     id={item.id}
//     item={item}
//     name={item.name}
//     email={item.email}
//     phone={item.phone}
//     website={item.website}
//     username={item.username}
//   />
// )