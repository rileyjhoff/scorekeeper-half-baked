// consider: what data type is game here? where will you need to pass this data type in your app?
export function renderGame(name1, name2, score1, score2) {
    const div = document.createElement('div');
    const team1Div = renderTeam(name1, score1);
    const team2Div = renderTeam(name2, score2);

    div.append(team1Div, team2Div);

    div.classList.add('game');

    return div;
}

export function renderTeam(name, score) {
    const teamDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');

    nameDiv.textContent = name;
    scoreDiv.textContent = score;

    teamDiv.append(nameDiv, scoreDiv);

    return teamDiv;
}

export function renderTeamInputs(teamNumber) {
    const labelEl = document.createElement('label');
    const inputEl = document.createElement('input');

    labelEl.textContent = `Team ${teamNumber} name`;

    labelEl.append(inputEl);

    return labelEl;
}

export function renderNameButton() {
    let nameButtonEl = document.createElement('button');

    nameButtonEl.textContent = 'Name teams';
    // nameButtonEl.setAttribute('id', 'name-form-button');


    return nameButtonEl;
}