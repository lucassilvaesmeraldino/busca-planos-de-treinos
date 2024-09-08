function findWorkoutResults() {
    event.preventDefault();
    let listResults = document.getElementById('divWorkoutResults');
    let htmlResults = '';
    let workoutDataFiltered= filterWorkoutResults();
    for (let workout of workoutDataFiltered) {
        htmlResults += `
            <div class="workouts">
                <h3>${workout.title}</h3>
                <ul class="exercisesList">
                    ${workout.exercises.map(exercicie => `<li>${exercicie.name} - ${exercicie.rounds} x ${exercicie.amount} ${exercicie.amount_sufix}</li>`).join('')}
                </ul>
                <p class="time">Tempo estimado: ${workout.time} minutos</p>
                <p>Gasto calórico: ${workout.calories} calorias</p>
            </div>
        `;
    }
    if (workoutDataFiltered.length === 0) {
        htmlResults += '<p class="noResults">Nenhum treino encontrado</p>';
    }
    listResults.innerHTML = htmlResults;
}

function filterWorkoutResults() {
    return workoutData.filter(workout => {
        let workoutFocusFilter = document.getElementById('selectFocusWorkout').value;
        if (workoutFocusFilter && workout.focus !== workoutFocusFilter) {
            return false;
        }
        let workoutLevelFilter = document.getElementById('selectLevelWorkout').value;
        if (workoutLevelFilter && workout.level !== workoutLevelFilter) {
            return false;
        }
        let workoutMaximumTimeFilter = document.getElementById('inputMaximumTime').value;
        if (workoutMaximumTimeFilter && workout.time > workoutMaximumTimeFilter) {
            return false;
        }
        let workoutTitleFilter = document.getElementById('inputNameWorkout').value.toUpperCase();
        if (workoutTitleFilter && !workout.title.toUpperCase().includes(workoutTitleFilter)) {
            return false;
        }
        return true;
    });
}

function addOptionDefault(selectElement) {
    selectElement.innerHTML = '<option value="">Nenhuma opção</option>';
}

function loadLevelWorkoutSelectOptions() {
    let selectLevelWorkout = document.getElementById('selectLevelWorkout');
    addOptionDefault(selectLevelWorkout);
    levelWorkoutData.map(level => selectLevelWorkout.innerHTML += `<option value="${level}">${level}</option>`);
}

function loadFocusWorkoutSelectOptions() {
    let selectFocusWorkout = document.getElementById('selectFocusWorkout');
    addOptionDefault(selectFocusWorkout);
    focusWorkoutData.map(focus => selectFocusWorkout.innerHTML += `<option value="${focus}">${focus}</option>`);
}

window.addEventListener('DOMContentLoaded', function() {
    loadLevelWorkoutSelectOptions();
    loadFocusWorkoutSelectOptions();
});

document.getElementById('formSearchWorkouts').addEventListener('submit', findWorkoutResults);