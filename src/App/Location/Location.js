import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
import fetchData from 'shared/helpers/fetchData';

import Container from './Container';
import Form from './Form';

const Location = () => {
  const [location, setLocation] = useState('');

  const handleChange = event => setLocation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(location);
  };

  return (
    <Container>
      <div>
        <Form action="#" onSubmit={event => handleSubmit(event)}>
          {/* eslint-disable-next-line */}
          <label
            htmlFor="location"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            Please input your location
            <Input
              type="text"
              value={location}
              placeholder="Berlin"
              name="location"
              onChange={event => handleChange(event)}
            />
          </label>
          <Button type="submit">SUBMIT</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Location;
