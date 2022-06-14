import * as Localization from "expo-localization";
import i18n from "i18n-js";
import english from "../lang/en.json";

i18n.translations = {
    en: english,
};

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default i18n;
