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
* By 08:55 [35 mins]
  * Updated __tests__/index.test.ts (integration) to define four sets of empty test blocks; one for each of the steps outlined in challenge.
  * For the first step, added a general 404 endpoint test, and added two specific positive outcome tests for the first step
* By 09:05 [45 mins]
  * Introduced server.ts with express dependency and updated integration test to use supertest, passing express app
  * Introduced src/services/exchangeRate.ts along with unit test spec src/services/exchangeRate.ts, with a single test expected to fail
  * Two integration tests and one unit test running, but all failing (as expected).
* Paused
* Resumed at 09:40
* By 10:00 [65 mins]; implemented the express routers/controller encapsulation for exchangeRates; two of the three integration tests now pass. TODO on step1 - exchange rate service and integrate with controller - all existing tests to pass.
* paused
* resumed at 16:30 - 25 minutes remaining
* By 16:38 [73 mins]; exchange rates service implemented, with a fixed USD to EUR exchangate rate and unit tests, and integrated with controller; all unit and integration tests now pass.
* By 16:49 [83 mins]; step 2 - extended integration tests for step 2, including adding additional validation error expectations
* By 17:10 [94 mins] step 2 - provided implementation for step 2 