/**
 * Created by sf on 2017/2/28.
 */

require('./world.js');
require('css-loader!./style.css');
//style.css需要经过css-loader的处理，才能打包

function hello(str) {
    alert(str);
}

hello('hello world!');
