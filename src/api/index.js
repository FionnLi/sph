import requests from "./request";


export const reqList = ()=>{
    requests({url:'/product/getBaseCategoryList',method:'get'});
}