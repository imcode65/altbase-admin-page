import Logo from "components/atoms/Logo";
import Title from "components/atoms/Title";
import IconInput1 from "components/atoms/IconInput1";
import IconPasswordInput1 from "components/atoms/IconPasswordInput1";
import Checkbox1 from "components/atoms/Checkbox1";
import Button1 from "components/atoms/Button1";
import IconEnvelope from "components/icons/IconEnvelope";
import IconLock from "components/icons/IconLock";
import altbaseService from "services/altbaseService";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    const [email, setEmail] = useState<string>("abhijeet.rwaltz@gmail.com");
    const [password, setPassword] = useState<string>("Password@123");
    const [recaptcha, setRecaptcha] = useState<string>("");
    const submitHandler = () => {
        if (email.trim() !== "" && password.trim() !== "") {
            (async () => {
                let res = await altbaseService.login({email, password});

            })();
        }
    }
    const handleRecaptcha = (val: string|null) => {
        setRecaptcha(val || "")
    }
    return (
        <div className='min-h-screen w-full flex justify-center items-center bg-slate-300'>
            <div className='bg-white rounded-sm w-96'>
                <div className="flex items-center justify-center w-full border-b border-gray-500 ">
                    <Logo className="p-5" />
                </div>
                <div className="p-5">
                    <Title className="mb-5 w-full flex justify-center items-center" text="Sign In" />
                    <IconInput1 
                        Icon={() => <IconEnvelope className="mr-2 opacity-40" dark />}
                        placeholder="Enter your email"
                        className="mb-5"
                        text={email}
                        type="email"
                        onChangeHandler={setEmail}
                    />
                    <IconPasswordInput1 
                        Icon={IconLock}
                        placeholder="Enter your password"
                        className="mb-5"
                        text={password}
                        onChangeHandler={setPassword}
                    />

                    {/* <ReCAPTCHA
                        sitekey="6LfHjVUfAAAAAM7jPvNGFQw8WXAx3Yul-MdXeBzq"
                        onChange={handleRecaptcha}
                    /> */}
                    <Button1 onClick={submitHandler} className="w-full mb-5" text="Sign In" />
                    <div className="flex justify-between items-center">
                        <Checkbox1 text="Remember Me" />
                        <Link to={"/forgot-password"}>
                            <div className="underline text-gray-400 cursor-pointer">Forgot Password</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
