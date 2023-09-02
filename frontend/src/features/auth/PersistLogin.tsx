import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useRefreshMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { selectCurrentToken } from "./authSlice";

const PersistLogin = () => {

    const [persist] = usePersist();
    const token = useSelector(selectCurrentToken);
    const effectRan = useRef(false);

    const [trueSuccess, setTrueSuccess] = useState(false);

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
    }] = useRefreshMutation();

    useEffect(() => {

        if (effectRan.current === true || process.env.NODE_ENV !== "development") { // React 18 Strict Mode

            const verifyRefreshToken = async () => {
                //console.log("verifying refresh token")
                try {
                    //const response = 
                    await refresh("").unwrap();
                    //const { accessToken } = response.data
                    setTrueSuccess(true);
                }
                catch (err) {
                    
                }
            }

            if (!token && persist) verifyRefreshToken()
        }

        return () => { effectRan.current = true }

        // eslint-disable-next-line
    }, []);


    let content;
    if (!persist) { // persist: no
        //console.log("no persist")
        content = <Outlet />
    } else if (isLoading) { //persist: yes, token: no
        //console.log("loading")
        content = (
            <main className="page-spinner">
                <ClipLoader
                    color={"rgb(231, 214, 182)"}
                    loading={isLoading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </main>
        )
    } else if (isError) { //persist: yes, token: no
        // console.log("error")
        // content = (
        //     <main>
        //         <div className="sm-alert errmsg">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        //             <span>Something went wrong. <Link to="/login">Please login again</Link></span>
        //         </div>
        //     </main>
        // )
        //console.log("not logged in")
        content = <Outlet />
    } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
        //console.log("success")
        content = <Outlet />
    } else if (token && isUninitialized) { //persist: yes, token: yes
        //console.log("token and uninit")
        content = <Outlet />
    }

    return content
}
export default PersistLogin