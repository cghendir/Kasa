import React from 'react';
import { useParams } from 'react-router-dom';
import Accommodation from './Accommodation';

function AccommodationId() {
  const { id } = useParams();
  return <Accommodation id={id} />;
}

export default AccommodationId;
