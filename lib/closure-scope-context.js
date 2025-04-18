'use strict';

/**
 * Надо договориться об общепринятых определениях в жсе в этом месте
 * Будем действовать итерациями
 */

// итерация 1
/**
 * scope'ом называют область видимости (функциональная, блочная). О нем тоже
 * можно думать как об объекте в js'e, к полям которого мы обращаемся
 * через идентификаторы
 */

/**
 * closure - это лексическое окружение функции. То есть связка
 * функция + набор идентификаторов, к которым функция может обращаться.
 * То как происходит привязка функции к контексту это другой вопрос
 * (в js'e это делается в момент создания функции)
 */

/**
 * execution context - это объект (через идентификатор this у обычных функций в js'e),
 * который создается в момент вызова функции
 */
