import { makeStyles } from '@material-ui/core/styles';

export const useContentBodyStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    marginBottom: 10,
  },
  icon: {
    padding: 10,
    height: 20,
    width: 20,
  },
}));

export const useContentExpansionStyles = makeStyles(() => ({
  collapse: {
    width: '100%',
  },
}));

export const useContentExpansionBodyStyles = makeStyles({
  table: {
    paddingTop: 20,
  },
});

export const useContentHeaderStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    color: 'white',
    display: 'flex',
  },
  mright: {
    marginLeft: 'auto',
  },
}));

export const useContentWrapperStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
  },
  errorText: {
    textAlign: 'center !important',
  },
}));
