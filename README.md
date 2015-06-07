# interpolate.js
simple interpolate string


## Install

```
npm install interpolatejs
```
or
```
bower install interpolate.js
```

## Use

include script on page, or require on node.js

```javascript
// lines params
interpolate('?, ?', 'Hello', 'World');

// or 
'?, ?'.format('Hello', 'World');  // => 'Hello, World'

// ignore "?"
'?, ?/'.format('Hello', 'World');  // => 'Hello, ?'
```

js object
```javascript
'${val + 123}'.format({val: 123}) // =>  '246'

// deep
'${val.val.val}'.format({val: {val: {val: 2} } }) // =>  '2'
```

## Test
```
npm test
