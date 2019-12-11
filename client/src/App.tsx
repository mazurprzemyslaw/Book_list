import React from "react";
import "./sass/index.scss";
import { NavigationComponent, BooksListComponent } from "./components/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationComponent />
      <BooksListComponent />
    </div>
  );
};

export default App;
