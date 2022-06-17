import clsx from 'clsx';
import {
    isToday, parseISO, format
} from 'date-fns'



const Date = (props) =>{
    console.log(props.daterange[0]);
    console.log(new window.Date(props.daterange[0]))
    console.log(props.daterange[1]);
    console.log(new window.Date('12-06-2022'))
    let sunday = parseISO(new window.Date(props.daterange[0]).toISOString())
    let monday = parseISO(new window.Date(props.daterange[1]).toISOString())
    let tuesday = parseISO(new window.Date(props.daterange[2]).toISOString())
    let wednesday = parseISO(new window.Date(props.daterange[3]).toISOString())
    let thursday = parseISO(new window.Date(props.daterange[4]).toISOString())
    let friday = parseISO(new window.Date(props.daterange[5]).toISOString())
    let saturday = parseISO(new window.Date(props.daterange[6]).toISOString())

    let sundaytitle = format(sunday, 'dd-MMM')
    let mondaytitle = format(monday, 'dd-MMM')
    let tuesdaytitle = format(tuesday, 'dd-MMM')
    let wednesdaytitle = format(wednesday, 'dd-MMM')
    let thursdaytitle = format(thursday, 'dd-MMM')
    let fridaytitle = format(friday, 'dd-MMM')
    let saturdaytitle = format(saturday, 'dd-MMM')

    return (
        <div className="date">
            <div className="date__container">
                <div className="date__empty"></div>
                <div className="date__list">
                    <h3 className={clsx(isToday(sunday) && 'text-red','date__name')}>{sundaytitle}</h3>
                    <h3 className={clsx(isToday(monday) && 'text-red','date__name')}>{mondaytitle}</h3>
                    <h3 className={clsx(isToday(tuesday) && 'text-red','date__name')}>{tuesdaytitle}</h3>
                    <h3 className={clsx(isToday(wednesday) && 'text-red','date__name')}>{wednesdaytitle}</h3>
                    <h3 className={clsx(isToday(thursday) && 'text-red','date__name')}>{thursdaytitle}</h3>
                    <h3 className={clsx(isToday(friday) && 'text-red','date__name')}>{fridaytitle}</h3>
                    <h3 className={clsx(isToday(saturday) && 'text-red','date__name')}>{saturdaytitle}</h3>
                </div>
                <div className="habit__data--title">
                    <h3 className="data--title">Current streak</h3>
                    <h3 className="data--title">Your record</h3>
                    <h3 className="data--title">Days finished</h3>
                </div>
            </div>
            
      </div>
    )
}

export default Date;