import { atomWithImmer } from 'jotai-immer';
import { _settingsValidator, defaultSettings } from "../modules/settings/models";
import { ModelsRequestOpts } from "../modules/civitai/models/models_endpoint";

export const settingsImmerAtom = atomWithImmer(defaultSettings);