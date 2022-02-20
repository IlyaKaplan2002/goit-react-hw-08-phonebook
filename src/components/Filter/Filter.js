import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contacts/filter';
import FilterStyled from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = ({ target }) => {
    const { value } = target;
    dispatch(changeFilter(value));
  };

  return (
    <FilterStyled>
      <Form.Group className="mb-3" controlId="filter">
        <Form.Label column="lg">Find contacts by name</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          value={filter}
          onChange={onChange}
          name="filter"
        />
      </Form.Group>
    </FilterStyled>
  );
};

export default Filter;
