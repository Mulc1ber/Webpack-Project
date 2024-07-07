import { Component } from '../core/Component'
import { List } from './List'

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    }

    this.$rootElement = document.createElement('form')
    this.$rootElement.className = 'donate-form'

    // Создание label
    const laber = document.createElement('label')
    laber.className = 'donate-form__input-label'
    laber.textContent = 'Введите сумму в $'


    // Создание input
    const donateInput = document.createElement('input')
    donateInput.className = 'donate-form__donate-input'
    donateInput.setAttribute('name', 'amount')
    donateInput.setAttribute('type', 'number')
    donateInput.setAttribute('max', '100')
    donateInput.setAttribute('min', '1')
    donateInput.setAttribute('required', '')
    this.$input = donateInput

    laber.appendChild(this.$input)


    // Создание Button
    const donateButton = document.createElement('button')
    donateButton.className = 'donate-form__submit-button'
    donateButton.setAttribute('type', 'submit')
    donateButton.setAttribute('disabled', '')
    donateButton.textContent = 'Задонатить'
    this.$button = donateButton

    this.$rootElement.append(laber, this.$button)


    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$button.addEventListener('click', this.handleSubmit.bind(this))
  }

  get isValid() {
    return (this.state.amount.length > 0 && this.state.amount <= 100 && this.state.amount > 0) ? true : false
  }

  handleInput(event) {
    this.state.amount = event.target.value

    if(event.target.value.length > 0 && this.isValid) {
      this.$button.removeAttribute('disabled')
    } else {
      this.$button.setAttribute('disabled', '')
    }

  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount))

      this.state.amount = ''
      this.$input.value = ''

      this.$button.setAttribute('disabled', '')
    }

  }
}
