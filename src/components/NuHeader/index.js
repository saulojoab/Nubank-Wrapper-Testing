import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    containerLeft: {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        color: 'white',
        backgroundColor: '#98009D',
        borderBottom: '1px solid #9C719D',
    },
    containerRight: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
        color: 'white',
        borderBottom: '1px solid #9C719D',
        backgroundColor: '#98009D',
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
        <Grid item xs={8} className={classes.containerLeft}>
            <span className={classes.name}>{userInfo ? <span>Olá, <span style={{fontWeight: 100}}>{userInfo.preferred_name}</span> </span> : ''}</span>
        </Grid>
        <Grid item xs={4} className={classes.containerRight}>
            <Grid item>
                <span className={classes.credit_limit}>Seu limite:<br/> R${accountInfo ? <span style={{fontWeight: '300'}}> {accountInfo.credit_limit / 100}</span> : ''}</span>
            </Grid>

            <Grid item style={{paddingLeft: 40}}>
                <span className={classes.credit_limit}>Limite Disponível: <br/>R${accountInfo ? <span style={{fontWeight: '300'}}> {accountInfo.net_available / 100}</span> : ''}</span>
            </Grid>
        </Grid>
        </>
    )
}
