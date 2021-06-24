const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

app.get(':url([\\/\\w\\.-]*)', (req, res) => {
	const base = 'https://dramacool.lv'
	const url = req.params.url
	axios
		.get(base + url)
		.then(resp => resp.data)
		.then(data => res.send(data))
        .catch(e => console.log(e.message))
})

const PORT = process.env.PORT || 555

app.listen(PORT, () => {
    console.log(`Proxy running on port: ${PORT}`)
})
