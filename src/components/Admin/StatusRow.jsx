import React from "react";
import { useState } from "react";
import { Select } from "flowbite-react";
import UpdateRequestStatus from "../Service/UpdateRequestStatus";

const StatusRow = (props) => {
  const option = ["Accepted", "Pending", "Decline"];
  let session = document.cookie.match(/session_key=([^;]*)/);
  const [Status, setStatus] = useState(props.status);

  const handleStatus = (event) => {
    setStatus(event.target.value);
    if (session == null) {
      navigate("/");
    }
    else UpdateRequestStatus(session,props.requestId,event.target.value);
  };

  return (
    <div>
      <Select
        id="status"
        name="status"
        className="w-full rounded"
        value={Status}
        onChange={handleStatus}
      >
        {props.status && (
          <option disabled value="">{`Current Status: ${props.status}`}</option>
        )}
        {option.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default StatusRow;
