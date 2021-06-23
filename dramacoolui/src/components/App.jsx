import { Route, Switch } from 'react-router-dom'
import Search from './Search'
import Drama from './Drama'
import Error from './Error'
import React, { useState } from 'react'

const App = () => {
    const [current, setCurrent] = useState({})

	return (
		<main>
			<Switch>
				<Route exact path='/'>
                    <Search setter={setCurrent}/>
                </Route>
				<Route path='/drama/:name'>
                    <Drama current={current}/>
                </Route>
                <Route component={Error} />
			</Switch>
		</main>
	)
}

export default App
