import React from 'react';
import ShoppingList from '../components/ShoppingList';
import ItemModal from '../components/ItemModal';
import { Container } from 'reactstrap';

const ShoppingPage = () => (    
    <Container>
        <ItemModal/>
        <ShoppingList/>
    </Container>
);

export default ShoppingPage;