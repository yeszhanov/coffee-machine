import React, { useState, useEffect, useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import StepLabel from '@material-ui/core/StepLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { CoffeeContext } from './contexts/CoffeMachineContext';
import Avatar from '@material-ui/core/Avatar';
import DisplayStepsContent from './components/displaySteps/displaySteps';
import { ReactComponent as ReactLogo } from './assets/svg/americano.svg';
import { isArray } from './helpers/helper';
import { dictionary, coffeeData } from './data/data';
import useStyles from './appStyle';

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [val, setVal] = useState(null);
  const [completed, setCompleted] = useState({
    size: '',
    coffeType: '',
    roastType: '',
    extra: '',
  });
  const [order, setOrder] = useState({});
  const [isOrdered, setIsOrdered] = useState(false);
  const classes = useStyles();
  const steps = Object.keys(coffeeData);
  const date = new Date().toLocaleDateString();
  const { state, dispatch } = useContext(CoffeeContext);
  const currentStep = Object.keys(coffeeData)[activeStep];
  console.log('state', state);

  useEffect(() => {
    setIsOrdered(false);
  }, [activeStep]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setOrder({});
  };

  const countTotalAmount = () => {
    let sum = 0;
    Object.keys(order).map((item, idx) => {
      if (typeof order[item][Object.keys(order[item])[0]] !== 'string') {
        sum += order[item][Object.keys(order[item])[0]];
      }
    });
    return sum;
  };

  const handleRadioChange = (e, currentStep, typeName) => {
    console.log('e.target.value', e.target.value);

    setVal(typeName);
    let tempOrder = { ...order };

    if (e.target.value !== '') {
      if (/^\d+$/.test(e.target.value)) {
        tempOrder = {
          ...tempOrder,
          [currentStep]: {
            [e.target.name]: Number(e.target.value),
          },
        };
      } else {
        tempOrder = {
          ...tempOrder,
          [currentStep]: {
            [e.target.name]: e.target.value,
          },
        };
      }
      setOrder(tempOrder);
      setIsOrdered(true);
    }
  };
  console.log('order', order);

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.coffeeHeader}>
          <div className={classes.coffeeHeaderOrder}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{dictionary[label]}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div className={classes.stepperContent}>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    Готово
                  </Typography>
                  <Button onClick={handleReset}>Начать заново</Button>
                </div>
              ) : (
                <DisplayStepsContent
                  occhange={handleRadioChange}
                  currentStep={currentStep}
                  val={val}
                />
              )}
            </div>
            {activeStep !== steps.length && (
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!isOrdered}
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            )}
          </div>

          <div className={classes.coffeeHeaderDisplay}></div>
          <div className={classes.coffeeHeaderDetails}></div>
        </div>
        <div className={classes.coffeeMedium}>
          <div className={classes.coffeeMediumDisplay}>
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
                            secondary={`${
                              order[item][Object.keys(order[item])[0]]
                            } ₸`}
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
                <Button size="small">Оплатить</Button>
              </CardActions>
            </Card>
          </div>
          <div className={classes.coffeMediumExit}></div>
          <div className={classes.coffeeMediumArm}></div>
          <div className={classes.coffeeMediumLiquid}></div>
          <div
            className={
              (classes.coffeeMediumSmoke, classes.coffeeMediumSmokeOne)
            }
          ></div>
          <div
            className={
              (classes.coffeeMediumSmoke, classes.coffeeMediumSmokeTwo)
            }
          ></div>
          <div
            className={
              (classes.coffeeMediumSmoke, classes.coffeeMediumSmokeThree)
            }
          ></div>
          <div
            className={
              (classes.coffeeMediumSmoke, classes.coffeeMediumSmokeFor)
            }
          ></div>
          <div className={classes.coffeeMediumCup}></div>
          {/* <div style={{ position: 'relative' }}>
            <div className={classes.cupContainer}>
              <div className={classes.cupWrapper}></div>
              <div className={classes.cupLogo}></div>
            </div>
          </div> */}
        </div>
        <div className={classes.coffeeFooter}></div>
      </div>
    </div>
  );
}
