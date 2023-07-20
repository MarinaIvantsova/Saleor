import Groups from "./Groups";
import Preview from "./Preview";
import Process from "./Process";
import Types from "./Types";
import Teachers from "./Teachers";

function MainContent() {
  return (
    <main>
      <Preview />
      <Process />
      <Types />
      <Groups />
      <Teachers />
    </main>
  );
}

export default MainContent;
