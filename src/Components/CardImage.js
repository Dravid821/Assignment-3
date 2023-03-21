import React, { useState } from "react";
import "../scss/cardimage.scss";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button,
} from "reactstrap";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";
import { Dispatch } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchdelete } from "../Services/Actions/actions";
import Cardedit from "./Cardedit";

const PersonalCard = (props) => {
  const { name, email, website, phone, username, id } = props.data;
  const [modal, setModal] = useState(false);
  const [like, setlike] = useState(false);
  const dispatch = useDispatch();

  const handleForm = () => {
    setModal(true);
  };

  return (
    <>
      <Cardedit show={modal} onHide={() => setModal(false)} data={props.data} />
      <Card
        className="card"
        style={{
          width: "20rem",
        }}
      >
        <img
          className="img-fluid"
          alt="Sample"
          src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options%5Bmood%5D%5B%5D=happy`}
        />
        <CardBody className="cbd">
          <CardTitle tag="h4">
            <div className="text-start">{name}</div>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            <div className="text-start">
              <li>
                <FiMail />
                <span className="fimail">{email}</span>
              </li>
              <li>
                <FiPhoneCall />
                <span className="fimail">{phone}</span>
              </li>
              <li>
                <IoEarthOutline />
                <span className="fimail">{website}</span>
              </li>
            </div>
          </CardSubtitle>
        </CardBody>
        <CardFooter className="d-flex justify-content-around foot">
          <button
            className="btn text-danger"
            onClick={() => setlike((prevState) => !prevState)}
          >
            {like ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <button className="btn" onClick={handleForm}>
            <AiFillEdit />
          </button>
          <button className="btn" onClick={() => dispatch(fetchdelete(id))}>
            <AiFillDelete />
          </button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PersonalCard;
