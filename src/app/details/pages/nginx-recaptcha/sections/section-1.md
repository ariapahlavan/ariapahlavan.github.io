# Intro

Nginx has many useful modules that you can take advantage of, and we will
use `auth_request` module of Nginx to perform reCAPTCHA verification before
proxy passing requests to their corresponding back-end service.

# Prerequisites
1. Your Nginx must include the `auth_request` modules 

You first need to make sure that your NGINX is compiled with the 
`with-http_auth_request_module` configuration option. 
You can run this command mentioned in the [Nginx docs][1] to verify it:
```bash
$ nginx -V 2>&1 | grep -- 'http_auth_request_module'
```

2. Your front-end app must include the generated reCAPTCHA token
in the request

3. You need a back-end to perform reCAPTCHA verification

This article assumes that you have an endpoint to verify the reCAPTCHA 
token. We will call that endpoint `/api/verification/recaptcha`, but it can be anything.
Once the endpoint [verifies the user's response][2], it must either return a `200` status
code if the verification was successful, otherwise a `401` status code.

# Setup

The first step is to create a location for your verification endpoint:

```Nginx
location /api/verification/recaptcha {
    # proxy pass to your verification endpoint
}
```

Next you need to verify the request using your reCAPTCHA verification endpoint:

```Nginx
server {
    # ...
    
    auth_request /api/verification/recaptcha
    
    # ...
}
```

> Note that the `auth_request` usage is inside the `server` block of your Nginx configs

That's it! 🥳

Since your endpoint returns a `401` if the verification was successful, `auth_request`
module handles that as failure, so it will not proxy pass the original request to the
corresponding service.

# High level flow diragram

The diagram below shows high level flow of reCAPTCHA protects your endpoints from bots. 🤖

<div class="svg-container">
  <img style="max-width: 800px" src="/assets/articles/images/recaptcha-flow.svg" alt="recaptcha verification flow">
</div>

1. As you can see, as soon as a user is done interacting with your page and submits a form,
your front-end app will retrieve a generated token from Google. 

2. Then your app will make a http call to your back-end APIs with the reCAPTCHA token.

3. Next, the `auth_request` module in Nginx will proxy pass the request to your reCAPTCHA
verification endpoint.

4. At this point, your reCAPTCHA verification endpoint will make a call to Google to
verify the token generated based on the user's response. 

5. Finally, based on the response status from your reCAPTCHA verification endpoint,
Nginx will either let the client request through or will reject it.


[1]: https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-subrequest-authentication/
[2]: https://developers.google.com/recaptcha/docs/verify
