# building-addresses-app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

This project is the front end app for, http:/building-address.ucsc.edu. See http://https://github.com/peterm95018/building-address-api for the ExpressJS app that powers the backend and API.

UCSC added street names in September 2010. In 2015 all buildings, received official street addresses. 

Building names and common names change over time. Open spaces and parking lots need to have addresses for Clery reporting.

How do we teach student techs that Frida Kahlo Apartments is also known as Oakes College Residence A11 12 aka 7407?

How does a Police incident report know that parking lot 140 is aka 400 Foundry Road?

We're working on a MEAN stack app and API that uses authoritative CAAN sources, OpenStreetMaps and our building addresses to present a "cross walk" app that filters records and provides basic locative info.


Here's the home screen shot.
<img src="Screen Shot 2016-03-29 at 1.57.16 PM.png" alt="screen shot home page">

Here's a screen shot of the list view with filtering.
<img src="Screen Shot 2016-03-29 at 1.57.35 PM.png" alt="screen shot list view">

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## To Do
Review login process 

