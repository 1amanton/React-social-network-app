import './App.css';
import SocHeader from "./components/header/SocHeader";
import SocSidebar from "./components/sidebar/SocSidebar";
import SocProfile from "./components/content/profile/SocProfile";

const App = () => {
  return (
    <div className="App">

        <SocHeader/>
        <SocSidebar/>
        <SocProfile/>

    </div>
  );
}

export default App;
