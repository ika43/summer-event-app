import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import './Form.scss';

export const Form = ({ setDirections }) => {
  const [formdata, setFormdata] = useState({ from: '', to: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.from && formdata.to) setDirections(formdata);
  };

  return (
    <div className="formWrapper">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="textInput">
          <TextField
            fullWidth
            label="From"
            name="from"
            value={formdata.from}
            onChange={(e) => setFormdata({ ...formdata, from: e.target.value })}
          />
        </div>
        <div className="textInput">
          <TextField
            fullWidth
            label="To"
            name="to"
            value={formdata.to}
            onChange={(e) => setFormdata({ ...formdata, to: e.target.value })}
          />
        </div>
        <input className="submitButton" type="submit" />
      </form>
    </div>
  );
};
