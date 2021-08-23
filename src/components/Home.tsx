import * as React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Feature, HomeData} from "../services/Types";

interface HomeProperties {
  homeData: HomeData | undefined,
  className?: string
}

const HomeUnstyled: React.FC<HomeProperties> = ({homeData, className}: HomeProperties) => {
  
  if(undefined === homeData) return (<div/>);
  
  const renderRows = () => {
    let rows: JSX.Element[] = [];
    homeData.features.forEach((feature: Feature) => {
      const date: Date = new Date(feature.properties.time);
      rows.push(
          <tr>
            <td><Link to={"/detail/" + feature.id}>{feature.properties.title}</Link></td>
            <td>{feature.properties.mag}</td>
            <td>{date.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}, {date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})}</td>
          </tr>
      )
    })

    return rows;
  }

  return (<div className={className}>
    <div className={"home-title"}>{homeData.metadata.title}</div>
    <table className={"home-table"}>
      <thead>
      <tr>
        <th>Title</th>
        <th>Magnitude</th>
        <th>Time</th>
      </tr>
      </thead>
      <tbody>
      {renderRows()}
      </tbody>
    </table>
  </div>);
}

const Home = styled(HomeUnstyled)`
  & {
    margin: var(--primary--margin);
    
    .home-title {
      text-align: center;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: var(--primary--gap--lg);
    }
    
    table {
      margin: 0 auto;
    }
  }
  
`;
export {Home};