const directory = [
  {
    id: 1,
    name: "root",
    type: "folder",
    directory: [
      {
        id: 2,
        name: "Folder 1",
        type: "folder",
        directory: [
          {
            id: 4,
            name: "File2.jsx",
            type: "file"
          }
        ]
      },
      {
        id: 3,
        name: "File1.json",
        type: "file"
      }
    ]
  }
];

export default directory;
