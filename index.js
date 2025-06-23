// index.js

function render(options) {
  // Placeholder render logic
  const container = document.querySelector(options.target);
  if (container) {
    container.innerHTML = `<div>PopCal.js initialized. View: ${options.view}</div>`;
  }
}

export default { render };
