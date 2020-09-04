import { makeStyles } from '@material-ui/core/styles';

export const useFooterStyles = makeStyles((theme) => ({
  footer: {
      color: 'white',
    },
    root: {
      ...theme.typography.button,
      padding: theme.spacing(1),
    },
}));