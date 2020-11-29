import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const displayStepsStyle = makeStyles((theme: Theme) =>
  createStyles({
    syropWrapper: {
      display: 'flex',
      flexFlow: 'column',
    },
  })
);

export default displayStepsStyle;
