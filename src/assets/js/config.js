let isProd = true;

// let prod = "/api";
let prod = "http://localhost:8080/static/services";
// let dev = "http://211.149.159.80:8080";

let base = isProd ? prod : dev;
export default {
    amap:"988b262540ae65a710f18bf4516193de",
    //首页
    homePage:{
        msgList:`${base}/eatport.js`,
        indexlistdetaileat:`${base}/indexListdetaileat.js`,
    },
    news:{
        scenic:`${base}/zxScenicSport.js`,
        actives:`${base}/actives.js`,
        market:`${base}/market.js`,
        sportlist:`${base}/sportlist.js`,
        marketlist:`${base}/marketlist.js`,
        activelist:`${base}/activelist.js`
    },
    my:{
      notify:`${base}/notify.js`,
      coupon:`${base}/coupon.js`,
      order1:`${base}/order1.js`,
      order2:`${base}/order2.js`,
      order3:`${base}/order3.js`,
      order4:`${base}/order4.js`
    },
    market:{
      scenic:`${base}/scenic.js`,
      hotel:`${base}/hotel.js`,
      tourlist:`${base}/tour.js`,
      tourdetail:`${base}/tourdetail.js`
    }
}
