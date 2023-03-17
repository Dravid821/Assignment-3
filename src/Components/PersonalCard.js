import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from 'reactstrap'
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";

const PersonalCard = (props) => {
  const { name, email, website, phone, username, id } = props.data;
  const [like, setlike] = useState(false)


  return (
    <Card
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
      />
      <CardBody>
        <CardTitle tag="h4">
          <div className='text-start'>
            {name}
          </div>
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted">
          <div className='text-start'>
            <li><FiMail/>{email}</li>
            <li><FiPhoneCall/>{phone}</li>
            <li><IoEarthOutline/>{website}</li>
          </div>
        </CardSubtitle>
      </CardBody>
      <CardFooter className='d-flex justify-content-around'>
        <Button
          onClick={() => setlike((prevState) => !prevState)}>
          <AiFillHeart/>
        </Button>
        <Button><AiFillEdit /></Button>
        <Button><AiFillDelete /></Button>
      </CardFooter>
    </Card>
  )
}

export default PersonalCard
