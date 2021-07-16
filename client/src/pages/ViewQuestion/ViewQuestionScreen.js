import React from "react";
import LeftSideBar from "../../components/LeftSideBar";
import Alert from "../../components/Alert";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionSection from "./QuestionSection/QuestionSection"
import AnswerSection from "./AnswerSection/AnswerSection"

const ViewQuestionScreen = () => {
  // const [post, setPost] = useState({});
  const location = useLocation();
  
  const loadingAnswers = useSelector(state => state.answer.loading)
  const loadingQuestion = useSelector(state => state.question.loading)
  
  
  return (
    <React.Fragment>
        <Alert />
        <LeftSideBar/>
        
        <div className="flex flex-row pl-72 min-h-screen" style={{ backgroundColor: "rgb(50, 50, 50)"}}>
          <div className="flex flex-col w-3/4">
            <QuestionSection question_id={location.pathname.split('/')[2]} />
            <AnswerSection question_id = {location.pathname.split('/')[2]} />
          </div>
          <div className="mt-16 mr-10 ml-10 w-1/4">
          {(!loadingAnswers && !loadingQuestion)}
          </div>
          {/* <ViewQuestion post={post} id={location.pathname.split("/")[2]} /> */}
        </div>


    </React.Fragment>
  );
};
export default ViewQuestionScreen;
