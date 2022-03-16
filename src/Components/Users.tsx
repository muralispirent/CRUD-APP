import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAction, deleteUserAction, updateUserAction } from '../actions';

export const Users = () => {
    const [user, setUser] = useState({ fname: "", lname: "" });
    const [isEdit, setisEdit] = useState(false)
    const dispatch = useDispatch();
    const users = useSelector((state: any) => state.users);
    
    const hanldeSubmit = () => {
        dispatch(addUserAction(user));
        handleClear()
    }

    const handleEdit = (user: any) => {
        setisEdit(!isEdit)
        setUser(user)
    }

    const handleDelete = (user: any) => {
        dispatch(deleteUserAction(user))
    }

    const handleClear = () => {
        setUser({ fname: "", lname: "" })
    }

    const handleUpdate = () => {
        dispatch(updateUserAction(user))
        handleClear()
        setisEdit(!isEdit)

    }

    return (
        <div>
            <Container>
                <Row>
                    <Col> <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name"
                                value={user.fname}
                                onChange={(e) => {
                                    let newUser = { ...user }
                                    newUser.fname = e.target.value
                                    setUser(newUser)
                                }} />

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name"
                                value={user.lname}
                                onChange={(e) => {
                                    let newUser = { ...user }
                                    newUser.lname = e.target.value
                                    setUser(newUser)
                                }} />

                        </Form.Group>
                        {isEdit ? <Button variant="primary" type="button" onClick={handleUpdate}>
                            Update
                        </Button> : <Button variant="primary" type="button" onClick={hanldeSubmit}>
                            Submit
                        </Button>}

                    </Form>
                    </Col>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users && users.map((user: any, i: any) => <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>
                                            <Button variant="warning" type="button" onClick={() => { handleEdit(user) }}>
                                                Edit
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" type="button" onClick={() => { handleDelete(user) }}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
