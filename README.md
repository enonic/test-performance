# test-performance

A repo for performance test scripts for use with Load Impact and possibly other tools.

There are a number of tests in the folder `src/main/k6` . Of these, `performance.js` is the primary test file.  The others just contain supporting tests.

#### Some key commands:

 - `> k6 run performance.js` - Run locally
 - `> k6 cloud performance.js` - Run in cloud with load applied from locations around the world.
 - `> k6 run --out cloud performance.js` - Run locally but report to cloud
 
#### Running tests in the cloud

In order to run tests in the cloud, an authorization token must be set.
Get a token by logging in to the Enonic account at Load Impact (https://app.loadimpact.com), selecting 'Integrations', and 'Use your token'.
The token should then be applied to an environment variable on the command line where you run the tests: **K6_CLOUD_TOKEN**

## Running tests with gradle

### Running locally

This project is set up to download the latest version of XP and run the tests on a contained instance of it.  To do so, it is important to note and do the following:

* `k6` must be installed.  (On Mac, it can be installed with brew).
* The tests are run by Gradle.  They need a totally clean environment to run in.  Therefore, it is recommended to run it from the root of the project, with a terminal where XP_HOME is **not** set.
* It is also important to clean the installation before running the tests.
* Finally, we must ensure all tasks in the test are run each time.  This can either be achieved by stopping or running without the gradle deamon, or using the `--rerun-tasks` option.  On Mac, there has been memory problems witht he gradle deamon, so killing it is the recommended way. 
```
>./gradlew clean
>./gradlew runPerformanceTests --rerun-tasks
```
 
### Continuous integration

Since the tests run so self-contained, it is easy to run the test in a contiuously integrated environment, more or just like running the tests locally.
The recommended way is to start a clean environment in some kind of container, like Docker, and run the tests there.

### GOTCHAs

* 