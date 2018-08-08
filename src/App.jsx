import React, { Component } from 'react';
import './App.css';
import { startArr, arr400, arr1000 } from './defaultValues'

class App extends Component {
	state = {
		x: 0,
		y: 0
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
		this.handleScroll()
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	// Функия для скролла
	handleScroll = () => {
		if (window.scrollY < 400)
			this.changePosition(startArr, window.scrollY)
		else if (window.scrollY >= 400 && window.scrollY < 1000)
			this.changePosition(arr400, window.scrollY)
		else if (window.scrollY >= 1000 && window.scrollY < 2000)
			this.changePosition(arr1000, window.scrollY)
	}

	// Функция, которая записывает значения (x, y) в state
	changePosition = (arr, scrollValue) => {
		const xPosition = this.positionFunc(arr, scrollValue, 'x')
		const yPosition = this.positionFunc(arr, scrollValue, 'y')

		this.setState({
			x: xPosition,
			y: yPosition
		})
	}

	// Функция, которая просчитывает и отдает расположение
	positionFunc = (arr, scrollVal, type) => {
		// Минимальные проверки
		if (typeof arr !== 'object' && arr.length <= 0) {
			console.log('Problem in arr', arr)
			return
		}

		if (typeof scrollVal !== 'number') {
			console.log('Problem in scrollVal', scrollVal)
			return
		}

		if (typeof type !== 'string' && type.length <= 0) {
			console.log('Problem in type', type)
			return
		}

		// Беру из основого массива объект
		const positionObject = arr[0]
		// Фильтрую по выбранному типу
		const scrollArr = positionObject.scroll.filter(el => el.type === type)
		// Беру из полученного массива объект
		const scrollObj = scrollArr[0]
		// Переменная для процентного расчета скролла относильно startScroll и endScroll значения
		let scrollProcent
		// Перенная для записи конечно значения
		let typeValue

		// Проверяю, чтобы скролл входил в интервал между startScroll и endScroll
		if (scrollObj.startScroll <= scrollVal && scrollObj.endScroll >= scrollVal) {
			// Просчет, сколько процентов переданный скролл относильно startScroll и endScroll
			scrollProcent = Math.round((100 * (scrollVal - scrollObj.startScroll)) / (scrollObj.endScroll - scrollObj.startScroll))
			// Проверка, если значения перемещения равны, то расчетов не делать и просто сохранить любое
			if (scrollObj.endValue === scrollObj.startValue) {
				typeValue = scrollObj.startValue
			} else {
				// Просчет значения координаты, суммируется начальное положение и положение процентного скролла относильно startValue и endValue
				typeValue = Math.round(scrollObj.startValue + ((scrollProcent * (scrollObj.endValue - scrollObj.startValue)) / 100))
			}
		} else {
			return
		}

		return typeValue
	}

	render() {
		const styleBlock = {
			left: this.state.x + 'px',
			bottom: this.state.y + 'px'
		}

		return (
			<div className="App">
				<div className="wrapper">
					<div className="block" style={styleBlock}></div>
					<div className="block-mount-1"></div>
					<div className="block-mount-2"></div>
					<div className="block-mount-3"></div>
				</div>
			</div>
		);
	}
}

export default App;
