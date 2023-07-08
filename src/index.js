import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
//react-bootstrap için öncelikle 2 paket kurulur
//(klasik bootstrap için gerekmez). Kurulum komutu aşağıdadır:
//npm install react-bootstrap bootstrap
//react-bootstrap kullanmak için aşağıdaki gibi import edilmelidir
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
