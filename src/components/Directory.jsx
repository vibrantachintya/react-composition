import React from "react";
import Folder from "./Folder";
import File from "./File";

const Directory = ({ directoryData = [], level = 0, expanded = true }) => {
  return expanded ? (
    <div style={{ marginLeft: `${level * 10}px` }}>
      {directoryData.map((el) => {
        return el.type === "folder" ? (
          <Folder item={el} key={el.id} level={level} />
        ) : (
          <File item={el} key={el.id} level={level} />
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default Directory;
