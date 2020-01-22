import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    containerLeft: {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        color: '#98009D'
    },
    containerRight: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#98009D'
    },
    name: {
        fontSize: 30,
        fontWeight: 'bolder'
    },
    credit_limit: {
        fontSize: 20,
        fontWeight: 'bolder'
    }
});

export default function NuHeader({ accountInfo, userInfo }) {
    const classes = useStyles();

    return (
        <>
        <Grid item xs={10} className={classes.containerLeft}>
            <span className={classes.name}>{userInfo ? <span>Olá, <span style={{fontWeight: 100}}>{userInfo.preferred_name}</span> </span> : ''}</span>
        </Grid>
        <Grid item xs={2} className={classes.containerRight}>
            <span className={classes.credit_limit}>Seu limite: R${accountInfo ? <span style={{fontWeight: '300'}}>{accountInfo.credit_limit / 100}</span> : ''}</span>
        </Grid>
        </>
    )
}
