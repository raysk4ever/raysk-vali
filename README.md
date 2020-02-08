
> All type of data validator for JavaScript.

#install

```
npm i raysk-vali --save

```

#import

```javascript
const Raysk = require("raysk-vali");

// or

const { Validate } = require("raysk-vali");

```

#Usage

```javascript
Raysk.Validate.isEmail("abc@example.com") // true
Raysk.Validate.isEmail("abcexample.com") // false

// more examples

Raysk.Validate.isUrl("www.example.com")
Raysk.Validate.isDate("12/12/2020")
Raysk.Validate.isEmpty("  ")
Raysk.Validate.isDigit(22)
Raysk.Validate.password("password")
Raysk.Validate.isAlphaChar("asd")
Raysk.Validate.isMobileNumber("+919999999999")
Raysk.Validate.isAlphaNumChar("asd12")
Raysk.Validate.isPANNumber("ABCPK4956K")
Raysk.Validate.isGSTNumber("27AAPFU0939F1Z0")
Raysk.Validate.isVehicleNumber("UT 32 DR 6423") // for indian vehicle number format
Raysk.Validate.isMongoObjectId("5e3a7141c65baa1c5d1dd92b")
```