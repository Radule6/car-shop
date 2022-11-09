const API = "https://422backend.cyclic.app";


const Admin = () => {
    const DisplayAdmin = () => (
        <div>
            <h1>Admin Page</h1>
        </div>
    ) 
    
    fetch(API + "/getCars").then(
        (value) => {
            value.json().then(
            (value) => {
                console.log(value);
                return DisplayAdmin;
            }
            )
        }
    )
}

export default Admin;