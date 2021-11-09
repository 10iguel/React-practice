//First practices with react
import ApprovalCard from "./ApprovalCard";
import {CommentDetail} from "./CommentDetail";
import faker from "faker"


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail children="Miguel" time="Today at 4:15pm" comment="This is bad"
                               avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail children="Man" time="Today at 4:15" comment="This is not good"
                               avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail children="Hymn" time="Today at 4:05" comment="Holly Jolly"
                               avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>


    )
}
