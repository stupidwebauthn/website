# Docker Compose

Here's an example of how to add the Stupid Webauthn Service to your vps.

```yml title="docker-compose.yml"
name: stupidwebauthn
services:
  auth:
    image: ghcr.io/stupidwebauthn/server:v1.8.8
    ports:
      - 127.0.0.1:3000:3000
    restart: unless-stopped
    environment:
      - SMTP_HOST=email-smtp.eu-north-1.amazonaws.com
      - SMTP_PORT=587
      - SMTP_SECURE=tls
      - SMTP_USERNAME=
      - SMTP_PASSWORD=
      - SMTP_FROM=noreply@example.com
      - EMAIL_VALIDATION_URL=https://example.com/register
      - WEBAUTHN_ORIGIN=https://example.com
      - COOKIE_DOMAIN=example.com
      - COOKIE_SECURE=true
      - COOKIE_SECRET=
      - DATABASE_PATH=./data/db.sqlite
      - EMAIL_TEMPLATE_PATH=data/email.html
    volumes:
      - ./data:/app/data
```

You can then proxy requests to the docker stupidwebauthn container with caddy whilst running your application on all other routes:

```text title="Caddyfile"
example.com {
	handle /auth/* {
		reverse_proxy http://localhost:3000
	}

	handle {
		reverse_proxy http://localhost:8000
	}
}
```
