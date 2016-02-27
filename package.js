Package.describe({
  name: 'rkstar:ddp-services',
  version: '0.3.0',
  // Brief, one-line summary of the package.
  summary: 'Allow easy setup of DDP connections between Meteor servers.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rkstar/meteor-ddp-services',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')

  api.use('ecmascript')
  api.use('underscore')

  api.addFiles('server.js', 'server')

  api.export('DDPServices')
})
