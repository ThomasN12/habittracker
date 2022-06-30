import event from "./../img/event.png";

const TaskList = () => {
    return (
        <div className="tasklist__container">
            <div class="tasklist__name">
                <div class="tasklist__title">
                    <span>Task list</span>
                </div>
                <div class="tasklist__content">
                    <span>June 30th</span>
                </div>
            </div>
            <div className="task__container">
                <div className="task__item--container">
                    <div className="task__item--content">
                        <input id="02" type="checkbox" name="r" value="2" className="task__item"/>
                        <label htmlFor="02" className="task__name">
                            Cheese
                        </label>
                        <label htmlFor="02" className="task__item--type">
                            <span>Deadline</span>
                        </label>
                        <label htmlFor="02" className="task__item--area"></label>
                        <label htmlFor="02" className="task__item--img">
                            <img src={event} alt=""/>
                        </label>
                    </div>
                </div>
                <div className="task__item--container">
                    <div className="task__item--content">
                        <input id="03" type="checkbox" name="r" value="2" className="task__item"/>
                        <label htmlFor="03" className="task__name">
                            Cheese
                        </label>
                        <label htmlFor="03" className="task__item--type">
                            <span>Deadline</span>
                        </label>
                        <label htmlFor="03" className="task__item--area"></label>
                        <label htmlFor="03" className="task__item--img">
                            <img src={event} alt=""/>
                        </label>
                    </div>
                </div>
                <div className="task__item--container">
                    <div className="task__item--content">
                        <input id="04" type="checkbox" name="r" value="2" className="task__item"/>
                        <label htmlFor="04" className="task__name">
                            Cheese
                        </label>
                        <label htmlFor="04" className="task__item--type">
                            <span>Deadline</span>
                        </label>
                        <label htmlFor="04" className="task__item--area"></label>
                        <label htmlFor="04" className="task__item--img">
                            <img src={event} alt=""/>
                        </label>
                    </div>
                </div>
                <div className="task__item--container">
                    <div className="task__item--content">
                        <input id="05" type="checkbox" name="r" value="2" className="task__item"/>
                        <label htmlFor="05" className="task__name">
                            Cheese
                        </label>
                        <label htmlFor="05" className="task__item--type">
                            <span>Deadline</span>
                        </label>
                        <label htmlFor="05" className="task__item--area"></label>
                        <label htmlFor="05" className="task__item--img">
                            <img src={event} alt=""/>
                        </label>
                    </div>
                </div>
                <div className="task__item--container">
                    <div className="task__item--content">
                        <input id="06" type="checkbox" name="r" value="2" className="task__item"/>
                        <label htmlFor="06" className="task__name">
                            Cheese
                        </label>
                        <label htmlFor="06" className="task__item--type">
                            <span>Deadline</span>
                        </label>
                        <label htmlFor="06" className="task__item--area"></label>
                        <label htmlFor="06" className="task__item--img">
                            <img src={event} alt=""/>
                        </label>
                    </div>
                </div>
                <div className="task__item--container">
                    <div className="task__item--content">
                        <input id="07" type="checkbox" name="r" value="2" className="task__item"/>
                        <label htmlFor="07" className="task__name">
                            Cheese
                        </label>
                        <label htmlFor="07" className="task__item--type">
                            <span>Deadline</span>
                        </label>
                        <label htmlFor="07" className="task__item--area"></label>
                        <label htmlFor="07" className="task__item--img">
                            <img src={event} alt=""/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList;