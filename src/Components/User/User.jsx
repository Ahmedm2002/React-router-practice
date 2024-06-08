import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userId } = useParams();
  return (
    <div className="bg-teal-600 text-center text-2xl p-6 m-5 text-orange-300 rounded-2xl">
      Your User Id is: {userId}
    </div>
  );
}

export default User;
