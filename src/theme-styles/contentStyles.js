import { makeStyles } from '@material-ui/core/styles';

export const useContentBodyStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    marginBottom: 10,
  },
}));
