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
        id: "wechat"
    },
];
const qrs = pays.map((e) => {
    return `<a href="${e.url || '#' + e.id}" id="${e.id}"><img src="${e.src}" alt="${e.label}" /><br><button ${e.url ? '' : 'disabled'}>${e.label}</button><br><label>${e.url ? '&nbsp;' : '仅支持微信直接扫码或者下载图片后在微信内识别图片扫码'}</label></a>`;
}).join("");

document.querySelector('#app').innerHTML = `<div><div class="qrs">${qrs}</div><h1>Thank you, master!</h1><p>You're one in a million. </p></div>`

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
