let levelWorkoutData = ['Iniciante', 'Intermediário', 'Avançado'];

let focusWorkoutData = ['Cardio', 'Pernas', 'Abdominais', 'Braços', 'Geral'];

let workoutData = [
    {
        title : 'TREINO GERAL',
        exercises : [
            {
                name : 'FLEXÃO',
                amount: 10,
                rounds: 3,
                amount_sufix: 'repetições'
            },
            {
                name : 'AGACHAMENTO',
                amount : 15,
                rounds: 10,
                amount_sufix: 'repetições'
            },
            {
                name : 'ABDOMINAL',
                amount : 15,
                rounds: 4,
                amount_sufix: 'repetições'
            }
        ],
        calories : 200,
        focus: focusWorkoutData[4],
        level: levelWorkoutData[1],
        time: 30
    },
    {
        title : 'TREINO PERNAS',
        exercises : [
            {
                name : 'AGACHAMENTO',
                rounds: 4,
                amount: 12,
                amount_sufix: 'repetições'
            },
            {
                name : 'LEG PRESS',
                rounds: 3,
                amount : 10,
                amount_sufix: 'repetições'
            },
            {
                name : 'EXTENSÃO DE PERNA',
                rounds: 4,
                amount : 15,
                amount_sufix: 'repetições'
            }
        ],
        calories : 250,
        focus: focusWorkoutData[1],
        level: levelWorkoutData[0],
        time: 40
    },
    {
        title : 'TREINO SUPERIOR',
        exercises : [
            {
                name : 'REMO',
                amount: 10,
                rounds: 1,
                amount_sufix: 'repetições'
            },
            {
                name : 'SUPINO',
                amount : 8,
                rounds: 3,
                amount_sufix: 'repetições'
            },
            {
                name : 'MILITAR',
                amount : 12,
                rounds: 3,
                amount_sufix: 'repetições'
            }
        ],
        calories : 220,
        focus: focusWorkoutData[3],
        level: levelWorkoutData[2],
        time: 35
    },
    {
        title : 'TREINO ABDOMINAL',
        exercises : [
            {
                name : 'ABDOMINAL',
                amount: 20,
                rounds: 3,
                amount_sufix: 'repetições'
            },
            {
                name : 'RUSSIAN TWIST',
                amount : 15,
                rounds: 3,
                amount_sufix: 'repetições'
            },
            {
                name : 'PLANK',
                amount : 2,
                rounds: 3,
                amount_sufix: 'minutos'
            }
        ],
        calories : 180,
        focus: focusWorkoutData[2],
        level: levelWorkoutData[0],
        time: 25
    },
    {
        title : 'TREINO CARDIO',
        exercises : [
            {
                name : 'CORRIDA',
                amount : 10,
                rounds: 1,
                amount_sufix: 'minutos'
            }
        ],
        calories : 350,
        focus: focusWorkoutData[0],
        level: levelWorkoutData[0],
        time: 10
    }
];