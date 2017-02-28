/**
 * Created by sf on 2017/2/28.
 */

require('./world.js');
require('./style.css');
//style.css需要经过css-loader的处理，才能打包

function hello(str) {
    console.log(str);
}

hello('hello world!');
