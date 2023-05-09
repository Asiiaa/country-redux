import * as React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Sort({sortPopulation, sortArea}) {
    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={() => sortPopulation()} variant="outlined">Population</Button>
            <Button onClick={() => sortArea()} variant="outlined">Area</Button>
        </Stack>
    );
}