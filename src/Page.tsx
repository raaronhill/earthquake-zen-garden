import styled from 'styled-components';
import * as React from 'react';
import {Detail, Header, Home, Profile} from "./components";
import {Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import {Root} from "./services/Types";
import {getDataSource} from "./services/EarthquakeService";

interface PageProperties {
  dataSource: string
}

const PageUnstyled: React.FC<PageProperties> = ({dataSource}: PageProperties) => {
  const [siteData, setSiteData] = useState<Root>();

  useEffect(() => {
    getDataSource(dataSource).then(sourceData => {
      setSiteData(sourceData);
    })
  }, [dataSource]);

  return(<div>
    <Header site={siteData?.site} profile={siteData?.profile} />
    <Switch>
      <Route exact path="/">
        <Home homeData={siteData?.data} />
      </Route>
      <Route path="/profile">
        <Profile profile={siteData?.profile} />
      </Route>
      <Route path={"/detail/:id"}>
        <Detail features={siteData?.data.features} />
      </Route>
    </Switch>
  </div>)
}

const Page = styled(PageUnstyled)``;

export {Page};