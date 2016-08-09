# tfk-seneca-mesh-mail-sendgrid
Microservice for sending mail via SendGrid

## Messages handled
### ```role: mail, cmd: send```
Sends email
```javascript
const email = {
  to: 'bob@example.com', 
  from: 'alice@example.com',
  subject: 'Hi, there!',
  text: 'Greetings'
}
Seneca.act('role: mail, cmd: send', email, (error, data) => {})
```

From cli

```
$ curl -d '{"role": "mail", "cmd":"send", "to":"bob@example.com", "from": "alice@example.com", "subject": "Hi, there", "text": "Greetings!"}' -v http://localhost:8000/act
```