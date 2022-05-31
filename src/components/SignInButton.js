import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function SignInButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      href="/login"
      size="lg"
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}>
      {isLoading ? "Loading…" : "Login"}
    </Button>
  );
}
