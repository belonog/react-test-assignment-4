import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';


const TempleteSelector = props => (
    <Row>
        <Col sm={4}>
            <Form.Group>
                <Form.Label>Choose a template</Form.Label>
                <Form.Control
                    as="select"
                    disabled={!props.templates.list || !props.templates.list.length}
                    value={props.templates.selected}
                    onChange={e => props.setTemplate(+e.target.value)}>
                    {props.templates.list.map(({ id }) =>
                        <option key={id}>{id}</option>
                    )}
                </Form.Control>
            </Form.Group>
        </Col>
    </Row>
);

export default TempleteSelector;
