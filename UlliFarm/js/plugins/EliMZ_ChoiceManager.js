//==========================================================================
// EliMZ_ChoiceManager.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book
@orderAfter EliMZ_HelpWindows
@orderAfter EliMZ_FontManager
@orderAfter EliMZ_FontManagerPro

@plugindesc v1.0.1 - Implement improvements in the choice system.
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-choice-manager-for-rpg-maker

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
https://www.patreon.com/hakuenstudio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
============================================================================
Introduction
============================================================================

RPG Maker's choice system is cool. But it could be so much better!
This plugin gives more flexibility to the default functionality of the 
choices, as well as extends them by implementing new features!

============================================================================
Features
============================================================================

Free Features:

● Increase the number of choices.
● Shuffle the choices.
● Changes the number of columns in the choice window.
● Activate, deactivate, show, hide choices with regular switches or 
self-switches. Via plugin command or escape codes.
● Set specific texts for disabled choices.
● Show/Move the window to any position using easing animations!
● Choices inside the message window.
● Stores the chosen choice index in a variable.
● Stores the text of the chosen choice in a variable.
● Put a delay on frames to allow confirmation of a choice as soon as the 
window opens.
● Change Choice Window Skin. 
● Change text/cursor color on selected choice.
● Define texts for the help window in each choice (Requires EliMZ_HelpWindows).
● Set Choice text alignment.(Requires EliMZ_MessageActions)

Pro Features:

● Attach pictures to choices!
● Auto set picture movement for selected, unselected and chosen pictures!
● Choose to erase all pictures or erase only the Unchosen ones when the choice closes!
● Custom Width/Height for each choices
● Run a common event for each choice.
● Turn on a specific switch for each choice.
● Turn on a switch each time a new choice is selected.
● Use background images for choices.
● Optionally remove the dark rectangle background.
● Put a time limit(countdown) for the player to confirm a choice.
● Show/hide the cursor.
● Invisible choice window.

Maybe Future features:

● Choices with multiple lines. (PRO)
● Attach events to choices! (PRO)
● Individual choice windows (PRO)
● Nested Choice Windows (PRO)

============================================================================
How to use
============================================================================

You can see the help file here too:
https://docs.google.com/document/d/1d1hTgo87Js5mmbqJ7KVdnWkzlO_454hh64P8D9LSxKk/edit?usp=sharing

♦ Merging Choices ♦

To enable more than 6 choices, you just need to keep adding choice 
commands one after another.

The window settings for background and position, will be set on the first 
block of choice command.

♦ Plugin Parameters ♦

• Confirm Delay → It can happen that the player is pressing OK to pass 
messages quickly and accidentally confirms a choice as soon as the 
choice window opens, as he was pressing the button too quickly. 
This parameter is intended to help with this problem by putting a 
delay on frames until confirmation works.

♦ Plugin Commands ♦
 
● Initial Settings

• Columns → Change the number of columns in the choice window.

• Condition Operator → Change the conditions of the choices to use 
switches or self-switches.

• Cursor Visible → Hide or show the cursor.

• Custom Width/Height → You can set a custom width and height for the choice. 
It is applied to each choice box/index.
Leave at 0 for the default behavior, which is automatically.

• Draw Background Rect → You can choose to draw the dark rectangle on the 
background of a choice or not.
Visibility → Show/Hide the choice window.

• Show Help → Show a help window for the choices. Need EliMZ_HelpWindows.

• Shuffle → The choices will be shuffled, visually speaking. When the player 
presses OK on a choice, it will trigger the one according to the event 
order.

• Text Alignment → Choose a default text alignment for the choice text. 
Needs EliMZ_MessageActions

• Visibility → If set to false, it will hide the choice window. 
Nice to combine choice with pictures.

• Window Skin → Set a window skin to the choice. Leave it blank to not 
change the window skin.

● Active Settings

• Switch New Selection → Every time a new choice is selected, this switch 
will turn on.

• Variable Countdown & Countdown Behavior → Choose a variable that will 
define the time limit the player has to confirm a choice. If a variable 
is chosen, assign it the value you want, and while the choice window is 
open, manipulate that value in any way that suits you. 
When it reaches zero, the window will close and make a choice selection 
according to the behavior you set, either cancels the choice or choose the 
last selected choice.

• Variable Index → This variable will hold the current choice index. 
Starting at 0.

• Variable Picture Id → This variable will add the picture id attached to 
the current selected choice.

• Variable Text → Stores the text of the selected choice.

• Cancel Text → Stores this text on the Variable Text, in case the user 
cancels.

● Choice List Settings

• Background Enabled & Disabled Image → If you set an image here, it will 
be drawn on the background of the choice(above the dark rectangle and 
below the choice text). It is nice to use with a Custom Width/Height
(Initial Settings). 
If the choice is enabled to select, it will draw the Enabled image. 
Otherwise, it will draw the disabled image.

• Color for Text → When this choice is selected, the text color will be 
changed to the one set here. It has priority over the escape codes that 
change text color.

• Color for Cursor → When this choice is selected, the cursor will change 
its color to the one set here.

• Common Event Id → Set a common event to play when this choice is selected. 
It will play uninterruptedly, like a parallel event. So it won’t interfere 
with the current or other events.

• Condition Switches & Rules → Here you can choose if you want to 
Show/Hide/Enable/Disable this choice according to one or more switches 
inserted in the parameter.

• none → Default behavior, nothing will be done.
• Show Any → If any switch is ON this choice will be shown.
• Show All → If all switches are ON this choice will be shown.
• Hide Any → If any switch is ON this choice will hide.
• Hide All → If all switches are ON this choice will hide.
• Enable Any → If any switch is ON this choice will be enabled.
• Enable All → If all switches are ON this choice will be enabled.
• Disable Any → If any switch is ON this choice will be disabled.
• Disable All → If any switches are ON this choice will be disabled.

NOTE: These conditions can also be set with escape codes. You can check 
the Condition by Escape Code section to know how.

• Disabled Text → If set any text here, when the choice is disabled it will 
show this text instead of the one set on the editor command.

• Help Text → If the help window is enabled, then this text will be placed 
on the help window for this choice.

• Picture Id → It will attach a picture to this choice. See more on the 
Picture Settings section.

• Select Switch → When this choice is selected, it will turn on this switch. 
When it is unselected, it will automatically turn it off.

● Choice Default Settings

• These settings will be applied to every choice as default. 
But they will be overridden in case you set them in the Choice 
List settings too.
Meaning the Choice List Settings has priority over them.

● Picture Settings

If the choice has a picture attached to it, these settings will be 
applied to the these pictures, according to the state of the choice:

• Selected → When a choice is selected, these settings will be applied to 
the picture.

• Unselected → When a choice is unselected, these settings will be applied 
to the picture.

• Chosen → When the player chooses a choice, these settings will be applied 
to the picture that belongs to the chosen choice index.

• Erase Rule → When the choice window closes, you can decide if you want 
to erase all choice pictures, or to erase only the unchosen one, or do 
nothing.

• Easing → If you are using Eli_EasingPictures you can use the easing 
types after the default ones. Otherwise, you need to stick with the 
defaults.

• Origin → If you are using Eli_Pictures(Or Enhanced Pictures) you can 
use the extra origins too. Otherwise, you have to stick with the 
defaults.

To make this work properly, you need to show the pictures before the 
choice command. The main purpose of this is to load the pictures.
As soon as the choice opens, it will apply the Unselect settings to all 
unselected choices and the Select settings to the current selected choice.
And then, will keep applying the Select and Unselect settings as the 
player hover/selects each choice.

● Position Settings

● Initial Position

• Duration(Frames) → How long in frames the window will take to move 
from one position to another. It must be greater than 0 for the 
easing work.

• Easing → Changes the way the choice window moves from one position to 
another. See more details here: https://easings.net/

• Off-Screen X/Y → Places the window in an off-screen position. 
This will determine from where the window will start to move to the 
final position.

● Target Position

Relative to Message → Set this to true, if you want the choice window to 
be inside the message window. It will calculate his position according 
to the message window.

• Align X/Y → Assigns a value to the X coordinate according to the 
selected alignment.

• Offset X/Y → Adds an extra value to the ones assigned with Align X/Y.

♦ Condition by Escape Code ♦

You can choose to use switches or self switches as conditions to show, 
hide, disable or enable choices via escape codes.

• <ShowAll: id, id> → If all switches listed are ON, this choice will 
appear.

• <ShowAny: id, id> → If any of these listed switches are ON, this choice 
will appear.

• <HideAll: id, id> and <HideAny: id, id> Do the same thing as above, but 
with reverse logic: When switches are ON, your choice will be hidden.

• <EnableAll: id, id> → If all switches listed are ON, this choice is 
enabled.

• <EnableAny: id, id> → If any of the switches are ON, this choice is 
enabled.

• <DisableAll: id, id> and <DisableAny: id, id> Same as above. 
However with inverted logic: When the switches are ON, the choice 
will be disabled.

You can use as many switches as you like. Just separate them with a comma.
By default, the plugin will look for regular switches. But you can use 
the plugin command to change the search behavior to self-switches.
Escape codes are not case-sensitive. You can also use spaces if you wish:

• <Show All> <ShowAll>, both will work.

============================================================================
Terms of Use
============================================================================

https://www.hakuenstudio.com/rpg-maker/terms-of-use

============================================================================
Links
============================================================================

Facebook - https://www.facebook.com/hakuenstudio
Instagram - https://www.instagram.com/hakuenstudio
Twitter - https://twitter.com/hakuen_studio

============================================================================
Update log
============================================================================
Version 1.0.1 - 12/16/2021
- [FREE/PRO] Fixed a "TypeError" crash that happens when you only put a 
single switch into the condition switches of the choice list settings.
- [PRO] Fixed a the Origin argument of picture settings, that was poiting 
as default origins "Upper Left" and "Upper Center".
But the right defaults are "Upper Left" and "Center".
- [PRO] Fixed a bug where pictures attached to choices were being 
permanently attached even though other choices commands did not have 
pictures attached to them.
Version 1.0.0 - 12/15/2021
- Added Attached picture to choices! Supporting shuffle his positions.
- Added Hide choice window.
Version 0.1.4 - 11/10/2021
- Plugin release!
Version 0.1.3 - 11/09/2021
- Fixed a bug that when ou set only one switch into the Choice 
Condition Switches, it was causing a crash.
- Add a a feature that let you choose a disabled text for choices that are 
disabled.
Version 0.1.2 - 10/13/2021
- Fixed a bug with Eli BitmapFontPro that was not properly highlighting a choice text that has a highlight color.
Version 0.1.1 - 09/27/2021
- Fixed a bug that the choices cursor/text color are not a higher priority 
than the main settings cursor/text color on the plugin commands.
- Fixed a bug that the plugin was merging nested choices, instead of only 
merging on the same editor command indentation.
- Fixed a bug that the window height was not properly calculated when 
having more than one column.
Version 0.1.0 - 09/16/2021
- Plugin release!

@param okDelay
@text Confirm Delay (Frames)
@type text
@desc A delay, in frames, before the player can hit OK when the choice is open. Leave 0 for no delay.
@default 0

@command cmd_fullSetup
@text Full Setup
@desc A complete command to set all sort of settings to your choices.

    @arg initial
    @text Initial Settings
    @type struct<initialSt>
    @desc Initial settings of the choice window.
    @default {"free":"","cols":"1","conditionOperator":"switch","showHelp":"false","shuffle":"false","align":"left","skin":"\"\"","pro":"","cursorVisible":"true","width":"0","height":"0","drawBackgroundRect":"true","visibility":"true"}

    @arg active
    @text Active Settings
    @type struct<activeSt>
    @desc Active settings of the choice window.
    @default {"free":"","selectedChoiceVariable":"0","textVariable":"0","cancelText":"The player made no choice.","pro":"","selectSwitch":"0","countdownVariable":"0","countdownChoice":"Cancel","selectedPictureVariable":"0"}

    @arg choiceDefault
    @text Choice Defaults Settings
    @type struct<choiceDefaultSt>
    @desc These settings will be applied to all choices. But the Choice List has priority over them.
    @default {"free":"","cursorColor":"\"\"","textColor":"\"\"","disabledText":"\"\"","pro":"","backEnabledImage":"\"\"","backDisabledImage":"\"\""}

    @arg choiceList
    @text Choice List
    @type struct<choiceListSt>[]
    @desc Specific settings for each choice. Has priority over the default choice settings.
    @default ["{\"free\":\"\",\"cursorColor\":\"\\\"\\\"\",\"textColor\":\"\\\"\\\"\",\"rule\":\"none\",\"conditionSwitches\":\"[]\",\"disabledText\":\"\\\"\\\"\",\"help\":\"\",\"pro\":\"\",\"backEnabledImage\":\"\\\"\\\"\",\"backDisabledImage\":\"\\\"\\\"\",\"commonEventId\":\"0\",\"pictureId\":\"0\",\"switchId\":\"0\"}","{\"free\":\"\",\"cursorColor\":\"\\\"\\\"\",\"textColor\":\"\\\"\\\"\",\"rule\":\"none\",\"conditionSwitches\":\"[]\",\"disabledText\":\"\\\"\\\"\",\"help\":\"\",\"pro\":\"\",\"backEnabledImage\":\"\\\"\\\"\",\"backDisabledImage\":\"\\\"\\\"\",\"commonEventId\":\"0\",\"pictureId\":\"0\",\"switchId\":\"0\"}","{\"free\":\"\",\"cursorColor\":\"\\\"\\\"\",\"textColor\":\"\\\"\\\"\",\"rule\":\"none\",\"conditionSwitches\":\"[]\",\"disabledText\":\"\\\"\\\"\",\"help\":\"\",\"pro\":\"\",\"backEnabledImage\":\"\\\"\\\"\",\"backDisabledImage\":\"\\\"\\\"\",\"commonEventId\":\"0\",\"pictureId\":\"0\",\"switchId\":\"0\"}","{\"free\":\"\",\"cursorColor\":\"\\\"\\\"\",\"textColor\":\"\\\"\\\"\",\"rule\":\"none\",\"conditionSwitches\":\"[]\",\"disabledText\":\"\\\"\\\"\",\"help\":\"\",\"pro\":\"\",\"backEnabledImage\":\"\\\"\\\"\",\"backDisabledImage\":\"\\\"\\\"\",\"commonEventId\":\"0\",\"pictureId\":\"0\",\"switchId\":\"0\"}","{\"free\":\"\",\"cursorColor\":\"\\\"\\\"\",\"textColor\":\"\\\"\\\"\",\"rule\":\"none\",\"conditionSwitches\":\"[]\",\"disabledText\":\"\\\"\\\"\",\"help\":\"\",\"pro\":\"\",\"backEnabledImage\":\"\\\"\\\"\",\"backDisabledImage\":\"\\\"\\\"\",\"commonEventId\":\"0\",\"pictureId\":\"0\",\"switchId\":\"0\"}","{\"free\":\"\",\"cursorColor\":\"\\\"\\\"\",\"textColor\":\"\\\"\\\"\",\"rule\":\"none\",\"conditionSwitches\":\"[]\",\"disabledText\":\"\\\"\\\"\",\"help\":\"\",\"pro\":\"\",\"backEnabledImage\":\"\\\"\\\"\",\"backDisabledImage\":\"\\\"\\\"\",\"commonEventId\":\"0\",\"pictureId\":\"0\",\"switchId\":\"0\"}"]

    @arg picture
    @text Pictures Settings
    @type struct<picturesSt>
    @desc Will apply(Move Behavior) these settings to the attached pictures on the choices. Pro version only.
    @default {"onSelect":"{\"duration\":\"1\",\"easing\":\"linear\",\"x\":\"\",\"y\":\"\",\"scaleX\":\"\",\"scaleY\":\"\",\"blendMode\":\"\",\"origin\":\"\",\"opacity\":\"\",\"tint\":\"\"}","onUnselect":"{\"duration\":\"1\",\"easing\":\"linear\",\"x\":\"\",\"y\":\"\",\"scaleX\":\"\",\"scaleY\":\"\",\"blendMode\":\"\",\"origin\":\"\",\"opacity\":\"\",\"tint\":\"\"}","onChosen":"{\"duration\":\"1\",\"easing\":\"linear\",\"x\":\"\",\"y\":\"\",\"scaleX\":\"\",\"scaleY\":\"\",\"blendMode\":\"\",\"origin\":\"\",\"opacity\":\"\",\"tint\":\"\"}","eraseRule":"All"}

    @arg position
    @text Position
    @type struct<positionSt>
    @desc Adjust the position of the window.
    @default {"initial":"","duration":"0","easing":"linear","outsideX":"left","outsideY":"none","target":"","inMessage":"false","alignX":"right","offsetX":"0","alignY":"center","offsetY":"0"}

*/

/* ---------------------------- INITIAL SETTINGS ---------------------------- */
{

/*~struct~initialSt:

@param free
@text Free

@param pro
@text Pro

@param cols
@text Columns
@type text
@desc The number of columns
@default 1
@parent free

@param conditionOperator
@text Condition Operator
@type select
@option switch
@option selfSwitch
@desc What the plugin will use to evaluate the conditions for Show/Hide/Enable/Disable choices.
@default switch
@parent free

@param cursorVisible
@text Cursor Visible
@type boolean
@desc Set to false to hide the cursor.
@default true
@parent pro

@param width
@text Custom Width
@type text
@desc A custom size for each choice. Leave 0 for default.
@default 0
@parent pro

@param height
@text Custom Height
@type text
@desc A custom size for each choice. Leave 0 for default.
@default 0
@parent pro

@param drawBackgroundRect
@text Draw Background Rect
@type boolean
@desc Choose if you want to draw the dark background rectangle.
@default true
@parent pro

@param showHelp
@text Show Help
@type boolean
@desc If true, a help window will be avaliable for choices. Need Eli Help Windows.
@default false
@parent free

@param shuffle
@text Shuffle
@type boolean
@desc If true, the choices will be shuffled.
@default false
@parent free

@param align
@text Text Alignment
@type select
@option left
@option center
@option right
@desc The text alignment of the choice.
@default left
@parent free

@param visibility
@text Visibility
@type boolean
@on Visibile
@off Hidden
@desc You can hide the choice window. It's nice for make picture/event choices.
@default true
@parent pro

@param skin
@text Window Skin
@type file
@dir img/system
@desc Set a window skin for this choice.
@default ""
@parent free

*/

}

/* ----------------------------- ACTIVE SETTINGS ---------------------------- */
{

/*~struct~activeSt:

@param free
@text Free

@param pro
@text Pro

@param selectSwitch
@text Switch New Selection
@type switch
@desc This switch will be turned on every time a new choice is selected/hovered.
@default 0
@parent pro

@param countdownVariable
@text Variable Countdown
@type variable
@desc If a variable is selected, when its value reaches zero the choice window will close.
@default 0
@parent pro

@param countdownChoice
@text Countdown Behavior
@type select
@option Cancel
@option Current Index
@desc What the choice will select when the countdown ends.
@default Cancel
@parent countdownVariable
@parent pro

@param selectedChoiceVariable
@text Variable Index
@type variable
@desc The variable that will hold the choice index.
@default 0
@parent free

@param selectedPictureVariable
@text Variable Picture Id
@type variable
@desc This variable will store the current selected picture id.
@default 0
@parent pro

@param textVariable
@text Variable Text
@type variable
@desc This variable will store the selected choice's text.
@default 0
@parent free

@param cancelText
@text Cancel Text
@type text
@desc If the player cancel the choice, what will be stored on the variable.
@default The player made no choice.
@parent textVariable

*/

}

/* ----------------------------- CHOICE DEFAULTS ---------------------------- */
{

/*~struct~choiceDefaultSt:

@param free
@text Free

@param pro
@text Pro

@param backEnabledImage
@text Background Enabled Image
@type file
@dir img/
@desc This will draw a background image for the choice.
@default ""
@parent pro

@param backDisabledImage
@text Background Disabled Image
@type file
@dir img/
@desc This will draw a background image for the choice.
@default ""
@parent pro

@param cursorColor
@text Color for Cursor
@type text
@desc This will change the cursor color of the selected choice.
@default ""
@parent free

@param textColor
@text Color for Text
@type text
@desc This will highlight the text of the selected choice.
@default ""
@parent free

@param disabledText
@text Disabled Text
@type multiline_string
@desc The text that will be show when the command is disabled.
@default ""
@parent free

*/

}

/* ------------------------------- CHOICE LIST ------------------------------ */
{
/*~struct~choiceListSt:

@param free
@text Free

@param pro
@text Pro

@param backEnabledImage
@text Background Enabled Image
@type file
@dir img/
@desc This will draw a background image for the choice.
@default ""
@parent pro

@param backDisabledImage
@text Background Disabled Image
@type file
@dir img/
@desc This will draw a background image for the choice.
@default ""
@parent pro

@param cursorColor
@text Color for Cursor
@type text
@desc This will change the cursor color when this choice is selected. Has priority over Default Cursor Color.
@default ""
@parent free

@param textColor
@text Color for Text
@type text
@desc This will highlight the text when this choice is selected. Has priority over Default Text Color.
@default ""
@parent free

@param commonEventId
@text Common Event Id
@type common_event
@desc A common event to play when this choice is under selection/hovered.
@default 0
@parent pro

@param rule
@text Condition Rules
@type select
@option none @value none @option Show Any @value showany @option Show All @value showall @option Hide Any @value hideany @option Hide All @value hideall @option Enable Any @value enableany @option Enable All @value enableall @option Disable Any @value disableany @option Disable All @value disableall
@desc Select the type of logic to apply to a choice.
@default none
@parent free

@param conditionSwitches
@text Condition switches
@type switch[]
@desc Set here the switches used to evaluate the conditions. Use the text field for self switches.
@default []
@parent rule

@param disabledText
@text Disabled Text
@type multiline_string
@desc The text that will be show when the command is disabled.
@default ""
@parent free

@param help
@text Help Text
@type multiline_string
@desc Set the help text here. Need Eli Help Windows to work.
@default
@parent free

@param pictureId
@text Picture Id
@type text
@desc Attach a picture to a choice. When the picture is hovered, it will select this choice.
@default 0
@parent pro

@param switchId
@text Select Switch
@type switch
@desc This switch will turn on when this choice is under selection/hovered.
@default 0
@parent pro

*/
}

/* -------------------------------- PICTURES -------------------------------- */
{

/*~struct~picturesSt:

@param onSelect
@text Select
@type struct<pictureSettingsSt>
@desc Set a property to change when selecting a picture. Leave empty or "" to not change.
@default {"duration":"1","easing":"linear","x":"","y":"","scaleX":"","scaleY":"","blendMode":"","origin":"","opacity":"","tint":""}

@param onUnselect
@text Unselect
@type struct<pictureSettingsSt>
@desc Set a property to change when unselecting a picture. Leave empty or "" to not change.
@default {"duration":"1","easing":"linear","x":"","y":"","scaleX":"","scaleY":"","blendMode":"","origin":"","opacity":"","tint":""}

@param onChosen
@text Chosen
@type struct<pictureSettingsSt>
@desc Set a property to change for the chosen picture. Leave empty or "" to not change.
@default {"duration":"1","easing":"linear","x":"","y":"","scaleX":"","scaleY":"","blendMode":"","origin":"","opacity":"","tint":""}

@param eraseRule
@text Erase Rule
@type select
@option None
@option Only Unchosen
@option All
@desc Select what the plugin will do with the pictures when the choice is closed.
@default All

*/

}

/* ---------------------------- PICTURE SETTINGS ---------------------------- */
{
/*~struct~pictureSettingsSt:

@param duration
@text Duration (Frames)
@type text
@desc Need to be above 0 for the easing movement to work.
@default 1

@param easing
@text Easing
@type select
@option --- Defaults --- @option linear @option slowStart @option slowEnd @option slowStartEnd @option --- In --- @option quadIn @option cubicIn @option quartIn @option quintIn @option sineIn @option expoIn @option circIn @option backIn @option bounceIn @option --- Out --- @option quadOut @option cubicOut @option quartOut @option quintOut @option sineOut @option expoOut @option circOut @option backOut @option bounceOut @option --- In / Out --- @option quadInOut @option cubicInOut @option quartInOut @option quintInOut @option sineInOut @option expoInOut @option circInOut @option backInOut @option bounceInOut
@desc Choose the easing type. The Duration need to be above 0.
@default linear
@parent duration

@param x
@text Position X
@type text
@desc Change picture X position.
@default ""

@param y
@text Position Y
@type text
@desc Change picture Y position.
@default ""

@param scaleX
@text Scale X
@type text
@desc Change picture scale in % values
@default ""

@param scaleY
@text Scale Y
@type text
@desc Change picture scale in % values
@default ""

@param blendMode
@text Blend Mode
@type select
@option Normal
@option Additive
@option Multiply
@option Screen
@desc Change the picture blend mode.
@default ""

@param origin
@text Origin
@type select
@option --- Defaults --- @option UpperLeft @option Center @option --- Extras --- @option UpperCenter @option UpperRight @option CenterLeft @option CenterRight @option LowLeft @option LowCenter @option LowRight
@desc Change picture origin.
@default ""

@param opacity
@text Opacity
@type text
@desc Change the picture opacity.
@default ""

@param tint
@text Tint
@type text
@desc Tint picture. Red, Blue, Green, Gray
@default ""

*/
}

/* -------------------------------- POSITION -------------------------------- */
{
/*~struct~positionSt:

@param initial
@text Initial Positions

@param duration
@text Duration (Frames)
@type text
@desc Need to be above 0 for the easing movement to work.
@default 0
@parent initial

@param easing
@text Easing
@type select
@option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce
@desc Choose the easing type. The Duration need to be above 0.
@default linear
@parent initial

@param outsideX
@text Off Screen X
@type select
@option none
@option left
@option right
@desc The horizontal direction the window will come from.
@default left
@parent initial

@param outsideY
@text Off Screen Y
@type select
@option none
@option top
@option bottom
@desc The vertical direction the window will come from.
@default none
@parent initial

@param target
@text Target/Final Positions

@param inMessage
@text Relative to message
@type boolean
@desc If true, the choice window will be positioned relative to the message window.
@default false
@parent target

@param alignX
@text Align X
@type select
@option none
@option left
@option center
@option right
@desc Select none to only use offset value.
@default right
@parent target

@param offsetX
@text Offset X
@type text
@desc The Offset X position.
@default 0
@parent target

@param alignY
@text Align Y
@type select
@option none
@option top
@option center
@option bottom
@desc Select none to only use offset value.
@default center
@parent target

@param offsetY
@text Offset Y
@type text
@desc The offset Y position.
@default 0
@parent target

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_ChoiceManager = true

/* ========================================================================== */
/*                                    ALERT                                   */
/* ========================================================================== */

{

    const installWarning = `You must have installed the EliMZ_Book plugin above all Eli plugins.
Please download it for free.`
    const pluginName = (() => {
        const srcScript = document.currentScript.src
        const start = srcScript.lastIndexOf("/") + 1
        const end = srcScript.lastIndexOf(".js")
        const pluginName = srcScript.substring(start, end)

        return pluginName
    })()
    const requiredVersion = ['4','1','4']
    const updateWarning = `${pluginName} needs the EliMZ_Book ${requiredVersion} version.
Please download it for free.`

    function callEliBook(){
        window.open('https://hakuenstudio.itch.io/')
    }
    
    function needInstallBook() {
        if(!Eli.alert){

            if(window.confirm(installWarning)) callEliBook()
            Eli.alert = true
        }
    }

    function needUpdateBook() {
        if(!Eli.alert){

            if(window.confirm(updateWarning)) callEliBook()
            Eli.alert = true
        }
    }
    
    if(!Imported.Eli_Book) needInstallBook()
    if(Eli.Book.Version < requiredVersion) needUpdateBook()
    if(Imported.Eli_MoveChoices || Imported.Eli_ChoicePictures){
        const compatibility = `${pluginName} is not compatible with Eli_MoveChoices and
Eli_ChoicePictures. Please, deactivate theses plugins.`
        window.confirm(compatibility)

    }
     
}

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */

{

Eli.ChoiceManager = {

    parameters: {okDelay: 0},
    alias: {},
    active: false,
    lastChoiceIndex: -1,
    isOkEnabled: false,
    commonEvents: [],
    removedChoices: [],
    shuffleOrder: [],
    choiceAnimation: anime({autoplay: false}),
    settings: {
        initial: {
            skin: "",
            align: "left",
            cols: 1,
            conditionOperator: "switch",
            showHelp: false,
            shuffle: false,
        },
        active: {
            selectedChoiceVariable: 0,
            textVariable: 0,
            cancelText: "",
        },
        choiceDefault: {
            cursorColor: [0, 0, 0, 0],
            textColor: "",
            disabledText: "",
        },
        choices: [
            {
                command: {},
                conditionSwitches: [],
                cursorColor: [0, 0, 0, 0],
                disabledText: "",
                help: "",
                rule: 0,
                textColor: "",
            },
        ],
        position: {
            alignX: "right",
            alignY: "center",
            easing: "linear",
            duration: 0,
            offsetX: 0,
            offsetY: 0,
            outsideX: "none",
            outsideY: "none",
            inMessage: false,
        },
    },
    canChangeTextColor: false,

    initialize(){
        this.initParameters()
        this.initPluginCommands()
        this.resetChoiceSettings()
    },

    initParameters(){
        this.parameters = Eli.PluginManager.createParameters()
        this.parameters.okDelay = Eli.Utils.framesToMiliSeconds(this.parameters.okDelay)
    },

    initPluginCommands(){
        const commands = ["cmd_fullSetup"]
        Eli.PluginManager.registerCommands(this, commands)
    },

    param(){
        return this.parameters
    },

    resetInitialSettings(){
        const initial = {
            skin: "",
            align: "left",
            cols: 1,
            conditionOperator: "switch",
            showHelp: false,
            shuffle: false,
        }
        this.setInitialSettings(initial)
    },

    resetActiveSettings(){
        const active = {
            selectedChoiceVariable: 0,
            textVariable: 0,
            cancelText: "",
        }
        this.setActiveSettings(active)
    },

    resetChoiceDefault(){
        const defaultChoice = {
            cursorColor: "",
            textColor: "",
            disabledText: "",
        }
        this.setChoiceDefaultSettings(defaultChoice)
    },

    resetChoiceSettings(){
        this.settings.choices = []
        for(let i = 0; i < 50; i++){
            this.settings.choices.push(this.createEmptyChoiceSetting())
        }
    },

    resetPositionSettings(){
        const position = {
            alignX: "right",
            alignY: "center",
            offsetX: 0,
            offsetY: 0,
            easing: "linear",
            duration: 0,
            outsideX: "none",
            outsideY: "none",
            inMessage: false,
        }
        this.setPositionSettings(position)
    },

    createEmptyChoiceSetting(){
        return {
            command: {},
            conditionSwitches: [],
            cursorColor: [0, 0, 0, 0],
            disabledText: "",
            help: "",
            rule: 0,
            textColor: "",
        }
    },

    resetAllSettings(){
        this.resetInitialSettings()
        this.resetActiveSettings()
        this.resetChoiceDefault()
        this.resetChoiceSettings()
        this.resetPositionSettings()
        this.lastChoiceIndex = -1
        this.isOkEnabled = false
        this.lastChoiceIndex = -1
        this.removedChoices = []
        this.shuffleOrder = []
        this.choiceAnimation = anime({autoplay: false})
        this.canChangeTextColor = false
    },

    storeSelectedChoiceIdVariable(ext){
        const varId = this.getActiveSettings().selectedChoiceVariable

        if(Imported.Eli_SelfVariables && $gameVariables.isSelf(varId)){
            const interpreter = Eli.PluginManager.currentInterpreter
            const mapId = interpreter.getTargetMapIdSelfVariable()
            const eventId = interpreter.getTargetEventIdSelfVariable()
            const key = [mapId, eventId, varId]
            $gameVariables.setSelfValue(key, ext)

        }else{
            $gameVariables.setValue(varId, ext)
        }

    },

    storeChoiceTextVariable(index){
        const id = this.getActiveSettings().textVariable
        const choiceText = $gameMessage._choices[index] || this.getActiveSettings().cancelText

        if(Imported.Eli_SelfVariables && $gameVariables.isSelf(id)){
            const interpreter = Eli.PluginManager.currentInterpreter
            const mapId = interpreter.getTargetMapIdSelfVariable()
            const eventId = interpreter.getTargetEventIdSelfVariable()
            const key = [mapId, eventId, id]
            $gameVariables.setSelfValue(key, choiceText)

        }else{
            $gameVariables.setValue(id, choiceText)
        }
    },

    findRuleValue(rule){
        const ruleTable = {
            none: 0, 
            showany: 1,
            showall: 2, 
            hideany: 3, 
            hideall: 4,
            enableany: 5,
            enableall: 6,
            disableany: 7,
            disableall: 8
        }
        return ruleTable[rule]
    },

    parseAllSettings(args){
        const rawInitial = Eli.PluginManager.convertParameters(args.initial)
        const rawActive = Eli.PluginManager.convertParameters(args.active)
        const rawChoiceDefault = Eli.PluginManager.convertParameters(args.choiceDefault)
        const rawChoiceList = Eli.PluginManager.convertParameters(args.choiceList)
        for(const choice of rawChoiceList){
            const switches = choice.conditionSwitches
            
            if(!(switches instanceof Array)){
                choice.conditionSwitches = Number(switches) ? [switches] : []
            }
        }
        const rawPosition = Eli.PluginManager.convertParameters(args.position)

        return [rawInitial, rawActive, rawChoiceDefault, rawChoiceList, rawPosition]
    },

    processChoiceDefault(choiceDefault){
        choiceDefault.textColor = Eli.ColorManager.getHexOrName(choiceDefault.textColor)

        if(choiceDefault.cursorColor){
            choiceDefault.cursorColor = Eli.ColorManager.getRgbForBlend(choiceDefault.cursorColor)
        }else{
            choiceDefault.cursorColor = [0, 0, 0, 0]
        }

        return choiceDefault
    },

    processChoiceList(choiceList){
        const { 
            cursorColor, rule, textColor,
        } = choiceList
        const main = this.getChoiceDefaultSettings()

        choiceList.rule = this.findRuleValue(rule)
        choiceList.textColor = Eli.ColorManager.getHexOrName(textColor) || main.textColor
        choiceList.cursorColor = cursorColor ? Eli.ColorManager.getRgbForBlend(cursorColor) : main.cursorColor
        choiceList.disabledText = choiceList.disabledText || main.disabledText

        return choiceList
    },

    processPositionSettings(newSettings){
        newSettings.duration = Eli.Utils.framesToMiliSeconds(newSettings.duration)

        return newSettings
    },

    setInitialSettings(settings){
        const initial = this.settings.initial

        initial.align = settings.align
        initial.cols = settings.cols
        initial.conditionOperator = settings.conditionOperator
        initial.showHelp = settings.showHelp
        initial.shuffle = settings.shuffle
        initial.skin = settings.skin
    },

    setActiveSettings(settings){
        const active = this.settings.active

        active.cancelText = settings.cancelText
        active.selectedChoiceVariable = settings.selectedChoiceVariable
        active.textVariable = settings.textVariable
    },

    setChoiceDefaultSettings(settings){
        const choiceDefault = this.settings.choiceDefault

        choiceDefault.cursorColor = settings.cursorColor
        choiceDefault.disabledText = settings.disabledText
        choiceDefault.textColor = settings.textColor
    },

    setChoiceListSettings(index, settings){
        const choice = this.settings.choices[index]

        choice.commonEventId = settings.commonEventId
        choice.conditionSwitches = settings.conditionSwitches
        choice.cursorColor = settings.cursorColor
        choice.disabledText = settings.disabledText
        choice.help = settings.help
        choice.rule = settings.rule
        choice.switchId = settings.switchId
        choice.textColor = settings.textColor
    },

    setPositionSettings(settings){
        const position = this.settings.position

        position.alignX = settings.alignX
        position.alignY = settings.alignY
        position.duration = settings.duration
        position.easing = settings.easing
        position.inMessage = settings.inMessage
        position.offsetX = settings.offsetX
        position.offsetY = settings.offsetY
        position.outsideX = settings.outsideX
        position.outsideY = settings.outsideY
    },

    cmd_fullSetup(args){
        const [
            rawInitial, rawActive, rawChoiceDefault, rawChoiceList, rawPosition
        ] = this.parseAllSettings(args)

        this.setInitialSettings(rawInitial)
        this.setActiveSettings(rawActive)
        this.setChoiceDefaultSettings(this.processChoiceDefault(rawChoiceDefault))

        for(let i = 0; i < rawChoiceList.length; i++){
            const rawChoiceSettings = rawChoiceList[i]
            const processedChoiceSettings = this.processChoiceList(rawChoiceSettings)

            this.setChoiceListSettings(i, processedChoiceSettings)
        }

        this.setPositionSettings(this.processPositionSettings(rawPosition))

        if(Imported.Eli_HelpWindows){
            Eli.HelpWindows.choice().visibility = this.settings.initial.showHelp
        }

    },

    getChoiceWindow(){
        return SceneManager._scene._choiceListWindow
    },

    getInitialSettings(){
        return this.settings.initial
    },

    getActiveSettings(){
        return this.settings.active
    },

    getChoiceDefaultSettings(){
        return this.settings.choiceDefault
    },

    getAllChoiceSettings(){
        return this.settings.choices
    },

    getChoiceSettings(index){
        return this.settings.choices[index]
    },

    getPositionSettings(){
        return this.settings.position
    },

}

const Plugin = Eli.ChoiceManager
const Alias = Eli.ChoiceManager.alias

Plugin.initialize()

/* ------------------------------ GAME MESSAGE ------------------------------ */
{

Alias.Game_Message_onChoice = Game_Message.prototype.onChoice
Game_Message.prototype.onChoice = function(n) {
    Plugin.storeChoiceTextVariable(n)

    if(this.isValidChoiceSelected(n)){
        n = this.findRealChoiceIndex()
    }

    Plugin.storeSelectedChoiceIdVariable(n)
    Alias.Game_Message_onChoice.call(this, n)
}

Game_Message.prototype.findRealChoiceIndex = function(){
    const choiceWindow = SceneManager._scene._choiceListWindow
    const realIndex = choiceWindow.currentExt()

    return realIndex
}

Game_Message.prototype.isValidChoiceSelected = function(index){
    return index > -1
}

}

/* ---------------------------- GAME INTERPRETER ---------------------------- */
{

Alias.Game_Interpreter_setupChoices = Game_Interpreter.prototype.setupChoices
Game_Interpreter.prototype.setupChoices = function(params){
    params = this.preSetupChoices(params, this._index, this._list)
    Alias.Game_Interpreter_setupChoices.call(this, params)
}

Game_Interpreter.prototype.preSetupChoices = function(params, index, list){
    const settings = this.changedShowChoiceSettings(params, index, list)
    const [commandsToRemove, choices, cancelType, defaultType] = settings
    commandsToRemove.forEach(commandIndex => this.removeEndAndShowChoicesCommand(commandIndex, list))

    return this.getNewShowChoiceParams(params, choices, cancelType, defaultType)
}

Game_Interpreter.prototype.changedShowChoiceSettings = function(params, index, list){
    const commandsToRemove = []
    const mainIndent = this._list[index].indent
    
    let [choices, cancelType, defaultType] = params
    let numberOfChoices = 0
    
    for(let i = index+1; i < list.length; i++){
        const command = list[i]
        const nextCmd = list[i+1]

        if(this.isCommandChoiceEnd(command) && !this.isCommandShowChoice(nextCmd)){
            break
        }else if(this.isCommandShowChoice(nextCmd) && this.isCommandOnIndent(nextCmd, mainIndent)){

            if(this.isChoiceCancelAllowed(nextCmd.parameters[1])) {
                cancelType = nextCmd.parameters[1] + choices.length

            }else if(this.isChoiceCancelOnBranch(nextCmd.parameters[1])){
                cancelType = nextCmd.parameters[1]
            }

            if(this.hasDefaultChoice(nextCmd.parameters[2])) {
                defaultType = nextCmd.parameters[2] + numberOfChoices
            }

            choices = this.mergeChoices(choices, nextCmd)
            commandsToRemove.unshift(i)

        }else if(this.isCommandChoiceOption(command)){
            command.parameters[0] = numberOfChoices
            numberOfChoices++
        }
    }

    return [commandsToRemove, choices, cancelType, defaultType]
}

Game_Interpreter.prototype.isCommandOnIndent = function(command, indent){
    return command.indent === indent
}

Game_Interpreter.prototype.mergeChoices = function(choices, command){
    choices.push(...command.parameters[0])
    return choices
}

Game_Interpreter.prototype.removeEndAndShowChoicesCommand = function(index, list){
    list.splice(index, 2)
}

Game_Interpreter.prototype.getNewShowChoiceParams = function(params, choices, cancelType, defaultType){
    params[0] = choices
    params[1] = cancelType
    params[2] = defaultType

    return params
}

Game_Interpreter.prototype.isCommandChoiceEnd = function(command){
    return command.code === 404
}

Game_Interpreter.prototype.isCommandShowChoice = function(command){
    return command.code === 102
}

Game_Interpreter.prototype.isCommandChoiceOption = function(command){
    return command.code === 402
}

Game_Interpreter.prototype.isChoiceCancelAllowed = function(cancelType){
    return cancelType > -1
}

Game_Interpreter.prototype.isChoiceCancelOnBranch = function(cancelType){
    return cancelType === -2
}

Game_Interpreter.prototype.hasDefaultChoice = function(defaultType){
    return defaultType > -1
}

}

/* ========================================================================== */
/*                                WINDOW CHOICE                               */
/* ========================================================================== */
{

/* ------------------------------ DEFAULT CODE ------------------------------ */
{

Alias.Window_ChoiceList_start = Window_ChoiceList.prototype.start
Window_ChoiceList.prototype.start = function(index) {
    this.beforeStart()
    Alias.Window_ChoiceList_start.call(this, index)
    this.onStart()
}

Alias.Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement
Window_ChoiceList.prototype.updatePlacement = function() {
    Alias.Window_ChoiceList_updatePlacement.call(this)
    this.setupPosition()
}

Alias.Window_ChoiceList_windowWidth = Window_ChoiceList.prototype.windowWidth
Window_ChoiceList.prototype.windowWidth = function() {
    return Alias.Window_ChoiceList_windowWidth.call(this) * this.maxCols()
}

Alias.Window_ChoiceList_numVisibleRows = Window_ChoiceList.prototype.numVisibleRows
Window_ChoiceList.prototype.numVisibleRows = function() {
    return Math.ceil(Alias.Window_ChoiceList_numVisibleRows.call(this) / this.maxCols())
}

// Fixing this behavior. Because the Choice Window was calculating the max lines without considerate if the message window is open or not.
Alias.Window_ChoiceList_maxLines = Window_ChoiceList.prototype.maxLines
Window_ChoiceList.prototype.maxLines = function() {
    if(this._messageWindow.isOpen()){
        return Alias.Window_ChoiceList_maxLines.call(this)
    }else{
        return $gameMessage.choices().length
    }
}

Alias.Window_ChoiceList_makeCommandList = Window_ChoiceList.prototype.makeCommandList
Window_ChoiceList.prototype.makeCommandList = function() {
    Alias.Window_ChoiceList_makeCommandList.call(this)
    this.changeCommandList(this._list)

    if(this.needShuffle()){
        this.startShuffleProcess()
    }

    if(this.maxItems() > 0){
        this.updatePlacement()
    }   
}

Alias.Window_ChoiceList_drawItem = Window_ChoiceList.prototype.drawItem
Window_ChoiceList.prototype.drawItem = function(index) {
    const isCommandEnabled = this.isCommandEnabled(index)
    this.changePaintOpacity(isCommandEnabled)
    Alias.Window_ChoiceList_drawItem.call(this, index) 
    Plugin.canChangeTextColor = false
}

}

/* -------------------------------- INHERITED ------------------------------- */
{

Alias.Window_ChoiceList_processColorChange = Window_ChoiceList.prototype.processColorChange
Window_ChoiceList.prototype.processColorChange = function(colorIndex) {
    if(!this.canChangeTextColor()){
        Alias.Window_ChoiceList_processColorChange.call(this, colorIndex)
    }
}

Alias.Window_ChoiceList_loadWindowskin = Window_ChoiceList.prototype.loadWindowskin
Window_ChoiceList.prototype.loadWindowskin = function() {
    Alias.Window_ChoiceList_loadWindowskin.call(this)
    this.loadPluginCommandWindowskin()
}

Alias.Window_ChoiceList_resetTextColor = Window_ChoiceList.prototype.resetTextColor
Window_ChoiceList.prototype.resetTextColor = function() {
    Alias.Window_ChoiceList_resetTextColor.call(this)
    this.changeColorOfSelectedText()
}

//Overwrite
Window_ChoiceList.prototype.maxCols = function() {
    return Plugin.getInitialSettings().cols
}

Alias.Window_ChoiceList_isOkEnabled = Window_ChoiceList.prototype.isOkEnabled
Window_ChoiceList.prototype.isOkEnabled = function() {
    return  Alias.Window_ChoiceList_isOkEnabled.call(this) && 
            Plugin.isOkEnabled &&
            Plugin.choiceAnimation.completed
}

Alias.Window_ChoiceList_select = Window_ChoiceList.prototype.select
Window_ChoiceList.prototype.select = function(index) {
    if(this.canDoBeforeSelection(index)){
        this.beforeSelection(this.index())
    }
    
    Alias.Window_ChoiceList_select.call(this, index)

    Plugin.storeSelectedChoiceIdVariable(this.currentExt())

    if(this.isNewSelection()){
        this.onNewSelection()
    }
}

Alias.Window_ChoiceList_close = Window_ChoiceList.prototype.close
Window_ChoiceList.prototype.close = function() {
    Alias.Window_ChoiceList_close.call(this)
    this.onClose()
}

}

/* ----------------------------- COMPATIBILITIES ---------------------------- */
if(Imported.Eli_HelpWindows){

//Overwrite Eli Help Windows
Window_ChoiceList.prototype.setCurrentHelpText = function(){
    let text = this.helpTexts[this.currentExt()] || ""

    if(Plugin.getInitialSettings().showHelp){
        text = this.getCurrentChoiceSettings().help || ""
    }

    this._helpWindow.setText(text)
}
    
}

if(Imported.Eli_MessageActions){

Alias.Window_ChoiceList_initMessageActionsMembers = Window_ChoiceList.prototype.initMessageActionsMembers
Window_ChoiceList.prototype.initMessageActionsMembers = function() {
    Alias.Window_ChoiceList_initMessageActionsMembers.call(this)
    this.currentAlign = Plugin.getInitialSettings().align
}

Alias.Window_ChoiceList_COLOR = Window_ChoiceList.prototype.COLOR
Window_ChoiceList.prototype.COLOR = function(textState){
    if(!this.canChangeTextColor()){
        Alias.Window_ChoiceList_COLOR.call(this, textState)
    }
}

}

if(Imported.Eli_FontManager && Eli.FontManager.pro){

Alias.Window_ChoiceList_setExtraFontSettings = Window_ChoiceList.prototype.setExtraFontSettings
Window_ChoiceList.prototype.setExtraFontSettings = function() {
    const font = this.customFont
    const oldColor = font.textColor
    if(this.canChangeTextColor()){
        font.textColor = this.contents.textColor
    }
    Alias.Window_ChoiceList_setExtraFontSettings.call(this)
    font.textColor = oldColor
}

}

/* --------------------------- CHANGE COMMAND LIST -------------------------- */
{

Window_ChoiceList.prototype.changeCommandList = function(){
    for(let i = 0; i < this._list.length; i++){
        const index = i
        const command = this._list[i]
        this.processChangesOnCommand(command, index)
    }

    for(const index of Plugin.removedChoices){
        this.removeChoiceByIndex(index)
    }
}

Window_ChoiceList.prototype.processChangesOnCommand = function(command, index){
    this.setRealIndexToCommand(command, index)
    this.setCommandToGlobalChoiceSettings(command, index)

    if(this.commandHasPicture(index)){
        this.setChoiceIndexToPicture(index)
    }

    if(this.commandHaveConditionByString(command)){
        this.setupStringConditions(command, index)
    }

    if(this.commandHaveAnyCondition(index)){
        this.processCommandConditions(index, command)
    }
}

Window_ChoiceList.prototype.setRealIndexToCommand = function(command, realIndex){
    command.ext = realIndex
}

Window_ChoiceList.prototype.setCommandToGlobalChoiceSettings = function(command, index){
    Plugin.getChoiceSettings(index).command = command
}

Window_ChoiceList.prototype.commandHasPicture = function(index){
    return Plugin.getChoiceSettings(index).pictureId > 0
}

Window_ChoiceList.prototype.setChoiceIndexToPicture = function(index){
    const picId = Plugin.getChoiceSettings(index).pictureId
    $gameScreen.picture(picId).choiceIndex = index
}

Window_ChoiceList.prototype.commandHaveConditionByString = function(command){
    return command.name.startsWith("<")
}

Window_ChoiceList.prototype.setupStringConditions = function(command, index){
    this.setRulesByString(index, command)
    this.setConditionSwitchesByString(index, command)
    this.removeConditionStringFromChoiceNames(command, index)
}

Window_ChoiceList.prototype.setRulesByString = function(index, command){
    Plugin.getChoiceSettings(index).rule = this.findRuleByString(command.name)
}

Window_ChoiceList.prototype.findRuleByString = function(commandName){
    const choiceLabel = commandName.toLowerCase()
    const start = choiceLabel.indexOf(":")
    const rule = Eli.String.removeSpaces(choiceLabel.substring(1, start))

    return Plugin.findRuleValue(rule)
}

Window_ChoiceList.prototype.setConditionSwitchesByString = function(index, command){
    const switches = this.findConditionSwitchesByString(command.name)
    Plugin.getChoiceSettings(index).conditionSwitches = switches
}

Window_ChoiceList.prototype.findConditionSwitchesByString = function(commandName){
    const choiceLabel = commandName.toLowerCase()
    const start = commandName.indexOf(":")
    const end = commandName.indexOf(">")

    return choiceLabel.substring(start+1, end).split(",").map(switchId => switchId)
}

Window_ChoiceList.prototype.removeConditionStringFromChoiceNames = function(command, i){
    const end = command.name.indexOf(">") + 1
    let realCommandName = command.name.substring(end)

    realCommandName = realCommandName[0] === " " ? realCommandName.substring(1) : realCommandName
    command.name = realCommandName
    $gameMessage._choices[i] = realCommandName
}

Window_ChoiceList.prototype.commandHaveAnyCondition = function(index){
    const settings = Plugin.getChoiceSettings(index)
    return settings.rule > 0
}

Window_ChoiceList.prototype.processCommandConditions = function(index, command){
    const rule = Plugin.getChoiceSettings(index).rule
    const conditionValue = this.getConditionValue(index, rule)

    switch(rule){
        case 1: case 2: // Show All/Any
            if(!conditionValue) Plugin.removedChoices.unshift(command.ext)
            break
        case 3: case 4: // Hide All/Any
            if(conditionValue) Plugin.removedChoices.unshift(command.ext)
            break
        case 5: case 6: // Enable All/Any
            command.enabled = conditionValue
            command.name = command.enabled ? command.name : Plugin.getChoiceSettings(index).disabledText || command.name
            break
        case 7: case 8: // Disable All/Any
            command.enabled = !conditionValue
            command.name = command.enabled ? command.name : Plugin.getChoiceSettings(index).disabledText || command.name
            break
        default: console.log("Invalid Rule")
    }
}

Window_ChoiceList.prototype.getConditionValue = function(index, showRule){
    let value = true

    switch(showRule){
        case 1: case 3: case 5: case 7: // Any
            value = this.evaluateCondition(index, "some")
            break
        case 2: case 4: case 6: case 8: // All
            value = this.evaluateCondition(index, "every")
            break
    }

    return value
}

Window_ChoiceList.prototype.evaluateCondition = function(index, checkType){
    const choice = Plugin.getChoiceSettings(index)

    if(Plugin.getInitialSettings().conditionOperator === "switch"){
        return choice.conditionSwitches[checkType](id => $gameSwitches.value(Number(id)))

    }else{
        const eventId = Eli.PluginManager.currentEventId
        const mapId = $gameMap.mapId()

        return choice.conditionSwitches[checkType](id => {
            const letter = Eli.String.removeSpaces(id).toUpperCase()
            const key = [mapId, eventId, letter]

            return $gameSelfSwitches.value(key)
        })
    }
}

Window_ChoiceList.prototype.removeChoiceByIndex = function(index){
    this._list.splice(index, 1)
    $gameMessage._choices.splice(index, 1)

    if(this.commandHasPicture(index)){
        this.removePictureChoiceIndex(index)
    }

    Plugin.settings.choices.splice(index, 1)
}

Window_ChoiceList.prototype.removePictureChoiceIndex = function(index){
    const picture = $gameScreen.picture(Plugin.getChoiceSettings(index).pictureId)
    picture.choiceIndex = -1
}

}
    
/* --------------------------------- SHUFFLE -------------------------------- */
{

Window_ChoiceList.prototype.needShuffle = function(){
    return Plugin.getInitialSettings().shuffle
}
    
Window_ChoiceList.prototype.startShuffleProcess = function() {
    const tempList = [...this._list]
    const [windowList, messageList, globalList, picPositions] = this.createShuffleSettings(tempList)
    
    this.shuffleAttachedPictures(picPositions)
    this.shuffleAllChoicesList(windowList, messageList, globalList)
}

Window_ChoiceList.prototype.createShuffleSettings = function(list){
    const windowList = []
    const messageList = []
    const globalSettingsList = []
    const picturePositions = []

    while(list.length > 0){
        const randomIndex = Math.floor(Math.random() * list.length)
        const randomElement = list.splice(randomIndex, 1)
        const choiceSetting = Plugin.getChoiceSettings(randomElement[0].ext)
        const picture = $gameScreen.picture(choiceSetting.pictureId)

        windowList.push(randomElement[0])
        messageList.push(randomElement[0].name)
        globalSettingsList.push(choiceSetting)

        if(picture){
            picturePositions.push({x: picture.x(), y: picture.y()})
        }

        Plugin.shuffleOrder.push(randomElement[0].ext)
    }

    return [windowList, messageList, globalSettingsList, picturePositions]
}

Window_ChoiceList.prototype.shuffleAttachedPictures = function(picturePositions){
    for(let i = 0; i < picturePositions.length; i++){
        const {x, y} = picturePositions[i]
        const picId = Plugin.getChoiceSettings(i).pictureId
        const picture = $gameScreen.picture(picId)

        picture._x = x
        picture._y = y
    }
}

Window_ChoiceList.prototype.shuffleAllChoicesList = function(windowList, messageList, globalList){
    this._list = windowList
    $gameMessage._choices = messageList
    Plugin.settings.choices = globalList
}

}

/* --------------------------- POSITION AND FORMAT -------------------------- */
{

Window_ChoiceList.prototype.setupPosition = function() {
    const {
        alignX, offsetX, alignY, offsetY, 
        duration, easing, outsideX, outsideY
    } = Plugin.getPositionSettings()
    const target = this.createTargetPositions(alignX, offsetX, alignY, offsetY)
    
    this.x = target.x
    this.y = target.y

    if(this.haveEasingAnimation()){
        this.setInitialPositions(outsideX, outsideY)
    }

    Plugin.choiceAnimation = anime({
        targets: this,
        x: target.x,
        y: target.y,
        round: 1,
        easing: easing,
        duration: duration,
        autoplay: false,
    })
}

Window_ChoiceList.prototype.calculateInMessagePosition = function(align, offset, size, coordinate = "x"){
    const msgWin = SceneManager._scene._messageWindow
    const screenSize = { x: msgWin.width, y: msgWin.height }
    const startPoint = { x: msgWin.x, y: msgWin.y }
    const mainSize = screenSize[coordinate] - size
    const mainPoint = startPoint[coordinate]

    switch(align){
        case "center":
            return mainPoint + (mainSize / 2) + offset
        case "right":
        case "bottom":  
            return mainPoint + (mainSize + offset)
        case "left":
        case "top":
            return mainPoint + offset
    }

    return mainPoint + offset
}

Window_ChoiceList.prototype.createTargetPositions = function(alignX, offsetX, alignY, offsetY){
    if(Plugin.getPositionSettings().inMessage){
        this._isWindow = false
        var x = this.calculateInMessagePosition(alignX, offsetX, this.width, "x")
        var y = this.calculateInMessagePosition(alignY, offsetY, this.height, "y")

    }else{
        var x = Eli.Utils.calculateScreenPosition(alignX, offsetX, this.width, "x")
        var y = Eli.Utils.calculateScreenPosition(alignY, offsetY, this.height, "y")
        x -= alignX === "right" ? this._margin : 0
        y -= alignY === "bottom" ? this._margin : 0

        if($gameMessage.hasText()){
            const [newX, newY] = this.avoidOverlappingWithMessageWindow(x, y)
            x = newX
            y = newY
        }
    }

    return {x, y}
}

Window_ChoiceList.prototype.avoidOverlappingWithMessageWindow = function(x, y){
    const msgWin = SceneManager._scene._messageWindow
    const choiceRect = new Rectangle(x, y, this.width, this.height)
    const msgRect = msgWin.getBounds()
    const tempWin = new Window_Base(choiceRect)
    const collision = Eli.Utils.bump.rectangleCollision(tempWin, msgWin)

    if(collision === "top"){
        y = msgRect.bottom + Eli.Utils.windowMargin
        if(y >= Graphics.height){
            y = msgRect.top - (this.height + this._margin * 2)
        }

    }else if(collision === "bottom"){
        y = msgRect.top - (this.height + this._margin * 2)
        if(y <= 0){
            y = msgRect.bottom + this._margin * 2
        }
    }

    return [x, y]
} 

Window_ChoiceList.prototype.haveEasingAnimation = function(){
    return Plugin.getPositionSettings().duration > 0
} 

Window_ChoiceList.prototype.setInitialPositions = function(outsideX, outsideY){
    const [initialX, initialY] = this.findInitialCoordinates(outsideX, outsideY)
    this.x = initialX
    this.y = initialY
} 

Window_ChoiceList.prototype.findInitialCoordinates = function(outsideX, outsideY) {
    const x = {
        left: -this.width,
        right: Graphics.width + this.width,
        none: this.x,
    }[outsideX]
    const y = {
        top: -this.height,
        bottom: Graphics.height + this.height,
        none: this.y,
    }[outsideY]
    
    return [x, y]
}

Window_ChoiceList.prototype.startAnimation = function() {
    Plugin.choiceAnimation.play()
}

Window_ChoiceList.prototype.loadPluginCommandWindowskin = function(){
    if(Plugin.getInitialSettings().skin){
        this.windowskin = ImageManager.loadSystem(Plugin.getInitialSettings().skin)
    }
}

}

/* ---------------------------------- START --------------------------------- */
{

Window_ChoiceList.prototype.beforeStart = function() {
    this.loadWindowskin()
}

Window_ChoiceList.prototype.onStart = function() {
    this.startAnimation()
    this.processConfirmationDelay()
}

Window_ChoiceList.prototype.processConfirmationDelay = function() {
    const onTimeOut = () => Plugin.isOkEnabled = true
    setTimeout(onTimeOut, Plugin.param().okDelay)
}

}

/* ----------------------------- SELECTION PHASE ---------------------------- */
{

Window_ChoiceList.prototype.canDoBeforeSelection = function(index) {
    return $gameMessage.isChoice() && index > -1 && index !== this.index()
}

Window_ChoiceList.prototype.beforeSelection = function(index){
    
}

Window_ChoiceList.prototype.isNewSelection = function(){
    return $gameMessage.isChoice() && this.index() !== Plugin.lastChoiceIndex
}

Window_ChoiceList.prototype.getCurrentChoiceSettings = function(){
    return Plugin.getChoiceSettings(this.index())
}

Window_ChoiceList.prototype.onNewSelection = function(){
    const index = this.index()
    const currentChoice = Plugin.getChoiceSettings(index)
    const textColor = currentChoice.textColor
    const cursorColor = currentChoice.cursorColor

    if(this.canHighlightBitmapText(textColor)){
        this.highlightBitmapChoiceText(index, textColor)

    }else{
        Plugin.canChangeTextColor = false
        if(Plugin.lastChoiceIndex > -1){
            this.redrawItemForHighlightChoiceText(Plugin.lastChoiceIndex)
        }

        Plugin.canChangeTextColor = true
        this.redrawItemForHighlightChoiceText(this.index())
    }
    
    this._cursorSprite.setBlendColor(cursorColor)
    
    Plugin.lastChoiceIndex = index
}

Window_ChoiceList.prototype.canHighlightBitmapText = function(textColor){
    return Imported.Eli_BitmapFont && Eli.BitmapFont.pro && textColor
}

Window_ChoiceList.prototype.changeColorOfSelectedText = function() {
    if(this.canChangeTextColor()){
        this.processColorChangeOfSelectedText()
    }
}

Window_ChoiceList.prototype.canChangeTextColor = function() {
    return this.index() > -1 && Plugin.canChangeTextColor
}

Window_ChoiceList.prototype.processColorChangeOfSelectedText = function() {
    const currentChoice = Plugin.getChoiceSettings(this.index())
    const textColor = currentChoice.textColor || Plugin.getChoiceDefaultSettings().textColor
    
    if(textColor){
        this.changeTextColor(textColor)
    }
}

Window_ChoiceList.prototype.redrawItemForHighlightChoiceText = function(index) {
    const rect = this.itemRect(index)
    this.contents.clearRect(rect.x, rect.y, rect.width, rect.height)
    this.drawItem(index)
}

Window_ChoiceList.prototype.highlightBitmapChoiceText = function(index, color){
    const bitmap = this.contents
    const source = bitmap._canvas || bitmap._image
    const ctx = source.getContext("2d")
    const rect = this.itemLineRect(index)
    const textColor = color
    const oldColor = bitmap.textColor

    ctx.fillStyle = textColor
    ctx.globalCompositeOperation = "source-atop"  
    bitmap.fillRect(rect.x, rect.y, rect.width, rect.height)
    ctx.fillStyle = oldColor
    ctx.globalCompositeOperation = "source-over"
}

}

/* -------------------------------- END PHASE ------------------------------- */
{

Window_ChoiceList.prototype.onClose = function() {
    this.resetFontSettings()
    this._index = 0
    Plugin.resetAllSettings()
    this._cursorSprite.setBlendColor([0, 0, 0, 0])
    setTimeout(() => {
        this.alpha = 1
        this._isWindow = true
    }, Eli.Utils.framesToMiliSeconds(this.openness/32))
    this.loadWindowskin()
}

}

}// End Choices

}