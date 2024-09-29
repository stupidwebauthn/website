# Client npm package

> <a href="" target="_blank">**stupidwebauthn-client <img width="20" src="https://static-production.npmjs.com/255a118f56f5346b97e56325a1217a16.svg"/>**</a>
>
> <span class="text--success">Public</span> • MIT License

```bash npm2yarn
npm install stupidwebauthn-client
```

## Code instructions

```ts
const client = new StupidWebauthnClient();
```

### Register email address

```html
<form>
  <input name="email" type="email" required />
</form>
```

```ts
e.preventDefault();
const email = e.target.email.value;
client.Register1EmailChallenge(email).then(() => {
  // send email
});
```

Run on opening at the validation link:

```ts
import queryString from "query-string";

const params = queryString.parse(location.search) as { c?: string };
// check if step 3
if (params.c) {
  // validating email
  client.Register2EmailValidate(params.c).then(() => {
    // email registered successfully
  });
}
```

### Register passkey

```ts
client.Register3PasskeyChallenge().then((res) =>
  client.Register4AuthorizePasskey(res.challenge).then((res2) =>
    client.Register5PasskeyValidate(res2).then(() => {
      // passkey authenticated
    })
  )
);
```

### Login

```html
<form>
  <input name="email" type="email" required />
</form>
```

```
e.preventDefault();
const email = e.target.email.value;
client.Login1Challenge(email).then((res) => {
  // save these elsewhere
  const challenge: string = res.challenge
  const credentials: CredentialSelect[] = res.credentials
});
```

```ts
client.Register3PasskeyChallenge().then((res) =>
  client.Register4AuthorizePasskey(res.challenge).then((res2) =>
    client.Register5PasskeyValidate(res2).then(() => {
      // authenticated
    })
  )
);
```

### Authentication

```ts
client.AuthValidate().catch(() => {
  // navigate back to the login page
});
```

### Logout

```ts
client.Logout().then(() => {
  // navigate back to the login page
});
```
