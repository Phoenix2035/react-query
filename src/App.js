import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import './App.css'
import {HomePage} from './components/Home.page'
import {RQSuperHeroesPage} from './components/RQSuperHeroes.page'
import RqSuperHeroDetailPage from "./components/RQSuperHeroDetail.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";

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
                            <Link to='/super-heroes'>Super Heroes</Link>
                        </li>
                        <li>
                            <Link to='/parallel'>Parallel Queries</Link>
                        </li>
                        <li>
                            <Link to='/dynamic-parallel'>Dynamic Parallel Queries</Link>
                        </li>
                        <li>
                            <Link to='/dependent'>Dependent Queries</Link>
                        </li>
                        <li>
                            <Link to='/paginate-colors'>Pagination Colors</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                    <Route exact path='/super-heroes'>
                        <RQSuperHeroesPage/>
                    </Route>
                    <Route exact path="/super-heroes/:heroId">
                        <RqSuperHeroDetailPage/>
                    </Route>
                    <Route exact path="/parallel">
                        <ParallelQueriesPage/>
                    </Route>
                    <Route exact path="/dynamic-parallel">
                        <DynamicParallelPage heroIds={[1, 3]}/>
                    </Route>
                    <Route exact path="/dependent">
                        <DependentQueriesPage email="ali@gmail.com"/>
                    </Route>
                    <Route exact path="/paginate-colors">
                        <PaginatedQueriesPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
