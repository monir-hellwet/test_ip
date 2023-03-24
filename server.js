const express = require('express');
const port = 5000
const app = express()
function getClientIp (req) {
    const forwardedFor = req.headers['x-forwarded-for']
    if (forwardedFor) {
      const ips = forwardedFor.split(',')
      return ips[0].trim()
    } else {
      return req.ip
    }
  }

app.get('/', (req, res)=>{
    res.send("run server")
//     const clientIp = getClientIp(req)
//   res.send(`Your IP address is: ${clientIp}`)
})
app.get('/check', (req, res)=>{
    const clientIp = getClientIp(req)
  res.send(`Your IP address is: ${clientIp}`)
})

app.listen(port, () => {
    console.log('Running Server Done', port)
  })
  