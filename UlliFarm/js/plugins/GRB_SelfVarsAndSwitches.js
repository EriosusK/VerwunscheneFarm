//==============================================================================
// GRB_SelfVarsAndSwitches.js
//==============================================================================
/*:
 * @plugindesc Self variables and more self-switches
 * @author Garbata team
 * @url https://rpgukr.one/GRB_SelfVarsAndSwitches
 * @target MZ MV
 *
 * @help
 * This plugin allows to make certain variables and switches event-specific,
 * that is, they will be different for every event, just like self-switches.
 *
 * This allows to increase the number of self-switches and create event-specific
 * variables.
 *
 * For this, you specify the prefix for the names of self-switches and
 * self-variables. By default, the prefixes are (Лок.), (Лак.) and (Self).
 * All the variable and switch names that start with this prefix will be local
 * to the event, for example:
 * (Лок.)Назва
 * (Лок.) Назва
 * (Лак.)назва
 * (Лак.) назва
 * (Self)name
 * (Self) name
 *
 * You can change the prefix in the "prefixes" parameter.
 *
 * Note that self-switches and self-variables *do not* help with the memory
 * consumption. Just like regular switches and variables, their values
 * stay in memory during the all play time. However, they allow re-using
 * the existing events, because you can copy them without changing the switches
 * and variables.
 *
 * This plugin is placed into public domain according to the CC0 public domain
 * dedication. See https://creativecommons.org/publicdomain/zero/1.0/ for more
 * information.
 *
 * @param prefixes
 * @text Prefixes
 * @desc If switch/variable has a name starting with
 * one of the prefixes, it's event-local.
 * @type string[]
 * @default ["(Лок.)","(лок.)","(Лак.)","(лак.)","(Self)","(self)"]
 */
/*:uk
 * @plugindesc Локальні змінні та більше локальних перемикачів
 * @author Команда Гарбата
 * @url https://rpgukr.one/GRB_SelfVarsAndSwitches
 * @target MZ MV
 *
 * @help
 * Цей плагін дозволяє зробити певні змінні та перемикачі зв'язаними
 * з подіями, тобто вони вибудуть різні в різних подіях, зовсім як локальні
 * перемикачі.
 *
 * Це дозволяє збільшити кількість локальних перемикачів та створити змінні,
 * локальні для події.
 *
 * Щоб це зробити, перед назвою перемикачів або змінних треба поставити
 * префікс. Стандартні префікси — (Лок.), (Лак.) або (Self). Усі змінні
 * та перемикачі, назви яких починаються з цих префіксів, будуть локальними
 * для події, наприклад:
 * (Лок.)Назва
 * (Лок.) Назва
 * (Лак.)назва
 * (Лак.) назва
 * (Self)name
 * (Self) name
 *
 * Ви можете змінити префікси в параметрі «Префікси».
 *
 * Зверніть увагу, що локальні перемикачі та змінні *не міняють* використання
 * пам'яті. Як і у звичайних змінних та перемикачів, їх значення залишається
 * в пам'яті весь час гри. Однак вони дозволяють повторно використовувати
 * існучі події, бо їх можна копіювати, не міняючи команди в них.
 *
 * Цей плагін передано до суспільного надбання згідно з CC0. Детальніше див.
 * на сторінці https://creativecommons.org/publicdomain/zero/1.0/deed.uk
 *
 * @param prefixes
 * @text Префікси
 * @desc Ті перемикачі/змінні, назва яких починається з одного
 * з цих префіксів, стануть локальними.
 * @type string[]
 * @default ["(Лок.)","(лок.)","(Лак.)","(лак.)","(Self)","(self)"]
 */
/*:ru
 * @plugindesc Локальные переменные и больше локальных переключателей
 * @author Команда Гарбата
 * @url https://rpgukr.one/GRB_SelfVarsAndSwitches
 * @target MZ MV
 *
 * @help
 * Этот плагин позволяет сделать определённые переменные и переключатели
 * связанными с событиями, то есть они будут разные в разных событиях —
 * совсем как локальные переключатели.
 *
 * Таким образом можно увеличить количество локальных переключателей и создать
 * переменные, локальные для события.
 *
 * Чтобы это сделать, перед названием переключателей или переменных следует
 * поставить префикс. Стандартные префиксы — (Лок.), (Лак.) или (Self). Все
 * переменные и переключатели, названия которых начинаются с этих префиксов,
 * будут локальными для события, например:
 * (Лок.)Название
 * (Лок.) Название
 * (Лак.)назва
 * (Лак.) назва
 * (Self)name
 * (Self) name
 *
 * Изменить префиксы можно в параметре «Префиксы».
 *
 * Обратите внимание, что локальные переключатели и переменные *не меняют*
 * использование памяти. Как и у обычных переменных и переключателей, их
 * значения остаются в памяти на всём протяжении игры. Однако они позволяют
 * повторно использовать существующие события, потому что их можно копировать,
 * не меняя команды в них.
 *
 * Этот плагин передан в общественное достояние согласно CC0. Подробнее см. на
 * странице https://creativecommons.org/publicdomain/zero/1.0/deed.ru
 *
 * @param prefixes
 * @text Префиксы
 * @desc Те переключатели/переменные, название которых начинается
 * с одного из этих префиксов, станут локальными.
 * @type string[]
 * @default ["(Лок.)","(лок.)","(Лак.)","(лак.)","(Self)","(self)"]
 */
/*:be
 * @plugindesc Лакальныя зменныя і болей лакальных пераключальнікаў
 * @author Каманда Гарбата
 * @url https://rpgukr.one/GRB_SelfVarsAndSwitches
 * @target MZ MV
 *
 * @help
 * Гэты плагін дазваляе зрабіць пэўныя зменныя і пераключальнікі звязанымі
 * з падзеямі, г. зн. яны будуць розныя ў розных падзеях, цалкам як лакальнія
 * пераключальнікі.
 *
 * Такім чынам можна павялічыць колькасць лакальных пераключальнікаў і стварыць
 * зменныя, лакальныя для падзеі.
 *
 * Каб гэта зрабіць, перад назвай пераключальнікаў або зменных трэба паставіць
 * прэфікс. Стандартныя прэфіксы — (Лак.), (Лок.) ці (Self). Усе зменныя
 * і пераключальнікі, назвы якіх пачынаюцца з гэтых прэфіксаў, будуць
 * лакальнымі для падзеі, напрыклад:
 * (Лак.)назва
 * (Лак.) назва
 * (Лок.)Назва
 * (Лок.) Назва
 * (Self)name
 * (Self) name
 *
 * Змяніць прэфіксы можна ў параметры «Прэфіксы».
 *
 * Звярніце ўвагу, што лакальныя пераключальнікі і зменныя *не мяняюць*
 * выкарыстанне памяці. Як і ў звычайных зменных і пераключальнікаў, їхнія
 * значэнні застаюцца ў памяці ўвесь час гульні. Але яны дазваляюць паўторна
 * выкарыстоўваць існыя падзеі, таму што іх можна капіяваць, не мяняючы
 * каманды ў іх.
 *
 * Гэты плагін пярэдадзены ў грамадскі набытак згодна з CC0. Падрабязней
 * гл. на старонцы https://creativecommons.org/publicdomain/zero/1.0/deed.be
 *
 * @param prefixes
 * @text Прэфіксы
 * @desc Тыя пераключальнікі/зменныя, назва якіх пачынаецца
 * з аднаго з гэтых прэфіксаў, стануць лакальнымі.
 * @type string[]
 * @default ["(Лак.)","(лак.)","(Лок.)","(лок.)","(Self)","(self)"]
 */

if (typeof Imported === 'undefined') {
  Imported = {};
}
Imported.GRB_SelfVarsAndSwitches = 0.01;

$gameSelfVariables = null;

function Game_SelfVariables() {
  this.initialize.apply(this, arguments);
}

Game_SelfVariables.prototype.initialize = function() {
  this.clear();
};

Game_SelfVariables.prototype.clear = function() {
  this._data = {};
};

Game_SelfVariables.prototype.value = function(key) {
  return this._data[key] || 0;
};

Game_SelfVariables.prototype.setValue = function(key, value) {
  if (typeof value === 'number') {
    value = Math.floor(value);
  }

  if (value !== 0) {
    this._data[key] = value;
  } else {
      delete this._data[key];
  }
  this.onChange();
};

Game_SelfVariables.prototype.onChange = function() {
    $gameMap.requestRefresh();
};

(function () {
  var parameters = PluginManager.parameters('GRB_SelfVarsAndSwitches');
  var prefixes = ["(Лок.)", "(лок.)", "(Self)", "(self)"];
  if (parameters.prefixes) {
    prefixes = JSON.parse(parameters.prefixes);
  }

  function hasSelfPrefix(name) {
    if (typeof name !== "string") {
      return false;
    }

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var start = name.substring(0, prefix.length);
      if (start === prefix) {
        return true;
      }
    }

    return false;
  }

  var Game_Event_meetsConditions = Game_Event.prototype.meetsConditions;
  Game_Event.prototype.meetsConditions = function(page) {
    $gameSystem.grbMapId = this._mapId;
    $gameSystem.grbEventId = this._eventId;

    var result = Game_Event_meetsConditions.apply(this, arguments);

    delete $gameSystem.grbMapId;
    delete $gameSystem.grbEventId;

    return result;
  }

  var Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand;
  Game_Interpreter.prototype.executeCommand = function() {
    $gameSystem.grbMapId = this._mapId;
    $gameSystem.grbEventId = this._eventId;

    var result = Game_Interpreter_executeCommand.apply(this, arguments);

    delete $gameSystem.grbMapId;
    delete $gameSystem.grbEventId;

    return result;
  }

  var Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
  Game_Interpreter.prototype.command101 = function() {
    $gameMessage.grbMapId = this._mapId;
    $gameMessage.grbEventId = this._eventId;
    return Game_Interpreter_command101.apply(this, arguments);
  }

  var Game_Interpreter_setupNumInput = Game_Interpreter.prototype.setupNumInput;
  Game_Interpreter.prototype.setupNumInput = function(params) {
    $gameMessage.grbMapId = this._mapId;
    $gameMessage.grbEventId = this._eventId;
    return Game_Interpreter_setupNumInput.apply(this, arguments);
  }

  var Game_Interpreter_setupItemChoice = Game_Interpreter.prototype.setupItemChoice;
  Game_Interpreter.prototype.setupItemChoice = function(params) {
    $gameMessage.grbMapId = this._mapId;
    $gameMessage.grbEventId = this._eventId;
    return Game_Interpreter_setupItemChoice.apply(this, arguments);
  }

  var Window_Message_startMessage = Window_Message.prototype.startMessage;
  Window_Message.prototype.startMessage = function() {
    this.grbMapId = $gameMessage.grbMapId;
    this.grbEventId = $gameMessage.grbEventId;
    Window_Message_startMessage.apply(this, arguments)
  };

  var Window_NumberInput_start = Window_NumberInput.prototype.start;
  Window_NumberInput.prototype.start = function () {
    $gameSystem.grbMapId = this.grbMapId = $gameMessage.grbMapId;
    $gameSystem.grbEventId = this.grbEventId = $gameMessage.grbEventId;

    var result = Window_NumberInput_start.apply(this, arguments);

    delete $gameSystem.grbMapId;
    delete $gameSystem.grbEventId;
    return result;
  }

  var Window_NumberInput_processOk = Window_NumberInput.prototype.processOk;
  Window_NumberInput.prototype.processOk = function () {
    $gameSystem.grbMapId = this.grbMapId;
    $gameSystem.grbEventId = this.grbEventId;

    var result = Window_NumberInput_processOk.apply(this, arguments);

    delete $gameSystem.grbMapId;
    delete $gameSystem.grbEventId;
    return result;
  }

  var Window_EventItem_start = Window_EventItem.prototype.start;
  Window_EventItem.prototype.start = function() {
    this.grbMapId = $gameMessage.grbMapId;
    this.grbEventId = $gameMessage.grbEventId;
    return Window_EventItem_start.apply(this, arguments);
  }

  var Window_EventItem_onOk = Window_EventItem.prototype.onOk;
  Window_EventItem.prototype.onOk = function () {
    $gameSystem.grbMapId = this.grbMapId;
    $gameSystem.grbEventId = this.grbEventId;

    var result = Window_EventItem_onOk.apply(this, arguments)

    delete $gameSystem.grbMapId;
    delete $gameSystem.grbEventId;
    return result;
  }

  var Window_EventItem_onCancel = Window_EventItem.prototype.onCancel;
  Window_EventItem.prototype.onCancel = function() {
    $gameSystem.grbMapId = this.grbMapId;
    $gameSystem.grbEventId = this.grbEventId;

    var result = Window_EventItem_onCancel.apply(this, arguments)

    delete $gameSystem.grbMapId;
    delete $gameSystem.grbEventId;
    return result;
  };

  var Window_ScrollText_startMessage = Window_ScrollText.prototype.startMessage;
  Window_ScrollText.prototype.startMessage = function() {
    this.grbMapId = $gameMessage.grbMapId;
    this.grbEventId = $gameMessage.grbEventId;
    return Window_ScrollText_startMessage.apply(this, arguments);
  }

  var Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
  Window_Base.prototype.convertEscapeCharacters = function(text) {
    $gameSystem.grbMapId = this.grbMapId;
    $gameSystem.grbEventId = this.grbEventId;

    var result = Window_Base_convertEscapeCharacters.apply(this, arguments);

    delete $gameSystem.grbMapId;
    delete $gameSystem.grbEventId;

    return result;
  }

  var Game_Switches_value = Game_Switches.prototype.value;
  Game_Switches.prototype.value = function(switchId) {
    if (hasSelfPrefix($dataSystem.switches[switchId])) {
      var key = [$gameSystem.grbMapId, $gameSystem.grbEventId, switchId];
      return $gameSelfSwitches.value(key);
    }

    return Game_Switches_value.apply(this, arguments);
  };

  var Game_Switches_setValue = Game_Switches.prototype.setValue;
  Game_Switches.prototype.setValue = function(switchId, value) {
    if (hasSelfPrefix($dataSystem.switches[switchId])) {
      var key = [$gameSystem.grbMapId, $gameSystem.grbEventId, switchId];
      return $gameSelfSwitches.setValue(key, value);
    }

    return Game_Switches_setValue.apply(this, arguments);
  };

  var Game_Variables_value = Game_Variables.prototype.value;
  Game_Variables.prototype.value = function(variableId) {
    if (hasSelfPrefix($dataSystem.variables[variableId])) {
      var key = [$gameSystem.grbMapId, $gameSystem.grbEventId, variableId];
      return $gameSelfVariables.value(key);
    }

    return Game_Variables_value.apply(this, arguments);
  };

  var Game_Variables_setValue = Game_Variables.prototype.setValue;
  Game_Variables.prototype.setValue = function(variableId, value) {
    if (hasSelfPrefix($dataSystem.variables[variableId])) {
      var key = [$gameSystem.grbMapId, $gameSystem.grbEventId, variableId];
      return $gameSelfVariables.setValue(key, value);
    }

    return Game_Variables_setValue.apply(this, arguments);
  };

  var DataManager_createGameObjects = DataManager.createGameObjects;
  DataManager.createGameObjects = function() {
    DataManager_createGameObjects.call(this);
    $gameSelfVariables = new Game_SelfVariables();
  }

  var DataManager_makeSaveContents = DataManager.makeSaveContents;
  DataManager.makeSaveContents = function() {
      var contents = DataManager_makeSaveContents.call(this);
      contents.selfVariables = $gameSelfVariables;

      return contents;
  }

  var DataManager_extractSaveContents = DataManager.extractSaveContents;
  DataManager.extractSaveContents = function(contents) {
    DataManager_extractSaveContents.call(this, contents);
    $gameSelfVariables = contents.selfVariables;
  }

})();