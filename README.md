# URL Shortner API by NODE JS, MongoDB

## Environment Variables

```javascript
PORT=YOUR_PORT_HERE
MONGO_URI=MONGODB_CONNECTION STRING
```

## API URI'S

```javascript
ADD URL
POST https://yourwebsite.com/url/
body : { url: "" }

REDIRECT LINK
GET https://yourwebsite.com/{shortID}

VIEW ANALYTICS
GET https://yourwebsite.com/url/analytics/{shortID}
```
