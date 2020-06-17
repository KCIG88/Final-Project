import React from "react";
import FutureGamesTable from "../components/FutureGamesTable";
import MyBetsTable from "../components/MyBetsTable";
import "../styles/Dashboard.css";


function Dashboard() {


  return (
  
<>

< FutureGamesTable className="dashboardContainerRight"/>
< MyBetsTable className="dashboardRightBottom"/>

</>
     
  );
};

export default Dashboard;