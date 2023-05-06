function openRules() {
    document.getElementById("rules_modal").style.display = "flex"
}
  
function closeRules() {
    document.getElementById("rules_modal").style.display = "none"
}

function displayOrHideRulesBtn() {
    const element = document.getElementById("rules-btn")
    if (OPTIONS.AFFICHAGE_BTN_REGLES) {
        element.style.display = "block"
        document.getElementById("rules-exit-btn").addEventListener("click", closeRules)
    } else {
        element.style.display = "none"
    }
}