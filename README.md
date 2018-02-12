# ReactComponent
Magento 2 module with webpack workflow to add a React component to Magento's frontent.

## Features
- Babel
- CSS Modules
- CSS Autoprefixing
- PostCSS
- Image Support with url-loader
- UglifyJs

## Installation
- Download this repository into your magento instance, in an app/code directory.
- Run `php bin/magento module:enable Rossmc/ReactComponent`
- Run `php bin/magento cache:flush`
- Run `php bin/magento setup:upgrade`

## Ussage
- `cd` into `Rossmc/ReactComponent/view/frontend`
- run `npm install`
- Develop your compnent in Rossmc/ReactComponent/view/frontend/src
- Run `npm start` from
- Place the React component whereever you wish with Layout XML as demonstrated in `Rossmc/ReactComponent/view/frontend/layout/default.xml`
- Clear Magento caches and check Magento frontend for your React component.
