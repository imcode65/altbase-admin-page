import Logo from "components/atoms/Logo";
import Title from "components/atoms/Title";
import IconInput1 from "components/atoms/IconInput1";
import IconPasswordInput1 from "components/atoms/IconPasswordInput1";
import Checkbox1 from "components/atoms/Checkbox1";
import Button1 from "components/atoms/Button1";
import IconEnvelope from "components/icons/IconEnvelope";
import IconLock from "components/icons/IconLock";
import altbaseService from "services/altbaseService";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux";
import * as Actions from 'store/actions';
import { LayoutContext } from 'context/layoutContext';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>("abhijeet.rwaltz@gmail.com");
    const [password, setPassword] = useState<string>("Password@123");
    const [recaptcha, setRecaptcha] = useState<string>("");
    const [signing, setSigning] = useState<boolean>(false);
    const { setLoading } = useContext(LayoutContext);
    const submitHandler = () => {
        if (email.trim() !== "" && password.trim() !== "") {
            (async () => {
                setLoading(true);
                setSigning(true);
                let res = await altbaseService.login({email, password});
                if (res.success) {
                    toast.success(res.message);
                    dispatch(Actions.setAuthUser({
                        email: res.content.details.email,
                        name: res.content.details.name,
                        picture: res.content.details.picture,
                        role: res.content.details.role,
                    }));
                    navigate("/admin/dashboard")
                } else {
                    toast.error(res.message);
                }
                setSigning(false);
                setLoading(false);
            })();
        } else {
            toast.error("Email and password are necessary fields");
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
                    <Button1 disabled={signing} onClick={submitHandler} className="w-full mb-5" text={signing ? "Signing ..." : "Sign In"} />
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
