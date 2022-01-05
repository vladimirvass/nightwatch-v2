# Nightwatch ui-tests

Testsuite for learning, educating and play around with new Nightwatch versions.

## Table of contents

- [Nightwatch ui-tests](#nightwatch-ui-tests)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Technologies](#technologies)
    - [Prerequisites](#prerequisites)
  - [Models](#models)
    - [Application model](#application-model)
    - [Configuration model](#configuration-model)
    - [Test model](#test-model)
  - [Execution](#execution)

// TODO: Finish it in more details

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Technologies

### Prerequisites

There are some basic prerequisites that are required to get started with Nightwatch

* Node.js: Nightwatch module is built on top of a Node.js, write 'node -v' into CLI in order to check you current version
* Node Package Manager (npm): The node’s package manager 
* Nightwatch: 'npm install --save-dev nightwatch'
* Selenium server: Installation from npm -> 'npm install selenium-server --save-dev'
  * You will only need it when testing against IE, if you wish to run tests in parallel in multiple browsers, or in a Selenium Grid. 
* Browser drivers
  * GeckoDriver:  'npm install geckodriver --save-dev'
  * ChromeDriver:  'npm install chromedriver --save-dev'

Additional utilities:
* Faker.js: 'npm i faker --save-dev' realistic fake data in Node.js and the browser
## Models

### Application model

### Configuration model

Nightwatch.js offers an in-built test runner which expects a JSON configuration file to be passed. The default configuration file is nightwatch.json which should be present in the project’s root directory. Alternatively, the nightwatch.conf.js configuration file can also be used and will be loaded from the root directory of the project for Nightwatch testing.

Note: If both the configuration files are present in the directory, the nightwatch.conf.js is given precedence as it provides us with a little more flexibility and can have comments in the file.

You can even declare specific test details under this configuration file for Nightwatch testing such as test environments, Selenium specific settings, etc. This is how a nightwatch.json configuration file looks like for testing with Selenium and JavaScript.


**src_folders**: This is directory indicates the location that contains the test suites

**output_folder**: This is directory indicates the location that contains and saves the test reports i.e. JUnit report files, XML reports, test logs, selenium log, screenshots, video logs, network logs, etc.

**globals_path**: This indicates the file path where all the global parameters used in the test suite are initialized. These are loaded and presented to the tests as a global property and can also be modified inside a test_settings environment.

**test_workers**: This property defines whether or not we want to run the test suites in parallel. If enabled is set to true it indicates that parallelization is allowed for the testing strategy.

**page_objects_path**: This indicates the location where the page object file is supposed to be loaded from.

**selenium**: This contains all the information and customization related to Selenium Server configuration. It additionally contains the server_path and webdriver.chrome.driver which indicates the path to the selenium server and the chrome driver respectively. Also, if the start_process parameter is set to true it points out the Selenium Server to start automatically.

**test_settings**: This contains all the important information related to tests and options to configure them. It allows us to define and customize the test environments.

### Test model

## Execution

* --test, -t ....... Runs a single test.
* --testcase ....... Used only together with --test. Runs the specified testcase from the current suite/module. 
* --group, -g ...... Runs a group of tests (i.e. a folder)
* --tag, -a ........ Only run tests with the given tag. (e.g. npm test -- --tag login)
  