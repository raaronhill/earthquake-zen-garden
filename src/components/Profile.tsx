import * as React from "react";
import styled from "styled-components";
import {ProfileData} from "../services/Types";

interface ProfileProperties {
  profile: ProfileData | undefined,
  className?: string
}

const ProfileUnstyled: React.FC<ProfileProperties> = ({
                                                        profile,
                                                        className
                                                      }: ProfileProperties) => {

  if(undefined === profile) return (<div/>);

  return (<div className={className + " profile"}>
    <div className={"title"}>Profile</div>
    <div className={"profile-image"}>
      <img src={profile.avatarImage} alt={"profile image"}/>
    </div>
    <div className={"profile-data"}>
      <div className={"label"}>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Phone</div>
        <div>Email</div>
        <div>Bio</div>
      </div>
      <div className={"data"}>
        <div>{profile.firstName}</div>
        <div>{profile.lastName}</div>
        <div>{profile.phone}</div>
        <div>{profile.email}</div>
        <div>{profile.bio}</div>
      </div>
    </div>
  </div>);
}

const Profile = styled(ProfileUnstyled)`
  &.profile {
    width: var(--profile--width);
    margin: var(--primary--margin);
    
    .title {
      font-size: 1.3rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: var(--primary--gap--lg);
    }
    
    .profile-image {
      display: inline-block;
      width: var(--profile--image--width);
      margin-right: var(--primary--gap);
      vertical-align: top;
      
      img {
        max-width: 100%;  
        height: auto; 
      }
    }
    
    .profile-data {
      width: var(--profile--data--width);
      display: inline-block;
      
      .label {
        width: var(--profile--data-label--width);
        font-weight: bold;
        margin-right: var(--primary--gap);
        display: inline-block;
        vertical-align: top;
        div {
          margin-bottom: var(--primary--gap--sm);
        }
      }
      
      .data {
        width: var(--profile--data-data--width);
        display: inline-block;
        div {
          margin-bottom: var(--primary--gap--sm);
        }
      }
    }
  }
`;
export {Profile};