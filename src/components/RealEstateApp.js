import React from "react";
import { Route, Switch } from "react-router";

import RealEstateHeader from './RealEstate/RealEstateHeader'
import RealEstateHome from './RealEstate/RealEstateHome'

function RealEstateApp() {

    return(
        <div className="card-body">
            <RealEstateHeader/>

            <Switch>
                <Route path="/"             component={RealEstateHome} exact/>
                <Route path="/addContact"   component={RealEstateHome} exact/>
            </Switch>
        </div>
    )
}

export default RealEstateApp