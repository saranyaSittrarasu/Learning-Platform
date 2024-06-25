import { Link,Outlet } from "react-router-dom";
export const Courses=()=>
    {
       
        return<> <div>Courses Page</div>
        <nav>
        <Link to="frontend" >Front-end Course</Link>
        <Link to="backend" >Back-end Course</Link>
      </nav>
      <Outlet/>
      </>
    }