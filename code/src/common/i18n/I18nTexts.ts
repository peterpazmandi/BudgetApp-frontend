/* eslint-disable @typescript-eslint/no-empty-object-type */
import I18nTextsAuth from "./texts/I18nTextsAuth";
import I18nTextsCommon from "./texts/I18nTextsCommon";
import I18nTextsUser from "./texts/I18nTextsUser";

export default interface I18nTexts extends I18nTextsCommon, I18nTextsAuth, I18nTextsUser {}
