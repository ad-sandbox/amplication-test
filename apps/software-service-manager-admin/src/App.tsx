import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServiceList } from "./service/ServiceList";
import { ServiceCreate } from "./service/ServiceCreate";
import { ServiceEdit } from "./service/ServiceEdit";
import { ServiceShow } from "./service/ServiceShow";
import { AccessPointList } from "./accessPoint/AccessPointList";
import { AccessPointCreate } from "./accessPoint/AccessPointCreate";
import { AccessPointEdit } from "./accessPoint/AccessPointEdit";
import { AccessPointShow } from "./accessPoint/AccessPointShow";
import { DeveloperList } from "./developer/DeveloperList";
import { DeveloperCreate } from "./developer/DeveloperCreate";
import { DeveloperEdit } from "./developer/DeveloperEdit";
import { DeveloperShow } from "./developer/DeveloperShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SoftwareServiceManager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Service"
          list={ServiceList}
          edit={ServiceEdit}
          create={ServiceCreate}
          show={ServiceShow}
        />
        <Resource
          name="AccessPoint"
          list={AccessPointList}
          edit={AccessPointEdit}
          create={AccessPointCreate}
          show={AccessPointShow}
        />
        <Resource
          name="Developer"
          list={DeveloperList}
          edit={DeveloperEdit}
          create={DeveloperCreate}
          show={DeveloperShow}
        />
      </Admin>
    </div>
  );
};

export default App;
