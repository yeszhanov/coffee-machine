import React, { useState, useEffect, useRef } from 'react';
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
import { CoffeeContext } from '../../contexts/CoffeMachineContext';
import Avatar from '@material-ui/core/Avatar';
import { isArray } from '../../helpers/helper';
import { ReactComponent as ReactLogo } from './assets/svg/americano.svg';
import { coffeeData, dictionary } from '../../data/data';
import useStyles from './displayStepsStyle';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const DisplayStepsContent = ({ val, currentStep, occhange }) => {
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <RadioGroup value={val}>
        {Object.keys(coffeeData[currentStep]).map((item, idx) => {
          return (
            <span key={idx} className={classes.syropWrapper}>
              <FormControlLabel
                name={isArray(coffeeData[currentStep]) ? 'Тип обжарки' : item}
                // name={item}
                onChange={(e) => occhange(e, currentStep, item)}
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
                    onChange={(e) => occhange(e, currentStep, item)}
                  >
                    {coffeeData[currentStep][item].types.map((type, idx) => {
                      return (
                        <MenuItem
                          key={idx}
                          value={coffeeData[currentStep][item].price}
                          // ${coffeeData[currentStep][item].price}
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
