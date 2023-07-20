import Groups from "./Groups";
import Preview from "./Preview";
import Process from "./Process";
import Types from "./Types";
import Teachers from "./Teachers";
import Banner from "./Banner";

function MainContent() {
  return (
    <main>
      <Preview />
      <Process />
      <Types />
      <Groups />
      <Teachers />
      <Banner />
    </main>
  );
}

export default MainContent;
