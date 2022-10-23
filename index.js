"use strict";

const btn = document.getElementById("clicky");
const number = document.getElementById("number");
const name = document.getElementById("name");
const tags = document.getElementById("tags");
const text = document.getElementById("text");
const query = document.getElementById("query");
const field = document.getElementById("field");
const alert = document.getElementById("alert");
const clr = document.getElementById("cleary");
const values = [];

const createVal = (num, nam, tag, tex) => {
  return `('${num}', '${nam}', '${tag}', '${tex}')`;
};

const createQuery = () => {
  let s = "";
  let i = 0;
  for (const val of values) {
    s += val;
    i++;
    if (i < values.length) {
      s += ",\n";
    }
  }
  return `INSERT INTO headings (number, name, tags, text) VALUES \n${s}`;
};

btn.onclick = (e) => {
  values.push(createVal(number.value, name.value, tags.value, text.value));
  query.innerHTML = createQuery();
};

clr.onclick = (e) => {
  while (values.length) {
    values.pop();
  }
  query.innerHTML = createQuery();
};

field.onclick = (e) => {
  navigator.clipboard.writeText(createQuery());
  alert.classList.remove("hidden");
  setTimeout(() => {
    alert.classList.add("hidden");
  }, 300);
};
