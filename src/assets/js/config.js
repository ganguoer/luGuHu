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
    },
}
