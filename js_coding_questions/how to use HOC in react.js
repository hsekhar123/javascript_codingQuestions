// custom component for hoc in globally

import { useLocation, useNavigate } from "react-router-dom";
const HOC = (Component) => (
   function Myfunction (props)  {
        const navigate = useNavigate()
        const location = useLocation()
        return <Component navigate={navigate} location={location} {...props} />
    }
)
export default HOC ;

// ----using hoc in others components --

// 1. export default HOC(Login);
// 2. export default HOC(Signup);
// 3. export default HOC(Home);
// 4. export default HOC(About);
// 5. export default HOC(Contact);