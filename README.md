# test-performance
A repo for performance test scripts for use with Load Impact and possibly other tools.

Some key commands:
 - `> k6 run performance.js` - Run locally
 - `> k6 cloud performance.js` - Run in cloud
 - `> k6 run --out cloud performance.js` - Run locally but report to cloud
 
# Continuous integration

To run tests form a Docker container or other continuously integated environment,
the `build.gradle` file have commands to start and stop an XP server.
 - **Note:** For these commands to work, XP_HOME must not be set. 
