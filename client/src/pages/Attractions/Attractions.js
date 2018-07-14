import React from 'react'

const Attractions = () => {
  return (
    <main>
            <div className="row">
                <div className="col s12">
                    <div className="card-panel hotels">
                            <div className="row">
                                    <div className="col s4">
                                        <h3>Activities</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6">
                                        <form>
                                            <div className="input-field">
                                                <input id="search" type="search" placeholder="Enter 'City and State' or '5 digit zip'" required></input>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col s2 offset-s4">
                                        <a className="dropdown-trigger filter" href="#!" data-target="dropdown1">
                                            Filter By:<i id="dropdown" className="material-icons">arrow_drop_down</i>
                                        </a>
                                        <ul id="dropdown1" className="dropdown-content">
                                            <li>
                                                <a href="#!">distance</a>
                                            </li>
                                            <li>
                                                <a href="#!">rating</a>
                                            </li>
                                            <li>
                                                <a href="#!">$$$</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="container">
                                            <div className="card-panel hotel"></div>
                                            <div className="card-panel hotel"></div>
                                            <div className="card-panel hotel"></div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </main>
  )
}
export default Attractions;
