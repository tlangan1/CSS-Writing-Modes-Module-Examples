addEventListener("load", onLoad);

function onLoad() {
  document
    .querySelector("#direction")
    .addEventListener("change", createChangeProperty("--direction"));

  document
    .querySelector("#text-combine-upright")
    .addEventListener("change", createChangeProperty("--text-combine-upright"));

  document
    .querySelector("#writing-mode")
    .addEventListener("change", createChangeProperty("--writing-mode"));

  document
    .querySelector("#text-orientation")
    .addEventListener("change", createChangeProperty("--text-orientation"));

  // getProperty usage: cssHTMLProperties.getProperty("--some-property")
  // setProperty usage: cssHTMLProperties.setProperty("--some-property", "2")
  var cssHTMLProperties = CSSProperties(document.querySelector("html"));

  // ----------------------------------------------------------

  function createChangeProperty(propertyName) {
    return changeProperty;

    function changeProperty(event) {
      cssHTMLProperties.setProperty(propertyName, event.srcElement.value);
    }
  }

  // --------------------------------------------------
  // The helper functions for the executable code above
  function CSSProperties(element) {
    function getProperty(propertyName) {
      var rs = getComputedStyle(element);
      return rs.getPropertyValue(propertyName);
    }
    function setProperty(propertyName, propertyValue) {
      element.style.setProperty(propertyName, propertyValue);
    }

    return { getProperty: getProperty, setProperty: setProperty };
  }
}
