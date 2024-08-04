import { ReactElement, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useVerifyMutation } from "./authApiSlice";

const VerifyEmail = (): ReactElement => {

    const { verificationToken } = useParams();

    const [verify, {
        isLoading,
        isError,
        isSuccess,
    }] = useVerifyMutation();

    const [responseMsg, setResponseMsg] = useState("");

    const verifyEmail = async () => {
        try {
            const { message } = await verify(verificationToken).unwrap();
            setResponseMsg(message);
        } catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if (err.status === 400 || err.status === 401) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    useEffect(() => {
        verifyEmail();
    }, []);

    return (
        <main>
            <ClipLoader
                color={"rgb(231, 214, 182)"}
                loading={isLoading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            {isSuccess && (
                <div className="sm-alert succmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{responseMsg}</span>
                </div>
            )}

            {isSuccess &&
                <>
                    <div className="divider-4" />

                    <p>Go back to main page - <Link to="/">Here</Link></p>
                </>
            }

            {isError && (
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{responseMsg}</span>
                </div>
            )}

            {isError &&
                <>
                    <div className="divider-4" />

                    <p>Send new verification email - <Link to="/verify">Here</Link></p>
                </>
            }
        </main>
    )
}

export default VerifyEmail