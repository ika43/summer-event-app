import { makeStyles } from '@material-ui/core/styles';

export const useHeaderStyles = makeStyles((theme) => ({
  title: {
    ...theme.typography.button,
    padding: theme.spacing(2),
    color: 'white',
  },
}));
