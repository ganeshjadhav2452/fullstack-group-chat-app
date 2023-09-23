import React, { useEffect } from "react";
import "./ProfileSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersOfGroupApiCallHandler } from "../../reduxStore/slices/groupsSlice";
import PromotAdminButton from "./chatItems/PromotAdminButton";
import DeleteButton from "./chatItems/DeleteButton";

const GroupUser = () => {
  const dispatch = useDispatch();
  const { groupUsers, groupAdmins } = useSelector((state) => state.groups);
  console.log(groupAdmins, groupUsers);
  // Replace 'currentUserId' with the ID of the currently logged-in user
  const currentUserId = localStorage.getItem("userId");

  // Function to check if a user is an admin
  const isAdmin = (userId) => groupAdmins.includes(userId);
  useEffect(() => {
    dispatch(fetchUsersOfGroupApiCallHandler(localStorage.getItem("groupId")));
  }, []);
  return (
    <div className="parent">
      <h3>Group Members</h3>
      <ul className="ul">
        {groupUsers.map((profile) => {
          const isUserAdmin = isAdmin(Number(currentUserId));

          return (
            <li key={profile.id}>
              Name:<b>{profile.name}</b> Email:{profile.email}
              {profile["group-user-info"].isAdmin && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
                  </svg>
                </>
              )}
              {isUserAdmin && profile.id !== Number(currentUserId) && (
                <>
               
                  {!profile["group-user-info"].isAdmin && (
                    <PromotAdminButton userId={profile.id} />
                  )}
                  <DeleteButton userId={profile.id}/>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GroupUser;
