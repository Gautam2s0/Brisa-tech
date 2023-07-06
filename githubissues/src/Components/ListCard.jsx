import React, { useEffect, useState } from "react";
import { TbCircleDot } from "react-icons/tb";
import { BiMessageAlt } from "react-icons/bi";
import styles from "./Styles/Liscard.css";
let el = {
  url: "https://api.github.com/repos/octocat/Hello-World/issues/2683",
  repository_url: "https://api.github.com/repos/octocat/Hello-World",
  labels_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/2683/labels{/name}",
  comments_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/2683/comments",
  events_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/2683/events",
  html_url: "https://github.com/octocat/Hello-World/issues/2683",
  id: 1786129226,
  node_id: "I_kwDOABPHjc5qditK",
  number: 2683,
  title:
    '> Testing the API. I\'m trying to understand if, for the GH backend, "comments body" and "issue body" are the same. I mean, considering what I\'m looking through the API, they are not.',
  user: {
    login: "iron-eater",
    id: 3870334,
    node_id: "MDQ6VXNlcjM4NzAzMzQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/3870334?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/iron-eater",
    html_url: "https://github.com/iron-eater",
    followers_url: "https://api.github.com/users/iron-eater/followers",
    following_url:
      "https://api.github.com/users/iron-eater/following{/other_user}",
    gists_url: "https://api.github.com/users/iron-eater/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/iron-eater/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/iron-eater/subscriptions",
    organizations_url: "https://api.github.com/users/iron-eater/orgs",
    repos_url: "https://api.github.com/users/iron-eater/repos",
    events_url: "https://api.github.com/users/iron-eater/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/iron-eater/received_events",
    type: "User",
    site_admin: false,
  },
  labels: [],
  state: "open",
  locked: false,
  assignee: null,
  assignees: [],
  milestone: null,
  comments: 0,
  created_at: "2023-07-03T12:55:19Z",
  updated_at: "2022-07-03T12:55:19Z",
  closed_at: null,
  author_association: "NONE",
  active_lock_reason: null,
  body: '              > Testing the API. I\'m trying to understand if, for the GH backend, "comments body" and "issue body" are the same. I mean, considering what I\'m looking through the API, they are not.\r\n\r\n234234\r\n\r\n_Originally posted by @iron-eater in https://github.com/octocat/Hello-World/issues/1347#issuecomment-1618208459_\r\n            ',
  reactions: {
    url: "https://api.github.com/repos/octocat/Hello-World/issues/2683/reactions",
    total_count: 0,
    "+1": 0,
    "-1": 0,
    laugh: 0,
    hooray: 0,
    confused: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  },
  timeline_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/2683/timeline",
  performed_via_github_app: null,
  state_reason: null,
};

export const ListCard = ({}) => {
  const { title, updated_at, state, number, user } = el;
  const [display, SetDisplay] = useState("inline");
  //   getting day month and year from the give date
  let date = new Date();
  var arr = updated_at.split("-");
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month_index = parseInt(arr[1], 10) - 1;
  const day = arr[2].split("").splice(0, 2).join("");
  const year = arr[0];

  //   comparing given year and current year
  let CurrentYear = date.getFullYear();
  useEffect(() => {
    if (+year === CurrentYear) {
      SetDisplay("none");
    }
  }, []);
 

  return (
    <div className="issue-Card">
      <div className="issue-card-inner-div">
        <TbCircleDot className="circle" />
        <div className="issue-card-inner-div2">
          <p className="pTitle">{title}</p>
          <p className="secnod-p">
            <span className="spna">
              <span>{`#${number}`}</span>
              <span>{state}</span>
              <span>{` on ${months[month_index]} ${day},`}</span>
              <span style={{ display: display }}>{`${year}`}</span>
              <span>{` by `}</span>
              <a href="" className="anchorTag" style={{textDecoration:"none",marginLeft:".2%"}}>Unfaced85</a> 
            </span>
          </p>
        </div>
        <div className="comment">
          <BiMessageAlt />
          <p>{5}</p>
        </div>
      </div>
    </div>
  );
};
