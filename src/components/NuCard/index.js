import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles, Grid } from '@material-ui/core';
import moment from 'moment';


const useStyles = makeStyles({
    container: {
        fontFamily: 'Roboto',
        fontSize: 20,
        backgroundColor: '#8C009D',
        padding: 20,
        border: '1px solid #AE00C3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    merchant_name: {
        fontWeight: 'bolder',
        fontSize: 30,
        color: 'white'
    },
    category: {
        fontWeight: '100',
        fontSize: 25,
        color: 'white'
    },
    amount: {
        fontWeight: '100',
        fontSize: 30,
        color: 'white'
    },
    time: {
        fontWeight: '500',
        fontSize: 18,
        color: 'white'
    },
})

export default function NuCard(props) {
    const classes = useStyles();
    return (
        <>
        <Grid container item xs={6} className={classes.container}>
            <Grid item xs={12} className={classes.merchant_name}>
                {props.merchant_name}
            </Grid>
            <Grid item xs={12} className={classes.category}>
                {props.category[0].toUpperCase()+props.category.slice(1)}
            </Grid>
            <Grid item xs={12} className={classes.time}>
                {moment(props.time).format('hh:mm - DD/MM/YYYY')}
            </Grid>
        </Grid>
        <Grid container item xs={6} className={[classes.container, {backgroundColor: 'white'}]}>
            <Grid item xs={12} className={classes.amount}>
                <span style={{fontWeight: 'bolder'}}>R$ </span>{props.amount / 100}
            </Grid>
        </Grid>
        </>
    )
}
