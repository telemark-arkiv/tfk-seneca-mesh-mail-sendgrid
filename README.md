# tfk-seneca-mesh-mail-sendgrid
Microservice for sending mail via SendGrid

```
$ curl -d '{"role": "mail", "cmd":"send", "to":"bob@example.com", "from": "alice@example.com", "subject": "Hi, there", "text": "Greetings!"}' -v http://localhost:8000/act
```