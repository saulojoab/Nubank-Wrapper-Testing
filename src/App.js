import React, {useEffect, useState} from 'react';
import './App.css';
import {Grid} from '@material-ui/core';

//import data from './data';


import nu from './nubank/nu';

import NuCard from './components/NuCard';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [accountInfo, setAccountInfo] = useState(null);

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

  useEffect(() => {
    getTransactions();
    getAccountInfo();
    getUserInfo();
  }, []);

  return (
    <Grid container className="App">
      <Grid item xs={12}>
      <h1>{userInfo ? 'Olá, ' + userInfo.preferred_name : ''}</h1>
      <label>Seu limite: R${accountInfo ? (accountInfo.credit_limit / 100) : ''}</label>
    </Grid>

      <br/><br/>
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
      : 'OKNOTOK'}
    </Grid>
  );
}

export default App;
