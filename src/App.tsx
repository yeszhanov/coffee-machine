import React, { useState, useEffect, useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { CoffeeContext } from './contexts/CoffeMachineContext';
import DisplayStepsContent from './components/displaySteps/displaySteps';
import { dictionary, coffeeData } from './data/data';
import Counter from './components/counter/counter';
import { ReactComponent as Cup } from './assets/svg/cup.svg';
import { ReactComponent as Togo } from './assets/svg/togo.svg';
import useStyles from './appStyle';

type TFile = {
  size: string,
};
interface IOrder {
  size: {
    togo: number,
    cupt: number,
  };
}
export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [val, setVal] = useState(null);
  const [completed, setCompleted] = useState({
    size: '',
    coffeType: '',
    roastType: '',
    extra: '',
  });
  const [order, setOrder] = useState<any>({});
  const [isOrdered, setIsOrdered] = useState(false);
  const classes = useStyles();
  const steps = Object.keys(coffeeData);
  const date = new Date().toLocaleDateString();
  const { state, dispatch } = useContext(CoffeeContext);
  const currentStep = Object.keys(coffeeData)[activeStep];
  const { isPaid } = state;

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
    dispatch({ type: 'SET_COFFEE_PAID', status: false });
  };

  const countTotalAmount = (): number => {
    let sum = 0;
    Object.keys(order).map((item, idx) => {
      if (typeof order[item][Object.keys(order[item])[0]] !== 'string') {
        sum += order[item][Object.keys(order[item])[0]];
      }
    });
    return Number(sum);
  };

  const handleRadioChange = (
    e: { target: { value: string, name: any } },
    currentStep: string,
    typeName: React.SetStateAction<null>
  ): void => {
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
                  order={order}
                  onchange={handleRadioChange}
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
            <Counter
              date={date}
              order={order}
              countTotalAmount={countTotalAmount}
            />
          </div>
          <div className={classes.coffeMediumExit}></div>
          <div className={classes.coffeeMediumArm}></div>
          {isPaid && <div className={classes.coffeeMediumLiquid}></div>}

          <div className={classes.coffeeMediumCup}>
            {/* <Togo /> */}
            {order.size && order.size.togo ? <Togo /> : <Cup />}
          </div>
        </div>
        <div className={classes.coffeeFooter}></div>
      </div>
    </div>
  );
}
