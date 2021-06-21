const axios = require('axios');
const DOMParser = require('dom-parser');
// import JSSoup from 'jssoup';

const fetchQuery = async (keyword) => {
    const head = 'https://dramacool.lv/wp-json/dooplay/search/?keyword';
    const tail = '&nonce=dcc0b21e4b';
    const query = keyword.split(' ').join('%20');
    const url = head + query + tail;
    const res = await axios.get(url);
    const data = res.data;
    const soup = new JSSoup(data);
    let x = soup.find();
};

const func = async (keyword) => {
    const head = 'https://dramacool.lv/wp-json/dooplay/search/?keyword=';
    const tail = '&nonce=dcc0b21e4b';
    const query = keyword.split(' ').join('%20');
    const url = head + query + tail;
    // const resp = await axios
    //     .get(url, {
    //         responseType: 'json',
    //     })
    //     .catch((e) => console.log(e.message));
    // // try {
    // const obj = await resp.data;
    // for (let id of obj) {
    //     console.log(id['img']);
    // }
    // } catch (e) {
    //     console.log(e.message);
    // }
    axios
        .get(url, {
            responseType: 'json',
        })
        .then((resp) => {
            // console.log(resp.data);
            return resp.data;
        })
    // .then((data) => data.json())
    // .then((text) => {
    //     const parser = new DOMParser();
    //     const doc = parser.parseFromString(text, 'text/html');
    //     const sel = doc.querySelector('#seasons > div > div > ul');
    //     console.log(sel);
    // })
    .then((obj) => {
    for (let id in obj) {
        console.log(obj[id]['img']);
    }
    })
    .catch((e) => console.log(e.message));
};

func('Mad for e');
