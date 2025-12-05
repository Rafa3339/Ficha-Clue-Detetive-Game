const suspects = ["Coronel Mostarda","Srta. Scarlet","Sra. White","Rev. Green","Professor Plum","Sra. Peacock"];
const weapons = ["Cano de Chumbo","Castiçal","Faca","Revólver","Corda","Chave Inglesa"];
const rooms = ["Cozinha","Salão de Jogos","Sala de Música","Biblioteca","Escritório","Sala de Jantar","Hall","Conservatório","Salão de Festas"];

const optionHTML = `
  <option value=""></option>
  <option value="check">✔</option>
  <option value="x">❌</option>
  <option value="bang">❗</option>
  <option value="quest">❓</option>
`;

function escapeHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function createRow(name){
  const tr = document.createElement('tr');
  tr.innerHTML = `<td class="item">${escapeHtml(name)}</td>`+
    Array.from({length:6},(_,i)=>`<td><select class="note" aria-label="${escapeHtml(name)} jogador ${i+1}">${optionHTML}</select></td>`).join('');
  return tr;
}

const tbody = document.getElementById('sheetBody');

function addSection(title, items){
  const headerRow = document.createElement('tr');
  headerRow.className='section-row';
  headerRow.innerHTML=`<td colspan="7">${escapeHtml(title)}</td>`;
  tbody.appendChild(headerRow);
  items.forEach(it=>tbody.appendChild(createRow(it)));
}

addSection('SUSPEITOS', suspects);
addSection('ARMAS', weapons);
addSection('LOCAIS', rooms);

document.getElementById('clearBtn').addEventListener('click',()=>{
  document.querySelectorAll('select.note').forEach(s=>s.selectedIndex=0);
  document.getElementById('p1').focus();
});

document.getElementById('resetNames').addEventListener('click',()=>{
  document.querySelectorAll('input.player-name').forEach(i=>i.value='');
  document.getElementById('p1').focus();
});
