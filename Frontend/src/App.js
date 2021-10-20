import "./App.css";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import {Route} from "react-router-dom";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import { SignupPage } from "./Components/SignupPage/SignupPage";
import { Places } from "./Components/Places/Places";
import { SearchPlaces } from "./Components/SearchPlaces/SearchPlaces";
import Users from "./Components/Users/Users";
import ShareExperience from "./Components/ShareExperience/ShareExperience";



const App=()=> {
  return (
    <div className="home">
    <Route exact path="/" >
      <LandingPage />
      </Route>
      <Route exact path="/Login" >
    <LoginPage />
    </Route>
      <Route exact path="/Signup" >
    <SignupPage />
    </Route>
      <Route exact path="/Places" >
    <Places />
    </Route>
      <Route exact path="/Searchplaces" >
    <SearchPlaces />
    </Route>
      <Route exact path="/Users" >
    <Users />
    </Route>
      <Route exact path="/Shareexperience" >
    <ShareExperience />
    </Route>
    </div>
  );
}

export default App;
