import React from 'react';
import { Col, Row, Card, CardBody, CardSubtitle, CardTitle, CardText, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const NewCard = ({ task }) => {
    
    return (
        <Row className="ms-auto"> 
                <Col className='m-4' xs='9'> 
                    <Card color='light'>
                    <CardBody>
                        <CardTitle tag='h5' className='float-left'>Task:</CardTitle>
                        <CardSubtitle>Due Date:</CardSubtitle>
                        <Dropdown></Dropdown>
                        <CardText className='ml-0 '>Description</CardText>
                    </CardBody>
                    </Card>
                </Col>
        </Row>
    )
};

export default NewCard;

/* <Col>
            {TASKS.map((task) => (
        <Card color='light'>
            <CardBody>
                    <CardTitle tag='h5'>{task.name}</CardTitle>
                    <CardSubtitle className='mb-2 text-muted' tag='h6'>{task.dueDate}</CardSubtitle>
                    <CardText className='ml-0 bg-primary'>{task.status}<CardText>
                
            </CardBody>
        </Card>
        ))};   
        </Col>
         */