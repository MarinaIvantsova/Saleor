import React from "react";
import Folder, { FolderProps } from "./Folder";
import folderData from "./filter.json";
import { useState } from "react";

export default function App(): JSX.Element {
  const style = {
    width: "300px",
    height: "150px",
  };

  const [data, setData] = useState<Array<FolderProps>>(folderData[1].value as Array<FolderProps>);
  const updatedData: FolderProps[] = [...data];

  const changeStatus = (id: number, status: boolean): void => {
    function findNode(root: FolderProps, id: number): FolderProps | undefined {
      if (root.id === id) {
        return root;
      }
      for (const child of root.childs) {
        const result = findNode(child, id);
        if (result) {
          return result;
        }
      }
    }

    function syncChildren(root: FolderProps, status: boolean): void {
      root.isCheckedField = status;
      for (const child of root.childs) {
        syncChildren(child, status);
      }
    }

    function syncParents(root: FolderProps): boolean[] {
      if (root.childs.length === 0) {
        return [root.isCheckedField];
      }
      const statuses: boolean[] = [];
      for (const child of root.childs) {
        statuses.push(...syncParents(child));
      }

      root.isCheckedField = statuses.every((v) => v);

      statuses.push(root.isCheckedField);
      return statuses;
    }

    const root = updatedData[0];
    syncChildren(findNode(root, id)!, status);
    syncParents(root);

    setData(updatedData);
  };

  return (
    <div style={style}>
      {data.map((el) => (
        <Folder key={el.name} changeStatus={changeStatus} {...el} />
      ))}
    </div>
  );
}
