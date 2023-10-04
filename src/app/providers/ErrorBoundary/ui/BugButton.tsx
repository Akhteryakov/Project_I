/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from "react";
import { AppButton } from "shared/ui/AppButton";

export const BugButton = () => {
  const [testError, setTestError] = useState(false);

  const onThrow = () => setTestError(true);

  useEffect(() => {
    if (testError) throw new Error("test error");
  }, [testError]);

  return (
    <div>
      <AppButton onClick={onThrow}>Test Error</AppButton>
    </div>
  );
};
