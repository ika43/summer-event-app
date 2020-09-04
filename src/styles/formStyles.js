import { makeStyles } from '@material-ui/core/styles';

export const useFormStyles = makeStyles((theme) => ({
  paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 600,
    },
    submitButton: {
      display: 'none'
    },
    bottomInput: {
      marginTop: 20
    }
}));