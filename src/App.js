import React, {useEffect, useState} from 'react';
import './App.css';
import {Grid, CircularProgress} from '@material-ui/core';

//import data from './data';


import nu from './nubank/nu';

import NuCard from './components/NuCard';
import NuHeader from './components/NuHeader';
import NuBills from './components/NuBills';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [accountInfo, setAccountInfo] = useState(null);
  const [billsSummary, setBillsSummary] = useState([]);

  const loginNu = async () => {
    //const login = await nu.auth.login({cpf: 'yourcpf', password: 'yourpassword'});
    //console.log(login);
    //localStorage.setItem('data', JSON.stringify(data));
  }

  const discoveryAppNu = async () => {
    await console.log('DISCOVERY APP');
    const discoveryApp = await nu.discoveryApp();
    await console.log(discoveryApp);
  }

  const discoveryNu = async () => {
    await console.log('DISCOVERY');
    const discovery = await nu.discovery();
    await console.log(discovery);
  }

  const getTransactions = async () => {
    const trans = await nu.actions.getTransactions();
    setTransactions(trans.transactions);
    console.log(trans);
  }

  const getUserInfo = async () => {
    const userInfo = await nu.actions.getUserInfo();
    console.log(userInfo);
    setUserInfo(userInfo.customer);
  }

  const getAccountInfo = async () => {
    const accInfo = await nu.actions.getAccountInfo();
    setAccountInfo(accInfo.account);
    console.log(accInfo);
  }

  const getBillsSummary = async () => {
    const bills = await nu.actions.getBillsSummary();
    setBillsSummary(bills.bills);
    console.log(bills.bills);
  }

  useEffect(() => {
    discoveryNu();
    getTransactions();
    getAccountInfo();
    getUserInfo();
    getBillsSummary();
  }, []);

  return (
    <Grid container className="App">
      
      <NuHeader accountInfo={accountInfo} userInfo={userInfo} />
      <Grid item xs={12} sm={6}>
        <br/>
        <span style={{fontSize: 45, fontWeight: '100', color: 'purple'}}>Suas Compras:</span>
        <br/>
        {transactions.length > 0 ? transactions.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()).reverse().map((t) => {
                return(
                  <NuCard 
                  merchant_name={t.merchant_name} 
                  category={t.category} 
                  time={t.time} 
                  amount={t.amount}
                  />
                )
            })
        : <CircularProgress style={{color: '#8C009D'}} />}
      </Grid>
      <Grid item xs={12} sm={6}>
        <br/>
        <span style={{fontSize: 45, fontWeight: '100', color: 'purple'}}>Suas Faturas:</span>
        <br/>
        {billsSummary.length > 0 ? billsSummary.sort((a, b) => new Date(a.open_date).getTime() - new Date(b.open_date).getTime()).reverse().map((b) => {
                  return(
                    <NuBills 
                    open_date={b.summary.open_date} 
                    due_date={b.summary.due_date} 
                    close_date={b.summary.close_date} 
                    total_balance={b.summary.total_balance} 
                    />
                  )
              })
          : <CircularProgress style={{color: '#8C009D'}} />}
      </Grid>
    </Grid>
  );
}

export default App;
