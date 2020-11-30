import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import { ReactComponent as ReactLogo } from '../../assets/svg/americano.svg';
import { dictionary } from '../../data/data';
import { CoffeeContext } from '../../contexts/CoffeMachineContext';
import useStyles from './counterStyle';

interface CounterProps {
  date: string;
  order: {
    [key: string]: string,
  };
  countTotalAmount: any;
}

const Counter = ({
  date,
  order,
  countTotalAmount,
}: CounterProps): JSX.Element => {
  const classes = useStyles();
  const { state, dispatch } = useContext(CoffeeContext);
  const makePayment = () => {
    if (Object.keys(order).filter((key) => key !== '').length === 4) {
      dispatch({ type: 'SET_COFFEE_PAID', status: true });
    } else {
      alert('Завершите заказ!');
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<LocalCafeIcon />}
        title="Детали заказа"
        subheader={date}
      />
      <CardContent>
        {Object.keys(order).map((item, idx) => {
          return (
            <div className={classes.checkRow} key={idx}>
              <List className={classes.root}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ReactLogo className={classes.listLogo} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      dictionary[Object.keys(order[item])[0]] ||
                      Object.keys(order[item])[0]
                    }
                    secondary={`${order[item][Object.keys(order[item])[0]]} ₸`}
                  />
                </ListItem>
              </List>
            </div>
          );
        })}
      </CardContent>
      <div style={{ padding: '16px' }} className={classes.checkRow}>
        <Typography variant="body2" component="p">
          Итого
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {countTotalAmount()}
        </Typography>
      </div>
      <CardActions>
        <Button size="small" onClick={() => makePayment()}>
          Оплатить
        </Button>
      </CardActions>
    </Card>
  );
};

export default Counter;
