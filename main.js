// Switch grid orientation based on screen size
// https://areknawo.com/css-media-rule-in-javascript/
var mediaQuery = matchMedia("only screen and (max-width: 600px)");
var phoneMedia = mediaQuery.matches;
const switchGrid = turns => {
    phoneMedia = mediaQuery.matches;
    if (phoneMedia) {
        document.getElementById("turns").style.grid = `repeat(${turns}, auto) / 100%`;
        document.getElementById("turn1").style.width = "auto";
        document.getElementById("turn2").style.width = "auto";
        document.getElementById("turn3").style.width = "auto";
        document.getElementById("turn4").style.width = "auto";
    }
    else {
        document.getElementById("turns").style.grid = `100% / repeat(${turns}, auto)`;
        document.getElementById("turn1").style.width = `${Math.floor(100 / turns)}vw`;
        document.getElementById("turn2").style.width = `${Math.floor(100 / turns)}vw`;
        document.getElementById("turn3").style.width = `${Math.floor(100 / turns)}vw`;
        document.getElementById("turn4").style.width = `${Math.floor(100 / turns)}vw`;
    }
}
switchGrid(3);
document.getElementsByTagName("BODY")[0].onresize = () => {
    switchGrid(numberOfTurns());
}

// Action class
class Action {
    constructor(name, tags, description, cost, requirements, spellLevel, criticalSuccess, success, failure, criticalFailure) {
        this.name = name;
        this.tags = tags;
        this.description = description;
        this.cost = cost;
        this.requirements = requirements;
        this.spellLevel = spellLevel;
        this.criticalSuccess = criticalSuccess;
        this.success = success;
        this.failure = failure;
        this.criticalFailure = criticalFailure;
    }
}

// Actions
const noAction = new Action("", [], "", 0, [], 0, "", "", "", "");

// Skills
const recallKnowledge = new Action("Recall Knowledge", ["CONCENTRATE", "SECRET"], "You attempt a skill check to try to remember a bit of knowledge regarding a topic related to that skill. The GM determines the DCs for such checks and which skills apply.", 1, [], 0, "You recall the knowledge accurately and gain additional information or context.", "You recall the knowledge accurately or gain a useful clue about your current situation.", "", "You recall incorrect information or gain an erroneous or misleading clue.");
const balance = new Action("Balance", ["MOVE"], "You move across a narrow surface or uneven ground, attempting an Acrobatics check against its Balance DC. You are flat-footed while on a narrow surface or uneven ground.", 1, ["You are in a square that contains a narrow surface, uneven ground, or another similar feature."], 0, "You move up to your Speed.", "You move up to your Speed, treating it as difficult terrain (every 5 feet costs 10 feet of movement).", "You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.", "You fall and your turn ends.");
const tumbleThrough = new Action("Tumble Through", ["MOVE"], "You Stride up to your Speed. During this movement, you can try to move through the space of one enemy. Attempt an Acrobatics check against the enemy's Reflex DC as soon as you try to enter its space. You can Tumble Through using Climb, Fly, Swim, or another action instead of Stride in the appropriate environment.", 1, [], 0, "", "You move through the enemy's space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don't have enough Speed to move all the way through its space, you get the same effect as a failure.", "Your movement ends, and you trigger reactions as if you had moved out of the square you started in.", "");
const maneuverInFlight = new Action("Maneuver in Flight", ["MOVE"], "You try a difficult maneuver while flying. Attempt an Acrobatics check. The GM determines what maneuvers are possible, but they rarely allow you to move farther than your fly Speed.", 1, ["You have a fly Speed."], 0, "", "You succeed at the maneuver.", "Your maneuver fails. The GM chooses if you simply can't move or if some other detrimental effect happens. The outcome should be appropriate for the maneuver you attempted (for instance, being blown off course if you were trying to fly against a strong wind).", "As failure, but the consequence is more dire.");
const climb = new Action("Climb", ["MOVE"], "You move up, down, or across an incline. Unless it's particularly easy, you must attempt an Athletics check. The GM determines the DC based on the nature of the incline and environmental circumstances. You’re flat-footed unless you have a climb Speed.", 1, ["You have both hands free."], 0, "You move up, across, or safely down the incline for 5 feet plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).", "You move up, across, or safely down the incline for 5 feet per 20 feet of your land Speed (a total of 5 feet for most PCs, minimum 5 feet if your Speed is below 20 feet).", "", "You fall. If you began the climb on stable ground, you fall and land prone.");
const forceOpen = new Action("Force Open", ["ATTACK"], "Using your body, a lever, or some other tool, you attempt to forcefully open a door, window, container or heavy gate. With a high enough result, you can even smash through walls. Without a crowbar, prying something open takes a -2 item penalty to the Athletics check to Force Open.", 1, [], 0, "You open the door, window, container, or gate and can avoid damaging it in the process.", "You break the door, window, container, or gate open, and the door, window, container, or gate gains the broken condition. If it's especially sturdy, the GM might have it take damage but not be broken.", "", "Your attempt jams the door, window, container, or gate shut, imposing a -2 circumstance penalty on future attempts to Force it Open.");
const grapple = new Action("Grapple", ["ATTACK"], "You attempt to grab an opponent with your free hand. Attempt an Athletics check against their Fortitude DC. You can also Grapple to keep your hold on a creature you already grabbed.", 1, ["You have at least one free hand.", "Your target cannot be more than one size larger than you."], 0, "Your opponent is restrained until the end of your next turn unless you move or your opponent Escapes (page 470).", "Your opponent is grabbed until the end of your next turn unless you move or your opponent Escapes.", "You fail to grab your opponent. If you already had the opponent grabbed or restrained using a Grapple, those conditions on that creature end.", "If you already had the opponent grabbed or restrained, it breaks free. Your target can either grab you, as if it succeeded at using the Grapple action against you, or force you to fall and land prone.");
const highJump = new Action("High Jump", [], "You Stride, then make a vertical Leap and attempt a DC 30 Athletics check to increase the height of your jump. If you didn't Stride at least 10 feet, you automatically fail your check. This DC might be increased or decreased due to the situation, as determined by the GM.", 2, [], 0, "Increase the maximum vertical distance to 8 feet, or increase the maximum vertical distance to 5 feet and maximum horizontal distance to 10 feet.", "Increase the maximum vertical distance to 5 feet.", "You Leap normally.", "You don't Leap at all, and instead you fall prone in your space.");
const longJump = new Action("Long Jump", [], "You Stride, then make a horizontal Leap and attempt an Athletics check to increase the length of your jump. The DC of the Athletics check is equal to the total distance in feet you're attempting to move during your Leap (so you'd need to succeed at a DC 20 check to Leap 20 feet). You can't Leap farther than your Speed./nIf you didn't Stride at least 10 feet, or if you attempt to jump in a different direction than your Stride, you automatically fail your check. This DC might be increased or decreased due to the situation, as determined by the GM.", 2, [], 0, "", "Increase the maximum horizontal distance you Leap to the desired distance.", "You Leap normally.", "You Leap normally, but then fall and land prone.");
const shove = new Action("Shove", ["ATTACK"], "You push an opponent away from you. Attempt an Athletics check against your opponent's Fortitude DC.", 1, ["You have at least one hand free.", "The target can't be more than one size larger than you."], 0, "You push your opponent up to 10 feet away from you. You can Stride after it, but you must move the same distance and in the same direction.", "You push your opponent back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.", "", "You lose your balance, fall, and land prone.");
const swim = new Action("Swim", ["MOVE"], "You propel yourself through water. In most calm water, you succeed at the action without needing to attempt a check. If you must breathe air and you're submerged in water, you must hold your breath each round. If you fail to hold your breath, you begin to drown (as described on page 478). If the water you are swimming in is turbulent or otherwise dangerous, you might have to attempt an Athletics check to Swim.\nIf you end your turn in water and haven't succeeded at a Swim action that turn, you sink 10 feet or get moved by the current, as determined by the GM. However, if your last action on your turn was to enter the water, you don't sink or move with the current that turn.", 1, [], 0, "You move through the water 10 feet, plus 5 feet per 20 feet of your land Speed (a total of 15 feet for most PCs).", "You move through the water 5 feet, plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).", "", "You make no progress, and if you're holding your breath, you lose 1 round of air.");
const trip = new Action("Trip", ["ATTACK"], "You try to knock an opponent to the ground. Attempt an Athletics check against the target's Reflex DC.", 1, ["You have at least one hand free.", "Your target can't be more than one size larger than you."], 0, "The target falls and lands prone and takes 1d6 bludgeoning damage.", "The target falls and lands prone.", "You lose your balance and fall and land prone.");
const disarm = new Action("Disarm", ["ATTACK"], "You try to knock something out of an opponent's grasp. Attempt an Athletics check against the opponent's Reflex DC.", 1, ["You have at least one hand free.", "The target can't be more than one size larger than you."], 0, "You knock the item out of the opponent's grasp. It falls to the ground in the opponent's space.", "You weaken your opponent's grasp on the item. Until the start of that creature's turn, attempts to Disarm the opponent of that item gain a +2 circumstance bonus, and the target takes a -2 circumstance penalty to attacks with the item or other checks requiring a firm grasp on the item.", "", "You lose your balance and become flat-footed until the start of your next turn.");
const createADiversion = new Action("Create a Diversion", ["MENTAL"], "With a gesture, a trick, or some distracting words, you can create a diversion that draws creatures' attention elsewhere. If you use a gesture or trick, this action gains the manipulate trait. If you use distracting words, it gains the auditory and linguistic traits.\nAttempt a single Deception check and compare it to the Perception DCs of the creatures whose attention you're trying to divert. Whether or not you succeed, creatures you attempt to divert gain a +4 circumstance bonus to their Perception DCs against your attempts to Create a Diversion for 1 minute.", 1, [], 0, "", "You become hidden to each creature whose Perception DC is less than or equal to your result. (The hidden condition allows you to Sneak away, as described on page 252.) This lasts until the end of your turn or until you do anything except Step or use the Hide or the Sneak action of the Stealth skill (pages 251 and 252). If you Strike a creature, the creature remains flat-footed against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise.", "You don't divert the attention of any creatures whose Perception DC exceeds your result, and those creatures are aware you were trying to trick them.", "");
const feint = new Action("Feint", ["MENTAL"], "With a misleading flourish, you leave an opponent unprepared for your real attack. Attempt a Deception check against that opponent's Perception DC.", 1, ["You are within melee reach of the opponent you attempt to Feint."], 0, "You throw your enemy's defenses against you entirely off. The target is flat-footed against melee attacks that you attempt against it until the end of your next turn.", "Your foe is fooled, but only momentarily. The target is flat-footed against the next melee attack that you attempt against it before the end of your current turn.", "", "Your feint backfires. You are flat-footed against melee attacks the target attempts against you until the end of your next turn.");
const request = new Action("Request", ["AUDITORY", "CONCENTRATE", "LINGUISTIC", "MENTAL"], "You can make a request of a creature that's friendly or helpful to you. You must couch the request in terms that the target would accept given their current attitude toward you. The GM sets the DC based on the difficulty of the request. Some requests are unsavory or impossible, and even a helpful NPC would never agree to them.", 1, [], 0, "The target agrees to your request without qualifications.", "The target agrees to your request, but they might demand added provisions or alterations to the request.", "The target refuses the request, though they might propose an alternative that is less extreme.", "Not only does the target refuse the request, but their attitude toward you decreases by one step due to the temerity of the request.");
const demoralize = new Action("Demoralize", ["AUDITORY", "CONCENTRATE", "EMOTION", "MENTAL"], "With a sudden shout, a well-timed taunt, or a cutting put- down, you can shake an enemy's resolve. Choose a creature within 30 feet of you who you're aware of. Attempt an Intimidation check against that target's Will DC. If the target does not understand the language you are speaking, you're not speaking a language, or they can't hear you, you take a -4 circumstance penalty to the check. Regardless of your result, the target is temporarily immune to your attempts to Demoralize it for 10 minutes.", 1, [], 0, "The target becomes frightened 2.", "The target becomes frightened 1.", "", "");
const administerFirstAid = new Action("Administer First Aid", ["MANIPULATE"], "You perform first aid on an adjacent creature that is dying or bleeding. If a creature is both dying and bleeding, choose which ailment you're trying to treat before you roll. You can Administer First Aid again to attempt to remedy the other effect.<ul><li><strong>Stabilize</strong> Attempt a Medicine check on a creature that has 0 Hit Points and the dying condition. The DC is equal to 5 + that creature's recovery roll DC (typically 15 + its dying value).</li><li><strong>Stop Bleeding</strong> Attempt a Medicine check on a creature that is taking persistent bleed damage (page 452), giving them a chance to make another flat check to remove the persistent damage. The DC is usually the DC of the effect that caused the bleed.</li></ul>", 2, ["You have healer's tools (page 290)."], 0, "", "If you're trying to stabilize, the creature loses the dying condition (but remains unconscious). If you're trying to stop bleeding, the creature attempts a flat check to end the bleeding.", "", "If you were trying to stabilize, the creature's dying value increases by 1. If you were trying to stop bleeding, it immediately takes an amount of damage equal to its persistent bleed damage.");
const treatPoison = new Action("Treat Poison", ["MANIPULATE"], "You treat a patient to prevent the spread of poison. Attempt a Medicine check against the poison's DC. After you attempt to Treat a Poison for a creature, you can't try again until after the next time that creature attempts a save against the poison.", 1, ["You have healer's tools (page 290)."], 0, "You grant the creature a +4 circumstance bonus to its next saving throw against the poison.", "You grant the creature a +2 circumstance bonus to its next saving throw against the poison.", "", "Your efforts cause the creature to take a -2 circumstance penalty to its next save against the poison.");
const commandAnAnimal = new Action("Command an Animal", ["AUDITORY", "CONCENTRATE"], "You issue an order to an animal. Attempt a Nature check against the animal's Will DC. The GM might adjust the DC if the animal has a good attitude toward you, you suggest a course of action it was predisposed toward, or you offer it a treat.\nYou automatically fail if the animal is hostile or unfriendly to you. If the animal is helpful to you, increase your degree of success by one step. You might be able to Command an Animal more easily with a feat like Ride (page 266).\nMost animals know the Leap, Seek, Stand, Stride, and Strike basic actions. If an animal knows an activity, such as a horse's Gallop, you can Command the Animal to perform the activity, but you must spend as many actions on Command an Animal as the activity's number of actions. You can also spend multiple actions to Command the Animal to perform that number of basic actions on its next turn; for instance, you could spend 3 actions to Command an Animal to Stride three times or to Stride twice and then Strike.", 1, [], 0, "", "The animal does as you command on its next turn.", "The animal is hesitant or resistant, and it does nothing.", "The animal misbehaves or misunderstands, and it takes some other action determined by the GM.");

// Other
const strike = new Action("Strike", [], "You attack with a weapon you're wielding or with an unarmed attack, targeting one creature within your reach (for a melee attack) or within range (for a ranged attack). Roll the attack roll for the weapon or unarmed attack you are using, and compare the result to the target creature's AC to determine the effect. See Attack Rolls and Damage for details on calculating your attack and damage rolls.", 1, [], 0, "As success, but you deal double damage.", "You deal damage according to the weapon or unarmed attack, including any modifiers, bonuses, and penalties you have to damage.", "", "");
const doubleSlice = new Action("Double Slice", [], "You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that doesn't have the agile trait, it takes a -2 penalty.\nIf both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.", 2, ["You are wielding two melee weapons, each in a different hand."], 0, "", "", "", "");
const actions = [noAction, recallKnowledge, balance, tumbleThrough, maneuverInFlight, climb, forceOpen, grapple, highJump, longJump, shove, swim, trip, disarm, createADiversion, feint, request, demoralize, administerFirstAid, treatPoison, commandAnAnimal, strike, doubleSlice];
const actionNames = actions.map(action => {
    return action.name;
});

// counts the current number of turns available based on conditions
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

// fill turns with actions by cost
const filterActions = () => {
    let turn1Options = "";
    let turn2Options = "";
    let turn3Options = "";
    let turn4Options = "";
    for (let i = 1 /* skip noAction */; i < actions.length; i++) {
        if (numberOfTurns() >= actions[i].cost) {
            turn1Options += `<option value=\"${actionNames[i]}\">${actionNames[i]}</option>`;
            if (numberOfTurns() >= actions[i].cost + 1) {
                turn2Options += `<option value=\"${actionNames[i]}\">${actionNames[i]}</option>`;
                if (numberOfTurns() >= actions[i].cost + 2) {
                    turn3Options += `<option value=\"${actionNames[i]}\">${actionNames[i]}</option>`;
                    if (numberOfTurns() >= actions[i].cost + 3) {
                        turn4Options += `<option value=\"${actionNames[i]}\">${actionNames[i]}</option>`;
                    }
                }
            }
        }
    }
    document.getElementById("turn1_options").innerHTML = turn1Options;
    document.getElementById("turn2_options").innerHTML = turn2Options;
    document.getElementById("turn3_options").innerHTML = turn3Options;
    document.getElementById("turn4_options").innerHTML = turn4Options;
}
filterActions();

// deletes action info from a turn
const resetTurn = turn => {
    document.getElementById(`turn${turn}_option`).value = "";
    document.getElementById(`turn${turn}_name`).innerHTML = "";
    document.getElementById(`turn${turn}_tags`).innerHTML = "";
    document.getElementById(`turn${turn}_requirements`).innerHTML = "";
    document.getElementById(`turn${turn}_description`).innerHTML = "";
    document.getElementById(`turn${turn}_critical_success`).innerHTML = "";
    document.getElementById(`turn${turn}_success`).innerHTML = "";
    document.getElementById(`turn${turn}_failure`).innerHTML = "";
    document.getElementById(`turn${turn}_critical_failure`).innerHTML = "";
}

// selecting an action based on the turn affects future turns by cost of action
const selectAction = turn => {

    // limits actions by cost
    let availableActions = actions.filter(action => {
        return action.cost <= numberOfTurns() - turn + 1;
    });

    let action = availableActions[actionNames.indexOf(document.getElementById(`turn${turn}_option`).value)];

    // reset turn if no action is selected
    if (action === noAction) {
        resetTurn(turn);
    }

    // displays info for the chosen action
    else {
        document.getElementById(`turn${turn}_name`).innerHTML = action.name;
        action.tags.forEach(tag => {
            document.getElementById(`turn${turn}_tags`).innerHTML += `<li class="tag">${tag}</li>`;
        });
        if (action.requirements.length > 0) {
            document.getElementById(`turn${turn}_requirements`).innerHTML = "<h4>Requirements</h4>";
            action.requirements.forEach(req => {
                document.getElementById(`turn${turn}_requirements`).innerHTML += ` ${req}`;
            });
        }
        document.getElementById(`turn${turn}_description`).innerHTML = action.description;
        if (action.criticalSuccess) {
            document.getElementById(`turn${turn}_critical_success`).innerHTML = `<h4>Critical Success</h4> ${action.criticalSuccess}`;
        }
        if (action.success) {
            document.getElementById(`turn${turn}_success`).innerHTML = `<h4>Success</h4> ${action.success}`;
        }
        if (action.failure) {
            document.getElementById(`turn${turn}_failure`).innerHTML = `<h4>Failure</h4> ${action.failure}`;
        }
        if (action.criticalFailure) {
            document.getElementById(`turn${turn}_critical_failure`).innerHTML = `<h4>Critical Failure</h4> ${action.criticalFailure}`;
        }
    }

    // disables future turns for multi-turn actions
    if (turn < 4) { // turn 4 has 0 future turns
        if (action.cost > 1) {
            document.getElementById(`turn${turn + 1}`).style.display = "none";
            resetTurn(turn + 1);
            if (turn < 3) { // turn 3 has at most 1 future turn
                if (action.cost > 2) {
                    document.getElementById(`turn${turn + 2}`).style.display = "none";
                    resetTurn(turn + 2);
                }
                else if (turn + 2 <= numberOfTurns()) {
                    document.getElementById(`turn${turn + 2}`).style.display = "block";
                }
            }
        }
        else if (turn + 1 <= numberOfTurns()) {
            document.getElementById(`turn${turn + 1}`).style.display = "block";
        }
    }

    // recalculates action options
    filterActions();
};

// display action when chosen in dropdown menu
document.getElementById("turn1_option").onchange = () => {
    selectAction(1);
};
document.getElementById("turn2_option").onchange = () => {
    selectAction(2);
};
document.getElementById("turn3_option").onchange = () => {
    selectAction(3);
};
document.getElementById("turn4_option").onchange = () => {
    selectAction(4);
};

// changes number of turns by conditions
const applyCondition = () => {

    // resets chosen actions
    resetTurn(1);
    resetTurn(2);
    resetTurn(3);
    resetTurn(4);

    // sets number of turns by condition
    let turns = numberOfTurns();

    // displays number of turns
    if (turns > 0) {
        document.getElementById("turn1").style.display = "block";
        if (turns > 1) {
            document.getElementById("turn2").style.display = "block";
            if (turns > 2) {
                document.getElementById("turn3").style.display = "block";
                if (turns > 3) {
                    document.getElementById("turn4").style.display = "block";
                }
                else {
                    document.getElementById("turn4").style.display = "none";
                }
            }
            else {
                document.getElementById("turn3").style.display = "none";
            }
        }
        else {
            document.getElementById("turn2").style.display = "none";
        }
    }
    else {
        document.getElementById("turn1").style.display = "none";
    }
    switchGrid(turns);

    // recalculates actions options
    filterActions();
}
document.getElementById("quickened").onclick = applyCondition;
document.getElementById("slowed1").onclick = applyCondition;
document.getElementById("slowed2").onclick = applyCondition;
document.getElementById("slowed3").onclick = applyCondition;