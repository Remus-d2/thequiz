export const menuOptions = [
    {
        menuText: 'Choose a quiz!',
        menuOptions: [
            { optionText: 'GEOGRAPHY', id: 0 },
            { optionText: 'HISTORY', id: 1 },
            { optionText: 'SCIENCE', id: 2 },
            { optionText: 'GAMING', id: 3 },
        ],
    },
]

export const geoQuestions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'What is Eath\'s largest continent?',
        answerOptions: [
            { answerText: 'Antartica', isCorrect: false },
            { answerText: 'Africa', isCorrect: false },
            { answerText: 'Asia', isCorrect: true },
            { answerText: 'Europe', isCorrect: false },
        ],
    },
    {
        questionText: 'What country has the most natural lakes?',
        answerOptions: [
            { answerText: 'Australia', isCorrect: false },
            { answerText: 'Canada', isCorrect: true },
            { answerText: 'India', isCorrect: false },
            { answerText: 'United States', isCorrect: false },
        ],
    },
    {
        questionText: 'What African country served as the setting for Tatooine in Star Wars?',
        answerOptions: [
            { answerText: 'Ghana', isCorrect: false },
            { answerText: 'Ethiopia', isCorrect: false },
            { answerText: 'Tunisia', isCorrect: true },
            { answerText: 'Gabon', isCorrect: false },
        ],
    },
]

export const hisQuestions = [
    {
        questionText: 'What sport\'s hall of fame enshrined Abraham Lincoln for having a stellar record of just one loss?',
        answerOptions: [
            { answerText: 'Wrestling', isCorrect: true },
            { answerText: 'Boxing', isCorrect: false },
            { answerText: 'Fencing', isCorrect: false },
            { answerText: 'Swimming', isCorrect: false },
        ],
    },
    {
        questionText: 'Ever since World War Two, what beverage’s equipment is furnished in British battle tanks?',
        answerOptions: [
            { answerText: 'Coffee', isCorrect: false },
            { answerText: 'Soda', isCorrect: false },
            { answerText: 'Tea', isCorrect: true },
            { answerText: 'Lemonade', isCorrect: false },
        ],
    },
    {
        questionText: 'In USSR, What does the letter “R” sand for?',
        answerOptions: [
            { answerText: 'Reason', isCorrect: false },
            { answerText: 'Red', isCorrect: false },
            { answerText: 'Random', isCorrect: false },
            { answerText: 'Republics', isCorrect: true },
        ],
    },
    {
        questionText: 'Who is the Greek God of the Underworld?',
        answerOptions: [
            { answerText: 'Zeus', isCorrect: false },
            { answerText: 'Hades', isCorrect: true },
            { answerText: 'Ares', isCorrect: false },
            { answerText: 'Athena', isCorrect: false },
        ],
    },
]

export const sciQuestions = [
    {
        questionText: 'How many bones are in the human body?',
        answerOptions: [
            { answerText: '300', isCorrect: false },
            { answerText: '120', isCorrect: false },
            { answerText: '206', isCorrect: true },
            { answerText: '408', isCorrect: false },
        ],
    },
    {
        questionText: 'The concept of gravity was discovered by which famous physicist?',
        answerOptions: [
            { answerText: 'Albert Einstein', isCorrect: false },
            { answerText: 'Henry Coanda', isCorrect: false },
            { answerText: 'Pitagora', isCorrect: false },
            { answerText: 'Sir Isaac Newton', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the biggest planet in our solar system?',
        answerOptions: [
            { answerText: 'Pluto', isCorrect: false },
            { answerText: 'Jupiter', isCorrect: true },
            { answerText: 'Mercury', isCorrect: false },
            { answerText: 'Neptune', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a material that will not carry an electrical charge called?',
        answerOptions: [
            { answerText: 'Insulator', isCorrect: true },
            { answerText: 'Polyester', isCorrect: false },
            { answerText: 'Copper', isCorrect: false },
            { answerText: 'Urbanite', isCorrect: false },
        ],
    },
]

export const gamQuestions = [
    {
        questionText: 'Which God confronts Kratos at the end of God of War (2018)?',
        answerOptions: [
            { answerText: 'Thor', isCorrect: true },
            { answerText: 'Ares', isCorrect: false },
            { answerText: 'Zeus', isCorrect: false },
            { answerText: 'Odin', isCorrect: false },
        ],
    },
    {
        questionText: 'Mortal Kombat fighter Sub-Zero has been the grandmaster of what clan?',
        answerOptions: [
            { answerText: 'Shiray Ryu', isCorrect: false },
            { answerText: 'Minamoto', isCorrect: false },
            { answerText: 'Lin Kuei', isCorrect: true },
            { answerText: 'Takeda', isCorrect: false },
        ],
    },
    {
        questionText: 'Call of Duty Warzone\'s main map is set in what fictional city?',
        answerOptions: [
            { answerText: 'Bucharest', isCorrect: false },
            { answerText: 'Pripyat', isCorrect: false },
            { answerText: 'Moscow', isCorrect: false },
            { answerText: 'Verdansk', isCorrect: true },
        ],
    },
    {
        questionText: 'In Half-Life 2, what creature is Dr. Kleiner\'s pet Lamarr?',
        answerOptions: [
            { answerText: 'Gonarch', isCorrect: false },
            { answerText: 'Headcrab', isCorrect: true },
            { answerText: 'Antlion', isCorrect: false },
            { answerText: 'Gargantua', isCorrect: false },
        ],
    },
]