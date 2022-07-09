import React from "react";
import Checkbox from "./Checkbox";
import fire from "../../img/fire.png";
import { useState, useEffect, useRef, useContext } from 'react';
import medal from "../../img/gold-medal.png";
import calendar from "../../img/calendar.png";
import Chart from "../Charts/HabitChart";
import axios from "axios";
import { toast } from "react-toastify";
import information from "../../img/info2.png"
import bin from "../../img/bin.png"
import pencil from "../../img/pencil.png"
import { MainPageTheme } from "../Mainpage";


const Habit = (props) =>{

    const mainPageTheme = useContext(MainPageTheme)
    // const [weeks, setWeeks] = useState(props.weeks)


    // const onAddWeek = () =>{
    //     setWeeks(weeks+1);
    // }

    let originChartData = [{
      name: props.daterange[0]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[1]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[2]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[3]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[4]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[5]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[6]+'/'+ props.name,
      checked: 0
    },
  ]


  const [chartData, setChartData] = useState(originChartData);

  const prevChartData = useRef();

  // Reset chartData when change daterange

  useEffect(() => {
     
    prevChartData.current = chartData;
    // console.log("prevChartData:", prevChartData)
    // console.log("prevChartData:", prevChartData.current[1].name)
    if (prevChartData.current[1].name !== originChartData[1].name){
        console.log("true");
        setChartData(originChartData)
    }
  }, [props.daterange])
    
    //   "2022-07-20T17:00:00.000Z"
    // "06-22-2022/Final"
    const initialCheckedId = props.habit.checkedId.map(e => {
        let date = new Date(e);
        let year = date.getFullYear();
        let month = date.getMonth();
        let monthPrefix = month < 10 ? '0' : '';
        let day = date.getDate();
        let dayPrefix = day < 10 ? '0': '';
        let res = `${monthPrefix}${month+1}-${dayPrefix}${day}-${year}/${props.habit.name}`
        return res;
    });
    // console.log(props.habit.checkedId);
    // console.log(initialCheckedId);
    const [checkedId, setCheckedId] = useState(initialCheckedId);
    
    const isMounted = useRef(false);

    // Add Id function

    const handleDelete = (id) => {
        mainPageTheme.setHabits(() => {
            return (
            mainPageTheme.habits.filter((item) => {
                console.log("item: ", item)
                console.log("itemid: ", item._id)
                return item._id !== id
            }))
        })
        
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_ROOT_API;
        // const baseUrl = "https://habit-tracker-server.herokuapp.com/api"
        axios.delete(`${baseUrl}/habit/${id}`, {
            headers: {
                "accessToken": token,
            },
        }).then(res => {
            const { data } = res;
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        }).catch(err => {
            toast.error(err.response.data);
        });
        // console.log("id la", id)
        // console.log("habits la: ", mainPageTheme.habits)
        
    }

    const addId = (id) => {
        console.log("ADDID", id);
        const searchIndex = chartData.findIndex((habit) => {
            return habit.name === id
        });
        setChartData((prevChartData) => {
            let newData = [
                ...prevChartData,
            ]
            // console.log("chartData: ", newData)
            newData[searchIndex].checked = 1;
            return newData
        })

        setCheckedId((prevIds) =>{            
            return [...prevIds, id]
        })
    }

    // Prevent re-render on the first time render
    let mount = 0;

    useEffect(() => {
        console.log(isMounted.current, mount); //False in deployment instead of true in local
        // if (isMounted.current) {
            props.onUpdateChecked(props.habit, checkedId);
            console.log("Send update");
            setStreak(props.habit.streak);
            setRecord(props.habit.record);
            //Send update
            const token = localStorage.getItem('token');
            const baseUrl = process.env.REACT_APP_ROOT_API;
            // const baseUrl = "https://habit-tracker-server.herokuapp.com/api"
            let updatedHabit = {
                ...props.habit,
                checkedId: props.habit.checkedId
            }
            let body = {updatedHabit};
            axios.put(`${baseUrl}/habit/${props.id}`, body, {
                headers: {
                    "accessToken": token,
                },
            }).then(res => {
                // console.log(res);
            }).catch(err => {
                toast.error(err.response.data);
            });
        // } 
        // else {
        //     mount++
        //   if(mount === 2){
        //     isMounted.current = true;
        //     console.log("prevent")
        //   }
        // }
    },[checkedId]);

    // Remove Id function
    const removeId = (id) => {
        console.log("REMOVEID", id);
        const searchIndex = chartData.findIndex((habit) => {
            return habit.name === id
        });
        setChartData((prevChartData) => {
            let newData = [
                ...prevChartData,
            ]
            newData[searchIndex].checked = 0;
            return newData;
        })
        setCheckedId(
           checkedId.filter((item) => item !== id)
        )
    }

    const [show, setShow] = useState(false);
    const [streak, setStreak] = useState(props.habit.streak || 0);
    const [record, setRecord] = useState(props.habit.record || 0);

    return (
        <React.Fragment>
            <div className="habit__box" key = {`habit-${props.id}`}>
                <div className="habitname__container" >
                    <div className="habit__name">
                        <span>{props.name}</span>
                    </div>
                </div>
                <div className="habit__checkboxes--container">
                    {/* {[...Array(weeks)].map((e, i) =>( */}
                        <>
                            <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}6`} id={`${props.daterange[0]}/${props.name}`}></Checkbox>
                            <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}5`} id={`${props.daterange[1]}/${props.name}`}></Checkbox>
                            <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}4`} id={`${props.daterange[2]}/${props.name}`}></Checkbox>
                            <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}3`} id={`${props.daterange[3]}/${props.name}`}></Checkbox>
                            <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}2`} id={`${props.daterange[4]}/${props.name}`}></Checkbox>
                            <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}1`} id={`${props.daterange[5]}/${props.name}`}></Checkbox>
                            <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}0`} id={`${props.daterange[6]}/${props.name}`}></Checkbox>
                        </>   
                    {/* ))} */}
                </div>
                <div className="habit__info" >
                    <div className="current__container">
                        <div className="current__img">
                            <img src={fire} alt=""/>
                        </div>
                        <div className="current__data">
                            <span>{streak}</span>
                        </div>
                    </div>
                    <div className="record__container">
                        <div className="record__img">
                            <img src={medal} alt=""/>
                        </div>
                        <div className="record__data">
                            <span>{record}</span>
                        </div>
                    </div>
                    <div className="total__container">
                        <div className="total__img">
                            <img src={calendar} alt=""/>
                        </div>
                        <div className="total__data">
                            <span>{checkedId.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="habit__button">
                <img alt="" src={information} className="habit__button--information" onClick={() => setShow(!show)}/>
                <img alt="" src={pencil} className="habit__button--information"/>
                <img alt="" src={bin} className="habit__button--information" onClick={() => handleDelete(props.id)} />
            </div>
            {show &&
                <div className="habit__chart">
                    <Chart 
                        chartData = {chartData}
                        checkedId = {checkedId}
                        daterange = {props.daterange}
                        name = {props.name}
                    ></Chart>          
                </div>
            }
        </React.Fragment>
    )
}

export default Habit;