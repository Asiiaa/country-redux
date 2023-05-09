import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function Filter({filterDependent, filterInDependent}) {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button value='dependent' onClick={() => filterDependent()}>Dependent</Button>
      <Button value='independent' onClick={() => filterInDependent()}>Independent</Button>
    </ButtonGroup>
  );
}