import Groups from "./Groups";
import Preview from "./Preview";
import Process from "./Process";
import Types from "./Types";
import Teachers from "./Teachers";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Footer from "../Footer";

function MainContent() {
  return (
    <>
      <main>
        <Preview />
        <Process />
        <Types />
        <Groups />
        <Teachers />
        <Banner />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default MainContent;
