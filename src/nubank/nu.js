import axios from 'axios';

const HEADERS_NU = {
    'Accept': 'application/json, text/plain, */*',
    'X-Correlation-Id': 'WEB-APP.s8H38',
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
}

const discovery = async () => {
    const res = await axios.get('https://prod-s0-webapp-proxy.nubank.com.br/api/discovery');

    if (res.status === 200)
    {
        const links = res.data;
        return links;
    } 
    else 
    {
        return new Error("Failed to fetch links");
    }
}

const discoveryApp = async () => {
    const res = await axios.get('https://prod-s0-webapp-proxy.nubank.com.br/api/app/discovery');

    if (res.status === 200)
    {
        const links = res.data;
        return links;
    } 
    else 
    {
        return new Error("Failed to fetch links");
    }
}

const auth = {
    /**
     * Use your cpf and password to login and get the authorization data.
     */
    login: async (payload) => {
        const links = await discovery();

        const body = {
            grant_type: "password",
            login: payload.cpf,
            password: payload.password,
            client_id:"other.conta",
            client_secret:"yQPeLzoHuJzlMMSAjC-LgNUJdUecx8XO"
        }

        const res = await fetch(links['login'], {
            method: 'POST', 
            body: JSON.stringify(body), 
            headers: HEADERS_NU
        });

        return await res.json();
    },
}

const actions = {
    getTransactions: async () => {
        const data = JSON.parse(localStorage.getItem('data'));
        const headersNu = {
            ...HEADERS_NU,
            "authorization": "Bearer " + data.access_token
        }

        const res = await axios.get(data._links.purchases.href, {
            headers: headersNu
        })

        const transactions = res.data;

        return transactions;
    },

    getUserInfo: async () => {
        const data = JSON.parse(localStorage.getItem('data'));

        const headersNu = {
            ...HEADERS_NU,
            "authorization": "Bearer " + data.access_token
        }

        const res = await axios.get(data._links.customer.href, {
            headers: headersNu
        })

        const userData = res.data;

        return userData;
    },

    getAccountInfo: async () => {
        const data = JSON.parse(localStorage.getItem('data'));

        const headersNu = {
            ...HEADERS_NU,
            "authorization": "Bearer " + data.access_token
        }

        const res = await axios.get(data._links.account.href, {
            headers: headersNu
        })

        const accInfo = res.data;

        return accInfo;
    },

    getBillsSummary: async () => {
        const data = JSON.parse(localStorage.getItem('data'));

        const headersNu = {
            ...HEADERS_NU,
            "authorization": "Bearer " + data.access_token
        }

        let res = await axios.get(data._links.account.href, {
            headers: headersNu
        })

        const accInfo = res.data;

        res = await axios.get(accInfo.account._links.bills_summary.href, {
            headers: headersNu
        })

        const resJson = res.data;

        return resJson;
    },
}

export default {auth, actions, discovery, discoveryApp};

