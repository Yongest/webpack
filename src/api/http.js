/**
 * Created by 10468 on 2019/6/9.
 */

let host = 'http://127.0.0.1';
if(!IS_DEV){
    host = 'http://baidu.com'
}
let url = host +'/api'

import axios from 'axios'

export const getUserInfo=()=>axios.get(url)