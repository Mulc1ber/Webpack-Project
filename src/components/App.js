import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { ListItem } from './ListItem'


export class App extends Component {
    setup() {
        this.state = {
            total: 0,
            donates: [],
        }


        this.$rootElement = document.createElement('div')
        this.$rootElement.className = 'app'

        const totalAmount = document.createElement('h1')
        totalAmount.className = 'total-amount'
        totalAmount.textContent = 'Итого: $'
        const total = document.createElement('span')
        total.textContent = this.state.total
        this.$total = total

        totalAmount.append(total)
        this.$rootElement.appendChild(totalAmount)

        const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)})
        this.$rootElement.appendChild(donateForm.$rootElement)
        const donateList = new List()
        this.$rootElement.appendChild(donateList.$rootElement)
        this.donateList = donateList

    }

    onItemCreate(amount) {
        const item = new ListItem({amount})
        this.state.donates.push(item)

        this.donateList.addItem(item)

        const deleteBtn = item.$rootElement.querySelector('.delete-button')
        deleteBtn.addEventListener('click', this.onItemDelete.bind(this))

        this.state.total += amount
        this.$total.textContent = this.state.total
    }

    onItemDelete(e) {
        const itemDelete = e.target.closest('.donate-item')
        const arrayDonates = this.state.donates

        arrayDonates.forEach((item, index) => {
            if (item.$rootElement === itemDelete) {
                const amount = Number(itemDelete.dataset.amount)
                this.state.total -= amount
                this.$total.textContent = this.state.total
                arrayDonates.splice(index, 1)
            }
        })

        itemDelete.remove()
    }
}
