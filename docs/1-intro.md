# What is Stupid Webauthn?

A simple, [Open Source](https://github.com/stupidwebauthn/server/blob/main/LICENSE), web service that provides Passkey authentication for your websites.

1. Send emails to verify
1. Create passkeys to authenticate
1. \_\_

I found many alternative use Passkeys as a 2nd factor authentication on top of passwords, I'm trying to make this as simple as possible to get started: [Getting Started](/docs/getting-started)

## How would users interact with this?

### Registration

```mermaid
sequenceDiagram
    participant E as Email
    participant B as Web Browser
    participant N as StupidWebauthn Server
    participant S as Your Server

    Note over E, N: Authorize Email
    B->>N: User submits form containing their email address
    N-->>E: Link containing nonce
    E->>B: Clicks on the link
    B->>N: Check if the nonce is valid
    Note over N: Save user with Email

    N-->>B: Email Authorized
    Note over B, N: Authorize Passkey
    B->>N: User clicks on a button to register their passkey
    N-->>B: Trigger the registration in browser
    Note over B: Creates a passkey with Windows Hello,<br/>FaceID or Fingerprint sensor
    B->>N: Verifying the registration and Store passkey credentials
    N-->>B: Client now has auth JWT
```

### Login

```mermaid
sequenceDiagram
    participant B as Web Browser
    participant N as StupidWebauthn Server
    participant S as Your Server

    Note over B, N: Authorize Passkey
    B->>N: User submits form containing their email address
    N-->>B: List passkeys available for that user
    Note over B: Selects a passkey and validates it<br/> with Windows Hello,<br/>FaceID or Fingerprint sensor
    B->>N: Verifying the passkey
    N-->>B: Client now has auth JWT
```

### Your server authorization

```mermaid
sequenceDiagram
    participant B as Web Browser
    participant N as StupidWebauthn Server
    participant S as Your Server

    Note over B, N: User is already logged in with auth JWT
    B->>S: User goes to a restricted page
    S-->>N: Checks if the auth JWT is valid
    N->>S: User details (email)
    Note over S: Account is created if none is found<br/>and a role is assigned
    S-->>B: Restricted page is granted or not depending on<br/>the account role
```

While Stupid Webauthn handles the authentication, it does not handle authorization, this is instead left to your server to handle.