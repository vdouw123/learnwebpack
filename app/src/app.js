import Layer from './components/layer/layer.js';
import './style/common.css';

const App = function () {
    var dom = document.getElementById("app");
    var layer = new Layer();
    dom.innerHTML = layer.tpl({
        name: 'john',
        arr:['apple','xiaomi','oppo']
    });
}

new App();