import React from "react";
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
import ActivityChart from "./ActivityChart";
import ProductChart from "./ProductChart";



const Dashboard = () => {

    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const profilePic = localStorage.getItem('profilePic')

    const topProductsData = [
        {
            name:'Basic Tees',
            value:'55'
        },
        {
            name:"Custom Short Pants",
            value:31
        },
        {
            name:"Super Hoodies",
            value:14
        }
    ]

    return(
        <div className="w-full h-[1024px] flex justify-center items-center max-w-[1440px] max-h-[1024px] m-auto bg-[#F5F5F5] ">

            <div className="w-[19.44%] h-[92.18%] bg-black mr-[4.16%] rounded-[30px] p-[3.47%] text-white">
                <h1 className="mb-[6.355%]  text-[36px] font-[700] " >Board.</h1>

                <div className="w-full" >
                    <ul className="w-full" >
                        <li className="flex justify-start items-center mb-[3.9%]" >
                            <img src={dash} alt="" className="mr-[20px]" />
                            <h3>Dashboard</h3>
                        </li>
                        <li className="flex justify-start items-center mb-[3.9%]" >
                            <img src={dash} alt="" className="mr-[20px]"/>
                            <h3>Transactions</h3>
                        </li>
                        <li className="flex justify-start items-center mb-[3.9%]" >
                            <img src={dash} alt="" className="mr-[20px]"/>
                            <h3>Schedules</h3>
                        </li>
                        <li className="flex justify-start items-center mb-[3.9%]" >
                            <img src={dash} alt="" className="mr-[20px]"/>
                            <h3>Users</h3>
                        </li>
                        <li className="flex justify-start items-center mb-[3.9%]" >
                            <img src={dash} alt="" className="mr-[20px]"/>
                            <h3>Settings</h3>
                        </li>
                        
                    </ul>
                </div>
                
                <div>
                    <div>Help</div>
                    <div>Contact Us</div>
                </div>
            
            </div>

            <div className="w-[69.44%] h-[92.18%] flex flex-col justify-between   bg-red-300">

                <div className="flex justify-between w-full h-[3.17%] bg-yellow-400 ">
                    <div>Dashboard</div>
                    <div className="flex h-full" >
                        <div className="flex justify-between" >
                            <h1>Search</h1>
                            <img src={searchIcon} alt="" />
                        </div>
                        <div><img src={bell} alt="" /></div>
                        <div className="w-[10%]  " ><img className="rounded-full" src={profilePic} alt="" /> </div>
                    </div>
                </div>

                <div className="w-full h-[12.71%] flex justify-between " >
                    <div className="bg-[#DDEFE0] w-[22.105%] h-full py-[20px] px-[25px] rounded-[20px]">
                        <img className="ml-[76.45%]" src={camera} alt="" />
                        <div>
                            <h1 className="text-[14px]" >Total Revenues</h1>
                            <h1 className="text-[24px] font-[700]">$2,129,430</h1>
                        </div>
                    </div>
                    <div className="bg-[#DDEFE0] w-[22.105%] h-full py-[20px] px-[25px] rounded-[20px]">
                        <img className="ml-[76.45%]" src={totalTransaction} alt="" />
                        <div>
                            <h1 className="text-[14px]" >Total Transactions</h1>
                            <h1 className="text-[24px] font-[700]">1,520</h1>
                        </div>
                    </div>
                    <div className="bg-[#DDEFE0] w-[22.105%] h-full py-[20px] px-[25px] rounded-[20px]">
                        <img className="ml-[76.45%]" src={likes} alt="" />
                        <div>
                            <h1 className="text-[14px]" >Total Likes</h1>
                            <h1 className="text-[24px] font-[700]">9,721</h1>
                        </div>
                    </div>
                    <div className="bg-[#DDEFE0] w-[22.105%] h-full py-[20px] px-[25px] rounded-[20px]">
                        <img className="ml-[76.45%]" src={users} alt="" />
                        <div>
                            <h1 className="text-[14px]" >Total Users</h1>
                            <h1 className="text-[24px] font-[700]">892</h1>
                        </div>
                    </div>
                    
                </div>

                <div className="CHART w-full h-[38.02%] py-[30px] px-[40px] bg-white" >
                    <div className="flex justify-between items-center  mb-[30px]">
                        <div className="flex flex-col" ><h1 className="text-[18px] font-[700]">Activities</h1><div className="flex items-center gap-[6px]" ><h1 className="text-[12px] text-[#858585]" >May - June 2021</h1><img className="w-[8px] " src={downArrow} alt="" /></div></div>
                        <div className="flex gap-[35px]" >
                            <div className="flex items-center gap-[10.47px]" ><img className="w-[10px] h-[10px]" src={lightRedDot} /><h3>Guest</h3></div>
                            <div className="flex items-center gap-[10.47px]"><img className="w-[10px] h-[10px]" src={lightGreenDot} /><h3>User</h3></div>
                        </div>
                    </div>
                    <div>
                        <ActivityChart/>
                    </div>
                </div>

                <div className="w-full h-[27.11%] flex justify-between" >

                    <div className="w-[48%] h-full pt-[30px] pb-[34.69px] px-[40px] box-border rounded-[20px] bg-white" >
                        <div className="flex justify-between items-center mb-[25px]">
                            <h1 className="text-[18px] font-[700]" >Top products</h1>
                            <div className="flex items-center gap-[6px]" ><h1 className="text-[12px] text-[#858585]" >May - June 2021</h1><img className="w-[8px] " src={downArrow} alt="" /></div>
                        </div>
                        <div className="w-full box-border  flex  " >
                            <div className="w-[145.94px] h-[145.94px] bg-gray-400 mr-[43.7px] "><ProductChart/> </div>
                            <div className="flex flex-col justify-between" >
                                <div className="flex items-start">
                                    <img className="w-[11px] h-[11px] mr-[10px] mt-[5px]" src={lightGreenDot}/> 
                                    <div className="flex flex-col" ><h1 className="text-[14px] font-[700] mt-0 pt-0" >{topProductsData[]}</h1><h2 className="text-[12px] text-[#858585] ">55%</h2></div>
                                </div>
                                <div className="flex items-start ">
                                    <img className="w-[11px] h-[11px] mr-[10px] mt-[5px]" src={lightYellowDot}/> 
                                    <div className="flex flex-col" ><h1 className="text-[14px] font-[700] mt-0 pt-0" >Basic Custom Short Pants</h1><h2 className="text-[12px] text-[#858585] ">31%</h2></div>
                                </div>
                                <div className="flex items-start">
                                    <img className="w-[11px] h-[11px] mr-[10px] mt-[5px]" src={lightRedDot}/> 
                                    <div className="flex flex-col" ><h1 className="text-[14px] font-[700] mt-0 pt-0" >Super Hoodies</h1><h2 className="text-[12px] text-[#858585] ">14%</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[48%] h-full  pt-[30px] pb-[34px] px-[40px] box-border rounded-[20px] bg-white">
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
            {
                <LineChart width="100%" height="100%" data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false}/>
            <XAxis dataKey="week" axisLine={false} tickLine={false} />
            <YAxis tickCount={6} axisLine={false} tickLine={false} ticks={[0,100,200,300,400,500]} />
            <Tooltip/>
            
            <Line type="monotone" dataKey="userActivity" stroke="#9BDD7C" dot={false} strokeWidth={3} />
            <Line type="monotone" dataKey="guestActivity" stroke="#E9A0A0" dot={false} strokeWidth={3} />
            </LineChart>
            }
        </div>


    )
}

export default Dashboard