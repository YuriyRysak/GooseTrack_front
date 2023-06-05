// add correct redirection to spesific day
// change onClickTask
// 

import { cutString } from "helpers";
import { DayContainer, Number, NumberContainer, StyledLink, TaskButton, TasksContainer, OverflowContainer } from "./CalendarTableOneDay.styled"

export const CalendarTableOneDay = ({date, fullDate, tasks, picked=false}) => {

    const onClickTask = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        // functions of opening task modal
        console.log(`Task id: ${id}`);
    }
    
    return(
            <StyledLink to={`/calendar/day/${fullDate}`}>
                <DayContainer>
                    <NumberContainer picked={picked}>
                    <Number picked={picked}>{date}</Number> 
                    </NumberContainer>  
                    <OverflowContainer>
                        <TasksContainer>
                            {tasks.map(task => (
                                    <TaskButton 
                                        key={task._id} 
                                        priority={task.priority}
                                        onClick={(e)=>onClickTask(e, task._id)}
                                    >
                                        {cutString(task.title, 5)}
                                    </TaskButton>
                                ))  
                            }
                        </TasksContainer> 
                    </OverflowContainer>
                </DayContainer>
            </StyledLink>
        
    )
}