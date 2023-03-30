import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";

function UserContainer(props) {
  const { userData, fetchUsers } = props;
  //   console.log("props ----", props);
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <>
      <h2>{userData.error}</h2>
      <h3>Something went wrong</h3>
    </>
  ) : (
    <div>
      <h2>Users list</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //   console.log("state", state);
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  //   console.log("dispatch", dispatch);
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
