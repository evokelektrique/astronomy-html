function reset_panels(panels) {
   panels.forEach(panel => {
      panel.style.display = "none";
   })
}

document.addEventListener('DOMContentLoaded', () => {
   // Panels
   const panel_links = document.querySelectorAll(".custom-panel-link")
   const panels      = document.querySelectorAll(".is-custom-panel")

   reset_panels(panels)

   Array.from(panel_links).forEach(link => {
      link.addEventListener("click", (e) => {
         e.preventDefault()
         reset_panels(panels)
         const panel = document.getElementById(e.target.dataset.target)
         if(panel) {
            panel.style.display = "block"
            panel.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
         }
      })
   })
})
