import { Transition } from "react-transition-group";
import React, { ReactNode, useEffect, useState, useRef } from "react";
import "./styles.less";

interface Props {
  loading: boolean
  placeholder: ReactNode
  children: ReactNode
  numberOfRows?: number
  minTimeout?: number
}

const animationTime = 100;

const defaultStyle = {
  transition: `opacity ${animationTime}ms ease-in-out`,
  opacity: 1,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

type TransitionState = "entering" | "entered" | "exiting" | "exited";


export const PlaceholderController: React.FC<Props> = ({
  loading,
  placeholder,
  minTimeout = 100,
  children
}) => {
  const nodeRef = useRef(null);
  const [showPlaceholder, setShowPlaceholder] = useState(loading);
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowPlaceholder(false);
      }, minTimeout);
    } else {
      setShowPlaceholder(true);
    }
  }, [loading, minTimeout]);
  return (
    <div>
      <Transition in={showPlaceholder} nodeRef={nodeRef} timeout={animationTime}>
        {state => (
          <div className="placeholder-controller" style={{ ...defaultStyle, ...transitionStyles[state as TransitionState] }} ref={nodeRef}>
            {placeholder}
          </div>
        )}
      </Transition>
      {
        !showPlaceholder && children
      }
    </div>
  );
};
