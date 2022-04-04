import React, { useState, useEffect } from 'react';
import { CardBody, CardBox, CardHeader, CardHeading, CardOption } from '../styles/Card';
import { menuOptions, geoQuestions, hisQuestions, sciQuestions, gamQuestions } from '../resources/Questions';
import toast from 'react-hot-toast';
import { ResultsBody, ResultsBox, ResultsHeader, ResultsHeading, ResultsParagraph, ResultsLink, ResultsRowBox, ResultsReset } from '../styles/Results';

const QuizCard = () => {

    const [showMenu, setShowMenu] = useState(true);
    const [showScore, setShowScore] = useState(false);
    const [lastUsed, setLastUsed] = useState('');
    const [currentArray, setCurrentArray] = useState([{}]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {

    });

    const handleMenuEvent = (e, prevState) => {
        e.preventDefault();
        setShowMenu(false);
        const currentId = e.target.id;


        switch (parseInt(currentId)) {
            case 1:
                setCurrentArray(hisQuestions);
                setLastUsed('history');
                console.log(currentId);
                console.log(currentArray);
                break;
            case 2:
                setCurrentArray(sciQuestions);
                setLastUsed('science');
                console.log(currentId);
                console.log(currentArray);
                break;
            case 3:
                setCurrentArray(gamQuestions);
                setLastUsed('gaming');
                console.log(currentId);
                console.log(currentArray);
                break;
            default:
                // console.log(currentArray);
                setCurrentArray(geoQuestions);
                setLastUsed('geography');
                console.log(currentId);
        }
        return currentArray;
    };

    const handleAnswerClick = (isCorrect) => {

        if (isCorrect) {
            toast.success('The answer is correct!');
            setScore(score + 1);
        } else {
            toast.error('Wrong answer!');
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < currentArray.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    };

    const handleReset = () => {
        setShowMenu(false);
        setShowScore(false);
        switch (lastUsed) {
            case 'history':
                setCurrentArray(hisQuestions);
                break;
            case 'science':
                setCurrentArray(sciQuestions);
                break;
            case 'gaming':
                setCurrentArray(gamQuestions);
                break;
            default:
                setCurrentArray(geoQuestions);
        }
        setCurrentQuestion(0);
        setScore(0);
    };

    return (
        <>
            {showScore ?
                <ResultsBox>
                    <ResultsHeader>
                        <ResultsHeading>{score > 1 ? 'Hooray!' : 'Making mistakes is the first step to success.'}</ResultsHeading>
                    </ResultsHeader>

                    <ResultsBody>
                        <ResultsParagraph>You've scored</ResultsParagraph>
                        <ResultsHeading>{score}</ResultsHeading>
                        <ResultsParagraph>{score > 1 ? 'Go ahead and try another quiz!' : 'Go ahead and try again.'}</ResultsParagraph>
                        <ResultsRowBox>
                            <ResultsReset onClick={handleReset}>Retry</ResultsReset>
                            <ResultsLink href='/'>Home</ResultsLink>
                        </ResultsRowBox>
                    </ResultsBody>

                </ResultsBox>
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