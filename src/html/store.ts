import { atomWithImmer } from 'jotai-immer';
import { _settingsValidator, defaultSettings } from "../modules/settings/models";

export const settingsImmerAtom = atomWithImmer(defaultSettings);