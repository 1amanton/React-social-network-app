import './App.css';
import SocHeader from "./components/header/SocHeader";
import SocSidebar from "./components/sidebar/SocSidebar";
import SocProfile from "./components/content/profile/SocProfile";
import Dialogs from "./components/content/dialog/Dialogs";
import {Routes, Route} from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import News from "./components/content/news/News";
import Music from "./components/content/music/Music";

const App = () => {
  return (
    <div className="App">

        <SocHeader/>
        <SocSidebar/>

        <div className="content">
            <Routes>
                <Route path="/" element={<SocProfile />} />
                <Route path="/dialogs" element={<Dialogs />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>


    </div>
  );
}

export default App;
