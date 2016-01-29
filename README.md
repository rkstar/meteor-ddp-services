DDPServices
===============

Allow easy setup of DDP connections between Meteor servers.

## Package Dependencies
* meteor 1.2.1 (uses es2015 syntax)
* underscore
* ecmascript

## Usage
`meteor add rkstar:ddp-services`

This package will look for `Meteor.settings.ddpServices` defined in your `settings.json` file.  It expects the data to be formatted like this:
```javascript
{
  "ddpServices": {
    "server1": {
      "ip": "127.0.0.1",
      "port": "3000"
    },
    "server2": {
      "ip": "localhost",
      "port": "3030"
    },
    "server3": {
      "ip": "127.0.0.1",
      "port": "8080"
    },
    etc...
  }
}
```
You can use either an `ip` or a `hostname` for the `{"ip": "127.0.0.1"}` property.


## Methods

### DDPServices.connect(server_name)
You can get a DDP connection reference back to any of your pre-defined servers.
```javascript
let Server1 = DDPServices.connect('server1')
Server1.call('some_method_on_server1')

let myCollection = new Mongo.Collection('myCollection', {connection: Server1})
Server1.subscribe('myCollection')

// etc...
```

## Notes
This currently only works on the server because of the dependency on `Meteor.settings` integration.