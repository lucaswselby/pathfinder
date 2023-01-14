// Action class
class Action {
    constructor(name, actionCost, spellLevel, tags, prerequisites, traditions, cast, cost, range, area, targets, savingThrow, duration, frequency, trigger, requirements, description, criticalSuccess, success, failure, criticalFailure, heightenedLevel, heightenedText, extraTitle, extraText) {
        this.name = name;
        this.actionCost = actionCost;
        this.spellLevel = spellLevel;
        this.tags = tags;
        this.prerequisites = prerequisites;
        this.traditions = traditions;
        this.cast = cast;
        this.cost = cost;
        this.range = range;
        this.area = area;
        this.targets = targets;
        this.savingThrow = savingThrow;
        this.duration = duration;
        this.frequency = frequency;
        this.trigger = trigger;
        this.requirements = requirements;
        this.description = description;
        this.criticalSuccess = criticalSuccess;
        this.success = success;
        this.failure = failure;
        this.criticalFailure = criticalFailure;
        this.heightenedLevel = heightenedLevel;
        this.heightenedText = heightenedText;
        this.extraTitle = extraTitle;
        this.extraText = extraText;
    }
}

// Actions
const noAction = new Action("", 0, 0, [], "", "", "", "", "", "", "", "", "", "", "", [], "", "", "", "", "", [], [], "", "");

// Alchemist Actions
const quickAlchemy = new Action("Quick Alchemy", 1, 0, ["ALCHEMIST", "MANIPULATE"], "", "", "", "1 batch of infused reagents", "", "", "", "", "", "", "", ["You have alchemist's tools (page 287), the formula for the alchemical item you're creating, and a free hand."], "You swiftly mix up a short-lived alchemical item to use at a moment's notice. You create a single alchemical item of your advanced alchemy level or lower that's in your formula book without having to spend the normal monetary cost in alchemical reagents or needing to attempt a Crafting check. This item has the infused trait, but it remains potent only until the start of your next turn.", "", "", "", "", [], [], "", "");
const quickBomber = new Action("Quick Bomber", 1, 1, ["ALCHEMIST"], "", "", "", "", "", "", "", "", "", "", "", [], "You keep your bombs in easy-to-reach pouches from which you draw without thinking. You Interact to draw a bomb, then Strike with it.", "", "", "", "", [], [], "", "");
const megaBomb = new Action("Mega Bomb", 1, 20, ["ADDITIVE 3", "ALCHEMIST"], "Expanded Slash", "", "", "", "", "", "", "", "", "", "", ["You are holding an infused alchemical bomb you crafted, with a level at least 3 lower than your advanced alchemy level."], "You add an incredibly powerful additive to a held bomb to create a mega bomb, greatly increasing its area and power. You use an Interact action to throw the mega bomb, rather than Strike, and you don't make an attack roll. The mega bomb affects creatures in a 30-foot-radius burst, centered within 60 feet of you. The bomb deals damage as if each creature were the primary target, with a basic Reflex save. On a failed save, a creature also takes any extra effects that affect a primary target (such as flat-footed from bottled lightning). While all targets in the area take splash damage as primary targets, there is no further splash beyond that area. If your next action after creating a mega bomb isn't an Interact action to throw it, the mega bomb denatures and loses all effects.", "", "", "", "", [], [], "", "");

// Barbarian Actions
const rage = new Action("Rage", 1, 0, ["BARBARIAN", "CONCENTRATE", "EMOTION", "MENTAL"], "", "", "", "", "", "", "", "", "", "", "", ["You aren't fatigued or raging."], "You tap into your inner fury and begin raging. You gain a number of temporary Hit Points equal to your level plus your Constitution modifier. This frenzy lasts for 1 minute, until there are no enemies you can perceive, or until you fall unconscious, whichever comes first. You can't voluntarily stop raging. While you are raging:<ul><li>You deal 2 additional damage with melee weapons and unarmed attacks. This additional damage is halved if your weapon or unarmed attack is agile.</li><li>You take a -1 penalty to AC.</li><li>You can't use actions with the concentrate trait unless they also have the rage trait. You can Seek while raging.</li></ul>After you stop raging, you lose any remaining temporary Hit Points from Rage, and you can't Rage again for 1 minute.", "", "");
const mightyRage = new Action("Mighty Rage", 1, 0, ["BARBARIAN"], "", "", "", "", "", "", "", "", "", "", "You use the Rage action on your turn.", [], "Use an action that has the rage trait. Alternatively, you can increase the actions of the triggering Rage to 2 to instead use a 2-action activity with the rage trait.", "", "", "", "", [], [], "", "");
const momentOfClarity = new Action("Moment of Clarity", 1, 1, ["BARBARIAN", "CONCENTRATE", "RAGE"], "", "", "", "", "", "", "", "", "", "", "", [], "You push back your rage for a moment in order to think clearly. Until the end of this turn, you can use actions with the concentrate trait even if those actions don't have the rage trait.", "", "", "", "", [], [], "", "");
const suddenCharge = new Action("Sudden Charge", 2, 1, ["BARBARIAN", "FLOURISH", "OPEN"], "", "", "", "", "", "", "", "", "", "", "", [], "With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.", "", "");
const furiousFinish = new Action("Furious Finish", 1, 2, ["BARBARIAN", "RAGE"], "", "", "", "", "", "", "", "", "", "", "", [], "Desperate to finish the fight, you pour all your rage into one final blow. Make a Strike. If it hits, you gain a circumstance bonus to damage equal to the number of rounds remaining in your Rage (maximum 10). After this Strike, your Rage immediately ends, and you are fatigued until you rest for at least 10 minutes.", "", "", "", "", [], [], "", "");
const shakeItOff = new Action("Shake It Off", 1, 2, ["BARBARIAN", "CONCENTRATE", "RAGE"], "", "", "", "", "", "", "", "", "", "", "", [], "You concentrate on your rage, overcoming fear and fighting back sickness. Reduce your frightened condition value by 1, and attempt a Fortitude save to recover from the sickened condition as if you had spent an action retching; you reduce your sickened condition value by 1 on a failure (but not on a critical failure), by 2 on a success, or by 3 on a critical success.", "", "", "", "", [], [], "", "");
const swipe = new Action("Swipe", 2, 4, ["BARBARIAN", "FLOURISH"], "", "", "", "", "", "", "", "", "", "", "", [], "You make a wide, arcing swing. Make a single melee Strike and compare the attack roll result to the ACs of up to two foes, each of whom must be within your melee reach and adjacent to the other.", "", "", "", "", [], [], "", "");
const dragonsRageBreath = new Action("Dragon's Rage Breath", 2, 6, ["ARCANE", "BARBARIAN", "CONCENTRATE", "EVOCATION", "INSTINCT", "RAGE"], "dragon instinct", "", "", "", "", "", "", "", "", "", "", ["You haven't used this ability since you last Raged."], "You breathe deeply and exhale powerful energy in a 30-foot cone or 60-foot line, dealing 1d6 damage per level. The area and damage type match those of your dragon (see Table 3-4 on page 86). If you used this ability in the last hour, the area and the damage are halved (15-foot cone or 30-foot line; 1d6 damage for every 2 levels). Each creature in the area must attempt a basic Reflex save.", "", "", "", "", [], [], "", "");
const giantsStature = new Action("Giant's Stature", 1, 6, ["BARBARIAN", "INSTINCT", "POLYMORPH", "PRIMAL", "RAGE", "TRANSMUTATION"], " giant instinct", "", "", "", "", "", "", "", "", "", "", ["You are Medium or smaller."], "You grow to incredible size. You become Large, increasing your reach by 5 feet and gaining the clumsy 1 condition (page 618) until you stop raging. Your equipment grows with you.", "", "", "", "", [], [], "", "");
const spiritsInterference = new Action("Spirits' Interference", 1, 6, ["BARBARIAN", "DIVINE", "INSTINCT", "NECROMANCY", "RAGE"], "spirit instinct", "", "", "", "", "", "", "", "", "", "", [], "You call forth protective spirits to ward off ranged attacks. Until your rage ends, anyone making a ranged attack against you must succeed at a DC 5 flat check or the attack misses with no effect.", "", "", "", "", [], [], "", "");
const animalRage = new Action("Animal Rage", 1, 8, ["BARBARIAN", "CONCENTRATE", "INSTINCT", "POLYNMORPH", "PRIMAL", "RAGE", "TRANSMUTATION"], "animal instinct", "", "", "", "", "", "", "", "", "", "", [], "You transform into your animal. You gain the effects of the 3rd-level <em>animal form</em> spell except you use your own statistics, temporary Hit Points, and unarmed attacks instead of those granted by <em>animal form</em>. You also retain the constant abilities of your gear. If your animal is a frog, your tongue's reach increases to 15 feet. Dismissing the transformation gains the rage trait.", "", "", "", "", [], [], "", "");
const renewedVigor = new Action("Renewed Vigor", 1, 8, ["BARBARIAN", "CONCENTRATE", "RAGE"], "", "", "", "", "", "", "", "", "", "", "", [], "You pause to recover your raging vigor. You gain temporary Hit Points equal to half your level plus your Constitution modifier.", "", "", "", "", [], [], "", "");
const shareRage = new Action("Share Rage", 1, 8, ["AUDITORY", "BARBARIAN", "RAGE", "VISUAL"], "", "", "", "", "", "", "", "", "", "", "", ["You haven't used this ability since you last Raged."], "You stoke an ally's fury. While you are raging, one willing creature within 30 feet gains the effects of the Rage action, except it can still use concentrate actions.", "", "", "", "", [], [], "", "");
const thrash = new Action("Thrash", 1, 8, ["BARBARIAN", "RAGE"], "", "", "", "", "", "", "", "", "", "", "", ["You have a foe grabbed."], "You thrash the grabbed foe around. It takes bludgeoning damage equal to your Strength modifier plus your ferocious specialization damage plus your Rage damage. The foe must attempt a basic Fortitude save against your class DC.", "", "", "", "", [], [], "", "");
const comeAndGetMe = new Action("Come and Get Me", 1, 10, ["BARBARIAN", "CONCENTRATE", "RAGE"], "", "", "", "", "", "", "", "", "", "", "", [], "You open yourself to attacks so you can respond in turn. Until your rage ends, you are flat-footed, and damage rolls against you gain a +2 circumstance bonus. If a creature hits you, that creature is flat-footed to you until the end of your next turn. If you hit it before the end of your next turn, you gain temporary Hit Points equal to your Constitution modifier, or double that on a critical hit. These temporary Hit Points last until the end of your rage.", "", "", "", "", [], [], "", "");
const furiousSprint = new Action("Furious Sprint", 2, 10, ["BARBARIAN", "RAGE"], "", "", "", "", "", "", "", "", "", "", "", [], "You rush forward. Stride up to five times your Speed in a straight line. You can increase the number of actions this activity takes to 3 to Stride up to eight times your Speed in a straight line instead.", "", "", "", "", [], [], "", "");
const knockback = new Action("Knockback", 1, 10, ["BARBARIAN", "RAGE"], "", "", "", "", "", "", "", "", "", "", "", ["Your last action was a successful Strike."], "The weight of your swing drives your enemy back. You push the foe back 5 feet, with the effects of a successful Shove. You can follow the foe as normal for a successful Shove.", "", "", "", "", [], [], "", "");
const terrifyingHowl = new Action("Terrifying Howl", 1, 10, ["AUDITORY", "BARBARIAN", "RAGE"], "Intimidating Glare", "", "", "", "", "", "", "", "", "", "", [], "You unleash a terrifying howl. Attempt Intimidate checks to Demoralize each creature within 30 feet. Regardless of the results of your checks, each creature is then temporarily immune to Terrifying Howl for 1 minute.", "", "", "", "", [], [], "", "");
// ...

// Skill Actions
const recallKnowledge = new Action("Recall Knowledge", 1, 0, ["CONCENTRATE", "SECRET"], "", "", "", "", "", "", "", "", "", "", "", [], "You attempt a skill check to try to remember a bit of knowledge regarding a topic related to that skill. The GM determines the DCs for such checks and which skills apply.", "You recall the knowledge accurately and gain additional information or context.", "You recall the knowledge accurately or gain a useful clue about your current situation.", "", "You recall incorrect information or gain an erroneous or misleading clue.", [], [], "", "");
const balance = new Action("Balance", 1, 0, ["MOVE"], "", "", "", "", "", "", "", "", "", "", "", ["You are in a square that contains a narrow surface, uneven ground, or another similar feature."], "You move across a narrow surface or uneven ground, attempting an Acrobatics check against its Balance DC. You are flat-footed while on a narrow surface or uneven ground.", "You move up to your Speed.", "You move up to your Speed, treating it as difficult terrain (every 5 feet costs 10 feet of movement).", "You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.", "You fall and your turn ends.", [], [], "", "");
const tumbleThrough = new Action("Tumble Through", 1, 0, ["MOVE"], "", "", "", "", "", "", "", "", "", "", "", [], "You Stride up to your Speed. During this movement, you can try to move through the space of one enemy. Attempt an Acrobatics check against the enemy's Reflex DC as soon as you try to enter its space. You can Tumble Through using Climb, Fly, Swim, or another action instead of Stride in the appropriate environment.", "", "You move through the enemy's space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don't have enough Speed to move all the way through its space, you get the same effect as a failure.", "Your movement ends, and you trigger reactions as if you had moved out of the square you started in.", "", [], [], "", "");
const maneuverInFlight = new Action("Maneuver in Flight", 1, 0, ["MOVE"], "", "", "", "", "", "", "", "", "", "", "", ["You have a fly Speed."], "You try a difficult maneuver while flying. Attempt an Acrobatics check. The GM determines what maneuvers are possible, but they rarely allow you to move farther than your fly Speed.", "", "You succeed at the maneuver.", "Your maneuver fails. The GM chooses if you simply can't move or if some other detrimental effect happens. The outcome should be appropriate for the maneuver you attempted (for instance, being blown off course if you were trying to fly against a strong wind).", "As failure, but the consequence is more dire.", [], [], "", "");
const climb = new Action("Climb", 1, 0, ["MOVE"], "", "", "", "", "", "", "", "", "", "", "", ["You have both hands free."], "You move up, down, or across an incline. Unless it's particularly easy, you must attempt an Athletics check. The GM determines the DC based on the nature of the incline and environmental circumstances. You’re flat-footed unless you have a climb Speed.", "You move up, across, or safely down the incline for 5 feet plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).", "You move up, across, or safely down the incline for 5 feet per 20 feet of your land Speed (a total of 5 feet for most PCs, minimum 5 feet if your Speed is below 20 feet).", "", "You fall. If you began the climb on stable ground, you fall and land prone.", [], [], "", "");
const forceOpen = new Action("Force Open", 1, 0, ["ATTACK"], "", "", "", "", "", "", "", "", "", "", "", [], "Using your body, a lever, or some other tool, you attempt to forcefully open a door, window, container or heavy gate. With a high enough result, you can even smash through walls. Without a crowbar, prying something open takes a -2 item penalty to the Athletics check to Force Open.", "You open the door, window, container, or gate and can avoid damaging it in the process.", "You break the door, window, container, or gate open, and the door, window, container, or gate gains the broken condition. If it's especially sturdy, the GM might have it take damage but not be broken.", "", "Your attempt jams the door, window, container, or gate shut, imposing a -2 circumstance penalty on future attempts to Force it Open.", [], [], "", "");
const grapple = new Action("Grapple", 1, 0, ["ATTACK"], "", "", "", "", "", "", "", "", "", "", "", ["You have at least one free hand.", "Your target cannot be more than one size larger than you."], "You attempt to grab an opponent with your free hand. Attempt an Athletics check against their Fortitude DC. You can also Grapple to keep your hold on a creature you already grabbed.", "Your opponent is restrained until the end of your next turn unless you move or your opponent Escapes (page 470).", "Your opponent is grabbed until the end of your next turn unless you move or your opponent Escapes.", "You fail to grab your opponent. If you already had the opponent grabbed or restrained using a Grapple, those conditions on that creature end.", "If you already had the opponent grabbed or restrained, it breaks free. Your target can either grab you, as if it succeeded at using the Grapple action against you, or force you to fall and land prone.", [], [], "", "");
const highJump = new Action("High Jump", 2, 0, [], "", "", "", "", "", "", "", "", "", "", "", [], "You Stride, then make a vertical Leap and attempt a DC 30 Athletics check to increase the height of your jump. If you didn't Stride at least 10 feet, you automatically fail your check. This DC might be increased or decreased due to the situation, as determined by the GM.", "Increase the maximum vertical distance to 8 feet, or increase the maximum vertical distance to 5 feet and maximum horizontal distance to 10 feet.", "Increase the maximum vertical distance to 5 feet.", "You Leap normally.", "You don't Leap at all, and instead you fall prone in your space.", [], [], "", "");
const longJump = new Action("Long Jump", 2, 0, [], "", "", "", "", "", "", "", "", "", "", "", [], "You Stride, then make a horizontal Leap and attempt an Athletics check to increase the length of your jump. The DC of the Athletics check is equal to the total distance in feet you're attempting to move during your Leap (so you'd need to succeed at a DC 20 check to Leap 20 feet). You can't Leap farther than your Speed./nIf you didn't Stride at least 10 feet, or if you attempt to jump in a different direction than your Stride, you automatically fail your check. This DC might be increased or decreased due to the situation, as determined by the GM.", "", "Increase the maximum horizontal distance you Leap to the desired distance.", "You Leap normally.", "You Leap normally, but then fall and land prone.", [], [], "", "");
const shove = new Action("Shove", 1, 0, ["ATTACK"], "", "", "", "", "", "", "", "", "", "", "", ["You have at least one hand free.", "The target can't be more than one size larger than you."], "You push an opponent away from you. Attempt an Athletics check against your opponent's Fortitude DC.", "You push your opponent up to 10 feet away from you. You can Stride after it, but you must move the same distance and in the same direction.", "You push your opponent back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.", "", "You lose your balance, fall, and land prone.", [], [], "", "");
const swim = new Action("Swim", 1, 0, ["MOVE"], "", "", "", "", "", "", "", "", "", "", "", [], "You propel yourself through water. In most calm water, you succeed at the action without needing to attempt a check. If you must breathe air and you're submerged in water, you must hold your breath each round. If you fail to hold your breath, you begin to drown (as described on page 478). If the water you are swimming in is turbulent or otherwise dangerous, you might have to attempt an Athletics check to Swim. If you end your turn in water and haven't succeeded at a Swim action that turn, you sink 10 feet or get moved by the current, as determined by the GM. However, if your last action on your turn was to enter the water, you don't sink or move with the current that turn.", "You move through the water 10 feet, plus 5 feet per 20 feet of your land Speed (a total of 15 feet for most PCs).", "You move through the water 5 feet, plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).", "", "You make no progress, and if you're holding your breath, you lose 1 round of air.", [], [], "", "");
const trip = new Action("Trip", 1, 0, ["ATTACK"], "", "", "", "", "", "", "", "", "", "", "", ["You have at least one hand free.", "Your target can't be more than one size larger than you."], "You try to knock an opponent to the ground. Attempt an Athletics check against the target's Reflex DC.", "The target falls and lands prone and takes 1d6 bludgeoning damage.", "The target falls and lands prone.", "", "You lose your balance and fall and land prone.", [], [], "", "");
const disarm = new Action("Disarm", 1, 0, ["ATTACK"], "", "", "", "", "", "", "", "", "", "", "", ["You have at least one hand free.", "The target can't be more than one size larger than you."], "You try to knock something out of an opponent's grasp. Attempt an Athletics check against the opponent's Reflex DC.", "You knock the item out of the opponent's grasp. It falls to the ground in the opponent's space.", "You weaken your opponent's grasp on the item. Until the start of that creature's turn, attempts to Disarm the opponent of that item gain a +2 circumstance bonus, and the target takes a -2 circumstance penalty to attacks with the item or other checks requiring a firm grasp on the item.", "", "You lose your balance and become flat-footed until the start of your next turn.", [], [], "", "");
const createADiversion = new Action("Create a Diversion", 1, 0, ["MENTAL"], "", "", "", "", "", "", "", "", "", "", "", [], "With a gesture, a trick, or some distracting words, you can create a diversion that draws creatures' attention elsewhere. If you use a gesture or trick, this action gains the manipulate trait. If you use distracting words, it gains the auditory and linguistic traits. Attempt a single Deception check and compare it to the Perception DCs of the creatures whose attention you're trying to divert. Whether or not you succeed, creatures you attempt to divert gain a +4 circumstance bonus to their Perception DCs against your attempts to Create a Diversion for 1 minute.", "", "You become hidden to each creature whose Perception DC is less than or equal to your result. (The hidden condition allows you to Sneak away, as described on page 252.) This lasts until the end of your turn or until you do anything except Step or use the Hide or the Sneak action of the Stealth skill (pages 251 and 252). If you Strike a creature, the creature remains flat-footed against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise.", "You don't divert the attention of any creatures whose Perception DC exceeds your result, and those creatures are aware you were trying to trick them.", "", [], [], "", "");
const feint = new Action("Feint", 1, 0, ["MENTAL"], "", "", "", "", "", "", "", "", "", "", "", ["You are within melee reach of the opponent you attempt to Feint."], "With a misleading flourish, you leave an opponent unprepared for your real attack. Attempt a Deception check against that opponent's Perception DC.", "You throw your enemy's defenses against you entirely off. The target is flat-footed against melee attacks that you attempt against it until the end of your next turn.", "Your foe is fooled, but only momentarily. The target is flat-footed against the next melee attack that you attempt against it before the end of your current turn.", "", "Your feint backfires. You are flat-footed against melee attacks the target attempts against you until the end of your next turn.", [], [], "", "");
const request = new Action("Request", 1, 0, ["AUDITORY", "CONCENTRATE", "LINGUISTIC", "MENTAL"], "", "", "", "", "", "", "", "", "", "", "", [], "You can make a request of a creature that's friendly or helpful to you. You must couch the request in terms that the target would accept given their current attitude toward you. The GM sets the DC based on the difficulty of the request. Some requests are unsavory or impossible, and even a helpful NPC would never agree to them.", "The target agrees to your request without qualifications.", "The target agrees to your request, but they might demand added provisions or alterations to the request.", "The target refuses the request, though they might propose an alternative that is less extreme.", "Not only does the target refuse the request, but their attitude toward you decreases by one step due to the temerity of the request.", [], [], "", "");
const demoralize = new Action("Demoralize", 1, 0, ["AUDITORY", "CONCENTRATE", "EMOTION", "MENTAL"], "", "", "", "", "", "", "", "", "", "", "", [], "With a sudden shout, a well-timed taunt, or a cutting put- down, you can shake an enemy's resolve. Choose a creature within 30 feet of you who you're aware of. Attempt an Intimidation check against that target's Will DC. If the target does not understand the language you are speaking, you're not speaking a language, or they can't hear you, you take a -4 circumstance penalty to the check. Regardless of your result, the target is temporarily immune to your attempts to Demoralize it for 10 minutes.", "The target becomes frightened 2.", "The target becomes frightened 1.", "", "", [], [], "", "");
const administerFirstAid = new Action("Administer First Aid", 2, 0, ["MANIPULATE"], "", "", "", "", "", "", "", "", "", "", "", ["You have healer's tools (page 290)."], "You perform first aid on an adjacent creature that is dying or bleeding. If a creature is both dying and bleeding, choose which ailment you're trying to treat before you roll. You can Administer First Aid again to attempt to remedy the other effect.<ul><li><strong>Stabilize</strong> Attempt a Medicine check on a creature that has 0 Hit Points and the dying condition. The DC is equal to 5 + that creature's recovery roll DC (typically 15 + its dying value).</li><li><strong>Stop Bleeding</strong> Attempt a Medicine check on a creature that is taking persistent bleed damage (page 452), giving them a chance to make another flat check to remove the persistent damage. The DC is usually the DC of the effect that caused the bleed.</li></ul>", "", "If you're trying to stabilize, the creature loses the dying condition (but remains unconscious). If you're trying to stop bleeding, the creature attempts a flat check to end the bleeding.", "", "If you were trying to stabilize, the creature's dying value increases by 1. If you were trying to stop bleeding, it immediately takes an amount of damage equal to its persistent bleed damage.", [], [], "", "");
const treatPoison = new Action("Treat Poison", 1, 0, ["MANIPULATE"], "", "", "", "", "", "", "", "", "", "", "", ["You have healer's tools (page 290)."], "You treat a patient to prevent the spread of poison. Attempt a Medicine check against the poison's DC. After you attempt to Treat a Poison for a creature, you can't try again until after the next time that creature attempts a save against the poison.", "You grant the creature a +4 circumstance bonus to its next saving throw against the poison.", "You grant the creature a +2 circumstance bonus to its next saving throw against the poison.", "", "Your efforts cause the creature to take a -2 circumstance penalty to its next save against the poison.", [], [], "", "");
const commandAnAnimal = new Action("Command an Animal", 1, 0, ["AUDITORY", "CONCENTRATE"], "", "", "", "", "", "", "", "", "", "", "", [], "You issue an order to an animal. Attempt a Nature check against the animal's Will DC. The GM might adjust the DC if the animal has a good attitude toward you, you suggest a course of action it was predisposed toward, or you offer it a treat. You automatically fail if the animal is hostile or unfriendly to you. If the animal is helpful to you, increase your degree of success by one step. You might be able to Command an Animal more easily with a feat like Ride (page 266). Most animals know the Leap, Seek, Stand, Stride, and Strike basic actions. If an animal knows an activity, such as a horse's Gallop, you can Command the Animal to perform the activity, but you must spend as many actions on Command an Animal as the activity's number of actions. You can also spend multiple actions to Command the Animal to perform that number of basic actions on its next turn; for instance, you could spend 3 actions to Command an Animal to Stride three times or to Stride twice and then Strike.", "", "The animal does as you command on its next turn.", "The animal is hesitant or resistant, and it does nothing.", "The animal misbehaves or misunderstands, and it takes some other action determined by the GM.", [], [], "", "");
const perform = new Action("Perform", 1, 0, ["CONCENTRATE"], "", "", "", "", "", "", "", "", "", "", "", [], "When making a brief performance—one song, a quick dance, or a few jokes—you use the Perform action. This action is most useful when you want to prove your capability or impress someone quickly. Performing rarely has an impact on its own, but it might influence the DCs of subsequent Diplomacy checks against the observers—or even change their attitudes—if the GM sees fit.", "Your performance impresses the observers, and they're likely to share stories of your ability.", "You prove yourself, and observers appreciate the quality of your performance.", "Your performance falls flat.", "You demonstrate only incompetence.", [], [], "", "");
const concealAnObject = new Action("Conceal an Object", 1, 0, ["MANIPULATE", "SECRET"], "", "", "", "", "", "", "", "", "", "", "", [], "You hide a small object on your person (such as a weapon of light Bulk). When you try to sneak a concealed object past someone who might notice it, the GM rolls your Stealth check and compares it to this passive observer's Perception DC. Once the GM rolls your check for a concealed object, that same result is used no matter how many passive observers you try to sneak it past. If a creature is specifically searching you for an item, it can attempt a Perception check against your Stealth DC (finding the object on success). You can also conceal an object somewhere other than your person, such as among undergrowth or in a secret compartment within a piece of furniture. In this case, characters Seeking in an area compare their Perception check results to your Stealth DC to determine whether they find the object.", "", "The object remains undetected.", "The searcher finds the object.", "", [], [], "", "");
const hide = new Action("Hide", 1, 0, ["SECRET"], "", "", "", "", "", "", "", "", "", "", "", [], "You huddle behind cover or greater cover or deeper into concealment to become hidden, rather than observed. The GM rolls your Stealth check in secret and compares the result to the Perception DC of each creature you're observed by but that you have cover or greater cover against or are concealed from. You gain the circumstance bonus from cover or greater cover to your check.", "", "If the creature could see you, you're now hidden from it instead of observed. If you were hidden from or undetected by the creature, you retain that condition. If you successfully become hidden to a creature but then cease to have cover or greater cover against it or be concealed from it, you become observed again. You cease being hidden if you do anything except Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains flat- footed against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check. If a creature uses Seek to make you observed by it, you must successfully Hide to become hidden from it again.", "", "", [], [], "", "");
const sneak = new Action("Sneak", 1, 0, ["MOVE", "SECRET"], "", "", "", "", "", "", "", "", "", "", "", [], "You can attempt to move to another place while becoming or staying undetected. Stride up to half your Speed. (You can use Sneak while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type; you must move at half that Speed.) If you're undetected by a creature and it's impossible for that creature to observe you (for a typical creature, this includes when you're invisible, the observer is blinded, or you're in darkness and the creature can't see in darkness), for any critical failure you roll on a check to Sneak, you get a failure instead. You also continue to be undetected if you lose cover or greater cover against or are no longer concealed from such a creature. At the end of your movement, the GM rolls your Stealth check in secret and compares the result to the Perception DC of each creature you were hidden from or undetected by at the start of your movement. If you have cover or greater cover from the creature throughout your Stride, you gain the +2 circumstance bonus from cover (or +4 from greater cover) to your Stealth check. Because you're moving, the bonus increase from Taking Cover doesn't apply. You don't get to roll against a creature if, at the end of your movement, you neither are concealed from it nor have cover or greater cover against it. You automatically become observed by such a creature.", "", "You're undetected by the creature during your movement and remain undetected by the creature at the end of it. You become observed as soon as you do anything other than Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains flat-footed against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check. If you speak or make a deliberate loud noise, you become hidden instead of undetected. If a creature uses Seek and you become hidden to it as a result, you must Sneak if you want to become undetected by that creature again.", "A telltale sound or other sign gives your position away, though you still remain unseen. You're hidden from the creature throughout your movement and remain so.", "You're spotted! You're observed by the creature throughout your movement and remain so. If you're invisible and were hidden from the creature, instead of being observed you're hidden throughout your movement and remain so.", [], [], "", "");
const palmAnObject = new Action("Palm an Object", 1, 0, ["MANIPULATE"], "", "", "", "", "", "", "", "", "", "", "", [], "Palming a small, unattended object without being noticed requires you to roll a single Thievery check against the Perception DCs of all creatures who are currently observing you. You take the object whether or not you successfully conceal that you did so. You can typically only Palm Objects of negligible Bulk, though the GM might determine otherwise depending on the situation.", "", "The creature does not notice you Palming the Object.", "The creature notices you Palming the Object, and the GM determines the creature's response.", "", [], [], "", "");
const steal = new Action("Steal", 1, 0, ["MANIPULATE"], "", "", "", "", "", "", "", "", "", "", "", [], "You try to take a small object from another creature without being noticed. Typically, you can Steal only an object of negligible Bulk, and you automatically fail if the creature who has the object is in combat or on guard. Attempt a Thievery check to determine if you successfully Steal the object. The DC to Steal is usually the Perception DC of the creature wearing the object. This assumes the object is worn but not closely guarded (like a loosely carried pouch filled with coins, or an object within such a pouch). If the object is in a pocket or similarly protected, you take a -5 penalty to your Thievery check. The GM might increase the DC of your check if the nature of the object makes it harder to steal (such as a very small item in a large pack, or a sheet of parchment mixed in with other documents). You might also need to compare your Thievery check result against the Perception DCs of observers other than the person wearing the object. The GM may increase the Perception DCs of these observers if they're distracted.", "", "You steal the item without the bearer noticing, or an observer doesn't see you take or attempt to take the item.", "The item's bearer notices your attempt before you can take the object, or an observer sees you take or attempt to take the item. The GM determines the response of any creature that notices your theft.", "", [], [], "", "");
const disableADevice = new Action("Disable a Device", 2, 0, ["MANIPULATE"], "", "", "", "", "", "", "", "", "", "", "", ["Some devices require you to use thieves' tools (page 291) when disabling them."], "This action allows you to disarm a trap or another complex device. Often, a device requires numerous successes before becoming disabled, depending on its construction and complexity. Thieves' tools are helpful and sometimes even required to Disable a Device, as determined by the GM, and sometimes a device requires a higher proficiency rank in Thievery to disable it. Your Thievery check result determines how much progress you make.", "You disable the device, or you achieve two successes toward disabling a complex device. You leave no trace of your tampering, and you can rearm the device later, if that type of device can be rearmed.", "You disable the device, or you achieve one success toward disabling a complex device.", "", "You trigger the device.", [], [], "", "");
const pickALock = new Action("Pick a Lock", 2, 0, ["MANIPULATE"], "", "", "", "", "", "", "", "", "", "", "", ["You have thieves' tools (page 291)."], "Opening a lock without a key is very similar to Disabling a Device, but the DC of the check is determined by the complexity and construction of the lock you are attempting to pick (locks and their DCs are found on page 290). Locks of higher qualities might require multiple successes to unlock, since otherwise even an unskilled burglar could easily crack the lock by attempting the check until they rolled a natural 20. If you lack the proper tools, the GM might let you used improvised picks, which are treated as shoddy tools, depending on the specifics of the lock.", "You unlock the lock, or you achieve two successes toward opening a complex lock. You leave no trace of your tampering.", "You open the lock, or you achieve one success toward opening a complex lock.", "", "You break your tools. Fixing them requires using Crafting to Repair them or else swapping in replacement picks (costing 3 sp, or 3 gp for infiltrator thieves' tools).", [], [], "", "");


// Other Actions
const strike = new Action("Strike", 1, 0, [], "", "", "", "", "", "", "", "", "", "", "", [], "You attack with a weapon you're wielding or with an unarmed attack, targeting one creature within your reach (for a melee attack) or within range (for a ranged attack). Roll the attack roll for the weapon or unarmed attack you are using, and compare the result to the target creature's AC to determine the effect. See Attack Rolls and Damage for details on calculating your attack and damage rolls.", "As success, but you deal double damage.", "You deal damage according to the weapon or unarmed attack, including any modifiers, bonuses, and penalties you have to damage.", "", "", [], [], "", "");
const doubleSlice = new Action("Double Slice", 2, 0, [], "", "", "", "", "", "", "", "", "", "", "", ["You are wielding two melee weapons, each in a different hand."], "You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that doesn't have the agile trait, it takes a -2 penalty. If both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.", "", "", "", "", [], [], "", "");
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

// Switch grid orientation based on screen size
const switchGrid = () => {
    let actionCosts = 0;
    for (let i = 1; i <= 4; i++) {
        if (actions[actionNames.indexOf(document.getElementById(`turn${i}_option`).value)].actionCost) {
            actionCosts += actions[actionNames.indexOf(document.getElementById(`turn${i}_option`).value)].actionCost - 1;
        }
    }
    let displayedTurns = numberOfTurns() - actionCosts;

    // accounts for phone screens
    // https://areknawo.com/css-media-rule-in-javascript/
    let phoneMedia = matchMedia("only screen and (max-width: 600px)").matches;
    if (phoneMedia) {
        document.getElementById("turns").style.grid = `repeat(${displayedTurns}, auto) / 100%`;
        document.getElementById("turn1").style.width = "auto";
        document.getElementById("turn2").style.width = "auto";
        document.getElementById("turn3").style.width = "auto";
        document.getElementById("turn4").style.width = "auto";
    }
    else {
        document.getElementById("turns").style.grid = `100% / repeat(${displayedTurns}, auto)`;
        document.getElementById("turn1").style.width = `${Math.floor(100 / displayedTurns)}vw`;
        document.getElementById("turn2").style.width = `${Math.floor(100 / displayedTurns)}vw`;
        document.getElementById("turn3").style.width = `${Math.floor(100 / displayedTurns)}vw`;
        document.getElementById("turn4").style.width = `${Math.floor(100 / displayedTurns)}vw`;
    }
}
switchGrid();
document.getElementsByTagName("BODY")[0].onresize = switchGrid;

// fill turns with actions by cost
const filterActions = () => {
    let turn1Options = "";
    let turn2Options = "";
    let turn3Options = "";
    let turn4Options = "";
    for (let i = 1 /* skip noAction */; i < actions.length; i++) {
        if (numberOfTurns() >= actions[i].actionCost) {
            turn1Options += `<option value=\"${actionNames[i]}\">${actionNames[i]}</option>`;
            if (numberOfTurns() >= actions[i].actionCost + 1) {
                turn2Options += `<option value=\"${actionNames[i]}\">${actionNames[i]}</option>`;
                if (numberOfTurns() >= actions[i].actionCost + 2) {
                    turn3Options += `<option value=\"${actionNames[i]}\">${actionNames[i]}</option>`;
                    if (numberOfTurns() >= actions[i].actionCost + 3) {
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
    document.getElementById(`turn${turn}_hr1`).style.display = "none";
    document.getElementById(`turn${turn}_hr2`).style.display = "none";
    document.getElementById(`turn${turn}_hr3`).style.display = "none";
    document.getElementById(`turn${turn}_name`).innerHTML = "";
    document.getElementById(`turn${turn}_action_cost_icon`).style.display = "none";
    document.getElementById(`turn${turn}_spell_level`).innerHTML = "";
    document.getElementById(`turn${turn}_tags`).innerHTML = "";
    document.getElementById(`turn${turn}_prerequisites`).innerHTML = "";
    document.getElementById(`turn${turn}_traditions`).innerHTML = "";
    document.getElementById(`turn${turn}_cast`).innerHTML = "";
    document.getElementById(`turn${turn}_cost`).innerHTML = "";
    document.getElementById(`turn${turn}_range`).innerHTML = "";
    document.getElementById(`turn${turn}_area`).innerHTML = "";
    document.getElementById(`turn${turn}_targets`).innerHTML = "";
    document.getElementById(`turn${turn}_savingThrow`).innerHTML = "";
    document.getElementById(`turn${turn}_duration`).innerHTML = "";
    document.getElementById(`turn${turn}_frequency`).innerHTML = "";
    document.getElementById(`turn${turn}_trigger`).innerHTML = "";
    document.getElementById(`turn${turn}_requirements`).innerHTML = "";
    document.getElementById(`turn${turn}_description`).innerHTML = "";
    document.getElementById(`turn${turn}_critical_success`).innerHTML = "";
    document.getElementById(`turn${turn}_success`).innerHTML = "";
    document.getElementById(`turn${turn}_failure`).innerHTML = "";
    document.getElementById(`turn${turn}_critical_failure`).innerHTML = "";
    document.getElementById(`turn${turn}_heightened`).innerHTML = "";
    document.getElementById(`turn${turn}_extra`).innerHTML = "";
}

// selecting an action based on the turn affects future turns by cost of action
const selectAction = turn => {

    // limits actions by cost
    let availableActions = actions.filter(action => {
        return action.actionCost <= numberOfTurns() - turn + 1;
    });

    let action = availableActions[actionNames.indexOf(document.getElementById(`turn${turn}_option`).value)];

    // displays info for the chosen action
    resetTurn(turn);
    if (action !== noAction) {
        document.getElementById(`turn${turn}_hr1`).style.display = "block";
        if (action.tags.length > 0 || action.prerequisites || action.traditions || action.cast || action.cost || action.range || action.area || action.targets || action.savingThrow || action.duration || action.frequency || action.trigger || action.requirements.length > 0) {
            document.getElementById(`turn${turn}_hr2`).style.display = "block";
        }
        if (action.heightenedLevel.length > 0 || action.extraTitle) {
            document.getElementById(`turn${turn}_hr3`).style.display = "block";
        }
        document.getElementById(`turn${turn}_name`).innerHTML = action.name;
        if (action.spellLevel) {
            document.getElementById(`turn${turn}_spell_level`).innerHTML = action.spellLevel;
        }
        document.getElementById(`turn${turn}_action_cost_icon`).style.display = "initial";
        document.getElementById(`turn${turn}_action_cost_icon`).src = `./action_cost_icon${action.actionCost}.png`;
        document.getElementById(`turn${turn}_tags`).innerHTML = "";
        action.tags.forEach(tag => {
            document.getElementById(`turn${turn}_tags`).innerHTML += `<li class="tag">${tag}</li>`;
        });
        if (action.prerequisites) {
            document.getElementById(`turn${turn}_prerequisites`).innerHTML = `<h4>Prerequisites</h4> ${action.prerequisites}`;
        }
        if (action.traditions) {
            document.getElementById(`turn${turn}_traditions`).innerHTML = `<h4>Traditions</h4> ${action.traditions}`;
        }
        if (action.cast) {
            document.getElementById(`turn${turn}_cast`).innerHTML = `<h4>Cast</h4> ${action.cast}`;
        }
        if (action.cost) {
            document.getElementById(`turn${turn}_cost`).innerHTML = `<h4>Cost</h4> ${action.cost}`;
        }
        if (action.range) {
            document.getElementById(`turn${turn}_range`).innerHTML = `<h4>Range</h4> ${action.range}`;
        }
        if (action.area) {
            document.getElementById(`turn${turn}_area`).innerHTML = `<h4>Area</h4> ${action.area}`;
        }
        if (action.targets) {
            document.getElementById(`turn${turn}_targets`).innerHTML = `<h4>Targets</h4> ${action.targets}`;
        }
        if (action.savingThrow) {
            document.getElementById(`turn${turn}_savingThrow`).innerHTML = `<h4>Saving Throw</h4> ${action.savingThrow}`;
        }
        if (action.duration) {
            document.getElementById(`turn${turn}_duration`).innerHTML = `<h4>Duration</h4> ${action.duration}`;
        }
        if (action.frequency) {
            document.getElementById(`turn${turn}_frequency`).innerHTML = `<h4>Frequency</h4> ${action.frequency}`;
        }
        if (action.trigger) {
            document.getElementById(`turn${turn}_trigger`).innerHTML = `<h4>Trigger</h4> ${action.trigger}`;
        }
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
        document.getElementById(`turn${turn}_heightened`).innerHTML = "";
        for (let i = 0; i < action.heightenedLevel.length; i++) {
            document.getElementById(`turn${turn}_heightened`).innerHTML += `<p><h4>Heightened (${action.heightenedLevel[i]})</h4> ${action.heightenedText[i]}</p>`;
        }
        if (action.extraTitle) {
            document.getElementById(`turn${turn}_extra`).innerHTML = `<h4>${action.extraTitle}</h4> ${action.extraText}`;
        }
    }

    // disables future turns for multi-turn actions
    if (turn < 4) { // turn 4 has 0 future turns
        if (action.actionCost > 1) {
            document.getElementById(`turn${turn + 1}`).style.display = "none";
            resetTurn(turn + 1);
            document.getElementById(`turn${turn + 1}_option`).value = "";
            if (turn < 3) { // turn 3 has at most 1 future turn
                if (action.actionCost > 2) {
                    document.getElementById(`turn${turn + 2}`).style.display = "none";
                    resetTurn(turn + 2);
                    document.getElementById(`turn${turn + 2}_option`).value = "";
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
    switchGrid();

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
    for (let i = 1; i <= 4; i++) {
        resetTurn(i);
        document.getElementById(`turn${i}_option`).value = "";
    }

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
    switchGrid();

    // recalculates actions options
    filterActions();
}
document.getElementById("quickened").onclick = applyCondition;
document.getElementById("slowed1").onclick = () => {

    // can only be slowed 2 if slowed 1
    if (document.getElementById("slowed1").checked) {
        document.getElementById("slowed2").disabled = false;
    }
    else {
        document.getElementById("slowed2").checked = false;
        document.getElementById("slowed3").checked = false;
        document.getElementById("slowed2").disabled = true;
        document.getElementById("slowed3").disabled = true;        
    }

    applyCondition();
};
document.getElementById("slowed2").onclick = () => {

    // can only be slowed 3 if slowed 2
    if (document.getElementById("slowed2").checked) {
        document.getElementById("slowed3").disabled = false;
    }
    else {
        document.getElementById("slowed3").checked = false;
        document.getElementById("slowed3").disabled = true;        
    }
    
    applyCondition();
};
document.getElementById("slowed3").onclick = applyCondition;