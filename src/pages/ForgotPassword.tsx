import Logo from "components/atoms/Logo";
import Title from "components/atoms/Title";
import IconInput1 from "components/atoms/IconInput1";
import Button1 from "components/atoms/Button1";
import IconEnvelope from "components/icons/IconEnvelope";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const submitHandler = () => {
        if (email.trim() !== "") {
            (async () => {

            })();
        }
    }
    return (
        <div className='min-h-screen w-full flex justify-center items-center bg-slate-300'>
            <div className='bg-white rounded-sm w-96'>
                <div className="flex items-center justify-center w-full border-b border-gray-500 ">
                    <Logo className="p-5" />
                </div>
                <div className="p-5">
                    <Title className="w-full flex justify-center items-center" text="You forgot your password?" />
                    <div className="text-color-13 text-center mb-5">Please enter your email, we will send you the reset password link.</div>
                    <IconInput1 
                        Icon={IconEnvelope}
                        placeholder="Enter your email"
                        className="my-5"
                        text={email}
                        type="email"
                        onChangeHandler={setEmail}
                    />
                    <Button1 onClick={submitHandler} className="w-full mb-5" text="Request password reset link" />
                    <div className="flex justify-between items-center">
                        <Link to="/login">
                            <div className="text-gray-400 cursor-pointer">Proceed to login</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
