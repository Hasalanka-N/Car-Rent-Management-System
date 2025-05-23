import react from "react";
import '../styles/adminDB.css';
import AdminNav from "../components/AdminNav";

function AdminDashBoard(){
    return(
        <div className="admindash">
            <div className="admin-nav">
                <AdminNav/>
            </div>
            <div className="admincontaner">
                <div className="admin-profile">
                    <div className="ap-left">

                    </div>
                    <div className="ap-right">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminDashBoard;