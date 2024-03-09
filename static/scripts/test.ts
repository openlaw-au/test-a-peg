import { test } from "../../pkg/pest_site.js";
import { myCodeMirror } from "./editor.js";

declare const CodeMirror: any;

const handleClick = async () => {
  const test_output: any[] = test();

  const area = document.querySelector<HTMLDivElement>("#test-data")!;
  test_output.forEach((v) =>
    area.appendChild(document.createTextNode(`id: ${v[0]}; success: ${v[1]}`)),
  );
};

const button = document.querySelector<HTMLButtonElement>("#testBtn")!;

button.onclick = handleClick;
