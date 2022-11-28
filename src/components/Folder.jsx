import { useState } from "react";
import Directory from "./Directory";
import "../style/folder.css";

const Folder = ({ item, level }) => {
  const [expandDirectory, setExpandDirectory] = useState(false);
  const [enableInsert, setEnableInsert] = useState("");

  const insertItem = (value) => {
    item.directory.unshift({
      id: 5,
      name: value,
      type: enableInsert,
      directory: enableInsert === "folder" ? [] : undefined
    });
    setEnableInsert("");
  };

  return (
    <FolderContainer
      header={
        <Header
          expandDirectory={expandDirectory}
          setExpandDirectory={setExpandDirectory}
          item={item}
          setEnableInsert={setEnableInsert}
        />
      }
      enableInsert={enableInsert}
      insertElement={
        <InsertItem setEnableInsert={setEnableInsert} insertItem={insertItem} />
      }
      enableDirectory={item.directory.length > 0}
      directory={
        <Directory
          directoryData={item.directory}
          level={level + 1}
          expanded={expandDirectory}
        />
      }
    />
  );
};

// normal
// const Folder = ({ item, level }) => {
//   const [expandDirectory, setExpandDirectory] = useState(false);
//   const [enableInsert, setEnableInsert] = useState("");

//   const insertItem = (value) => {
//     item.directory.unshift({
//       id: 5,
//       name: value,
//       type: enableInsert,
//       directory: enableInsert === "folder" ? [] : undefined
//     });
//     setEnableInsert("");
//   };

//   return (
//     <div>
//       <Header
//         expandDirectory={expandDirectory}
//         setExpandDirectory={setExpandDirectory}
//         item={item}
//         setEnableInsert={setEnableInsert}
//       />
//       {enableInsert && (
//         <InsertItem setEnableInsert={setEnableInsert} insertItem={insertItem} />
//       )}
//       {item.directory.length > 0 && (
//         <Directory
//           directoryData={item.directory}
//           level={level + 1}
//           expanded={expandDirectory}
//         />
//       )}
//     </div>
//   );
// };

const FolderContainer = ({
  header,
  enableInsert,
  insertElement,
  enableDirectory,
  directory
}) => {
  return (
    <>
      {header}
      {enableInsert && insertElement}
      {enableDirectory && directory}
    </>
  );
};

const Header = ({
  expandDirectory,
  setEnableInsert,
  setExpandDirectory,
  item
}) => {
  return (
    <div className={"header"}>
      <div
        style={{
          cursor: "pointer",
          background: expandDirectory && "grey"
        }}
        onClick={() => setExpandDirectory((prev) => !prev)}
      >
        {`${expandDirectory ? "-" : "+"} ${item.name}`}
      </div>
      <div>
        <button
          onClick={() => {
            setEnableInsert("folder");
            setExpandDirectory(true);
          }}
        >
          Folder
        </button>
        <button
          onClick={() => {
            setEnableInsert("file");
            setExpandDirectory(true);
          }}
        >
          File
        </button>
      </div>
    </div>
  );
};

const InsertItem = ({ setEnableInsert, insertItem }) => {
  return (
    <div>
      <input
        onBlur={(e) =>
          e.target.value.trim() === ""
            ? setEnableInsert("")
            : insertItem(e.target.value.trim())
        }
        onKeyDown={(e) =>
          e.target.value.trim() !== "" &&
          e.keyCode === 13 &&
          insertItem(e.target.value.trim())
        }
        autoFocus
        type="text"
      />
    </div>
  );
};

export default Folder;
