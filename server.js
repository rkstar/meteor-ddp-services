let os = Npm.require('os'),
  services = Meteor.settings.ddpServices,
  hostname = (ip)=>{
    return (ip == '0.0.0.0') ? os.hostname() : ip
  }

DDPServices = {
  connect(service){
    return DDP.connect(this[service.toLowerCase()].url)
  }
}
_.keys(services).map((service)=>{
  let {ip, port} = services[service]
  DDPServices[service] = {
    url: `http://${hostname(ip)}:${port}`
  }
})