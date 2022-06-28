import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import activity from "../img/reactivities.gif"
import pencil from "../img/Pencil.svg"
import bell from "../img/Bell.svg"
import clsx from 'clsx';
import React, { useContext } from 'react';
import { MainPageTheme } from './Mainpage';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameISOWeek,
  isSameMonth,
  isSameWeek,
  isToday,
  isWithinInterval,
  parse,
  parseISO,
  setWeek,
  startOfToday,
  nextDay,
  startOfWeek,
  startOfISOWeek,
} from 'date-fns'
import { isSameISOWeekYear } from 'date-fns/esm';
import { Fragment, useState } from 'react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar(props) {
  const mainPageTheme = useContext(MainPageTheme)
  const meetings = mainPageTheme.schedule;
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today);
  
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())


  // let [weekSunday, setWeekSunday] = useState('');
  // let [weekMonday, setWeekMonday] = useState('');
  // let [weekTuesday, setWeekTuesday] = useState('');
  // let [weekWednesday, setWeekWednesday] = useState('');
  // let [weekThursday, setWeekThursday] = useState('');
  // let [weekFriday, setWeekFriday] = useState('');
  // let [weekSaturday, setWeekSaturday] = useState('');

  // let [chosenWeek, setChosenWeek] = useState([]);

  function chooseWeek(day){
    let firstday = startOfWeek(day)
    let sunday = format(firstday, 'MM-dd-yyyy')
    let monday = format(nextDay((firstday), 1),'MM-dd-yyyy')
    let tuesday = format(nextDay((firstday), 2),'MM-dd-yyyy')
    let wednesday = format(nextDay((firstday), 3),'MM-dd-yyyy')
    let thursday = format(nextDay((firstday), 4),'MM-dd-yyyy')
    let friday = format(nextDay((firstday), 5),'MM-dd-yyyy')
    let saturday = format(nextDay((firstday), 6),'MM-dd-yyyy')    

    // setWeekSunday(sunday)
    // setWeekMonday(monday)
    // setWeekTuesday(tuesday)
    // setWeekWednesday(wednesday)
    // setWeekThursday(thursday)
    // setWeekFriday(friday)
    // setWeekSaturday(saturday)


    // setChosenWeek([{monday},{tuesday},{wednesday},{thursday},{friday},{saturday}])
    // let weekdays = {
    //   monday: monday,
    //   tuesday: tuesday,
    //   wednesday: wednesday,
    //   thursday: thursday,
    //   friday: friday,
    //   saturday: saturday,
    //   sunday: sunday
    // }

    let weekdays = [sunday,monday, tuesday, wednesday, thursday, friday, saturday]

    props.onChangeDate(weekdays)
    // console.log(weekdays)
  }

  // console.log("sunday la", weekSunday)
  // console.log("monday la", weekMonday)
  // console.log("tuesday la", weekTuesday)
  // console.log("wednesday la", weekWednesday)
  // console.log("thursday la", weekThursday)
  // console.log("friday la", weekFriday)
  // console.log("saturday la", weekSaturday)

  // console.log(chosenWeek);

  
  

  const weekDaySelected = (date, selectedDate) =>{
    // let firstDayofWeek = startOfWeek(date)
    // let lastDayofWeek = endOfWeek(date)

    return isWithinInterval (date, {  
      start: startOfWeek(selectedDate),
      end: endOfWeek(selectedDate)
    })
  } 

  const isFirstCell = (date, selectedDate) =>{
    const weekStart = startOfWeek(selectedDate)

    return isSameDay(weekStart, date)
  }

  const isLastCell = (date, selectedDate) =>{
    const weekEnd = endOfWeek(selectedDate)

    return isSameDay(weekEnd, date)
  }

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  
  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  return (
    <div className="rightbar__container">
        <div className="rightbar__intro">
            <div className="rightbar__intro--content">
                <div className="rightbar__name">
                    <span className="rightbar__name--text">Jane Oegentro</span><br/>
                    <span className="rightbar__name--schedule">Schedule</span>
                </div>
                <div className="rightbar__edit">
                    <div className="rightbar__editimg">
                        <img src={pencil} alt=""/>
                    </div>
                </div>
                <div className="rightbar__noti">
                    <div className="rightbar__notiimg">
                        <img src={bell} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-16 introhabit__container">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 introduction__container">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 calendar__container">
          <div className="md:pr-14 calendar__body">
            <div className="flex items-center calendar__date--controls">
              <h2 className="flex-auto font-semibold text-gray-900 calendar__month">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 calendar__button"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5 calendar--prev" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5 calendar--next" aria-hidden="true" />
              </button>
            </div>
            <div className="calendar__weekdays--controls grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="calendar__monthdays grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={clsx(
                    dayIdx > 6 && 'border-top',
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5 calendar__day'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDay(day)
                      chooseWeek(day)
                    }}
                    className={clsx(
                      // isEqual(day, selectedDay) && 'text-white background-black',
                      // !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-pink font-bold',
                      weekDaySelected(day, selectedDay) && 
                        'background-beige padding-9 border-radius-none font-bold',
                      weekDaySelected(day, selectedDay) && 
                        isFirstCell(day, selectedDay) &&
                        'border-left',
                      weekDaySelected(day, selectedDay) && 
                        isLastCell(day, selectedDay) &&
                        'border-right',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      // !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      // isEqual(day, selectedDay) && isToday(day) && 'background-red text-white',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-yellow',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full square calendar__daybutton'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')} className='font__montserrat'>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1 schedule__dotcontainer">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500 background-blue schedule__dot"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14 calendar__schedule">
            <h2 className="font-semibold text-gray-900 schedule__title">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500 schedule__content">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
          {/* <img src={activity} alt='' className='gif__activity'/> */}
        </div>
      </div>
    </div>
  )
}


function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime)
  let endDateTime = parseISO(meeting.endDatetime)

  return (
  
        <div className="rightbar__schedule">
            <div className="rightbar__event">
                <div className="event__datecontainer">
                    <div className="event__date">
                        <span>15</span>
                    </div>
                    <div className="event__border"></div>
                </div>
                <div className="rightbar__event--info">
                    <div className="event__title">
                        <span className="event__name">{meeting.name}</span><br/>
                        <span className="event__type">Deadline</span>
                    </div>
                    <div className="event__time">
                        <span>         
                           <time dateTime={meeting.startDatetime}>
                              {format(startDateTime, 'h:mm a')}
                          </time>{' '}
                        </span>
                    </div>
                </div>
            </div>
            <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100 options__container"
      >
        <div>
          <Menu.Button className=" options__button -m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="options__dots w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="a"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="a"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
        </div>

  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
