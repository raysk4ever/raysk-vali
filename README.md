
> All type of data validator for JavaScript.

#install

```
npm i raysk-vali --save

```

#import

```javascript
const Validate = require("raysk-vali");

// or

const { isEmail } = require("raysk-vali");

```

#Usage

```javascript
Validate.isEmail("abc@example.com") // true
Validate.isEmail("abcexample.com") // false

// more examples

Validate.isUrl("www.example.com")
Validate.isDate("12/12/2020")
Validate.isEmpty("  ")
Validate.isDigit(22)
Validate.password("password")
Validate.isAlphaChar("asd")
Validate.isMobileNumber("+919999999999")
Validate.isAlphaNumChar("asd12")
Validate.isPANNumber("ABCPK4956K")
Validate.isGSTNumber("27AAPFU0939F1Z0")
Validate.isVehicleNumber("UT 32 DR 6423") // for indian vehicle number format
Validate.isMongoObjectId("5e3a7141c65baa1c5d1dd92b")
```
##passing own regex

```javascript

	const { validate } = require("raysk-vali");
	validate('YOUR VALUE', /^YOUR REGEX$/) // return boolean

```


