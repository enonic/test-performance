# test-performance

A repo for performance test scripts for use with Load Impact and possibly other tools.

There are a number of tests in the folder `src/main/k6` . Of these, `performance.js` is the primary test file.  The others just contain supporting tests.

#### Some key k6 commands:

 - `> k6 run <test.js>` - Run locally
 - `> k6 cloud <test.js>` - Run in cloud with load applied from locations around the world.
 - `> k6 run --out cloud <test.js>` - Run locally but report result to cloud
 
#### Running tests in the cloud

In order to run tests in the cloud, an authorization token must be set.
Get a token by logging in to the Enonic account at Load Impact (https://app.loadimpact.com), selecting 'Integrations', and 'Use your token'.
The token should then be applied to an environment variable on the command line where you run the tests: **K6_CLOUD_TOKEN**

This token is also needed in order to report the results to the cloud.

## Running tests with gradle

### Running locally

This project is set up to download the latest version of XP and run the tests on a contained instance of it.  To do so, it is important to note and do the following:

* **`k6` must be installed.**
  * Docker: `docker pull loadimpact/k6`
  * Linux: Using apt-get:
    * ```
         sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
         echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list
         sudo apt-get update
         sudo apt-get install k6
      ```
  * Mac: `> brew install k6`
  * Windows: Download the k6 installer: https://dl.bintray.com/loadimpact/windows/k6-v0.25.0-amd64.msi
* **The environment must be clean.**
  * This can happen, either by running with no XP_HOME set, in which case the test will set it to the local folder and run the test there, or by setting XP_HOME to a folder clean folder.
  * If XP_HOME is set to an existing project, the project may be messed up and there is no guarantee the tests will run properly.
  * If the tests are rerun, use `> ./gradlew clean` to delete the results from the last test.
* **Ensure all tasks in the test are run each time.**  There are two ways:
  * Stopping or in some other way, run without the gradle deamon
  * Use the `--rerun-tasks` gradle option 
    * `> ./gradlew runPerformanceTests --rerun-tasks`
 
### Continuous integration

Since the tests run so self-contained, it is easy to run the test in a contiuously integrated environment, more or just like running the tests locally.
The recommended way is to start a clean environment in some kind of container, like Docker, and run the tests there.

## Analyzing tests

The k6 tool reports a large set of stats on the command line when it finishes with a test.
These statistics should be monitored for changes from run to run, to detect performance issues.
The best way to do this, is using the thresholds, like it has been done in this project (see performance.js, line 15-30).
After running test tests 10-20 times, you get a feel for standardized values.  Set the thresholds slightly above this.

Tests that are run in the cloud, or where the results have been uploaded to the cloud, may be analyzed in the Load Impact web-UI: https://app.loadimpact.com
The web-UI has a more extensive analysis of tests, discovering performance limits and suggest multiple reasons for what is going on when the performance is not as expected. 
