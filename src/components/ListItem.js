import { Component } from '../core/Component';
import moment from 'moment'

export class ListItem extends Component {
    setup(props) {
        this.state = {
            date: new Date(),
            amount: props.amount
        }

        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donate-item';

        const dateTime = moment(this.state.date).format("DD/MM/YYYY, H:mm:ss")
        const donate = `<span>${dateTime} - <b>$${this.state.amount}</b></span>`
        this.$rootElement.innerHTML = donate
        this.$rootElement.dataset.amount = this.state.amount

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-button'
        deleteBtn.textContent = 'Удалить'
        this.$rootElement.append(deleteBtn)
    }

}
