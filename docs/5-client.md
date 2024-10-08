# Client npm package

> <a data-umami-event="Go to npm package" href="https://www.npmjs.com/package/stupidwebauthn-client" target="_blank">**stupidwebauthn-client <img width="20" src="https://static-production.npmjs.com/255a118f56f5346b97e56325a1217a16.svg"/>**</a>
>
> <span class="text--success">Public</span> • MIT License

```bash npm2yarn
npm install stupidwebauthn-client
```

## Code instructions

Add this as a global constant, available for use in any of your frontend's components.

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
const email = e.target.email.value;
await client.Register1EmailChallenge(email);
// send email
```

Run on opening at the validation link:

```ts
import queryString from "query-string";

const params = queryString.parse(location.search) as { c?: string };
// check if token is add to the url
if (!params.c) throw "Invalid email verification url provided";
// validating email
await client.Register2EmailVerify(params.c);
// email registered successfully
// creates an `swa_auth` cookie
```

### Register passkey

```ts
const res1 = await client.Register3PasskeyChallenge();
const res2 = await client.Register4PasskeyRegister(res1);
await client.Register5PasskeyVerify(res2);
// passkey authenticated
```

### Login

```html
<form>
  <input name="email" type="email" required />
</form>
```

On form submission:

```ts
const email = e.target.email.value;
const res1 = await client.Login1Challenge(email);
const res2 = await client.Login2Authenticate(res1);
await client.Login3Verify(res2);
// authenticated
// creates an `swa_auth` cookie
```

### Authentication

Check if the `swa_auth` cookie is valid

```ts
client
  .AuthValidate()
  .then(() => {
    // is authenticated
  })
  .catch((err) => {
    // navigate back to the login page
  });
```

### Authentication with csrf blocking

```ts
await client.AuthCsrfChallenge();

// Or any api call that uses the csrf validate middleware
await client.AuthCsrfValidate();
```

### Double Validation

```ts
// assuming that the client is authenticated
const res1 = await client.AuthDoubleCheck1Challenge();
const res2 = await client.AuthDoubleCheck2Authenticate(res1);
await client.AuthDoubleCheckVerify(res2);
// creates an `swa_doublecheck_auth` cookie that is valid for a minute
// Now make a request to your server which requires an extra check to validate
```

### Logout

```ts
await client.Logout();
// Navigate back to the login page
```

### Passkey invalidation

```ts
// Removes all passkeys, invalidates all session cookies and logs out
await AuthDoubleCheck123();
await AuthPanic();

// Removes current passkey and logs out
const res1 = await AuthDoubleCheck1Challenge();
const res2 = await AuthDoubleCheck2Authenticate(res1);
await AuthDeletePasskey3(res3);
```

### GDPR Request

```ts
// Data Request
await AuthDoubleCheck123();
await GdprData();

// Data Deletion Request (will delete the account after 30 days)
await AuthDoubleCheck123();
await GdprDeleteSet();

// Retract Deletion Request
await AuthDoubleCheck123();
await GdprDeleteUnset();
```
