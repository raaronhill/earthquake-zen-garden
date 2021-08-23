import styled from "styled-components";
import * as React from "react";
import {Link} from "react-router-dom";
import {ProfileData, SiteData} from "../services/Types";

interface HeaderProperties {
  site: SiteData | undefined,
  profile: ProfileData | undefined,
  className?: string
}

const HeaderUnstyled: React.FC<HeaderProperties> = ({site, profile, className}: HeaderProperties) => {

  return (<div className={className + " header"}>
    <div className={"header-logo"}>
      <Link to={"/"}><img src={site?.logoImage} alt={"Realtor.com"}/></Link>
    </div>
    <div className={"header-title"}>{site?.title}</div>
    <div className={"profile-link"}><Link to={"/profile"}>Welcome {profile?.firstName}</Link></div>
  </div>);
}

const Header = styled(HeaderUnstyled)`
  &.header {
    height: var(--header--height);
    background-color: var(--header--background-color);
    display: grid;
    grid-template-columns: 100px calc(100vw - 2 * 100px) 100px;
    grid-template-rows: var(--header--height);
    grid-template-areas: .header-logo, .header-title, .profile-link;
    
    .header-logo {
      a {
        display: inline-block;
        margin: var(--header--image--margin);
        width: var(--header--image--width);
        img {  
          max-width: 100%;  
          height: auto; 
        }
      }
    }
    
    .header-title {
      color: var(--header--title--color);
      font-size: var(--header--title--font-size);
      font-weight: var(--header--title--font-weight);
      text-align: center;
    }
    
    .profile-link {
      text-align: right;
      a {
        line-height: var(--header--line-height);
        margin-right: var(--header--profile--margin-right);
        color: var(--link--color);
        
        &:visited {
          color: var(--link--visited--color);
        }
      }
    }
  }
`;

export {Header};