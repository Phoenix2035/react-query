import {useQuery} from "react-query";
import {request} from "../api/axios.interceptor";

const fetchUserByEmail = async (email) => {
    return await request({url: `/users/${email}`})
}

const fetchCoursesByChannelID = async (channelId) => {
    return await request({url: `/channels/${channelId}`})
}


const DependentQueriesPage = ({email}) => {
    const {data: user} = useQuery(["user", email], () => fetchUserByEmail(email))

    const channelId = user?.data.channelId

    const {data: courses} = useQuery(["courses", channelId], () => fetchCoursesByChannelID(channelId), {
        enabled: !!channelId
    })

    return (
        <div>
            <span>Channel: </span>
            {
                user?.data.channelId
            }

            <div>
                <span>Courses: </span>
                {
                    courses?.data.courses.join(" - ")
                }

            </div>
        </div>
    );
};

export default DependentQueriesPage;
