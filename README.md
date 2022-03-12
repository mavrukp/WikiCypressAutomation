# WikiCypressAutomation

Prerequsities: Nodejs 14 or higher version should be installed in local machine

In project folder, run "npm install" and run "npm test"

if browser option is not set , test are run in electorn browser as default, if it would like to be run using other browsers like chrome and firefox, "--broswer chrome" or "--broswer firefox" option should be added at the end of the "npm test" command.

Test results are recorded as mp4 file under "\cypress\videos\" and screenshot of fail test results are saved under "\cypress\screenshots" folder.

PS: 1 test of "searchin selection test" fails becouse of a bug of searchin functionality.

PS: If would like to run in docker images, at first, cypress docker images should be pulled with "docker pull cypress/included:6.2.1" and then run " docker run -it -v $PWD:/e2e -w /e2e cypress/included:6.2.1". Browser option should be added at the end of this command as well.
