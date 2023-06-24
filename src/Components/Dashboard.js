import React, { useState } from "react";
import dash from '../asset/dashboard_icon.png'
import bell from '../asset/bell.png'
import searchIcon from '../asset/Search icon.png'
import camera from '../asset/camera.png'
import totalTransaction from '../asset/total_transactions_icon.png'
import likes from '../asset/like.png'
import users from '../asset/totalUsers.png'
import rightArrow from '../asset/rightArrow.png'
import downArrow from '../asset/downArrow.png'
import lightGreenDot from '../asset/lightGreenDot.png'
import lightRedDot from '../asset/lightRedDot.png'
import lightYellowDot from '../asset/lightYellowDot.png'
import schedule from '../asset/schedule_icon (1).png'
import leftTransaction from '../asset/leftTransaction.png'
import leftUser from '../asset/user_icon (1).png'
import setting from '../asset/setting_icon (1).png'
import ActivityChart from "./ActivityChart";
import ProductChart from "./ProductChart";



const Dashboard = () => {

    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const profilePic = localStorage.getItem('profilePic')

    const [btnClicked,setBtnClicked] = useState(false)

    const topProductsData = [
        {
            name:'Basic Tees',
            value:55,
            dot:lightGreenDot,
            color:'#98D89E'
        },
        {
            name:"Custom Short Pants",
            value:31,
            dot:lightYellowDot,
            color:'#F6DC7D'
        },
        {
            name:"Super Hoodies",
            value: 14,
            dot:lightRedDot,
            color:'#EE8484'
        }
    ]

    return(
        <div className="w-full  flex justify-center items-center max-w-[1440px] p-[40px] m-auto bg-[#F5F5F5] max-[1000px]:h-fit max-[1000px]:flex-col  ">

            <div className="LEFT w-[19.44%] h-[944px] flex flex-col justify-between bg-black mr-[4.16%] rounded-[30px] p-[50px] text-white max-[1000px]:hidden ">
                <div className="w-full h-full  " >
                    <h1 className="mb-[60px]  text-[36px] font-[700] " >Board.</h1>

                    <div className="w-full" >
                        <ul className="w-full" >
                            <li className="flex justify-start items-center mb-[40px]" >
                                <img src={dash} alt="" className="mr-[20px]" />
                                <h3>Dashboard</h3>
                            </li>
                            <li className="flex justify-start items-center mb-[40px]" >
                                <img src={leftTransaction} alt="" className="mr-[20px]"/>
                                <h3>Transactions</h3>
                            </li>
                            <li className="flex justify-start items-center mb-[40px]" >
                                <img src={schedule} alt="" className="mr-[20px]"/>
                                <h3>Schedules</h3>
                            </li>
                            <li className="flex justify-start items-center mb-[40px]" >
                                <img src={leftUser} alt="" className="mr-[20px]"/>
                                <h3>Users</h3>
                            </li>
                            <li className="flex justify-start items-center mb-[40px]" >
                                <img src={setting} alt="" className="mr-[20px]"/>
                                <h3>Settings</h3>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
                <div>
                    <div className="text-[14px] mb-[20px] " >Help</div>
                    <div className="text-[14px]">Contact Us</div>
                </div>
            
            </div>


            <div className="LEFT768 flex justify-between items-center  gap-2 w-full bg-black py-5 px-5 text-white mb-[40px] max-[768px]:flex-col max-[768px]:items-start min-[1000px]:hidden max-[640px]:hidden" >
                <div className="flex flex-col" > 
                    <h1 className="text-lg font-bold " >Board.</h1>
                    <ul className="w-full flex gap-[10%]" >
                                <li className="flex justify-start items-center " >
                                    <img src={dash} alt="" className="mr-[8%]" />
                                    <h3>Dashboard</h3>
                                </li>
                                <li className="flex justify-start items-center " >
                                    <img src={leftTransaction} alt="" className="mr-[8%]"/>
                                    <h3>Transactions</h3>
                                </li>
                                <li className="flex justify-start items-center " >
                                    <img src={schedule} alt="" className="mr-[8%]"/>
                                    <h3>Schedules</h3>
                                </li>
                                <li className="flex justify-start items-center" >
                                    <img src={leftUser} alt="" className="mr-[8%]"/>
                                    <h3>Users</h3>
                                </li>
                                <li className="flex justify-start items-center " >
                                    <img src={setting} alt="" className="mr-[8%]"/>
                                    <h3>Settings</h3>
                                </li>
                                
                    </ul>
                </div>
                <div className="max-[768px]:flex max-[768px]:justify-between max-[768px]:w-full"  >
                    <div className="text-[14px]" >Help</div>
                    <div className="text-[14px]">Contact Us</div>
                </div>
            </div>

            <div className="LEFT640 ease-in  w-full mb-[40px] flex flex-col justify-between text-white bg-black p-4 min-[640px]:hidden" >
                <div className="flex justify-between w-full mb-2" >   
                    <h1 className="text-lg font-bold " >Board.</h1>
                    <button onClick={()=>setBtnClicked(prev=>!prev)} >&#8801;</button>{console.log("btn value",btnClicked)}
                </div>
                {btnClicked && (
                    <div className="w-full flex flex-col items-end ease-in" > 
                    <ul className=" flex flex-col  gap-2" >
                    <li className="flex justify-start items-center " >
                        <img src={dash} alt="" className="mr-[8%]" />
                        <h3>Dashboard</h3>
                    </li>
                    <li className="flex justify-start items-center " >
                        <img src={leftTransaction} alt="" className="mr-[8%]"/>
                        <h3>Transactions</h3>
                    </li>
                    <li className="flex justify-start items-center " >
                        <img src={schedule} alt="" className="mr-[8%]"/>
                        <h3>Schedules</h3>
                    </li>
                    <li className="flex justify-start items-center" >
                        <img src={leftUser} alt="" className="mr-[8%]"/>
                        <h3>Users</h3>
                    </li>
                    <li className="flex justify-start items-center " >
                        <img src={setting} alt="" className="mr-[8%]"/>
                        <h3>Settings</h3>
                    </li>
                    <li><div className="text-[14px]" >Help</div></li>
                    <li><div className="text-[14px]">Contact Us</div></li>
                    
                    </ul>
                </div>
                )}
            </div>

            <div className="RIGHT  w-[69.44%] h-[92.18%] flex flex-col justify-between max-[1000px]:w-full  ">

                <div className="Dashboard flex justify-between items-center w-full h-[29px] mb-[40px]  max-[480px]:flex-col max-[480px]:h-fit max-[480px]:gap-[10px] max-[480px]:items-start  ">
                    <div className="text-[24px] font-[700]" >Dashboard</div>
                    <div className="flex justify-between items-center w-[30.2%] h-full box-border max-[480px]:w-full" >
                        <div className="flex justify-between items-center box-border w-[59.60%] rounded-[10px] bg-white py-[4px] px-[15px]" >
                            <h1 className="text-[14px] text-[#B0B0B0]" >Search...</h1>
                            <img className="w-[12px] h-[12px]" src={searchIcon} alt="" />
                        </div>
                        <div><img src={bell} alt="" /></div>
                        <div className="w-[29px] h-[29px]"><img className="rounded-full" src={profilePic} alt="" /> </div>
                    </div>
                </div>

                <div className="FOURCARDS w-full h-[12.71%] flex flex-wrap justify-between mb-[40px] max-[768px]:gap-[20px] " >
                    <div className="bg-[#DDEFE0] w-[22.105%] h-full py-[20px] px-[25px] rounded-[20px] max-[768px]:w-[45%] max-[640px]:w-full">
                        <img className="ml-[76.45%]" src={camera} alt="" />
                        <div>
                            <h1 className="text-[14px]" >Total Revenues</h1>
                            <h1 className="text-[24px] font-[700]">$2,129,430</h1>
                        </div>
                    </div>
                    <div className="bg-[#F4ECDD] w-[22.105%] h-full py-[20px] px-[25px] rounded-[20px] max-[768px]:w-[45%] max-[640px]:w-full">
                        <img className="ml-[76.45%]" src={totalTransaction} alt="" />
                        <div>
                            <h1 className="text-[14px]" >Total Transactions</h1>
                            <h1 className="text-[24px] font-[700]">1,520</h1>
                        </div>
                    </div>
                    <div className="bg-[#EFDADA] w-[22.105%] h-full py-[20px] px-[25px] rounded-[20px] max-[768px]:w-[45%] max-[640px]:w-full">
                        <img className="ml-[76.45%]" src={likes} alt="" />
                        <div>
                            <h1 className="text-[14px]" >Total Likes</h1>
                            <h1 className="text-[24px] font-[700]">9,721</h1>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EF] w-[22.105%] h-full py-[20px] px-[25px] rounded-[20px] max-[768px]:w-[45%] max-[640px]:w-full">
                        <img className="ml-[76.45%]" src={users} alt="" />
                        <div>
                            <h1 className="text-[14px]" >Total Users</h1>
                            <h1 className="text-[24px] font-[700]">892</h1>
                        </div>
                    </div>
                    
                </div>

                <div className="CHART w-full h-[359px] py-[30px] px-[40px] bg-white mb-[40px]" >
                    <div className="flex justify-between items-center  mb-[30px]">
                        <div className="flex flex-col" ><h1 className="text-[18px] font-[700]">Activities</h1><div className="flex items-center gap-[6px]" ><h1 className="text-[12px] text-[#858585]" >May - June 2021</h1><img className="w-[8px] " src={downArrow} alt="" /></div></div>
                        <div className="flex gap-[35px]" >
                            <div className="flex items-center gap-[10.47px]" ><img className="w-[10px] h-[10px]" src={lightRedDot} /><h3>Guest</h3></div>
                            <div className="flex items-center gap-[10.47px]"><img className="w-[10px] h-[10px]" src={lightGreenDot} /><h3>User</h3></div>
                        </div>
                    </div>
                    <div className="w-full h-full" >
                        <ActivityChart/>
                    </div>
                </div>

                <div className="TWOCARDS w-full h-[27.11%] flex flex-wrap justify-between max-[768px]:flex-col max-[768px]:gap-[20px]" >

                    <div className="TOPPRODUCTS w-[48%] h-full pt-[30px] pb-[34.69px] px-[40px] box-border rounded-[20px] bg-white max-[768px]:w-full" >
                        <div className="flex justify-between items-center mb-[25px]">
                            <h1 className="text-[18px] font-[700]" >Top products</h1>
                            <div className="flex items-center gap-[6px]" ><h1 className="text-[12px] text-[#858585]" >May - June 2021</h1><img className="w-[8px] " src={downArrow} alt="" /></div>
                        </div>
                        <div className="w-full box-border  flex max-[768px]:gap-[20%] max-[480px]:flex-col max-[480px]:gap-4  " >
                            <div className="w-[145.94px] h-[145.94px]  mr-[43.7px] max-[480px]:w-full max-[480px]:pl-[13%] "><ProductChart  topProductsData={topProductsData}/> </div>
                            <div className="flex flex-col justify-between max-[480px]:w-full" >
                                
                               {
                                topProductsData.map((pro,index)=>{
                                    return(
                                        <div className="flex items-start">
                                            <img className="w-[11px] h-[11px] mr-[10px] mt-[5px]" src={pro.dot}/> 
                                            <div className="flex flex-col" ><h1 className="text-[14px] font-[700] mt-0 pt-0" >{pro.name}</h1><h2 className="text-[12px] text-[#858585] ">{pro.value}%</h2></div>
                                        </div>
                                    )
                                })
                               }
                            </div>
                        </div>
                    </div>

                    <div className="TODAYSCHEDULE w-[48%] h-full  pt-[30px] pb-[34px] px-[40px] box-border rounded-[20px] bg-white max-[768px]:w-full">
                        <div className="flex justify-between items-center mb-[25px]">
                            <h1 className="text-[18px] font-[700]" >Today's Schedule</h1>
                            <div className="flex items-center gap-[6px]" ><h1 className="text-[12px] text-[#858585]" >See All</h1><img className="w-[8px] " src={rightArrow} alt="" /></div>
                        </div>

                        <div className="flex flex-col gap-[13px]" >
                            <div className=" h-[66px] pt-[3px] pl-[15px] pb-[8px] flex flex-col  border-l-[5px] border-solid border-[#9BDD7C] ">
                                <h1 className="text-[14px] font-[700] text-[#666]">Meeting with suppliers from Kuta Bali</h1>
                                <h2 className="text-[12px]  text-[#999]" >14.00-15.00</h2>
                                <h2 className="text-[12px]  text-[#999]" >at Sunset Road, Kuta, Bali</h2>
                            </div>
                            <div className="h-[66px] pt-[3px] pl-[15px] pb-[8px] flex flex-col  border-l-[5px] border-solid border-[#6972C3] ">
                                <h1 className="text-[14px] font-[700] text-[#666]">Check operation at Giga Factory 1</h1>
                                <h2 className="text-[12px]  text-[#999]" >18.00-20.00</h2>
                                <h2 className="text-[12px]  text-[#999]" >at Central Jakarta</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Dashboard