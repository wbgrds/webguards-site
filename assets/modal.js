(function() {
  window.openModal = function(type) {
    const modal = document.getElementById('contact-modal');
    const iframe = document.getElementById('modal-content');
    const title = document.getElementById('modal-title');
    
    if (type === 'calendar') {
      iframe.src = 'https://cal.com/wbgrds/rueckruf';
      title.textContent = 'Rückruftermin';
    } else if (type === 'maps') {
      // OpenStreetMap embed - WEBGUARDS Rostock (54.1120, 12.0784)
      iframe.src = 'https://www.openstreetmap.org/export/embed.html?bbox=12.0684,54.1070,12.0884,54.1170&layer=mapnik&marker=54.1120,12.0784';
      title.textContent = 'Standort';
    }
    
    modal.style.display = 'flex';
    modal.focus();
  };
  
  window.closeModal = function() {
    const modal = document.getElementById('contact-modal');
    modal.style.display = 'none';
  };
  
  // Schließen beim Klick außerhalb des Modal Content
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });
      
      // ESC-Taste zum Schließen
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeModal();
        }
      });
    }
  });
})();
