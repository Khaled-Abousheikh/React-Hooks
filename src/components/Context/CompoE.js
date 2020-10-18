import React, { useContext } from "react";
import CompoF from "./CompoF";
import { UserContext, ChannelContext } from "../../App";

function CompoE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <CompoF />
      {user} - {channel}
    </div>
  );
}

export default CompoE;
