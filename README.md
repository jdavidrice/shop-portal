# Shop Portal

<span align="center">

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/shop-portal)
[![Build Status](https://travis-ci.com/davidsaulrodriguez/shop-portal.svg?branch=main)](https://travis-ci.com/davidsaulrodriguez/shop-portal)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/shop-portal)](https://github.com/davidsaulrodriguez/shop-portal)

---

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/shop-portal)](https://github.com/davidsaulrodriguez/shop-portal/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/shop-portal)](https://github.com/davidsaulrodriguez/shop-portal/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/shop-portal)](https://github.com/davidsaulrodriguez/shop-portal/stargazers)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/shop-portal)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_shop-portal&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_shop-portal)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_shop-portal&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_shop-portal)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_shop-portal&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_shop-portal)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_shop-portal&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_shop-portal)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/shop-portal/latest/main)

</span>

Table of Contents

- [Description](#description)
- [Server Dependencies](#server-dependdencies)
- [Client Dependencies](#client-dependdencies)
- [Installation Requirements](#installation-requirements)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Supported Versions](#supported-versions)
- [Contributing](#contributing)
- [Bugs and Issues](#bugs-and-issues)
- [License](#license)

## Description

**Shop Portal** is an open source eCommerce platform powered by the MERN stack. It is designed to allow anyone to host their own online shop with ease.

Whether you are starting an online only business or bringing your brick and mortar shop to the digital world, Shop Portal will help you easily add and sell products in your online shop.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/shop-portal.git
cd shop-portal/
```

## Server Dependencies

**Project Dependencies**

- "@babel/core": "^7.13.13",
- "axios": "^0.21.1",
- "concurrently": "^6.0.0",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "helmet": "^4.4.1",
- "if-env": "^1.0.4",
- "jest": "26.6.0",
- "mongoose": "^5.12.2"

**Development Dependencies**

- "@babel/eslint-parser": "^7.13.10",
- "@babel/plugin-syntax-jsx": "^7.12.13",
- "@babel/preset-react": "^7.12.13",
- "@babel/runtime": "^7.13.10",
- "eslint": "^7.22.0",
- "eslint-config-prettier": "^8.1.0",
- "eslint-plugin-import": "^2.22.1",
- "eslint-plugin-jest": "^24.3.2",
- "eslint-plugin-jsx-a11y": "^6.4.1",
- "eslint-plugin-prettier": "^3.3.1",
- "eslint-plugin-react": "^7.23.1",
- "eslint-plugin-react-hooks": "^4.2.0",
- "nodemon": "^2.0.7",
- "prettier": "^2.2.1",
- "ts-node": "^9.1.1",
- "typescript": "^4.2.3"

## Client Dependencies

**Project Dependencies**

- "@material-ui/core": "^4.11.3",
- "@material-ui/icons": "^4.11.2",
- "@stripe/react-stripe-js": "^1.4.0",
- "@stripe/stripe-js": "^1.13.2",
- "@testing-library/jest-dom": "^5.11.10",
- "@testing-library/react": "^11.2.5",
- "@testing-library/user-event": "^12.8.3",
- "axios": "^0.21.1",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-scripts": "4.0.3",
- "web-vitals": "^1.1.1"

**Development Dependencies**

- "@babel/eslint-parser": "^7.13.10",
- "@babel/plugin-syntax-jsx": "^7.12.13",
- "@babel/preset-react": "^7.13.13",
- "@babel/runtime": "^7.13.10",
- "eslint": "^7.23.0",
- "eslint-config-prettier": "^8.1.0",
- "eslint-plugin-html": "^6.1.2",
- "eslint-plugin-import": "^2.22.1",
- "eslint-plugin-jest": "^24.3.2",
- "eslint-plugin-jsx-a11y": "^6.4.1",
- "eslint-plugin-prettier": "^3.3.1",
- "eslint-plugin-react": "^7.23.1",
- "eslint-plugin-react-hooks": "^4.2.0",
- "prettier": "^2.2.1",
- "ts-node": "^9.1.1",
- "typescript": "^4.2.3"

## Installation Requirements

You will need [NodeJS][nodejs] installed to use with this project.

You will also need the latest version of [MongoDB][mongodb] installed locally on your machine.

## Configuration

To configure this application for use, you should create a `.env` file with your database information. For convenience, a sample environment variable file can be found in the root directory with the name `.env.example`.

## Usage

**Getting Started**

To get started with this project, you'll want to install the required dependencies and the React frontend with this command:

```shell
npm run init:setup
```

## Development

### Starting the project

While working on and developing the source code, you can run a live development server (frontend and backend) with:

```shell
npm run start:dev:watch
```

To start just the backend MonogoDB server and work on the API, you can run:

```shell
npm run start:server
```

To start just the React frontend and work on the UI, you can run:

```shell
npm run start:client
```

### Formatting (Prettier)

It is suggested that you format your code with **Prettier** in order to make sure you code looks clean and consistent before you commit and publish it to GitHub. To do this, you can simply run:

```shell
npm run format
```
> This will format both your backend and frontend code with Prettier

### Linting (ESLint)

Linting is important! You can statically analyze your code to quickly find problems with **ESLint** by running:

**Lint check backend code**

```shell
npm run lint:check
```

**Lint check frontend code**

```shell
npm run lint:check:client
```

**Lint check backend and frontend code**

```shell
npm run lint:check:all
```

### Linting Autofix (ESLint)

This project supports ESLint autofixing to try and assist you with fixing any issues that ESLint may find in your code. To do this you can simply run:

**Lint fix backend code**

```shell
npm run lint:fix
```

**Lint fix frontend code**

```shell
npm run lint:client:fix
```

**Lint fix backend and frontend code**

```shell
npm run lint:fix:all
```
> Please keep in mind that this might not catch all issues/errors.

## Supported Versions

Below is a list of the currently supported versions of this software.


| Release |       Status       | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| :-----: | :----------------: | :-------------: | :--------------: | :-------------------: | :---------: |
| develop |      Unstable      |        -        |        -         |           -           |      -      |
|   v1    | :heavy_check_mark: |   2021-05-20    |    2021-10-20    |           -           | 2022-04-20  |
|   v2    |   :construction:   |   2022-04-01    |    2022-10-01    |      2023-04-01       | 2024-04-01  |

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/shop-portal/archive/main.zip
[mongodb]: https://www.mongodb.com/try/download/community
[nodejs]: https://nodejs.com
[support]: ./SLC.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/shop-portal/issues/new/choose
[license]: ./LICENSE
