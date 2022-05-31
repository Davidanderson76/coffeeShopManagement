import React from "react";
import "./errorPage.css";
import LoadingButton from "../../components/ButtonLoadingState";

function Error() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>404 Error</h1>
        <h4>Page not found 🔎</h4>
        <p className="infoText">
          The link you clicked may be broken or the page may have been
          removed...
        </p>
        <LoadingButton>Take Me Home!</LoadingButton>
      </div>
    </div>
  );
}
export default Error;
