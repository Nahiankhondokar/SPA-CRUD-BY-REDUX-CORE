import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setGender, setName, setSkill, studentActions } from '../../redux/actions/studentActions';



const Student = () => {


    const { student_input } = useSelector(state => state.allStudents);
    const { name } = useSelector(state => state.name);
    const { gender } = useSelector(state => state.gender);
    const { skill } = useSelector(state => state.skill);
    const dispatch = useDispatch();


    // data submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/students', {
            name : name,
            gender : gender,
            skills  : skill
        }).then(res => {

            dispatch(setName(''));
            dispatch(setGender(''));
            dispatch(setSkill(''));

        });


    }


    // student delete
    const handleStuDelete = (id) => {

        axios.delete('http://localhost:8000/students/' + id).then();

    }


    // Get all data
    useEffect(() => {

        axios.get('http://localhost:8000/students').then(res => {

            dispatch(studentActions(res.data));

        })

    });



  return (
    <>
        <Container>
            <Row className='justify-content-center my-5'>
                <Col md={ 4 }>
                    <Card>
                        <Card.Header>
                            <h2>Student Account</h2>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={ handleFormSubmit }>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control value={ name } onChange={ e => dispatch(setName(e.target.value)) }></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control value={ gender } onChange={ e => dispatch(setGender(e.target.value)) }></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Skill</Form.Label>
                                    <Form.Control value={ skill } onChange={ e => dispatch(setSkill(e.target.value)) }></Form.Control>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Button variant='info' type='submit'>Submit</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <h2></h2>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={ 8 }>
                    <Card>
                        <Card.Header>
                            <h3>All Student</h3>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Skill</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        student_input.map((data, index) => 
                                        
                                            <tr>
                                                <td>{ index + 1 }</td>
                                                <td>{ data.name }</td>
                                                <td>{ data.gender }</td>
                                                <td>{ data.skills }</td>
                                                <td>
                                                <Button variant='info' className="btn-sm">View </Button>&nbsp;
                                                <Button variant='warning' className="btn-sm">Edit</Button>&nbsp;
                                                <Button onClick={ () => handleStuDelete(data.id) } variant='danger' className="btn-sm">Delete</Button>
                                                </td>
                                            </tr>
                                        
                                        )
                                    }
                                
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
   </>
  )
};

export default Student;


