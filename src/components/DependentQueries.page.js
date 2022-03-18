import {useQuery} from "react-query";
import axios from "axios";

const fetchUserByEmail = async (email) => {
    return await axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelID = async (channelId) => {
    return await axios.get(`http://localhost:4000/channels/${channelId}`)
}

const spaceBetweenWord = word => {
    return word.join(' - ')
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
                    spaceBetweenWord(courses?.data.courses)
                }

            </div>
        </div>
    );
};

export default DependentQueriesPage;
