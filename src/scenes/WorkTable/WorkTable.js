import React from 'react';
import {Container} from 'react-bootstrap';

import './WorkTable.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HouseList from '../../containers/HouseList/HouseList';


const WorkTable = props => (
  <div className="work-table">
    <Navbar />

    <main>
      <Container>
        <HouseList />
      </Container>
    </main>

    <Footer />

  </div>
);

export default WorkTable;
