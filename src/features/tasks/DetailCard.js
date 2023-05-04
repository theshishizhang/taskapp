import React from 'react';
import { Col, Row, Card, CardBody, CardSubtitle, CardTitle, CardText, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DetailCard = ({ task }) => {
    const { id, name, dueDate, status, description} = task;

    return (
        <Row className="ms-auto"> 
                <Col className='m-4' xs='9' key={id}> 
                    <Card color='light'>
                    <CardBody>
                        <CardTitle tag='h5' className='float-left'>Task: {name}</CardTitle>
                        <CardSubtitle>Due Date: {dueDate}</CardSubtitle>
                        <Dropdown>{status}</Dropdown>
                        <CardText className='ml-0 '>{description}</CardText>
                    </CardBody>
                    </Card>
                </Col>
        </Row>
    )
};

export default DetailCard;

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