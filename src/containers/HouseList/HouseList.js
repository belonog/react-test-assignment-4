import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';

import { updateHousesIfNeeded } from '../../ducks/houses';
import { updateTemplatesIfNeeded, setTemplate } from '../../ducks/templates';

import TempleteSelector from './components/TempleteSelector';
import HouseCard from '../HouseCard/HouseCard';

const HouseList = props => {

  useEffect(() => {
    props.updateTemplatesIfNeeded();
    props.updateHousesIfNeeded();
  }, []);

  const getSelectedTemplate = () =>
    props.templates.list
      .find(template => template.id === props.templates.selected)
      .template;

  return (
    <>
      <TempleteSelector
        templates={props.templates}
        setTemplate={props.setTemplate} />
      <Row>
        {props.houses && !!props.templates.list.length && props.houses.map(house =>
          <HouseCard
            key={house.id}
            house={house}
            template={getSelectedTemplate()}
        />)}
      </Row>
    </>
  );
};

const mapStateToProps = state => ({
  houses: state.houses.list,
  templates: state.templates,
});

const mapDispatchToProps = {
  updateTemplatesIfNeeded,
  updateHousesIfNeeded,
  setTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseList);
