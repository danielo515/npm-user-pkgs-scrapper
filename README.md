
# Npm user packages scrapper

![Node](https://img.shields.io/node/v/npm-user-packages-scrapper.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/npm-user-packages-scrapper.svg?style=flat-square)](https://www.npmjs.com/package/npm-user-packages-scrapper)
[![Travis](https://img.shields.io/travis/danielo515/npm-user-packages-scrapper/master.svg?style=flat-square)](https://travis-ci.org/danielo515/npm-user-packages-scrapper)
[![David](https://img.shields.io/david/danielo515/npm-user-packages-scrapper.svg?style=flat-square)](https://david-dm.org/danielo515/npm-user-packages-scrapper)
[![Coverage Status](https://img.shields.io/coveralls/danielo515/npm-user-packages-scrapper.svg?style=flat-square)](https://coveralls.io/github/danielo515/npm-user-packages-scrapper)
[![npm](https://img.shields.io/npm/dt/npm-user-packages-scrapper.svg?style=flat-square)](https://www.npmjs.com/package/npm-user-packages-scrapper)

Small utility that scraps the packages of certain npm user. This means, packages publicly available created by the target user.
It was built specifically as a helper library for my port-folio. Funnily it scraps itself as part of the portfolio generation.

The scrapped information includes

- badges (if any)
- package name
- package specific url
- package description (basically all readme paragraphs)

# Usage

It only exports one function, that accepts an npm username as first parameter. 
The second optional parameter is a destination file where the scrapped information will be saved as a JSON file.

The function returns a promise that fulfills when scrap completes, with one of the following results: 

- If a destination parameter was provided, then the promise fulfills to the result of file saving.
- If a destination parameter was **not** provided then the promise fulfills to an array of packages information.