import React from "react";

const Users = () => {
  return (
    <div>
      <div>
        <form>
          <input type="text" name="name" className="border" /> <br />
          <input type="email" name="email" className="border" />
          <br />
          <input type="submit" value="Add User" className="border" />
        </form>
      </div>
    </div>
  );
};

export default Users;
