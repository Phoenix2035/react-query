import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import './App.css'
import {HomePage} from './components/Home.page'
import {RQSuperHeroesPage} from './components/RQSuperHeroes.page'
import RqSuperHeroDetailPage from "./components/RQSuperHeroDetail.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                        </li>
                        <li>
                            <Link to='/rq-parallel'>RQ Parallel</Link>
                        </li>
                        <li>
                            <Link to='/rq-dynamic-parallel'>RQ Dynamic Parallel</Link>
                        </li>
                        <li>
                            <Link to='/rq-dependent'>RQ Dependent Queries</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                    <Route exact path='/rq-super-heroes'>
                        <RQSuperHeroesPage/>
                    </Route>
                    <Route exact path="/rq-super-heroes/:heroId">
                        <RqSuperHeroDetailPage/>
                    </Route>
                    <Route exact path="/rq-parallel">
                        <ParallelQueriesPage/>
                    </Route>
                    <Route exact path="/rq-dynamic-parallel">
                        <DynamicParallelPage heroIds={[1, 3]}/>
                    </Route>
                    <Route exact path="/rq-dependent">
                        <DependentQueriesPage email="ali@gmail.com"/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
