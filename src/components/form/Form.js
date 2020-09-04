import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import { useFormStyles } from '../../styles';

export const Form = ({ setDirections }) => {
    const [formdata, setFormdata] = useState({ from: '', to: ''});
    const classes = useFormStyles();
    const handleSubmit = (e) => {
      e.preventDefault();
      setDirections(formdata);
    }
    return(
      <div className={classes.paper}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField
              fullWidth
              label="From"
              value={formdata.from}
              onChange={(e)=>setFormdata({ ...formdata, from: e.target.value})}
            />
          </div>
          <div className={classes.bottomInput}>
            <TextField
              fullWidth
              label="To"
              value={formdata.to}
              onChange={(e)=>setFormdata({ ...formdata, to: e.target.value})}
            />
          </div>
          <input className={classes.submitButton} type="submit" />
        </form>
      </div>
    ); 
}