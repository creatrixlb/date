# installation

```js

yarn add @creatrix/date

OR 

npm i @creatrix/date

```

# example

```js
import {isDate} from '@creatrix/date';
const fromformat='YYYYMMDDHHmmss'; <!-- DEFAULT >
const const isddate=isDate(`20211109121212`,fromformat); <!-- return true-->
const const isddate=isDate(`DATE`,fromformat); <!-- return false-->
```

```js
import {toDate} from '@creatrix/date';
const toformat='DD MMMM YYYY hh:mm a'; <!-- DEFAULT >
const fromformat='YYYYMMDDHHmmss'; <!-- DEFAULT >
const mytitle=toDate(`20211109121212`,toformat,fromformat); <!-- result: ۱ -->
```