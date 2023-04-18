var reply_click = function()
{
    alert("Button clicked, id "+this.id+", text"+this.innerHTML);
}


switchButton = document.getElementById("noc");

switchButton.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");

});

Radosny = document.getElementById("Rad");
Smutny = document.getElementById("Smut");
Normlany = document.getElementById("Nor");

Radosny.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor="#c3466a";
  document.querySelector("body").style.color="#b3e90d";
});

Smutny.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor="#383838";
  document.querySelector("body").style.color="#6599f3";
});

Normlany.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor="#bbb";
  document.querySelector("body").style.color="#000";
  });