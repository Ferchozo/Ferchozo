document.getElementById('upload').addEventListener('change', handleFile, false);

function handleFile(event) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);
    renderRace(json);
  };
  reader.readAsArrayBuffer(event.target.files[0]);
}

function renderRace(data) {
    const track = document.getElementById('race-track');
    track.innerHTML = ''; // limpiar
  
    const totals = {};
    data.forEach(row => {
      const usuario = row.Usuario;
      const venta = parseFloat(row.Venta) || 0;
      const utilidad = parseFloat(row.Utilidad) || 0;
  
      if (!totals[usuario]) {
        totals[usuario] = { venta: 0, utilidad: 0 };
      }
  
      totals[usuario].venta += venta;
      totals[usuario].utilidad += utilidad;
    });
  
    const rankings = Object.keys(totals).map(user => {
      const { venta, utilidad } = totals[user];
      return {
        user,
        rentabilidad: venta > 0 ? (utilidad / venta) : 0
      };
    }).sort((a, b) => b.rentabilidad - a.rentabilidad);
  
    rankings.forEach(entry => {
      const racer = document.createElement('div');
      racer.className = 'racer-vertical';
  
      const bar = document.createElement('div');
      bar.className = 'racer-bar';
      bar.style.height = `${entry.rentabilidad * 100}px`;
  
      const label = document.createElement('div');
      label.className = 'racer-label';
      label.textContent = `${entry.user}`;
  
      racer.appendChild(bar);
      racer.appendChild(label);
      track.appendChild(racer);
    });
  }
  
