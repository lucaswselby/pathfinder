// Action class
class Action {
    constructor(name, description, cost, prerequisites, spellLevel, criticalSuccess, success, failure, criticalFailure) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.prerequisites = prerequisites;
        this.spellLevel = spellLevel;
        this.criticalSuccess = criticalSuccess;
        this.success = success;
        this.failure = failure;
        this.criticalFailure = criticalFailure;
    }
}

// Actions
const noAction = new Action("", "", 0, [], 0, "", "", "", "");
const strike = new Action("Strike", "You attack with a weapon you're wielding or with an unarmed attack, targeting one creature within your reach (for a melee attack) or within range (for a ranged attack). Roll the attack roll for the weapon or unarmed attack you are using, and compare the result to the target creature's AC to determine the effect. See Attack Rolls and Damage for details on calculating your attack and damage rolls.", 1, [], 0, "As success, but you deal double damage.", "You deal damage according to the weapon or unarmed attack, including any modifiers, bonuses, and penalties you have to damage.", "", "");
const doubleSlice = new Action("Double Slice", "You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that doesn't have the agile trait, it takes a -2 penalty.\n\nIf both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.", 2, ["You are wielding two melee weapons, each in a different hand."], 0, "", "", "", "");
const actions = [noAction, strike, doubleSlice];
const actionNames = actions.map(action => {
    return action.name;
});

const numberOfTurns = () => {
    let turns = 3;
    if (document.getElementById("quickened").checked) {
        turns++;
    }
    if (document.getElementById("slowed1").checked) {
        turns--;
    }
    if (document.getElementById("slowed2").checked) {
        turns--;
    }
    if (document.getElementById("slowed3").checked) {
        turns--;
    }
    return turns;
};

// display action when chosen in dropdown menu
document.getElementById("turn1_option").onchange = () => {

    // limits actions by cost
    let availableActions = actions.filter((action) => {
        return action.cost <= numberOfTurns();
    });

    // displays info for the chosen action
    let action = availableActions[actionNames.indexOf(document.getElementById("turn1_option").value)];
    document.getElementById("turn1_name").innerHTML = action.name;

    // disables future turns for multi-turn actions
    if (action.cost > 1) {
        document.getElementById("turn2").style.visibility = "hidden";
        document.getElementById("turn2_option").value = "";
        document.getElementById("turn2_name").innerHTML = "";
        if (action.cost > 2) {
            document.getElementById("turn3").style.visibility = "hidden";
            document.getElementById("turn3_option").value = "";
            document.getElementById("turn3_name").innerHTML = "";
        }
        else {
            document.getElementById("turn3").style.visibility = "visible";
        }
    }
    else {
        document.getElementById("turn2").style.visibility = "visible";
    }
};
document.getElementById("turn2_option").onchange = () => {
    
    // limits actions by cost
    let availableActions = actions.filter((action) => {
        return action.cost <= numberOfTurns() - 1;
    });

    // displays info for the chosen action
    let action = availableActions[actionNames.indexOf(document.getElementById("turn2_option").value)];
    document.getElementById("turn2_name").innerHTML = action.name;

    // disables future turns for multi-turn actions
    if (action.cost > 1) {
        document.getElementById("turn3").style.visibility = "hidden";
        document.getElementById("turn3_option").value = "";
        document.getElementById("turn3_name").innerHTML = "";
        if (action.cost > 2) {
            document.getElementById("turn4").style.visibility = "hidden";
            document.getElementById("turn4_option").value = "";
            document.getElementById("turn4_name").innerHTML = "";
        }
        else {
            document.getElementById("turn4").style.visibility = "visible";
        }
    }
    else {
        document.getElementById("turn3").style.visibility = "visible";
    }
};
document.getElementById("turn3_option").onchange = () => {
    
    // limits actions by cost
    let availableActions = actions.filter((action) => {
        return action.cost <= numberOfTurns() - 2;
    });

    let action = availableActions[actionNames.indexOf(document.getElementById("turn3_option").value)];
    document.getElementById("turn3_name").innerHTML = action.name;

    // disables future turns for multi-turn actions
    if (action.cost > 1) {
        document.getElementById("turn4").style.visibility = "hidden";
        document.getElementById("turn4_option").value = "";
        document.getElementById("turn4_name").innerHTML = "";
    }
    else {
        document.getElementById("turn4").style.visibility = "visible";
    }
};
document.getElementById("turn4_option").onchange = () => {
    
    // limits actions by cost
    let availableActions = actions.filter((action) => {
        return action.cost <= numberOfTurns() - 3;
    });

    let action = availableActions[actionNames.indexOf(document.getElementById("turn4_option").value)];
    document.getElementById("turn4_name").innerHTML = action.name;
};

// changes number of turns by conditions
const applyCondition = () => {

    // sets number of turns by condition
    let turns = numberOfTurns();

    // displays number of turns
    if (turns > 0) {
        document.getElementById("turn1").style.display = "block";
        document.getElementById("turns").style.grid = "100% / repeat(1, auto)";
        if (turns > 1) {
            document.getElementById("turn2").style.display = "block";
            document.getElementById("turns").style.grid = "100% / repeat(2, auto)";
            if (turns > 2) {
                document.getElementById("turn3").style.display = "block";
                document.getElementById("turns").style.grid = "100% / repeat(3, auto)";
                if (turns > 3) {
                    document.getElementById("turn4").style.display = "block";
                    document.getElementById("turns").style.grid = "100% / repeat(4, auto)";
                }
                else {
                    document.getElementById("turn4").style.display = "none";
                    document.getElementById("turns").style.grid = "100% / repeat(3, auto)";
                }
            }
            else {
                document.getElementById("turn3").style.display = "none";
                document.getElementById("turns").style.grid = "100% / repeat(2, auto)";
            }
        }
        else {
            document.getElementById("turn2").style.display = "none";
            document.getElementById("turns").style.grid = "100% / repeat(1, auto)";
        }
    }
    else {
        document.getElementById("turn1").style.display = "none";
    }
}
document.getElementById("quickened").onclick = applyCondition;
document.getElementById("slowed1").onclick = applyCondition;
document.getElementById("slowed2").onclick = applyCondition;
document.getElementById("slowed3").onclick = applyCondition;