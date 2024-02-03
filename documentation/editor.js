// Only start using the editor if there is one
if (document.getElementById("editor") !== null) {
    const editor_element = document.getElementById("editor");

    // Initialize the editor
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");

    fetch("https://cdn.jsdelivr.net/gh/RandomGamingDev/VecJs/documentation/unit-test.js", { cache: "reload" })
        .then((res) => res.text())
        .then((txt) => editor.setValue(txt));

    const run_button = document.getElementById("exec-button")
    run_button.innerHTML += `<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true"><g stroke="none" fill="currentColor"><polygon id="play" points="0 0 16 8 0 16"></polygon></g></svg>`;
    run_button.style = "padding: 10px; border: 1px solid; border-radius: 25px;"
    const fake_console = document.getElementById("fake-console");
    fake_console.style = "padding: 10px; background-color: #374151; border-radius: 25px;";
    run_button.onclick = () => {
        eval(editor.getValue());
        fake_console.innerHTML = "";
        for (const log of console.logs)
            fake_console.innerHTML += `${ String(log) }<br/>`;
        console.logs = [];
    };
}
