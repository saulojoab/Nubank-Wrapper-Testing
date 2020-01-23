import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles, Grid } from '@material-ui/core';
import moment from 'moment';


const useStyles = makeStyles({
    container: {
        fontFamily: 'Roboto',
        fontSize: 20,
        padding: 20,
        borderBottom: '1px solid #E39CE4',
        borderRight: '1px solid #E39CE4',
        color: '#8C009D',
        transition: 'all 0.5s',
        '&:hover': {
            background: '#8C009D',
            color: 'white !important'
        }
    },
    merchant_name: {
        fontWeight: '100',
        fontSize: 28,
        textAlign: 'left',
    },
    category: {
        fontWeight: '900',
        fontSize: 23,
        textAlign: 'right'
    },
    amount: {
        fontWeight: '100',
        fontSize: 20,
        textAlign: 'left',
        display: 'flex',
        alignItems: 'flex-end'
    },
    time: {
        fontWeight: '200',
        fontSize: 18,
        textAlign: 'right'
    },
    timeCategoryContainer: {
    }
})

export default function NuCard(props) {
    const classes = useStyles();
    return (
        <>
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.merchant_name}>
                {props.merchant_name}
            </Grid>
            <Grid item xs={6} className={classes.amount}>
                <span><span style={{fontWeight: '900'}}>R$ </span>{props.amount / 100}</span>
            </Grid>
            <Grid container item xs={6} className={classes.timeCategoryContainer}>
                <Grid item xs={12} className={classes.category}>
                    {props.category.toUpperCase()}
                </Grid> 
                <Grid item xs={12} className={classes.time}>
                    {moment(props.time).format('hh:mm - DD/MM/YYYY')}
                </Grid> 
            </Grid>
        </Grid>
        </>
    )
}
