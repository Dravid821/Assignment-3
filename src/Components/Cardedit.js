import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { fetchedit } from "../Services/Actions/actions";
import {
  Form,
  Label,
  Input,
  FormGroup,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "reactstrap";
import { useDispatch } from "react-redux";
function Cardedit(props) {
  const { name, email, website, phone, username, id } = props.data;
  const dispatch = useDispatch();
  const [carddata, setcarddata] = useState({
    name,
    email,
    website,
    phone,
    username,
    id,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchedit(carddata));
  };
  const handlechange = (obj) => {
    setcarddata({ ...carddata, ...obj });
  };

  return (
    <Modal {...props}>
      <ModalHeader closeButton>Edit Page</ModalHeader>
      <ModalBody>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Name
            </Label>
            <Input
              id="exampleEmail"
              defaultValue={name}
              name="name"
              placeholder="with a placeholder"
              onChange={(e) => handlechange({ name: e.target.value })}
              type="name"
            />
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              email
            </Label>
            <Input
              id="exampleEmail"
              defaultValue={email}
              name="email"
              placeholder="with a placeholder"
              onChange={(e) => handlechange({ email: e.target.value })}
              type="email"
            />
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              phone
            </Label>

            <Input
              id="exampleEmail"
              defaultValue={phone}
              name="phone"
              placeholder="with a placeholder"
              onChange={(e) => handlechange({ phone: e.target.value })}
              type="phone"
            />
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              website
            </Label>
            <Input
              id="exampleEmail"
              defaultValue={website}
              name="website"
              placeholder="with a placeholder"
              onChange={(e) => handlechange({ website: e.target.value })}
              type="website"
            />
          </FormGroup>
          <ModalFooter>
            <Button type="button" color="primary" onClick={props.onHide}>
              Cancel
            </Button>
            <Button type="submit" color="secondary" onClick={props.onHide}>
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
}

export default Cardedit;
