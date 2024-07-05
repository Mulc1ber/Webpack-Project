import { Component } from '../core/Component'
import {} from './Button'

export class MyComponent extends Component {
    setup(props) {
        this.state = {
            counter: 0,
        }


        // Создаем корневой элемент
        this.$rootElement = document.createElement('div')

        // // Устанавливаем ему класс, чтобы можно было стилизовать
        // this.$rootElement.className = 'component'

        // Создаем дочерний элемент
        const $heading = document.createElement('h1')
        // $heading.textContent = props.heading
        $heading.textContent = `${props.heading}: ${this.state.counter}`
        // Добавляем заголовок в корневой элемент
        this.$rootElement.appendChild($heading)
        // Заносим элемент в поле $heading, чтобы потом смогли к нему обратиться
        this.$heading = $heading


        // Передаем в кнопку входные параметры — текст и callback-функцию,
        // которая должна вызваться при клике на нее
        const incrementButton = new Button({
            text: 'Увеличить счетчик',
            onClick: this.handlerClick.bind(this) // Закрепляем контекст
        })
        // При добавлении на страницу также используем $rootElement
        this.$rootElement.appendChild(incrementButton.$rootElement);



        // // Создаем кнопку
        // const $button = document.createElement('button')
        // $button.textContent = 'Увеличить счетчик'
        // // Передаем обработчик с закрепленным контекстом
        // $button.addEventListener('click', this.handlerClick.bind(this))
        // this.$rootElement.appendChild($button)


    }

    // Эта фукнция вызовется при клике на кнопку внутри компонента Button
    handleClick(event) {
        // Увеличиваем счетчик
        this.state.counter++;

        // В методах класса входные параметры доступны через this.props
        // Получаем элемент заголовка и обновляем его значение
        this.$heading.textContent = `${this.props.heading}: ${this.state.counter}`;
    }

}
