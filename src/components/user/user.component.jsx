import React, { useState } from "react";
import Card from "../card/card.component";

const User = () => {
  const [user, setUser] = useState(null);

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default User;
