var smartSort = require('../dist/natural-sort').naturalSort

var list = [
	'2',
	'',
	'第',
	'第3关3',
	'关卡101',
	'关卡14',
	'第1关2',
	'关卡2',
	'关',
	'第1关1',
	'1',
	'关卡11',
	'第2关2',
	'3',
	'关卡1'
]

smartSort(list, true, 'desc')

smartSort(list, true, 'asc')
