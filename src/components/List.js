import { Component } from '../core/Component'

export class List extends Component {
    setup() {
      this.$rootElement = document.createElement('div');
      this.$rootElement.className = 'donates-container';

      const titleDonates = document.createElement('h2')
      titleDonates.className ='donates-container__title'
      titleDonates.textContent = 'Список донатов'
      this.$titleDonates = titleDonates

      const listContainer = document.createElement('div')
      listContainer.className = 'donates-container__donates'
      this.$listContainer = listContainer

      this.$rootElement.append(this.$titleDonates, this.$listContainer)
    }

    addItem(item) {
      this.$listContainer.appendChild(item.$rootElement)
    }
  }
