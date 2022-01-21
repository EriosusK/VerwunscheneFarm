/*:
 * @target MV MZ
 * @plugindesc Make items temporarily unbuyable in shops
 * @author Garbata Team
 * @url https://рпг.укр/плагін/GRB_ForbidBuying.js
 *
 * @help This plugin allows to forbid buying certain items in shops
 * by assigning a switch to it. To assign a switch to the item, do
 * add the following note to the item:
 * <forbid buying switch 123>
 * (replace 123 with your switch number)
 *
 * If that switch is ON, then buying this item is forbidden.
 *
 * By default, the unbuyableitem is grayed out. As an alternative, you
 * can trigger a common event if the item-buying is forbidden.
 * To do this, add the following text to the item's note:
 * <forbid buying common event 12>
 * (replace 12 with the common event number)
 *
 * This works with items, armours and weapons.
 *
 * This plugin is placed into public domain according to the CC0 public domain
 * dedication. See https://creativecommons.org/publicdomain/zero/1.0/ for more
 * information.
 *
 * Plugin page (in Ukrainian): https://рпг.укр/GRB_ForbidBuying
 */
/*:uk
 * @target MV MZ
 * @plugindesc Тимчасово заборонити купівлю деяких речей
 * @author Команда Гарбата
 * @url https://рпг.укр/плагін/GRB_ForbidBuying.js
 *
 * @help Цей плагін дозволяє заборонити купівлю деяких речей
 * в магазинах в залежності від перемикача. Щоб вказати перемикач
 * для речі додайте такий текст в її нотатку:
 * <заборонити купляти перемикачем 123>
 * (замініть 123 на номер вашого перемикача)
 *
 * Коли перемикач буде УВІМКнений, купівля речі буде заборонена.
 *
 * Звичайно заборонені для купівлі речі відображаються сірим кольором.
 * Як варіант, можна зробити, щоб після спроби купити річ виконувалася
 * спільна (загальна) подія. Для цього додайте наступний текст в
 * нотатку речі:
 * <заборонити купляти спільною подією 12>
 * (замініть 12 на номер спільної події)
 *
 * Це працює зі звичайними речами, зброєю та бронею.
 *
 * Цей плагін передано до суспільного надбання згідно з CC0. Детальніше див.
 * на сторінці https://creativecommons.org/publicdomain/zero/1.0/deed.uk
 *
 * Сторінка плагіну: https://рпг.укр/GRB_ForbidBuying
 */
/*:be
 * @target MV MZ
 * @plugindesc Часова забараніць куплю некаторых рэчаў
 * @author Каманда Гарбата
 * @url https://рпг.укр/плагін/GRB_ForbidBuying.js
 *
 * @help Гэты плагін дазваляе забараніць куплю некаторых рэчаў
 * у крамах у залежнасці ад пераключальніка. Каб вызначыць
 * пераключальнік для рэчы дадайце такі тэкст у яе нататку:
 * <забараніць купляць пераключальнікам 123>
 * (замяніце 123 на нумар вашага пераключальніка)
 *
 * Калі пераключальнік будзе УКЛючаны, купля будзе забароненая.
 *
 * Звычайна забароненыя для куплі рэчы паказваюцца серым колерам.
 * Як варыянт, можна зрабіць, каб пасля спробы купіць рэч выконвалася
 * пэўная супольная (агульная) падзея. Для гэтага дадайце такі тэкст
 * у нататку рэчы:
 * <забараніць купляць супольнай падзеяй 12>
 * (замяніце 12 на нумар супольнай падзеі)
 *
 * Гэта працуе са звычайнымі рэчамі, зброяй і бранёй.
 *
 * Гэты плагін пярэданы ў грамадскі набытак згодна з CC0. Падрабязней гл. на
 * старонцы https://creativecommons.org/publicdomain/zero/1.0/deed.be
 *
 * Старонка плагіна (па-ўкраінску): https://рпг.укр/GRB_ForbidBuying
 */
/*:ru
 * @target MV MZ
 * @plugindesc Временно запретить покупку некоторых вещей
 * @author Команда Гарбата
 * @url https://рпг.укр/плагін/GRB_ForbidBuying.js
 *
 * @help Этот плагин позволяет запретить покупку некоторых вещей
 * в магазинах в зависимости от переключателя. Чтобы определить
 * переключатель для вещь, добавьте такой текст в её заметку:
 * <запретить покупать переключателем 123>
 * (замените 123 на номер вашего переключателя)
 *
 * Если переключатель будет ВКЛючён, покупка будет запрещена.
 *
 * Обычно запрещённые для покупки вещь показываются серым цветом.
 * Как вариант, можно сделать, чтобы после попытки купить вещь
 * вызывалось какое-то общее событие. Для этого добавьте такой текст
 * в заметку вещи:
 * <запретить покупать общим событием 12>
 * (замените 12 на номер общего события)
 *
 * Это работает с обычными вещами, оружием и бронёй.
 *
 * Этот плагин передан в общественное достояние согласно CC0. Подробнее см. на
 * странице https://creativecommons.org/publicdomain/zero/1.0/deed.ru
 *
 * Страница плагина (на украинском): https://рпг.укр/GRB_ForbidBuying
 */

(function () {
  if (!window.Imported) {
    window.Imported = {};
  }
  window.Imported.GRB_ForbidBuying = '1.0';
  

  var Scene_Boot_start = Scene_Boot.prototype.start;
  /**
   * Overwritten version of Scene_Boot.start. This function is after
   * the database has finished loading, so we can safely manipulate it.
   */
  Scene_Boot.prototype.start = function () {
    var variables = ['$dataItems', '$dataArmors', '$dataWeapons'];
    variables.forEach(function (variableName) {
      processDataArrayNotes(window[variableName]);  
    });

    Scene_Boot_start.call(this);
  }

  /**
   * Read the notes in a single data array, and modifies the
   * objects in it according to the notes.
   *
   * @param {Array} dataArray One of global variables $dataItems,
   * $dataArmors, $dataWeapons (it is edited in-place)
   */
  function processDataArrayNotes(dataArray) {
    for (var i = 1; i < dataArray.length; i++) {
      processDataObjectNotes(dataArray[i]);
    }
  }

  /**
   * Modify a single data object (since element of $dataItems,
   * $dataWeapons, $dataArmors) according to its notes.
   *
   * @param {Object} obj Single element of array like $dataItems
   * (it is edited in-place)
   */
  function processDataObjectNotes(obj) {
    if (obj.note) {
      processSwitchNote(obj);
      processCommonEventNote(obj)
    }
  }

  /**
   * Modify a single data object to contain information about
   * what switch determines if it can be bought or sold.
   *
   * @param {Object} obj Single element of array like $dataItems
   * (it is edited in-place)
   */
  function processSwitchNote(obj) {
    var re = /<(?:forbid buying switch|заборонити купляти перемикачем|забараніць купляць пераключальнікам|запретить покупать переключателем)\s+(\d+)>/;
    var match = obj.note.match(re);

    if (match) {
      obj.grbForbidBuyingSwitch = Number(match[1]);
    }
  }

  /**
   * Modify a single data object to contain information about
   * whether the disabled item calls a common event.
   *
   * @param {Object} obj Single element of array like $dataItems
   * (it is edited in-place)
   */
  function processCommonEventNote(obj) {
    var re = /<(?:forbid buying common event|заборонити купляти (?:спільною |загальною )?подією|забараніць купляць (?:агульнай |супольнай )падзеяй|запретить покупать общим событием)\s+(\d+)>/;
    var match = obj.note.match(re);

    if (match) {
      obj.grbForbidBuyingCommonEvent = Number(match[1]);
    }
  }

  /**
   * Checks if the buying of an item is disabled.
   *
   * @param {Object} item An item, weapon or armour from the game data
   * (an element of $gameItems, $gameWeapons, $gameArmours array)
   * @returns {boolean} True if the item buying wasn't forbidden.
   */
  function isBuyingForbidden(item) {
    return item.grbForbidBuyingSwitch &&
       $gameSwitches.value(item.grbForbidBuyingSwitch);
  }

  var Window_ShopBuy_isEnabled = Window_ShopBuy.prototype.isEnabled;
  /**
   * Overwritten version of the function to determine if item buying
   * is enabled for a given item.
   *
   * It disables the item in the following conditions:
   *
   * - If a switch was set to disable it
   * - If the switch is ON
   * - If there is no common event to run when the item is disabled
   */
  Window_ShopBuy.prototype.isEnabled = function (item) {
    if (isBuyingForbidden(item) && !item.grbForbidBuyingCommonEvent) {
        return false;
    } else {
        return Window_ShopBuy_isEnabled.call(this, item);
    }
  }

  /**
   * @var {Number?} lingeringCommonEvent ID of the common event that
   * must be called after returning to the map scene.
   */
  var lingeringCommonEvent = null;

  /**
   * @var {integer?} lingeringBuyIndex If set to number, the index is
   * the index of the item that was selected for buying. Next time the
   * shop scene will be called, it will be pre-opened on that item.
   * Usually set to null.
   */
  var lingeringBuyIndex = null;

  var Scene_Shop_onBuyOk = Scene_Shop.prototype.onBuyOk;
  /**
   * Rewritten version of the function that is called once the
   * player confirms buying something.
   *
   * This version calls a common event if the item buying is forbidden
   * and there is a common event to be called once the item is forbidden.
   */
  Scene_Shop.prototype.onBuyOk = function () {
    var actionOverriden = false;

    if (this._buyWindow) {
      var item = this._buyWindow.item();
      if (isBuyingForbidden(item) && item.grbForbidBuyingCommonEvent) {
        lingeringCommonEvent = item.grbForbidBuyingCommonEvent;
        lingeringBuyIndex = this._buyWindow.index();
        SceneManager.pop();
        actionOverriden = true;
      }
    }

    if (!actionOverriden) {
      Scene_Shop_onBuyOk.call(this);
    }
  }

  var Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand;
  /**
   * Rewritten version of execute command. It checks if the previous
   * command was a shop call, and, if it was, checks if there is
   * a lingering common event to be called.
   *
   * If there is, it calls it, and then returns to the shop call
   * (that is, decreases the index to ensure that the shop call is
   * called again). This ensures that after calling the common
   * event, shop is shown again.
   */
  Game_Interpreter.prototype.executeCommand = function() {
    if (this._index > 0
                && [302,605].includes(this._list[this._index - 1].code)
                && lingeringCommonEvent) {
      do {
        this._index--;
      } while (this._index > 0 && this._list[this._index].code != 302);

      var commonEvent = $dataCommonEvents[lingeringCommonEvent];
      if (commonEvent) {
        lingeringCommonEvent = null;
        var eventId = this.isOnCurrentMap() ? this._eventId : 0;
        this.setupChild(commonEvent.list, eventId);
      }
      return true;
    } else {
      return Game_Interpreter_executeCommand.call(this);
    }
  }

  var Scene_Shop_start = Scene_Shop.prototype.start;
  /**
   * Overriden version of Scene_Shop.start. If the shop was
   * exited temporarily to call the common event, then returns
   * to the buy section with the same item index.
   */
  Scene_Shop.prototype.start = function () {
    Scene_Shop_start.call(this);
    if (lingeringBuyIndex !== null) {
      this._buyWindow.select(lingeringBuyIndex);
      this._commandWindow.deactivate();
      this.commandBuy();
      lingeringBuyIndex = null;
    }
  }

})();