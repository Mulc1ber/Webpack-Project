import { getRandomColor } from './utils/utils'

export default function initApp() {
    const button = document.createElement('button')
    button.className = 'button'
    button.textContent = 'Изменить цвет страницы'
    document.body.append(button)

    button.addEventListener('click', () => document.body.style.backgroundColor = getRandomColor())
}

