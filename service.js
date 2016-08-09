'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Mail = require('seneca-mail')
const SendGrid = require('seneca-sendgrid-mail')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_MAIL_TAG || 'tfk-seneca-mail'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:mail, cmd:send', model: 'consume'}
    ]
  },
  sendgridOptions: {
    key: envs.TFK_SENECA_MAIL_SENDGRID_API_KEY || 'your-sendgrid-api-key'
  },
  isolated: {
    host: envs.TFK_SENECA_MAIL_HOST || 'localhost',
    port: envs.TFK_SENECA_MAIL_PORT || 8000
  }
}

const Service = Seneca(options.seneca)

if (envs.TFK_SENECA_QUEUE_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Mail)
Service.use(SendGrid, options.sendgridOptions)
