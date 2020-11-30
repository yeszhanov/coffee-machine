import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const counterStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      flexFlow: 'column',
      background: '#c4c4c4',
      '& .MuiCardContent-root': {
        height: '100%',
        padding: '0 16px',
      },
    },
    listLogo: {
      width: '40px',
      height: '40px',
    },
    pos: {
      marginBottom: 12,
    },
    checkRow: {
      display: 'flex',
      justifyContent: 'space-between',
      '& .MuiList-padding': {
        padding: '0',
      },
      '& .MuiListItem-gutters': {
        padding: '0',
      },
      '& .MuiAvatar-root': {
        width: '30px',
        height: '30px',
      },
      '& .MuiListItemText-multiline': {
        margin: '0',
      },
      '& .MuiTypography-body1': {
        lineHeight: 1,
      },
    },
  })
);

export default counterStyle;
