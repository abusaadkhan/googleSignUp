import React from "react";
import go from '../asset/icons8-google-48.png'
import apple from '../asset/icons8-apple-logo-40.png'
import { signInWithGoogle } from '../firebase.js'
import { useNavigate } from "react-router-dom";

const Signin = () => {

    const navigate = useNavigate()

    const signIn = () =>{
        signInWithGoogle()
        .then(res=>{
            const name = res.user.displayName
            const email = res.user.email
            const profilePic = res.user.photoURL

            localStorage.setItem('name',name)
            localStorage.setItem('email',email)
            localStorage.setItem('profilePic',profilePic)
            navigate('/dashboard')
        })
        .catch(err=>{
            console.error('error while signin',err)
        })
    }


    return(
        <div className="w-screen h-screen flex max-w-[1440px] m-auto max-[1000px]:flex-col "   >
            <div className="LEFT bg-black  w-[40.83%]  flex justify-center items-center max-[1000px]:hidden " >
                <h1 className=" text-white text-[72px] font-[700] " >Board.</h1>
            </div>

            <div className="bg-black p-4 min-[1000px]:hidden  " >
                <h1 className="text-white text-lg font-[700]" >BOARD.</h1>
            </div>
            <div className="RIGHT bg-[#F5F5F5] w-[59.166%] flex flex-col justify-center items-center max-[1000px]:w-full " >
                <div className="flex flex-col items-start w-[45.1877%] max-[1000px]:w-full max-[1000px]:p-16 " >
                    <div>
                        <div className=" text-[36px] mb-[5px] font-[700] " >Sign In</div>
                        <div className=" text-[16px] mb-[26px] ">Sign in to your account</div>
                    </div>


                    <div className="flex justify-between mb-[25px] w-full max-[640px]:flex-col max-[640px]:gap-4 " >
                        <button className=" flex justify-center items-center bg-white w-full h-[30px] pt-[8px] pb-[7px] px-[4%] rounded-[10px] text-[12px] mr-[6%] " onClick={signIn} >
                            <img className="w-[14px] h-[14px] mr-[10px]" src={go} alt="" />
                            <div className="text-[12px] text-[#858585] ">Sign in with Google</div>
                        </button>
                        <button className="flex justify-center items-center bg-white w-full h-[30px] pt-[8px] pb-[7px] rounded-[10px] "  >
                            <img className="w-[11.4px] h-[14px] mr-[10px] " src={apple} alt="" />
                            <div className="text-[12px] text-[#858585]" >Sign in with Apple</div>
                        </button>
                    </div>


                    <div className="w-full h-[317px]  rounded-[20px] bg-white p-[30px]  box-border max-[1000px]:h-fit " >
                        <div className="flex flex-col" >
                            <label for='email' className="text-[16px] mb-[10px] " >Email address</label>
                            <input type="email" name="email" placeholder="johndoe@gmail.com" className="p-[3%] bg-[#F5F5F5] rounded-[10px]" />
                        </div>
                        <div className="flex flex-col gap-[9%] mt-[20px] " >
                            <label for='password' className="mb-[10px]" >Password</label>
                            <input type="password" name="password" placeholder="Enter Password" className="p-[3%] bg-[#EAEAEA] rounded-[10px]"/>                   
                        </div>
                        <div className="mt-[20px] mb-[20px] text-[16px] " >Forgot password?</div>
                        <button className="py-[2%] w-full h-[40px] rounded-[10px] flex justify-center items-center bg-black text-white font-[700] text-[16px] " >Sign In</button>
                    </div>

                    <div className="mt-[20px] text-[16px] w-full text-center" >Don't have an account? Register here</div>
                </div>
            </div>
        </div>
    )
}

export default Signin