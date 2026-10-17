(function () {
  "use strict()";

  const STORAGE_KEY = "smartagriculture-entry-records-v1";

  const sensorsForm = document.getElementById("sensors-form");
  const errorBanner = document.getElementById("form-error-banner");
  const entriesList = document.getElementById("entries-list");
  const entryCount = document.getElementById("entry-count");
  const emptyState = document.getElementById("empty-state");
  const btnClearAll = document.getElementById("btn-clear-all");

  const inputName = document.getElementById("bay-name");
  const inputPh = document.getElementById("ph");
  const inputEc = document.getElementById("ec");
  const inputTemp = document.getElementById("temp");
  const inputRh = document.getElementById("rh");

  let entries = loadEntries();

  render();

  function loadEntries() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to load entries from your data store", error);
      return [];
    }
  }

  function saveEntries() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (error) {
      console.error("Failed to write to your data store", error);
    }
  }
});
