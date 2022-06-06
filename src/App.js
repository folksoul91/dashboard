import "./components/styles.css";
import SideNav from "./components/SideNav";
import Reviews from "./components/Reviews";
import AvgRtg from "./components/AvgRtg";
import Sentiment from "./components/Sentiment";
import WebVisit from "./components/WebVisit";
import WebLayout from "./components/WebLayout";

function App() {
  return (
    <div className="container">
      <div className="main"></div>
      <div className="Nav">
        <SideNav />
      </div>
      <div className="Reviews">
        <Reviews />
      </div>
      <div className="AvgRtg">
        <AvgRtg />
      </div>
      <div className="SentAnalysis">
        <Sentiment />
      </div>
      <div className="web-visitors">
        <WebVisit />
      </div>
      <div className="web-layout">
        <WebLayout />
      </div>
    </div>
  );
}

export default App;
