# company-email-validator

<u>**Good News of the Lord Jesus Christ: https://youtu.be/t1BWSOVNm4A**</u>

Provides a fast company / work email validator by checking whether the email domain is in the free email [provider list](https://github.com/bnurbekov/company-email-validator/blob/main/free_email_provider_domains.js). Note: does not check SMTP servers and MX records currently (i.e. doesn't do deep validation).

[![version](https://img.shields.io/npm/v/company-email-validator.svg?style=flat-square)]((http://npm.im/company-email-validator))
[![downloads](https://img.shields.io/npm/dm/company-email-validator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=company-email-validator&from=2015-08-01)

Made with :heart: by a follower of Jesus Christ

## Installation
Install via NPM:

```bash
npm install company-email-validator

```

Install via yarn:

```bash
yarn add company-email-validator

```

## Usage

#### javascript

```javascript

var CompanyEmailValidator = require("company-email-validator");

CompanyEmailValidator.isCompanyEmail("test@utterly.app"); // true

CompanyEmailValidator.isCompanyEmail("test@gmail.com"); // false

```

#### TypeScript

```typescript

import * as CompanyEmailValidator from 'company-email-validator';

CompanyEmailValidator.isCompanyEmail("test@utterly.app"); // true

CompanyEmailValidator.isCompanyEmail("test@gmail.com"); // false

```

## Contribute

Contributions welcome! Check the ``LICENSE`` file for more info.

## Meta

* batyrlan@utterly.app

Distributed under the unlicense public domain. See ``LICENSE`` for more information.

[https://github.com/bnurbekov/company-email-validator](https://github.com/bnurbekov/company-email-validator)
