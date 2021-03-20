// -- imports
import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useQuery, useQueryClient } from 'react-query';

import { fetchAchivements } from '../../api/achivements-api';
import Modal from '../molecules/Modal/Modal';
import Dialog from '../organisms/Dialog/Dialog';

// * -- COMPONENT
function Shop() {
    const queryClient = useQueryClient();
    const { data, error, isLoading } = useQuery('fetchAchivements', fetchAchivements);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <Container style={{ height: '100%' }}>
            {/* <Modal /> */}
            <Dialog />
        </Container>
    );
}

// -- styled components

export default Shop;
