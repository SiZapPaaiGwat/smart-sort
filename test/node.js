var smartSort = require('../dist/smart-sort')
var assert = require('assert')

describe('normal numbers', function() {
	it('should sort by number value', function() {
		var list = ['12', '22', '2', '10', '1']

		smartSort.naturalSort(list, true, 'asc')

		assert.equal('1,2,10,12,22', list.join(','))
	})
})

describe('contains empty', function() {
	it('should start with 3 when desc', function() {
		var list = ['3', '', '1']

		smartSort.naturalSort(list, true, 'desc')
		assert.equal('3', list[0])

		smartSort.naturalSort(list, true, 'asc')
		assert.equal('', list[0])
	})
})

describe('contains CJK characters', function() {
	it('should sort by number value as possible when desc', function() {
		var list = ['第12关', '第2关', '第1关']

		smartSort.naturalSort(list, true, 'desc')
		assert.equal('第12关', list[0])
		assert.equal('第2关', list[1])
		assert.equal('第1关', list[2])
	})

	it('should sort by number value as possible', function() {
		var list = ['第1关2', '第1关', '第1关3']

		smartSort.naturalSort(list, true, 'asc')
		assert.equal('第1关', list[0])
		assert.equal('第1关2', list[1])
		assert.equal('第1关3', list[2])
	})
})

describe('sort Array<JSONObject>', function() {
	it('should sort by the field orders', function() {
		var list = [
			{name: '第12关'},
			{name: '第1关'},
			{name: '第2关'},
		]

		list = smartSort.naturalSortBy(list, 'name', true, 'asc')

		assert.equal('第1关', list[0].name)
		assert.equal('第2关', list[1].name)
		assert.equal('第12关', list[2].name)
	})

	it('should sort by the field orders even some field value exist', function() {
		var list = [
			{name: '第2关'},
			{name: '第12关'},
			{name: '第1关'},
			{name: '第2关'},
		]

		list = smartSort.naturalSortBy(list, 'name', true, 'asc')

		assert.equal('第1关', list[0].name)
		assert.equal('第2关', list[1].name)
		assert.equal('第2关', list[2].name)
		assert.equal('第12关', list[3].name)
	})
})
