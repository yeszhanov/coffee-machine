import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { isArray } from '../../helpers/helper';
import { coffeeData, dictionary } from '../../data/data';
import useStyles from './displayStepsStyle';

interface StepsProps {
  val: any;
  currentStep: string;
  onchange: any;
  order: any;
}

const DisplayStepsContent = (props: StepsProps): JSX.Element => {
  const classes = useStyles();
  const { val, currentStep, onchange, order } = props;
  return (
    <FormControl component="fieldset">
      <RadioGroup value={val}>
        {Object.keys(coffeeData[currentStep]).map((item, idx) => {
          return (
            <span key={idx} className={classes.syropWrapper}>
              <FormControlLabel
                name={isArray(coffeeData[currentStep]) ? 'Тип обжарки' : item}
                onChange={(e) => onchange(e, currentStep, item)}
                value={order[item]}
                control={
                  <Radio
                    value={
                      typeof coffeeData[currentStep][item] === 'object'
                        ? ''
                        : coffeeData[currentStep][item]
                    }
                    checked={val === item}
                  />
                }
                label={
                  isArray(coffeeData[currentStep])
                    ? coffeeData[currentStep][item]
                    : dictionary[item] || item
                }
              />
              {val === 'syrop' && item === 'syrop' ? (
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Выбрать
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name={item}
                    value={'asd'}
                    label="Выбрать"
                    onChange={(e) => onchange(e, currentStep, item)}
                  >
                    {coffeeData[currentStep][item].types.map((type, idx) => {
                      return (
                        <MenuItem
                          key={idx}
                          value={coffeeData[currentStep][item].price}
                        >
                          {type}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              ) : null}
            </span>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default DisplayStepsContent;
