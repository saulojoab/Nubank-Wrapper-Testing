import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles, Grid } from '@material-ui/core';
import moment from 'moment';

moment.locale('pt-br');

const useStyles = makeStyles({
    container: {
        fontFamily: 'Roboto',
        fontSize: 20,
        padding: 10,
        borderBottom: '1px solid #E39CE4',
        borderRight: '1px solid #E39CE4',
        color: '#8C009D',
        transition: 'all 0.5s',
        '&:hover': {
            background: '#8C009D',
            color: 'white !important'
        }
    },
    month: {
        fontFamily: 'Roboto',
        fontSize: 40,
        fontWeight: '100',
        justifyContent: 'center',
        alignItems: 'center',
    },
    total_balance: {
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: '100',
        margin: 9
    },
    dates: {
        fontWeight: '200'
    }
})

export default function NuBills(props) {
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    const classes = useStyles();
    return (
        <>
        <Grid container className={classes.container}>
            <Grid container item xs={4} className={classes.month}>
                <Grid item xs={4}>
                    {months[moment(props.open_date).month()]}
                </Grid>
            </Grid>
            <Grid container item xs={8}>
                <Grid item xs={12} className={classes.total_balance}>
                
                    <span style={{fontWeight: 'bold'}}>R$</span> {props.total_balance / 100} {" "}
                    {(props.total_balance / 100) < 0 ? 
                    <span style={{fontSize: 30, fontWeight: 'bold', color: 'green'}}>(ADIANTADA)</span> 
                    : ''}
                </Grid>
                <Grid item xs={4} className={classes.dates}>
                    Iniciou em: 
                    <br/> 
                    {moment(props.open_date).format('DD/MM/YYYY')}
                </Grid>
                <Grid item xs={4} className={classes.dates}>
                    Fecha em: 
                    <br/> 
                    {moment(props.close_date).format('DD/MM/YYYY')}
                </Grid>
                
                <Grid item xs={4} className={classes.dates}>
                    Vence em: 
                    <br/> 
                    {moment(props.due_date).format('DD/MM/YYYY')}
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}
