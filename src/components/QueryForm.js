const QueryForm = () => {
    return (
        <div className="form__query">
                <div className="form__content">
                    <div className="form__title">
                        <span>Create new habit today</span>
                    </div>
                    <div className="form__query--1">
                        <label>What's your habit name?</label>
                        <input type="text" placeholder="Playing sport, do exercise, eat clean..." className="queryform__style--1"/>
                    </div>
                    <div className="form__checkbox--1">
                        <input type="checkbox"/>
                        <label className="queryform__style--1">Deliver the car somewhere else</label>
                    </div>
                    <div className="form__query--1 mt-32">
                        <label>Pick up location</label>
                        <input type="text" placeholder="City, airport, region, district..." className="queryform__style--1"/>
                    </div>
                    <div className="form__apply">
                        <span>Add new habit</span>
                    </div>
                </div>
                <div className="form__content">
                    <div className="form__title">
                        <span>Create your schedule</span>
                    </div>
                    <div className="form__query--1">
                        <label>What's your activities or events?</label>
                        <input type="text" placeholder="Finish assignments, friend meeting..." className="queryform__style--1"/>
                    </div>
                    <div className="form__checkbox--1">
                        <input type="checkbox"/>
                        <label className="queryform__style--1">Deliver the car somewhere else</label>
                    </div>
                    <div className="form__query--1 mt-32">
                        <label>Pick up location</label>
                        <input type="text" placeholder="City, airport, region, district..." className="queryform__style--1"/>
                    </div>
                    <div className="form__apply">
                        <span>Add new habit</span>
                    </div>
                </div>
            </div>
    )
        
}

export default QueryForm;