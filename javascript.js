

function Lägg_till()
{
    // skapa variblen text
    let text = document.querySelector("#ny_text")
    // hämta texten från textrutan och spara den i varibel
    // text = ny_text.value;
    // skriv ut texten i consolen för att kontrollera att det funkar
    console.log(text.value);
    // skapa ett li element
    let li = document.createElement("p");
    // sätt text i li till element till text
    li.textContent = text.value;
    // Hämta ul element
    let Lista = document.querySelector("ul");
    // lägg in li element i ul
    Lista.appendChild(li);
}