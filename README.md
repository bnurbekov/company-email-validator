# company-email-validator
Provides a fast company / work email validator by checking whether the email domain is in the free email provider list.

[![version](https://img.shields.io/npm/v/email-validator.svg?style=flat-square)]((http://npm.im/company-email-validator))
[![downloads](https://img.shields.io/npm/dm/email-validator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=company-email-validator&from=2015-08-01)


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

CompanyEmailValidator.isCompanyEmail("test@email.com"); // true

```

#### TypeScript

```typescript

import * as CompanyEmailValidator from 'company-email-validator';

CompanyEmailValidator.isCompanyEmail("test@email.com"); // true


```

## Contribute

Contributions welcome! Check the ``LICENSE`` file for more info.

## Meta

* batyrlan@utterly.app

Distributed under the unlicense public domain. See ``LICENSE`` for more information.

[https://github.com/bnurbekov/company-email-validator](https://github.com/bnurbekov/company-email-validator)
