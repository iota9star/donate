import './style.css'
import './ani.css'

const pays = [
    {
        label: "Alipay",
        src: "alipay.png",
        url: "https://qr.alipay.com/tsx05266k12ivfpkzlvkv11",
        id: "alipay"
    },
    {
        label: "WechatPay",
        src: "wechat.png",
        url: "wxp://f2f0JfXzfvXcA1PIqV0-jN0b7nd3W1Rlr1kzwvIdJjDzo38",
        id: "wechat"
    },
];
const qrs = pays.map((e) => {
    return `<a href="${e.url}" id="${e.id}"><img src="${e.src}" alt="${e.label}" /><br><button>${e.label}</button></a>`;
}).join("");

document.querySelector('#app').innerHTML = `<div>${qrs}<h1>Thank you, master!</h1><p>You're one in a million. </p></div>`

const params = new URLSearchParams(window.location.search);
if (params.has('p')) {
    const pay = params.get('p');
    if (pay) {
        const ele = document.getElementById(pay);
        if (ele) {
            ele.click();
        }
    }
}
