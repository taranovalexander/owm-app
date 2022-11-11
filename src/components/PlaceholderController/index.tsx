import React, { ReactNode, useEffect, useState } from "react";

interface Props {
  loading: boolean;
  placeholder: ReactNode;
  children: ReactNode;
  numberOfRows?: number;
  minTimeout?: number;
}

export const PlaceholderController: React.FC<Props> = ({
  loading,
  numberOfRows = 1,
  placeholder,
  minTimeout = 300,
  children,
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(loading);
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowPlaceholder(loading);
      }, minTimeout);
    } else {
      setShowPlaceholder(loading);
    }
  }, [loading, minTimeout]);
  return (
    <div>
      {
        showPlaceholder ? [...new Array(numberOfRows)].map((_, i) => i).map(() => <div key="">{placeholder}</div>) : children
    }
    </div>
  );
};
