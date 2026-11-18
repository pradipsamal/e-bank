import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import DashBoard from "./pages/DashBoard";
import Accounts from "./components/Accounts/Accounts";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Debit from "./components/Debit/Debit";
import Credit from "./components/Credit/Credit";
import { ToastContainer } from "react-toastify";
import Transaction from "./components/transactions/Trasaction";
import DeleteAccount from "./components/DeleteAccount/DeleteAccount";
import AdminLogin from "./pages/AdminLogin";


function App() {
  return (
    <>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<AdminLogin  />} />
          <Route path="/layout" element={<Layout />}>
            {/* <Route path="" element={<DashBoard />} /> */}
            <Route path="" element={<Accounts />} />
            <Route path="createAccount" element={<CreateAccount />} />
            <Route path="deleteaccount" element={<DeleteAccount />} />
            <Route path="debit" element={<Debit />} />
            <Route path="credit" element={<Credit />} />
            <Route path="trasaction" element={<Transaction />} />
          </Route>
        </Routes>

        <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;