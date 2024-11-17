# Linux

## Requirements

- Linux VPS
- Bun https://bun.sh/
- Sqlite installed

## Installation

Run this in your vps.

```sh
# Git clone
git clone --branch v1.8.8 --depth 1 https://github.com/stupidwebauthn/server.git stupidwebauthn
cd stupidwebauthn

# Install dependencies
bun install --frozen-lockfile

# Create systemd service
sudo vim /lib/systemd/system/stupidwebauthn.service
```

```text title="/lib/systemd/system/stupidwebauthn.service"
[Unit]
Description=Stupid Webauthn
After=network.target

[Service]
Type=simple
User=ubuntu
Environment=SMTP_HOST=email-smtp.eu-north-1.amazonaws.com
Environment=SMTP_PORT=587
Environment=SMTP_SECURE=tls
Environment=SMTP_USERNAME=
Environment=SMTP_PASSWORD=
Environment=SMTP_FROM=noreply@example.com
Environment=EMAIL_VALIDATION_URL=https://example.com/register
Environment=WEBAUTHN_ORIGIN=https://example.com
Environment=COOKIE_DOMAIN=example.com
Environment=COOKIE_SECURE=true
Environment=COOKIE_SECRET=
Environment=DATABASE_PATH=./data/db.sqlite
Environment=EMAIL_TEMPLATE_PATH=data/email.html
WorkingDirectory=/home/ubuntu/stupidwebauthn
ExecStart=bun run start
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

```
sudo systemctl daemon-reload
sudo systemctl start stupidwebauthn
```
