# smart-sort

sort Array in a natural way

## Native sort

```js
['a2', 'a11', 'a1'].sort()
// ["a1", "a11", "a2"]
```

Generally, we want ['a1', 'a2', 'a11'].And this is what our library will do it for you.

## API

### SmartSort.naturalSort(list, [caseInsensitive = true], [order = 'desc'])

sort Array<String>, **the original list will be affected**

### SmartSort.naturalSortBy(list, field, [caseInsensitive = true], [order = 'desc'])

sort Array<Object>, **the original list will not be affected**.use the return list

## Module support

AMD / CommonJS / UMD

## IE Support

IE9+ / NodeJS

**IE < 9 brwoser needs `es5-shim`**
