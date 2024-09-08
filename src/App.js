import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SecuredPage from "./components/SecuredPage";


function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <div>
       <h1 className="text-3xl py-2 font-bold text-center">Simple Auth System</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/secured"
            element={
              <ProtectedRoute auth={auth}>
                <SecuredPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;