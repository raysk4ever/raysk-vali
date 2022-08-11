
## Regex based validator for JavaScript.

# install

```
npm i raysk-vali

```
or if you use yarn
```
yarn add raysk-vali

```

# Usage

```javascript
import Validate from 'raysk-vali'
```
OR
```javascript
import { isEmail } from 'raysk-vali'
```

# Example

```javascript
isEmail("abc@example.com") // true
isEmail("abcexample.com") // false

isUrl("www.example.com")
isDate("12/12/2020")
isEmpty("  ")
isDigit(22)
password("password")
isAlphaChar("asd")
isMobileNumber("+919999999999")
isAlphaNumChar("asd12")
isPANNumber("ABCPK4956K")
isGSTNumber("27AAPFU0939F1Z0")
isVehicleNumber("UT 32 DR 6423") // for indian vehicle number format
isMongoObjectId("5e3a7141c65baa1c5d1dd92b")
```


## Custom Regex
you can pass custom regex for searching.

```js
validate('YOUR VALUE', /^YOUR REGEX$/) : Boolean
```

```javascript
import { validate } from 'raysk-vali'

const isValid = validate('this is awesome.', /^awesome$/)
console.log(isValid)

```

# Used by
![Frappe Cloud](https://user-images.githubusercontent.com/33181670/184239434-1e83177b-559e-4ae3-9beb-9728bc3d7186.png)


