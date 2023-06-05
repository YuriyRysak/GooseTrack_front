import { DayContainer, Number, NumberContainer, StyledLink, TaskButton, TasksContainer, OverflowContainer } from "./CalendarTableOneDay.styled"

export const CalendarTableOneDay = ({date, fullDate, tasks, picked=false}) => {
    
    return(
        <DayContainer>
            <StyledLink>
                <NumberContainer picked={picked}>
                   <Number picked={picked}>{date}</Number> 
                </NumberContainer>  
                <OverflowContainer>
                    <TasksContainer>
                    {tasks.map(task => (
                            <TaskButton key={task._id} priority={task.priority}>{task.title}</TaskButton>
                        ))  
                    }
                </TasksContainer> 
                </OverflowContainer>
                           
                
            </StyledLink>
        </DayContainer>
    )
}