Использовал react-create-app

Для установки npm install
Для запуска npm start

Весь нужный js находится в App.jsx и defaultValues.js
Стили находятся в App.css

Использовал массив из тз:
	[
		{
			type: 'image',
			style: {
				left: 0,
				top: 10
			},
			scroll: [
				{
					type: 'top',
					startScroll: 0,
					endScroll: 200,
					startValue: 100,
					endValue: 400
				},
				{
					type: 'left',
					startScroll: 0,
					endScroll: 200,
					startValue: 0,
					endValue: 200
				}
			]
		}
	]

Изменил left и top, на x и y
Также для посчета использовал десятки, а не сотни, например, startValue: 70 вместо startValue: 700
Не использовал type: 'image' не особо понял зачем он нужен
Не использовал объекта style, все считал относильно массива scroll

Функция positionFunc принимает параметр 3 параметра:
1 параметр: данный массив
2 параметр: позиция скролла
3 параметр: формат данных которые мы хотим получить

В тз был указан немного по-другому цитирую:
	По итогу хочется видеть функцию (необяз.), которая принимает:
	1 параметр: данный массив (см. выше)
	2 параметр: ключ блока в массиве 
	3 параметр: позиция скролла (в нашем случае) 
	4 параметр: формат данных которые мы хотим получить (типа left)

К сожалению, не понял, что значит '2 параметр: ключ блока в массиве'

Я понимаю, что можно было реализовать, как угодно, но я не хотел отходить от тз.