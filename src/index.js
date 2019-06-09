/**
 * Created by 10468 on 2019/6/9.
 */
console.log('home')
//import $ from 'jquery'
import './css/index.css'
import './less/index.less'
//import $ from 'jquery'
console.log($)
console.log(IS_DEV)
import  { getUserInfo } from './api/http.js'
getUserInfo().then(()=>{},(err)=>{console.log(err)})
//console.log(window.$)
//$("body").css({
//    backgroundColor:'pink'
//})
