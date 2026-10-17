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

  function evaluateRisk(ph, ec, temp, rh) {
    if (
      (ph < 5.0 || ph > 7.5) &&
      (temp < 55 || temp > 95) &&
      (ec < 0.2 || ec > 4.5) &&
      (rh < 30 || rh > 90)
    ) {
      return { level: "critical", label: "Critical Hazard" };
    }
    if (
      ph >= 5.5 &&
      ph <= 6.5 &&
      temp >= 64.4 &&
      temp <= 71.6 &&
      ec >= 1.0 &&
      ec <= 2.0 &&
      rh >= 50 &&
      rh <= 70
    ) {
      return { level: "optimal", label: "Optimal" };
    }

    return { level: "warning", label: "Warning" };
  }

  function validateInput(data) {
    const errors = [];

    if (!data.name.trim()) {
      errors.push("Bay Name is a required field");
    }
    if (isNaN(data.ph) || data.ph < 0 || data.ph > 14) {
      errors.push("pH must be a number between 0 and 14");
    }
    if (isNaN(data.ec) || data.ec < 0 || data.ec > 20) {
      errors.push(
        "Electrical Conductivity must be a number between 0 and 20 mS/cm",
      );
    }
    if (isNaN(data.temp) || data.temp < 20 || data.temp > 110) {
      errors.push("Temperature must be a number between 20 and 110 F");
    }
    if (isNaN(data.rh) || data.rh < 0 || data.rh > 100) {
      errors.push("Relative Humidity must be a percentage between 0 and 100");
    }
    return errors;
  }
});
