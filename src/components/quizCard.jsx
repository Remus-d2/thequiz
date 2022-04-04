import React, {useState, useEffect} from 'react';
import {CardBody, CardBox, CardHeader, CardHeading, CardOption} from '../styles/Card';
import {menuOptions, geoQuestions, hisQuestions, sciQuestions, gamQuestions} from '../resources/Questions';
import toast from 'react-hot-toast';

const QuizCard = () => {

    const [showMenu, setShowMenu] = useState(true);
    const [showScore, setShowScore] = useState(false);
    const [currentArray, setCurrentArray] = useState([{}]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {

    });

    const handleMenuEvent = (e) => {
        e.preventDefault();
        setShowMenu(false);
        const currentId =  e.target.id;
      
      
       switch(currentId) {
         case 1:
             setCurrentArray(hisQuestions);
             console.log(currentId);
             console.log(currentArray);
             break;
         case 2:
             setCurrentQuestion(sciQuestions);
             console.log(currentId);
             console.log(currentArray);
             break;
         case 3:
             setCurrentQuestion(gamQuestions);
             console.log(currentId);
             console.log(currentArray);
             break;
        default:
           // console.log(currentArray);
            setCurrentArray(geoQuestions);
            console.log(currentId);
       }
         
    };

    const handleAnswerClick = (isCorrect) => {

        if(isCorrect) {
            toast.success('The answer is correct!');
            setScore(score + 1);
        } else {
            toast.error('Wrong answer!');
        }

        const nextQuestion = currentQuestion + 1;

        if(nextQuestion < currentArray.length) {
        setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }

    };

    return (
        <>
        { showScore ? ''
        :
        <CardBox>
            <CardHeader>
                <CardHeading>{showMenu ? menuOptions[0].menuText : currentArray[currentQuestion].questionText}</CardHeading>
            </CardHeader>

            
            <CardBody>
               {showMenu ? menuOptions[0].menuOptions.map((option) => (
                   <CardOption key={option.id} id={option.id} onClick={handleMenuEvent}>{option.optionText}</CardOption>
               ))
               :
               currentArray[currentQuestion].answerOptions.map((answerOption, index) => (
                   <CardOption key={index} id={answerOption.id} onClick={() => handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</CardOption>
               ))
            }
            </CardBody>
        </CardBox>
}
        </>
    );
}

export default QuizCard;