import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectIsIsLoadingUser } from "redux/auth/selectors";
import { selectIsLoading } from "redux/reviews/selectors";
import { selectIsLoadingTasks } from "redux/tasks/selectors";
import { Loader } from "utils/Loader/Loader";

export function Layout() {
    const isAuthLoading = useSelector(selectIsIsLoadingUser);
    // const isModalLoading = useSelector(/* modal isLoading selector */);
    const isReviewLoading = useSelector(selectIsLoading);
    const isTaskLoading = useSelector(selectIsLoadingTasks);

    const loadingStatusesArray = [
        isAuthLoading, 
        // isModalLoading, 
        isReviewLoading, 
        isTaskLoading
    ];

    const isAnythingLoading = loadingStatusesArray.some(status => status === true);

    return (
        <div>
            <Outlet />
            <Loader isVisible={isAnythingLoading}/>
        </div>
    )
};
