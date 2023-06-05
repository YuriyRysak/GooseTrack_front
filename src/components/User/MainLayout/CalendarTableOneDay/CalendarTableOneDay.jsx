import { DayContainer, Number, NumberContainer, StyledLink, TaskButton, TasksContainer, OverflowContainer } from "./CalendarTableOneDay.styled"

export const CalendarTableOneDay = ({date, fullDate, tasks, picked=false}) => {

    const onClickTask = (id) => {
        console.log(`Task id: ${id}`);
    }
    
    return(
        <DayContainer>
            <StyledLink>
                <NumberContainer picked={picked}>
                   <Number picked={picked}>{date}</Number> 
                </NumberContainer>  
                <OverflowContainer>
                    <TasksContainer>
                    {tasks.map(task => (
                            <TaskButton 
                                key={task._id} 
                                priority={task.priority}
                                onClick={()=>onClickTask(task._id)}
                            >
                                {task.title}
                            </TaskButton>
                        ))  
                    }
                </TasksContainer> 
                </OverflowContainer>
                           
                
            </StyledLink>
        </DayContainer>
    )
}