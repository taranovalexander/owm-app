import { ReactNode } from "react";
import classNames from "classnames";
import "./styles.less";

interface Props {
  children: ReactNode
  activeTab: number
  titles: Array<{ index: number, element: string }>
  onchange: (index: number) => void
}

export const Tabs: React.FC<Props> = ({ children, activeTab, titles, onchange }) => {
  return (
    <div className="tabs">
      <ul className="tabs-head">
        {
          titles.map((title, index) => (
            <li className="tabs-head-item" key={title.index}>
              <button role="button" title={title.element} className={classNames("tabs-head-item-button", { active: index === activeTab })} type="button" onClick={() => onchange(title.index)}>{title.element}</button>
            </li>
          ))
        }
      </ul>
      <div className="tabs-content">
        {children}
      </div>
    </div>
  );
};
