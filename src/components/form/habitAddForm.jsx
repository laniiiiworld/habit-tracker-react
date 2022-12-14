import React, { memo, useRef } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input ref={inputRef} type='text' className='add-input' placeholder='Habit' />
      <button className='button add-button'>Add</button>
    </form>
  );
});

export default HabitAddForm;
