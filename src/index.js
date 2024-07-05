// import { App } from './components/App';
import { DemoCounter } from './components/Demo/DemoCounter';
import { MyComponent } from './components/MyComponent';
import './index.css';

document.addEventListener('DOMContentLoaded', function () {
  // document.body.appendChild(new App().$rootElement);
  // document.body.appendChild(new DemoCounter({ title: 'App counter' }).$rootElement);


  // const myComponent = new MyComponent()
  // document.body.appendChild(myComponent.$rootElement)

  const myComponent = new MyComponent({heading: 'Hellow World!'})
  document.body.appendChild(myComponent.$rootElement)
});
