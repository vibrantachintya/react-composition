import "./styles.css";
import Directory from "./components/Directory";
import Data from "./data/directory";
// 10:45 pm

export default function App() {
  return <Directory directoryData={Data} />;
}
