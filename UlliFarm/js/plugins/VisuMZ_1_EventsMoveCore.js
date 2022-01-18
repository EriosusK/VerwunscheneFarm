//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.31;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.31] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Radius: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Radius: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Blend Mode: Normal>
 * <Icon Blend Mode: Additive>
 * <Icon Blend Mode: Multiply>
 * <Icon Blend Mode: Screen>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the blend mode for the icon on the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Activation
 * - Runs the page of a different event remotely.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.31: January 6, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Activation
 * @desc Runs the page of a different event remotely.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
//=============================================================================

const _0x2a8554=_0x2e8a;function _0x4424(){const _0x1f088e=['reverse\x20mimic','CPC','_pattern','gainFrames','loadCPC','max','Sprite_Character_setCharacterBitmap','createShadows','Step1MapId','_encounterEffectDuration','_shadowGraphic','setValue','Game_Event_initialize','initEventsMoveCore','clearPose','mirror\x20horz','_opacity','_inputTime','character','morphIntoTemplate','down','Game_CharacterBase_isDashing','_erased','TRUE','_lastMovedDirection','IconBlendMode','checkEventsMoveCoreStringTags','min','name','blendMode','Game_Follower_initialize','initMembersEventsMoveCore','shadowY','QUESTION','of\x20Preloaded\x20Maps.\x0a\x0a','processMoveCommandEventsMoveCore','setDirection','_moveOnlyRegions','constructor','EventTimerPause','processMoveRouteBalloon','getSavedEventLocation','_labelWindows','boxWidth','setPattern','ANNOYED','_activationProximityAutoTriggerBypass','_scene','_eventMorphData','Game_Vehicle_isMapPassable','ARRAYNUM','column','_duration','FavorHorz','MessageCore','bufferY','return\x20%1','checkCollisionKeywords','StopAutoMoveEvents','replace','isCollidedWithPlayerCharacters','TerrainTags','mapValue','addLoadListener','filename','setSelfValue','code','executeMove','Game_Player_increaseSteps','requestAnimation','TiltRight','isPassableByAnyDirection','pluginCommandCallEvent','setOpacity','updateParallel','processMoveRouteMoveTo','Game_Vehicle_isLandOk','findDiagonalDirectionTo','_interpreter','smooth','processMoveRouteTeleportTo','approach','Game_SelfSwitches_value','VisibleRange','Game_Event_meetsConditions','visibleRange','EVAL','target','scale','Game_CharacterBase_screenY','splice','Game_CharacterBase_moveDiagonally','EXCLAMATION','characterPatternYVS8','bufferX','SelfSwitchID','toUpperCase','_saveEventLocation','clearSpriteOffsets','DefaultShadow','_moveSynch','_mapId','turnRight90','_pose','findTargetSprite','5070368nShLjO','isAirshipPassable','setupEventsMoveCoreNotetags','roundY','updateSelfMovement','isDashDisabled','setBalloonPose','processMoveRoutePatternLock','deltaX','72zohxPh','events','_vehicleType','deltaY','Settings','processMoveCommand','processMoveRouteTeleportToCharacter','isBigCharacter','VariableId','OffsetX','requestRefresh','UPPER\x20LEFT','match','moveTowardPoint','Game_Map_events','setupMorphEvent','savePreservedMorphEventDataKey','_SavedEventLocations','_shadowSprite','setControlledFollowerID','startMapCommonEventOnTouch','startEncounterEffect','_selfTargetItemChoice','characterIndexVS8','distance','SPIN\x20COUNTERCLOCKWISE','isTargetEventValidForLabelWindow','push','processMoveSynchMimic','Game_Follower_chaseCharacter','LOVE','isMoving','_randomHomeY','getPosingCharacterDirection','BoatSpeed','Sprite_Balloon_setup','isShip','Game_Troop_meetsConditionsCPC','ARRAYJSON','processMoveRouteSetIndex','Map\x20%1\x20Switch\x20%2','Game_Player_executeMove','direction','setMoveRoute','width','_visibleEventY','EnableDashTilt','_characterIndex','HURT','_cacheVisibility','clearCarrying','VehicleAllow','_visibleEventX','FollowerSetTargetChase','determineCommonEventsWithCPC','isAdvancedVariable','filter','characterIndex','value','updateEventsMoveCoreTagChanges','variables','EventID','isPosing','Game_CharacterBase_setDirection','opacitySpeed','jumpHeight','parse','terrainTag','Game_CharacterBase_characterIndex','SwitchGetSelfSwitchID','deltaXFrom','some','updatePeriodicRefresh','zoomScale','initMembers','pageIndex','EventTemplates','_eventScreenX','Game_Character_processMoveCommand','updateText','meetActivationProximityConditions','determineEventOverload','unlock','HMPH','onDatabaseLoaded','eventId','Game_Player_checkEventTriggerThere','vert\x20mirror','BULB','_diagonalSupport','variableValid','Game_Event_updateSelfMovement','checkAdvancedSwitchVariablePresent','_cpc','SelfVariables','eraseEvent','665329dDNqAz','_DisablePlayerControl','setup','disable','right','setEventIconDataKey','fittingHeight','loadDataFile','DashEnableToggle','CPCsMet','processMoveRouteSelfSwitch','command108','isMapSwitch','processMoveRouteMoveRepeat','_spriteset','labelWindowRange','horizontal\x20mirror','processMoveSynch','spriteId','Disable','Enable','setMapValue','Game_Variables_value','isMovementSucceeded','outlineColor','_PlayerDiagonalSetting','_stepPattern','NUM','...','setPlayerControlDisable','setBackgroundType','Event','SLEEP','AirshipSpeed','updateTilt','isNormalPriority','Game_Interpreter_updateWaitMode','split','_tilemap','turnAwayFromPoint','exit','Game_Interpreter_PluginCommand','convertVariableValuesInScriptCall','front','initialize','NORMAL','createIconSprite','createShadow','Toggle','PreCopyJS','EventLabelVisible','eventsXyNt','switch1Id','add','custom','IconBufferX','length','destinationY','checkEventTriggerEventsMoveCore','PageId','screenY','Map%1-Event%2','startMapCommonEventOnOK','4054510TnwJHy','_moveAllowPlayerCollision','SPIN\x20ANTICLOCKWISE','command357','Frames','_EventIcons','ARRAYSTRUCT','mirror\x20vert','LOWER\x20LEFT','checkActivationProximity','21848820BRaoqf','Game_Map_update','isInVehicle','Game_Player_isMapPassable','isSpawnHitboxCollisionOk','createLabelWindows','description','EventTimerFramesGain','Game_SelfSwitches_setValue','characterPatternY','reverse\x20copy','IconBufferY','lastMovedDirection','iconSize','Game_CharacterBase_realMoveSpeed','registerCommand','checkEventTriggerAuto','getMapSpawnedEventData','PreloadedMaps','prepareSpawnedEventAtXY','createLowerLayer','Minutes','resume','fontFace','_selfTarget','SpawnEventAtRegion','hasEventIcon','_poseDuration','getEventIconIndex','random','SPIN\x20CCW','Game_Event_clearPageSettings','processMoveRouteHugWall','setupCopyEvent','switch2Valid','setFrame','Game_Character_forceMoveRoute','Map%1.json','initEventsMoveCoreSettings','_eventPageIndex','Game_Map_event','findProperPageIndex','parallelCommonEvents','isDashingAndMoving','UPPER\x20RIGHT','Scene_Map_startEncounterEffect','processMoveRouteFadeOut','Button','_eventErased','AutoBalloon','Hours','AdvancedSwitches','updatePattern','deleteIconsOnEventsData','execute','includes','clearDashing','ShipSpeed','isSaveEventLocations','prepareSpawnedEventAtRegion','advancedFunc','visible','SPIN\x20CLOCKWISE','EventTimerExpireEvent','region','PreMorphJS','isEventRunning','updatePatternEventsMoveCore','hasCPCs','setNumberInput','iconIndex','isAirship','1341801MWlIRH','FastForwardKey','EventTimerFramesSet','charAt','setupPageSettings','_working','Sprite_Balloon_updatePosition','FontSize','despawnEventId','mirror\x20vertical','windowPadding','isMoveOnlyRegionPassable','conditions','posEventsMoveCore','isShadowShrink','meetsCPC','SILENCE','_reflection','RemovePreserve','isShadowVisible','VICTORY','isSmartEventCollisionOn','Letter','Game_Switches_setValue','iconHeight','isRegionForbidPass','isSpriteVS8dir','_labelWindow','SuccessSwitchId','Setting','isJumping','getLastPluginCommandInterpreter','left','deltaYFrom','updateEventIconSprite','contents','AllForbid','roundYWithDirection','meetActivationRegionConditions','realMoveSpeed','SwitchId','despawnTerrainTags','TiltVert','boat','_seconds','isSelfSwitch','_spawnData','STR','EventForbid','Sprite_Character_initMembers','setCharacterBitmap','isSelfVariable','TiltLeft','createCharacterShadow','SCREEN','_followerChaseOff','jump','MULTIPLY','ANGER','referEvent','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','Game_Event_moveTypeRandom','shadowFilename','copy','variableId','Game_Event_updateParallel','isDashingEnabled','Forbid','_characterSprites','removeChild','_needsRefresh','_spawnedEvents','removeTemporaryMapSpawnedEvents','Game_CommonEvent_isActive','setImage','createSpawnedEventWithData','onCancel','player','Game_Timer_onExpire','startMapCommonEventOnOKTarget','setLastPluginCommandInterpreter','MorphEventTo','setAllowEventAutoMovement','%1%2','Game_Message_add','useCarryPoseForIcons','HEART','Stop','_callEventMap','processMoveSynchMirrorHorz','DashModifier','airship','updateMove','BitmapSmoothing','lineHeight','timer','PreSpawnJS','convertSelfVariableValuesInScriptCall','$preloadedMap_%1','Game_CharacterBase_pattern','MapVariables','activationProximityType','delay','Step1EventId','isMapPassable','Game_Variables_setValue','Scene_Load_onLoadSuccess','_moveRoute','_hidden','isBoat','Game_CharacterBase_update','height','isAnyEventStarting','getInputDir8','isLabelVisible','correctFacingDirection','clamp','Game_CharacterBase_updatePattern','innerWidth','processMoveRouteFadeIn','list','unlockEvent','COBWEB','initEventsMoveCoreEffects','Game_Event_event','setDestination','isEventClickTriggered','loadSystem','AdvancedVariables','_callEventData','checkExistingEntitiesAt','bitmap','Game_Player_checkEventTriggerHere','refreshIfNeeded','Seconds','clearEventCache','isValid','RIGHT\x20TO\x20LEFT','canMove','process_VisuMZ_EventsMoveCore_Switches_Variables','vertical\x20mirror','moveTypeRandom','_visiblePlayerY','Game_Map_setupEvents','_lastPluginCommandInterpreter','enable','updateOpacity','General','mimic','SelfVariableID','Player','EnableDir8','Window_ScrollText_startMessage','createSaveEventLocationData','Step2EventId','MorphEventRemove','getDirectionToPoint','BufferX','Region%1','WalkAllow','Map\x20%1\x20Variable\x20%2','processOk','OperateValues','LIGHT-BULB','_pageIndex','vehicle','isStopFollowerChasing','setCommonEvent','VisibleEventLabels','VehicleForbid','createContents','_moveRouteIndex','_waitMode','addChild','Game_Character_setMoveRoute','processMoveRouteAnimation','setupSpawnedEvents','switchId','checkNeedForPeriodicRefresh','setupRegionRestrictions','forceMoveRoute','_shadowOpacity','_characterName','prototype','textSizeEx','updateBitmapSmoothing','isPreventSelfMovement','DashingEnable','_EventsMoveCoreSettings','Game_CharacterBase_moveStraight','reverse','registerSelfTarget','PlayerMovementChange','hideShadows','_event','despawnRegions','OFF','Game_CharacterBase_screenX','isPlayerControlDisabled','dashSpeedModifier','processMoveRouteStepTo','setupSpawn','locate','Passability','createSpawnedEvent','_screenZoomScale','_CPCs','Dock','SpawnEventDespawnRegions','createLabelWindowForTarget','startCallEvent','VS8','isActive','KNEEL','_character','deleteIconsOnEventsDataKey','activationProximityDistance','%1:%2','parent','PosX','Spriteset_Map_createShadow','Sprite_Character_update','StopAutoMoveMessages','AllAllow','LIGHT','processMoveRouteJumpTo','EventId','Self\x20Variable\x20%1','defaultFontSize','removeMorph','EventIconChange','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','getEventIconData','processMoveRouteStepToCharacter','directionOnLadderSpriteVS8dir','mapId','setupDiagonalSupport','EventLocationDelete','isOnLadder','randomInt','moveTowardCharacter','dir8','_text','Sprite_Character_characterPatternY','changeSpeed','updateWaitMode','isDashing','BalloonOffsetX','hasClickTrigger','note','_regionRules','VisuMZ_1_MessageCore','Game_Event_start','start','updateVS8BalloonOffsets','isEventTest','ARRAYFUNC','regionList','followers','spawnEventId','_frames','prepareSpawnedEventAtTerrainTag','isSupportDiagonalMovement','follower','eventLabelsVisible','saveEventLocation','_chaseOff','pattern','_eventIconSprite','setupEventsMoveCoreEffects','inBattle','_forceCarrying','setEventLabelsVisible','rotation','template','offsetX','EventTimerSpeed','Hidden','selfValue','type','_eventLabelOffsetY','_visiblePlayerX','Game_CharacterBase_initMembers','Game_Map_isDashDisabled','getPosingCharacterIndex','forceDashing','TerrainTag','PostMorphJS','stop','Preserve','isAllowEventAutoMovement','_eventOverloadThreshold','Speed','processMoveRouteJumpForward','_periodicRefreshTimer','switch1Valid','_activationProximity','Window_EventItem_onOk','map','Ship','isBattleTest','Window_NumberInput_start','Game_Event_isCollidedWithPlayerCharacters','registerSelfEvent','onLoadSuccess','6etTMXj','activationRegionList','LineHeight','isDiagonalDirection','SlowerSpeed','VisuMZ_2_DragonbonesUnion','SpawnEventAtXY','moveAwayFromPoint','StrictCollision','VisuMZ_Setup_Preload_Map','absDistance','getPreservedMorphEventData','Sprite_Character_setTileBitmap','EventIconDelete','deleteEventLocation','isDestinationValid','NOTE','SpawnEventDespawnEverything','format','Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1','_followerControlID','morphInto','deletePreservedMorphEventDataKey','FollowerSetControl','_target','setMoveSpeed','reserveCommonEvent','ConvertParams','text','Step2Preserve','_commonEvents','isOnRope','_forceDashing','Region','Game_Event_findProperPageIndex','processMoveRouteStepFrom','moveStraight','DOWN','startMessage','RegionOkTarget','_selfTargetNumberInput','Collision','Game_Timer_initialize','contentsOpacity','PlayerAllow','Game_Temp_setDestination','ARRAYEVAL','Game_CharacterBase_hasStepAnime','executeMoveDir8','isPlaytest','concat','_cacheSystemVisible','_trigger','call','_dragonbones','isLandOk','RegionOk','initMoveSpeed','PreloadMaps','clearStepPattern','Game_Interpreter_character','reverseDir','3777147IAFsuA','adjustDir8MovementSpeed','checkRegionEventTrigger','Self\x20Switch\x20%1','SPIN\x20ACW','Game_Player_isDashing','isCollidedWithEvents','STRUCT','horz\x20mirror','isAdvancedSwitch','processMoveSynchCustom','%1Forbid','setupEvents','MapId','meetsConditions','spawnPreserved','moveSynchTarget','ZZZ','requestBalloon','clearPageSettings','WalkForbid','CarryPose','getPlayerDiagonalSetting','default','autosaveEventLocation','LIGHTBULB','SpawnEventDespawnAtXY','moveForward','_data','isTurnInPlace','switches','abs','IconIndex','_PreservedEventMorphData','ShowShadows','_paused','82684uEXBiV','_MapSpawnedEventData','updateRoutineMove','EventsMoveCore','turnTowardPoint','turnTowardCharacter','destinationX','PlayerIconChange','setupSaveEventLocations','backY','isAutoBufferIcon','status','getPosingCharacterPattern','turnAwayFromCharacter','isTile','isNearTheScreen','bind','hasStepAnime','Game_Timer_start','checkEventTriggerHere','LEFT\x20TO\x20RIGHT','USER-DEFINED\x204','GetMoveSynchTarget','Step2MapId','_patternLocked','backX','8sqNXiY','event','VariableGetSelfVariableID','$callEventMap','MUSIC','lastSpawnedEventID','moveSynchType','updateShadow','fontSize','checkSmartEventCollision','isAllowCharacterTilt','restoreSavedEventPosition','apply','updateScale','AutoMoveEvents','none','onOk','_type','_counter','characterName','22tGDUHj','labelWindowText','chaseCharacter','Window_NumberInput_processOk','PlayerForbid','Game_Interpreter_executeCommand','setDashingEnabled','findDirectionTo','Value','CustomPageConditions','MUSIC\x20NOTE','_eventSpawnData','SpawnEventAtTerrainTag','UNTITLED','roundX','refresh','ITEM','Scene_Boot_onDatabaseLoaded','Spriteset_Map_createLowerLayer','roundXWithDirection','SpawnEventDespawnTerrainTags','forceCarrying','setTileBitmap','_eventIcon','FRUSTRATION','lastSpawnedEvent','isRunning','create','Game_CharacterBase_direction','EventLocationCreate','indexOf','posNt','TargetSwitchId','Walk','update','_selfEvent','BufferY','USER-DEFINED\x202','BlendMode','executeCommand','setStopFollowerChasing','All','getPose','_eventId','processMoveRouteMoveUntilStop','Game_Map_unlockEvent','iconWidth','erase','increaseSteps','moveAwayFromCharacter','slice','setDiagonalDirection','initFollowerController','_moveSpeed','canPass','JSON','moveByInput','string','processMoveSynchApproach','floor','needsUpdate','opacity','onExpire','checkValidEventerMap','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_filename','CallEvent','Operation','VisuMZ_0_CoreEngine','_needsPeriodicRefresh','RegionTouch','SelfSwitches','_eventCache','_addedHitbox','moveDiagonally','MoveAllSynchTargets','getInputDirection','onClickTrigger','SPIN\x20CW','_eventScreenY','ship','makeDeepCopy','MapSwitches','processMoveSynchRandom','frontY','isPassable','Game_Vehicle_initMoveSpeed','resizeWindow','despawnEverything','canStartLocalEvents','processMoveRouteSelfVariable','Game_Player_getInputDirection','eventsXy','Vehicle','USER-DEFINED\x205','_eventLabelOffsetX','processMoveRouteJumpToCharacter','hasMoveOnlyRegions','isEventOverloaded','_spawnPreserved','page','_eventCopyData','Game_Enemy_meetsSwitchCondition','regionId','Game_Troop_meetsConditions','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','advancedValue','setChaseOff','processMoveSynchMirrorVert','metCPC','getDirectionFromPoint','return\x200','isRegionDockable','offsetY','Chase','_advancedSwitchVariable','_spriteOffsetX','Game_Event_setupPageSettings','moveBackToRandomHome','Name','anchor','Icon','canPassDiagonally','isWorking','checkEventTriggerThere','OffsetY','Allow','turnLeft90','screenX','toLowerCase','Rope','FollowerSetGlobalChase','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.','drawIcon','clearDestination','switch2Id','getSelfTarget','_alwaysUpdateMove','isRegionAllowPass','FollowerID','updatePosition','padZero','Movement','updateMoveSynch','Game_System_initialize','deleteSavedEventLocationKey','MapID','Window_EventItem_onCancel','setPose','isBusy','%1Dock','LIGHT\x20BULB','IconSet','itemPadding','_commonEventId','_eventOverload','_spriteOffsetY','Game_Switches_value','pos','EventLabelRefresh','CommonEventID','Template','TurnInPlaceDelay','PostSpawnJS','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','setPlayerDiagonalSetting','pages','round','despawnAtXY','_clickTrigger','Game_CharacterBase_canPass','clear','Game_Event_locate','resetFontSettings','Airship','SWEAT','_randomMoveWeight','_expireCommonEvent','setWaitMode','SelfSwitchABCD','Game_Message_setItemChoice','Window_Message_startMessage','processMoveRouteMoveToCharacter','Label','_saveEventLocations','hasAdvancedSwitchVariable','pageId','Game_Timer_stop','clearSelfTarget','parameters','trim','deleteSavedEventLocation','_speed','EventAutoMovement','_randomHomeX','setupEventsMoveCoreCommentTags','trigger','setEventIconData','TemplateName'];_0x4424=function(){return _0x1f088e;};return _0x4424();}function _0x2e8a(_0x1039a7,_0x5eed87){const _0x4424af=_0x4424();return _0x2e8a=function(_0x2e8a1c,_0x2f77cc){_0x2e8a1c=_0x2e8a1c-0xcc;let _0x44b931=_0x4424af[_0x2e8a1c];return _0x44b931;},_0x2e8a(_0x1039a7,_0x5eed87);}(function(_0x4d36b1,_0x53071d){const _0x1921e0=_0x2e8a,_0xbc3d3b=_0x4d36b1();while(!![]){try{const _0x5e63dc=parseInt(_0x1921e0(0x2a8))/0x1*(parseInt(_0x1921e0(0x2c2))/0x2)+parseInt(_0x1921e0(0x284))/0x3+parseInt(_0x1921e0(0x407))/0x4+parseInt(_0x1921e0(0x4af))/0x5+parseInt(_0x1921e0(0x246))/0x6*(parseInt(_0x1921e0(0x470))/0x7)+parseInt(_0x1921e0(0x410))/0x8*(parseInt(_0x1921e0(0x115))/0x9)+-parseInt(_0x1921e0(0xcd))/0xa*(parseInt(_0x1921e0(0x2d6))/0xb);if(_0x5e63dc===_0x53071d)break;else _0xbc3d3b['push'](_0xbc3d3b['shift']());}catch(_0xd346c9){_0xbc3d3b['push'](_0xbc3d3b['shift']());}}}(_0x4424,0xb3883));var label=_0x2a8554(0x2ab),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2a8554(0x448)](function(_0x45ca0c){const _0x1c03ce=_0x2a8554;return _0x45ca0c[_0x1c03ce(0x2b3)]&&_0x45ca0c[_0x1c03ce(0xd3)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x2a8554(0x414)]=VisuMZ[label][_0x2a8554(0x414)]||{},VisuMZ[_0x2a8554(0x261)]=function(_0x102b3a,_0x3cef1e){const _0x3d03c4=_0x2a8554;for(const _0x349dd9 in _0x3cef1e){if(_0x349dd9[_0x3d03c4(0x41c)](/(.*):(.*)/i)){const _0x214db2=String(RegExp['$1']),_0x33f304=String(RegExp['$2'])[_0x3d03c4(0x3fe)]()[_0x3d03c4(0x395)]();let _0x5efa16,_0x44a6c0,_0x27e056;switch(_0x33f304){case _0x3d03c4(0x48b):_0x5efa16=_0x3cef1e[_0x349dd9]!==''?Number(_0x3cef1e[_0x349dd9]):0x0;break;case _0x3d03c4(0x3d0):_0x44a6c0=_0x3cef1e[_0x349dd9]!==''?JSON[_0x3d03c4(0x452)](_0x3cef1e[_0x349dd9]):[],_0x5efa16=_0x44a6c0[_0x3d03c4(0x23f)](_0x31d9eb=>Number(_0x31d9eb));break;case _0x3d03c4(0x3f4):_0x5efa16=_0x3cef1e[_0x349dd9]!==''?eval(_0x3cef1e[_0x349dd9]):null;break;case _0x3d03c4(0x274):_0x44a6c0=_0x3cef1e[_0x349dd9]!==''?JSON['parse'](_0x3cef1e[_0x349dd9]):[],_0x5efa16=_0x44a6c0[_0x3d03c4(0x23f)](_0x3b165b=>eval(_0x3b165b));break;case _0x3d03c4(0x30d):_0x5efa16=_0x3cef1e[_0x349dd9]!==''?JSON[_0x3d03c4(0x452)](_0x3cef1e[_0x349dd9]):'';break;case _0x3d03c4(0x436):_0x44a6c0=_0x3cef1e[_0x349dd9]!==''?JSON['parse'](_0x3cef1e[_0x349dd9]):[],_0x5efa16=_0x44a6c0[_0x3d03c4(0x23f)](_0x3750b7=>JSON['parse'](_0x3750b7));break;case'FUNC':_0x5efa16=_0x3cef1e[_0x349dd9]!==''?new Function(JSON[_0x3d03c4(0x452)](_0x3cef1e[_0x349dd9])):new Function(_0x3d03c4(0x346));break;case _0x3d03c4(0x215):_0x44a6c0=_0x3cef1e[_0x349dd9]!==''?JSON['parse'](_0x3cef1e[_0x349dd9]):[],_0x5efa16=_0x44a6c0[_0x3d03c4(0x23f)](_0x247ea0=>new Function(JSON[_0x3d03c4(0x452)](_0x247ea0)));break;case _0x3d03c4(0x144):_0x5efa16=_0x3cef1e[_0x349dd9]!==''?String(_0x3cef1e[_0x349dd9]):'';break;case'ARRAYSTR':_0x44a6c0=_0x3cef1e[_0x349dd9]!==''?JSON[_0x3d03c4(0x452)](_0x3cef1e[_0x349dd9]):[],_0x5efa16=_0x44a6c0[_0x3d03c4(0x23f)](_0x30d164=>String(_0x30d164));break;case _0x3d03c4(0x28b):_0x27e056=_0x3cef1e[_0x349dd9]!==''?JSON['parse'](_0x3cef1e[_0x349dd9]):{},_0x102b3a[_0x214db2]={},VisuMZ[_0x3d03c4(0x261)](_0x102b3a[_0x214db2],_0x27e056);continue;case _0x3d03c4(0x4b5):_0x44a6c0=_0x3cef1e[_0x349dd9]!==''?JSON[_0x3d03c4(0x452)](_0x3cef1e[_0x349dd9]):[],_0x5efa16=_0x44a6c0[_0x3d03c4(0x23f)](_0x31ca64=>VisuMZ[_0x3d03c4(0x261)]({},JSON[_0x3d03c4(0x452)](_0x31ca64)));break;default:continue;}_0x102b3a[_0x214db2]=_0x5efa16;}}return _0x102b3a;},(_0x56dbdc=>{const _0xfbc446=_0x2a8554,_0x6f8c32=_0x56dbdc['name'];for(const _0x4463f7 of dependencies){if(!Imported[_0x4463f7]){alert(_0xfbc446(0x33f)[_0xfbc446(0x258)](_0x6f8c32,_0x4463f7)),SceneManager['exit']();break;}}const _0x167165=_0x56dbdc[_0xfbc446(0xd3)];if(_0x167165[_0xfbc446(0x41c)](/\[Version[ ](.*?)\]/i)){const _0x5a910c=Number(RegExp['$1']);_0x5a910c!==VisuMZ[label]['version']&&(alert(_0xfbc446(0x1fc)[_0xfbc446(0x258)](_0x6f8c32,_0x5a910c)),SceneManager[_0xfbc446(0x498)]());}if(_0x167165['match'](/\[Tier[ ](\d+)\]/i)){const _0xebf955=Number(RegExp['$1']);_0xebf955<tier?(alert(_0xfbc446(0x316)[_0xfbc446(0x258)](_0x6f8c32,_0xebf955,tier)),SceneManager[_0xfbc446(0x498)]()):tier=Math[_0xfbc446(0x3a3)](_0xebf955,tier);}VisuMZ[_0xfbc446(0x261)](VisuMZ[label][_0xfbc446(0x414)],_0x56dbdc['parameters']);})(pluginData),VisuMZ[_0x2a8554(0x1b7)]=function(_0x5626ce,_0xf610,_0x42b1af){switch(_0x42b1af){case'=':return _0xf610;break;case'+':return _0x5626ce+_0xf610;break;case'-':return _0x5626ce-_0xf610;break;case'*':return _0x5626ce*_0xf610;break;case'/':return _0x5626ce/_0xf610;break;case'%':return _0x5626ce%_0xf610;break;}return _0x5626ce;},PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x2d0),_0x533af7=>{const _0x57ab9a=_0x2a8554;VisuMZ[_0x57ab9a(0x261)](_0x533af7,_0x533af7);switch(_0x533af7[_0x57ab9a(0x2de)]){case'Allow':$gameSystem['setAllowEventAutoMovement'](!![]);break;case _0x57ab9a(0x16c):$gameSystem[_0x57ab9a(0x167)](![]);break;case _0x57ab9a(0x4a0):$gameSystem['setAllowEventAutoMovement'](!$gameSystem[_0x57ab9a(0x237)]());break;}}),PluginManager[_0x2a8554(0xdc)](pluginData['name'],_0x2a8554(0x318),_0x5709a5=>{const _0x2f6b82=_0x2a8554;VisuMZ['ConvertParams'](_0x5709a5,_0x5709a5);const _0x108599=$gameTemp[_0x2f6b82(0x134)](),_0x333e10={'mapId':_0x5709a5[_0x2f6b82(0x291)],'eventId':_0x5709a5[_0x2f6b82(0x1f7)]||_0x108599[_0x2f6b82(0x465)](),'pageId':_0x5709a5[_0x2f6b82(0x4ab)]};if(_0x333e10['mapId']<=0x0)_0x333e10[_0x2f6b82(0x200)]=$gameMap?$gameMap['mapId']():0x1;$gameTemp[_0x2f6b82(0x134)]()[_0x2f6b82(0x3e6)](_0x333e10);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x478),_0x270d7f=>{const _0x16d6c8=_0x2a8554;VisuMZ['ConvertParams'](_0x270d7f,_0x270d7f);switch(_0x270d7f[_0x16d6c8(0x2de)]){case _0x16d6c8(0x484):$gameSystem['setDashingEnabled'](!![]);break;case _0x16d6c8(0x483):$gameSystem[_0x16d6c8(0x2dc)](![]);break;case'Toggle':$gameSystem[_0x16d6c8(0x2dc)](!$gameSystem[_0x16d6c8(0x157)]());break;}}),PluginManager['registerCommand'](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x1fb),_0x1fc77b=>{const _0x3e90ea=_0x2a8554;VisuMZ[_0x3e90ea(0x261)](_0x1fc77b,_0x1fc77b);const _0x58e559=$gameTemp['getLastPluginCommandInterpreter']();_0x1fc77b[_0x3e90ea(0x291)]=_0x1fc77b[_0x3e90ea(0x291)]||$gameMap['mapId'](),$gameSystem[_0x3e90ea(0x475)](_0x1fc77b['MapId'],_0x1fc77b[_0x3e90ea(0x1f7)]||_0x58e559[_0x3e90ea(0x465)](),_0x1fc77b[_0x3e90ea(0x2a4)],_0x1fc77b['IconBufferX'],_0x1fc77b[_0x3e90ea(0xd8)],_0x1fc77b[_0x3e90ea(0x3b7)]);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x253),_0x44749c=>{const _0x12b901=_0x2a8554;VisuMZ['ConvertParams'](_0x44749c,_0x44749c);const _0xf19312=$gameTemp[_0x12b901(0x134)]();_0x44749c[_0x12b901(0x291)]=_0x44749c[_0x12b901(0x291)]||$gameMap[_0x12b901(0x200)](),$gameSystem['deleteIconsOnEventsDataKey'](_0x44749c['MapId'],_0x44749c[_0x12b901(0x1f7)]||_0xf19312[_0x12b901(0x465)]());}),PluginManager['registerCommand'](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x376),_0x2adf35=>{if($gameMap)for(const _0x1031c3 of $gameMap['events']()){_0x1031c3['refresh']();}}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x4a2),_0x286f80=>{const _0x40798c=_0x2a8554;VisuMZ['ConvertParams'](_0x286f80,_0x286f80);switch(_0x286f80['Visibility']){case'Visible':$gameSystem[_0x40798c(0x225)](!![]);break;case _0x40798c(0x22a):$gameSystem[_0x40798c(0x225)](![]);break;case _0x40798c(0x4a0):$gameSystem['setEventLabelsVisible'](!$gameSystem[_0x40798c(0x21d)]());break;}}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],'EventLocationSave',_0x3a85c1=>{const _0x1a057f=_0x2a8554;VisuMZ[_0x1a057f(0x261)](_0x3a85c1,_0x3a85c1);const _0x427229=$gameTemp['getLastPluginCommandInterpreter']();if(!$gameMap)return;const _0x3ef94f=$gameMap[_0x1a057f(0x2c3)](_0x3a85c1[_0x1a057f(0x1f7)]||_0x427229[_0x1a057f(0x465)]());if(_0x3ef94f)_0x3ef94f['saveEventLocation']();}),PluginManager[_0x2a8554(0xdc)](pluginData['name'],_0x2a8554(0x2f3),_0x58623d=>{const _0x261655=_0x2a8554;VisuMZ[_0x261655(0x261)](_0x58623d,_0x58623d);const _0x267468=$gameTemp[_0x261655(0x134)](),_0x52f548=_0x58623d[_0x261655(0x291)]||$gameMap[_0x261655(0x200)](),_0x3da744=_0x58623d[_0x261655(0x1f7)]||_0x267468['eventId'](),_0x3e0679=_0x58623d['PosX']||0x0,_0x4143f1=_0x58623d['PosY']||0x0,_0x17d0cf=_0x58623d['Direction']||0x2,_0x134d86=((_0x58623d['PageId']||0x1)-0x1)[_0x261655(0x189)](0x0,0x13),_0x27c761=_0x58623d['MoveRouteIndex']||0x0;$gameSystem[_0x261655(0x1ae)](_0x52f548,_0x3da744,_0x3e0679,_0x4143f1,_0x17d0cf,_0x134d86,_0x27c761);}),PluginManager['registerCommand'](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x202),_0x206b9f=>{const _0x94cc18=_0x2a8554;VisuMZ['ConvertParams'](_0x206b9f,_0x206b9f);const _0x38de6e=$gameTemp[_0x94cc18(0x134)](),_0xb9a293=_0x206b9f[_0x94cc18(0x291)]||$gameMap[_0x94cc18(0x200)](),_0xc5713=_0x206b9f[_0x94cc18(0x1f7)]||_0x38de6e[_0x94cc18(0x465)]();$gameSystem[_0x94cc18(0x368)](_0xb9a293,_0xc5713);}),PluginManager[_0x2a8554(0xdc)](pluginData['name'],_0x2a8554(0x10c),_0x280b23=>{const _0x3d52b0=_0x2a8554;VisuMZ[_0x3d52b0(0x261)](_0x280b23,_0x280b23);const _0x2295a9=_0x280b23[_0x3d52b0(0x377)];$gameTimer[_0x3d52b0(0x1bc)](_0x2295a9);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],'EventTimerExpireClear',_0x3ce72a=>{$gameTimer['setCommonEvent'](0x0);}),PluginManager[_0x2a8554(0xdc)](pluginData['name'],_0x2a8554(0xd4),_0x2b13c8=>{const _0x30319d=_0x2a8554;if(!$gameTimer[_0x30319d(0x352)]())return;VisuMZ[_0x30319d(0x261)](_0x2b13c8,_0x2b13c8);let _0x128907=0x0;_0x128907+=_0x2b13c8[_0x30319d(0x4b3)],_0x128907+=_0x2b13c8[_0x30319d(0x19b)]*0x3c,_0x128907+=_0x2b13c8[_0x30319d(0xe2)]*0x3c*0x3c,_0x128907+=_0x2b13c8[_0x30319d(0xff)]*0x3c*0x3c*0x3c,$gameTimer[_0x30319d(0x3a1)](_0x128907);}),PluginManager['registerCommand'](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x117),_0xf06394=>{const _0x2f4391=_0x2a8554;if(!$gameTimer[_0x2f4391(0x352)]())return;VisuMZ['ConvertParams'](_0xf06394,_0xf06394);let _0x42a82f=0x0;_0x42a82f+=_0xf06394[_0x2f4391(0x4b3)],_0x42a82f+=_0xf06394[_0x2f4391(0x19b)]*0x3c,_0x42a82f+=_0xf06394[_0x2f4391(0xe2)]*0x3c*0x3c,_0x42a82f+=_0xf06394['Hours']*0x3c*0x3c*0x3c,$gameTimer['setFrames'](_0x42a82f);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x3c5),_0x1350f1=>{const _0x25c783=_0x2a8554;if(!$gameTimer[_0x25c783(0x352)]())return;$gameTimer['pause']();}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],'EventTimerResume',_0x29d30a=>{const _0x12a0ab=_0x2a8554;if(!$gameTimer[_0x12a0ab(0x352)]())return;$gameTimer['resume']();}),PluginManager[_0x2a8554(0xdc)](pluginData['name'],_0x2a8554(0x229),_0x1e1007=>{const _0xe1e684=_0x2a8554;VisuMZ[_0xe1e684(0x261)](_0x1e1007,_0x1e1007);const _0x4c3138=_0x1e1007[_0xe1e684(0x239)]||0x0;$gameTimer['changeSpeed'](_0x4c3138);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x35a),_0x4b83b9=>{const _0x4f6394=_0x2a8554;VisuMZ['ConvertParams'](_0x4b83b9,_0x4b83b9);const _0x1c6bcc=!_0x4b83b9['Chase'];$gameSystem[_0x4f6394(0x2fe)](_0x1c6bcc);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x445),_0x443300=>{const _0x26dea4=_0x2a8554;VisuMZ[_0x26dea4(0x261)](_0x443300,_0x443300);const _0x4b3abb=(_0x443300[_0x26dea4(0x362)]||0x0)-0x1,_0x27d308=!_0x443300[_0x26dea4(0x349)],_0x191af1=$gamePlayer[_0x26dea4(0x217)]()['follower'](_0x4b3abb);if(_0x191af1)_0x191af1[_0x26dea4(0x342)](_0x27d308);}),PluginManager[_0x2a8554(0xdc)](pluginData['name'],_0x2a8554(0x25d),_0x559a68=>{const _0x42ad74=_0x2a8554;VisuMZ[_0x42ad74(0x261)](_0x559a68,_0x559a68);const _0x30d48a=_0x559a68[_0x42ad74(0x362)];$gameSystem['setControlledFollowerID'](_0x30d48a);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],'FollowerReset',_0x4c6c29=>{const _0x1df47c=_0x2a8554;VisuMZ[_0x1df47c(0x261)](_0x4c6c29,_0x4c6c29),$gameSystem[_0x1df47c(0x423)](0x0),$gameSystem[_0x1df47c(0x2fe)](![]);for(const _0x97b486 of $gamePlayer[_0x1df47c(0x217)]()[_0x1df47c(0x2a0)]){if(_0x97b486)_0x97b486[_0x1df47c(0x342)](![]);}}),PluginManager['registerCommand'](pluginData['name'],'SwitchGetSelfSwitchABCD',_0x125867=>{const _0x122e19=_0x2a8554;VisuMZ['ConvertParams'](_0x125867,_0x125867);const _0x4f0c2b=$gameTemp['getLastPluginCommandInterpreter']();_0x125867[_0x122e19(0x291)]=_0x125867[_0x122e19(0x291)]||$gameMap[_0x122e19(0x200)]();const _0x1504c5=[_0x125867[_0x122e19(0x291)],_0x125867[_0x122e19(0x1f7)]||_0x4f0c2b[_0x122e19(0x465)](),_0x125867[_0x122e19(0x12b)]],_0x4ae66b=_0x125867[_0x122e19(0x2f6)],_0x15f9e7=$gameSelfSwitches['value'](_0x1504c5)||![];$gameSwitches[_0x122e19(0x3a9)](_0x4ae66b,_0x15f9e7);}),PluginManager['registerCommand'](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x455),_0x427026=>{const _0x8a600a=_0x2a8554;VisuMZ[_0x8a600a(0x261)](_0x427026,_0x427026);const _0x453f75=$gameTemp[_0x8a600a(0x134)]();_0x427026['MapId']=_0x427026[_0x8a600a(0x291)]||$gameMap[_0x8a600a(0x200)]();const _0x4a4d39=[_0x427026[_0x8a600a(0x291)],_0x427026['EventId']||_0x453f75[_0x8a600a(0x465)](),'Self\x20Switch\x20%1'[_0x8a600a(0x258)](_0x427026['SwitchId'])],_0x22118a=_0x427026['TargetSwitchId'],_0x52996a=$gameSelfSwitches['value'](_0x4a4d39)||![];$gameSwitches[_0x8a600a(0x3a9)](_0x22118a,_0x52996a);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x2c4),_0x550921=>{const _0x42f364=_0x2a8554;VisuMZ[_0x42f364(0x261)](_0x550921,_0x550921);const _0x515847=$gameTemp[_0x42f364(0x134)]();_0x550921['MapId']=_0x550921[_0x42f364(0x291)]||$gameMap['mapId']();const _0x331472=[_0x550921[_0x42f364(0x291)],_0x550921[_0x42f364(0x1f7)]||_0x515847['eventId'](),_0x42f364(0x1f8)[_0x42f364(0x258)](_0x550921[_0x42f364(0x418)])],_0x4f3675=_0x550921['TargetVariableId'],_0xc75d85=$gameSelfSwitches['value'](_0x331472)||![];$gameVariables[_0x42f364(0x3a9)](_0x4f3675,_0xc75d85);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x166),_0x346299=>{const _0x4be4d6=_0x2a8554;VisuMZ[_0x4be4d6(0x261)](_0x346299,_0x346299);if(!$gameMap)return;const _0x1c1f48=$gameTemp[_0x4be4d6(0x134)](),_0x20ad5b=_0x346299[_0x4be4d6(0x263)];_0x346299[_0x4be4d6(0x3a6)]=_0x346299['Step1MapId']||$gameMap[_0x4be4d6(0x200)](),_0x346299[_0x4be4d6(0x2bf)]=_0x346299[_0x4be4d6(0x2bf)]||$gameMap[_0x4be4d6(0x200)](),_0x346299[_0x4be4d6(0x39d)]=_0x346299[_0x4be4d6(0x39d)][_0x4be4d6(0x3fe)]()['trim']();if(!_0x20ad5b&&_0x346299[_0x4be4d6(0x3a6)]!==$gameMap[_0x4be4d6(0x200)]())return;if($gameMap[_0x4be4d6(0x200)]()===_0x346299[_0x4be4d6(0x3a6)]){const _0x2980fb=$gameMap['event'](_0x346299[_0x4be4d6(0x17c)]||_0x1c1f48[_0x4be4d6(0x465)]());if(!_0x2980fb)return;_0x346299[_0x4be4d6(0x39d)]!==_0x4be4d6(0x2e3)?_0x2980fb[_0x4be4d6(0x3b1)](_0x346299['TemplateName']):_0x2980fb[_0x4be4d6(0x25b)](_0x346299['Step2MapId'],_0x346299[_0x4be4d6(0x1af)]||_0x1c1f48[_0x4be4d6(0x465)]());}_0x20ad5b&&$gameSystem[_0x4be4d6(0x420)](_0x346299[_0x4be4d6(0x3a6)],_0x346299[_0x4be4d6(0x17c)],_0x346299['TemplateName'],_0x346299['Step2MapId'],_0x346299['Step2EventId']);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x1b0),_0x3ee874=>{const _0x1d2639=_0x2a8554;VisuMZ[_0x1d2639(0x261)](_0x3ee874,_0x3ee874);if(!$gameMap)return;const _0x203faf=$gameTemp[_0x1d2639(0x134)]();_0x3ee874[_0x1d2639(0x291)]=_0x3ee874[_0x1d2639(0x291)]||$gameMap['mapId']();if($gameMap[_0x1d2639(0x200)]()===_0x3ee874[_0x1d2639(0x291)]){const _0x4015de=$gameMap[_0x1d2639(0x2c3)](_0x3ee874[_0x1d2639(0x1f7)]||_0x203faf[_0x1d2639(0x465)]());_0x4015de[_0x1d2639(0x1fa)]();}_0x3ee874[_0x1d2639(0x127)]&&$gameSystem[_0x1d2639(0x25c)](_0x3ee874[_0x1d2639(0x291)],_0x3ee874[_0x1d2639(0x1f7)]||_0x203faf[_0x1d2639(0x465)]());}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x1d5),_0x5b197b=>{const _0x145906=_0x2a8554;VisuMZ[_0x145906(0x261)](_0x5b197b,_0x5b197b),$gameSystem[_0x145906(0x48d)](!_0x5b197b[_0x145906(0x484)]);}),PluginManager['registerCommand'](pluginData['name'],'PlayerMovementDiagonal',_0x215856=>{const _0x19ba62=_0x2a8554;VisuMZ['ConvertParams'](_0x215856,_0x215856),$gameSystem['setPlayerDiagonalSetting'](_0x215856[_0x19ba62(0x132)]);}),PluginManager['registerCommand'](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x2af),_0x457327=>{const _0x31fffe=_0x2a8554;VisuMZ[_0x31fffe(0x261)](_0x457327,_0x457327),$gameSystem['setEventIconData']($gamePlayer,_0x457327[_0x31fffe(0x2a4)],_0x457327[_0x31fffe(0x4a7)],_0x457327['IconBufferY'],_0x457327[_0x31fffe(0x3b7)]);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],'PlayerIconDelete',_0xaa54c=>{const _0x45e73b=_0x2a8554;VisuMZ['ConvertParams'](_0xaa54c,_0xaa54c),$gameSystem[_0x45e73b(0x102)]($gamePlayer);}),PluginManager['registerCommand'](pluginData['name'],_0x2a8554(0x38a),_0x4e019d=>{const _0x3913c4=_0x2a8554;VisuMZ[_0x3913c4(0x261)](_0x4e019d,_0x4e019d);const _0x1b52e4=$gameTemp[_0x3913c4(0x134)]();_0x4e019d[_0x3913c4(0x291)]=_0x4e019d[_0x3913c4(0x291)]||$gameMap[_0x3913c4(0x200)]();const _0x5b80b6=[_0x4e019d[_0x3913c4(0x291)],_0x4e019d[_0x3913c4(0x1f7)]||_0x1b52e4[_0x3913c4(0x465)](),_0x4e019d[_0x3913c4(0x12b)]];switch(_0x4e019d[_0x3913c4(0x2de)]){case'ON':$gameSelfSwitches[_0x3913c4(0x3a9)](_0x5b80b6,!![]);break;case _0x3913c4(0x1d9):$gameSelfSwitches[_0x3913c4(0x3a9)](_0x5b80b6,![]);break;case _0x3913c4(0x4a0):$gameSelfSwitches[_0x3913c4(0x3a9)](_0x5b80b6,!$gameSelfSwitches[_0x3913c4(0x44a)](_0x5b80b6));break;}}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x3fd),_0x35767e=>{const _0x43c9af=_0x2a8554;VisuMZ['ConvertParams'](_0x35767e,_0x35767e);const _0x29f758=$gameTemp[_0x43c9af(0x134)]();_0x35767e[_0x43c9af(0x291)]=_0x35767e['MapId']||$gameMap[_0x43c9af(0x200)]();const _0x3a9400=[_0x35767e[_0x43c9af(0x291)],_0x35767e[_0x43c9af(0x1f7)]||_0x29f758[_0x43c9af(0x465)](),_0x43c9af(0x287)[_0x43c9af(0x258)](_0x35767e[_0x43c9af(0x13d)])];switch(_0x35767e['Value']){case'ON':$gameSelfSwitches[_0x43c9af(0x3a9)](_0x3a9400,!![]);break;case _0x43c9af(0x1d9):$gameSelfSwitches[_0x43c9af(0x3a9)](_0x3a9400,![]);break;case _0x43c9af(0x4a0):$gameSelfSwitches[_0x43c9af(0x3a9)](_0x3a9400,!$gameSelfSwitches[_0x43c9af(0x44a)](_0x3a9400));break;}}),PluginManager[_0x2a8554(0xdc)](pluginData['name'],_0x2a8554(0x1aa),_0x1d6478=>{const _0x1cd86c=_0x2a8554;VisuMZ[_0x1cd86c(0x261)](_0x1d6478,_0x1d6478);const _0x141931=$gameTemp['getLastPluginCommandInterpreter']();_0x1d6478[_0x1cd86c(0x291)]=_0x1d6478[_0x1cd86c(0x291)]||$gameMap[_0x1cd86c(0x200)]();const _0x39113a=[_0x1d6478['MapId'],_0x1d6478[_0x1cd86c(0x1f7)]||_0x141931[_0x1cd86c(0x465)](),'Self\x20Variable\x20%1'['format'](_0x1d6478[_0x1cd86c(0x418)])],_0x3869a0=VisuMZ[_0x1cd86c(0x1b7)]($gameSelfSwitches[_0x1cd86c(0x44a)](_0x39113a),_0x1d6478[_0x1cd86c(0x2de)],_0x1d6478[_0x1cd86c(0x319)]);$gameSelfSwitches[_0x1cd86c(0x3a9)](_0x39113a,_0x3869a0);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x24c),_0x5f482a=>{const _0x581feb=_0x2a8554;VisuMZ[_0x581feb(0x261)](_0x5f482a,_0x5f482a);const _0x493a2c=$gameTemp['getLastPluginCommandInterpreter'](),_0x4c493e={'template':_0x5f482a[_0x581feb(0x39d)],'mapId':_0x5f482a[_0x581feb(0x291)]||$gameMap[_0x581feb(0x200)](),'eventId':_0x5f482a['EventId']||_0x493a2c[_0x581feb(0x465)](),'x':_0x5f482a[_0x581feb(0x1f0)],'y':_0x5f482a['PosY'],'spawnPreserved':_0x5f482a[_0x581feb(0x236)],'spawnEventId':$gameMap[_0x581feb(0x15c)]['length']+0x3e8},_0x17477f=_0x5f482a[_0x581feb(0x131)]||0x0;if(!VisuMZ[_0x581feb(0xdf)][_0x4c493e[_0x581feb(0x200)]]&&_0x4c493e[_0x581feb(0x200)]!==$gameMap[_0x581feb(0x200)]()){let _0x4f30cc=_0x581feb(0x340)[_0x581feb(0x258)](_0x4c493e[_0x581feb(0x200)]);_0x4f30cc+=_0x581feb(0x3c0),_0x4f30cc+='Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a',_0x4f30cc+=_0x581feb(0x151),_0x4f30cc+=_0x581feb(0x259)[_0x581feb(0x258)](_0x4c493e[_0x581feb(0x200)]),alert(_0x4f30cc);return;}const _0x1e9092=$gameMap[_0x581feb(0xe0)](_0x4c493e,_0x5f482a[_0x581feb(0x26f)],_0x5f482a[_0x581feb(0x1e0)]);_0x17477f&&$gameSwitches[_0x581feb(0x3a9)](_0x17477f,!!_0x1e9092);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0xe6),_0x30c4a8=>{const _0x57e4ff=_0x2a8554;VisuMZ[_0x57e4ff(0x261)](_0x30c4a8,_0x30c4a8);const _0xa65c84=$gameTemp[_0x57e4ff(0x134)](),_0x4a1462={'template':_0x30c4a8[_0x57e4ff(0x39d)],'mapId':_0x30c4a8[_0x57e4ff(0x291)]||$gameMap[_0x57e4ff(0x200)](),'eventId':_0x30c4a8[_0x57e4ff(0x1f7)]||_0xa65c84[_0x57e4ff(0x465)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x30c4a8[_0x57e4ff(0x236)],'spawnEventId':$gameMap[_0x57e4ff(0x15c)][_0x57e4ff(0x4a8)]+0x3e8},_0x4c0683=_0x30c4a8[_0x57e4ff(0x131)]||0x0;if(!VisuMZ[_0x57e4ff(0xdf)][_0x4a1462[_0x57e4ff(0x200)]]&&_0x4a1462['mapId']!==$gameMap[_0x57e4ff(0x200)]()){let _0x2cca2d=_0x57e4ff(0x340)[_0x57e4ff(0x258)](_0x4a1462[_0x57e4ff(0x200)]);_0x2cca2d+=_0x57e4ff(0x3c0),_0x2cca2d+=_0x57e4ff(0x37b),_0x2cca2d+=_0x57e4ff(0x151),_0x2cca2d+='Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1'[_0x57e4ff(0x258)](_0x4a1462[_0x57e4ff(0x200)]),alert(_0x2cca2d);return;}const _0x461731=$gameMap['prepareSpawnedEventAtRegion'](_0x4a1462,_0x30c4a8['Region'],_0x30c4a8['Collision'],_0x30c4a8['Passability']);_0x4c0683&&$gameSwitches[_0x57e4ff(0x3a9)](_0x4c0683,!!_0x461731);}),PluginManager[_0x2a8554(0xdc)](pluginData['name'],_0x2a8554(0x2e2),_0x35c793=>{const _0xac1777=_0x2a8554;VisuMZ[_0xac1777(0x261)](_0x35c793,_0x35c793);const _0x3e1b28=$gameTemp[_0xac1777(0x134)](),_0x5d29a1={'template':_0x35c793[_0xac1777(0x39d)],'mapId':_0x35c793[_0xac1777(0x291)]||$gameMap[_0xac1777(0x200)](),'eventId':_0x35c793['EventId']||_0x3e1b28[_0xac1777(0x465)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x35c793[_0xac1777(0x236)],'spawnEventId':$gameMap['_spawnedEvents'][_0xac1777(0x4a8)]+0x3e8},_0x88ea4b=_0x35c793[_0xac1777(0x131)]||0x0;if(!VisuMZ[_0xac1777(0xdf)][_0x5d29a1[_0xac1777(0x200)]]&&_0x5d29a1[_0xac1777(0x200)]!==$gameMap[_0xac1777(0x200)]()){let _0x4a45e0=_0xac1777(0x340)[_0xac1777(0x258)](_0x5d29a1[_0xac1777(0x200)]);_0x4a45e0+=_0xac1777(0x3c0),_0x4a45e0+=_0xac1777(0x37b),_0x4a45e0+='Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a',_0x4a45e0+=_0xac1777(0x259)[_0xac1777(0x258)](_0x5d29a1[_0xac1777(0x200)]),alert(_0x4a45e0);return;}const _0x3d7c66=$gameMap[_0xac1777(0x21a)](_0x5d29a1,_0x35c793[_0xac1777(0x3db)],_0x35c793[_0xac1777(0x26f)],_0x35c793[_0xac1777(0x1e0)]);_0x88ea4b&&$gameSwitches[_0xac1777(0x3a9)](_0x88ea4b,!!_0x3d7c66);}),PluginManager['registerCommand'](pluginData[_0x2a8554(0x3ba)],'SpawnEventDespawnEventID',_0x4ccbc7=>{const _0x145a26=_0x2a8554;VisuMZ[_0x145a26(0x261)](_0x4ccbc7,_0x4ccbc7);const _0x299ae5=$gameTemp['getLastPluginCommandInterpreter']();$gameMap[_0x145a26(0x11d)](_0x4ccbc7[_0x145a26(0x44d)]||_0x299ae5['eventId']());}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x29e),_0x2ae8be=>{const _0x48f7ac=_0x2a8554;VisuMZ[_0x48f7ac(0x261)](_0x2ae8be,_0x2ae8be);const _0x3126db=_0x2ae8be[_0x48f7ac(0x1f0)],_0x9d6e56=_0x2ae8be['PosY'];$gameMap[_0x48f7ac(0x37f)](_0x3126db,_0x9d6e56);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x1e5),_0x301f5a=>{const _0x5e9d7a=_0x2a8554;VisuMZ['ConvertParams'](_0x301f5a,_0x301f5a),$gameMap[_0x5e9d7a(0x1d8)](_0x301f5a['Region']);}),PluginManager[_0x2a8554(0xdc)](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x2ea),_0x43ccc6=>{const _0x5b4dcb=_0x2a8554;VisuMZ[_0x5b4dcb(0x261)](_0x43ccc6,_0x43ccc6),$gameMap['despawnTerrainTags'](_0x43ccc6[_0x5b4dcb(0x3db)]);}),PluginManager['registerCommand'](pluginData[_0x2a8554(0x3ba)],_0x2a8554(0x257),_0x47e478=>{const _0x565d6b=_0x2a8554;VisuMZ[_0x565d6b(0x261)](_0x47e478,_0x47e478),$gameMap[_0x565d6b(0x32e)]();}),VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x2e7)]=Scene_Boot[_0x2a8554(0x1cc)][_0x2a8554(0x464)],Scene_Boot[_0x2a8554(0x1cc)][_0x2a8554(0x464)]=function(){const _0x393306=_0x2a8554;VisuMZ[_0x393306(0x2ab)][_0x393306(0x2e7)][_0x393306(0x27b)](this),this['process_VisuMZ_EventsMoveCore_LoadTemplateMaps'](),this[_0x393306(0x1a0)]();if(VisuMZ[_0x393306(0x2ab)]['CustomPageConditions'])VisuMZ[_0x393306(0x2ab)]['CustomPageConditions'][_0x393306(0x49c)]();},VisuMZ['PreloadedMaps']=[],VisuMZ[_0x2a8554(0x45c)]={},Scene_Boot[_0x2a8554(0x1cc)]['process_VisuMZ_EventsMoveCore_LoadTemplateMaps']=function(){const _0x224e73=_0x2a8554;if(DataManager[_0x224e73(0x241)]()||DataManager['isEventTest']())return;const _0x4d7ccd=VisuMZ['EventsMoveCore']['Settings'][_0x224e73(0x378)],_0x3e9c08=_0x4d7ccd[_0x224e73(0x280)][_0x224e73(0x308)](0x0);for(const _0x1640f1 of _0x4d7ccd['List']){_0x1640f1['Name']=_0x1640f1[_0x224e73(0x34e)][_0x224e73(0x3fe)]()[_0x224e73(0x395)](),VisuMZ[_0x224e73(0x45c)][_0x1640f1[_0x224e73(0x34e)]]=_0x1640f1;if(!_0x3e9c08[_0x224e73(0x104)](_0x1640f1['MapID']))_0x3e9c08['push'](_0x1640f1[_0x224e73(0x369)]);}for(const _0x3da421 of _0x3e9c08){if(VisuMZ[_0x224e73(0xdf)][_0x3da421])continue;const _0x15da03=_0x224e73(0xf2)[_0x224e73(0x258)](_0x3da421[_0x224e73(0x364)](0x3)),_0x131510=_0x224e73(0x177)[_0x224e73(0x258)](_0x3da421);DataManager[_0x224e73(0x477)](_0x131510,_0x15da03),setTimeout(this[_0x224e73(0x24f)][_0x224e73(0x2b8)](this,_0x3da421,_0x131510),0x64);}},Scene_Boot['prototype']['VisuMZ_Setup_Preload_Map']=function(_0x16bb2b,_0x2afb84){const _0x166e46=_0x2a8554;window[_0x2afb84]?(VisuMZ[_0x166e46(0xdf)][_0x16bb2b]=window[_0x2afb84],window[_0x2afb84]=undefined):setTimeout(this[_0x166e46(0x24f)][_0x166e46(0x2b8)](this,_0x16bb2b,_0x2afb84),0x64);},VisuMZ[_0x2a8554(0x100)]=[],VisuMZ[_0x2a8554(0x31d)]=[],VisuMZ[_0x2a8554(0x328)]=[],VisuMZ[_0x2a8554(0x195)]=[],VisuMZ[_0x2a8554(0x46e)]=[],VisuMZ[_0x2a8554(0x179)]=[],Scene_Boot[_0x2a8554(0x1cc)][_0x2a8554(0x1a0)]=function(){const _0x3c36a1=_0x2a8554;for(let _0x12bc26=0x1;_0x12bc26<$dataSystem[_0x3c36a1(0x2a2)][_0x3c36a1(0x4a8)];_0x12bc26++){if($dataSystem['switches'][_0x12bc26][_0x3c36a1(0x41c)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x3c36a1(0x100)]['push'](_0x12bc26);if($dataSystem[_0x3c36a1(0x2a2)][_0x12bc26][_0x3c36a1(0x41c)](/<SELF>/i))VisuMZ['SelfSwitches']['push'](_0x12bc26);if($dataSystem[_0x3c36a1(0x2a2)][_0x12bc26][_0x3c36a1(0x41c)](/<MAP>/i))VisuMZ[_0x3c36a1(0x328)][_0x3c36a1(0x42b)](_0x12bc26);}for(let _0x25f711=0x1;_0x25f711<$dataSystem['variables'][_0x3c36a1(0x4a8)];_0x25f711++){if($dataSystem[_0x3c36a1(0x44c)][_0x25f711]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x3c36a1(0x195)][_0x3c36a1(0x42b)](_0x25f711);if($dataSystem[_0x3c36a1(0x44c)][_0x25f711][_0x3c36a1(0x41c)](/<SELF>/i))VisuMZ['SelfVariables'][_0x3c36a1(0x42b)](_0x25f711);if($dataSystem['variables'][_0x25f711][_0x3c36a1(0x41c)](/<MAP>/i))VisuMZ[_0x3c36a1(0x179)]['push'](_0x25f711);}},VisuMZ['EventsMoveCore'][_0x2a8554(0x2df)]={},VisuMZ['EventsMoveCore'][_0x2a8554(0x2df)][_0x2a8554(0x49c)]=function(){const _0x3ea57c=_0x2a8554;this[_0x3ea57c(0x3ec)]=new Game_CPCInterpreter(),this[_0x3ea57c(0x446)]();},VisuMZ['EventsMoveCore']['CustomPageConditions'][_0x2a8554(0x446)]=function(){const _0x3e5e63=_0x2a8554;this['_commonEvents']=[];for(const _0x329b52 of $dataCommonEvents){if(!_0x329b52)continue;VisuMZ[_0x3e5e63(0x2ab)][_0x3e5e63(0x2df)][_0x3e5e63(0x3a2)](_0x329b52);if(_0x329b52[_0x3e5e63(0x39f)][_0x3e5e63(0x4a8)]>0x0)this['_commonEvents'][_0x3e5e63(0x42b)](_0x329b52['id']);}},VisuMZ[_0x2a8554(0x2ab)]['CustomPageConditions'][_0x2a8554(0x344)]=function(_0x418199,_0x1ac67f){const _0x1eabd3=_0x2a8554;return this['_interpreter'][_0x1eabd3(0x472)](_0x418199,_0x1ac67f),this[_0x1eabd3(0x3ec)][_0x1eabd3(0x103)](),this[_0x1eabd3(0x3ec)][_0x1eabd3(0x46d)];},VisuMZ[_0x2a8554(0x2ab)]['CustomPageConditions'][_0x2a8554(0x3a2)]=function(_0x437722){const _0x38bf87=_0x2a8554;let _0x12c79e=![];_0x437722[_0x38bf87(0x39f)]=[];for(const _0xb3a648 of _0x437722['list']){if([0x6c,0x198]['includes'](_0xb3a648['code'])){const _0x559816=_0xb3a648[_0x38bf87(0x394)][0x0];if(_0x559816[_0x38bf87(0x41c)](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x12c79e=!![];else _0x559816['match'](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x12c79e=![]);}_0x12c79e&&_0x437722[_0x38bf87(0x39f)][_0x38bf87(0x42b)](_0xb3a648);}},getSelfSwitchValue=function(_0xad70cf,_0x119a50,_0x24ae74){const _0x1e7fac=_0x2a8554;let _0x295c6e=[_0xad70cf,_0x119a50,_0x1e7fac(0x287)[_0x1e7fac(0x258)](_0x24ae74)];return typeof _0x24ae74===_0x1e7fac(0x30f)&&(_0x295c6e=[_0xad70cf,_0x119a50,_0x24ae74[_0x1e7fac(0x3fe)]()[_0x1e7fac(0x395)]()]),$gameSelfSwitches[_0x1e7fac(0x44a)](_0x295c6e);},getMapSwitchValue=function(_0x58f38c,_0x28d7fd){const _0x1ce531=_0x2a8554;let _0x5ec0f8=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x1ce531(0x258)](_0x58f38c,_0x28d7fd)];return $gameSelfSwitches[_0x1ce531(0x44a)](_0x5ec0f8);},getMapVariableValue=function(_0x126203,_0x2e8c4c){const _0xbf8042=_0x2a8554;let _0xef3a03=[0x0,0x0,_0xbf8042(0x1b5)['format'](_0x126203,_0x2e8c4c)];return $gameSelfSwitches['value'](_0xef3a03);},getSelfVariableValue=function(_0x3a9c60,_0x53468b,_0x14e7ca){const _0x2db85d=_0x2a8554,_0x370e90=[_0x3a9c60,_0x53468b,_0x2db85d(0x1f8)['format'](_0x14e7ca)];return $gameSelfSwitches[_0x2db85d(0x44a)](_0x370e90);},setSelfSwitchValue=function(_0x2bc336,_0xd8bf42,_0x23c518,_0xf55fa2){const _0x203b20=_0x2a8554;let _0x3e3eae=[_0x2bc336,_0xd8bf42,_0x203b20(0x287)[_0x203b20(0x258)](_0x23c518)];typeof _0x23c518===_0x203b20(0x30f)&&(_0x3e3eae=[_0x2bc336,_0xd8bf42,_0x23c518['toUpperCase']()[_0x203b20(0x395)]()]),$gameSelfSwitches[_0x203b20(0x3a9)](_0x3e3eae,_0xf55fa2);},setSelfVariableValue=function(_0x3f10db,_0x435870,_0x104845,_0x23958e){const _0x5cf0f7=_0x2a8554,_0x1c2c80=[_0x3f10db,_0x435870,'Self\x20Variable\x20%1'[_0x5cf0f7(0x258)](_0x104845)];$gameSelfSwitches[_0x5cf0f7(0x3a9)](_0x1c2c80,_0x23958e);},setMapSwitchValue=function(_0x173531,_0x119f4e,_0x2e429a){const _0x35ecd4=_0x2a8554;let _0x3487b7=[0x0,0x0,_0x35ecd4(0x438)[_0x35ecd4(0x258)](_0x173531,_0x119f4e)];$gameSelfSwitches['setValue'](_0x3487b7,_0x2e429a);},setMapVariableValue=function(_0x4d85e4,_0x501964,_0x2c353a){const _0xd8825b=_0x2a8554;let _0x2662c0=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'['format'](_0x4d85e4,_0x501964)];$gameSelfSwitches[_0xd8825b(0x3a9)](_0x2662c0,_0x2c353a);},DataManager[_0x2a8554(0x28d)]=function(_0x43ddd4){const _0x53040a=_0x2a8554;if(SceneManager[_0x53040a(0x3cd)]['constructor']===Scene_Debug)return![];return VisuMZ['AdvancedSwitches'][_0x53040a(0x104)](_0x43ddd4);},DataManager['isAdvancedVariable']=function(_0x10edd0){const _0x20c20b=_0x2a8554;if(SceneManager[_0x20c20b(0x3cd)][_0x20c20b(0x3c4)]===Scene_Debug)return![];return VisuMZ[_0x20c20b(0x195)][_0x20c20b(0x104)](_0x10edd0);},DataManager[_0x2a8554(0x142)]=function(_0x8bcfe5){const _0x276806=_0x2a8554;if(SceneManager[_0x276806(0x3cd)][_0x276806(0x3c4)]===Scene_Debug)return![];return VisuMZ['SelfSwitches'][_0x276806(0x104)](_0x8bcfe5);},DataManager[_0x2a8554(0x148)]=function(_0x1b1cc6){const _0x4d5fc6=_0x2a8554;if(SceneManager[_0x4d5fc6(0x3cd)][_0x4d5fc6(0x3c4)]===Scene_Debug)return![];return VisuMZ[_0x4d5fc6(0x46e)][_0x4d5fc6(0x104)](_0x1b1cc6);},DataManager[_0x2a8554(0x47c)]=function(_0x5c6275){const _0xedaefd=_0x2a8554;if(BattleManager['isBattleTest']())return![];return VisuMZ[_0xedaefd(0x328)][_0xedaefd(0x104)](_0x5c6275);},DataManager['isMapVariable']=function(_0x1f6c1f){const _0x26a32a=_0x2a8554;if(BattleManager[_0x26a32a(0x241)]())return![];return VisuMZ['MapVariables'][_0x26a32a(0x104)](_0x1f6c1f);},VisuMZ['EventsMoveCore']['Game_Temp_setDestination']=Game_Temp['prototype'][_0x2a8554(0x192)],Game_Temp[_0x2a8554(0x1cc)]['setDestination']=function(_0x20c933,_0x2fb4e1){const _0x135cc4=_0x2a8554;if(this[_0x135cc4(0x193)](_0x20c933,_0x2fb4e1))return;VisuMZ[_0x135cc4(0x2ab)][_0x135cc4(0x273)]['call'](this,_0x20c933,_0x2fb4e1);},Game_Temp[_0x2a8554(0x1cc)]['isEventClickTriggered']=function(_0x376571,_0x22fe00){const _0x44335f=_0x2a8554,_0x212bbf=$gameMap[_0x44335f(0x332)](_0x376571,_0x22fe00);for(const _0x332be8 of _0x212bbf){if(_0x332be8&&_0x332be8['hasClickTrigger']())return _0x332be8[_0x44335f(0x323)](),!![];}return![];},Game_Temp[_0x2a8554(0x1cc)][_0x2a8554(0x165)]=function(_0x30ba7c){const _0x597d21=_0x2a8554;this[_0x597d21(0x1a5)]=_0x30ba7c;},Game_Temp[_0x2a8554(0x1cc)][_0x2a8554(0x134)]=function(){const _0xbefee7=_0x2a8554;return this[_0xbefee7(0x1a5)];},Game_Temp[_0x2a8554(0x1cc)][_0x2a8554(0x1d4)]=function(_0x2c7959){this['_selfTarget']=_0x2c7959;},Game_Temp['prototype'][_0x2a8554(0x393)]=function(){this['_selfTarget']=undefined;},Game_Temp[_0x2a8554(0x1cc)][_0x2a8554(0x35f)]=function(){const _0x58608d=_0x2a8554;return this[_0x58608d(0xe5)];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x367)]=Game_System[_0x2a8554(0x1cc)]['initialize'],Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x49c)]=function(){const _0x5770e5=_0x2a8554;VisuMZ[_0x5770e5(0x2ab)]['Game_System_initialize'][_0x5770e5(0x27b)](this),this['initEventsMoveCore'](),this[_0x5770e5(0x30a)]();},Game_System[_0x2a8554(0x1cc)]['initEventsMoveCore']=function(){const _0xb6ba0b=_0x2a8554;this['_EventsMoveCoreSettings']={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this['_EventIcons']={},this['_MapSpawnedEventData']=[],this['_PreservedEventMorphData']={},this[_0xb6ba0b(0x421)]={},this[_0xb6ba0b(0x471)]=![],this[_0xb6ba0b(0x489)]=_0xb6ba0b(0x29b);},Game_System['prototype'][_0x2a8554(0x157)]=function(){const _0xd878e6=_0x2a8554;if(this[_0xd878e6(0x1d1)]===undefined)this[_0xd878e6(0x3ab)]();if(this[_0xd878e6(0x1d1)]['DashingEnable']===undefined)this[_0xd878e6(0x3ab)]();return this[_0xd878e6(0x1d1)][_0xd878e6(0x1d0)];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x2dc)]=function(_0x3288dc){const _0x5ae771=_0x2a8554;if(this[_0x5ae771(0x1d1)]===undefined)this['initEventsMoveCore']();if(this[_0x5ae771(0x1d1)][_0x5ae771(0x1d0)]===undefined)this['initEventsMoveCore']();this[_0x5ae771(0x1d1)][_0x5ae771(0x1d0)]=_0x3288dc;},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x237)]=function(){const _0x3909e0=_0x2a8554;if(this['_EventsMoveCoreSettings']===undefined)this['initEventsMoveCore']();if(this[_0x3909e0(0x1d1)][_0x3909e0(0x398)]===undefined)this[_0x3909e0(0x3ab)]();return this[_0x3909e0(0x1d1)][_0x3909e0(0x398)];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x167)]=function(_0x304e4f){const _0x42ca7f=_0x2a8554;if(this[_0x42ca7f(0x1d1)]===undefined)this['initEventsMoveCore']();if(this[_0x42ca7f(0x1d1)][_0x42ca7f(0x398)]===undefined)this[_0x42ca7f(0x3ab)]();this[_0x42ca7f(0x1d1)][_0x42ca7f(0x398)]=_0x304e4f;},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x21d)]=function(){const _0x422bf9=_0x2a8554;if(this[_0x422bf9(0x1d1)]===undefined)this['initEventsMoveCore']();if(this[_0x422bf9(0x1d1)][_0x422bf9(0x1bd)]===undefined)this[_0x422bf9(0x3ab)]();return this[_0x422bf9(0x1d1)][_0x422bf9(0x1bd)];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x225)]=function(_0x4d30ff){const _0x1de457=_0x2a8554;if(this['_EventsMoveCoreSettings']===undefined)this['initEventsMoveCore']();if(this[_0x1de457(0x1d1)]['VisibleEventLabels']===undefined)this['initEventsMoveCore']();this[_0x1de457(0x1d1)][_0x1de457(0x1bd)]=_0x4d30ff;},Game_System[_0x2a8554(0x1cc)]['isPlayerControlDisabled']=function(){const _0x3906dd=_0x2a8554;return this[_0x3906dd(0x471)]===undefined&&(this[_0x3906dd(0x471)]=![]),this[_0x3906dd(0x471)];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x48d)]=function(_0x393c2a){this['_DisablePlayerControl']=_0x393c2a;},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x29a)]=function(){const _0x11cf66=_0x2a8554;return this[_0x11cf66(0x489)];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x37c)]=function(_0x4b671d){const _0x4caed4=_0x2a8554;this[_0x4caed4(0x489)]=String(_0x4b671d)[_0x4caed4(0x358)]()[_0x4caed4(0x395)]();},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x1fd)]=function(_0x3ca7cd){const _0x48cbe4=_0x2a8554;if(this[_0x48cbe4(0x4b4)]===undefined)this[_0x48cbe4(0x3ab)]();if(!_0x3ca7cd)return null;if(_0x3ca7cd===$gamePlayer)return this['_EventIcons'][_0x48cbe4(0x1ab)];else{const _0x460fcc=VisuMZ[_0x48cbe4(0x2ab)][_0x48cbe4(0x414)],_0x2e8fc0='Map%1-Event%2'['format'](_0x3ca7cd[_0x48cbe4(0x403)],_0x3ca7cd[_0x48cbe4(0x301)]);return this[_0x48cbe4(0x4b4)][_0x2e8fc0]=this['_EventIcons'][_0x2e8fc0]||{'iconIndex':0x0,'bufferX':_0x460fcc['Icon'][_0x48cbe4(0x1b2)],'bufferY':_0x460fcc[_0x48cbe4(0x350)][_0x48cbe4(0x2fa)],'blendMode':_0x460fcc[_0x48cbe4(0x350)][_0x48cbe4(0x2fc)]},this['_EventIcons'][_0x2e8fc0];}},Game_System['prototype'][_0x2a8554(0x39c)]=function(_0x3ff02f,_0x93ed7c,_0x3f7157,_0x1b3f90,_0x262bd3){const _0x50e5e5=_0x2a8554;if(this[_0x50e5e5(0x4b4)]===undefined)this[_0x50e5e5(0x3ab)]();const _0x1dc2ef=_0x3ff02f===$gamePlayer?'Player':_0x50e5e5(0x4ad)[_0x50e5e5(0x258)](_0x3ff02f['_mapId'],_0x3ff02f[_0x50e5e5(0x301)]);this[_0x50e5e5(0x4b4)][_0x1dc2ef]={'iconIndex':_0x93ed7c,'bufferX':_0x3f7157,'bufferY':_0x1b3f90,'blendMode':_0x262bd3};},Game_System['prototype']['setEventIconDataKey']=function(_0x9144a6,_0x1060ec,_0x4277c8,_0x11fc64,_0x2dbabd,_0x198b0f){const _0x796908=_0x2a8554;if(this[_0x796908(0x4b4)]===undefined)this['initEventsMoveCore']();const _0x1cc6e8=_0x796908(0x4ad)[_0x796908(0x258)](_0x9144a6,_0x1060ec);this[_0x796908(0x4b4)][_0x1cc6e8]={'iconIndex':_0x4277c8,'bufferX':_0x11fc64,'bufferY':_0x2dbabd,'blendMode':_0x198b0f};},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x102)]=function(_0x31357c){const _0x4f773c=_0x2a8554;if(this[_0x4f773c(0x4b4)]===undefined)this[_0x4f773c(0x3ab)]();if(!_0x31357c)return null;_0x31357c===$gamePlayer?delete this[_0x4f773c(0x4b4)]['Player']:this[_0x4f773c(0x1ec)](_0x31357c[_0x4f773c(0x403)],_0x31357c[_0x4f773c(0x301)]);},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x1ec)]=function(_0x4913e7,_0x4486e3){const _0x316da2=_0x2a8554;if(this[_0x316da2(0x4b4)]===undefined)this['initEventsMoveCore']();const _0x5f505e=_0x316da2(0x4ad)[_0x316da2(0x258)](_0x4913e7,_0x4486e3);delete this[_0x316da2(0x4b4)][_0x5f505e];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x3c7)]=function(_0x2f2816){const _0x17d8a0=_0x2a8554;if(this['_SavedEventLocations']===undefined)this[_0x17d8a0(0x3ab)]();if(!_0x2f2816)return null;const _0x56f8f7='Map%1-Event%2'[_0x17d8a0(0x258)](_0x2f2816[_0x17d8a0(0x403)],_0x2f2816[_0x17d8a0(0x301)]);return this[_0x17d8a0(0x421)][_0x56f8f7];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x21e)]=function(_0x44c8a0){const _0x3349d3=_0x2a8554;if(this['_SavedEventLocations']===undefined)this['initEventsMoveCore']();if(!_0x44c8a0)return;const _0xb88ffc='Map%1-Event%2'['format'](_0x44c8a0['_mapId'],_0x44c8a0[_0x3349d3(0x301)]);this['_SavedEventLocations'][_0xb88ffc]={'direction':_0x44c8a0[_0x3349d3(0x43a)](),'x':Math[_0x3349d3(0x37e)](_0x44c8a0['x']),'y':Math[_0x3349d3(0x37e)](_0x44c8a0['y']),'pageIndex':_0x44c8a0[_0x3349d3(0x1b9)],'moveRouteIndex':_0x44c8a0[_0x3349d3(0x1c0)]};},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x396)]=function(_0x38543f){const _0x58f9bd=_0x2a8554;if(this['_SavedEventLocations']===undefined)this['initEventsMoveCore']();if(!_0x38543f)return;this[_0x58f9bd(0x368)](_0x38543f['_mapId'],_0x38543f[_0x58f9bd(0x301)]);},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x368)]=function(_0x1cd14d,_0x508dc6){const _0x28830d=_0x2a8554;if(this[_0x28830d(0x421)]===undefined)this[_0x28830d(0x3ab)]();const _0x5128b1='Map%1-Event%2'['format'](_0x1cd14d,_0x508dc6);delete this[_0x28830d(0x421)][_0x5128b1];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x1ae)]=function(_0x5ec3cd,_0x560d01,_0x96898f,_0x1275c6,_0x4828fb,_0x23ad87,_0x53e50e){const _0x2b4cca=_0x2a8554;if(this[_0x2b4cca(0x421)]===undefined)this[_0x2b4cca(0x3ab)]();const _0x3b3e66=_0x2b4cca(0x4ad)[_0x2b4cca(0x258)](_0x5ec3cd,_0x560d01);this['_SavedEventLocations'][_0x3b3e66]={'direction':_0x4828fb,'x':Math[_0x2b4cca(0x37e)](_0x96898f),'y':Math[_0x2b4cca(0x37e)](_0x1275c6),'pageIndex':_0x23ad87,'moveRouteIndex':_0x53e50e};},Game_System['prototype'][_0x2a8554(0x251)]=function(_0x582071){const _0x5905a=_0x2a8554;if(this['_PreservedEventMorphData']===undefined)this['initEventsMoveCore']();if(!_0x582071)return;const _0x1bda4f=_0x5905a(0x4ad)[_0x5905a(0x258)](_0x582071[_0x5905a(0x403)],_0x582071[_0x5905a(0x301)]);return this['_PreservedEventMorphData'][_0x1bda4f];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x420)]=function(_0x167be4,_0x13f6b6,_0x5037f0,_0x273fe2,_0x2a025d){const _0x4a4791=_0x2a8554;if(this[_0x4a4791(0x2a5)]===undefined)this[_0x4a4791(0x3ab)]();const _0xe2e62e=_0x4a4791(0x4ad)[_0x4a4791(0x258)](_0x167be4,_0x13f6b6);this['_PreservedEventMorphData'][_0xe2e62e]={'template':_0x5037f0,'mapId':_0x273fe2,'eventId':_0x2a025d};},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x25c)]=function(_0x1177f9,_0x466412){const _0x2f1730=_0x2a8554;if(this['_PreservedEventMorphData']===undefined)this[_0x2f1730(0x3ab)]();const _0xd00e8f=_0x2f1730(0x4ad)[_0x2f1730(0x258)](_0x1177f9,_0x466412);delete this[_0x2f1730(0x2a5)][_0xd00e8f];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0xde)]=function(_0x53c9cf){const _0x3422eb=_0x2a8554;if(this[_0x3422eb(0x2a9)]===undefined)this[_0x3422eb(0x3ab)]();return this[_0x3422eb(0x2a9)][_0x53c9cf]=this[_0x3422eb(0x2a9)][_0x53c9cf]||[],this[_0x3422eb(0x2a9)][_0x53c9cf];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x15d)]=function(_0x10254c){const _0x23fe30=_0x2a8554,_0x353ac5=this[_0x23fe30(0xde)](_0x10254c);for(const _0x48bea7 of _0x353ac5){if(!_0x48bea7)continue;if(_0x48bea7[_0x23fe30(0x339)])continue;const _0x310a3f=_0x353ac5[_0x23fe30(0x2f4)](_0x48bea7);_0x353ac5[_0x310a3f]=null;}},Game_System[_0x2a8554(0x1cc)]['initFollowerController']=function(){const _0x5c08ea=_0x2a8554;this['_followerControlID']=0x0,this[_0x5c08ea(0x14c)]=![];},Game_System[_0x2a8554(0x1cc)]['getControlledFollowerID']=function(){const _0xde9f0d=_0x2a8554;if(this[_0xde9f0d(0x25a)]===undefined)this[_0xde9f0d(0x30a)]();return this['_followerControlID'];},Game_System[_0x2a8554(0x1cc)]['setControlledFollowerID']=function(_0x1d88a6){const _0x50577c=_0x2a8554;if(this[_0x50577c(0x25a)]===undefined)this[_0x50577c(0x30a)]();this[_0x50577c(0x25a)]=_0x1d88a6;;},VisuMZ['EventsMoveCore'][_0x2a8554(0x282)]=Game_Interpreter[_0x2a8554(0x1cc)]['character'],Game_Interpreter['prototype'][_0x2a8554(0x3b0)]=function(_0x1013ed){const _0x2a0051=_0x2a8554;if(!$gameParty[_0x2a0051(0x223)]()&&_0x1013ed<0x0){let _0xb6a247=$gameSystem['getControlledFollowerID']();if(_0xb6a247>0x0)return $gamePlayer['followers']()[_0x2a0051(0x21c)](_0xb6a247-0x1);}return VisuMZ[_0x2a0051(0x2ab)][_0x2a0051(0x282)][_0x2a0051(0x27b)](this,_0x1013ed);},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x1bb)]=function(){const _0x1d78a0=_0x2a8554;if(this['_followerChaseOff']===undefined)this[_0x1d78a0(0x30a)]();return this[_0x1d78a0(0x14c)];},Game_System[_0x2a8554(0x1cc)][_0x2a8554(0x2fe)]=function(_0x2ca512){const _0x6ce44a=_0x2a8554;if(this[_0x6ce44a(0x14c)]===undefined)this[_0x6ce44a(0x30a)]();this[_0x6ce44a(0x14c)]=_0x2ca512;;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x270)]=Game_Timer[_0x2a8554(0x1cc)][_0x2a8554(0x49c)],Game_Timer[_0x2a8554(0x1cc)][_0x2a8554(0x49c)]=function(){const _0x480201=_0x2a8554;VisuMZ[_0x480201(0x2ab)][_0x480201(0x270)][_0x480201(0x27b)](this),this[_0x480201(0x3ab)]();},Game_Timer[_0x2a8554(0x1cc)][_0x2a8554(0x3ab)]=function(){const _0x505a23=_0x2a8554;this[_0x505a23(0x2a7)]=![],this['_speed']=-0x1,this['_expireCommonEvent']=0x0;},Game_Timer[_0x2a8554(0x1cc)]['update']=function(_0x4a1e0e){const _0x2c337a=_0x2a8554;if(!_0x4a1e0e)return;if(!this[_0x2c337a(0x11a)])return;if(this[_0x2c337a(0x2a7)])return;if(this[_0x2c337a(0x219)]<=0x0)return;if(this[_0x2c337a(0x397)]===undefined)this['initEventsMoveCore']();this[_0x2c337a(0x219)]+=this[_0x2c337a(0x397)],this[_0x2c337a(0x219)]<=0x0&&this[_0x2c337a(0x314)]();},VisuMZ['EventsMoveCore'][_0x2a8554(0x2ba)]=Game_Timer[_0x2a8554(0x1cc)][_0x2a8554(0x212)],Game_Timer[_0x2a8554(0x1cc)][_0x2a8554(0x212)]=function(_0x452023){const _0x412773=_0x2a8554;VisuMZ['EventsMoveCore']['Game_Timer_start']['call'](this,_0x452023);if(this[_0x412773(0x2a7)]===undefined)this[_0x412773(0x3ab)]();this[_0x412773(0x2a7)]=![];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x392)]=Game_Timer['prototype']['stop'],Game_Timer[_0x2a8554(0x1cc)][_0x2a8554(0x235)]=function(){const _0x2bddce=_0x2a8554;VisuMZ['EventsMoveCore'][_0x2bddce(0x392)][_0x2bddce(0x27b)](this);if(this[_0x2bddce(0x2a7)]===undefined)this[_0x2bddce(0x3ab)]();this['_paused']=![];},Game_Timer[_0x2a8554(0x1cc)]['pause']=function(){const _0x374ff8=_0x2a8554;if(this[_0x374ff8(0x219)]<=0x0)return;this[_0x374ff8(0x2a7)]=!![],this[_0x374ff8(0x11a)]=!![];},Game_Timer['prototype'][_0x2a8554(0xe3)]=function(){const _0x41f704=_0x2a8554;if(this[_0x41f704(0x219)]<=0x0)return;this[_0x41f704(0x2a7)]=![],this[_0x41f704(0x11a)]=!![];},Game_Timer[_0x2a8554(0x1cc)]['gainFrames']=function(_0x2c4742){const _0x47aff1=_0x2a8554;this[_0x47aff1(0x219)]=this['_frames']||0x0,this[_0x47aff1(0x219)]+=_0x2c4742,this['_working']=!![],this[_0x47aff1(0x219)]=Math[_0x47aff1(0x3a3)](0x1,this[_0x47aff1(0x219)]);},Game_Timer[_0x2a8554(0x1cc)]['setFrames']=function(_0x20d0ed){const _0x1a8b5e=_0x2a8554;this['_frames']=this[_0x1a8b5e(0x219)]||0x0,this[_0x1a8b5e(0x219)]=_0x20d0ed,this['_working']=!![],this[_0x1a8b5e(0x219)]=Math[_0x1a8b5e(0x3a3)](0x1,this['_frames']);},Game_Timer['prototype'][_0x2a8554(0x209)]=function(_0x2624ee){const _0xdc4e9e=_0x2a8554;this[_0xdc4e9e(0x397)]=_0x2624ee,this[_0xdc4e9e(0x11a)]=!![],_0x2624ee>0x0&&(this[_0xdc4e9e(0x219)]=Math[_0xdc4e9e(0x3a3)](this[_0xdc4e9e(0x219)],0x1));},Game_Timer[_0x2a8554(0x1cc)][_0x2a8554(0x1bc)]=function(_0x196c28){const _0x3690b6=_0x2a8554;if(this['_expireCommonEvent']===undefined)this[_0x3690b6(0x3ab)]();this[_0x3690b6(0x388)]=_0x196c28;},VisuMZ['EventsMoveCore'][_0x2a8554(0x163)]=Game_Timer[_0x2a8554(0x1cc)]['onExpire'],Game_Timer[_0x2a8554(0x1cc)][_0x2a8554(0x314)]=function(){const _0x32b6b9=_0x2a8554;if(this[_0x32b6b9(0x388)]===undefined)this[_0x32b6b9(0x3ab)]();this[_0x32b6b9(0x388)]?$gameTemp[_0x32b6b9(0x260)](this[_0x32b6b9(0x388)]):VisuMZ[_0x32b6b9(0x2ab)][_0x32b6b9(0x163)][_0x32b6b9(0x27b)](this);},VisuMZ['EventsMoveCore'][_0x2a8554(0x169)]=Game_Message[_0x2a8554(0x1cc)]['add'],Game_Message[_0x2a8554(0x1cc)][_0x2a8554(0x4a5)]=function(_0x53abd7){const _0x28da32=_0x2a8554;VisuMZ[_0x28da32(0x2ab)][_0x28da32(0x169)][_0x28da32(0x27b)](this,_0x53abd7),this['_selfEvent']=$gameTemp['getSelfTarget']();},Game_Message[_0x2a8554(0x1cc)]['registerSelfEvent']=function(){const _0x25577c=_0x2a8554;$gameTemp[_0x25577c(0x1d4)](this[_0x25577c(0x2f9)]);},VisuMZ[_0x2a8554(0x2ab)]['Game_Switches_value']=Game_Switches['prototype'][_0x2a8554(0x44a)],Game_Switches[_0x2a8554(0x1cc)][_0x2a8554(0x44a)]=function(_0x13a94e){const _0x2048ac=_0x2a8554;if(DataManager['isAdvancedSwitch'](_0x13a94e))return!!this[_0x2048ac(0x341)](_0x13a94e);else{if(DataManager[_0x2048ac(0x142)](_0x13a94e))return!!this['selfValue'](_0x13a94e);else return DataManager['isMapSwitch'](_0x13a94e)?!!this['mapValue'](_0x13a94e):VisuMZ['EventsMoveCore']['Game_Switches_value'][_0x2048ac(0x27b)](this,_0x13a94e);}},Game_Switches[_0x2a8554(0x109)]={},Game_Switches['prototype'][_0x2a8554(0x341)]=function(_0x51c6d2){const _0x4cb88f=_0x2a8554;if(!Game_Switches[_0x4cb88f(0x109)][_0x51c6d2]){$dataSystem[_0x4cb88f(0x2a2)][_0x51c6d2][_0x4cb88f(0x41c)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x49537c=_0x4cb88f(0x3d6)['format'](String(RegExp['$1']));Game_Switches[_0x4cb88f(0x109)][_0x51c6d2]=new Function(_0x4cb88f(0x1c6),_0x49537c);}const _0x5ebef2=$gameTemp[_0x4cb88f(0x35f)]()||this;return Game_Switches[_0x4cb88f(0x109)][_0x51c6d2]['call'](_0x5ebef2,_0x51c6d2);},Game_Switches['prototype'][_0x2a8554(0x22b)]=function(_0x193946){const _0x22386e=_0x2a8554,_0x2859b=$gameTemp[_0x22386e(0x35f)]()||this;if(_0x2859b[_0x22386e(0x3c4)]!==Game_Event)return VisuMZ['EventsMoveCore'][_0x22386e(0x374)]['call'](this,_0x193946);else{const _0x38140a=[_0x2859b[_0x22386e(0x403)],_0x2859b[_0x22386e(0x301)],_0x22386e(0x287)['format'](_0x193946)];return $gameSelfSwitches[_0x22386e(0x44a)](_0x38140a);}},Game_Switches[_0x2a8554(0x1cc)][_0x2a8554(0x3dc)]=function(_0x452a7d){const _0x3b0bd3=_0x2a8554,_0x190212=$gameMap?$gameMap[_0x3b0bd3(0x200)]():0x0,_0x1e1b42=[0x0,0x0,_0x3b0bd3(0x438)[_0x3b0bd3(0x258)](_0x190212,_0x452a7d)];return $gameSelfSwitches[_0x3b0bd3(0x44a)](_0x1e1b42);},VisuMZ['EventsMoveCore'][_0x2a8554(0x12c)]=Game_Switches['prototype']['setValue'],Game_Switches[_0x2a8554(0x1cc)][_0x2a8554(0x3a9)]=function(_0x2578fc,_0x148721){const _0x20860a=_0x2a8554;if(DataManager['isSelfSwitch'](_0x2578fc))this[_0x20860a(0x3df)](_0x2578fc,_0x148721);else DataManager[_0x20860a(0x47c)](_0x2578fc)?this['setMapValue'](_0x2578fc,_0x148721):VisuMZ['EventsMoveCore']['Game_Switches_setValue'][_0x20860a(0x27b)](this,_0x2578fc,_0x148721);},Game_Switches[_0x2a8554(0x1cc)][_0x2a8554(0x3df)]=function(_0x22d17b,_0x53e794){const _0x1c6cef=_0x2a8554,_0x31386b=$gameTemp[_0x1c6cef(0x35f)]()||this;if(_0x31386b['constructor']!==Game_Event)VisuMZ[_0x1c6cef(0x2ab)][_0x1c6cef(0x12c)]['call'](this,_0x22d17b,_0x53e794);else{const _0x204604=[_0x31386b['_mapId'],_0x31386b[_0x1c6cef(0x301)],_0x1c6cef(0x287)[_0x1c6cef(0x258)](_0x22d17b)];$gameSelfSwitches[_0x1c6cef(0x3a9)](_0x204604,_0x53e794);}},Game_Switches[_0x2a8554(0x1cc)][_0x2a8554(0x485)]=function(_0x52a6ec,_0x97fe31){const _0x10ceba=_0x2a8554,_0x2bf019=$gameMap?$gameMap[_0x10ceba(0x200)]():0x0,_0x1cc10a=[0x0,0x0,_0x10ceba(0x438)[_0x10ceba(0x258)](_0x2bf019,_0x52a6ec)];return $gameSelfSwitches[_0x10ceba(0x3a9)](_0x1cc10a,_0x97fe31);},VisuMZ['EventsMoveCore'][_0x2a8554(0x486)]=Game_Variables[_0x2a8554(0x1cc)][_0x2a8554(0x44a)],Game_Variables[_0x2a8554(0x1cc)][_0x2a8554(0x44a)]=function(_0x338e6b){const _0x40b6d5=_0x2a8554;if(DataManager[_0x40b6d5(0x447)](_0x338e6b))return this[_0x40b6d5(0x341)](_0x338e6b);else{if(DataManager[_0x40b6d5(0x148)](_0x338e6b))return this[_0x40b6d5(0x22b)](_0x338e6b);else return DataManager['isMapVariable'](_0x338e6b)?this[_0x40b6d5(0x3dc)](_0x338e6b):VisuMZ['EventsMoveCore'][_0x40b6d5(0x486)][_0x40b6d5(0x27b)](this,_0x338e6b);}},Game_Variables[_0x2a8554(0x109)]={},Game_Variables[_0x2a8554(0x1cc)][_0x2a8554(0x341)]=function(_0x8fd10f){const _0xf2b368=_0x2a8554;if(!Game_Variables['advancedFunc'][_0x8fd10f]){$dataSystem[_0xf2b368(0x44c)][_0x8fd10f][_0xf2b368(0x41c)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x476122=_0xf2b368(0x3d6)[_0xf2b368(0x258)](String(RegExp['$1']));Game_Variables['advancedFunc'][_0x8fd10f]=new Function('variableId',_0x476122);}const _0x117219=$gameTemp[_0xf2b368(0x35f)]()||this;return Game_Variables[_0xf2b368(0x109)][_0x8fd10f][_0xf2b368(0x27b)](_0x117219,_0x8fd10f);},Game_Variables[_0x2a8554(0x1cc)]['selfValue']=function(_0x4cec03){const _0x16c357=_0x2a8554,_0x3d7a56=$gameTemp[_0x16c357(0x35f)]()||this;if(_0x3d7a56[_0x16c357(0x3c4)]!==Game_Event)return VisuMZ[_0x16c357(0x2ab)]['Game_Variables_value'][_0x16c357(0x27b)](this,_0x4cec03);else{const _0x52a31b=[_0x3d7a56['_mapId'],_0x3d7a56[_0x16c357(0x301)],_0x16c357(0x1f8)[_0x16c357(0x258)](_0x4cec03)];return $gameSelfSwitches[_0x16c357(0x44a)](_0x52a31b);}},Game_Variables[_0x2a8554(0x1cc)]['mapValue']=function(_0x50e43f){const _0x2eec16=_0x2a8554,_0xd55259=$gameMap?$gameMap[_0x2eec16(0x200)]():0x0,_0x543623=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'['format'](_0xd55259,_0x50e43f)];return $gameSelfSwitches[_0x2eec16(0x44a)](_0x543623)||0x0;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x17e)]=Game_Variables[_0x2a8554(0x1cc)][_0x2a8554(0x3a9)],Game_Variables['prototype'][_0x2a8554(0x3a9)]=function(_0x48e98a,_0x1ff4e9){const _0x54e578=_0x2a8554;if(DataManager['isSelfVariable'](_0x48e98a))this[_0x54e578(0x3df)](_0x48e98a,_0x1ff4e9);else DataManager['isMapVariable'](_0x48e98a)?this[_0x54e578(0x485)](_0x48e98a,_0x1ff4e9):VisuMZ[_0x54e578(0x2ab)]['Game_Variables_setValue'][_0x54e578(0x27b)](this,_0x48e98a,_0x1ff4e9);},Game_Variables[_0x2a8554(0x1cc)][_0x2a8554(0x3df)]=function(_0x40d4a2,_0x5a32b3){const _0x329e36=_0x2a8554,_0x40d72b=$gameTemp[_0x329e36(0x35f)]()||this;if(_0x40d72b[_0x329e36(0x3c4)]!==Game_Event)VisuMZ[_0x329e36(0x2ab)]['Game_Variables_setValue'][_0x329e36(0x27b)](this,_0x40d4a2,_0x5a32b3);else{const _0x2b00e3=[_0x40d72b['_mapId'],_0x40d72b['_eventId'],_0x329e36(0x1f8)['format'](_0x40d4a2)];$gameSelfSwitches[_0x329e36(0x3a9)](_0x2b00e3,_0x5a32b3);}},Game_Variables['prototype'][_0x2a8554(0x485)]=function(_0x441b40,_0x409ca3){const _0x4d6e8a=_0x2a8554,_0x3fc74a=$gameMap?$gameMap[_0x4d6e8a(0x200)]():0x0,_0x57eaaa=[0x0,0x0,_0x4d6e8a(0x1b5)[_0x4d6e8a(0x258)](_0x3fc74a,_0x441b40)];$gameSelfSwitches['setValue'](_0x57eaaa,_0x409ca3);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3f0)]=Game_SelfSwitches[_0x2a8554(0x1cc)]['value'],Game_SelfSwitches[_0x2a8554(0x1cc)][_0x2a8554(0x44a)]=function(_0x45a56f){const _0x54c101=_0x2a8554;if(_0x45a56f[0x2]['match'](/(?:SELF|MAP)/i))return this[_0x54c101(0x22b)](_0x45a56f);else{return VisuMZ[_0x54c101(0x2ab)][_0x54c101(0x3f0)]['call'](this,_0x45a56f);;}},Game_SelfSwitches[_0x2a8554(0x1cc)][_0x2a8554(0x22b)]=function(_0x5cc277){const _0x4d9729=_0x2a8554;return _0x5cc277[0x2][_0x4d9729(0x41c)](/VAR/i)?this[_0x4d9729(0x2a0)][_0x5cc277]||0x0:!!this[_0x4d9729(0x2a0)][_0x5cc277];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0xd5)]=Game_SelfSwitches['prototype'][_0x2a8554(0x3a9)],Game_SelfSwitches[_0x2a8554(0x1cc)][_0x2a8554(0x3a9)]=function(_0x3c1cae,_0x70431d){const _0x33f701=_0x2a8554;_0x3c1cae[0x2][_0x33f701(0x41c)](/(?:SELF|MAP)/i)?this[_0x33f701(0x3df)](_0x3c1cae,_0x70431d):VisuMZ[_0x33f701(0x2ab)][_0x33f701(0xd5)][_0x33f701(0x27b)](this,_0x3c1cae,_0x70431d);},Game_SelfSwitches[_0x2a8554(0x1cc)][_0x2a8554(0x3df)]=function(_0x24bab8,_0x590187){const _0x53c64e=_0x2a8554;this[_0x53c64e(0x2a0)][_0x24bab8]=_0x24bab8[0x2][_0x53c64e(0x41c)](/VAR/i)?_0x590187:!!_0x590187,this['onChange']();},VisuMZ['EventsMoveCore'][_0x2a8554(0x33c)]=Game_Enemy[_0x2a8554(0x1cc)]['meetsSwitchCondition'],Game_Enemy[_0x2a8554(0x1cc)]['meetsSwitchCondition']=function(_0x4da64c){const _0x29aef4=_0x2a8554;$gameTemp[_0x29aef4(0x1d4)](this);const _0x63fcd7=VisuMZ['EventsMoveCore'][_0x29aef4(0x33c)][_0x29aef4(0x27b)](this,_0x4da64c);return $gameTemp[_0x29aef4(0x393)](),_0x63fcd7;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x33e)]=Game_Troop['prototype'][_0x2a8554(0x292)],Game_Troop[_0x2a8554(0x1cc)][_0x2a8554(0x292)]=function(_0x545252){const _0x579ba8=_0x2a8554;$gameTemp[_0x579ba8(0x1d4)](this);const _0x5f4d10=VisuMZ['EventsMoveCore'][_0x579ba8(0x33e)][_0x579ba8(0x27b)](this,_0x545252);return $gameTemp[_0x579ba8(0x393)](),_0x5f4d10;},VisuMZ[_0x2a8554(0x2ab)]['Game_Map_setup']=Game_Map['prototype'][_0x2a8554(0x472)],Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x472)]=function(_0x1e579a){const _0x54f4d5=_0x2a8554;this[_0x54f4d5(0x15d)](_0x1e579a),this['clearEventCache'](),VisuMZ[_0x54f4d5(0x2ab)]['Game_Map_setup']['call'](this,_0x1e579a),this[_0x54f4d5(0x19c)](),this['setupDiagonalSupport'](),this[_0x54f4d5(0x1c8)](),this[_0x54f4d5(0x2b0)](),this[_0x54f4d5(0x1c5)](),this[_0x54f4d5(0x19c)]();},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x1a4)]=Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x290)],Game_Map[_0x2a8554(0x1cc)]['setupEvents']=function(){const _0x588f25=_0x2a8554;VisuMZ[_0x588f25(0x2ab)][_0x588f25(0x1a4)][_0x588f25(0x27b)](this),this[_0x588f25(0x19a)]();},Game_Map[_0x2a8554(0x238)]=0xc8,Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x461)]=function(){const _0x1bba1d=_0x2a8554,_0x38f583=Game_Map[_0x1bba1d(0x238)];this[_0x1bba1d(0x372)]=this[_0x1bba1d(0x411)]()['length']>_0x38f583;if(this[_0x1bba1d(0x372)]&&$gameTemp[_0x1bba1d(0x277)]()){}},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x338)]=function(){return this['_eventOverload'];},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x19c)]=function(){this['_eventCache']=undefined;},Game_Map['prototype'][_0x2a8554(0x201)]=function(){const _0x2ec32c=_0x2a8554;this['_diagonalSupport']=VisuMZ[_0x2ec32c(0x2ab)]['Settings'][_0x2ec32c(0x365)][_0x2ec32c(0x1ac)];const _0x424ce8=$dataMap[_0x2ec32c(0x20e)]||'';if(_0x424ce8[_0x2ec32c(0x41c)](/<DIAGONAL MOVEMENT: ON>/i))this[_0x2ec32c(0x469)]=!![];else _0x424ce8[_0x2ec32c(0x41c)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this[_0x2ec32c(0x469)]=![]);},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x21b)]=function(){const _0x1a4199=_0x2a8554,_0x3400bb=$gameSystem[_0x1a4199(0x29a)]();if(_0x3400bb===_0x1a4199(0x1a6))return!![];if(_0x3400bb===_0x1a4199(0x473))return![];if(this['_diagonalSupport']===undefined)this[_0x1a4199(0x201)]();return this[_0x1a4199(0x469)];},Game_Map[_0x2a8554(0x1cc)]['roundXWithDirection']=function(_0x37b99b,_0x31379f){const _0xe1ee1c=_0x2a8554;if([0x1,0x4,0x7][_0xe1ee1c(0x104)](_0x31379f))_0x37b99b-=0x1;if([0x3,0x6,0x9][_0xe1ee1c(0x104)](_0x31379f))_0x37b99b+=0x1;return this[_0xe1ee1c(0x2e4)](_0x37b99b);},Game_Map['prototype'][_0x2a8554(0x13a)]=function(_0x1364b4,_0x18814e){const _0x307a02=_0x2a8554;if([0x1,0x2,0x3]['includes'](_0x18814e))_0x1364b4+=0x1;if([0x7,0x8,0x9][_0x307a02(0x104)](_0x18814e))_0x1364b4-=0x1;return this[_0x307a02(0x40a)](_0x1364b4);},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x250)]=function(_0x1604bb,_0x1ad166,_0x5cd858,_0x4efc51){const _0x1e726d=_0x2a8554;return Math[_0x1e726d(0x3a3)](Math['abs'](this[_0x1e726d(0x40f)](_0x1604bb,_0x5cd858)),Math[_0x1e726d(0x2a3)](this[_0x1e726d(0x413)](_0x1ad166,_0x4efc51)));},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x1c8)]=function(){const _0x232820=_0x2a8554,_0x27dc21=VisuMZ['EventsMoveCore'][_0x232820(0x414)][_0x232820(0x267)],_0x56710e={},_0x55afe5=[_0x232820(0x355),_0x232820(0x158),_0x232820(0x1e4)],_0x598c96=[_0x232820(0x2ff),_0x232820(0x2f7),'Player',_0x232820(0x48f),_0x232820(0x333),'Boat',_0x232820(0x240),_0x232820(0x385)];for(const _0x3c630 of _0x55afe5){for(const _0xf623fd of _0x598c96){const _0x22fd91=_0x232820(0x168)['format'](_0xf623fd,_0x3c630);_0x27dc21[_0x22fd91]&&(_0x56710e[_0x22fd91]=_0x27dc21[_0x22fd91][_0x232820(0x308)](0x0));}}const _0x35654d=$dataMap[_0x232820(0x20e)]||'',_0x44b13e=_0x35654d[_0x232820(0x41c)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x44b13e)for(const _0x55cd5b of _0x44b13e){_0x55cd5b[_0x232820(0x41c)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x83c875=String(RegExp['$1'])['toLowerCase']()[_0x232820(0x395)](),_0x56e61b=String(RegExp['$2'])[_0x232820(0x358)]()[_0x232820(0x395)]();const _0x53a15f=JSON['parse']('['+RegExp['$3']['match'](/\d+/g)+']');_0x83c875=_0x83c875['charAt'](0x0)[_0x232820(0x3fe)]()+_0x83c875[_0x232820(0x308)](0x1),_0x56e61b=_0x56e61b[_0x232820(0x118)](0x0)[_0x232820(0x3fe)]()+_0x56e61b[_0x232820(0x308)](0x1);const _0x7e9e2c=_0x232820(0x168)['format'](_0x83c875,_0x56e61b);if(_0x56710e[_0x7e9e2c])_0x56710e[_0x7e9e2c]=_0x56710e[_0x7e9e2c][_0x232820(0x278)](_0x53a15f);}this[_0x232820(0x20f)]=_0x56710e;},Game_Map['prototype'][_0x2a8554(0x361)]=function(_0x96e0ca,_0x2785d0,_0x2bb08b,_0xb81cfc){const _0x216275=_0x2a8554,_0x16fd14=this[_0x216275(0x2e9)](_0x96e0ca,_0x2bb08b),_0x3c2dec=this[_0x216275(0x13a)](_0x2785d0,_0x2bb08b),_0xc9009a=this[_0x216275(0x33d)](_0x16fd14,_0x3c2dec),_0x381141=this['_regionRules'];if(_0x381141[_0x216275(0x1f4)]['includes'](_0xc9009a))return!![];else{if(_0xb81cfc===_0x216275(0x162))return _0x381141[_0x216275(0x272)]['includes'](_0xc9009a)||_0x381141['WalkAllow'][_0x216275(0x104)](_0xc9009a);else{if(_0xb81cfc===_0x216275(0x2c3))return _0x381141['EventAllow'][_0x216275(0x104)](_0xc9009a)||_0x381141[_0x216275(0x1b4)][_0x216275(0x104)](_0xc9009a);else{if(_0x381141[_0x216275(0x443)]['includes'](_0xc9009a))return!![];else{const _0xfbd10='%1Allow'[_0x216275(0x258)](_0xb81cfc[_0x216275(0x118)](0x0)[_0x216275(0x3fe)]()+_0xb81cfc['slice'](0x1));if(_0x381141[_0xfbd10])return _0x381141[_0xfbd10][_0x216275(0x104)](_0xc9009a);}}}}return![];},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x12e)]=function(_0x288cf1,_0x37f448,_0x5c45f9,_0x4425f5){const _0x493ccc=_0x2a8554,_0x3bb703=this[_0x493ccc(0x2e9)](_0x288cf1,_0x5c45f9),_0x389e2e=this[_0x493ccc(0x13a)](_0x37f448,_0x5c45f9),_0x926093=this[_0x493ccc(0x33d)](_0x3bb703,_0x389e2e),_0x36769c=this['_regionRules'];if(_0x36769c[_0x493ccc(0x139)]['includes'](_0x926093))return!![];else{if(_0x4425f5===_0x493ccc(0x162))return _0x36769c[_0x493ccc(0x2da)][_0x493ccc(0x104)](_0x926093)||_0x36769c[_0x493ccc(0x298)]['includes'](_0x926093);else{if(_0x4425f5==='event')return _0x36769c[_0x493ccc(0x145)]['includes'](_0x926093)||_0x36769c[_0x493ccc(0x298)]['includes'](_0x926093);else{if(_0x36769c[_0x493ccc(0x1be)][_0x493ccc(0x104)](_0x926093))return!![];else{const _0x282bbf=_0x493ccc(0x28f)[_0x493ccc(0x258)](_0x4425f5[_0x493ccc(0x118)](0x0)[_0x493ccc(0x3fe)]()+_0x4425f5['slice'](0x1));if(_0x36769c[_0x282bbf])return _0x36769c[_0x282bbf][_0x493ccc(0x104)](_0x926093);}}}}return![];},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x347)]=function(_0x14479c,_0x19860e,_0x1bc950,_0x3b3daa){const _0x1e3dc0=_0x2a8554;_0x1bc950=_0x3b3daa===_0x1e3dc0(0x170)?0x5:_0x1bc950;const _0x254d57=this[_0x1e3dc0(0x2e9)](_0x14479c,_0x1bc950),_0x29a417=this[_0x1e3dc0(0x13a)](_0x19860e,_0x1bc950),_0x5162db=this[_0x1e3dc0(0x33d)](_0x254d57,_0x29a417),_0x172504=this[_0x1e3dc0(0x20f)];if(_0x172504['VehicleDock'][_0x1e3dc0(0x104)](_0x5162db))return!![];else{const _0x91100b=_0x1e3dc0(0x36d)['format'](_0x3b3daa['charAt'](0x0)[_0x1e3dc0(0x3fe)]()+_0x3b3daa[_0x1e3dc0(0x308)](0x1));if(_0x172504[_0x91100b])return _0x172504[_0x91100b][_0x1e3dc0(0x104)](_0x5162db);}return![];},VisuMZ[_0x2a8554(0x2ab)]['Game_Map_refresh']=Game_Map['prototype'][_0x2a8554(0x2e5)],Game_Map[_0x2a8554(0x1cc)]['refresh']=function(){const _0xd2d78e=_0x2a8554;VisuMZ[_0xd2d78e(0x2ab)]['Game_Map_refresh'][_0xd2d78e(0x27b)](this),this[_0xd2d78e(0x1c7)]();},Game_Map[_0x2a8554(0x1cc)]['checkNeedForPeriodicRefresh']=function(){const _0xac217b=_0x2a8554;this[_0xac217b(0x31b)]=![];if(this[_0xac217b(0x411)]()[_0xac217b(0x457)](_0x4da052=>_0x4da052[_0xac217b(0x390)]())){this[_0xac217b(0x31b)]=!![];return;}if(this[_0xac217b(0x411)]()[_0xac217b(0x457)](_0x59c88f=>_0x59c88f[_0xac217b(0x111)]())){this[_0xac217b(0x31b)]=!![];return;}if(this['_commonEvents']['some'](_0x4eb4c7=>_0x4eb4c7['hasAdvancedSwitchVariable']())){this[_0xac217b(0x31b)]=!![];return;}if(this[_0xac217b(0x264)][_0xac217b(0x457)](_0x5b51d1=>_0x5b51d1[_0xac217b(0x111)]())){this['_needsPeriodicRefresh']=!![];return;}},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0xce)]=Game_Map[_0x2a8554(0x1cc)]['update'],Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x2f8)]=function(_0x595073){const _0x3efd71=_0x2a8554;this[_0x3efd71(0x458)](),VisuMZ[_0x3efd71(0x2ab)][_0x3efd71(0xce)][_0x3efd71(0x27b)](this,_0x595073);},Game_Map['prototype'][_0x2a8554(0x458)]=function(){const _0x4a6cc3=_0x2a8554;if(!this[_0x4a6cc3(0x31b)])return;this[_0x4a6cc3(0x23b)]=this['_periodicRefreshTimer']||0x3c,this[_0x4a6cc3(0x23b)]--,this['_periodicRefreshTimer']<=0x0&&(this[_0x4a6cc3(0x41a)](),this[_0x4a6cc3(0x23b)]=0x3c);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x230)]=Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x40c)],Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x40c)]=function(){const _0xa9f4f0=_0x2a8554;if(!$gameSystem['isDashingEnabled']())return!![];return VisuMZ['EventsMoveCore'][_0xa9f4f0(0x230)][_0xa9f4f0(0x27b)](this);},Game_Map[_0x2a8554(0x1cc)]['setupSaveEventLocations']=function(){const _0x3f5d02=_0x2a8554;this['_saveEventLocations']=![];const _0x1f4387=$dataMap[_0x3f5d02(0x20e)]||'';_0x1f4387['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x3f5d02(0x38f)]=!![]);},Game_Map[_0x2a8554(0x1cc)]['isSaveEventLocations']=function(){const _0x2012c5=_0x2a8554;if(this[_0x2012c5(0x38f)]===undefined)this[_0x2012c5(0x2b0)]();return this[_0x2012c5(0x38f)];},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x15d)]=function(_0xb9f195){const _0x5d4ac8=_0x2a8554;_0xb9f195!==this[_0x5d4ac8(0x200)]()&&$gamePlayer&&$gameSystem[_0x5d4ac8(0x15d)](this[_0x5d4ac8(0x200)]());},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x1c5)]=function(){const _0x386655=_0x2a8554;this[_0x386655(0x15c)]=$gameSystem[_0x386655(0xde)](this[_0x386655(0x200)]()),this[_0x386655(0x15b)]=!![];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x41e)]=Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x411)],Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x411)]=function(){const _0x465fa1=_0x2a8554;if(this['_eventCache'])return this['_eventCache'];const _0x3a1f4a=VisuMZ[_0x465fa1(0x2ab)][_0x465fa1(0x41e)][_0x465fa1(0x27b)](this),_0x324b2b=_0x3a1f4a[_0x465fa1(0x278)](this['_spawnedEvents']||[]);return this['_eventCache']=_0x324b2b[_0x465fa1(0x448)](_0x1429a9=>!!_0x1429a9),this[_0x465fa1(0x31e)];},VisuMZ['EventsMoveCore'][_0x2a8554(0xf5)]=Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x2c3)],Game_Map['prototype'][_0x2a8554(0x2c3)]=function(_0x14e1e2){const _0x7226ba=_0x2a8554;return _0x14e1e2>=0x3e8?(_0x14e1e2-=0x3e8,this['_spawnedEvents'][_0x14e1e2]):VisuMZ[_0x7226ba(0x2ab)][_0x7226ba(0xf5)]['call'](this,_0x14e1e2);},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x46f)]=function(_0x1e09e3){const _0x59abf9=_0x2a8554,_0x3918e9=this[_0x59abf9(0x2c3)](_0x1e09e3);if(_0x3918e9)_0x3918e9[_0x59abf9(0x305)]();},Game_Map[_0x2a8554(0x1cc)]['setupSpawnTest']=function(){const _0x211f8c=_0x2a8554,_0x15e5bd={'template':_0x211f8c(0xfc),'mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this[_0x211f8c(0x15c)][_0x211f8c(0x4a8)]+0x3e8};this[_0x211f8c(0x160)](_0x15e5bd);},Game_Map['prototype'][_0x2a8554(0x197)]=function(_0x57954d,_0x38c9b4){const _0x11f854=_0x2a8554;if(this[_0x11f854(0x332)](_0x57954d,_0x38c9b4)[_0x11f854(0x4a8)]>0x0)return!![];if($gamePlayer['x']===_0x57954d&&$gamePlayer['y']===_0x38c9b4)return!![];if(this[_0x11f854(0x140)]()[_0x11f854(0x2f5)](_0x57954d,_0x38c9b4))return!![];if(this[_0x11f854(0x326)]()[_0x11f854(0x2f5)](_0x57954d,_0x38c9b4))return!![];return![];},Game_Map['prototype'][_0x2a8554(0xd1)]=function(_0x295084,_0x47d1a5,_0x343558){const _0x5358ee=_0x2a8554;$gameTemp[_0x5358ee(0x143)]=_0x295084;const _0x44ba6d=new Game_Event(_0x295084[_0x5358ee(0x200)],_0x295084[_0x5358ee(0x465)]);$gameTemp[_0x5358ee(0x143)]=undefined,_0x44ba6d[_0x5358ee(0x2e5)]();let _0x49aaee=_0x47d1a5-_0x44ba6d[_0x5358ee(0x31f)][_0x5358ee(0x135)],_0x2d4f6d=_0x47d1a5+_0x44ba6d['_addedHitbox'][_0x5358ee(0x135)],_0x4f430e=_0x343558-_0x44ba6d['_addedHitbox']['up'],_0x129b36=_0x343558+_0x44ba6d[_0x5358ee(0x31f)][_0x5358ee(0x3b2)];for(let _0x59e234=_0x49aaee;_0x59e234<=_0x2d4f6d;_0x59e234++){for(let _0x118aac=_0x4f430e;_0x118aac<=_0x129b36;_0x118aac++){if(this[_0x5358ee(0x197)](_0x59e234,_0x118aac))return![];}}return!![];},Game_Map[_0x2a8554(0x1cc)]['createSpawnedEventWithData']=function(_0x2fcc52){const _0x1ee559=_0x2a8554;$gameTemp[_0x1ee559(0x143)]=_0x2fcc52;const _0x90a2fc=new Game_Event(_0x2fcc52[_0x1ee559(0x200)],_0x2fcc52[_0x1ee559(0x465)]);$gameTemp[_0x1ee559(0x143)]=undefined,this[_0x1ee559(0x15c)]['push'](_0x90a2fc),_0x90a2fc['setupSpawn'](_0x2fcc52),this[_0x1ee559(0x19c)]();},Game_Map['prototype'][_0x2a8554(0xe0)]=function(_0x181ae8,_0xb3332b,_0x4beeea){const _0x1ea969=_0x2a8554,_0x16c26c=_0x181ae8[_0x1ea969(0x227)][_0x1ea969(0x3fe)]()[_0x1ea969(0x395)]();if(_0x16c26c!==_0x1ea969(0x2e3)){const _0x4a7ab0=VisuMZ[_0x1ea969(0x45c)][_0x16c26c];_0x4a7ab0&&(_0x181ae8[_0x1ea969(0x200)]=_0x4a7ab0[_0x1ea969(0x369)],_0x181ae8[_0x1ea969(0x465)]=_0x4a7ab0[_0x1ea969(0x44d)]);}const _0x3ff677=_0x181ae8['x'],_0x1ef2af=_0x181ae8['y'];if(!this[_0x1ea969(0x19d)](_0x3ff677,_0x1ef2af))return![];if(_0xb3332b){if(this[_0x1ea969(0x197)](_0x3ff677,_0x1ef2af))return![];if(!this['isSpawnHitboxCollisionOk'](_0x181ae8,_0x3ff677,_0x1ef2af))return![];}if(_0x4beeea){if(!this[_0x1ea969(0x3e5)](_0x3ff677,_0x1ef2af))return![];}return this['createSpawnedEventWithData'](_0x181ae8),!![];},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x108)]=function(_0x4de0cc,_0x405d5b,_0x5240e6,_0x4ffdb6){const _0x39c80a=_0x2a8554,_0x468f84=[],_0x597f3f=this[_0x39c80a(0x43c)](),_0x300773=this[_0x39c80a(0x184)]();for(let _0x5dad2a=0x0;_0x5dad2a<_0x597f3f;_0x5dad2a++){for(let _0x12c910=0x0;_0x12c910<_0x300773;_0x12c910++){if(!_0x405d5b['includes'](this[_0x39c80a(0x33d)](_0x5dad2a,_0x12c910)))continue;if(!this[_0x39c80a(0x19d)](_0x5dad2a,_0x12c910))continue;if(_0x5240e6){if(this[_0x39c80a(0x197)](_0x5dad2a,_0x12c910))continue;if(!this[_0x39c80a(0xd1)](_0x4de0cc,_0x5dad2a,_0x12c910))continue;}if(_0x4ffdb6){if(!this[_0x39c80a(0x3e5)](_0x5dad2a,_0x12c910))continue;}_0x468f84['push']([_0x5dad2a,_0x12c910]);}}if(_0x468f84[_0x39c80a(0x4a8)]>0x0){const _0x300d7c=_0x468f84[Math['randomInt'](_0x468f84['length'])];return _0x4de0cc['x']=_0x300d7c[0x0],_0x4de0cc['y']=_0x300d7c[0x1],this[_0x39c80a(0x160)](_0x4de0cc),!![];}return![];},Game_Map[_0x2a8554(0x1cc)]['prepareSpawnedEventAtTerrainTag']=function(_0x5fd479,_0xd0a6d2,_0x4cd53b,_0x381ce2){const _0x49509d=_0x2a8554,_0x2139a6=[],_0x2e8486=this[_0x49509d(0x43c)](),_0x583db3=this['height']();for(let _0x2d8e77=0x0;_0x2d8e77<_0x2e8486;_0x2d8e77++){for(let _0x11617b=0x0;_0x11617b<_0x583db3;_0x11617b++){if(!_0xd0a6d2[_0x49509d(0x104)](this[_0x49509d(0x453)](_0x2d8e77,_0x11617b)))continue;if(!this[_0x49509d(0x19d)](_0x2d8e77,_0x11617b))continue;if(_0x4cd53b){if(this[_0x49509d(0x197)](_0x2d8e77,_0x11617b))continue;if(!this['isSpawnHitboxCollisionOk'](_0x5fd479,_0x2d8e77,_0x11617b))continue;}if(_0x381ce2){if(!this[_0x49509d(0x3e5)](_0x2d8e77,_0x11617b))continue;}_0x2139a6[_0x49509d(0x42b)]([_0x2d8e77,_0x11617b]);}}if(_0x2139a6[_0x49509d(0x4a8)]>0x0){const _0x4db130=_0x2139a6[Math['randomInt'](_0x2139a6['length'])];return _0x5fd479['x']=_0x4db130[0x0],_0x5fd479['y']=_0x4db130[0x1],this[_0x49509d(0x160)](_0x5fd479),!![];}return![];},Game_Map[_0x2a8554(0x1cc)]['isPassableByAnyDirection']=function(_0x17beb5,_0x45eedc){const _0x42240f=_0x2a8554;if(this['isPassable'](_0x17beb5,_0x45eedc,0x2))return!![];if(this[_0x42240f(0x32b)](_0x17beb5,_0x45eedc,0x4))return!![];if(this[_0x42240f(0x32b)](_0x17beb5,_0x45eedc,0x6))return!![];if(this[_0x42240f(0x32b)](_0x17beb5,_0x45eedc,0x8))return!![];return![];},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x11d)]=function(_0x1bddea){const _0x45f158=_0x2a8554;if(_0x1bddea<0x3e8)return;if(!this[_0x45f158(0x15c)])return;const _0x47dc62=this[_0x45f158(0x2c3)](_0x1bddea);_0x47dc62[_0x45f158(0x1df)](-0x1,-0x1),_0x47dc62[_0x45f158(0x305)](),this[_0x45f158(0x15c)][_0x1bddea-0x3e8]=null,this['clearEventCache']();},Game_Map['prototype']['firstSpawnedEvent']=function(){const _0x55a654=_0x2a8554;for(const _0x1f20b5 of this[_0x55a654(0x15c)]){if(_0x1f20b5)return _0x1f20b5;}return null;},Game_Map[_0x2a8554(0x1cc)]['firstSpawnedEventID']=function(){const _0x2b34dd=_0x2a8554,_0xc72223=this['firstSpawnedEvent']();return _0xc72223?_0xc72223[_0x2b34dd(0x301)]:0x0;},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x2ef)]=function(){const _0x243e1f=_0x2a8554,_0x3bafb0=this[_0x243e1f(0x15c)][_0x243e1f(0x308)](0x0)[_0x243e1f(0x1d3)]();for(const _0x29cab3 of _0x3bafb0){if(_0x29cab3)return _0x29cab3;}return null;},Game_Map['prototype'][_0x2a8554(0x2c7)]=function(){const _0x41874e=_0x2a8554,_0xfdd48d=this[_0x41874e(0x2ef)]();return _0xfdd48d?_0xfdd48d['_eventId']:0x0;},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x37f)]=function(_0x59f944,_0x4d6dd6){const _0x4dc4a2=_0x2a8554,_0x542f14=this[_0x4dc4a2(0x332)](_0x59f944,_0x4d6dd6);for(const _0x3c24f5 of _0x542f14){if(!_0x3c24f5)continue;if(_0x3c24f5['isSpawnedEvent']())this['despawnEventId'](_0x3c24f5['_eventId']);}},Game_Map[_0x2a8554(0x1cc)]['despawnRegions']=function(_0x21dfe5){const _0x4e98db=_0x2a8554;for(const _0x2dbb3e of this[_0x4e98db(0x15c)]){if(!_0x2dbb3e)continue;_0x21dfe5['includes'](_0x2dbb3e[_0x4e98db(0x33d)]())&&this[_0x4e98db(0x11d)](_0x2dbb3e['_eventId']);}},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x13e)]=function(_0x23dcdc){const _0x38efb0=_0x2a8554;for(const _0x52055b of this['_spawnedEvents']){if(!_0x52055b)continue;_0x23dcdc[_0x38efb0(0x104)](_0x52055b[_0x38efb0(0x453)]())&&this[_0x38efb0(0x11d)](_0x52055b[_0x38efb0(0x301)]);}},Game_Map['prototype'][_0x2a8554(0x32e)]=function(){const _0x6c9eb1=_0x2a8554;for(const _0x481e22 of this[_0x6c9eb1(0x15c)]){if(!_0x481e22)continue;this['despawnEventId'](_0x481e22[_0x6c9eb1(0x301)]);}},VisuMZ['EventsMoveCore'][_0x2a8554(0x303)]=Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x18e)],Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x18e)]=function(_0x6277d0){const _0x3dc520=_0x2a8554;VisuMZ[_0x3dc520(0x2ab)][_0x3dc520(0x303)][_0x3dc520(0x27b)](this,_0x6277d0);if(_0x6277d0>=0x3e8){const _0x5917cb=this[_0x3dc520(0x2c3)](_0x6277d0);if(_0x5917cb)_0x5917cb[_0x3dc520(0x462)]();}},Game_CommonEvent['prototype']['hasAdvancedSwitchVariable']=function(){const _0x503e6f=_0x2a8554,_0x6cb375=this[_0x503e6f(0x2c3)]();return this['isActive']()&&_0x6cb375[_0x503e6f(0x39b)]>=0x1&&DataManager['isAdvancedSwitch'](_0x6cb375['switchId']);},Game_CommonEvent[_0x2a8554(0x1cc)][_0x2a8554(0x111)]=function(){const _0x3aa07f=_0x2a8554;return VisuMZ[_0x3aa07f(0x2ab)][_0x3aa07f(0x2df)][_0x3aa07f(0x264)][_0x3aa07f(0x104)](this[_0x3aa07f(0x371)]);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x15e)]=Game_CommonEvent[_0x2a8554(0x1cc)][_0x2a8554(0x1e9)],Game_CommonEvent[_0x2a8554(0x1cc)][_0x2a8554(0x1e9)]=function(){const _0x4fe220=_0x2a8554;return VisuMZ['EventsMoveCore'][_0x4fe220(0x15e)][_0x4fe220(0x27b)](this)?!![]:VisuMZ['EventsMoveCore'][_0x4fe220(0x2df)][_0x4fe220(0x344)](this['event']()[_0x4fe220(0x39f)],this[_0x4fe220(0x371)]);},VisuMZ['EventsMoveCore']['Game_Map_parallelCommonEvents']=Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0xf7)],Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0xf7)]=function(){const _0x3cc226=_0x2a8554,_0x48d1b1=VisuMZ[_0x3cc226(0x2ab)]['Game_Map_parallelCommonEvents'][_0x3cc226(0x27b)](this),_0x5155c0=VisuMZ['EventsMoveCore']['CustomPageConditions'][_0x3cc226(0x264)][_0x3cc226(0x23f)](_0xfd77a0=>$dataCommonEvents[_0xfd77a0]);return _0x48d1b1['concat'](_0x5155c0)['filter']((_0x306ff9,_0x158227,_0x5581b1)=>_0x5581b1[_0x3cc226(0x2f4)](_0x306ff9)===_0x158227);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x22f)]=Game_CharacterBase['prototype'][_0x2a8554(0x45a)],Game_CharacterBase[_0x2a8554(0x1cc)]['initMembers']=function(){const _0x202279=_0x2a8554;VisuMZ[_0x202279(0x2ab)][_0x202279(0x22f)]['call'](this),this[_0x202279(0xf3)]();},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0xf3)]=function(){const _0x651987=_0x2a8554;this['_patternLocked']=![],this[_0x651987(0x3ac)](),this[_0x651987(0x105)](),this[_0x651987(0x400)](),this[_0x651987(0x281)]();},Game_CharacterBase['prototype'][_0x2a8554(0x12f)]=function(){const _0x577588=_0x2a8554;if(this[_0x577588(0x3c4)]===Game_Player&&this[_0x577588(0xcf)]())return this[_0x577588(0x1ba)]()['characterName']()[_0x577588(0x41c)](/\[VS8\]/i);else return Imported[_0x577588(0x24b)]&&this['hasDragonbones']()?!![]:this[_0x577588(0x2d5)]()[_0x577588(0x41c)](/\[VS8\]/i);},VisuMZ['EventsMoveCore'][_0x2a8554(0x2f2)]=Game_CharacterBase['prototype'][_0x2a8554(0x43a)],Game_CharacterBase[_0x2a8554(0x1cc)]['direction']=function(){const _0xe4f439=_0x2a8554;if(this['isOnLadder']()&&!this[_0xe4f439(0x133)]()&&this[_0xe4f439(0x12f)]())return this[_0xe4f439(0x1ff)]();else{if(this[_0xe4f439(0x203)]()&&!this['isJumping']())return 0x8;else return this[_0xe4f439(0x44e)]()&&this['isSpriteVS8dir']()?this[_0xe4f439(0x431)]():VisuMZ['EventsMoveCore'][_0xe4f439(0x2f2)][_0xe4f439(0x27b)](this);}},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x44f)]=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x3c2)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x3c2)]=function(_0x12ddfe){const _0x5a8b51=_0x2a8554;if(!this['isSpriteVS8dir']())_0x12ddfe=this[_0x5a8b51(0x188)](_0x12ddfe);VisuMZ['EventsMoveCore'][_0x5a8b51(0x44f)][_0x5a8b51(0x27b)](this,_0x12ddfe);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x188)]=function(_0x3822fd){const _0x597e2e=_0x2a8554;if(_0x3822fd===0x1)return this[_0x597e2e(0x30c)](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x3822fd===0x3)return this[_0x597e2e(0x30c)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x3822fd===0x7)return this['canPass'](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x3822fd===0x9)return this[_0x597e2e(0x30c)](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x3822fd;},Game_CharacterBase['prototype'][_0x2a8554(0x249)]=function(_0x14c7e3){return[0x1,0x3,0x5,0x7,0x9]['includes'](_0x14c7e3);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0xd9)]=function(){const _0x3b2da7=_0x2a8554;return this[_0x3b2da7(0x3b6)]||0x0;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x1d2)]=Game_CharacterBase['prototype'][_0x2a8554(0x26a)],Game_CharacterBase['prototype']['moveStraight']=function(_0x28b206){const _0x5c9395=_0x2a8554;this[_0x5c9395(0x3b6)]=_0x28b206,VisuMZ[_0x5c9395(0x2ab)]['Game_CharacterBase_moveStraight']['call'](this,_0x28b206);},Game_CharacterBase[_0x2a8554(0x1cc)]['executeMoveDir8']=function(_0x40806b){const _0x28ba0c=_0x2a8554;if(!this[_0x28ba0c(0x249)](_0x40806b))return this[_0x28ba0c(0x26a)](_0x40806b);let _0x5500e8=0x0,_0x32c3f0=0x0;switch(_0x40806b){case 0x1:_0x5500e8=0x4,_0x32c3f0=0x2;break;case 0x3:_0x5500e8=0x6,_0x32c3f0=0x2;break;case 0x7:_0x5500e8=0x4,_0x32c3f0=0x8;break;case 0x9:_0x5500e8=0x6,_0x32c3f0=0x8;break;}if(VisuMZ[_0x28ba0c(0x2ab)][_0x28ba0c(0x414)][_0x28ba0c(0x365)][_0x28ba0c(0x24e)]){if(!this[_0x28ba0c(0x30c)](this['_x'],this['_y'],_0x5500e8))return this['moveStraight'](_0x32c3f0);if(!this[_0x28ba0c(0x30c)](this['_x'],this['_y'],_0x32c3f0))return this['moveStraight'](_0x5500e8);if(!this['canPassDiagonally'](this['_x'],this['_y'],_0x5500e8,_0x32c3f0)){let _0x146c94=VisuMZ[_0x28ba0c(0x2ab)]['Settings'][_0x28ba0c(0x365)][_0x28ba0c(0x3d3)]?_0x5500e8:_0x32c3f0;return this['moveStraight'](_0x146c94);}}this[_0x28ba0c(0x3b6)]=_0x40806b,this[_0x28ba0c(0x320)](_0x5500e8,_0x32c3f0);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0xdb)]=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x13c)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x13c)]=function(){const _0x15ef84=_0x2a8554;let _0x2d90df=this[_0x15ef84(0x30b)];return this[_0x15ef84(0x20b)]()&&(_0x2d90df+=this['dashSpeedModifier']()),this[_0x15ef84(0x285)](_0x2d90df);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x1dc)]=function(){const _0x54b6f9=_0x2a8554,_0x397903=VisuMZ['EventsMoveCore'][_0x54b6f9(0x414)][_0x54b6f9(0x365)];return _0x397903[_0x54b6f9(0x16f)]!==undefined?_0x397903[_0x54b6f9(0x16f)]:VisuMZ[_0x54b6f9(0x2ab)]['Game_CharacterBase_realMoveSpeed']['call'](this)-this[_0x54b6f9(0x30b)];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x285)]=function(_0x3a04ad){const _0xd1e25=_0x2a8554,_0x3bc5fc=VisuMZ[_0xd1e25(0x2ab)]['Settings'][_0xd1e25(0x365)];if(!_0x3bc5fc[_0xd1e25(0x24a)])return _0x3a04ad;return[0x1,0x3,0x7,0x9][_0xd1e25(0x104)](this['_lastMovedDirection'])&&(_0x3a04ad*=_0x3bc5fc['DiagonalSpeedMultiplier']||0.01),_0x3a04ad;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3b3)]=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x20b)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x20b)]=function(){const _0x2947fd=_0x2a8554;if(this[_0x2947fd(0x266)])return!![];return VisuMZ['EventsMoveCore']['Game_CharacterBase_isDashing'][_0x2947fd(0x27b)](this);},Game_CharacterBase[_0x2a8554(0x1cc)]['isDashingAndMoving']=function(){const _0x55df1e=_0x2a8554;return this[_0x55df1e(0x20b)]();},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x178)]=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x220)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x220)]=function(){const _0x1e54bf=_0x2a8554;return this[_0x1e54bf(0x44e)]()?this[_0x1e54bf(0x2b4)]():VisuMZ[_0x1e54bf(0x2ab)][_0x1e54bf(0x178)]['call'](this);},VisuMZ[_0x2a8554(0x2ab)]['Game_CharacterBase_increaseSteps']=Game_CharacterBase['prototype'][_0x2a8554(0x306)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x306)]=function(){const _0x3facbf=_0x2a8554;VisuMZ[_0x3facbf(0x2ab)]['Game_CharacterBase_increaseSteps'][_0x3facbf(0x27b)](this),this[_0x3facbf(0x3ac)]();},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x454)]=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x449)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x449)]=function(){const _0x949959=_0x2a8554;if(this['isSpriteVS8dir']())return this[_0x949959(0x427)]();return VisuMZ['EventsMoveCore'][_0x949959(0x454)]['call'](this);},Game_CharacterBase['prototype'][_0x2a8554(0x427)]=function(){const _0x4d24f5=_0x2a8554,_0x181e89=this[_0x4d24f5(0x43a)]();if(this['isJumping']()){if([0x2,0x4,0x6,0x8][_0x4d24f5(0x104)](_0x181e89))return 0x4;if([0x1,0x3,0x7,0x9][_0x4d24f5(0x104)](_0x181e89))return 0x5;}else{if(this[_0x4d24f5(0x203)]())return 0x6;else{if(this[_0x4d24f5(0x44e)]())return this['getPosingCharacterIndex']();else{if(this[_0x4d24f5(0x224)]){if([0x2,0x4,0x6,0x8][_0x4d24f5(0x104)](_0x181e89))return 0x4;if([0x1,0x3,0x7,0x9][_0x4d24f5(0x104)](_0x181e89))return 0x5;}else{if(this['hasEventIcon']()&&this[_0x4d24f5(0x16a)]()){if([0x2,0x4,0x6,0x8][_0x4d24f5(0x104)](_0x181e89))return 0x4;if([0x1,0x3,0x7,0x9][_0x4d24f5(0x104)](_0x181e89))return 0x5;}else{if(this[_0x4d24f5(0xf8)]()){if([0x2,0x4,0x6,0x8][_0x4d24f5(0x104)](_0x181e89))return 0x2;if([0x1,0x3,0x7,0x9][_0x4d24f5(0x104)](_0x181e89))return 0x3;}else{if([0x2,0x4,0x6,0x8][_0x4d24f5(0x104)](_0x181e89))return 0x0;if([0x1,0x3,0x7,0x9][_0x4d24f5(0x104)](_0x181e89))return 0x1;}}}}}}},Game_CharacterBase['prototype'][_0x2a8554(0x16a)]=function(){const _0x5da6e4=_0x2a8554;return VisuMZ[_0x5da6e4(0x2ab)][_0x5da6e4(0x414)][_0x5da6e4(0x1e8)][_0x5da6e4(0x299)];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x265)]=function(){const _0x5ccd79=_0x2a8554;return this[_0x5ccd79(0x203)]()&&this[_0x5ccd79(0x453)]()===VisuMZ[_0x5ccd79(0x2ab)]['Settings'][_0x5ccd79(0x233)][_0x5ccd79(0x359)];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x1ff)]=function(){const _0x1e1e2b=_0x2a8554;return this[_0x1e1e2b(0x265)]()?0x4:0x2;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x183)]=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x2f8)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x2f8)]=function(){const _0x5136c3=_0x2a8554;VisuMZ[_0x5136c3(0x2ab)][_0x5136c3(0x183)][_0x5136c3(0x27b)](this),this['updatePose']();},Game_CharacterBase[_0x2a8554(0x1cc)]['updatePose']=function(){const _0x34ca9a=_0x2a8554;this[_0x34ca9a(0xe8)]=this[_0x34ca9a(0xe8)]||0x0;if(this[_0x34ca9a(0xe8)]>0x0){this[_0x34ca9a(0xe8)]--;if(this[_0x34ca9a(0xe8)]<=0x0&&this[_0x34ca9a(0x405)]!==_0x34ca9a(0x295))this[_0x34ca9a(0x3ac)]();}},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3f9)]=Game_CharacterBase['prototype'][_0x2a8554(0x320)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x320)]=function(_0x4b3d2a,_0x2d8f87){const _0x3a4f74=_0x2a8554;VisuMZ[_0x3a4f74(0x2ab)][_0x3a4f74(0x3f9)][_0x3a4f74(0x27b)](this,_0x4b3d2a,_0x2d8f87);if(this[_0x3a4f74(0x12f)]())this[_0x3a4f74(0x309)](_0x4b3d2a,_0x2d8f87);},Game_CharacterBase['prototype'][_0x2a8554(0x309)]=function(_0x18f2b4,_0x20c937){const _0x26f3ce=_0x2a8554;if(_0x18f2b4===0x4&&_0x20c937===0x2)this['setDirection'](0x1);if(_0x18f2b4===0x6&&_0x20c937===0x2)this[_0x26f3ce(0x3c2)](0x3);if(_0x18f2b4===0x4&&_0x20c937===0x8)this[_0x26f3ce(0x3c2)](0x7);if(_0x18f2b4===0x6&&_0x20c937===0x8)this[_0x26f3ce(0x3c2)](0x9);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x275)]=Game_CharacterBase['prototype'][_0x2a8554(0x2b9)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x2b9)]=function(){const _0x280d61=_0x2a8554;if(this[_0x280d61(0x44e)]()&&this['getPose']()==='ZZZ')return!![];return VisuMZ[_0x280d61(0x2ab)][_0x280d61(0x275)][_0x280d61(0x27b)](this);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x36b)]=function(_0x1f66f8,_0x2a9603){const _0x3b6c97=_0x2a8554;if(_0x1f66f8[_0x3b6c97(0x41c)](/Z/i))_0x1f66f8='ZZZ';if(_0x1f66f8[_0x3b6c97(0x41c)](/SLEEP/i))_0x1f66f8=_0x3b6c97(0x295);this['isSpriteVS8dir']()&&(this[_0x3b6c97(0x405)]=_0x1f66f8[_0x3b6c97(0x3fe)]()[_0x3b6c97(0x395)](),this[_0x3b6c97(0xe8)]=_0x2a9603||Infinity);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x300)]=function(){const _0x408529=_0x2a8554;return this[_0x408529(0x12f)]()?(this[_0x408529(0x405)]||'')[_0x408529(0x3fe)]()[_0x408529(0x395)]():''['toUpperCase']()['trim']();},Game_CharacterBase['prototype'][_0x2a8554(0x40d)]=function(_0xcdaba6,_0x2b82f5){const _0x567cb9=_0x2a8554;if(this[_0x567cb9(0x12f)]()){const _0x5d90c9=['',_0x567cb9(0x3fa),'QUESTION','MUSIC\x20NOTE',_0x567cb9(0x16b),_0x567cb9(0x14f),_0x567cb9(0x386),'COBWEB',_0x567cb9(0x125),'LIGHT\x20BULB','ZZZ','','','','',''][_0xcdaba6];this[_0x567cb9(0x36b)](_0x5d90c9,_0x2b82f5);}},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x3ac)]=function(){const _0x45406c=_0x2a8554;this[_0x45406c(0x405)]='',this['_poseDuration']=0x0;},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x44e)]=function(){const _0xd3e8c3=_0x2a8554;return this[_0xd3e8c3(0x12f)]()&&!!this['_pose'];},Game_CharacterBase['prototype'][_0x2a8554(0x231)]=function(){const _0x32e34d=_0x2a8554,_0x24bf09=this[_0x32e34d(0x405)][_0x32e34d(0x3fe)]();switch(this[_0x32e34d(0x405)][_0x32e34d(0x3fe)]()[_0x32e34d(0x395)]()){case _0x32e34d(0x2e6):case _0x32e34d(0x463):case _0x32e34d(0x129):case'HURT':case _0x32e34d(0x1ea):case'COLLAPSE':return 0x6;break;default:return 0x7;break;}},Game_CharacterBase['prototype'][_0x2a8554(0x431)]=function(){const _0xf69a9d=_0x2a8554;switch(this[_0xf69a9d(0x405)][_0xf69a9d(0x3fe)]()){case _0xf69a9d(0x3fa):case'QUESTION':case'MUSIC\x20NOTE':case'!':case'?':return 0x2;break;case _0xf69a9d(0x16b):case'ANGER':case'SWEAT':return 0x4;break;case'ITEM':case'HMPH':case _0xf69a9d(0x129):case _0xf69a9d(0x18f):case _0xf69a9d(0x125):case _0xf69a9d(0x36e):return 0x6;break;case _0xf69a9d(0x440):case _0xf69a9d(0x1ea):case'COLLAPSE':case _0xf69a9d(0x295):case _0xf69a9d(0x490):return 0x8;break;default:return VisuMZ[_0xf69a9d(0x2ab)][_0xf69a9d(0x44f)][_0xf69a9d(0x27b)](this);break;}},Game_CharacterBase[_0x2a8554(0x1cc)]['getPosingCharacterPattern']=function(){const _0x4b7b83=_0x2a8554;switch(this[_0x4b7b83(0x405)][_0x4b7b83(0x3fe)]()){case _0x4b7b83(0x2e6):case'HURT':case _0x4b7b83(0x3fa):case'!':case _0x4b7b83(0x16b):case _0x4b7b83(0x18f):return 0x0;break;case _0x4b7b83(0x463):case'KNEEL':case _0x4b7b83(0x3bf):case'?':case _0x4b7b83(0x14f):case _0x4b7b83(0x125):return 0x1;break;case _0x4b7b83(0x129):case'COLLAPSE':case _0x4b7b83(0x2e0):case _0x4b7b83(0x386):case _0x4b7b83(0x36e):return 0x2;break;default:return VisuMZ['EventsMoveCore'][_0x4b7b83(0x178)][_0x4b7b83(0x27b)](this);break;}},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x2eb)]=function(){const _0x4867f4=_0x2a8554;this[_0x4867f4(0x224)]=!![];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x442)]=function(){this['_forceCarrying']=![];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x232)]=function(){const _0x45af0d=_0x2a8554;this[_0x45af0d(0x266)]=!![];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x105)]=function(){this['_forceDashing']=![];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x128)]=function(){const _0x1cf002=_0x2a8554;if(this[_0x1cf002(0x2b6)]())return![];if(this['_isObjectCharacter'])return![];if(this['_transparent'])return![];if(this['_characterName']==='')return![];if(this['constructor']===Game_Vehicle)return![];return!![];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x123)]=function(){const _0x336460=_0x2a8554;if(this[_0x336460(0x203)]())return!![];if(this[_0x336460(0x3c4)]===Game_Player&&this['isInVehicle']())return!![];return![];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x153)]=function(){const _0x506075=_0x2a8554;return VisuMZ[_0x506075(0x2ab)][_0x506075(0x414)][_0x506075(0x365)][_0x506075(0x401)];},Game_CharacterBase[_0x2a8554(0x1cc)]['shadowX']=function(){const _0x35fcaa=_0x2a8554;return this[_0x35fcaa(0x357)]();},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x3be)]=function(){const _0x13c28=_0x2a8554;return this['screenY']()+this['shiftY']()+this[_0x13c28(0x451)]();},Game_Character['prototype'][_0x2a8554(0x3eb)]=function(_0x14093a,_0x468196){const _0x294c8c=_0x2a8554,_0xd47c18=this['searchLimit'](),_0x560834=$gameMap[_0x294c8c(0x43c)](),_0x29f4e9=[],_0x2d10b4=[],_0xa99e11=[],_0x560b14={};let _0x4cae5f=_0x560b14;if(this['x']===_0x14093a&&this['y']===_0x468196)return 0x0;_0x560b14[_0x294c8c(0x1ef)]=null,_0x560b14['x']=this['x'],_0x560b14['y']=this['y'],_0x560b14['g']=0x0,_0x560b14['f']=$gameMap[_0x294c8c(0x428)](_0x560b14['x'],_0x560b14['y'],_0x14093a,_0x468196),_0x29f4e9[_0x294c8c(0x42b)](_0x560b14),_0x2d10b4['push'](_0x560b14['y']*_0x560834+_0x560b14['x']);while(_0x29f4e9[_0x294c8c(0x4a8)]>0x0){let _0x23d480=0x0;for(let _0x29cc88=0x0;_0x29cc88<_0x29f4e9[_0x294c8c(0x4a8)];_0x29cc88++){_0x29f4e9[_0x29cc88]['f']<_0x29f4e9[_0x23d480]['f']&&(_0x23d480=_0x29cc88);}const _0x28af51=_0x29f4e9[_0x23d480],_0x1cbc15=_0x28af51['x'],_0x2e4795=_0x28af51['y'],_0x37b802=_0x2e4795*_0x560834+_0x1cbc15,_0x5559a0=_0x28af51['g'];_0x29f4e9[_0x294c8c(0x3f8)](_0x23d480,0x1),_0x2d10b4['splice'](_0x2d10b4['indexOf'](_0x37b802),0x1),_0xa99e11['push'](_0x37b802);if(_0x28af51['x']===_0x14093a&&_0x28af51['y']===_0x468196){_0x4cae5f=_0x28af51;break;}if(_0x5559a0>=_0xd47c18)continue;const _0x5a02b3=[0x0,0x4,0x0,0x6,0x4,0x0,0x6,0x4,0x0,0x6],_0x3ff157=[0x0,0x2,0x2,0x2,0x0,0x0,0x0,0x8,0x8,0x8];for(let _0x41c02e=0x1;_0x41c02e<0xa;_0x41c02e++){if(_0x41c02e===0x5)continue;const _0x456b99=_0x41c02e,_0xb4d2b7=_0x5a02b3[_0x41c02e],_0x225be7=_0x3ff157[_0x41c02e],_0x390768=$gameMap['roundXWithDirection'](_0x1cbc15,_0x456b99),_0x3e2ffd=$gameMap[_0x294c8c(0x13a)](_0x2e4795,_0x456b99),_0x3b7612=_0x3e2ffd*_0x560834+_0x390768;if(_0xa99e11[_0x294c8c(0x104)](_0x3b7612))continue;if(this[_0x294c8c(0x3c4)]===Game_Player&&VisuMZ[_0x294c8c(0x2ab)][_0x294c8c(0x414)][_0x294c8c(0x365)]['StrictCollision']){if(!this[_0x294c8c(0x30c)](_0x1cbc15,_0x2e4795,_0xb4d2b7))continue;if(!this[_0x294c8c(0x30c)](_0x1cbc15,_0x2e4795,_0x225be7))continue;}if(!this[_0x294c8c(0x351)](_0x1cbc15,_0x2e4795,_0xb4d2b7,_0x225be7))continue;const _0x9e882b=_0x5559a0+0x1,_0x4f7d1a=_0x2d10b4[_0x294c8c(0x2f4)](_0x3b7612);if(_0x4f7d1a<0x0||_0x9e882b<_0x29f4e9[_0x4f7d1a]['g']){let _0x3a03a6={};_0x4f7d1a>=0x0?_0x3a03a6=_0x29f4e9[_0x4f7d1a]:(_0x29f4e9[_0x294c8c(0x42b)](_0x3a03a6),_0x2d10b4['push'](_0x3b7612)),_0x3a03a6[_0x294c8c(0x1ef)]=_0x28af51,_0x3a03a6['x']=_0x390768,_0x3a03a6['y']=_0x3e2ffd,_0x3a03a6['g']=_0x9e882b,_0x3a03a6['f']=_0x9e882b+$gameMap[_0x294c8c(0x428)](_0x390768,_0x3e2ffd,_0x14093a,_0x468196),(!_0x4cae5f||_0x3a03a6['f']-_0x3a03a6['g']<_0x4cae5f['f']-_0x4cae5f['g'])&&(_0x4cae5f=_0x3a03a6);}}}let _0x4f963d=_0x4cae5f;while(_0x4f963d[_0x294c8c(0x1ef)]&&_0x4f963d[_0x294c8c(0x1ef)]!==_0x560b14){_0x4f963d=_0x4f963d['parent'];}const _0x1474c8=$gameMap['deltaX'](_0x4f963d['x'],_0x560b14['x']),_0x4a9dea=$gameMap['deltaY'](_0x4f963d['y'],_0x560b14['y']);if(_0x1474c8<0x0&&_0x4a9dea>0x0)return 0x1;if(_0x1474c8>0x0&&_0x4a9dea>0x0)return 0x3;if(_0x1474c8<0x0&&_0x4a9dea<0x0)return 0x7;if(_0x1474c8>0x0&&_0x4a9dea<0x0)return 0x9;if(_0x4a9dea>0x0)return 0x2;if(_0x1474c8<0x0)return 0x4;if(_0x1474c8>0x0)return 0x6;if(_0x4a9dea<0x0)return 0x8;const _0x3cf7ad=this['deltaXFrom'](_0x14093a),_0x373a70=this[_0x294c8c(0x136)](_0x468196);if(Math[_0x294c8c(0x2a3)](_0x3cf7ad)>Math['abs'](_0x373a70))return _0x3cf7ad>0x0?0x4:0x6;else{if(_0x373a70!==0x0)return _0x373a70>0x0?0x8:0x2;}return 0x0;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x381)]=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x30c)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x30c)]=function(_0x3c0c90,_0x4d6cd1,_0x5ba191){const _0x17871c=_0x2a8554;return this[_0x17871c(0x412)]===_0x17871c(0x170)?this[_0x17871c(0x1ba)]()['isAirshipPassable'](_0x3c0c90,_0x4d6cd1,_0x5ba191):VisuMZ[_0x17871c(0x2ab)]['Game_CharacterBase_canPass'][_0x17871c(0x27b)](this,_0x3c0c90,_0x4d6cd1,_0x5ba191);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x400)]=function(){this['_spriteOffsetX']=0x0,this['_spriteOffsetY']=0x0;},VisuMZ['EventsMoveCore'][_0x2a8554(0x1da)]=Game_CharacterBase['prototype'][_0x2a8554(0x357)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x357)]=function(){const _0x1d3cca=_0x2a8554;return VisuMZ[_0x1d3cca(0x2ab)]['Game_CharacterBase_screenX'][_0x1d3cca(0x27b)](this)+(this[_0x1d3cca(0x34b)]||0x0);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3f7)]=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x4ac)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x4ac)]=function(){const _0x25ae86=_0x2a8554;return VisuMZ[_0x25ae86(0x2ab)][_0x25ae86(0x3f7)][_0x25ae86(0x27b)](this)+(this[_0x25ae86(0x373)]||0x0);},Game_CharacterBase[_0x2a8554(0x1cc)]['clearStepPattern']=function(){const _0x56c600=_0x2a8554;this[_0x56c600(0x48a)]='';},VisuMZ[_0x2a8554(0x2ab)]['Game_CharacterBase_updatePattern']=Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x101)],Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x101)]=function(){const _0x2a8cad=_0x2a8554;if(this['_patternLocked'])return;if(this[_0x2a8cad(0x110)]())return;VisuMZ[_0x2a8cad(0x2ab)][_0x2a8cad(0x18a)][_0x2a8cad(0x27b)](this);},Game_CharacterBase[_0x2a8554(0x1cc)]['updatePatternEventsMoveCore']=function(){const _0x28e1fa=_0x2a8554;if(!this['hasStepAnime']()&&this['_stopCount']>0x0)return![];switch(String(this['_stepPattern'])[_0x28e1fa(0x3fe)]()['trim']()){case _0x28e1fa(0x2bc):this[_0x28e1fa(0x3a0)]+=0x1;if(this[_0x28e1fa(0x3a0)]>0x2)this[_0x28e1fa(0x3ca)](0x0);break;case _0x28e1fa(0x19e):this['_pattern']-=0x1;if(this[_0x28e1fa(0x3a0)]<0x0)this[_0x28e1fa(0x3ca)](0x2);break;case _0x28e1fa(0x10b):case _0x28e1fa(0x324):this[_0x28e1fa(0x404)]();break;case _0x28e1fa(0x429):case _0x28e1fa(0xeb):case _0x28e1fa(0x4b1):case _0x28e1fa(0x288):this[_0x28e1fa(0x356)]();break;default:return![];}return!![];},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x1fd)]=function(){return $gameSystem['getEventIconData'](this);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0xe7)]=function(){const _0x361cd3=_0x2a8554,_0x2669be=this['getEventIconData']();if(!_0x2669be)return![];return _0x2669be[_0x361cd3(0x113)]>0x0;},Game_CharacterBase[_0x2a8554(0x1cc)]['frontX']=function(){const _0x4c0108=_0x2a8554,_0x5b244=this[_0x4c0108(0x43a)]();return $gameMap[_0x4c0108(0x2e9)](this['x'],_0x5b244);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x32a)]=function(){const _0x50ca7b=_0x2a8554,_0x5262d7=this['direction']();return $gameMap[_0x50ca7b(0x13a)](this['y'],_0x5262d7);},Game_CharacterBase['prototype'][_0x2a8554(0x2c1)]=function(){const _0x39f00b=_0x2a8554,_0x5609fa=this[_0x39f00b(0x283)](this[_0x39f00b(0x43a)]());return $gameMap[_0x39f00b(0x2e9)](this['x'],_0x5609fa);},Game_CharacterBase[_0x2a8554(0x1cc)][_0x2a8554(0x2b1)]=function(){const _0x4d0332=_0x2a8554,_0x3fc371=this[_0x4d0332(0x283)](this['direction']());return $gameMap[_0x4d0332(0x13a)](this['y'],_0x3fc371);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x1c3)]=Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x43b)],Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x43b)]=function(_0x3c1c16){const _0x43a975=_0x2a8554;route=JsonEx['makeDeepCopy'](_0x3c1c16),VisuMZ['EventsMoveCore']['Game_Character_setMoveRoute'][_0x43a975(0x27b)](this,route);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0xf1)]=Game_Character[_0x2a8554(0x1cc)]['forceMoveRoute'],Game_Character['prototype'][_0x2a8554(0x1c9)]=function(_0x597f7d){const _0x192d9b=_0x2a8554;route=JsonEx[_0x192d9b(0x327)](_0x597f7d),VisuMZ[_0x192d9b(0x2ab)][_0x192d9b(0xf1)][_0x192d9b(0x27b)](this,route);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x45e)]=Game_Character[_0x2a8554(0x1cc)]['processMoveCommand'],Game_Character['prototype'][_0x2a8554(0x415)]=function(_0x3a49f1){const _0x5b1fa3=_0x2a8554,_0x51d732=Game_Character,_0x395c4e=_0x3a49f1['parameters'];if(_0x3a49f1[_0x5b1fa3(0x3e0)]===_0x51d732['ROUTE_SCRIPT']){let _0x427349=_0x3a49f1[_0x5b1fa3(0x394)][0x0];_0x427349=this[_0x5b1fa3(0x49a)](_0x427349),_0x427349=this[_0x5b1fa3(0x176)](_0x427349),this[_0x5b1fa3(0x3c1)](_0x3a49f1,_0x427349);}else VisuMZ['EventsMoveCore'][_0x5b1fa3(0x45e)]['call'](this,_0x3a49f1);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x49a)]=function(_0x558bb9){const _0x4864de=_0x2a8554,_0x3d31c6=/\$gameVariables\.value\((\d+)\)/gi,_0x13db30=/\\V\[(\d+)\]/gi;while(_0x558bb9['match'](_0x3d31c6)){_0x558bb9=_0x558bb9[_0x4864de(0x3d9)](_0x3d31c6,(_0x26d706,_0x17dd80)=>$gameVariables[_0x4864de(0x44a)](parseInt(_0x17dd80)));}while(_0x558bb9[_0x4864de(0x41c)](_0x13db30)){_0x558bb9=_0x558bb9[_0x4864de(0x3d9)](_0x13db30,(_0x592b9e,_0x2222c6)=>$gameVariables['value'](parseInt(_0x2222c6)));}return _0x558bb9;},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x176)]=function(_0x1e4915){const _0x28bb30=_0x2a8554,_0x79cd8f=/\\SELFVAR\[(\d+)\]/gi;while(_0x1e4915[_0x28bb30(0x41c)](_0x79cd8f)){_0x1e4915=_0x1e4915['replace'](_0x79cd8f,(_0x3da7c9,_0x1499cf)=>getSelfVariableValue(this[_0x28bb30(0x403)],this[_0x28bb30(0x301)],parseInt(_0x1499cf)));}return _0x1e4915;},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x3c1)]=function(_0x2f9a11,_0x3b6217){const _0x1605da=_0x2a8554;if(_0x3b6217[_0x1605da(0x41c)](/ANIMATION:[ ](\d+)/i))return this[_0x1605da(0x1c4)](Number(RegExp['$1']));if(_0x3b6217['match'](/BALLOON:[ ](.*)/i))return this['processMoveRouteBalloon'](String(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/FADE IN:[ ](\d+)/i))return this[_0x1605da(0x18c)](Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/FADE OUT:[ ](\d+)/i))return this[_0x1605da(0xfb)](Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this[_0x1605da(0x2eb)]();if(_0x3b6217[_0x1605da(0x41c)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this[_0x1605da(0x442)]();if(_0x3b6217[_0x1605da(0x41c)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this['forceDashing']();if(_0x3b6217[_0x1605da(0x41c)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x1605da(0x105)]();if(_0x3b6217[_0x1605da(0x41c)](/HUG:[ ]LEFT/i))return this[_0x1605da(0xed)](_0x1605da(0x135));if(_0x3b6217[_0x1605da(0x41c)](/HUG:[ ]RIGHT/i))return this[_0x1605da(0xed)]('right');if(_0x3b6217[_0x1605da(0x41c)](/INDEX:[ ](\d+)/i))return this['processMoveRouteSetIndex'](Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x3cfcf3=this[_0x1605da(0x43f)]+Number(RegExp['$1']);return this[_0x1605da(0x437)](_0x3cfcf3);}if(_0x3b6217[_0x1605da(0x41c)](/JUMP FORWARD:[ ](\d+)/i))return this[_0x1605da(0x23a)](Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x1605da(0x1f6)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3b6217[_0x1605da(0x41c)](/JUMP TO EVENT:[ ](\d+)/i)){const _0x342eec=$gameMap['event'](Number(RegExp['$1']));return this['processMoveRouteJumpToCharacter'](_0x342eec);}if(_0x3b6217[_0x1605da(0x41c)](/JUMP TO PLAYER/i))return this[_0x1605da(0x336)]($gamePlayer);if(_0x3b6217['match'](/JUMP TO HOME/i)&&this[_0x1605da(0x465)]){const _0x2bf73c=this['_randomHomeX'],_0x2ca86e=this[_0x1605da(0x430)];return this[_0x1605da(0x1f6)](_0x2bf73c,_0x2ca86e);}if(_0x3b6217[_0x1605da(0x41c)](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0x149cef=String(RegExp['$1']),_0x2ef0a6=this[_0x1605da(0x3d7)](_0x3b6217);return this[_0x1605da(0x302)](_0x149cef,_0x2ef0a6);}if(_0x3b6217[_0x1605da(0x41c)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x329a18=Number(RegExp['$1']),_0x26d405=Number(RegExp['$2']),_0x52e9be=this['checkCollisionKeywords'](_0x3b6217);return this[_0x1605da(0x3e9)](_0x329a18,_0x26d405,_0x52e9be);}if(_0x3b6217[_0x1605da(0x41c)](/MOVE TO EVENT:[ ](\d+)/i)){const _0x2e6a94=$gameMap[_0x1605da(0x2c3)](Number(RegExp['$1'])),_0x7d818f=this[_0x1605da(0x3d7)](_0x3b6217);return this['processMoveRouteMoveToCharacter'](_0x2e6a94,_0x7d818f);}if(_0x3b6217['match'](/MOVE TO PLAYER/i)){const _0x1beb7b=this[_0x1605da(0x3d7)](_0x3b6217);return this[_0x1605da(0x38d)]($gamePlayer,_0x1beb7b);}if(_0x3b6217[_0x1605da(0x41c)](/MOVE TO HOME/i)&&this[_0x1605da(0x465)]){const _0x326bc9=this[_0x1605da(0x399)],_0x424fd3=this[_0x1605da(0x430)],_0x1e0e7b=this[_0x1605da(0x3d7)](_0x3b6217);return this[_0x1605da(0x3e9)](_0x326bc9,_0x424fd3,_0x1e0e7b);}if(_0x3b6217[_0x1605da(0x41c)](/MOVE LOWER LEFT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x1,Number(RegExp['$1']));if(_0x3b6217['match'](/MOVE DOWN:[ ](\d+)/i))return this[_0x1605da(0x47d)](0x2,Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/MOVE LOWER RIGHT:[ ](\d+)/i))return this[_0x1605da(0x47d)](0x3,Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/MOVE LEFT:[ ](\d+)/i))return this[_0x1605da(0x47d)](0x4,Number(RegExp['$1']));if(_0x3b6217['match'](/MOVE RIGHT:[ ](\d+)/i))return this[_0x1605da(0x47d)](0x6,Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/MOVE UPPER LEFT:[ ](\d+)/i))return this[_0x1605da(0x47d)](0x7,Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/MOVE UP:[ ](\d+)/i))return this[_0x1605da(0x47d)](0x8,Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/MOVE UPPER RIGHT:[ ](\d+)/i))return this[_0x1605da(0x47d)](0x9,Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/OPACITY:[ ](\d+)([%％])/i)){const _0x4894fd=Math['round'](Number(RegExp['$1'])/0x64*0xff);return this[_0x1605da(0x3e7)](_0x4894fd[_0x1605da(0x189)](0x0,0xff));}if(_0x3b6217[_0x1605da(0x41c)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x265e1e=this[_0x1605da(0x3ae)]+Math['round'](Number(RegExp['$1'])/0x64*0xff);return this[_0x1605da(0x3e7)](_0x265e1e[_0x1605da(0x189)](0x0,0xff));}if(_0x3b6217['match'](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x1ac150=this[_0x1605da(0x3ae)]+Number(RegExp['$1']);return this[_0x1605da(0x3e7)](_0x1ac150['clamp'](0x0,0xff));}if(_0x3b6217['match'](/PATTERN LOCK:[ ](\d+)/i))return this[_0x1605da(0x40e)](Number(RegExp['$1']));if(_0x3b6217[_0x1605da(0x41c)](/PATTERN UNLOCK/i))return this[_0x1605da(0x2c0)]=![];if(_0x3b6217[_0x1605da(0x41c)](/POSE:[ ](.*)/i)){const _0x3b5967=String(RegExp['$1'])['toUpperCase']()[_0x1605da(0x395)]();return this[_0x1605da(0x36b)](_0x3b5967);}if(_0x3b6217['match'](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x37f022=Number(RegExp['$1']),_0x102fc6=Number(RegExp['$2']);return this[_0x1605da(0x1dd)](_0x37f022,_0x102fc6);}if(_0x3b6217[_0x1605da(0x41c)](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x54305f=$gameMap['event'](Number(RegExp['$1']));return this[_0x1605da(0x1fe)](_0x54305f);}if(_0x3b6217[_0x1605da(0x41c)](/STEP TOWARD PLAYER/i))return this['processMoveRouteStepToCharacter']($gamePlayer);if(_0x3b6217[_0x1605da(0x41c)](/STEP TOWARD HOME/i)&&this[_0x1605da(0x465)]){const _0x1c2877=this[_0x1605da(0x399)],_0xcbf9f4=this['_randomHomeY'];return this[_0x1605da(0x1dd)](_0x1c2877,_0xcbf9f4);}if(_0x3b6217['match'](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x1605da(0x24d)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3b6217['match'](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x38a102=$gameMap[_0x1605da(0x2c3)](Number(RegExp['$1']));return this[_0x1605da(0x307)](_0x38a102);}if(_0x3b6217[_0x1605da(0x41c)](/STEP AWAY FROM PLAYER/i))return this[_0x1605da(0x307)]($gamePlayer);if(_0x3b6217['match'](/STEP AWAY FROM HOME/i)&&this[_0x1605da(0x465)]){const _0x3acd37=this[_0x1605da(0x399)],_0x2a29ff=this[_0x1605da(0x430)];return this[_0x1605da(0x24d)](_0x3acd37,_0x2a29ff);}if(_0x3b6217['match'](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x1605da(0x41d)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3b6217['match'](/TURN TO EVENT:[ ](\d+)/i)){const _0x304ca3=$gameMap['event'](Number(RegExp['$1']));return this[_0x1605da(0x2ad)](_0x304ca3);}if(_0x3b6217[_0x1605da(0x41c)](/TURN TO PLAYER/i))return this[_0x1605da(0x2ad)]($gamePlayer);if(_0x3b6217[_0x1605da(0x41c)](/TURN TO HOME/i)&&this[_0x1605da(0x465)]){const _0x3f196e=this[_0x1605da(0x399)],_0x4b20b2=this[_0x1605da(0x430)];return this['moveTowardPoint'](_0x3f196e,_0x4b20b2);}if(_0x3b6217[_0x1605da(0x41c)](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x1605da(0x497)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3b6217[_0x1605da(0x41c)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0xb7e4fa=$gameMap[_0x1605da(0x2c3)](Number(RegExp['$1']));return this['turnAwayFromCharacter'](_0xb7e4fa);}if(_0x3b6217[_0x1605da(0x41c)](/TURN AWAY FROM PLAYER/i))return this[_0x1605da(0x2b5)]($gamePlayer);if(_0x3b6217[_0x1605da(0x41c)](/TURN AWAY FROM HOME/i)&&this['eventId']){const _0x5f5ae6=this[_0x1605da(0x399)],_0x4ee71c=this[_0x1605da(0x430)];return this[_0x1605da(0x497)](_0x5f5ae6,_0x4ee71c);}if(_0x3b6217['match'](/TURN LOWER LEFT/i))return this['setDirection'](0x1);if(_0x3b6217['match'](/TURN LOWER RIGHT/i))return this[_0x1605da(0x3c2)](0x3);if(_0x3b6217[_0x1605da(0x41c)](/TURN UPPER LEFT/i))return this['setDirection'](0x7);if(_0x3b6217[_0x1605da(0x41c)](/TURN UPPER RIGHT/i))return this[_0x1605da(0x3c2)](0x9);if(_0x3b6217[_0x1605da(0x41c)](/Self Switch[ ](.*):[ ](.*)/i))return this[_0x1605da(0x47a)](RegExp['$1'],RegExp['$2']);if(_0x3b6217['match'](/Self Variable[ ](.*):[ ](.*)/i))return this['processMoveRouteSelfVariable'](RegExp['$1'],RegExp['$2']);if(_0x3b6217['match'](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x1605da(0x3ee)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3b6217[_0x1605da(0x41c)](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0x3ed522=$gameMap['event'](Number(RegExp['$1']));return this[_0x1605da(0x416)](_0x3ed522);}if(_0x3b6217['match'](/TELEPORT TO PLAYER/i))return this[_0x1605da(0x416)]($gamePlayer);if(_0x3b6217[_0x1605da(0x41c)](/TELEPORT TO HOME/i)&&this[_0x1605da(0x465)]){const _0x351374=this['_randomHomeX'],_0x5d7f82=this['_randomHomeY'];return this[_0x1605da(0x3ee)](_0x351374,_0x5d7f82);}try{VisuMZ[_0x1605da(0x2ab)][_0x1605da(0x45e)][_0x1605da(0x27b)](this,_0x2f9a11);}catch(_0x2770ed){if($gameTemp[_0x1605da(0x277)]())console['log'](_0x2770ed);}},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x1c4)]=function(_0x584a38){const _0x2d19cb=_0x2a8554;$gameTemp[_0x2d19cb(0x3e3)]([this],_0x584a38);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x3c6)]=function(_0x2e0a75){const _0x36cca6=_0x2a8554;let _0xa8cffc=0x0;switch(_0x2e0a75[_0x36cca6(0x3fe)]()[_0x36cca6(0x395)]()){case'!':case _0x36cca6(0x3fa):_0xa8cffc=0x1;break;case'?':case _0x36cca6(0x3bf):_0xa8cffc=0x2;break;case _0x36cca6(0x2c6):case _0x36cca6(0x256):case _0x36cca6(0x2e0):case'MUSIC-NOTE':case'MUSICNOTE':_0xa8cffc=0x3;break;case'HEART':case _0x36cca6(0x42e):_0xa8cffc=0x4;break;case _0x36cca6(0x14f):_0xa8cffc=0x5;break;case _0x36cca6(0x386):_0xa8cffc=0x6;break;case'COBWEB':case _0x36cca6(0x3cb):case _0x36cca6(0x2ee):_0xa8cffc=0x7;break;case _0x36cca6(0x125):case _0x36cca6(0x48c):_0xa8cffc=0x8;break;case _0x36cca6(0x1f5):case _0x36cca6(0x468):case'LIGHT\x20BULB':case _0x36cca6(0x1b8):case _0x36cca6(0x29d):_0xa8cffc=0x9;break;case'Z':case'ZZ':case _0x36cca6(0x295):case _0x36cca6(0x490):_0xa8cffc=0xa;break;case'USER-DEFINED\x201':_0xa8cffc=0xb;break;case _0x36cca6(0x2fb):_0xa8cffc=0xc;break;case'USER-DEFINED\x203':_0xa8cffc=0xd;break;case _0x36cca6(0x2bd):_0xa8cffc=0xe;break;case _0x36cca6(0x334):_0xa8cffc=0xf;break;}$gameTemp[_0x36cca6(0x296)](this,_0xa8cffc);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x18c)]=function(_0x4dc494){const _0x1a8129=_0x2a8554;_0x4dc494+=this[_0x1a8129(0x3ae)],this[_0x1a8129(0x3e7)](_0x4dc494[_0x1a8129(0x189)](0x0,0xff));if(this[_0x1a8129(0x3ae)]<0xff)this[_0x1a8129(0x1c0)]--;},Game_Character[_0x2a8554(0x1cc)]['processMoveRouteFadeOut']=function(_0x35a62b){const _0x1ee106=_0x2a8554;_0x35a62b=this[_0x1ee106(0x3ae)]-_0x35a62b,this[_0x1ee106(0x3e7)](_0x35a62b[_0x1ee106(0x189)](0x0,0xff));if(this[_0x1ee106(0x3ae)]>0x0)this[_0x1ee106(0x1c0)]--;},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0xed)]=function(_0x433d88){const _0x5292c3=_0x2a8554,_0x245d08=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x4e617f=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x42aa40=this['direction'](),_0x28373f=(_0x433d88===_0x5292c3(0x135)?_0x245d08:_0x4e617f)[_0x42aa40],_0x50b420=(_0x433d88===_0x5292c3(0x135)?_0x4e617f:_0x245d08)[_0x42aa40];if(this['canPass'](this['x'],this['y'],_0x28373f))_0x433d88===_0x5292c3(0x135)?this[_0x5292c3(0x356)]():this['turnRight90']();else!this[_0x5292c3(0x30c)](this['x'],this['y'],this[_0x5292c3(0x43a)]())&&(this[_0x5292c3(0x30c)](this['x'],this['y'],_0x50b420)?_0x433d88===_0x5292c3(0x135)?this[_0x5292c3(0x404)]():this[_0x5292c3(0x356)]():this['turn180']());this['canPass'](this['x'],this['y'],this[_0x5292c3(0x43a)]())&&this[_0x5292c3(0x29f)]();},Game_Character['prototype'][_0x2a8554(0x437)]=function(_0x266c14){const _0x3dc48e=_0x2a8554;if(ImageManager[_0x3dc48e(0x417)](this[_0x3dc48e(0x1cb)]))return;_0x266c14=_0x266c14[_0x3dc48e(0x189)](0x0,0x7),this[_0x3dc48e(0x15f)](this['_characterName'],_0x266c14);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x23a)]=function(_0xe57571){const _0x2d763e=_0x2a8554;switch(this[_0x2d763e(0x43a)]()){case 0x1:this[_0x2d763e(0x14d)](-_0xe57571,_0xe57571);break;case 0x2:this[_0x2d763e(0x14d)](0x0,_0xe57571);break;case 0x3:this[_0x2d763e(0x14d)](_0xe57571,_0xe57571);break;case 0x4:this['jump'](-_0xe57571,0x0);break;case 0x6:this[_0x2d763e(0x14d)](_0xe57571,0x0);break;case 0x7:this[_0x2d763e(0x14d)](-_0xe57571,-_0xe57571);break;case 0x8:this[_0x2d763e(0x14d)](0x0,-_0xe57571);break;case 0x9:this[_0x2d763e(0x14d)](_0xe57571,-_0xe57571);break;}},Game_Character['prototype']['processMoveRouteJumpTo']=function(_0x5925e8,_0xc5a4c){const _0x57c6b1=_0x2a8554,_0x3eb436=Math['round'](_0x5925e8-this['x']),_0x3aeb1a=Math[_0x57c6b1(0x37e)](_0xc5a4c-this['y']);this[_0x57c6b1(0x14d)](_0x3eb436,_0x3aeb1a);},Game_Character[_0x2a8554(0x1cc)]['processMoveRouteJumpToCharacter']=function(_0x2ea330){const _0x3d2172=_0x2a8554;if(_0x2ea330)this[_0x3d2172(0x1f6)](_0x2ea330['x'],_0x2ea330['y']);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x1dd)]=function(_0x2c5975,_0x1d58b9,_0x30fae9){const _0x5801a7=_0x2a8554;let _0x320288=0x0;if(_0x30fae9)$gameTemp['_moveAllowPlayerCollision']=!![];$gameMap[_0x5801a7(0x21b)]()?_0x320288=this[_0x5801a7(0x3eb)](_0x2c5975,_0x1d58b9):_0x320288=this[_0x5801a7(0x2dd)](_0x2c5975,_0x1d58b9);if(_0x30fae9)$gameTemp[_0x5801a7(0x4b0)]=![];this['executeMoveDir8'](_0x320288),this['setMovementSuccess'](!![]);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x1fe)]=function(_0xde972c){const _0x4de493=_0x2a8554;if(_0xde972c)this[_0x4de493(0x1dd)](_0xde972c['x'],_0xde972c['y']);},Game_Character['prototype'][_0x2a8554(0x269)]=function(_0xc89040,_0x43ecbe){const _0x4dee36=_0x2a8554,_0x218e98=this[_0x4dee36(0x456)](_0xc89040),_0x37c0e9=this[_0x4dee36(0x136)](_0x43ecbe);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x3d7)]=function(_0xe9d059){const _0x87d2ad=_0x2a8554;if(_0xe9d059['match'](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0xe9d059[_0x87d2ad(0x41c)](/(?:AVOID|EVADE|DODGE)/i)?![]:![];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x243)]=Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x3da)],Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x3da)]=function(_0x1fd51d,_0x54dc11){const _0xf1afb8=_0x2a8554;if($gameTemp[_0xf1afb8(0x4b0)])return![];return VisuMZ['EventsMoveCore'][_0xf1afb8(0x243)][_0xf1afb8(0x27b)](this,_0x1fd51d,_0x54dc11);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x302)]=function(_0x4d780a,_0x4b29f9){const _0x2865a4=_0x2a8554,_0x5787be=['',_0x2865a4(0x4b7),_0x2865a4(0x26b),'LOWER\x20RIGHT','LEFT','','RIGHT',_0x2865a4(0x41b),'UP',_0x2865a4(0xf9)],_0xa29e23=_0x5787be[_0x2865a4(0x2f4)](_0x4d780a[_0x2865a4(0x3fe)]()[_0x2865a4(0x395)]());if(_0xa29e23<=0x0)return;if(_0x4b29f9)$gameTemp['_moveAllowPlayerCollision']=!![];if(this[_0x2865a4(0x30c)](this['x'],this['y'],_0xa29e23)){if(_0x4b29f9)$gameTemp['_moveAllowPlayerCollision']=![];this['executeMoveDir8'](_0xa29e23),this[_0x2865a4(0x1c0)]-=0x1;}if(_0x4b29f9)$gameTemp[_0x2865a4(0x4b0)]=![];},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x3e9)]=function(_0x2f6e0a,_0x2a5209,_0x3318dd){const _0x974ab6=_0x2a8554;this['processMoveRouteStepTo'](_0x2f6e0a,_0x2a5209,_0x3318dd);if(this['x']!==_0x2f6e0a||this['y']!==_0x2a5209)this[_0x974ab6(0x1c0)]--;},Game_Character['prototype'][_0x2a8554(0x38d)]=function(_0x2a74ee,_0x5df69d){const _0x1056fc=_0x2a8554;if(_0x2a74ee)this[_0x1056fc(0x3e9)](_0x2a74ee['x'],_0x2a74ee['y'],_0x5df69d);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x47d)]=function(_0x41ad8a,_0x1783fc){const _0x3b4106=_0x2a8554;_0x1783fc=_0x1783fc||0x0;const _0x77c80d={'code':0x1,'indent':null,'parameters':[]};_0x77c80d[_0x3b4106(0x3e0)]=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x41ad8a],this[_0x3b4106(0x180)][_0x3b4106(0x18d)][this[_0x3b4106(0x1c0)]][_0x3b4106(0x394)][0x0]='';while(_0x1783fc--){this[_0x3b4106(0x180)]['list'][_0x3b4106(0x3f8)](this[_0x3b4106(0x1c0)]+0x1,0x0,_0x77c80d);}},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x40e)]=function(_0x4e6c27){const _0x194d72=_0x2a8554;this[_0x194d72(0x2c0)]=!![],this[_0x194d72(0x3ca)](_0x4e6c27);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x47a)]=function(_0x8cf126,_0x596976){const _0x238743=_0x2a8554;if(this===$gamePlayer)return;const _0x2b3e7d=[this['_mapId'],this[_0x238743(0x301)],'A'];_0x8cf126[_0x238743(0x41c)](/\b[ABCD]\b/i)?_0x2b3e7d[0x2]=String(_0x8cf126)[_0x238743(0x118)](0x0)[_0x238743(0x3fe)]()['trim']():_0x2b3e7d[0x2]=_0x238743(0x287)[_0x238743(0x258)](_0x8cf126);switch(_0x596976[_0x238743(0x3fe)]()[_0x238743(0x395)]()){case'ON':case _0x238743(0x3b5):$gameSelfSwitches[_0x238743(0x3a9)](_0x2b3e7d,!![]);break;case _0x238743(0x1d9):case'FALSE':$gameSelfSwitches[_0x238743(0x3a9)](_0x2b3e7d,![]);break;case _0x238743(0x4a0):$gameSelfSwitches[_0x238743(0x3a9)](_0x2b3e7d,!$gameSelfSwitches[_0x238743(0x44a)](_0x2b3e7d));break;}},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x330)]=function(_0x10f0b9,_0xdc2f5a){const _0x10c9e0=_0x2a8554;if(this===$gamePlayer)return;const _0x3ea492=[this[_0x10c9e0(0x403)],this['_eventId'],_0x10c9e0(0x1f8)[_0x10c9e0(0x258)](switchId)];$gameSelfSwitches[_0x10c9e0(0x3a9)](_0x3ea492,Number(_0xdc2f5a));},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x3ee)]=function(_0x46e616,_0x29949f){const _0x207565=_0x2a8554;this[_0x207565(0x1df)](_0x46e616,_0x29949f);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x416)]=function(_0x16b605){if(_0x16b605)this['processMoveRouteTeleportTo'](_0x16b605['x'],_0x16b605['y']);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x404)]=function(){const _0x39023d=_0x2a8554;switch(this[_0x39023d(0x43a)]()){case 0x1:this[_0x39023d(0x3c2)](0x7);break;case 0x2:this[_0x39023d(0x3c2)](0x4);break;case 0x3:this['setDirection'](0x1);break;case 0x4:this[_0x39023d(0x3c2)](0x8);break;case 0x6:this[_0x39023d(0x3c2)](0x2);break;case 0x7:this[_0x39023d(0x3c2)](0x9);break;case 0x8:this['setDirection'](0x6);break;case 0x9:this[_0x39023d(0x3c2)](0x3);break;}},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x356)]=function(){const _0x2487d0=_0x2a8554;switch(this['direction']()){case 0x1:this[_0x2487d0(0x3c2)](0x3);break;case 0x2:this[_0x2487d0(0x3c2)](0x6);break;case 0x3:this[_0x2487d0(0x3c2)](0x9);break;case 0x4:this[_0x2487d0(0x3c2)](0x2);break;case 0x6:this[_0x2487d0(0x3c2)](0x8);break;case 0x7:this[_0x2487d0(0x3c2)](0x1);break;case 0x8:this[_0x2487d0(0x3c2)](0x4);break;case 0x9:this[_0x2487d0(0x3c2)](0x7);break;}},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x1b1)]=function(_0x49bc21,_0x18092d,_0xfc96cc){const _0x5ea093=_0x2a8554,_0xe59fda=this[_0x5ea093(0x456)](_0x49bc21),_0x51d693=this[_0x5ea093(0x136)](_0x18092d);if($gameMap['isSupportDiagonalMovement']()){if(_0xfc96cc||this[_0x5ea093(0x12f)]()){if(_0xe59fda>0x0&&_0x51d693<0x0)return 0x1;if(_0xe59fda<0x0&&_0x51d693<0x0)return 0x3;if(_0xe59fda>0x0&&_0x51d693>0x0)return 0x7;if(_0xe59fda<0x0&&_0x51d693>0x0)return 0x9;}}if(Math[_0x5ea093(0x2a3)](_0xe59fda)>Math['abs'](_0x51d693))return _0xe59fda>0x0?0x4:0x6;else{if(_0x51d693!==0x0)return _0x51d693>0x0?0x8:0x2;}return 0x0;},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x345)]=function(_0x25ff7c,_0x572166,_0x3748f9){const _0x2a733a=_0x2a8554,_0x5a5325=this[_0x2a733a(0x456)](_0x25ff7c),_0x25bcf2=this[_0x2a733a(0x136)](_0x572166);if($gameMap[_0x2a733a(0x21b)]()){if(_0x3748f9||this[_0x2a733a(0x12f)]()){if(_0x5a5325>0x0&&_0x25bcf2<0x0)return 0x9;if(_0x5a5325<0x0&&_0x25bcf2<0x0)return 0x7;if(_0x5a5325>0x0&&_0x25bcf2>0x0)return 0x3;if(_0x5a5325<0x0&&_0x25bcf2>0x0)return 0x1;}}if(Math[_0x2a733a(0x2a3)](_0x5a5325)>Math['abs'](_0x25bcf2))return _0x5a5325>0x0?0x6:0x4;else{if(_0x25bcf2!==0x0)return _0x25bcf2>0x0?0x2:0x8;}return 0x0;},Game_Character[_0x2a8554(0x1cc)]['moveTowardPoint']=function(_0x3c6a76,_0x54d768){const _0xef66b4=_0x2a8554,_0x2c4f83=this['getDirectionToPoint'](_0x3c6a76,_0x54d768,!![]);if(_0x2c4f83)this[_0xef66b4(0x276)](_0x2c4f83);},Game_Character['prototype'][_0x2a8554(0x24d)]=function(_0x4913f4,_0x332d03){const _0x3eafc0=_0x2a8554,_0x2df68c=this['getDirectionFromPoint'](_0x4913f4,_0x332d03,!![]);if(_0x2df68c)this[_0x3eafc0(0x276)](_0x2df68c);},Game_Character['prototype']['turnTowardPoint']=function(_0x11b693,_0xa2063e){const _0x206e07=_0x2a8554,_0x5b61d8=this[_0x206e07(0x1b1)](_0x11b693,_0xa2063e,![]);if(_0x5b61d8)this['setDirection'](_0x5b61d8);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x497)]=function(_0x1f0b29,_0x4ec9d3){const _0x2bacef=_0x2a8554,_0xcb986b=this['getDirectionFromPoint'](_0x1f0b29,_0x4ec9d3,![]);if(_0xcb986b)this[_0x2bacef(0x3c2)](_0xcb986b);},Game_Character['prototype'][_0x2a8554(0x205)]=function(_0xc8b038){const _0x53bb37=_0x2a8554;if(_0xc8b038)this[_0x53bb37(0x41d)](_0xc8b038['x'],_0xc8b038['y']);},Game_Character['prototype'][_0x2a8554(0x307)]=function(_0x215239){const _0x1c3ef5=_0x2a8554;if(_0x215239)this[_0x1c3ef5(0x24d)](_0x215239['x'],_0x215239['y']);},Game_Character['prototype'][_0x2a8554(0x2ad)]=function(_0xea547a){const _0x3f6a8c=_0x2a8554;if(_0xea547a)this[_0x3f6a8c(0x2ac)](_0xea547a['x'],_0xea547a['y']);},Game_Character[_0x2a8554(0x1cc)][_0x2a8554(0x2b5)]=function(_0x323fc3){const _0x31ad97=_0x2a8554;if(_0x323fc3)this[_0x31ad97(0x497)](_0x323fc3['x'],_0x323fc3['y']);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x289)]=Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x20b)],Game_Player[_0x2a8554(0x1cc)]['isDashing']=function(){const _0x1db0a1=_0x2a8554;if(this[_0x1db0a1(0x266)])return!![];return VisuMZ['EventsMoveCore']['Game_Player_isDashing'][_0x1db0a1(0x27b)](this);},Game_Player[_0x2a8554(0x1cc)]['isDashingAndMoving']=function(){const _0xaef12a=_0x2a8554;return this[_0xaef12a(0x20b)]()&&(this[_0xaef12a(0x42f)]()||this['getInputDirection']()!==0x0&&this[_0xaef12a(0x30c)](this['_x'],this['_y'],this['getInputDirection']())||$gameTemp[_0xaef12a(0x255)]());},VisuMZ[_0x2a8554(0x2ab)]['Game_Player_getInputDirection']=Game_Player[_0x2a8554(0x1cc)]['getInputDirection'],Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x322)]=function(){const _0x5e58a8=_0x2a8554;return $gameMap['isSupportDiagonalMovement']()?this['getInputDir8']():VisuMZ[_0x5e58a8(0x2ab)][_0x5e58a8(0x331)][_0x5e58a8(0x27b)](this);},Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x186)]=function(){const _0x3b5b5c=_0x2a8554;return Input[_0x3b5b5c(0x206)];},Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x30e)]=function(){const _0x29df4c=_0x2a8554;if($gameSystem[_0x29df4c(0x1db)]())return 0x0;if(!this[_0x29df4c(0x42f)]()&&this[_0x29df4c(0x19f)]()){let _0x1e7d02=this[_0x29df4c(0x322)]();if(_0x1e7d02>0x0)$gameTemp[_0x29df4c(0x35d)]();else{if($gameTemp[_0x29df4c(0x255)]()){const _0x4dbd05=$gameTemp[_0x29df4c(0x2ae)](),_0x2e7d0d=$gameTemp[_0x29df4c(0x4a9)](),_0x2d2c99=$gameMap[_0x29df4c(0x21b)](),_0x3fe946=$gameMap[_0x29df4c(0x3e5)](_0x4dbd05,_0x2e7d0d),_0x1a39fa=$gameMap[_0x29df4c(0x4a3)](_0x4dbd05,_0x2e7d0d)[_0x29df4c(0x4a8)]<=0x0;_0x2d2c99&&_0x3fe946&&_0x1a39fa?_0x1e7d02=this[_0x29df4c(0x3eb)](_0x4dbd05,_0x2e7d0d):_0x1e7d02=this[_0x29df4c(0x2dd)](_0x4dbd05,_0x2e7d0d);}}_0x1e7d02>0x0?(this[_0x29df4c(0x3af)]=this['_inputTime']||0x0,this[_0x29df4c(0x2a1)]()?this[_0x29df4c(0x3c2)](_0x1e7d02):this['executeMove'](_0x1e7d02),this[_0x29df4c(0x3af)]++):this[_0x29df4c(0x3af)]=0x0;}},Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x2a1)]=function(){const _0x46fb54=_0x2a8554,_0x2c2244=VisuMZ[_0x46fb54(0x2ab)][_0x46fb54(0x414)]['Movement'];if(!_0x2c2244['EnableTurnInPlace'])return![];if($gameTemp['isDestinationValid']())return![];if(this[_0x46fb54(0x20b)]()||this[_0x46fb54(0x42f)]()||this[_0x46fb54(0x203)]())return![];return this[_0x46fb54(0x3af)]<_0x2c2244[_0x46fb54(0x379)];},VisuMZ[_0x2a8554(0x2ab)]['Game_Player_executeMove']=Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x3e1)],Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x3e1)]=function(_0x446276){const _0x54ef65=_0x2a8554;$gameMap[_0x54ef65(0x21b)]()?this[_0x54ef65(0x276)](_0x446276):VisuMZ[_0x54ef65(0x2ab)][_0x54ef65(0x439)][_0x54ef65(0x27b)](this,_0x446276);},VisuMZ['EventsMoveCore'][_0x2a8554(0xd0)]=Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x17d)],Game_Player['prototype'][_0x2a8554(0x17d)]=function(_0x295ab3,_0x2bf036,_0x48e98e){const _0x55572a=_0x2a8554;if($gameMap[_0x55572a(0x361)](_0x295ab3,_0x2bf036,_0x48e98e,_0x55572a(0x162)))return this['isInVehicle']()&&this[_0x55572a(0x1ba)]()?this[_0x55572a(0x1ba)]()[_0x55572a(0x17d)](_0x295ab3,_0x2bf036,_0x48e98e):!![];if($gameMap[_0x55572a(0x12e)](_0x295ab3,_0x2bf036,_0x48e98e,'player'))return![];return VisuMZ['EventsMoveCore'][_0x55572a(0xd0)][_0x55572a(0x27b)](this,_0x295ab3,_0x2bf036,_0x48e98e);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x199)]=Game_Player[_0x2a8554(0x1cc)]['checkEventTriggerHere'],Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x2bb)]=function(_0x5f060a){const _0x272d27=_0x2a8554;VisuMZ[_0x272d27(0x2ab)]['Game_Player_checkEventTriggerHere'][_0x272d27(0x27b)](this,_0x5f060a);if(this[_0x272d27(0x32f)]()){this[_0x272d27(0x4aa)](_0x5f060a);if(_0x5f060a['includes'](0x0)&&this[_0x272d27(0x164)]()==='standing')this['startMapCommonEventOnOK'](this['x'],this['y']);else(_0x5f060a[_0x272d27(0x104)](0x1)||_0x5f060a['includes'](0x2))&&this[_0x272d27(0x424)]();}},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x466)]=Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x353)],Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x353)]=function(_0x1ebfd5){const _0xea5a75=_0x2a8554;VisuMZ[_0xea5a75(0x2ab)][_0xea5a75(0x466)][_0xea5a75(0x27b)](this,_0x1ebfd5);if(this['canStartLocalEvents']()&&_0x1ebfd5[_0xea5a75(0x104)](0x0)&&this[_0xea5a75(0x164)]()===_0xea5a75(0x49b)){const _0x135c41=this[_0xea5a75(0x43a)](),_0xf170f8=$gameMap[_0xea5a75(0x2e9)](this['x'],_0x135c41),_0x5752e2=$gameMap['roundYWithDirection'](this['y'],_0x135c41);this[_0xea5a75(0x4ae)](_0xf170f8,_0x5752e2);}},Game_Player['prototype'][_0x2a8554(0x4aa)]=function(_0x8db7ff){const _0x3d7249=_0x2a8554;if($gameMap['isEventRunning']())return;if($gameMap[_0x3d7249(0x185)]())return;const _0x1c81fe=$gameMap[_0x3d7249(0x411)]();for(const _0x310049 of _0x1c81fe){if(!_0x310049)continue;if(!_0x310049['isTriggerIn'](_0x8db7ff))continue;if(this[_0x3d7249(0x13b)](_0x310049))return _0x310049[_0x3d7249(0x212)]();if(this['meetActivationProximityConditions'](_0x310049))return _0x310049[_0x3d7249(0x212)]();}},Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x13b)]=function(_0x19eac4){const _0x5cc672=_0x2a8554;if($gameMap['isEventRunning']())return![];if($gameMap[_0x5cc672(0x185)]())return![];return _0x19eac4[_0x5cc672(0x247)]()[_0x5cc672(0x104)](this[_0x5cc672(0x33d)]());},Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x460)]=function(_0x4ff3fb){const _0x33e7b3=_0x2a8554;if($gameMap[_0x33e7b3(0x10f)]())return![];if($gameMap['isAnyEventStarting']())return![];if([_0x33e7b3(0x2d1),'region']['includes'](_0x4ff3fb[_0x33e7b3(0x17a)]()))return![];const _0xcafc76=_0x4ff3fb[_0x33e7b3(0x17a)](),_0x2ca648=_0x4ff3fb[_0x33e7b3(0x1ed)]();switch(_0xcafc76){case'radius':const _0x3c1c78=$gameMap[_0x33e7b3(0x428)](this['x'],this['y'],_0x4ff3fb['x'],_0x4ff3fb['y']);return _0x4ff3fb[_0x33e7b3(0x1ed)]()>=_0x3c1c78;break;case'square':return _0x2ca648>=Math[_0x33e7b3(0x2a3)](_0x4ff3fb[_0x33e7b3(0x456)](this['x']))&&_0x2ca648>=Math['abs'](_0x4ff3fb['deltaYFrom'](this['y']));break;case'row':return _0x2ca648>=Math['abs'](_0x4ff3fb[_0x33e7b3(0x136)](this['y']));break;case _0x33e7b3(0x3d1):return _0x2ca648>=Math[_0x33e7b3(0x2a3)](_0x4ff3fb[_0x33e7b3(0x456)](this['x']));break;case'default':return![];break;}},Game_Player['prototype']['startMapCommonEventOnOK']=function(_0x5c780e,_0x536c33){const _0x5ae5e5=_0x2a8554;if($gameMap[_0x5ae5e5(0x10f)]())return;if($gameMap[_0x5ae5e5(0x185)]())return;let _0x30e90a=VisuMZ[_0x5ae5e5(0x2ab)]['Settings'][_0x5ae5e5(0x27e)],_0x52e43b=$gameMap[_0x5ae5e5(0x33d)](_0x5c780e,_0x536c33);const _0x2874b7=_0x5ae5e5(0x1b3)[_0x5ae5e5(0x258)](_0x52e43b);_0x30e90a[_0x2874b7]&&$gameTemp[_0x5ae5e5(0x260)](_0x30e90a[_0x2874b7]);},Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x164)]=function(){const _0x127f13=_0x2a8554;return VisuMZ['EventsMoveCore'][_0x127f13(0x414)][_0x127f13(0x26d)];},Game_Player['prototype'][_0x2a8554(0x424)]=function(){const _0x511c8c=_0x2a8554;if($gameMap[_0x511c8c(0x10f)]())return;if($gameMap['isAnyEventStarting']())return;let _0xdc056a=VisuMZ[_0x511c8c(0x2ab)]['Settings'][_0x511c8c(0x31c)];const _0x41f869=_0x511c8c(0x1b3)[_0x511c8c(0x258)](this[_0x511c8c(0x33d)]());_0xdc056a[_0x41f869]&&$gameTemp[_0x511c8c(0x260)](_0xdc056a[_0x41f869]);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3e2)]=Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x306)],Game_Player[_0x2a8554(0x1cc)][_0x2a8554(0x306)]=function(){const _0x2ae2b0=_0x2a8554;VisuMZ[_0x2ae2b0(0x2ab)][_0x2ae2b0(0x3e2)][_0x2ae2b0(0x27b)](this),VisuMZ[_0x2ae2b0(0x321)](0x0);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3bc)]=Game_Follower[_0x2a8554(0x1cc)][_0x2a8554(0x49c)],Game_Follower['prototype'][_0x2a8554(0x49c)]=function(_0xe0d7fa){const _0x54a350=_0x2a8554;VisuMZ[_0x54a350(0x2ab)]['Game_Follower_initialize'][_0x54a350(0x27b)](this,_0xe0d7fa),this[_0x54a350(0x21f)]=![];},Game_Follower['prototype'][_0x2a8554(0x20b)]=function(){const _0x54601e=_0x2a8554;return $gamePlayer[_0x54601e(0x20b)]();},Game_Follower[_0x2a8554(0x1cc)]['isDashingAndMoving']=function(){const _0x46f76e=_0x2a8554;return $gamePlayer[_0x46f76e(0xf8)]();},Game_Follower['prototype']['realMoveSpeed']=function(){const _0x6e057c=_0x2a8554;return $gamePlayer[_0x6e057c(0x13c)]();},Game_Follower[_0x2a8554(0x1cc)]['setChaseOff']=function(_0x50d810){const _0x308801=_0x2a8554;this[_0x308801(0x21f)]=_0x50d810;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x42d)]=Game_Follower[_0x2a8554(0x1cc)][_0x2a8554(0x2d8)],Game_Follower[_0x2a8554(0x1cc)][_0x2a8554(0x2d8)]=function(_0x556669){const _0x57618f=_0x2a8554;if(this[_0x57618f(0x21f)])return;if($gameSystem[_0x57618f(0x1bb)]())return;VisuMZ['EventsMoveCore']['Game_Follower_chaseCharacter']['call'](this,_0x556669);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3cf)]=Game_Vehicle[_0x2a8554(0x1cc)][_0x2a8554(0x17d)],Game_Vehicle[_0x2a8554(0x1cc)][_0x2a8554(0x17d)]=function(_0x3c1809,_0xb015a8,_0x4ea402){const _0xb14f9b=_0x2a8554;if($gameMap[_0xb14f9b(0x361)](_0x3c1809,_0xb015a8,_0x4ea402,this[_0xb14f9b(0x2d3)]))return!![];if($gameMap[_0xb14f9b(0x12e)](_0x3c1809,_0xb015a8,_0x4ea402,this[_0xb14f9b(0x2d3)]))return![];return VisuMZ['EventsMoveCore'][_0xb14f9b(0x3cf)][_0xb14f9b(0x27b)](this,_0x3c1809,_0xb015a8,_0x4ea402);},Game_Vehicle[_0x2a8554(0x1cc)][_0x2a8554(0x408)]=function(_0x41d939,_0x348a68,_0xe2dc8a){const _0x32fcef=_0x2a8554;if($gameMap[_0x32fcef(0x361)](_0x41d939,_0x348a68,_0xe2dc8a,this['_type']))return!![];if($gameMap[_0x32fcef(0x12e)](_0x41d939,_0x348a68,_0xe2dc8a,this[_0x32fcef(0x2d3)]))return![];return VisuMZ['EventsMoveCore'][_0x32fcef(0x381)][_0x32fcef(0x27b)]($gamePlayer,_0x41d939,_0x348a68,_0xe2dc8a);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3ea)]=Game_Vehicle[_0x2a8554(0x1cc)][_0x2a8554(0x27d)],Game_Vehicle[_0x2a8554(0x1cc)][_0x2a8554(0x27d)]=function(_0x458740,_0x14fef3,_0x218909){const _0x36d42a=_0x2a8554;if($gameMap['isRegionDockable'](_0x458740,_0x14fef3,_0x218909,this[_0x36d42a(0x2d3)]))return!![];const _0x1b0fd7=this[_0x36d42a(0x2d3)][_0x36d42a(0x118)](0x0)[_0x36d42a(0x3fe)]()+this[_0x36d42a(0x2d3)][_0x36d42a(0x308)](0x1),_0x4438f4='%1DockRegionOnly'['format'](_0x1b0fd7);return VisuMZ[_0x36d42a(0x2ab)][_0x36d42a(0x414)]['Region'][_0x4438f4]?![]:VisuMZ[_0x36d42a(0x2ab)]['Game_Vehicle_isLandOk'][_0x36d42a(0x27b)](this,_0x458740,_0x14fef3,_0x218909);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x32c)]=Game_Vehicle['prototype'][_0x2a8554(0x27f)],Game_Vehicle['prototype'][_0x2a8554(0x27f)]=function(){const _0x37608e=_0x2a8554;VisuMZ[_0x37608e(0x2ab)][_0x37608e(0x32c)][_0x37608e(0x27b)](this);const _0x3f476f=VisuMZ[_0x37608e(0x2ab)]['Settings'][_0x37608e(0x365)];if(this[_0x37608e(0x182)]()){if(_0x3f476f['BoatSpeed'])this[_0x37608e(0x25f)](_0x3f476f[_0x37608e(0x432)]);}else{if(this[_0x37608e(0x434)]()){if(_0x3f476f[_0x37608e(0x106)])this[_0x37608e(0x25f)](_0x3f476f[_0x37608e(0x106)]);}else{if(this[_0x37608e(0x114)]()){if(_0x3f476f[_0x37608e(0x491)])this[_0x37608e(0x25f)](_0x3f476f['AirshipSpeed']);}}}},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x3aa)]=Game_Event['prototype'][_0x2a8554(0x49c)],Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x49c)]=function(_0x1b8b10,_0x1468b6){const _0x41b810=_0x2a8554;VisuMZ[_0x41b810(0x2ab)][_0x41b810(0x3aa)]['call'](this,_0x1b8b10,_0x1468b6),this[_0x41b810(0xee)](),this[_0x41b810(0x41f)](),this[_0x41b810(0x2cd)]();},Game_Map[_0x2a8554(0x1cc)][_0x2a8554(0x150)]=function(_0x2a1937,_0x18a159){const _0x23cebb=_0x2a8554;return _0x2a1937===$gameMap[_0x23cebb(0x200)]()?$dataMap[_0x23cebb(0x411)][_0x18a159]:VisuMZ[_0x23cebb(0xdf)][_0x2a1937][_0x23cebb(0x411)][_0x18a159];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x191)]=Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x2c3)],Game_Event[_0x2a8554(0x1cc)]['event']=function(){const _0x2346a8=_0x2a8554;if(this[_0x2346a8(0x3ce)]!==undefined){const _0x5dd39b=this[_0x2346a8(0x3ce)][_0x2346a8(0x200)],_0xcccc7=this[_0x2346a8(0x3ce)]['eventId'];return $gameMap[_0x2346a8(0x150)](_0x5dd39b,_0xcccc7);}if(this[_0x2346a8(0x33b)]!==undefined){const _0xc5d492=this['_eventCopyData'][_0x2346a8(0x200)],_0x5d89e8=this[_0x2346a8(0x33b)]['eventId'];return $gameMap[_0x2346a8(0x150)](_0xc5d492,_0x5d89e8);}if(this[_0x2346a8(0x2e1)]!==undefined){const _0x32849d=this[_0x2346a8(0x2e1)][_0x2346a8(0x200)],_0x1b8147=this[_0x2346a8(0x2e1)][_0x2346a8(0x465)];return $gameMap[_0x2346a8(0x150)](_0x32849d,_0x1b8147);}if($gameTemp['_spawnData']!==undefined){const _0x4c869b=$gameTemp['_spawnData'][_0x2346a8(0x200)],_0x44206a=$gameTemp['_spawnData'][_0x2346a8(0x465)];return $gameMap['referEvent'](_0x4c869b,_0x44206a);}return VisuMZ[_0x2346a8(0x2ab)][_0x2346a8(0x191)][_0x2346a8(0x27b)](this);},Game_Event['prototype'][_0x2a8554(0x315)]=function(_0x46e749,_0x2d45c0){const _0x579bc0=_0x2a8554;if(_0x46e749===0x0||_0x2d45c0===0x0)return![];if(!VisuMZ['PreloadedMaps'][_0x46e749]&&_0x46e749!==$gameMap[_0x579bc0(0x200)]())return $gameTemp['isPlaytest']()&&console['log'](_0x579bc0(0x35b)[_0x579bc0(0x258)](_0x46e749)),![];return!![];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x211)]=Game_Event['prototype'][_0x2a8554(0x212)],Game_Event['prototype'][_0x2a8554(0x212)]=function(){const _0x4ef168=_0x2a8554;VisuMZ[_0x4ef168(0x2ab)][_0x4ef168(0x211)][_0x4ef168(0x27b)](this),Imported[_0x4ef168(0x210)]&&Input['isPressed'](VisuMZ[_0x4ef168(0x3d4)][_0x4ef168(0x414)][_0x4ef168(0x1a8)][_0x4ef168(0x116)])&&Input[_0x4ef168(0x382)]();},Game_Event['prototype'][_0x2a8554(0xee)]=function(){const _0x1e15c0=_0x2a8554,_0x8228a6=this['event']()[_0x1e15c0(0x20e)];if(_0x8228a6==='')return;if(DataManager['isBattleTest']()||DataManager[_0x1e15c0(0x214)]())return;const _0x458ee0=VisuMZ[_0x1e15c0(0x2ab)][_0x1e15c0(0x414)][_0x1e15c0(0x378)];let _0x6051a0=null,_0x19c34b=0x0,_0x931197=0x0;if(_0x8228a6['match'](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i))_0x19c34b=Number(RegExp['$1']),_0x931197=Number(RegExp['$2']);else{if(_0x8228a6[_0x1e15c0(0x41c)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i))_0x19c34b=Number(RegExp['$1']),_0x931197=Number(RegExp['$2']);else{if(_0x8228a6[_0x1e15c0(0x41c)](/<COPY EVENT:[ ](.*?)>/i)){const _0x5adb5b=String(RegExp['$1'])['toUpperCase']()[_0x1e15c0(0x395)]();_0x6051a0=VisuMZ[_0x1e15c0(0x45c)][_0x5adb5b];if(!_0x6051a0)return;_0x19c34b=_0x6051a0[_0x1e15c0(0x369)],_0x931197=_0x6051a0[_0x1e15c0(0x44d)];}}}if(!this[_0x1e15c0(0x315)](_0x19c34b,_0x931197))return;_0x458ee0[_0x1e15c0(0x4a1)][_0x1e15c0(0x27b)](this,_0x19c34b,_0x931197,this);if(_0x6051a0)_0x6051a0[_0x1e15c0(0x4a1)][_0x1e15c0(0x27b)](this,_0x19c34b,_0x931197,this);this[_0x1e15c0(0x33b)]={'mapId':_0x19c34b,'eventId':_0x931197},this[_0x1e15c0(0x1b9)]=-0x2,this[_0x1e15c0(0x2e5)](),_0x458ee0['PostCopyJS']['call'](this,_0x19c34b,_0x931197,this);if(_0x6051a0)_0x6051a0['PostCopyJS'][_0x1e15c0(0x27b)](this,_0x19c34b,_0x931197,this);$gameMap[_0x1e15c0(0x19c)]();},Game_Event['prototype'][_0x2a8554(0x41f)]=function(){const _0x1525a8=_0x2a8554,_0x36108d=$gameSystem['getPreservedMorphEventData'](this);if(!_0x36108d)return;const _0x2d6faa=_0x36108d[_0x1525a8(0x227)]['toUpperCase']()[_0x1525a8(0x395)]();_0x2d6faa!==_0x1525a8(0x2e3)?this[_0x1525a8(0x3b1)](_0x2d6faa,!![]):this[_0x1525a8(0x25b)](_0x36108d[_0x1525a8(0x200)],_0x36108d[_0x1525a8(0x465)],!![]);},Game_Event[_0x2a8554(0x1cc)]['morphInto']=function(_0x2509af,_0x745a5f,_0x513b02){const _0x507f76=_0x2a8554;if(!this[_0x507f76(0x315)](_0x2509af,_0x745a5f))return;const _0x4faa6c=VisuMZ[_0x507f76(0x2ab)][_0x507f76(0x414)][_0x507f76(0x378)];if(!_0x513b02)_0x4faa6c[_0x507f76(0x10e)][_0x507f76(0x27b)](this,_0x2509af,_0x745a5f,this);this[_0x507f76(0x3ce)]={'mapId':_0x2509af,'eventId':_0x745a5f},this[_0x507f76(0x1b9)]=-0x2,this[_0x507f76(0x2e5)]();if(!_0x513b02)_0x4faa6c[_0x507f76(0x234)][_0x507f76(0x27b)](this,_0x2509af,_0x745a5f,this);$gameMap['clearEventCache']();},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x3b1)]=function(_0x58fba4,_0x7c45da){const _0x1a0a5e=_0x2a8554;_0x58fba4=_0x58fba4[_0x1a0a5e(0x3fe)]()[_0x1a0a5e(0x395)]();const _0x5d16c0=VisuMZ[_0x1a0a5e(0x45c)][_0x58fba4];if(!_0x5d16c0)return;const _0x4875d6=_0x5d16c0[_0x1a0a5e(0x369)],_0x349bf4=_0x5d16c0[_0x1a0a5e(0x44d)];if(!this[_0x1a0a5e(0x315)](_0x4875d6,_0x349bf4))return;if(!_0x7c45da)_0x5d16c0[_0x1a0a5e(0x10e)][_0x1a0a5e(0x27b)](this,_0x4875d6,_0x349bf4,this);this[_0x1a0a5e(0x25b)](_0x4875d6,_0x349bf4,_0x7c45da);if(!_0x7c45da)_0x5d16c0[_0x1a0a5e(0x234)][_0x1a0a5e(0x27b)](this,_0x4875d6,_0x349bf4,this);if($gameMap)$gameMap['clearEventCache']();},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x1fa)]=function(){const _0x3b27ce=_0x2a8554;this[_0x3b27ce(0x3ce)]=undefined,this['_pageIndex']=-0x2,this[_0x3b27ce(0x2e5)]();},Game_Event['prototype'][_0x2a8554(0x1de)]=function(_0xf64b1d){const _0x1f52a4=_0x2a8554,_0x5cf922=VisuMZ[_0x1f52a4(0x2ab)][_0x1f52a4(0x414)][_0x1f52a4(0x378)],_0x186f41=_0xf64b1d[_0x1f52a4(0x227)][_0x1f52a4(0x3fe)]()[_0x1f52a4(0x395)](),_0x5f4d80=!['',_0x1f52a4(0x2e3)][_0x1f52a4(0x104)](_0x186f41);let _0x5c70c6=0x0,_0x4068d4=0x0;if(_0x5f4d80){const _0x3076d3=VisuMZ[_0x1f52a4(0x45c)][_0x186f41];if(!_0x3076d3)return;_0x5c70c6=_0x3076d3['MapID'],_0x4068d4=_0x3076d3[_0x1f52a4(0x44d)];}else _0x5c70c6=_0xf64b1d[_0x1f52a4(0x200)],_0x4068d4=_0xf64b1d['eventId'];if(!this[_0x1f52a4(0x315)](_0x5c70c6,_0x4068d4))return;if(_0x5f4d80){const _0x4f3f3b=VisuMZ[_0x1f52a4(0x45c)][_0x186f41];_0x4f3f3b[_0x1f52a4(0x175)]['call'](this,_0x5c70c6,_0x4068d4,this);}_0x5cf922['PreSpawnJS'][_0x1f52a4(0x27b)](this,_0x5c70c6,_0x4068d4,this),this[_0x1f52a4(0x2e1)]=_0xf64b1d,this[_0x1f52a4(0x1b9)]=-0x2,this[_0x1f52a4(0x403)]=$gameMap[_0x1f52a4(0x200)](),this['_eventId']=_0xf64b1d[_0x1f52a4(0x218)],this[_0x1f52a4(0x339)]=_0xf64b1d[_0x1f52a4(0x293)],this[_0x1f52a4(0x1df)](_0xf64b1d['x'],_0xf64b1d['y']),this['setDirection'](_0xf64b1d[_0x1f52a4(0x43a)]),this['refresh']();if(_0x5f4d80){const _0xed7cff=VisuMZ[_0x1f52a4(0x45c)][_0x186f41];if(!_0xed7cff)return;_0xed7cff[_0x1f52a4(0x37a)]['call'](this,_0x5c70c6,_0x4068d4,this);}_0x5cf922[_0x1f52a4(0x37a)][_0x1f52a4(0x27b)](this,_0x5c70c6,_0x4068d4,this);const _0xf809d0=SceneManager[_0x1f52a4(0x3cd)];if(_0xf809d0&&_0xf809d0[_0x1f52a4(0x47e)])_0xf809d0[_0x1f52a4(0x47e)][_0x1f52a4(0x1e1)](this);},Game_Event[_0x2a8554(0x1cc)]['isSpawnedEvent']=function(){const _0x467f99=_0x2a8554;return!!this[_0x467f99(0x2e1)];},VisuMZ['EventsMoveCore'][_0x2a8554(0xec)]=Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x297)],Game_Event['prototype'][_0x2a8554(0x297)]=function(){const _0x2cddf2=_0x2a8554;VisuMZ['EventsMoveCore'][_0x2cddf2(0xec)][_0x2cddf2(0x27b)](this),this['initEventsMoveCoreEffects']();},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x34c)]=Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x119)],Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x119)]=function(){const _0x357718=_0x2a8554;this[_0x357718(0x3cc)]=!![],VisuMZ['EventsMoveCore'][_0x357718(0x34c)][_0x357718(0x27b)](this),this[_0x357718(0x222)](),this[_0x357718(0x3cc)]=![];},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x222)]=function(){const _0x4ffc13=_0x2a8554;if(!this['event']())return;this[_0x4ffc13(0x190)](),this[_0x4ffc13(0x409)](),this[_0x4ffc13(0x39a)](),this['updateEventsMoveCoreTagChanges']();},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x409)]=function(){const _0x1db417=_0x2a8554,_0x54438e=this[_0x1db417(0x2c3)]()[_0x1db417(0x20e)];if(_0x54438e==='')return;this[_0x1db417(0x3b8)](_0x54438e);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x39a)]=function(){const _0x5d2f3d=_0x2a8554;if(!this[_0x5d2f3d(0x33a)]())return;const _0x2b464d=this[_0x5d2f3d(0x18d)]();let _0x52fa2c='';for(const _0x40e7dd of _0x2b464d){if([0x6c,0x198][_0x5d2f3d(0x104)](_0x40e7dd[_0x5d2f3d(0x3e0)])){if(_0x52fa2c!=='')_0x52fa2c+='\x0a';_0x52fa2c+=_0x40e7dd[_0x5d2f3d(0x394)][0x0];}}this[_0x5d2f3d(0x3b8)](_0x52fa2c);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x190)]=function(){const _0x2846bb=_0x2a8554,_0x341ad3=VisuMZ['EventsMoveCore']['Settings'];this[_0x2846bb(0x23d)]={'type':'none','distance':0x0,'regionList':[]},this[_0x2846bb(0x360)]=![],this['_clickTrigger']=![],this[_0x2846bb(0x31f)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this['_eventIcon']=$gameSystem[_0x2846bb(0x1fd)](this),this['_labelWindow']={'text':'','visibleRange':_0x341ad3[_0x2846bb(0x38e)][_0x2846bb(0x3f1)],'offsetX':_0x341ad3[_0x2846bb(0x38e)][_0x2846bb(0x419)],'offsetY':_0x341ad3[_0x2846bb(0x38e)][_0x2846bb(0x354)]},this[_0x2846bb(0x3c3)]=[],this[_0x2846bb(0x402)]={'target':-0x1,'type':'random','delay':0x1},this['_randomMoveWeight']=_0x341ad3['Movement']['RandomMoveWeight']??0x0,this[_0x2846bb(0x3ff)]=![],this[_0x2846bb(0x3a8)]={'visible':!![],'filename':_0x341ad3[_0x2846bb(0x365)][_0x2846bb(0x401)]},this[_0x2846bb(0x400)](),this[_0x2846bb(0x281)]();},Game_Event['prototype'][_0x2a8554(0x3b8)]=function(_0x3e1bd6){const _0xe4dde3=_0x2a8554;if(_0x3e1bd6[_0xe4dde3(0x41c)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this['_activationProximity'][_0xe4dde3(0x216)]=JSON[_0xe4dde3(0x452)]('['+RegExp['$1'][_0xe4dde3(0x41c)](/\d+/g)+']'),this['_activationProximity'][_0xe4dde3(0x22c)]='region';else _0x3e1bd6[_0xe4dde3(0x41c)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0xe4dde3(0x358)]()[_0xe4dde3(0x395)](),this[_0xe4dde3(0x23d)][_0xe4dde3(0x22c)]=type,this['_activationProximity'][_0xe4dde3(0x428)]=Number(RegExp['$2']));_0x3e1bd6[_0xe4dde3(0x41c)](/<ALWAYS UPDATE MOVEMENT>/i)&&(this[_0xe4dde3(0x360)]=!![]);_0x3e1bd6['match'](/<CLICK TRIGGER>/i)&&(this[_0xe4dde3(0x380)]=!![]);const _0x41cd6f=_0x3e1bd6[_0xe4dde3(0x41c)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x41cd6f)for(const _0x3487d5 of _0x41cd6f){if(_0x3487d5['match'](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0xe6421=String(RegExp['$1'])[_0xe4dde3(0x358)]()[_0xe4dde3(0x395)](),_0x244334=Number(RegExp['$2']);this[_0xe4dde3(0x31f)][_0xe6421]=_0x244334;}}_0x3e1bd6[_0xe4dde3(0x41c)](/<ICON:[ ](\d+)>/i)&&(this[_0xe4dde3(0x2ed)]['iconIndex']=Number(RegExp['$1']));_0x3e1bd6[_0xe4dde3(0x41c)](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0xe4dde3(0x3fc)]=Number(RegExp['$1']));_0x3e1bd6[_0xe4dde3(0x41c)](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0xe4dde3(0x2ed)]['bufferY']=Number(RegExp['$1']));_0x3e1bd6[_0xe4dde3(0x41c)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0xe4dde3(0x2ed)][_0xe4dde3(0x3fc)]=Number(RegExp['$1']),this[_0xe4dde3(0x2ed)][_0xe4dde3(0x3d5)]=Number(RegExp['$2']));if(_0x3e1bd6[_0xe4dde3(0x41c)](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x512cea=String(RegExp['$1'])[_0xe4dde3(0x3fe)]()['trim'](),_0x503789=[_0xe4dde3(0x49d),'ADDITIVE',_0xe4dde3(0x14e),_0xe4dde3(0x14b)];this[_0xe4dde3(0x2ed)][_0xe4dde3(0x3bb)]=_0x503789[_0xe4dde3(0x2f4)](_0x512cea)['clamp'](0x0,0x3);}_0x3e1bd6[_0xe4dde3(0x41c)](/<LABEL:[ ](.*?)>/i)&&(this['_labelWindow'][_0xe4dde3(0x262)]=String(RegExp['$1'])[_0xe4dde3(0x395)]());_0x3e1bd6[_0xe4dde3(0x41c)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)&&(this['_labelWindow']['text']=String(RegExp['$1'])[_0xe4dde3(0x395)]());_0x3e1bd6['match'](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0xe4dde3(0x130)][_0xe4dde3(0x228)]=Number(RegExp['$1']));_0x3e1bd6[_0xe4dde3(0x41c)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0xe4dde3(0x130)][_0xe4dde3(0x348)]=Number(RegExp['$1']));_0x3e1bd6[_0xe4dde3(0x41c)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0xe4dde3(0x130)]['offsetX']=Number(RegExp['$1']),this['_labelWindow'][_0xe4dde3(0x348)]=Number(RegExp['$2']));$gameTemp[_0xe4dde3(0x1d4)](this);for(;;){if(this['_labelWindow'][_0xe4dde3(0x262)][_0xe4dde3(0x41c)](/\\V\[(\d+)\]/gi))this[_0xe4dde3(0x130)][_0xe4dde3(0x262)]=this['_labelWindow'][_0xe4dde3(0x262)][_0xe4dde3(0x3d9)](/\\V\[(\d+)\]/gi,(_0x3cb41a,_0x333f50)=>$gameVariables[_0xe4dde3(0x44a)](parseInt(_0x333f50)));else break;}$gameTemp[_0xe4dde3(0x393)]();_0x3e1bd6[_0xe4dde3(0x41c)](/<LABEL RANGE:[ ](\d+)>/i)&&(this[_0xe4dde3(0x130)]['visibleRange']=Number(RegExp['$1']));if(_0x3e1bd6['match'](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0xe4761e=JSON[_0xe4dde3(0x452)]('['+RegExp['$1'][_0xe4dde3(0x41c)](/\d+/g)+']');this[_0xe4dde3(0x3c3)]=this[_0xe4dde3(0x3c3)]['concat'](_0xe4761e),this[_0xe4dde3(0x3c3)]['remove'](0x0);}if(_0x3e1bd6['match'](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x560b0d=String(RegExp['$1']);if(_0x560b0d[_0xe4dde3(0x41c)](/PLAYER/i))this[_0xe4dde3(0x402)]['target']=0x0;else _0x560b0d[_0xe4dde3(0x41c)](/EVENT[ ](\d+)/i)&&(this['_moveSynch'][_0xe4dde3(0x3f5)]=Number(RegExp['$1']));}_0x3e1bd6[_0xe4dde3(0x41c)](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this[_0xe4dde3(0x402)]['type']=String(RegExp['$1'])[_0xe4dde3(0x358)]()[_0xe4dde3(0x395)]());_0x3e1bd6[_0xe4dde3(0x41c)](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this[_0xe4dde3(0x402)]['delay']=Number(RegExp['$1']));if(_0x3e1bd6[_0xe4dde3(0x41c)](/<TRUE RANDOM MOVE>/i))this[_0xe4dde3(0x387)]=0x0;else _0x3e1bd6[_0xe4dde3(0x41c)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(this[_0xe4dde3(0x387)]=Number(RegExp['$1'])||0x0);_0x3e1bd6['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0xe4dde3(0x3ff)]=!![]),_0x3e1bd6[_0xe4dde3(0x41c)](/<HIDE SHADOW>/i)&&(this['_shadowGraphic'][_0xe4dde3(0x10a)]=![]),_0x3e1bd6[_0xe4dde3(0x41c)](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0xe4dde3(0x3a8)][_0xe4dde3(0x3de)]=String(RegExp['$1'])),_0x3e1bd6[_0xe4dde3(0x41c)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0xe4dde3(0x34b)]=Number(RegExp['$1'])),_0x3e1bd6[_0xe4dde3(0x41c)](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0xe4dde3(0x373)]=Number(RegExp['$1'])),_0x3e1bd6['match'](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0xe4dde3(0x34b)]=Number(RegExp['$1']),this['_spriteOffsetY']=Number(RegExp['$2'])),_0x3e1bd6[_0xe4dde3(0x41c)](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0xe4dde3(0x48a)]=String(RegExp['$1'])[_0xe4dde3(0x3fe)]()['trim']());},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x44b)]=function(){this['updateShadowChanges']();},Game_Event[_0x2a8554(0x1cc)]['isNearTheScreen']=function(){const _0x319de2=_0x2a8554;if(this[_0x319de2(0x360)])return!![];return Game_Character[_0x319de2(0x1cc)][_0x319de2(0x2b7)][_0x319de2(0x27b)](this);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x46b)]=Game_Event[_0x2a8554(0x1cc)]['updateSelfMovement'],Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x40b)]=function(){const _0x52cd25=_0x2a8554;if(this[_0x52cd25(0x1cf)]())return;VisuMZ[_0x52cd25(0x2ab)][_0x52cd25(0x46b)]['call'](this),this[_0x52cd25(0x42f)]()&&VisuMZ[_0x52cd25(0x321)](this['_eventId']);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x1cf)]=function(){const _0x413969=_0x2a8554,_0x1a9482=VisuMZ[_0x413969(0x2ab)][_0x413969(0x414)][_0x413969(0x365)];if($gameMap[_0x413969(0x10f)]()&&_0x1a9482[_0x413969(0x3d8)])return!![];if($gameMessage[_0x413969(0x36c)]()&&_0x1a9482[_0x413969(0x1f3)])return!![];if(!$gameSystem[_0x413969(0x237)]())return!![];if(this[_0x413969(0x294)]()>=0x0)return!![];return![];},Game_Event['prototype']['updateShadowChanges']=function(){const _0x14a329=_0x2a8554,_0x4afd3f=SceneManager[_0x14a329(0x3cd)][_0x14a329(0x47e)];if(_0x4afd3f){const _0x14a89c=_0x4afd3f[_0x14a329(0x406)](this);_0x14a89c&&_0x14a89c[_0x14a329(0x422)]&&_0x14a89c['_shadowSprite'][_0x14a329(0x317)]!==this[_0x14a329(0x153)]()&&(_0x14a89c[_0x14a329(0x422)][_0x14a329(0x317)]=this[_0x14a329(0x153)](),_0x14a89c[_0x14a329(0x422)][_0x14a329(0x198)]=ImageManager[_0x14a329(0x194)](_0x14a89c[_0x14a329(0x422)][_0x14a329(0x317)]));}},Game_Event['prototype'][_0x2a8554(0x153)]=function(){const _0x20d6f9=_0x2a8554;return this[_0x20d6f9(0x3a8)][_0x20d6f9(0x3de)];},Game_Event['prototype'][_0x2a8554(0x128)]=function(){const _0x239407=_0x2a8554;if(!this['_shadowGraphic'][_0x239407(0x10a)])return![];return Game_CharacterBase[_0x239407(0x1cc)]['isShadowVisible']['call'](this);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x2d7)]=function(){const _0x1702f1=_0x2a8554;return this['_labelWindow'][_0x1702f1(0x262)];},Game_Event['prototype'][_0x2a8554(0x47f)]=function(){const _0x4e02f2=_0x2a8554;return this[_0x4e02f2(0x130)][_0x4e02f2(0x3f3)];},Game_Event[_0x2a8554(0x1cc)]['isMapPassable']=function(_0x5db5f8,_0x169418,_0x25b808){const _0x50c951=_0x2a8554;if(this[_0x50c951(0x337)]())return this[_0x50c951(0x120)](_0x5db5f8,_0x169418,_0x25b808);if($gameMap[_0x50c951(0x361)](_0x5db5f8,_0x169418,_0x25b808,_0x50c951(0x2c3)))return!![];if($gameMap[_0x50c951(0x12e)](_0x5db5f8,_0x169418,_0x25b808,'event'))return![];return Game_Character[_0x50c951(0x1cc)][_0x50c951(0x17d)][_0x50c951(0x27b)](this,_0x5db5f8,_0x169418,_0x25b808);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x337)]=function(){const _0x70ea83=_0x2a8554;if(this['_moveOnlyRegions']===undefined)this[_0x70ea83(0x190)]();return this['_moveOnlyRegions'][_0x70ea83(0x4a8)]>0x0;},Game_Event['prototype'][_0x2a8554(0x120)]=function(_0x198405,_0x27ca94,_0x3eb521){const _0x1e2cff=_0x2a8554,_0x4dc88d=$gameMap['roundXWithDirection'](_0x198405,_0x3eb521),_0x466010=$gameMap[_0x1e2cff(0x13a)](_0x27ca94,_0x3eb521),_0x1a22a9=$gameMap[_0x1e2cff(0x33d)](_0x4dc88d,_0x466010);return this['_moveOnlyRegions'][_0x1e2cff(0x104)](_0x1a22a9);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x268)]=Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0xf6)],Game_Event['prototype'][_0x2a8554(0xf6)]=function(){const _0x3c1df8=_0x2a8554;return this[_0x3c1df8(0x34a)]=![],this[_0x3c1df8(0x1e3)]=![],this[_0x3c1df8(0x2c3)]()?VisuMZ[_0x3c1df8(0x2ab)][_0x3c1df8(0x268)][_0x3c1df8(0x27b)](this):-0x1;},VisuMZ['EventsMoveCore'][_0x2a8554(0x3f2)]=Game_Event['prototype']['meetsConditions'],Game_Event[_0x2a8554(0x1cc)]['meetsConditions']=function(_0x2127e3){const _0x221a55=_0x2a8554;this[_0x221a55(0x46c)](_0x2127e3),$gameTemp[_0x221a55(0x1d4)](this);const _0xc45f48=VisuMZ['EventsMoveCore']['Game_Event_meetsConditions']['call'](this,_0x2127e3);return $gameTemp['clearSelfTarget'](),_0xc45f48;},Game_Event[_0x2a8554(0x1cc)]['hasAdvancedSwitchVariable']=function(){return this['_advancedSwitchVariable'];},Game_Event[_0x2a8554(0x1cc)]['checkAdvancedSwitchVariablePresent']=function(_0x476d8a){const _0x34d2e2=_0x2a8554,_0x5c1014=_0x476d8a[_0x34d2e2(0x121)];if(_0x5c1014[_0x34d2e2(0x23c)]&&DataManager[_0x34d2e2(0x28d)](_0x5c1014[_0x34d2e2(0x4a4)]))this['_advancedSwitchVariable']=!![];else{if(_0x5c1014[_0x34d2e2(0xef)]&&DataManager[_0x34d2e2(0x28d)](_0x5c1014[_0x34d2e2(0x35e)]))this['_advancedSwitchVariable']=!![];else _0x5c1014[_0x34d2e2(0x46a)]&&DataManager[_0x34d2e2(0x447)](_0x5c1014[_0x34d2e2(0x155)])&&(this['_advancedSwitchVariable']=!![]);}},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x20d)]=function(){const _0x3b8d12=_0x2a8554;if(this[_0x3b8d12(0x3b4)])return![];return this[_0x3b8d12(0x380)];},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x323)]=function(){const _0x491cd5=_0x2a8554;$gameTemp[_0x491cd5(0x35d)](),this['start']();},Game_Event['prototype']['pos']=function(_0x54776c,_0x234bb0){const _0x4aa653=_0x2a8554;return this[_0x4aa653(0x31f)]?this[_0x4aa653(0x122)](_0x54776c,_0x234bb0):Game_Character[_0x4aa653(0x1cc)][_0x4aa653(0x375)][_0x4aa653(0x27b)](this,_0x54776c,_0x234bb0);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x122)]=function(_0x162b66,_0x5c1ba6){const _0x36cfdc=_0x2a8554;var _0x24ac4a=this['x']-this[_0x36cfdc(0x31f)][_0x36cfdc(0x135)],_0x3cc9d8=this['x']+this[_0x36cfdc(0x31f)][_0x36cfdc(0x474)],_0x464137=this['y']-this['_addedHitbox']['up'],_0x3347c5=this['y']+this[_0x36cfdc(0x31f)][_0x36cfdc(0x3b2)];return _0x24ac4a<=_0x162b66&&_0x162b66<=_0x3cc9d8&&_0x464137<=_0x5c1ba6&&_0x5c1ba6<=_0x3347c5;},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x30c)]=function(_0xba083c,_0x54bb1c,_0x3bf261){const _0x3f728a=_0x2a8554;for(let _0x5e1a11=-this[_0x3f728a(0x31f)][_0x3f728a(0x135)];_0x5e1a11<=this['_addedHitbox'][_0x3f728a(0x474)];_0x5e1a11++){for(let _0x1f532a=-this['_addedHitbox']['up'];_0x1f532a<=this[_0x3f728a(0x31f)][_0x3f728a(0x3b2)];_0x1f532a++){if(!Game_Character[_0x3f728a(0x1cc)][_0x3f728a(0x30c)]['call'](this,_0xba083c+_0x5e1a11,_0x54bb1c+_0x1f532a,_0x3bf261))return![];}}return!![];},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x28a)]=function(_0x2aa66c,_0x3c9894){const _0x450c41=_0x2a8554;if(Imported[_0x450c41(0x31a)]&&this[_0x450c41(0x12a)]())return this[_0x450c41(0x2cb)](_0x2aa66c,_0x3c9894);else{const _0x47e4c6=$gameMap[_0x450c41(0x4a3)](_0x2aa66c,_0x3c9894)[_0x450c41(0x448)](_0x3c3c9e=>_0x3c3c9e!==this);return _0x47e4c6[_0x450c41(0x4a8)]>0x0;}},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x2cb)]=function(_0x3a0b79,_0x4a2d2d){const _0x339e5b=_0x2a8554;if(!this[_0x339e5b(0x493)]())return![];else{const _0x5c6257=$gameMap['eventsXyNt'](_0x3a0b79,_0x4a2d2d)[_0x339e5b(0x448)](_0xbe2d9d=>_0xbe2d9d!==this&&_0xbe2d9d[_0x339e5b(0x493)]());return _0x5c6257[_0x339e5b(0x4a8)]>0x0;}},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x17a)]=function(){const _0x2ce90d=_0x2a8554;return this[_0x2ce90d(0x23d)][_0x2ce90d(0x22c)]||_0x2ce90d(0x2d1);},Game_Event['prototype'][_0x2a8554(0x1ed)]=function(){const _0x4088e5=_0x2a8554;return this[_0x4088e5(0x23d)][_0x4088e5(0x428)]||0x0;},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x247)]=function(){const _0x3c3098=_0x2a8554;return this[_0x3c3098(0x23d)][_0x3c3098(0x216)]||[];},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x306)]=function(){const _0x903ef3=_0x2a8554;Game_Character[_0x903ef3(0x1cc)][_0x903ef3(0x306)]['call'](this);if([_0x903ef3(0x2d1),_0x903ef3(0x10d)][_0x903ef3(0x104)](this['activationProximityType']()))return;$gamePlayer['checkEventTriggerEventsMoveCore']([0x2]);},VisuMZ[_0x2a8554(0x2ab)]['Game_Event_checkEventTriggerAuto']=Game_Event[_0x2a8554(0x1cc)]['checkEventTriggerAuto'],Game_Event['prototype'][_0x2a8554(0xdd)]=function(){const _0x493040=_0x2a8554;if(this[_0x493040(0x27a)]!==0x3)return;if(this['_activationProximityAutoTriggerBypass'])return;if(!this[_0x493040(0x286)](![]))return;if(!this[_0x493040(0xcc)](![]))return;VisuMZ['EventsMoveCore']['Game_Event_checkEventTriggerAuto'][_0x493040(0x27b)](this);},VisuMZ[_0x2a8554(0x2ab)]['Game_Event_updateParallel']=Game_Event['prototype']['updateParallel'],Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x3e8)]=function(){const _0xde77c8=_0x2a8554;if(!this['_interpreter'])return;if(!this[_0xde77c8(0x286)](!![]))return;if(!this[_0xde77c8(0xcc)](!![]))return;VisuMZ[_0xde77c8(0x2ab)][_0xde77c8(0x156)]['call'](this);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x286)]=function(_0x384fba){const _0x21dfc1=_0x2a8554;if(!_0x384fba&&$gameMap['isEventRunning']())return![];if(!_0x384fba&&$gameMap[_0x21dfc1(0x185)]())return![];if(this[_0x21dfc1(0x247)]()<=0x0)return!![];return $gamePlayer['meetActivationRegionConditions'](this);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0xcc)]=function(_0x1f335f){const _0x64917b=_0x2a8554;if(!_0x1f335f&&$gameMap[_0x64917b(0x10f)]())return![];if(!_0x1f335f&&$gameMap[_0x64917b(0x185)]())return![];if([_0x64917b(0x2d1),_0x64917b(0x10d)][_0x64917b(0x104)](this[_0x64917b(0x17a)]()))return!![];return $gamePlayer[_0x64917b(0x460)](this);},VisuMZ[_0x2a8554(0x321)]=function(_0x3435e3){const _0x1649a4=_0x2a8554;for(const _0x4b5925 of $gameMap[_0x1649a4(0x411)]()){if(!_0x4b5925)continue;_0x4b5925['moveSynchTarget']()===_0x3435e3&&_0x4b5925[_0x1649a4(0x366)]();}},VisuMZ[_0x2a8554(0x2be)]=function(_0x95f900){const _0xca7f1b=_0x2a8554;if(_0x95f900===0x0)return $gamePlayer;return $gameMap[_0xca7f1b(0x2c3)](_0x95f900);},Game_Event['prototype'][_0x2a8554(0x294)]=function(){const _0x5b2c2f=_0x2a8554;return this[_0x5b2c2f(0x402)][_0x5b2c2f(0x3f5)];},Game_Event[_0x2a8554(0x1cc)]['moveSynchType']=function(){const _0x569867=_0x2a8554;return this[_0x569867(0x402)][_0x569867(0x22c)];},Game_Event['prototype'][_0x2a8554(0x13c)]=function(){const _0x414004=_0x2a8554;if(this['moveSynchTarget']()>=0x0){const _0x1b63ac=VisuMZ[_0x414004(0x2be)](this['moveSynchTarget']());if(_0x1b63ac)return _0x1b63ac[_0x414004(0x13c)]();}return Game_Character['prototype'][_0x414004(0x13c)]['call'](this);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x366)]=function(){const _0x15b26d=_0x2a8554;this[_0x15b26d(0x402)][_0x15b26d(0x174)]=this[_0x15b26d(0x402)]['timer']||0x0,this[_0x15b26d(0x402)][_0x15b26d(0x174)]--;if(this['_moveSynch']['timer']>0x0)return;this['_moveSynch'][_0x15b26d(0x174)]=this['_moveSynch'][_0x15b26d(0x17b)],this[_0x15b26d(0x481)]();},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x481)]=function(){const _0x5b5609=_0x2a8554;switch(this[_0x5b5609(0x2c8)]()){case _0x5b5609(0xea):this[_0x5b5609(0x329)]();break;case _0x5b5609(0x3ef):this[_0x5b5609(0x310)]();break;case'away':this['processMoveSynchAway']();break;case _0x5b5609(0x4a6):this[_0x5b5609(0x28e)]();break;case _0x5b5609(0x1a9):case _0x5b5609(0x154):this['processMoveSynchMimic']();break;case _0x5b5609(0x39e):case _0x5b5609(0xd7):this['processMoveSynchReverseMimic']();break;case'mirror\x20horizontal':case _0x5b5609(0x480):case _0x5b5609(0x3ad):case _0x5b5609(0x28c):this[_0x5b5609(0x16e)]();break;case _0x5b5609(0x11e):case _0x5b5609(0x1a1):case _0x5b5609(0x4b6):case _0x5b5609(0x467):this[_0x5b5609(0x343)]();break;default:this['processMoveSynchRandom']();break;}this['update']();},Game_Event['prototype'][_0x2a8554(0x329)]=function(){const _0x546b6c=_0x2a8554,_0x1320a1=[0x2,0x4,0x6,0x8];$gameMap[_0x546b6c(0x21b)]()&&_0x1320a1[_0x546b6c(0x42b)](0x1,0x3,0x7,0x9);const _0x4adbed=[];for(const _0x5507f0 of _0x1320a1){if(this[_0x546b6c(0x30c)](this['x'],this['y'],_0x5507f0))_0x4adbed[_0x546b6c(0x42b)](_0x5507f0);}if(_0x4adbed[_0x546b6c(0x4a8)]>0x0){const _0x188bb5=_0x4adbed[Math[_0x546b6c(0x204)](_0x4adbed[_0x546b6c(0x4a8)])];this[_0x546b6c(0x276)](_0x188bb5);}},Game_Event['prototype']['processMoveSynchApproach']=function(){const _0x3c49b9=_0x2a8554,_0x3b7d82=VisuMZ['GetMoveSynchTarget'](this[_0x3c49b9(0x294)]());this[_0x3c49b9(0x205)](_0x3b7d82);},Game_Event[_0x2a8554(0x1cc)]['processMoveSynchAway']=function(){const _0x322ac4=_0x2a8554,_0x199c0d=VisuMZ[_0x322ac4(0x2be)](this[_0x322ac4(0x294)]());this[_0x322ac4(0x307)](_0x199c0d);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x28e)]=function(){const _0x422ae8=_0x2a8554;this[_0x422ae8(0x2aa)]();},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x42c)]=function(){const _0x529174=_0x2a8554,_0x3d4001=VisuMZ['GetMoveSynchTarget'](this[_0x529174(0x294)]());this['executeMoveDir8'](_0x3d4001[_0x529174(0xd9)]());},Game_Event['prototype']['processMoveSynchReverseMimic']=function(){const _0x319655=_0x2a8554,_0x1cd6c7=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']()),_0x4616d1=this[_0x319655(0x283)](_0x1cd6c7[_0x319655(0xd9)]());this[_0x319655(0x276)](this[_0x319655(0x283)](_0x1cd6c7['direction']()));},Game_Event[_0x2a8554(0x1cc)]['processMoveSynchMirrorHorz']=function(){const _0x22728c=_0x2a8554,_0x2220ff=VisuMZ['GetMoveSynchTarget'](this[_0x22728c(0x294)]()),_0x4e5341=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x2220ff[_0x22728c(0xd9)]()];this[_0x22728c(0x276)](_0x4e5341);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x343)]=function(){const _0x32cdbc=_0x2a8554,_0x1a84e7=VisuMZ[_0x32cdbc(0x2be)](this[_0x32cdbc(0x294)]()),_0x12e3eb=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x1a84e7['lastMovedDirection']()];this[_0x32cdbc(0x276)](_0x12e3eb);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x2cd)]=function(){const _0x50ce01=_0x2a8554,_0x12cd8c=$gameSystem['getSavedEventLocation'](this);if(!_0x12cd8c)return;this[_0x50ce01(0x1df)](_0x12cd8c['x'],_0x12cd8c['y']),this['setDirection'](_0x12cd8c[_0x50ce01(0x43a)]),this[_0x50ce01(0x1b9)]===_0x12cd8c[_0x50ce01(0x45b)]&&(this['_moveRouteIndex']=_0x12cd8c['moveRouteIndex']);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x171)]=function(){const _0x26d0c1=_0x2a8554;Game_Character[_0x26d0c1(0x1cc)]['updateMove']['call'](this),this[_0x26d0c1(0x29c)]();},Game_Event[_0x2a8554(0x1cc)]['isSaveEventLocation']=function(){const _0x265266=_0x2a8554;if($gameMap[_0x265266(0x107)]())return!![];return this['_saveEventLocation'];},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x29c)]=function(){if(!this['isSaveEventLocation']())return;this['saveEventLocation']();},Game_Event[_0x2a8554(0x1cc)]['saveEventLocation']=function(){const _0x108278=_0x2a8554;$gameSystem[_0x108278(0x21e)](this);},Game_Event['prototype'][_0x2a8554(0x254)]=function(){$gameSystem['deleteSavedEventLocation'](this);},Game_Event['prototype'][_0x2a8554(0x1fd)]=function(){const _0x30b8fc=_0x2a8554;return $gameSystem[_0x30b8fc(0x1fd)](this)?Game_Character[_0x30b8fc(0x1cc)][_0x30b8fc(0x1fd)][_0x30b8fc(0x27b)](this):{'iconIndex':0x0,'bufferX':settings['Icon']['BufferX'],'bufferY':settings['Icon'][_0x30b8fc(0x2fa)],'blendMode':settings[_0x30b8fc(0x350)][_0x30b8fc(0x2fc)]};},Game_Event['prototype'][_0x2a8554(0x111)]=function(){const _0x1c3ce1=_0x2a8554;return this[_0x1c3ce1(0x1e3)];},VisuMZ[_0x2a8554(0x2ab)]['Game_Event_meetsConditionsCPC']=Game_Event[_0x2a8554(0x1cc)]['meetsConditions'],Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x292)]=function(_0xb420b7){const _0x2517b1=_0x2a8554,_0x2c422b=VisuMZ[_0x2517b1(0x2ab)]['Game_Event_meetsConditionsCPC'][_0x2517b1(0x27b)](this,_0xb420b7);if(!_0x2c422b)return![];return this[_0x2517b1(0x124)](_0xb420b7);},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x124)]=function(_0x4ab9eb){const _0x675600=_0x2a8554;VisuMZ[_0x675600(0x2ab)][_0x675600(0x2df)][_0x675600(0x3a2)](_0x4ab9eb),this[_0x675600(0x1e3)]=_0x4ab9eb[_0x675600(0x39f)]['length']>0x0;_0x4ab9eb[_0x675600(0x39f)]===undefined&&VisuMZ[_0x675600(0x2ab)]['CustomPageConditions'][_0x675600(0x3a2)](_0x4ab9eb);if(_0x4ab9eb[_0x675600(0x39f)][_0x675600(0x4a8)]>0x0)return $gameMap[_0x675600(0x2c3)](this['_eventId'])&&VisuMZ[_0x675600(0x2ab)][_0x675600(0x2df)][_0x675600(0x344)](_0x4ab9eb[_0x675600(0x39f)],this[_0x675600(0x301)]);return!![];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x435)]=Game_Troop[_0x2a8554(0x1cc)][_0x2a8554(0x292)],Game_Troop[_0x2a8554(0x1cc)]['meetsConditions']=function(_0xf4ad1d){const _0x77e959=_0x2a8554;var _0x238cc3=VisuMZ[_0x77e959(0x2ab)][_0x77e959(0x435)]['call'](this,_0xf4ad1d);return _0x238cc3&&this['CPCsMet'](_0xf4ad1d);},Game_Troop['prototype'][_0x2a8554(0x479)]=function(_0x13dd4e){const _0x3530ae=_0x2a8554;_0x13dd4e[_0x3530ae(0x39f)]===undefined&&VisuMZ[_0x3530ae(0x2ab)][_0x3530ae(0x2df)][_0x3530ae(0x3a2)](_0x13dd4e);if(_0x13dd4e['CPC']['length']>0x0)return VisuMZ[_0x3530ae(0x2ab)]['CustomPageConditions'][_0x3530ae(0x344)](_0x13dd4e['CPC'],0x0);return!![];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x383)]=Game_Event[_0x2a8554(0x1cc)]['locate'],Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x1df)]=function(_0x3bcf54,_0x11d582){const _0x2e8424=_0x2a8554;VisuMZ['EventsMoveCore'][_0x2e8424(0x383)][_0x2e8424(0x27b)](this,_0x3bcf54,_0x11d582),this['_randomHomeX']=_0x3bcf54,this[_0x2e8424(0x430)]=_0x11d582;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x152)]=Game_Event[_0x2a8554(0x1cc)]['moveTypeRandom'],Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x1a2)]=function(){const _0x33305f=_0x2a8554,_0x47a9c6=$gameMap[_0x33305f(0x428)](this['x'],this['y'],this[_0x33305f(0x399)],this[_0x33305f(0x430)]),_0x433aa8=_0x47a9c6*(this[_0x33305f(0x387)]||0x0);Math[_0x33305f(0xea)]()>=_0x433aa8?VisuMZ['EventsMoveCore'][_0x33305f(0x152)][_0x33305f(0x27b)](this):this['moveBackToRandomHome']();},Game_Event[_0x2a8554(0x1cc)][_0x2a8554(0x34d)]=function(){const _0x527b15=_0x2a8554,_0x1c0527=this[_0x527b15(0x456)](this[_0x527b15(0x399)]),_0x38dcfb=this[_0x527b15(0x136)](this[_0x527b15(0x430)]);if(Math['abs'](_0x1c0527)>Math[_0x527b15(0x2a3)](_0x38dcfb))this['moveStraight'](_0x1c0527>0x0?0x4:0x6),!this['isMovementSucceeded']()&&_0x38dcfb!==0x0&&this['moveStraight'](_0x38dcfb>0x0?0x8:0x2);else _0x38dcfb!==0x0&&(this[_0x527b15(0x26a)](_0x38dcfb>0x0?0x8:0x2),!this[_0x527b15(0x487)]()&&_0x1c0527!==0x0&&this['moveStraight'](_0x1c0527>0x0?0x4:0x6));},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x494)]=Game_Interpreter['prototype']['updateWaitMode'],Game_Interpreter[_0x2a8554(0x1cc)][_0x2a8554(0x20a)]=function(){const _0xf2c8c2=_0x2a8554;if(this['_waitMode']===_0xf2c8c2(0x318)){if(window[this[_0xf2c8c2(0x16d)]])this[_0xf2c8c2(0x1c1)]='',this[_0xf2c8c2(0x1e7)]();else return!![];}else return VisuMZ[_0xf2c8c2(0x2ab)][_0xf2c8c2(0x494)]['call'](this);},VisuMZ['EventsMoveCore'][_0x2a8554(0x2db)]=Game_Interpreter[_0x2a8554(0x1cc)][_0x2a8554(0x2fd)],Game_Interpreter[_0x2a8554(0x1cc)][_0x2a8554(0x2fd)]=function(){const _0x10f1c3=_0x2a8554,_0x4cf1cd=$gameMap&&this[_0x10f1c3(0x301)]?$gameMap[_0x10f1c3(0x2c3)](this[_0x10f1c3(0x301)]):null;$gameTemp[_0x10f1c3(0x1d4)](_0x4cf1cd);const _0x2f10d3=VisuMZ[_0x10f1c3(0x2ab)]['Game_Interpreter_executeCommand']['call'](this);return $gameTemp['clearSelfTarget'](),_0x2f10d3;},VisuMZ[_0x2a8554(0x2ab)]['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x2a8554(0x1cc)][_0x2a8554(0x4b2)],Game_Interpreter['prototype'][_0x2a8554(0x4b2)]=function(_0x32d8f5){const _0xf21e1b=_0x2a8554;return $gameTemp[_0xf21e1b(0x165)](this),VisuMZ[_0xf21e1b(0x2ab)][_0xf21e1b(0x499)][_0xf21e1b(0x27b)](this,_0x32d8f5);},Game_Interpreter[_0x2a8554(0x1cc)][_0x2a8554(0x3e6)]=function(_0x27056a){const _0x3ba127=_0x2a8554;this[_0x3ba127(0x196)]=_0x27056a;const _0x4f1f13=_0x3ba127(0xf2)[_0x3ba127(0x258)](_0x27056a[_0x3ba127(0x200)][_0x3ba127(0x364)](0x3));this['_callEventMap']=_0x3ba127(0x2c5)+Graphics['frameCount']+'_'+this[_0x3ba127(0x465)](),DataManager['loadDataFile'](this[_0x3ba127(0x16d)],_0x4f1f13),window[this[_0x3ba127(0x16d)]]?this[_0x3ba127(0x1e7)]():this[_0x3ba127(0x389)](_0x3ba127(0x318));},Game_Interpreter[_0x2a8554(0x1cc)]['startCallEvent']=function(){const _0x28bfc5=_0x2a8554,_0x13463d=this[_0x28bfc5(0x196)],_0xd3659b=window[this[_0x28bfc5(0x16d)]],_0xeec76e=_0xd3659b[_0x28bfc5(0x411)][_0x13463d[_0x28bfc5(0x465)]];if(_0xeec76e&&_0xeec76e[_0x28bfc5(0x37d)][_0x13463d[_0x28bfc5(0x391)]-0x1]){const _0x39363d=_0xeec76e[_0x28bfc5(0x37d)][_0x13463d['pageId']-0x1][_0x28bfc5(0x18d)];this['setupChild'](_0x39363d,this['eventId']());}window[this[_0x28bfc5(0x16d)]]=undefined,this[_0x28bfc5(0x16d)]=undefined,this[_0x28bfc5(0x196)]=undefined;};function Game_CPCInterpreter(){const _0x344ea2=_0x2a8554;this[_0x344ea2(0x49c)][_0x344ea2(0x2ce)](this,arguments);};Game_CPCInterpreter[_0x2a8554(0x1cc)]=Object[_0x2a8554(0x2f1)](Game_Interpreter[_0x2a8554(0x1cc)]),Game_CPCInterpreter[_0x2a8554(0x1cc)][_0x2a8554(0x3c4)]=Game_CPCInterpreter,Game_CPCInterpreter[_0x2a8554(0x1cc)][_0x2a8554(0x382)]=function(){const _0x116595=_0x2a8554;Game_Interpreter[_0x116595(0x1cc)][_0x116595(0x382)]['call'](this),this[_0x116595(0x46d)]=![];},Game_CPCInterpreter['prototype'][_0x2a8554(0x103)]=function(){const _0x2adc87=_0x2a8554;while(this[_0x2adc87(0x2f0)]()){this['executeCommand']();}},Game_CPCInterpreter['prototype'][_0x2a8554(0x47b)]=function(_0x4030bc){const _0x31ba7a=_0x2a8554;return Game_Interpreter[_0x31ba7a(0x1cc)][_0x31ba7a(0x47b)]['call'](this,_0x4030bc),this['_comments'][_0x31ba7a(0x457)](_0x459a12=>_0x459a12[_0x31ba7a(0x41c)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this['_cpc']=!![]),!![];},VisuMZ[_0x2a8554(0x2ab)]['Scene_Map_startEncounterEffect']=Scene_Map['prototype'][_0x2a8554(0x425)],Scene_Map[_0x2a8554(0x1cc)][_0x2a8554(0x425)]=function(){const _0x40926a=_0x2a8554;VisuMZ[_0x40926a(0x2ab)][_0x40926a(0xfa)][_0x40926a(0x27b)](this),this[_0x40926a(0x47e)][_0x40926a(0x1d6)]();},VisuMZ['EventsMoveCore'][_0x2a8554(0x17f)]=Scene_Load[_0x2a8554(0x1cc)][_0x2a8554(0x245)],Scene_Load['prototype'][_0x2a8554(0x245)]=function(){const _0x2178bf=_0x2a8554;if($gameMap)$gameMap[_0x2178bf(0x19c)]();VisuMZ['EventsMoveCore'][_0x2178bf(0x17f)][_0x2178bf(0x27b)](this);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x146)]=Sprite_Character[_0x2a8554(0x1cc)]['initMembers'],Sprite_Character[_0x2a8554(0x1cc)]['initMembers']=function(){const _0x343445=_0x2a8554;VisuMZ[_0x343445(0x2ab)][_0x343445(0x146)]['call'](this),this[_0x343445(0x3bd)](),this['createIconSprite']();},Sprite_Character['prototype']['initMembersEventsMoveCore']=function(){const _0x185c31=_0x2a8554;this[_0x185c31(0x1ca)]=0xff;},Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0x49e)]=function(){const _0xac57b4=_0x2a8554;this[_0xac57b4(0x221)]=new Sprite(),this['_eventIconSprite'][_0xac57b4(0x198)]=ImageManager['loadSystem'](_0xac57b4(0x36f)),this['_eventIconSprite'][_0xac57b4(0x198)][_0xac57b4(0x3ed)]=![],this['_eventIconSprite']['setFrame'](0x0,0x0,0x0,0x0),this[_0xac57b4(0x221)][_0xac57b4(0x34f)]['x']=0.5,this[_0xac57b4(0x221)][_0xac57b4(0x34f)]['y']=0x1,this[_0xac57b4(0x1c2)](this['_eventIconSprite']);},Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0x12f)]=function(){const _0x2329b5=_0x2a8554;return this[_0x2329b5(0x1cb)]&&this[_0x2329b5(0x1cb)]['match'](/\[VS8\]/i);},Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0x2b2)]=function(){const _0x34d4be=_0x2a8554;return this[_0x34d4be(0x12f)]()&&VisuMZ[_0x34d4be(0x2ab)][_0x34d4be(0x414)]['VS8']['AutoBuffer'];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x1f2)]=Sprite_Character['prototype'][_0x2a8554(0x2f8)],Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0x2f8)]=function(){const _0x40f8a7=_0x2a8554;VisuMZ['EventsMoveCore'][_0x40f8a7(0x1f2)][_0x40f8a7(0x27b)](this),VisuMZ[_0x40f8a7(0x2ab)][_0x40f8a7(0x414)][_0x40f8a7(0x365)][_0x40f8a7(0x43e)]&&this[_0x40f8a7(0x492)](),this['_shadowSprite']&&this[_0x40f8a7(0x2c9)](),this[_0x40f8a7(0x221)]&&this[_0x40f8a7(0x137)]();},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x252)]=Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0x2ec)],Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0x2ec)]=function(){const _0x59ae68=_0x2a8554;VisuMZ[_0x59ae68(0x2ab)][_0x59ae68(0x252)][_0x59ae68(0x27b)](this),this[_0x59ae68(0x198)][_0x59ae68(0x3dd)](this[_0x59ae68(0x1ce)][_0x59ae68(0x2b8)](this));},VisuMZ['EventsMoveCore'][_0x2a8554(0x3a4)]=Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0x147)],Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0x147)]=function(){const _0x4c11b1=_0x2a8554;VisuMZ[_0x4c11b1(0x2ab)][_0x4c11b1(0x3a4)]['call'](this),this['bitmap'][_0x4c11b1(0x3dd)](this[_0x4c11b1(0x1ce)]['bind'](this));},Sprite_Character[_0x2a8554(0x1cc)]['updateBitmapSmoothing']=function(){const _0x2ea033=_0x2a8554;if(!this[_0x2ea033(0x198)])return;this[_0x2ea033(0x198)][_0x2ea033(0x3ed)]=!!VisuMZ[_0x2ea033(0x2ab)][_0x2ea033(0x414)]['Movement'][_0x2ea033(0x172)];},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x208)]=Sprite_Character[_0x2a8554(0x1cc)]['characterPatternY'],Sprite_Character[_0x2a8554(0x1cc)][_0x2a8554(0xd6)]=function(){const _0x42b5d6=_0x2a8554;return this['isSpriteVS8dir']()?this['characterPatternYVS8']():VisuMZ['EventsMoveCore'][_0x42b5d6(0x208)][_0x42b5d6(0x27b)](this);},Sprite_Character['prototype'][_0x2a8554(0x3fb)]=function(){const _0x32831a=_0x2a8554,_0x14931a=this[_0x32831a(0x1eb)][_0x32831a(0x43a)](),_0x2c6485=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return(_0x2c6485[_0x14931a]-0x2)/0x2;},Sprite_Character[_0x2a8554(0x1cc)]['updateTilt']=function(){const _0x13fe33=_0x2a8554;this['rotation']=0x0;if(this['isAllowCharacterTilt']()){const _0x4aa589=VisuMZ[_0x13fe33(0x2ab)][_0x13fe33(0x414)][_0x13fe33(0x365)],_0x2edb19=this[_0x13fe33(0x1eb)][_0x13fe33(0x43a)]();let _0x4fdd3d=0x0;if([0x1,0x4,0x7][_0x13fe33(0x104)](_0x2edb19))_0x4fdd3d=_0x4aa589[_0x13fe33(0x149)];if([0x3,0x6,0x9]['includes'](_0x2edb19))_0x4fdd3d=_0x4aa589[_0x13fe33(0x3e4)];[0x2,0x8][_0x13fe33(0x104)](_0x2edb19)&&(_0x4fdd3d=[-_0x4aa589[_0x13fe33(0x13f)],0x0,_0x4aa589[_0x13fe33(0x13f)]][this['_character'][_0x13fe33(0x220)]()]);if(this[_0x13fe33(0x126)])_0x4fdd3d*=-0x1;this[_0x13fe33(0x226)]=_0x4fdd3d;}},Sprite_Character['prototype'][_0x2a8554(0x2cc)]=function(){const _0x2f23c4=_0x2a8554;if(this[_0x2f23c4(0x27c)])return![];return this['_character'][_0x2f23c4(0xf8)]()&&!this[_0x2f23c4(0x1eb)][_0x2f23c4(0x203)]()&&!this[_0x2f23c4(0x1eb)][_0x2f23c4(0x44e)]()&&this[_0x2f23c4(0xe9)]()===0x0;},Sprite_Character['prototype'][_0x2a8554(0x2c9)]=function(){const _0x443d40=_0x2a8554;this[_0x443d40(0x422)]['x']=this[_0x443d40(0x1eb)]['shadowX'](),this[_0x443d40(0x422)]['y']=this[_0x443d40(0x1eb)][_0x443d40(0x3be)](),this[_0x443d40(0x422)]['opacity']=this[_0x443d40(0x313)],this[_0x443d40(0x422)]['visible']=this['_character']['isShadowVisible'](),this[_0x443d40(0x422)][_0x443d40(0x181)]=this[_0x443d40(0x181)],!this[_0x443d40(0x1eb)][_0x443d40(0x123)]()?(this[_0x443d40(0x422)][_0x443d40(0x3f6)]['x']=Math[_0x443d40(0x3b9)](0x1,this[_0x443d40(0x422)]['scale']['x']+0.1),this['_shadowSprite'][_0x443d40(0x3f6)]['y']=Math['min'](0x1,this[_0x443d40(0x422)][_0x443d40(0x3f6)]['y']+0.1)):(this[_0x443d40(0x422)][_0x443d40(0x3f6)]['x']=Math['max'](0x0,this[_0x443d40(0x422)][_0x443d40(0x3f6)]['x']-0.1),this[_0x443d40(0x422)]['scale']['y']=Math[_0x443d40(0x3a3)](0x0,this[_0x443d40(0x422)][_0x443d40(0x3f6)]['y']-0.1));},Sprite_Character['prototype'][_0x2a8554(0x137)]=function(){const _0x45ffe0=_0x2a8554,_0x14b899=this[_0x45ffe0(0x221)],_0x279dda=this['getEventIconIndex']();if(_0x279dda<=0x0)return _0x14b899['setFrame'](0x0,0x0,0x0,0x0);else{const _0x4caa13=ImageManager[_0x45ffe0(0x304)],_0xbf47cf=ImageManager[_0x45ffe0(0x12d)],_0x2a5c88=_0x279dda%0x10*_0x4caa13,_0x4146a7=Math['floor'](_0x279dda/0x10)*_0xbf47cf;_0x14b899[_0x45ffe0(0xf0)](_0x2a5c88,_0x4146a7,_0x4caa13,_0xbf47cf),this[_0x45ffe0(0x10a)]=!![];}const _0x5da051=this['_character'][_0x45ffe0(0x1fd)]();this[_0x45ffe0(0x2b2)]()?this['autoEventIconBuffer'](_0x14b899):(_0x14b899['x']=_0x5da051?_0x5da051[_0x45ffe0(0x3fc)]:0x0,_0x14b899['y']=_0x5da051?-this[_0x45ffe0(0x184)]+_0x5da051['bufferY']:0x0),_0x14b899['blendMode']=_0x5da051?_0x5da051[_0x45ffe0(0x3bb)]:0x0,this[_0x45ffe0(0x15a)](_0x14b899),this[_0x45ffe0(0x1c2)](_0x14b899),_0x14b899['rotation']=-this['rotation'];},Sprite_Character['prototype']['autoEventIconBuffer']=function(_0xa7dfc8){const _0x55dca5=_0x2a8554;_0xa7dfc8['x']=0x0,_0xa7dfc8['y']=-this[_0x55dca5(0x184)]+this[_0x55dca5(0x184)]*0x2/0x5,this[_0x55dca5(0x1eb)][_0x55dca5(0x220)]()!==0x1&&(_0xa7dfc8['y']+=0x1);},Sprite_Character[_0x2a8554(0x1cc)]['getEventIconIndex']=function(){const _0x28f462=_0x2a8554;if(!this[_0x28f462(0x1eb)])return 0x0;if(this[_0x28f462(0x1eb)][_0x28f462(0x3b4)])return 0x0;const _0x2ae18b=this[_0x28f462(0x1eb)][_0x28f462(0x1fd)]();return _0x2ae18b?_0x2ae18b[_0x28f462(0x113)]||0x0:0x0;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x433)]=Sprite_Balloon[_0x2a8554(0x1cc)]['setup'],Sprite_Balloon[_0x2a8554(0x1cc)][_0x2a8554(0x472)]=function(_0x31231b,_0x373a41){const _0x2ba863=_0x2a8554;VisuMZ[_0x2ba863(0x2ab)][_0x2ba863(0x433)][_0x2ba863(0x27b)](this,_0x31231b,_0x373a41),VisuMZ[_0x2ba863(0x2ab)][_0x2ba863(0x414)][_0x2ba863(0x1e8)][_0x2ba863(0xfe)]&&this[_0x2ba863(0x25e)][_0x2ba863(0x1eb)][_0x2ba863(0x40d)](_0x373a41,this[_0x2ba863(0x3d2)]);},VisuMZ[_0x2a8554(0x2ab)]['Sprite_Balloon_updatePosition']=Sprite_Balloon[_0x2a8554(0x1cc)][_0x2a8554(0x363)],Sprite_Balloon[_0x2a8554(0x1cc)][_0x2a8554(0x363)]=function(){const _0x31b8c8=_0x2a8554;VisuMZ[_0x31b8c8(0x2ab)][_0x31b8c8(0x11b)][_0x31b8c8(0x27b)](this),this[_0x31b8c8(0x213)]();},Sprite_Balloon[_0x2a8554(0x1cc)][_0x2a8554(0x213)]=function(){const _0x5a6c0b=_0x2a8554;this['_target'][_0x5a6c0b(0x1eb)][_0x5a6c0b(0x12f)]()&&(this['x']+=VisuMZ[_0x5a6c0b(0x2ab)][_0x5a6c0b(0x414)]['VS8'][_0x5a6c0b(0x20c)],this['y']+=VisuMZ[_0x5a6c0b(0x2ab)][_0x5a6c0b(0x414)]['VS8']['BalloonOffsetY']);},Sprite_Timer[_0x2a8554(0x1cc)]['createBitmap']=function(){const _0x660e2c=_0x2a8554;this[_0x660e2c(0x198)]=new Bitmap(Math['round'](Graphics['boxWidth']/0x2),0x30),this[_0x660e2c(0x198)][_0x660e2c(0xe4)]=this[_0x660e2c(0xe4)](),this['bitmap']['fontSize']=this[_0x660e2c(0x2ca)](),this['bitmap'][_0x660e2c(0x488)]=ColorManager[_0x660e2c(0x488)]();},Sprite_Timer[_0x2a8554(0x1cc)]['timerText']=function(){const _0x5dab3c=_0x2a8554,_0x49aafa=Math[_0x5dab3c(0x311)](this['_seconds']/0x3c/0x3c),_0x4c89cf=Math[_0x5dab3c(0x311)](this[_0x5dab3c(0x141)]/0x3c)%0x3c,_0x515233=this[_0x5dab3c(0x141)]%0x3c;let _0x459464=_0x4c89cf[_0x5dab3c(0x364)](0x2)+':'+_0x515233[_0x5dab3c(0x364)](0x2);if(_0x49aafa>0x0)_0x459464=_0x5dab3c(0x1ee)[_0x5dab3c(0x258)](_0x49aafa,_0x459464);return _0x459464;},VisuMZ['EventsMoveCore'][_0x2a8554(0x2e8)]=Spriteset_Map[_0x2a8554(0x1cc)][_0x2a8554(0xe1)],Spriteset_Map[_0x2a8554(0x1cc)]['createLowerLayer']=function(){const _0x63ffd0=_0x2a8554;VisuMZ[_0x63ffd0(0x2ab)][_0x63ffd0(0x2e8)][_0x63ffd0(0x27b)](this),this[_0x63ffd0(0xd2)]();},VisuMZ['EventsMoveCore'][_0x2a8554(0x1f1)]=Spriteset_Map[_0x2a8554(0x1cc)]['createShadow'],Spriteset_Map[_0x2a8554(0x1cc)][_0x2a8554(0x49f)]=function(){const _0x3ed751=_0x2a8554;VisuMZ[_0x3ed751(0x2ab)][_0x3ed751(0x1f1)][_0x3ed751(0x27b)](this),this[_0x3ed751(0x3a5)]();},Spriteset_Map['prototype'][_0x2a8554(0x3a5)]=function(){const _0x3b2c82=_0x2a8554;if(!VisuMZ['EventsMoveCore'][_0x3b2c82(0x414)][_0x3b2c82(0x365)][_0x3b2c82(0x2a6)])return;for(const _0x33564d of this[_0x3b2c82(0x159)]){this['createCharacterShadow'](_0x33564d);}},Spriteset_Map[_0x2a8554(0x1cc)][_0x2a8554(0x14a)]=function(_0x41592c){const _0x537bad=_0x2a8554;_0x41592c['_shadowSprite']=new Sprite(),_0x41592c[_0x537bad(0x422)][_0x537bad(0x317)]=_0x41592c[_0x537bad(0x1eb)][_0x537bad(0x153)](),_0x41592c[_0x537bad(0x422)][_0x537bad(0x198)]=ImageManager[_0x537bad(0x194)](_0x41592c[_0x537bad(0x422)][_0x537bad(0x317)]),_0x41592c[_0x537bad(0x422)][_0x537bad(0x34f)]['x']=0.5,_0x41592c['_shadowSprite'][_0x537bad(0x34f)]['y']=0x1,_0x41592c['_shadowSprite']['z']=0x0,this[_0x537bad(0x496)][_0x537bad(0x1c2)](_0x41592c['_shadowSprite']);},Spriteset_Map['prototype'][_0x2a8554(0x1d6)]=function(){const _0x2bf04c=_0x2a8554;if(!VisuMZ[_0x2bf04c(0x2ab)]['Settings']['Movement'][_0x2bf04c(0x2a6)])return;for(const _0x1fe507 of this['_characterSprites']){this[_0x2bf04c(0x496)][_0x2bf04c(0x15a)](_0x1fe507['_shadowSprite']);}},Spriteset_Map['prototype']['createLabelWindows']=function(){const _0x1386e2=_0x2a8554;this[_0x1386e2(0x3c8)]=[];for(const _0x4fbea8 of $gameMap['events']()){this[_0x1386e2(0x1e6)](_0x4fbea8);}},Spriteset_Map['prototype'][_0x2a8554(0x1e6)]=function(_0x33d69){const _0x19ac31=_0x2a8554;if(!this[_0x19ac31(0x42a)](_0x33d69))return;const _0xb3ae5e=new Window_EventLabel(_0x33d69);_0xb3ae5e['z']=0x8,_0xb3ae5e[_0x19ac31(0x482)]=Sprite[_0x19ac31(0x2d4)]++,this['_tilemap'][_0x19ac31(0x1c2)](_0xb3ae5e),this[_0x19ac31(0x3c8)][_0x19ac31(0x42b)](_0xb3ae5e);},Spriteset_Map[_0x2a8554(0x1cc)][_0x2a8554(0x42a)]=function(_0x383bd1){const _0x37c9db=_0x2a8554,_0x5bd6b2=_0x383bd1[_0x37c9db(0x2c3)]();if(_0x5bd6b2[_0x37c9db(0x20e)]['match'](/<LABEL:[ ](.*?)>/i))return!![];if(_0x5bd6b2[_0x37c9db(0x20e)][_0x37c9db(0x41c)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x4bc353 of _0x5bd6b2[_0x37c9db(0x37d)]){let _0x1adf8d='';for(const _0x1876e0 of _0x4bc353['list']){[0x6c,0x198][_0x37c9db(0x104)](_0x1876e0[_0x37c9db(0x3e0)])&&(_0x1adf8d+=_0x1876e0[_0x37c9db(0x394)][0x0]);}if(_0x1adf8d[_0x37c9db(0x41c)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x1adf8d[_0x37c9db(0x41c)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map[_0x2a8554(0x1cc)]['createSpawnedEvent']=function(_0x2e30d8){const _0x86a97a=_0x2a8554;this[_0x86a97a(0x159)]=this['_characterSprites']||[];const _0x2f2ff4=new Sprite_Character(_0x2e30d8);this[_0x86a97a(0x159)][_0x86a97a(0x42b)](_0x2f2ff4),this[_0x86a97a(0x496)][_0x86a97a(0x1c2)](_0x2f2ff4),this[_0x86a97a(0x14a)](_0x2f2ff4),this['createLabelWindowForTarget'](_0x2e30d8),_0x2f2ff4[_0x86a97a(0x2f8)]();},VisuMZ['EventsMoveCore']['Game_Message_setNumberInput']=Game_Message[_0x2a8554(0x1cc)][_0x2a8554(0x112)],Game_Message['prototype'][_0x2a8554(0x112)]=function(_0x1075a2,_0xe2b9af){const _0xe35baa=_0x2a8554;this[_0xe35baa(0x26e)]=$gameTemp[_0xe35baa(0x35f)](),VisuMZ['EventsMoveCore']['Game_Message_setNumberInput'][_0xe35baa(0x27b)](this,_0x1075a2,_0xe2b9af);},VisuMZ[_0x2a8554(0x2ab)]['Window_NumberInput_start']=Window_NumberInput[_0x2a8554(0x1cc)][_0x2a8554(0x212)],Window_NumberInput[_0x2a8554(0x1cc)][_0x2a8554(0x212)]=function(){const _0x194d00=_0x2a8554;$gameTemp[_0x194d00(0x1d4)]($gameMessage[_0x194d00(0x26e)]),VisuMZ[_0x194d00(0x2ab)][_0x194d00(0x242)]['call'](this),$gameTemp[_0x194d00(0x393)]();},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x2d9)]=Window_NumberInput['prototype'][_0x2a8554(0x1b6)],Window_NumberInput[_0x2a8554(0x1cc)]['processOk']=function(){const _0x971a89=_0x2a8554;$gameTemp[_0x971a89(0x1d4)]($gameMessage[_0x971a89(0x26e)]),VisuMZ[_0x971a89(0x2ab)][_0x971a89(0x2d9)][_0x971a89(0x27b)](this),$gameTemp['clearSelfTarget'](),$gameMessage[_0x971a89(0x26e)]=undefined;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x38b)]=Game_Message[_0x2a8554(0x1cc)]['setItemChoice'],Game_Message[_0x2a8554(0x1cc)]['setItemChoice']=function(_0x283c10,_0x25dfa0){const _0x42870a=_0x2a8554;this[_0x42870a(0x426)]=$gameTemp[_0x42870a(0x35f)](),VisuMZ[_0x42870a(0x2ab)]['Game_Message_setItemChoice']['call'](this,_0x283c10,_0x25dfa0);},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x23e)]=Window_EventItem[_0x2a8554(0x1cc)][_0x2a8554(0x2d2)],Window_EventItem[_0x2a8554(0x1cc)][_0x2a8554(0x2d2)]=function(){const _0x3f0a9f=_0x2a8554;$gameTemp[_0x3f0a9f(0x1d4)]($gameMessage[_0x3f0a9f(0x426)]),VisuMZ['EventsMoveCore']['Window_EventItem_onOk'][_0x3f0a9f(0x27b)](this),$gameTemp[_0x3f0a9f(0x393)](),$gameMessage[_0x3f0a9f(0x426)]=undefined;},VisuMZ['EventsMoveCore']['Window_EventItem_onCancel']=Window_EventItem[_0x2a8554(0x1cc)][_0x2a8554(0x161)],Window_EventItem['prototype'][_0x2a8554(0x161)]=function(){const _0x1b23f8=_0x2a8554;$gameTemp[_0x1b23f8(0x1d4)]($gameMessage[_0x1b23f8(0x426)]),VisuMZ[_0x1b23f8(0x2ab)][_0x1b23f8(0x36a)]['call'](this),$gameTemp[_0x1b23f8(0x393)](),$gameMessage[_0x1b23f8(0x426)]=undefined;},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x38c)]=Window_Message[_0x2a8554(0x1cc)]['startMessage'],Window_Message['prototype'][_0x2a8554(0x26c)]=function(){const _0x54ece3=_0x2a8554;$gameMessage[_0x54ece3(0x244)](),VisuMZ[_0x54ece3(0x2ab)]['Window_Message_startMessage'][_0x54ece3(0x27b)](this),$gameTemp['clearSelfTarget']();},VisuMZ[_0x2a8554(0x2ab)][_0x2a8554(0x1ad)]=Window_ScrollText[_0x2a8554(0x1cc)][_0x2a8554(0x26c)],Window_ScrollText['prototype'][_0x2a8554(0x26c)]=function(){const _0xf963f8=_0x2a8554;$gameMessage[_0xf963f8(0x244)](),VisuMZ[_0xf963f8(0x2ab)][_0xf963f8(0x1ad)][_0xf963f8(0x27b)](this),$gameTemp['clearSelfTarget']();};function Window_EventLabel(){const _0x2b2a4a=_0x2a8554;this[_0x2b2a4a(0x49c)](...arguments);}Window_EventLabel[_0x2a8554(0x1cc)]=Object['create'](Window_Base['prototype']),Window_EventLabel['prototype'][_0x2a8554(0x3c4)]=Window_EventLabel,Window_EventLabel['prototype'][_0x2a8554(0x49c)]=function(_0x48c591){const _0x34d0a9=_0x2a8554;this[_0x34d0a9(0x1d7)]=_0x48c591;const _0x530179=new Rectangle(0x0,0x0,Graphics[_0x34d0a9(0x3c9)]/0x4,this[_0x34d0a9(0x476)](0x1));this[_0x34d0a9(0x45a)](),Window_Base[_0x34d0a9(0x1cc)][_0x34d0a9(0x49c)][_0x34d0a9(0x27b)](this,_0x530179),this[_0x34d0a9(0x271)]=0x0,this[_0x34d0a9(0x48e)](0x2),this[_0x34d0a9(0x207)]='';},Window_EventLabel['prototype'][_0x2a8554(0x45a)]=function(){const _0x204071=_0x2a8554;this[_0x204071(0xfd)]=![],this['_screenZoomScale']=$gameScreen[_0x204071(0x459)](),this['_eventScreenX']=this['_event'][_0x204071(0x357)](),this[_0x204071(0x325)]=this[_0x204071(0x1d7)][_0x204071(0x4ac)](),this[_0x204071(0x335)]=this['_event']['_labelWindow'][_0x204071(0x228)],this['_eventLabelOffsetY']=this['_event']['_labelWindow'][_0x204071(0x348)],this[_0x204071(0xf4)]=this[_0x204071(0x1d7)]['_pageIndex'],this['_cacheVisibility']=this[_0x204071(0x187)](),this[_0x204071(0x279)]=$gameSystem['eventLabelsVisible'](),this[_0x204071(0x22e)]=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x204071(0x444)]=this[_0x204071(0x1d7)]['x'],this[_0x204071(0x43d)]=this['_event']['y'];},Window_EventLabel[_0x2a8554(0x1cc)]['update']=function(){const _0x3148cf=_0x2a8554;Window_Base[_0x3148cf(0x1cc)]['update'][_0x3148cf(0x27b)](this);if(!this[_0x3148cf(0x312)]())return;this['updateText'](),this[_0x3148cf(0x2cf)](),this['updatePosition'](),this[_0x3148cf(0x1a7)]();},Window_EventLabel['prototype'][_0x2a8554(0x312)]=function(){const _0x1f0bce=_0x2a8554;if(!this[_0x1f0bce(0x1d7)])return![];if(!this[_0x1f0bce(0x1d7)][_0x1f0bce(0x130)])return![];if(this[_0x1f0bce(0xf4)]!==this[_0x1f0bce(0x1d7)][_0x1f0bce(0x1b9)])return!![];if(this['_event'][_0x1f0bce(0x3b4)]&&!this[_0x1f0bce(0xfd)])return!![];if(this[_0x1f0bce(0x1d7)][_0x1f0bce(0x130)][_0x1f0bce(0x262)]==='')return![];if(this[_0x1f0bce(0x1e2)]!==$gameScreen[_0x1f0bce(0x459)]())return!![];if(this[_0x1f0bce(0x45d)]!==this[_0x1f0bce(0x1d7)][_0x1f0bce(0x357)]())return!![];if(this['_eventScreenY']!==this[_0x1f0bce(0x1d7)][_0x1f0bce(0x4ac)]())return!![];if(this[_0x1f0bce(0x335)]!==this[_0x1f0bce(0x1d7)][_0x1f0bce(0x130)][_0x1f0bce(0x228)])return!![];if(this[_0x1f0bce(0x22d)]!==this[_0x1f0bce(0x1d7)][_0x1f0bce(0x130)][_0x1f0bce(0x348)])return!![];if(this[_0x1f0bce(0x22e)]!==$gamePlayer['x'])return!![];if(this[_0x1f0bce(0x1a3)]!==$gamePlayer['y'])return!![];if(this['_visibleEventX']!==this['_event']['x'])return!![];if(this[_0x1f0bce(0x43d)]!==this[_0x1f0bce(0x1d7)]['y'])return!![];if(this[_0x1f0bce(0x279)]!==$gameSystem[_0x1f0bce(0x21d)]())return!![];if(this['_cacheVisibility']&&this[_0x1f0bce(0x271)]<0xff)return!![];if(!this[_0x1f0bce(0x441)]&&this[_0x1f0bce(0x271)]>0x0)return!![];if(SceneManager[_0x1f0bce(0x3cd)][_0x1f0bce(0x3a7)]>0x0)return!![];return![];},Window_EventLabel[_0x2a8554(0x1cc)][_0x2a8554(0x45f)]=function(){const _0x1ec646=_0x2a8554;this[_0x1ec646(0x1d7)]['labelWindowText']()!==this['_text']&&(this['_text']=this['_event'][_0x1ec646(0x2d7)](),this[_0x1ec646(0x2e5)]());},Window_EventLabel['prototype'][_0x2a8554(0x2cf)]=function(){const _0x4c27ee=_0x2a8554;this['scale']['x']=0x1/$gameScreen[_0x4c27ee(0x459)](),this[_0x4c27ee(0x3f6)]['y']=0x1/$gameScreen[_0x4c27ee(0x459)](),this[_0x4c27ee(0x1e2)]=$gameScreen[_0x4c27ee(0x459)]();},Window_EventLabel[_0x2a8554(0x1cc)]['updatePosition']=function(){const _0x2007f6=_0x2a8554;if(!SceneManager[_0x2007f6(0x3cd)])return;if(!SceneManager['_scene'][_0x2007f6(0x47e)])return;const _0x32af99=SceneManager[_0x2007f6(0x3cd)][_0x2007f6(0x47e)][_0x2007f6(0x406)](this['_event']);if(!_0x32af99)return;this['x']=Math['round'](this[_0x2007f6(0x1d7)]['screenX']()-Math[_0x2007f6(0x311)](this[_0x2007f6(0x43c)]*this[_0x2007f6(0x3f6)]['x']/0x2)),this['x']+=this[_0x2007f6(0x1d7)][_0x2007f6(0x130)][_0x2007f6(0x228)],this['y']=this[_0x2007f6(0x1d7)][_0x2007f6(0x4ac)]()-_0x32af99[_0x2007f6(0x184)],this['y']+=Math[_0x2007f6(0x37e)]($gameSystem[_0x2007f6(0x11f)]()*0.5),this['y']-=Math[_0x2007f6(0x37e)](this[_0x2007f6(0x184)]*this[_0x2007f6(0x3f6)]['y']),this['y']+=this[_0x2007f6(0x1d7)]['_labelWindow']['offsetY'],this[_0x2007f6(0xfd)]=this['_event'][_0x2007f6(0x3b4)],this[_0x2007f6(0x45d)]=this['_event'][_0x2007f6(0x357)](),this[_0x2007f6(0x325)]=this[_0x2007f6(0x1d7)][_0x2007f6(0x4ac)](),this[_0x2007f6(0x335)]=this[_0x2007f6(0x1d7)][_0x2007f6(0x130)][_0x2007f6(0x228)],this[_0x2007f6(0x22d)]=this[_0x2007f6(0x1d7)]['_labelWindow']['offsetY'],this[_0x2007f6(0xf4)]=this['_event'][_0x2007f6(0x1b9)],this['_eventErased']&&(this[_0x2007f6(0x271)]=0x0);},Window_EventLabel[_0x2a8554(0x1cc)][_0x2a8554(0x1a7)]=function(){const _0x25a9a5=_0x2a8554;if(this[_0x25a9a5(0x187)]())this[_0x25a9a5(0x271)]+=this[_0x25a9a5(0x450)]();else SceneManager[_0x25a9a5(0x3cd)][_0x25a9a5(0x3a7)]>0x0?this[_0x25a9a5(0x271)]=0x0:this[_0x25a9a5(0x271)]-=this['opacitySpeed']();},Window_EventLabel[_0x2a8554(0x1cc)][_0x2a8554(0x187)]=function(){const _0x2ded7d=_0x2a8554;if(!$gameSystem[_0x2ded7d(0x21d)]())return![];if(this[_0x2ded7d(0x1d7)]?.[_0x2ded7d(0x3b4)])return![];if(SceneManager[_0x2ded7d(0x3cd)]['_encounterEffectDuration']>0x0)return![];const _0x1195bf=$gamePlayer['x'],_0x451d30=$gamePlayer['y'],_0x53d227=this[_0x2ded7d(0x1d7)]['x'],_0x3f7a3c=this['_event']['y'];if(this[_0x2ded7d(0x22e)]===_0x1195bf&&this[_0x2ded7d(0x1a3)]===_0x451d30&&this[_0x2ded7d(0x444)]===_0x53d227&&this[_0x2ded7d(0x43d)]===_0x3f7a3c)return this[_0x2ded7d(0x441)];this[_0x2ded7d(0x22e)]=$gamePlayer['x'],this[_0x2ded7d(0x1a3)]=$gamePlayer['y'],this[_0x2ded7d(0x444)]=this['_event']['x'],this[_0x2ded7d(0x43d)]=this['_event']['y'];if($gameMap[_0x2ded7d(0x250)](_0x1195bf,_0x451d30,_0x53d227,_0x3f7a3c)>this[_0x2ded7d(0x1d7)][_0x2ded7d(0x47f)]())return this[_0x2ded7d(0x441)]=![],![];return this[_0x2ded7d(0x441)]=!![],!![];},Window_EventLabel[_0x2a8554(0x1cc)][_0x2a8554(0x450)]=function(){const _0x4e8734=_0x2a8554;return VisuMZ[_0x4e8734(0x2ab)][_0x4e8734(0x414)][_0x4e8734(0x38e)]['OpacitySpeed'];},Window_EventLabel['prototype'][_0x2a8554(0x32d)]=function(){const _0x3dc679=_0x2a8554,_0x23e355=this[_0x3dc679(0x1cd)](this[_0x3dc679(0x207)]);this['width']=_0x23e355[_0x3dc679(0x43c)]+($gameSystem[_0x3dc679(0x11f)]()+this[_0x3dc679(0x370)]())*0x2,this[_0x3dc679(0x184)]=Math[_0x3dc679(0x3a3)](this[_0x3dc679(0x173)](),_0x23e355[_0x3dc679(0x184)])+$gameSystem[_0x3dc679(0x11f)]()*0x2,this[_0x3dc679(0x1bf)]();},Window_EventLabel['prototype'][_0x2a8554(0x173)]=function(){const _0x507959=_0x2a8554;return VisuMZ[_0x507959(0x2ab)][_0x507959(0x414)][_0x507959(0x38e)][_0x507959(0x248)];},Window_EventLabel[_0x2a8554(0x1cc)][_0x2a8554(0x384)]=function(){const _0x18cbbb=_0x2a8554;Window_Base['prototype']['resetFontSettings'][_0x18cbbb(0x27b)](this),this[_0x18cbbb(0x138)][_0x18cbbb(0x2ca)]=this['defaultFontSize']();},Window_EventLabel['prototype'][_0x2a8554(0x1f9)]=function(){const _0x4236f4=_0x2a8554;return VisuMZ[_0x4236f4(0x2ab)][_0x4236f4(0x414)][_0x4236f4(0x38e)][_0x4236f4(0x11c)];},Window_EventLabel['prototype'][_0x2a8554(0x2e5)]=function(){const _0x2b9f9f=_0x2a8554;this[_0x2b9f9f(0x32d)](),this[_0x2b9f9f(0x138)][_0x2b9f9f(0x382)]();const _0x5b9743=this[_0x2b9f9f(0x207)][_0x2b9f9f(0x495)](/[\r\n]+/);let _0x293b3a=0x0;for(const _0x1bd5c3 of _0x5b9743){const _0x3059f9=this[_0x2b9f9f(0x1cd)](_0x1bd5c3),_0x492aa5=Math[_0x2b9f9f(0x311)]((this[_0x2b9f9f(0x18b)]-_0x3059f9[_0x2b9f9f(0x43c)])/0x2);this['drawTextEx'](_0x1bd5c3,_0x492aa5,_0x293b3a),_0x293b3a+=_0x3059f9[_0x2b9f9f(0x184)];}},Window_EventLabel['prototype']['processDrawIcon']=function(_0x4e8cb7,_0x4a9cb5){const _0x5bcb11=_0x2a8554;_0x4a9cb5['drawing']&&this[_0x5bcb11(0x35c)](_0x4e8cb7,_0x4a9cb5['x']+0x2,_0x4a9cb5['y']),_0x4a9cb5['x']+=Math[_0x5bcb11(0x3b9)](this[_0x5bcb11(0xda)](),ImageManager[_0x5bcb11(0x304)])+0x4;},Window_EventLabel['prototype'][_0x2a8554(0x35c)]=function(_0x30d4c9,_0x123421,_0x3a7113){const _0x5e3825=_0x2a8554,_0x3fbe6f=ImageManager[_0x5e3825(0x194)](_0x5e3825(0x36f)),_0x3b69f5=ImageManager[_0x5e3825(0x304)],_0xe26ae3=ImageManager['iconHeight'],_0x24e8cf=_0x30d4c9%0x10*_0x3b69f5,_0x3f0163=Math[_0x5e3825(0x311)](_0x30d4c9/0x10)*_0xe26ae3,_0x111810=Math[_0x5e3825(0x3b9)](this[_0x5e3825(0xda)]()),_0x54370e=Math[_0x5e3825(0x3b9)](this['iconSize']());this[_0x5e3825(0x138)]['blt'](_0x3fbe6f,_0x24e8cf,_0x3f0163,_0x3b69f5,_0xe26ae3,_0x123421,_0x3a7113,_0x111810,_0x54370e);},Window_EventLabel[_0x2a8554(0x1cc)]['iconSize']=function(){const _0x579ed3=_0x2a8554;return VisuMZ[_0x579ed3(0x2ab)]['Settings'][_0x579ed3(0x38e)]['IconSize'];};