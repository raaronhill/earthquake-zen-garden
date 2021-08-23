import * as React from "react";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {Feature, Properties} from "../services/Types";

interface DetailProperties {
  features: Feature[] | undefined,
  className?: string
}

const DetailUnstyled: React.FC<DetailProperties> = ({features, className}: DetailProperties) => {

  if (undefined === features) return (<div/>);

  const params: { id: string; } = useParams();
  const [detail, setDetail] = useState<Properties>();

  useEffect(() => {
    features.forEach((feature: Feature) => {
      if (params.id === feature.id) setDetail(feature.properties);
    });
  }, [features]);

  const renderTime = (ts: number | undefined): string => {
    if (undefined === ts) return "";

    const date: Date = new Date(ts);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }) + ", " + date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
  }

  if (undefined === detail) return (<div/>);

  return (<div className={className + " detail"}>
    <table className={"details"}>
      <thead>
      <tr>
        <th colSpan={2}>{detail.title}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>Title</th>
        <td>{detail.title}</td>
      </tr>
      <tr>
        <th>Magnitude</th>
        <td>{detail.mag}</td>
      </tr>
      <tr>
        <th>Time</th>
        <td>{renderTime(detail.time)}</td>
      </tr>
      <tr>
        <th>Status</th>
        <td>{detail.status}</td>
      </tr>
      <tr>
        <th>Tsunami</th>
        <td>{detail.tsunami}</td>
      </tr>
      <tr>
        <th>Type</th>
        <td>{detail.type}</td>
      </tr>
      </tbody>
    </table>
  </div>);
}

const Detail = styled(DetailUnstyled)`
  &.detail {
    margin: var(--primary--margin);
    
    table {
      margin: 0 auto;
      
      thead {
        th {
          font-size: 1.3rem;
          padding-bottom: var(--primary--gap--lg);
        }
      }
      
      th {
        text-align: left;
      }
      td {
        padding-left: var(--primary--gap);
      }
    }
    
   }
    `;
export {Detail};