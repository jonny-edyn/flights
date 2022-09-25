const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/flights',(req, res) => {
    const options = {
        url: 'https://d0e8b7a2-30d8-4b05-b652-a392deffff21-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures',
        headers: {
            accept: 'application/json',
            'X-Cassandra-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiI0YTY0OTJjZi0xNGM1LTRkNjItOWI4MS0wYjU2YThlNmI0YjciLCJleHAiOjE2NjQxNDk4MjYsIm5iZiI6MCwiaWF0IjoxNjY0MTEzODI4LCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiYmM0NmMzNmItYzU1Ny00ZWIzLTk1MWEtODZhZDIwM2UyZmQyIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjY0MTEzODI2LCJzZXNzaW9uX3N0YXRlIjoiYWE4ZjQ3NWYtZjRjNC00YzZlLTgxZTYtYjgwNWVhZTcwZjYyIiwiYWNyIjoiMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6Ikpvbm55IEJvdHRvbWxleSIsInByZWZlcnJlZF91c2VybmFtZSI6Impvbm55QGVkeW4uY2FyZSIsImdpdmVuX25hbWUiOiJKb25ueSIsImZhbWlseV9uYW1lIjoiQm90dG9tbGV5IiwiZW1haWwiOiJqb25ueUBlZHluLmNhcmUifQ.n1QQSBKb6RfSlQRrZ5QfGeR8R92-_CrA_jrPzvm5GJ7Up7dssOGfpqNCQfHhIajj5MNwOhbahMGlhILpc4gcBou-JJs8QRywM8CELPN8CRB0ePG227qPenJSZGll1CoUGPmSFmaeP67sGrnCn6osLAAzzUHcmJryRO3_S-at--TaqfM_TYCUgw7GmikQz9A8H9Cn4iW-num_naUYLdkmzcCkgUIlLmqhdS_jQEQx-AaMRL7_ZiDPbFokZJnlLoEI0B6OBG5_mzYSOyidyzcbbLwdu9Fl5K7o5uzonLENg3G6cJMtJd8mSg6QIWsVHLpE38KqBB4S-aJ1obd2HYXVpA'
        }
}

    axios.request(options).then(response => {
    console.log(response.data)
    res.json(response.data)
}).catch(error => {
    console.log(error)
})
})

app.listen(PORT, () => console.log('running on port' + PORT))
