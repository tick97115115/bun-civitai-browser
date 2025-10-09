import { getSettings, setSettings } from "./service";
import { test, expect, describe } from "bun:test";

describe(`test settings module`, () => {
  test(`test getSettings() function`, () => {
    const settings = getSettings();
    expect(settings.basePath !== "").toBe(true);
  });

  test(`test setSettings() function`, () => {
    const originalCivitaiToken = getSettings().civitaiToken;
    const testUseToken = "12345" + originalCivitaiToken;
    try {
      const settings = setSettings({
        civitaiToken: testUseToken,
      });
      expect(getSettings(true).civitaiToken).toBe(testUseToken);
    } catch (error) {
      throw error;
    } finally {
      const settings = setSettings({
        civitaiToken: originalCivitaiToken,
      });
    }
  });
});
