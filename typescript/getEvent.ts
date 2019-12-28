import { parse, Component } from "ical.js"

// given an event string, get the date and pass it to the callback.
function placeEvent(event:string, setDateCallback : (date:string) => any)
{
  const jcalData = parse(event);
  const vcalendar = new Component(jcalData);
  const vevent = vcalendar.getFirstSubcomponent('vevent');
  const dstart : string = vevent.getFirstPropertyValue('dtstart');
  const dt : Date = new Date(Date.parse(dstart));
  const options = { timeZone: 'America/Los_Angeles',  
                    weekday:  'long', 
                    month:    'long', 
                    day:      'numeric', 
                    hour:     'numeric', 
                    minute:   'numeric',
                  };
  const prettyDate : string = dt.toLocaleString('en-US', options);
  setDateCallback (prettyDate);
}

// Get an ics calendar from url. 
// Call placeEvent to parse and pass on to callback.
function getEvent(icsUrl : string, setDateCallback : (date:string) => any) {
  fetch(icsUrl)
      .then(response => response.text() )
      .then(response => placeEvent(response, setDateCallback) )
      .catch(response => setDateCallback("Error fetching event date.") );
}

// per: https://stackoverflow.com/questions/23296094/browserify-how-to-call-function-bundled-in-a-file-generated-through-browserify
// and: https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript

(<any>window).getEvent = getEvent;
