This file contains an overview of the code added to wsealug.net for the
purpose of getting the next meeting date from https://gettogether.community
and displaying it on wsealug.net

You can see these changes at either https://gitlab.com/davecompton/wsealug.net
or https://github.com/dc25/wsealug.net .   A working version of the site that
includes this changes is at https://dc25.github.io/wsealug.net

The new functionality is contained in a file called getEvent.ts . This is a
typescript file in the /typescript directory that compiles to a javascript
file (getEvent.js) in the /assets/js directory.   To build it, type make in
the /typescript directory.   You will need to have make, typescript, and
browserify installed.

A single function, getEvent(), is exposed from getEvent.ts This function takes
two arguments: the url of an ics file to read and a callback to call with the
meeting date.   The meeting date is extracted from the ics data by using a
library from mozilla : ical.js ( https://github.com/mozilla-comm/ical.js/ ) .
This module is installed using npm under the /typescript directory.

The call to getEvent from wsealug.net is in the file next-event.html.  This is
a fairly minor change.  The function loadMeetupData() (also in
next-event.html) gets a new argument, the meeting date, and becomes the
callback passed to getEvent().   

These changes are published at https://dc25.github.io/wsealug.net .   I tested
on the following with no problems:

chrome (ubuntu)
firefox (ubuntu)
chrome (android phone)
firefox (android phone)
internet explorer (windows 10)

I think some of the javascript tools that I'm using may have some problems on
older or obscure browsers.   These can probably be fixed using polyfills but I
would like to see the problems before trying to anticipate problems that I
don't have a test case for.

So far only the meeting date is being updated.  Most of the time this is all
you need because everything else usually stays constant.   As things stand
now, if the meeting location changes, some editing of wsealug.net by hand will
be needed.   We could get the meeting summary and location from the ics data
but still would have to edit the address and link to the map by hand since
that information is not available in the ics data.
location does change, 
