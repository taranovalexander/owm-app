import { CITIES } from "./constants";
import { Tabs, ForecastLayout } from "./components";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="app">
      <div className="app-tabs">
        <Tabs activeTab={activeTab} titles={CITIES.map((city, index) => ({ index, element: city.name }))} onchange={(index) => setActiveTab(index)}>
          <ForecastLayout city={CITIES[activeTab]} />
        </Tabs>
      </div>
    </div>
  );
}

export default App;
