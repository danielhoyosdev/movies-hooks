import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import queryString from 'query-string';

export default ({ location }) => {

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
    });

    return (
        <Container>
            Results
        </Container>
    )
}