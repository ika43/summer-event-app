import React, { useState } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Form } from '../form/Form';
import { useDirections } from '../../hooks';
import { Content } from './Content';
import { Loader } from '../layout/Loader';
import { useContentWrapperStyles } from '../../styles';

export const ContentWrapper = () => {
    const classes = useContentWrapperStyles();
    const [directions, setDirections] = useState();
    const { data: { connections }, isLoading, error } = useDirections(directions);
    return(
      <div className={classes.root}>
        <Form setDirections={setDirections} />
        <FormHelperText className={classes.errorText}>{error}</FormHelperText>
        {isLoading && (<Loader />)}
        {connections && connections[0] && (<Content connections={connections[0]} />)}
      </div>
    ); 
}