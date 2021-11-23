# equalExperts
ee-tech-interview-uk/currency-converter-promblem

* Version Number: `5b8d0fd276b6d288905ed2f63a934e057e8feca2`
* From: Warren Ayling @ WOZiTech Limited

# Goals
* Implement an End Point which can return the exchange rate from Euro to Dollars
* Extend your solution to convert US dollars to British Pounds
* Extend your solution to convert Euro to British Pounds
* Extend your solution to add 13.12 Euro to 99 British Pounds and return 185.64 CAD

# To test
```
npm test
```

# To run
```
PORT=<PORT NUMBER> npm local
```

## Get Exchange Rate from Euro to US Dollars
`curl `

## from US Dollars to GBP
`curl `

## from Euro Dollars to GBP
`curl `

## to calculate sum of Euro/GBP and return Candanien Dollars
`curl`


# Timeline
* Started challenge on Tuesday 23rd Nov 2021 at 08:20.
* By 08:40 [20 mins]:
  * Created git repo (public to allow sharing with EE easier)
  * npm init
  * Copied across project default files, like eslint rules and tsconfig
  * Introduced jest dependencies (including typescript)
  * Created `src` and `__test__` folders and placed in basic index.ts, index.spec.ts and index.test.ts
  * Add npm scripts for running the app locally and for running unit/integration and full test coverage
