const os = Npm.require('os'),
  services = Meteor.settings.ddpServices || null,
  hostname = (ip)=>{
    return (ip == '0.0.0.0') ? os.hostname() : ip
  }

DDPServices = {
  connect(service){
    const slc = service.toLowerCase(),
      ddps = (slc) ? this[slc] : null
    return (!_.isNull(ddps) && _.isObject(ddps)) ? DDP.connect(ddps.url) : null
  }
}
if( !_.isNull(services) && _.isObject(services) ){
  _.keys(services).map((service)=>{
    let {ip, port} = services[service]
    DDPServices[service] = {
      url: `http://${hostname(ip)}:${port}`
    }
  })
}