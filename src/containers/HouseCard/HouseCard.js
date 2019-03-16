import React from 'react';
import { Col, Card } from 'react-bootstrap';

import './HouseCard.scss';

import HouseImage from './components/HouseImage';
import HouseAddress from './components/HouseAddress';
import HousePrice from './components/HousePrice';
import HouseArea from './components/HouseArea';

const HouseCard = ({house, template}) => {
    const renderElement = declaration => {
        if (!house[declaration.field]) {
            return null;
        }
        let Component;
        switch (declaration.component) {
            case 'IMAGE':
                Component = HouseImage;
                break;
            case 'ADDRESS':
                Component = HouseAddress;
                break;
            case 'PRICE':
                Component = HousePrice;
                break;
            case 'AREA':
                Component = HouseArea;
                break;
            default:
                return null;
        }

        return declaration.children
            ? <Component key={house.id + declaration.component} data={house[declaration.field]}>
                {declaration.children
                    .map(childDeclaration => renderElement(childDeclaration))}
            </Component>
            : <Component data={house[declaration.field]} key={house.id + declaration.component} />;
    };

    const renderTemplate = () => {
        return template.map(declaration => renderElement(declaration))
    };

    return (
        <Col sm={6} lg={4}>
            <Card style={{margin: '15px 0'}} body>
                {renderTemplate()}
            </Card>
        </Col>
    );
};

export default React.memo(HouseCard);
