// import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const domParser = require('dom-parser')

const Drama = ({ current }) => {
	const title = current
    const [sel, setSel] = useState(<></>);
	const url = title['url'].split('/').slice(3).join('/')

    useEffect(() => {
        axios
			.get(`http://localhost:555/${url}`, {
                headers: {
                    // "Access-Control-Allow-Origin": "*"
                    "content-type": "text/html"
                }
            })
			.then(resp => resp.data)
			.then(data => {
				const parser = new domParser()
				const doc = parser.parseFromString(data, 'text/html')
				// const sel = doc.querySelector(
				// 	'#single > div.content.right > div.details'
				// )
				const sel = doc.getElementById('single')
				// setSel(sel)
                console.log(sel)
			})
            .catch(e => console.log(e))
    }, [title, url])

	return (
		<div>
			<h1>
            {sel}
            </h1>
		</div>
	)
}

export default Drama
