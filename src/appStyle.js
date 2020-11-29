import { makeStyles, createStyles } from '@material-ui/core/styles';

const coffeeMachine = makeStyles(() =>
  createStyles({
    container: {
      width: '800px',
      height: '800px',
      position: 'absolute',
      top: '50px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    syropWrapper: {
      display: 'flex',
      flexFlow: 'column',
    },
    coffeeHeader: {
      width: '100%',
      height: '354px',
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundColor: '#ddcfcc',
      borderRadius: '10px',
    },

    // cupContainer: {
    //   position: 'absolute',
    //   margin: 'auto',
    //   top: '0',
    //   bottom: '0',
    //   left: '0',
    //   right: '0',
    //   width: '200px',
    //   height: '200px',
    // },
    // cupWrapper: {
    //   width: '100px',
    //   borderTop: '250px solid white',
    //   borderLeft: '25px solid transparent',
    //   borderRight: '25px solid transparent',
    //   '&:before': {
    //     position: 'absolute',
    //     content: "''",
    //     background: 'white',
    //     width: '170px',
    //     height: '30px',
    //     top: '-280px',
    //     left: '-35px',
    //     borderRadius: '3px',
    //     boxShadow: '0 2px 0 rgba(#DEDBD2, 0.5)',
    //   },
    //   '&:after': {
    //     position: 'absolute',
    //     content: "''",
    //     background: 'white',
    //     width: '140px',
    //     height: '20px',
    //     top: '-300px',
    //     left: '-20px',
    //     borderRadius: '2px',
    //   },
    // },

    // cupLogo: {
    //   top: '40px',
    //   left: '45px',
    //   '&:before': {
    //     position: 'absolute',
    //     content: "''",
    //     width: '120px',
    //     left: '-40px',
    //     top: '20px',
    //     borderTop: '90px solid #B28D67',
    //     borderLeft: '10px solid transparent',
    //     borderRight: '10px solid transparent',
    //   },
    //   '&:after': {
    //     position: 'absolute',
    //     content: "''",
    //     top: '35px',
    //     width: '60px',
    //     height: '60px',
    //     background: '#29A57C',
    //     borderRadius: '100%',
    //   },
    // },

    backButton: {
      marginRight: 10,
    },
    root: {
      // minWidth: 275,
      height: '100%',
      display: 'flex',
      flexFlow: 'column',
      background: '#c4c4c4',
      '& .MuiCardContent-root': {
        height: '100%',
        padding: '0 16px',
      },
      // justifyContent: 'space-between',
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
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    stepperContent: {
      padding: '0 38px',
      height: '120px',
    },
    instructions: {
      marginTop: 10,
      marginBottom: 10,
    },
    coffeeHeaderOrder: {
      width: '50%',
      height: '264px',
      background: '#c4c4c4',
      margin: '39px auto 0 42px',
      borderRadius: '10px',
      padding: '5px',
      '& .MuiStepper-root': {
        padding: '4px',
        background: '#c4c4c4',
      },
      '& .MuiFormGroup-root': {
        flexDirection: 'row',
      },
    },
    coffeeHeaderDisplay: {
      display: 'none',
      width: '50px',
      height: '50px',
      position: 'absolute',
      top: 'calc(50% - 25px)',
      left: 'calc(50% - 25px)',
      borderRadius: '50%',
      backgroundColor: '#9acfc5',
      border: '5px solid #43beae',
      boxSizing: 'border-box',
    },
    coffeeHeaderDetails: {
      width: '8px',
      height: '20px',
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#9b9091',
      boxShadow: '-12px 0 0 #9b9091, -24px 0 0 #9b9091',
    },
    coffeeMedium: {
      width: '90%',
      height: '460px',
      position: 'absolute',
      top: '330px',
      left: 'calc(50% - 45%)',
      backgroundColor: '#bcb0af',
      '&:before': {
        content: "''",
        width: '40%',
        height: '222px',
        backgroundColor: '#776f6e',
        position: 'absolute',
        bottom: '0',
        right: '10px',
        borderRadius: '20px 20px 0 0',
      },
    },

    coffeMediumExit: {
      width: '60px',
      height: '20px',
      position: 'absolute',
      top: '239px',
      left: '75%',
      backgroundColor: '#231f20',
      '&:before': {
        content: "''",
        width: '50px',
        height: '20px',
        borderRadius: '0 0 50% 50%',
        position: 'absolute',
        bottom: '-20px',
        left: 'calc(50% - 25px)',
        backgroundColor: '#231f20',
      },
      '&:after': {
        content: "''",
        width: '10px',
        height: '10px',
        position: 'absolute',
        bottom: '-30px',
        left: 'calc(50% - 5px)',
        backgroundColor: '#231f20',
      },
    },

    coffeeMediumArm: {
      width: '70px',
      height: '20px',
      position: 'absolute',
      top: '15px',
      right: '25px',
      backgroundColor: '#231f20',
      '&:before': {
        content: "''",
        width: '15px',
        height: '5px',
        position: 'absolute',
        top: '7px',
        left: '-15px',
        backgroundColor: '#9e9495',
      },
    },
    coffeeMediumDisplay: {
      width: '226px',
      height: '344px',
      margin: '50px',
      borderRadius: '10px',
      // z-index: '3';
      background: 'white',
    },

    coffeeMediumCup: {
      width: '80px',
      height: '47px',
      position: 'absolute',
      bottom: '0',
      right: '115px',
      backgroundColor: '#FFF',
      borderRadius: '0 0 70px 70px / 0 0 110px 110px',
      '&:after': {
        content: "''",
        width: '20px',
        height: '20px',
        position: 'absolute',
        top: '6px',
        right: '-13px',
        border: '5px solid #FFF',
        borderRadius: '50%',
      },
    },

    '@keyframes liquid': {
      '0%': {
        height: '0px',
        opacity: '1',
      },
      '5%': {
        height: '0px',
        opacity: '1',
      },
      '20%': {
        height: '62px',
        opacity: '1',
      },
      '95%': {
        height: '62px',
        opacity: '1',
      },
      '100%': {
        height: '62px',
        opacity: '0',
      },
    },
    listLogo: {
      width: '40px',
      height: '40px',
    },
    coffeeMediumLiquid: {
      width: '7px',
      height: '63px',
      opacity: '0',
      position: 'absolute',
      top: '294px',
      left: '79%',
      backgroundColor: '#74372b',
      animation: '$liquid 4s 4s linear infinite',
    },
    coffeeMediumSmoke: {
      width: '8px',
      height: '20px',
      position: 'absolute',
      borderRadius: '5px',
      backgroundColor: '#b3aeae',
    },

    '@keyframes smokeOne': {
      '0%': {
        bottom: '20px',
        opacity: '0',
      },
      '40%': {
        bottom: '50px',
        opacity: '.5',
      },
      '80%': {
        bottom: '80px',
        opacity: ' .3',
      },
      '100%': {
        bottom: '80px',
        opacity: '0',
      },
    },
    '@keyframes smokeTwo': {
      '0%': {
        bottom: '40px',
        opacity: '0',
      },
      '40%': {
        bottom: '70px',
        opacity: '.5',
      },
      '80%': {
        bottom: '80px',
        opacity: '.3',
      },
      '100%': {
        bottom: '80px',
        opacity: '0',
      },
    },
    coffeeMediumSmokeOne: {
      opacity: '0',
      bottom: '50px',
      left: '102px',
      animation: '$smokeOne 3s 4s linear infinite',
    },
    coffeeMediumSmokeTwo: {
      opacity: '0',
      bottom: '70px',
      left: '118px',
      animation: '$smokeTwo 3s 5s linear infinite',
    },
    coffeeMediumSmokeThree: {
      opacity: '0',
      bottom: '65px',
      right: '118px',
      animation: '$smokeTwo 3s 6s linear infinite',
    },
    coffeeMediumSmokeFor: {
      opacity: '0',
      bottom: '50px',
      right: '102px',
      animation: '$smokeOne 3s 5s linear infinite',
    },
    coffeeFooter: {
      width: '95%',
      height: '15px',
      position: 'absolute',
      bottom: '-5px',
      left: 'calc(50% - 47.5%)',
      backgroundColor: '#41bdad',
      borderRadius: '10px',
      '&:after': {
        content: "''",
        width: '106%',
        height: '70px',
        position: 'absolute',
        bottom: '-70px',
        left: '-8px',
        backgroundColor: '#000',
      },
    },
  })
);

export default coffeeMachine;
