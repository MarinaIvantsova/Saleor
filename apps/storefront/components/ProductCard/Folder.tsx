import React, { useState } from "react";
import classnames from "classnames";

export interface FolderProps {
  isCheckedField: boolean;
  childs: FolderProps[];
  name: string;
  id: number;
}

export interface FolderPropsWithActions extends FolderProps {
  changeStatus: (id: number, status: boolean) => void;
}

function Folder(props: FolderPropsWithActions): JSX.Element {
  const [expand, setExpand] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const { isCheckedField, childs, name, changeStatus, id } = props;

  const handleClick = (): void => {
    setExpand(!expand);
    setSelected(!isSelected);
  };

  const classNames = classnames({
    arrow: childs?.length,
    child: !childs?.length,
    active: isSelected,
  });
  const style = {
    marginLeft: "1.5rem",
  };

  return (
    <div>
      <span className={classNames} onClick={handleClick} />
      <input
        type="checkbox"
        checked={isCheckedField === true}
        onChange={() => changeStatus(id, !isCheckedField)}
      />
      <span style={style}>{name}</span>
      <div className="child">
        {expand &&
          childs?.map((node) => <Folder key={node.name} {...node} changeStatus={changeStatus} />)}
      </div>
    </div>
  );
}

export default Folder;
