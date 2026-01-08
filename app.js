
/* ============================================================
   0) CONFIGURATION & INITIALISATION SUPABASE
   ============================================================ */
const SUPABASE_URL = "https://mvadljsjdmlhtyrtzjou.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12YWRsanNqZG1saHR5cnR6am91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4Njk0MzUsImV4cCI6MjA3NTQ0NTQzNX0.ZIukzi8kOHHzjSkhqLEwTn9hDMqtLjETPeyWlkjMp1c";
window.domappSb = window.domappSb || {};
if (!window.domappSb.client || window.domappSb.url !== SUPABASE_URL) {
  window.domappSb.url = SUPABASE_URL;
  window.domappSb.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
var supabase = window.domappSb.client;
console.log("Supabase URL utilisée (DOMAPP):", supabase.supabaseUrl);

/* ============================================================
   1) ÉTAT GLOBAL DE L’APPLICATION (STATE)
   ============================================================ */
// currentJournalType
// currentClient
// consultClientId
// currentInvoice
// currentPaymentInvoice
// window.clientsMode
// window.activeNavKey


/* ============================================================
   2) OUTILS GÉNÉRAUX (UTILS)
   ============================================================ */
/* ---------- 2.1 Format & Calcul ---------- */
// fmtMoney
// money2
// daysLeft
// ddmmyyyy
// yyyymmdd
// fmtFR
// confirmDel
// addDaysStr
// endDatePlus1YearMinus1Day

/* ---------- 2.2 Helpers DOM ---------- */
// fill
// setVal

/* ---------- 2.3 debounce (UNE SEULE VERSION À GARDER) ---------- */
// debounce


/* ============================================================
   3) ROUTEUR & NAVIGATION GLOBALE
   ============================================================ */
/* ---------- 3.1 Gestion des vues ---------- */
// views[]
// show(view)

/* ---------- 3.2 Navigation menu (item actif) ---------- */
// initNavActive()
// goClients()
// openContractsSoon()
// openUnpaid()

/* ---------- 3.3 Drawer mobile ---------- */
// initV2UI()

/* ---------- 3.4 Sidebar accordéon + actions ---------- */
// initProSidebar()


/* ============================================================
   4) DASHBOARD
   ============================================================ */
// ensureContractStatuses()
// refreshKPIs()


/* ============================================================
   5) PARAMÈTRES (SETTINGS)
   ============================================================ */
// loadSettings()
// saveSettings()
// setSettingsEditable()
// toggleEditSettings()
// wrappers _orig_loadSettings / _orig_saveSettings


/* ============================================================
   6) CLIENTS — MODULE PRINCIPAL
   ============================================================ */
/* ---------- 6.1 Mode clients (actifs / archivés) ---------- */
// window.setClientsMode()

/* ---------- 6.2 Écrans Clients ---------- */
// showConsultScreen()
// backToClientList()

/* ---------- 6.3 Formulaire client (helpers) ---------- */
// setVal
// fillClientForm()
// setClientEditable()

/* ---------- 6.4 Liste clients (VERSION ACTUELLE À GARDER) ---------- */
// window.loadClients()

/* ---------- 6.5 Actions liste clients (dropdown Actions ▾) ---------- */
// document.addEventListener('click', ...) pour #clientsTable

/* ---------- 6.6 Consultation client ---------- */
// openClientConsult()
// loadConsultContracts()
// loadConsultInvoices()

/* ---------- 6.7 Actions fiche client ---------- */
// editClientInline()
// saveClientInline()
// archiveClientInline()
// archiveClientById()
// restoreClientById()
// deleteClientForeverById()
// openClientCreate()
// openClientModalNew()

/* ---------- 6.8 Enregistrement client (DB) ---------- */
// saveClient()

/* ---------- 6.9 ANCIEN SYSTÈME CLIENTS (À NE PLUS UTILISER) ---------- */
// loadClients() (ancienne version)
// selectClient()
// newClient()
// editClient()
// archiveClient()
// deleteClient()
// enableClient()
// fill()


/* ============================================================
   7) INTERMÉDIAIRES
   ============================================================ */
// loadIntermediaries()
// autocomplétion c_int_name
// openNewIntermediaryModal()
// closeIntermediaryModal()
// saveNewIntermediary()


/* ============================================================
   8) CONTRATS
   ============================================================ */
/* ---------- 8.1 Liste & filtres ---------- */
// loadContracts()
// filterContractsLess30()
// loadContractClientPicker()

/* ---------- 8.2 Création contrat ---------- */
// newContractFromPicker()
// closeContractModal()
// createNewContract()
// loadModalClients()

/* ---------- 8.3 Actions contrat ---------- */
// renewContract()
// deleteContract()
// resiliate()
// nextNumber()

/* ---------- 8.4 Events table contrats ---------- */
// contractsTableEl.addEventListener(...)


/* ============================================================
   9) GÉNÉRATION CONTRAT DOCX
   ============================================================ */
// DOCX_BUCKET
// DOCX_PATH
// getDocxTemplateArrayBuffer()
// printContract()


/* ============================================================
   10) FACTURES
   ============================================================ */
/* ---------- 10.1 Liste factures ---------- */
// loadInvoiceClients()
// loadInvoices()

/* ---------- 10.2 Détails facture ---------- */
// showInvoiceDetails()
// buildInvoiceHTML()
// printInvoicePreview()
// closeInvoice()

/* ---------- 10.3 Journal des ventes ---------- */
// openSalesJournalModal()
// closeSalesJournalModal()
// calculateJournalSummary()
// generateSalesJournal()
// printSalesJournal()

/* ---------- 10.4 Actions factures (dropdown) ---------- */
// setupInvoicePageActions()
// clearInvoiceFilters()
// deleteInvoice()
// editInvoice()


/* ============================================================
   11) PAIEMENTS
   ============================================================ */
/* ---------- 11.1 Factures impayées ---------- */
// loadUnpaid()
// setupInvoiceActions()

/* ---------- 11.2 Factures payées ---------- */
// showPaymentTab()
// loadPaidInvoices()
// setupPaidInvoicesActions()
// clearPaidFilters()

/* ---------- 11.3 Paiement ---------- */
// markInvoiceAsPaid()
// confirmPayment()
// closePaymentModal()
// markInvoiceAsUnpaid()
// markInvoiceAsPaidFromDetails()


/* ============================================================
   12) DOCUMENTS CLIENTS
   ============================================================ */
// loadDocClients()
// loadDocuments()
// triggerUpload()
// previewDoc()
// downloadDoc()
// replaceDoc()
// deleteDoc()
// signedLink()
// downloadZip()


/* ============================================================
   13) INITIALISATION GLOBALE & LISTENERS
   ============================================================ */
// window.onerror
// window.onunhandledrejection
// journalStartDate change
// journalEndDate change
// journalStatus change
// btnNewClient onclick
// btnNewContract onclick
// =========================
// MODAL MANAGER — FERMETURE UNIQUE
// =========================


// show('dashboard')
// loadSettings().then(refreshKPIs)
// setupInvoiceActions()
// setupInvoicePageActions()







/* ================== CONFIG ================== */


/**
 * ⚠️ IMPORTANT: PAS DE const/let supabase
 * On met un alias avec var (pas d'erreur si re-déclaré)
 */





let currentJournalType = 'all';
// ====== Sélection contrat (fiche client) ======
let selectedContractId = null;
let selectedContractNumber = null;
let selectedContractRow = null; // objet contrat sélectionné (si besoin)

/* ====== Helpers UI ====== */
const views = ["dashboard","settings","clients","contracts","invoices","payments","documents"];
function show(view){
  views.forEach(v => document.getElementById("view-"+v).classList.add("hidden"));
  document.getElementById("view-"+view).classList.remove("hidden");
  // Active nav: privilégier l'item cliqué (activeNavKey)
document.querySelectorAll('#nav .btn').forEach(b => b.classList.remove('acc'));

const key = window.activeNavKey;

// si on a une clé, on active exactement ce bouton
if (key) {
  // CSS.escape pour éviter les bugs si caractères spéciaux
  const sel = `#nav .btn[data-navkey="${CSS.escape(key)}"]`;
  const activeBtn = document.querySelector(sel);

  // si la clé ne correspond pas à la vue actuelle (ex: show() appelé par code),
  // on retombe sur le premier bouton de la vue
  if (activeBtn && activeBtn.dataset.view === view) {
    activeBtn.classList.add('acc');
  } else {
    const first = document.querySelector(`#nav .btn[data-view="${view}"]`);
    if (first) {
      window.activeNavKey = first.dataset.navkey;
      first.classList.add('acc');
    }
  }
} else {
  // fallback si aucune clé
  const first = document.querySelector(`#nav .btn[data-view="${view}"]`);
  if (first) {
    window.activeNavKey = first.dataset.navkey;
    first.classList.add('acc');
  }
}

  
  if(view==="dashboard") refreshKPIs();
  if(view==="clients") { loadClients(); }
  if(view==="contracts") { loadContracts(); loadContractClientPicker(); }
  if(view==="invoices") { loadInvoices(); loadInvoiceClients(); }
  if(view==="documents") { loadDocClients(); }
  if(view==="payments") { showPaymentTab('unpaid'); }
}

function setSelectedContractUI(contract) {
  selectedContractId = contract?.id || null;
  selectedContractNumber = contract?.number || null;
  selectedContractRow = contract || null;

  // Hint "Contrat sélectionné"
  const hint = document.getElementById('consultSelectedContractHint');
  if (hint) {
    hint.innerHTML = `Contrat sélectionné : <b>${selectedContractNumber || '—'}</b>`;
  }

  // Activer / désactiver les boutons Services
  const btnAdd = document.getElementById('btnAddService');
  const btnBill = document.getElementById('btnBillService');

  const enable = !!selectedContractId;
  if (btnAdd) btnAdd.disabled = !enable;
  if (btnBill) btnBill.disabled = !enable;

  // Hint services
  const sHint = document.getElementById('consultServicesHint');
  if (sHint) {
    sHint.textContent = enable
      ? `Services du contrat ${selectedContractNumber}`
      : `Sélectionne un contrat pour gérer les services.`;
  }

  // Reset table services quand pas de contrat
  if (!enable) {
    const tbody = document.querySelector('#consultServicesTable tbody');
    if (tbody) tbody.innerHTML = `<tr><td colspan="6" class="muted">Sélectionne un contrat</td></tr>`;
  }
}

/* ===== NAV: item actif = item cliqué (même si data-view identique) ===== */
(function initNavActive(){
  // Donner une clé unique à chaque bouton du menu
  document.querySelectorAll('#nav .btn[data-view]').forEach((btn, i) => {
    if (!btn.dataset.navkey) {
      const a = btn.dataset.action || 'view';
      const v = btn.dataset.view || 'x';
      btn.dataset.navkey = `${v}-${a}-${i}`;
    }
  });

  // Clic menu: mémoriser l'item cliqué + naviguer
  document.querySelectorAll('#nav .btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.activeNavKey = btn.dataset.navkey;  // <-- clé de l'item cliqué
      show(btn.dataset.view);
    });
  });
})();

function goClients(){ show('clients'); }
function openContractsSoon(){ show('contracts'); filterContractsLess30(); }
function openUnpaid(){ show('payments'); document.getElementById('filterInvStatus').value="Impayé"; loadUnpaid(); }

function fmtMoney(v){ if(v==null||isNaN(v)) return "0,00"; return new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2}).format(+v); }
function daysLeft(end){ if(!end) return ""; const d=(new Date(end)-new Date())/(1000*3600*24); return Math.ceil(d); }
function ddmmyyyy(d){ if(!d) return ""; const dt=new Date(d); return dt.toLocaleDateString('fr-FR'); }
function yyyymmdd(d){ const dt=new Date(d); const m=("0"+(dt.getMonth()+1)).slice(-2); const day=("0"+dt.getDate()).slice(-2); return dt.getFullYear()+"-"+m+"-"+day; }
function confirmDel(msg){ return confirm(msg||"Confirmer la suppression ?"); }
function addDaysStr(dateStr, days){ const d=new Date(dateStr); if(isNaN(d)) return null; d.setDate(d.getDate()+days); return yyyymmdd(d); }
function endDatePlus1YearMinus1Day(startStr){ const s=new Date(startStr); if(isNaN(s)) return null; const y1=new Date(s); y1.setFullYear(y1.getFullYear()+1); y1.setDate(y1.getDate()-1); return yyyymmdd(y1); }
function fmtFR(d){ return d ? new Date(d).toLocaleDateString('fr-FR') : ""; }
function money2(v){ return new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2, maximumFractionDigits:2}).format(+v||0); }

/* ================= DASHBOARD ================= */
async function refreshKPIs(){
  await ensureContractStatuses();
  
  const { data: allClients } = await supabase.from('clients').select('id').eq('archived', false);
  const { data: cts } = await supabase.from('contracts').select('client_id, end_date, status');
  
  const today = new Date();
  let activeClientsCount = 0;

  (allClients || []).forEach(client => {
    const clientContracts = (cts || []).filter(ct => ct.client_id === client.id);
    
    if (clientContracts.length === 0) {
      activeClientsCount++;
    } else {
      const hasActiveContract = clientContracts.some(ct => 
        ct.status !== "Résilié" && new Date(ct.end_date) >= today
      );
      if (hasActiveContract) {
        activeClientsCount++;
      }
    }
  });

  document.getElementById('kpiClients').textContent = activeClientsCount;

  const soon = (cts||[]).filter(x => {
    const left = daysLeft(x.end_date);
    return (x.status !== "Résilié") && left <= 30 && left >= 0;
  }).length;
  document.getElementById('kpiContractsSoon').textContent = soon;

  const { data: inv } = await supabase.from('invoices').select('status');
  const unpaid = (inv||[]).filter(i => i.status !== "Payé").length;
  document.getElementById('kpiUnpaid').textContent = unpaid;
}

/* ================= SETTINGS ================= */
async function loadSettings(){
  const { data } = await supabase.from('settings').select('*').limit(1).maybeSingle();
  if(!data) return;
  s_company_name.value=data.company_name||"";
  s_ice.value=data.ice||""; s_if.value=data.if||""; s_rc.value=data.rc||""; s_tp.value=data.tp||"";
  s_address.value=data.address||""; s_city.value=data.city||""; s_email.value=data.email||""; s_phone.value=data.phone||"";
  s_rib.value=data.rib||""; s_bank.value=data.bank||""; s_logo_url.value=data.logo_url||"";
  s_manager_name.value=data.manager_name||""; s_manager_cin.value=data.manager_cin||"";
  s_manager_nat.value=data.manager_nationality||""; s_manager_since.value=data.manager_since||"";
  s_manager_addr.value=data.manager_address||""; s_manager_phone.value=data.manager_phone||"";
  s_manager_email.value=data.manager_email||"";
}

async function saveSettings(){
  const row={
    company_name:s_company_name.value, ice:s_ice.value, if:s_if.value, rc:s_rc.value, tp:s_tp.value,
    address:s_address.value, city:s_city.value, email:s_email.value, phone:s_phone.value,
    rib:s_rib.value, bank:s_bank.value, logo_url:s_logo_url.value,
    manager_name:s_manager_name.value, manager_cin:s_manager_cin.value, manager_nationality:s_manager_nat.value,
    manager_since:s_manager_since.value, manager_address:s_manager_addr.value, manager_phone:s_manager_phone.value, manager_email:s_manager_email.value
  };
  const { data } = await supabase.from('settings').select('id').limit(1).maybeSingle();
  let res;
  if(data?.id){ res = await supabase.from('settings').update(row).eq('id', data.id).select(); }
  else { res = await supabase.from('settings').insert(row).select(); }
  settingsMsg.textContent="Enregistré ✔";
  setTimeout(()=>settingsMsg.textContent="",1500);
}

let settingsEditing = false;
function setSettingsEditable(enable){
  const ids = [
    's_company_name','s_ice','s_if','s_rc','s_tp','s_address','s_city','s_email','s_phone',
    's_rib','s_bank','s_logo_url','s_manager_name','s_manager_cin','s_manager_nat',
    's_manager_since','s_manager_addr','s_manager_phone','s_manager_email'
  ];
  ids.forEach(id => { const el = document.getElementById(id); if(el) el.disabled = !enable; });
  const btnEdit = document.getElementById('btnEditSettings');
  const btnSave = document.getElementById('btnSaveSettings');
  if(btnEdit) btnEdit.textContent = enable ? '↩ Annuler' : '✏️ Modifier';
  if(btnSave) btnSave.disabled = !enable;
  settingsEditing = enable;
}

function toggleEditSettings(){
  if(settingsEditing){
    loadSettings().then(()=> setSettingsEditable(false));
    settingsMsg.textContent = 'Modifications annulées';
    setTimeout(()=>settingsMsg.textContent='',1200);
  }else{
    setSettingsEditable(true);
  }
}

const _orig_loadSettings = loadSettings;
loadSettings = async function(){ await _orig_loadSettings(); setSettingsEditable(false); };
const _orig_saveSettings = saveSettings;
saveSettings = async function(){ await _orig_saveSettings(); setSettingsEditable(false); };

/* ================= CLIENTS ================= */

window.clientsMode = 'active';

window.setClientsMode = function(mode){
  window.clientsMode = (mode === 'archived') ? 'archived' : 'active';
  loadClients();
};



/* Autocomplétion */
const clientSearch = document.getElementById('clientSearch');
const suggestBox = document.getElementById('clientSuggestBox');
const debounce = (fn, ms=200)=>{ let t; return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args), ms); }; };

async function fetchClientSuggestions(prefix){
  if(!prefix) return [];
  const { data, error } = await supabase
    .from('clients')
    .select('legal_name')
    .ilike('legal_name', `${prefix}%`)
    .eq('archived', window.clientsMode === 'archived')
    .order('legal_name',{ascending:true})
    .limit(10);
  if(error){ console.error(error); return []; }
  const names = [...new Set((data||[]).map(r=>r.legal_name).filter(Boolean))];
  return names;
}

function renderClientSuggestions(names){
  if(!names.length){ suggestBox.classList.add('hidden'); suggestBox.innerHTML=""; return; }
  suggestBox.innerHTML = names.map(n=>`<div class="suggest-item" data-name="${n.replace(/"/g,'&quot;')}">${n}</div>`).join('');
  suggestBox.classList.remove('hidden');
}

clientSearch.addEventListener('input', debounce(async (e)=>{
  const val = e.target.value.trim();
  if(!val){ suggestBox.classList.add('hidden'); await loadClients(); return; }
  const names = await fetchClientSuggestions(val);
  renderClientSuggestions(names);
  await loadClients();
}, 200));

suggestBox.addEventListener('click', (e)=>{
  const item = e.target.closest('.suggest-item'); if(!item) return;
  clientSearch.value = item.dataset.name || "";
  suggestBox.classList.add('hidden');
  loadClients();
});

document.addEventListener('click', (e)=>{ if(!e.target.closest('.suggest-wrap')) suggestBox.classList.add('hidden'); });
clientSearch.addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){
    const first = suggestBox.querySelector('.suggest-item');
    if(first){ clientSearch.value = first.dataset.name; suggestBox.classList.add('hidden'); }
    loadClients();
  }
});

function fill(v,id){ document.getElementById(id).value = v??""; }

async function saveClient(){
  const iName=c_int_name.value?.trim(), iPhone=c_int_phone.value?.trim();
  let intermediary_id = currentClient?.intermediary_id || null;
  if(iName){
    const { data: exist } = await supabase.from('intermediaries').select('id').eq('name', iName).eq('phone', iPhone||null).maybeSingle();
    if(exist?.id) intermediary_id = exist.id;
    else { const ins = await supabase.from('intermediaries').insert({name:iName,phone:iPhone}).select('id').single();
      intermediary_id = ins.data?.id || intermediary_id; }
  }
  const row={
    legal_name:c_legal_name.value, legal_form:c_legal_form.value, ice:c_ice.value, if:c_if.value, rc:c_rc.value, tp:c_tp.value,
    activity:c_activity.value, capital: +c_capital.value||null, creation_date: c_creation_date.value||null, head_address:c_head_address.value,
    city:c_city.value, email:c_email.value, phone:c_phone.value, rib:c_rib.value,
    rep_name:c_rep_name.value, rep_quality:c_rep_quality.value, rep_birth_date:c_rep_birth_date.value||null, rep_birth_place:c_rep_birth_place.value,
    rep_cin:c_rep_cin.value, rep_phone:c_rep_phone.value, rep_address:c_rep_address.value,
    intermediary_id
  };
  let res;
  if(currentClient?.id){ res = await supabase.from('clients').update(row).eq('id', currentClient.id).select().single(); }
  else { res = await supabase.from('clients').insert(row).select().single(); }
  clientMsg.textContent="Enregistré ✔"; setTimeout(()=>clientMsg.textContent="",1500);
  await loadClients();
}

// Charger la liste des intermédiaires
async function loadIntermediaries() {
  const { data: intermediaries, error } = await supabase
    .from('intermediaries')
    .select('id, name, phone, email')
    .order('name', { ascending: true });
  
  if (error) {
    console.error("Erreur chargement intermédiaires:", error);
    return;
  }
  
  const datalist = document.getElementById('intermediariesDatalist');
  datalist.innerHTML = '';
  
  (intermediaries || []).forEach(int => {
    const option = document.createElement('option');
    option.value = int.name || '';
    option.setAttribute('data-phone', int.phone || '');
    option.setAttribute('data-id', int.id);
    datalist.appendChild(option);
  });
}

// Auto-complétion des intermédiaires
document.getElementById('c_int_name').addEventListener('input', debounce(async function(e) {
  const searchTerm = e.target.value.trim();
  const suggestionsBox = document.getElementById('intermediarySuggestions');
  
  if (!searchTerm) {
    suggestionsBox.classList.add('hidden');
    document.getElementById('c_int_phone').value = '';
    return;
  }
  
  const { data: intermediaries, error } = await supabase
    .from('intermediaries')
    .select('id, name, phone')
    .ilike('name', `%${searchTerm}%`)
    .limit(10);
  
  if (error) {
    console.error("Erreur recherche intermédiaires:", error);
    return;
  }
  
  if (!intermediaries || intermediaries.length === 0) {
    suggestionsBox.innerHTML = '<div class="suggest-item" data-action="create">➕ Créer "' + searchTerm + '"</div>';
    suggestionsBox.classList.remove('hidden');
    return;
  }
  
  suggestionsBox.innerHTML = intermediaries.map(int => 
    `<div class="suggest-item" data-id="${int.id}" data-name="${int.name}" data-phone="${int.phone || ''}">
      ${int.name} ${int.phone ? `(${int.phone})` : ''}
    </div>`
  ).join('');
  
  suggestionsBox.classList.remove('hidden');
}, 300));

// Sélection d'un intermédiaire
document.getElementById('intermediarySuggestions').addEventListener('click', function(e) {
  const item = e.target.closest('.suggest-item');
  if (!item) return;
  
  if (item.dataset.action === 'create') {
    openNewIntermediaryModal();
    return;
  }
  
  document.getElementById('c_int_name').value = item.dataset.name || '';
  document.getElementById('c_int_phone').value = item.dataset.phone || '';
  document.getElementById('intermediarySuggestions').classList.add('hidden');
});

// Gestion du modal nouvel intermédiaire
function openNewIntermediaryModal() {
  const currentName = document.getElementById('c_int_name').value;
  if (currentName) {
    document.getElementById('new_int_name').value = currentName;
  }
  document.getElementById('intermediaryModal').style.display = 'flex';
}

function closeIntermediaryModal() {
  document.getElementById('intermediaryModal').style.display = 'none';
  document.getElementById('new_int_name').value = '';
  document.getElementById('new_int_phone').value = '';
  document.getElementById('new_int_email').value = '';
  document.getElementById('new_int_address').value = '';
  document.getElementById('new_int_notes').value = '';
}

async function saveNewIntermediary() {
  const name = document.getElementById('new_int_name').value.trim();
  const phone = document.getElementById('new_int_phone').value.trim();
  const email = document.getElementById('new_int_email').value.trim();
  const address = document.getElementById('new_int_address').value.trim();
  const notes = document.getElementById('new_int_notes').value.trim();
  
  if (!name) {
    alert("Le nom de l'intermédiaire est obligatoire");
    return;
  }
  
  try {
    const { data, error } = await supabase
      .from('intermediaries')
      .insert({
        name: name,
        phone: phone,
        email: email,
        address: address,
        notes: notes
      })
      .select()
      .single();
    
    if (error) {
      alert("Erreur création intermédiaire: " + error.message);
      return;
    }
    
    document.getElementById('c_int_name').value = name;
    document.getElementById('c_int_phone').value = phone;
    
    closeIntermediaryModal();
    await loadIntermediaries();
    
    alert("✅ Intermédiaire créé avec succès");
    
  } catch (error) {
    console.error("Erreur:", error);
    alert("Erreur lors de la création");
  }
}

// Charger les intermédiaires au démarrage et quand on va sur la page clients
const originalShow = show;
show = function(view) {
  originalShow(view);
  if (view === "clients") {
    loadIntermediaries();
  }
};

/* ======= CONTRATS ======= */
async function ensureContractStatuses(){
  const today = new Date().toISOString().slice(0,10);
  const { data } = await supabase.from('contracts').select('id,end_date,status');
  const toExpire = (data||[])
    .filter(c => c.end_date && c.status!=='Résilié' && c.status!=='Expiré' && c.end_date < today)
    .map(c => c.id);
  if(toExpire.length){ await supabase.from('contracts').update({status:'Expiré'}).in('id', toExpire); }
}

function leftDays(end){ const d=daysLeft(end); return isNaN(d)?"":d; }

async function loadContracts(opts={}){
  await ensureContractStatuses();
  const { data: ct } = await supabase.from('contracts').select('*, clients(legal_name)').order('number', {ascending:false});
  const qName=(filterContractClient.value||"").toLowerCase();
  const status=filterContractStatus.value||"";
  const tbody=document.querySelector('#contractsTable tbody'); tbody.innerHTML="";
  (ct||[]).filter(x=>{
    const okName = !qName || x.clients?.legal_name?.toLowerCase().includes(qName);
    const okStatus = !status || x.status===status;
    return okName && okStatus;
  }).forEach(c=>{
    const left = leftDays(c.end_date);
    const tr=document.createElement('tr');
    tr.innerHTML = `
      <td>${c.number||""}</td>
      <td>${c.clients?.legal_name||""}</td>
      <td>${ddmmyyyy(c.start_date)}</td>
      <td>${ddmmyyyy(c.end_date)}</td>
      <td>${left}</td>
      <td>${fmtMoney(c.annual_fee)}</td>
      <td>${c.status}</td>
      <td class="actions">
        <div class="dropdown">
          <button class="btn act-btn" data-id="${c.id}">Actions ▾</button>
          <div class="menu hidden">
            <button class="act-item" data-action="renew"   data-id="${c.id}">Renouveler</button>
            <button class="act-item" data-action="invoice" data-id="${c.id}">Éditer facture</button>
            <button class="act-item" data-action="docx"    data-id="${c.id}">Générer contrat DOCX</button>
            <button class="act-item danger" data-action="delete"    data-id="${c.id}">Supprimer</button>
            <button class="act-item warn"   data-action="resiliate" data-id="${c.id}">Résilier</button>
          </div>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
  if(opts.less30){
    [...tbody.querySelectorAll('tr')].forEach(tr=>{
      const left = +tr.children[4].textContent;
      if(!(left>=0 && left<=30)) tr.remove();
    });
  }
}

function filterContractsLess30(){
  loadContracts({less30:true});
  const tbody = document.querySelector('#contractsTable tbody');
  const rows = [...tbody.querySelectorAll('tr')];
  rows.sort((a,b)=> (parseInt(a.children[4].textContent)||9999) - (parseInt(b.children[4].textContent)||9999));
  tbody.innerHTML = ""; rows.forEach(r=>tbody.appendChild(r));
}

/* Client picker */
let contractClientsCache = [];
async function loadContractClientPicker(){
  const { data, error } = await supabase
    .from('clients').select('id, legal_name, archived, created_at')
    .eq('archived', false).order('legal_name', { ascending: true });
  if(error){ console.error(error); return; }
  contractClientsCache = data || [];
  const dl = document.getElementById('clientsDatalist'); if(!dl) return;
  dl.innerHTML = "";
  contractClientsCache.forEach(c=>{
    const opt = document.createElement('option');
    opt.value = c.legal_name || ""; opt.setAttribute('data-id', c.id);
    dl.appendChild(opt);
  });
  const last = [...contractClientsCache].sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))[0];
  if(last && document.getElementById('contractClientInput')){
    document.getElementById('contractClientInput').value = last.legal_name || "";
  }
}

async function newContractFromPicker() {
  await loadModalClients();
  
  const mainInput = document.getElementById('contractClientInput');
  if (mainInput && mainInput.value) {
    document.getElementById('modalClientInput').value = mainInput.value;
  }
  
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('modalStartDate').value = today;
  
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  nextYear.setDate(nextYear.getDate() - 1);
  document.getElementById('modalEndDate').value = nextYear.toISOString().split('T')[0];
  
  document.getElementById('contractModal').style.display = 'flex';
}

function closeContractModal() {
  document.getElementById('contractModal').style.display = 'none';
  document.getElementById('modalClientInput').value = '';
  document.getElementById('modalStartDate').value = '';
  document.getElementById('modalEndDate').value = '';
  document.getElementById('modalAnnualFee').value = '';
}

// Fonction pour créer le contrat
async function createNewContract() {
  const clientName = document.getElementById('modalClientInput').value.trim();
  const startDate = document.getElementById('modalStartDate').value;
  const endDate = document.getElementById('modalEndDate').value;
  const annualFee = parseFloat(document.getElementById('modalAnnualFee').value);
  
  if (!clientName) {
    alert("Le client est obligatoire");
    return;
  }
  
  if (!startDate) {
    alert("La date de début est obligatoire");
    return;
  }
  
  if (!endDate) {
    alert("La date de fin est obligatoire");
    return;
  }
  
  if (!annualFee || annualFee <= 0) {
    alert("Le montant annuel doit être supérieur à 0");
    return;
  }
  
  try {
    const { data: clients, error: clientError } = await supabase
      .from('clients')
      .select('id')
      .ilike('legal_name', `%${clientName}%`)
      .eq('archived', false)
      .limit(1);
    
    if (clientError || !clients || clients.length === 0) {
      alert("Client introuvable. Vérifiez le nom.");
      return;
    }
    
    const clientId = clients[0].id;
    const num = await nextNumber('contracts','C', startDate);
    
    const { error: insertError } = await supabase.from('contracts').insert({
      number: num,
      client_id: clientId,
      start_date: startDate,
      end_date: endDate,
      duration_months: 12,
      annual_fee: annualFee,
      total_amount: annualFee,
      status: 'En cours'
    });
    
    if (insertError) {
      alert("Erreur création contrat: " + insertError.message);
      return;
    }
    
    closeContractModal();
    await loadContracts();
    await refreshKPIs();
    
    alert(`✅ Contrat créé avec succès\nN°: ${num}`);
    
  } catch (error) {
    console.error("Erreur création contrat:", error);
    alert("Erreur lors de la création du contrat");
  }
}

// Charger les clients pour le modal
async function loadModalClients() {
  const { data: clients, error } = await supabase
    .from('clients')
    .select('id, legal_name')
    .eq('archived', false)
    .order('legal_name', { ascending: true });
  
  if (error) {
    console.error("Erreur chargement clients:", error);
    return;
  }
  
  const datalist = document.getElementById('modalClientsDatalist');
  datalist.innerHTML = '';
  
  (clients || []).forEach(client => {
    const option = document.createElement('option');
    option.value = client.legal_name || '';
    option.setAttribute('data-id', client.id);
    datalist.appendChild(option);
  });
}

async function renewContract(id){
  const { data: old, error } = await supabase.from('contracts').select('*, clients(legal_name)').eq('id', id).maybeSingle();
  if(error || !old){ alert("Contrat introuvable."); return; }
  if(!old.end_date){ alert("Ce contrat n'a pas de date de fin."); return; }
  const startNext = addDaysStr(old.end_date, 1);
  const endNext   = endDatePlus1YearMinus1Day(startNext);
  const feeStr = prompt("Tarif annuel pour le nouveau contrat :", String(old.annual_fee ?? 0));
  if(feeStr === null) return;
  const annual = parseFloat(feeStr || old.annual_fee || 0) || 0;
  const num = await nextNumber('contracts','C', startNext);
  const insertRow = {
    number: num, client_id: old.client_id, sign_date: yyyymmdd(new Date()),
    start_date: startNext, end_date: endNext, duration_months: 12, address: old.address,
    annual_fee: annual, total_amount: annual, status: 'En cours',
    notes: `Renouvellement du ${ddmmyyyy(old.start_date)} au ${ddmmyyyy(old.end_date)}.`
  };
  const { error: insErr } = await supabase.from('contracts').insert(insertRow);
  if(insErr){ alert(insErr.message); return; }
  alert(`Nouveau contrat créé (${num}) : ${ddmmyyyy(startNext)} → ${ddmmyyyy(endNext)}`);
  await loadContracts(); refreshKPIs();
}

async function deleteContract(id){
  if(!confirmDel("Supprimer définitivement ce contrat et ses données liées (factures/paiements) ?")) return;
  const { error: delInvErr } = await supabase.from('invoices').delete().eq('contract_id', id);
  if(delInvErr){ alert("Erreur suppression factures: " + delInvErr.message); return; }
  const { error: delPayErr } = await supabase.from('payments').delete().eq('contract_id', id);
  if(delPayErr){ alert("Erreur suppression paiements: " + delPayErr.message); return; }
  const { error: delCtrErr } = await supabase.from('contracts').delete().eq('id', id);
  if(delCtrErr){ alert("Erreur suppression contrat: " + delCtrErr.message); return; }
  await loadContracts(); refreshKPIs(); alert("Contrat supprimé.");
}

async function nextNumber(table, prefix, date = new Date()) {
  const year = new Date(date).getFullYear();
  const { data } = await supabase.from(table).select('number').ilike('number', `${prefix}-${year}-%`);
  const nums=(data||[]).map(r=>+String(r.number).split('-').pop()).filter(n=>!isNaN(n));
  const next=((nums.length?Math.max(...nums):0)+1).toString().padStart(3,'0');
  return `${prefix}-${year}-${next}`;
}

async function resiliate(id){ if(!confirm("Résilier ce contrat ?")) return;
  await supabase.from('contracts').update({status:'Résilié'}).eq('id',id); loadContracts(); }

/* -------- DOCX template config -------- */
const DOCX_BUCKET = 'clients_docs';
const DOCX_PATH   = 'Untitled folder/contrat_template.docx';

async function getDocxTemplateArrayBuffer(){
  const pub = supabase.storage.from(DOCX_BUCKET).getPublicUrl(DOCX_PATH);
  let url = pub?.data?.publicUrl || null;
  if(!url){
    const { data, error } = await supabase.storage.from(DOCX_BUCKET).createSignedUrl(DOCX_PATH, 60*5);
    if(error) throw new Error("Modèle introuvable: " + error.message);
    url = data.signedUrl;
  }
  const res = await fetch(url);
  if(!res.ok){ throw new Error(`Téléchargement modèle échoué (${res.status}). Vérifie le chemin/droits.`); }
  return await res.arrayBuffer();
}

/* -------- Génération contrat DOCX -------- */
async function printContract(contractId) {
  try {
    const { data: c, error: e1 } = await supabase
      .from('contracts')
      .select('*, clients(legal_name, ice, head_address, city, rep_name, rep_birth_date, rep_birth_place, rep_cin, rep_address, rep_quality)')
      .eq('id', contractId).maybeSingle();
    const { data: s, error: e2 } = await supabase.from('settings').select('*').limit(1).maybeSingle();
    if (e1 || e2 || !c || !s) {
      alert("Données incomplètes (contrat / client / mes infos).");
      return;
    }

    let arrayBuffer;
    try {
      arrayBuffer = await getDocxTemplateArrayBuffer();
    } catch (err) {
      alert(err.message);
      return;
    }

    let zip;
    try {
      zip = new PizZip(arrayBuffer);
    } catch (err) {
      alert("Erreur lecture DOCX : modèle non valide.");
      return;
    }

    const doc = new window.docxtemplater(zip, { 
      paragraphLoop: true, 
      linebreaks: true,
      delimiters: {
        start: '[[',
        end: ']]'
      }
    });

    const data = {
      COMPANY_NAME:    s.company_name || "",
      COMPANY_ICE:     s.ice || "",
      COMPANY_TP:      s.tp || "",
      COMPANY_RC:      s.rc || "",
      COMPANY_CITY:    s.city || "",
      COMPANY_ADDRESS: s.address || "",
      MANAGER_NAME:       s.manager_name || "",
      MANAGER_BIRTH_DATE: s.manager_since ? new Date(s.manager_since).toLocaleDateString('fr-FR') : "",
      MANAGER_CIN:        s.manager_cin || "",
      MANAGER_ADDRESS:    s.manager_address || "",
      CLIENT_NAME:     c.clients?.legal_name || "",
      CLIENT_ICE:      c.clients?.ice || "",
      REP_NAME:        c.clients?.rep_name || "",
      REP_BIRTH_DATE:  c.clients?.rep_birth_date ? new Date(c.clients.rep_birth_date).toLocaleDateString('fr-FR') : "",
      REP_BIRTH_PLACE: c.clients?.rep_birth_place || "",
      REP_CIN:         c.clients?.rep_cin || "",
      REP_ADDRESS:     c.clients?.rep_address || "",
      REP_QUALITY:     c.clients?.rep_quality || "",
      START_DATE:   c.start_date ? new Date(c.start_date).toLocaleDateString('fr-FR') : "",
      END_DATE:     c.end_date ? new Date(c.end_date).toLocaleDateString('fr-FR') : "",
      ANNUAL_FEE:   new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2}).format(+c.annual_fee||0),
      TODAY_DATE:   new Date().toLocaleDateString('fr-FR'),
    };

    try {
      doc.setData(data);
      doc.render();
    } catch (renderError) {
      alert("Erreur lors du rendu: " + renderError.message);
      return;
    }

    const out = doc.getZip().generate({ 
      type: "blob", 
      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
    });
    
    const a = document.createElement('a');
    a.href = URL.createObjectURL(out);
    a.download = (c.number || "contrat") + ".docx";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1500);

  } catch (error) {
    console.error(error);
    alert("Erreur inattendue: " + error.message);
  }
}

/* ======= FACTURES ======= */
let currentInvoice = null;

// Charger la liste des clients pour l'autocomplétion
async function loadInvoiceClients() {
  const { data: clients, error } = await supabase
    .from('clients')
    .select('id, legal_name')
    .eq('archived', false)
    .order('legal_name', { ascending: true });
  
  if (error) {
    console.error("Erreur chargement clients:", error);
    return;
  }
  
  const datalist = document.getElementById('invoiceClientsDatalist');
  datalist.innerHTML = '';
  
  (clients || []).forEach(client => {
    const option = document.createElement('option');
    option.value = client.legal_name || '';
    option.setAttribute('data-id', client.id);
    datalist.appendChild(option);
  });
}

// Charger toutes les factures avec filtres
async function loadInvoices() {
  const clientFilter = document.getElementById('invoiceClientSearch').value.trim();
  const statusFilter = document.getElementById('filterInvoiceStatus').value;
 
  let query = supabase
    .from('invoices')
    .select('*, contracts(number, clients(legal_name, ice, if, rc, head_address, city))')
    .order('number', { ascending: false });
  
  if (clientFilter) {
    query = query.ilike('contracts.clients.legal_name', `%${clientFilter}%`);
  }
  if (statusFilter) {
    query = query.eq('status', statusFilter);
  }
  
  const { data: invoices, error } = await query;
  
  if (error) {
    console.error("Erreur chargement factures:", error);
    alert("Erreur lors du chargement des factures");
    return;
  }
  
  const tbody = document.querySelector('#invoicesTable tbody');
  tbody.innerHTML = '';
  
  if (!invoices || invoices.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="9" class="muted" style="text-align:center;">Aucune facture trouvée</td>`;
    tbody.appendChild(tr);
    return;
  }
  
  invoices.forEach(invoice => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-invoice-id', invoice.id);
    
    const statusClass = `status-${invoice.status?.toLowerCase() || 'unpaid'}`;
    
    tr.innerHTML = `
      <td><strong>${invoice.number || ''}</strong></td>
      <td>${invoice.contracts?.clients?.legal_name || ''}</td>
      <td>${fmtFR(invoice.period_start)} → ${fmtFR(invoice.period_end)}</td>
      <td>${fmtMoney(invoice.amount_ht)}</td>
      <td>${fmtMoney(invoice.amount_ht * (invoice.tva_rate || 0))}</td>
      <td><strong>${fmtMoney(invoice.amount_ttc)}</strong></td>
      <td><span class="status-badge ${statusClass}">${invoice.status || 'Impayé'}</span></td>
      <td class="actions">
        <div class="dropdown">
          <button class="btn act-btn" data-id="${invoice.id}">Actions ▾</button>
          <div class="menu hidden">
            <button class="act-item" data-action="view" data-id="${invoice.id}">👁️ Voir détails</button>
            <button class="act-item" data-action="print" data-id="${invoice.id}">🖨️ Imprimer</button>
            <button class="act-item danger" data-action="delete" data-id="${invoice.id}">🗑️ Supprimer</button>
          </div>
        </div>
      </td>
    `;
    
    tbody.appendChild(tr);
  });
  
  setTimeout(setupInvoicePageActions, 100);
  setupInvoicePageActions();
}

// Ouvrir le modal Journal des Ventes
function openSalesJournalModal(type = 'all') {
  currentJournalType = type;
  
  if (type === 'unpaid') {
    document.getElementById('journalModalTitle').textContent = 'État des Factures Impayées';
    document.getElementById('journalStatusLabel').style.display = 'none';
    document.getElementById('journalStatus').style.display = 'none';
    document.getElementById('journalSummaryTitle').textContent = 'Résumé des impayés';
    document.getElementById('journalPrintButton').textContent = '🖨️ Imprimer l\'état';
    document.getElementById('journalPrintButton').className = 'btn warn';
  } else if (type === 'paid') {
    document.getElementById('journalModalTitle').textContent = 'Relevé des Factures Payées';
    document.getElementById('journalStatusLabel').style.display = 'none';
    document.getElementById('journalStatus').style.display = 'none';
    document.getElementById('journalSummaryTitle').textContent = 'Résumé des payées';
    document.getElementById('journalPrintButton').textContent = '🖨️ Imprimer le relevé';
    document.getElementById('journalPrintButton').className = 'btn success';
  } else {
    document.getElementById('journalModalTitle').textContent = 'Journal des Ventes';
    document.getElementById('journalStatusLabel').style.display = 'block';
    document.getElementById('journalStatus').style.display = 'block';
    document.getElementById('journalSummaryTitle').textContent = 'Résumé de la période';
    document.getElementById('journalPrintButton').textContent = '🖨️ Imprimer le journal';
    document.getElementById('journalPrintButton').className = 'btn acc';
  }

  const today = new Date();
  let startDate, endDate;
  
  if (type === 'unpaid') {
    startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 6);
    endDate = today;
  } else if (type === 'paid') {
    startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  } else {
    startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  }
  
  document.getElementById('journalStartDate').value = startDate.toISOString().split('T')[0];
  document.getElementById('journalEndDate').value = endDate.toISOString().split('T')[0];
  document.getElementById('journalStatus').value = '';
  
  calculateJournalSummary();
  document.getElementById('salesJournalModal').style.display = 'flex';
}

// Fermer le modal
function closeSalesJournalModal() {
  document.getElementById('salesJournalModal').style.display = 'none';
}

// Calculer le résumé de la période
async function calculateJournalSummary() {
  const startDate = document.getElementById('journalStartDate').value;
  const endDate = document.getElementById('journalEndDate').value;
  const status = document.getElementById('journalStatus').value;
  
  if (!startDate || !endDate) {
    document.getElementById('journalSummary').innerHTML = 'Sélectionnez une période pour voir le résumé';
    return;
  }
  
  try {
    let query = supabase.from('invoices');
    
    if (currentJournalType === 'paid') {
      const { data: invoicesData, error: invoicesError } = await supabase
        .from('invoices')
        .select('amount_ttc, status, paid_date')
        .eq('status', 'Payé')
        .gte('paid_date', startDate)
        .lte('paid_date', endDate);
      
      if (invoicesError) throw invoicesError;
      invoices = invoicesData;
    } else {
      query = query
        .select('amount_ttc, status, paid_date')
        .gte('issue_date', startDate)
        .lte('issue_date', endDate);
      
      if (currentJournalType === 'unpaid') {
        query = query.neq('status', 'Payé');
      } else if (status) {
        query = query.eq('status', status);
      }
      
      const { data: invoicesData, error: invoicesError } = await query;
      if (invoicesError) throw invoicesError;
      invoices = invoicesData;
    }
    
    const totalInvoices = invoices?.length || 0;
    const totalAmount = invoices?.reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0) || 0;
    
    if (currentJournalType === 'unpaid') {
      const fullyUnpaid = invoices?.filter(inv => inv.status === 'Impayé').length || 0;
      const partialUnpaid = invoices?.filter(inv => inv.status === 'Partiel').length || 0;
      
      document.getElementById('journalSummary').innerHTML = `
        <div>📊 <strong>${totalInvoices}</strong> facture(s) impayée(s)</div>
        <div>💰 Montant total: <strong>${fmtMoney(totalAmount)} DH</strong></div>
        <div>❌ Impayées totales: <strong>${fullyUnpaid}</strong></div>
        <div>⚠️ Partiellement payées: <strong>${partialUnpaid}</strong></div>
      `;
    } else if (currentJournalType === 'paid') {
      document.getElementById('journalSummary').innerHTML = `
        <div>📊 <strong>${totalInvoices}</strong> facture(s) payée(s)</div>
        <div>💰 Total encaissé: <strong>${fmtMoney(totalAmount)} DH</strong></div>
        <div>📅 Période de paiement: ${new Date(startDate).toLocaleDateString('fr-FR')} au ${new Date(endDate).toLocaleDateString('fr-FR')}</div>
      `;
    } else {
      const paidInvoices = invoices?.filter(inv => inv.status === 'Payé').length || 0;
      const unpaidInvoices = invoices?.filter(inv => inv.status === 'Impayé').length || 0;
      
      document.getElementById('journalSummary').innerHTML = `
        <div>📊 <strong>${totalInvoices}</strong> facture(s)</div>
        <div>💰 Total: <strong>${fmtMoney(totalAmount)} DH</strong></div>
        <div>✅ Payées: <strong>${paidInvoices}</strong></div>
        <div>❌ Impayées: <strong>${unpaidInvoices}</strong></div>
      `;
    }
    
  } catch (error) {
    console.error("Erreur:", error);
    document.getElementById('journalSummary').innerHTML = 'Erreur lors du calcul';
  }
}

// Générer et imprimer le journal
async function generateSalesJournal() {
  const startDate = document.getElementById('journalStartDate').value;
  const endDate = document.getElementById('journalEndDate').value;
  const status = document.getElementById('journalStatus').value;
  
  if (!startDate || !endDate) {
    alert("Veuillez sélectionner une période");
    return;
  }
  
  try {
    let invoices, payments;
    
    if (currentJournalType === 'paid') {
      const { data: invoicesData, error: invoicesError } = await supabase
        .from('invoices')
        .select('*, contracts(number, clients(legal_name, ice, phone))')
        .eq('status', 'Payé')
        .gte('paid_date', startDate)
        .lte('paid_date', endDate)
        .order('paid_date', { ascending: true });
      
      if (invoicesError) throw invoicesError;
      invoices = invoicesData;
      
      if (invoices && invoices.length > 0) {
        const invoiceIds = invoices.map(inv => inv.id);
        const { data: paymentsData, error: paymentsError } = await supabase
          .from('payments')
          .select('*')
          .in('invoice_id', invoiceIds);
        
        if (paymentsError) throw paymentsError;
        payments = paymentsData;
      }
      
      if (payments) {
        invoices = invoices.map(invoice => ({
          ...invoice,
          payments: payments.filter(payment => payment.invoice_id === invoice.id)
        }));
      }
      
    } else if (currentJournalType === 'unpaid') {
      const { data: invoicesData, error: invoicesError } = await supabase
        .from('invoices')
        .select('*, contracts(number, clients(legal_name, ice, phone))')
        .neq('status', 'Payé')
        .gte('issue_date', startDate)
        .lte('issue_date', endDate)
        .order('number', { ascending: true });
      
      if (invoicesError) throw invoicesError;
      invoices = invoicesData;
      
    } else {
      let query = supabase
        .from('invoices')
        .select('*, contracts(number, clients(legal_name, ice, phone))')
        .gte('issue_date', startDate)
        .lte('issue_date', endDate)
        .order('number', { ascending: true });
      
      if (status) {
        query = query.eq('status', status);
      }
      
      const { data: invoicesData, error: invoicesError } = await query;
      if (invoicesError) throw invoicesError;
      invoices = invoicesData;
    }
    
    if (!invoices || invoices.length === 0) {
      const message = currentJournalType === 'paid' ? 'payée' : 
                     currentJournalType === 'unpaid' ? 'impayée' : 'trouvée';
      alert(`Aucune facture ${message} trouvée pour cette période`);
      return;
    }
    
    await printSalesJournal(invoices, startDate, endDate, status);
    
  } catch (error) {
    console.error("Erreur génération journal:", error);
    alert("Erreur lors de la génération du rapport: " + error.message);
  }
}

// Imprimer le journal des ventes
async function printSalesJournal(invoices, startDate, endDate, status) {
  const { data: settings } = await supabase.from('settings').select('*').limit(1).single();
  
  let title, summaryHtml, tableHeader, tableRows, notesHtml, headerColor, backgroundColor, borderColor;

  if (currentJournalType === 'unpaid') {
    title = "ÉTAT DES FACTURES IMPAYÉES";
    headerColor = "#dc2626";
    backgroundColor = "#fef2f2";
    borderColor = "#fecaca";
    
    const totalAmount = invoices.reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0);
    const fullyUnpaid = invoices.filter(inv => inv.status === 'Impayé');
    const partialUnpaid = invoices.filter(inv => inv.status === 'Partiel');
    const fullyUnpaidAmount = fullyUnpaid.reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0);
    const partialUnpaidAmount = partialUnpaid.reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0);
    
    summaryHtml = `
      <div style="background:${backgroundColor}; padding:15px; border-radius:5px; margin-bottom:20px; border:1px solid ${borderColor};">
        <h3 style="margin:0 0 10px 0; color:${headerColor};">RÉSUMÉ DES IMPAYÉS</h3>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Total impayés</div>
            <div style="font-size:18px; font-weight:bold;">${invoices.length}</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Montant total</div>
            <div style="font-size:18px; font-weight:bold; color:${headerColor};">${fmtMoney(totalAmount)} DH</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Impayés totaux</div>
            <div style="font-size:18px; font-weight:bold; color:${headerColor};">${fullyUnpaid.length}</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Partiels</div>
            <div style="font-size:18px; font-weight:bold; color:#f59e0b;">${partialUnpaid.length}</div>
          </div>
        </div>
        <div style="margin-top:10px; padding-top:10px; border-top:1px dashed ${borderColor};">
          <div style="font-size:11px; color:#666;">Détail des montants:</div>
          <div style="display:flex; justify-content:space-between; font-size:12px;">
            <span>Impayés totaux: <strong>${fmtMoney(fullyUnpaidAmount)} DH</strong></span>
            <span>Partiels: <strong>${fmtMoney(partialUnpaidAmount)} DH</strong></span>
          </div>
        </div>
      </div>
    `;
    
    tableHeader = `
      <thead style="background:${headerColor}; color:white;">
        <tr>
          <th style="padding:10px; width:80px;">N° Facture</th>
          <th style="padding:10px;">Client</th>
          <th style="padding:10px; width:80px;">Date Facture</th>
          <th style="padding:10px; width:90px;">Échéance</th>
          <th style="padding:10px; width:100px;">Montant TTC</th>
          <th style="padding:10px; width:80px;">Statut</th>
          <th style="padding:10px;">Contact</th>
        </tr>
      </thead>
    `;
    
    tableRows = invoices.map(inv => {
      const isOverdue = new Date() > new Date(inv.period_end || inv.issue_date);
      return `
        <tr>
          <td style="padding:8px;">${inv.number || ''}</td>
          <td style="padding:8px;">${inv.contracts?.clients?.legal_name || ''}</td>
          <td style="padding:8px; text-align:center;">${fmtFR(inv.issue_date)}</td>
          <td style="padding:8px; text-align:center; ${isOverdue ? 'color:#dc2626; font-weight:bold;' : ''}">
            ${fmtFR(inv.period_end)}
            ${isOverdue ? ' ⚠️' : ''}
          </td>
          <td style="padding:8px; text-align:right;">${fmtMoney(inv.amount_ttc)} DH</td>
          <td style="padding:8px; text-align:center;">
            <span style="padding:2px 6px; border-radius:3px; font-size:10px; 
              ${inv.status === 'Impayé' ? 'background:#fee2e2; color:#991b1b;' : 
                'background:#fef3c7; color:#92400e;'}">
              ${inv.status || 'Impayé'}
            </span>
          </td>
          <td style="padding:8px; font-size:11px;">
            ${inv.contracts?.clients?.phone || 'N/A'}
          </td>
        </tr>
      `;
    }).join('');
    
    notesHtml = `
      <div style="margin-top:20px; padding:15px; background:#f8f9fa; border-radius:5px; font-size:11px;">
        <div style="font-weight:bold; margin-bottom:5px;">Notes:</div>
        <div>• Les dates en rouge indiquent les échéances dépassées</div>
        <div>• ⚠️ = Retard de paiement</div>
        <div>• Contactez les clients pour régulariser leur situation</div>
      </div>
    `;

  } else if (currentJournalType === 'paid') {
    title = "RELEVÉ DES FACTURES PAYÉES";
    headerColor = "#166534";
    backgroundColor = "#f0fdf4";
    borderColor = "#bbf7d0";
    
    const totalAmount = invoices.reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0);
    
    summaryHtml = `
      <div style="background:${backgroundColor}; padding:15px; border-radius:5px; margin-bottom:20px; border:1px solid ${borderColor};">
        <h3 style="margin:0 0 10px 0; color:${headerColor};">RELEVÉ DES ENCAISSEMENTS</h3>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Factures payées</div>
            <div style="font-size:18px; font-weight:bold;">${invoices.length}</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Total encaissé</div>
            <div style="font-size:18px; font-weight:bold; color:${headerColor};">${fmtMoney(totalAmount)} DH</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Période</div>
            <div style="font-size:14px; font-weight:bold;">${new Date(startDate).toLocaleDateString('fr-FR')}<br>au<br>${new Date(endDate).toLocaleDateString('fr-FR')}</div>
          </div>
        </div>
      </div>
    `;
    
    tableHeader = `
      <thead style="background:${headerColor}; color:white;">
        <tr>
          <th style="padding:10px; width:80px;">N° Facture</th>
          <th style="padding:10px;">Client</th>
          <th style="padding:10px; width:80px;">Date Facture</th>
          <th style="padding:10px; width:90px;">Date Paiement</th>
          <th style="padding:10px; width:100px;">Montant TTC</th>
          <th style="padding:10px; width:80px;">Mode</th>
          <th style="padding:10px;">Référence</th>
        </tr>
      </thead>
    `;
    
    tableRows = invoices.map(inv => {
      const payment = inv.payments?.[0] || {};
      return `
        <tr>
          <td style="padding:8px;">${inv.number || ''}</td>
          <td style="padding:8px;">${inv.contracts?.clients?.legal_name || ''}</td>
          <td style="padding:8px; text-align:center;">${fmtFR(inv.issue_date)}</td>
          <td style="padding:8px; text-align:center; font-weight:bold;">${fmtFR(inv.paid_date)}</td>
          <td style="padding:8px; text-align:right;">${fmtMoney(inv.amount_ttc)} DH</td>
          <td style="padding:8px; text-align:center;">
            <span style="padding:2px 6px; border-radius:3px; font-size:10px; background:#dcfce7; color:#166534;">
              ${payment.mode || 'Virement'}
            </span>
          </td>
          <td style="padding:8px; font-size:11px; text-align:center;">
            ${payment.reference || '-'}
          </td>
        </tr>
      `;
    }).join('');
    
    notesHtml = `
      <div style="margin-top:20px; padding:15px; background:#f8f9fa; border-radius:5px; font-size:11px;">
        <div style="font-weight:bold; margin-bottom:5px;">Notes:</div>
        <div>• Relevé des encaissements du ${new Date(startDate).toLocaleDateString('fr-FR')} au ${new Date(endDate).toLocaleDateString('fr-FR')}</div>
        <div>• Trié par date de paiement</div>
      </div>
    `;

  } else {
    title = "JOURNAL DES VENTES";
    headerColor = "#2f53a5";
    backgroundColor = "#f8f9fa";
    borderColor = "#d1d5db";
    
    const totalAmount = invoices.reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0);
    const paidAmount = invoices.filter(inv => inv.status === 'Payé').reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0);
    const unpaidAmount = invoices.filter(inv => inv.status === 'Impayé').reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0);
    
    summaryHtml = `
      <div style="background:${backgroundColor}; padding:15px; border-radius:5px; margin-bottom:20px;">
        <h3 style="margin:0 0 10px 0;">RÉSUMÉ DE LA PÉRIODE</h3>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Factures</div>
            <div style="font-size:18px; font-weight:bold;">${invoices.length}</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Total TTC</div>
            <div style="font-size:18px; font-weight:bold; color:${headerColor};">${fmtMoney(totalAmount)} DH</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Payées</div>
            <div style="font-size:18px; font-weight:bold; color:#22c55e;">${fmtMoney(paidAmount)} DH</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:11px; color:#666;">Impayées</div>
            <div style="font-size:18px; font-weight:bold; color:#ef4444;">${fmtMoney(unpaidAmount)} DH</div>
          </div>
        </div>
      </div>
    `;
    
    tableHeader = `
      <thead style="background:${headerColor}; color:white;">
        <tr>
          <th style="padding:10px; width:80px;">N° Facture</th>
          <th style="padding:10px;">Client</th>
          <th style="padding:10px; width:80px;">Date</th>
          <th style="padding:10px; width:100px;">Montant TTC</th>
          <th style="padding:10px; width:80px;">Statut</th>
          <th style="padding:10px; width:90px;">Date Paiement</th>
        </tr>
      </thead>
    `;
    
    tableRows = invoices.map(inv => `
      <tr>
        <td style="padding:8px;">${inv.number || ''}</td>
        <td style="padding:8px;">${inv.contracts?.clients?.legal_name || ''}</td>
        <td style="padding:8px; text-align:center;">${fmtFR(inv.issue_date)}</td>
        <td style="padding:8px; text-align:right;">${fmtMoney(inv.amount_ttc)} DH</td>
        <td style="padding:8px; text-align:center;">
          <span style="padding:2px 6px; border-radius:3px; font-size:10px; 
            ${inv.status === 'Payé' ? 'background:#dcfce7; color:#166534;' : 
              inv.status === 'Impayé' ? 'background:#fee2e2; color:#991b1b;' : 
              'background:#fef3c7; color:#92400e;'}">
            ${inv.status || 'Impayé'}
          </span>
        </td>
        <td style="padding:8px; text-align:center;">${fmtFR(inv.paid_date)}</td>
      </tr>
    `).join('');
    
    notesHtml = '';
  }

  const html = `
    <div style="font-family:Arial; font-size:12px; padding:20px;">
      <!-- En-tête -->
      <div style="text-align:center; margin-bottom:30px; border-bottom:2px solid ${headerColor}; padding-bottom:15px;">
        <h1 style="margin:0; color:${headerColor};">${title}</h1>
        <div style="font-size:14px; margin:5px 0;">
          ${settings?.company_name || ''} - ${settings?.address || ''} ${settings?.city || ''}
        </div>
        <div style="font-size:13px;">
          Période du ${new Date(startDate).toLocaleDateString('fr-FR')} au ${new Date(endDate).toLocaleDateString('fr-FR')}
          ${status && currentJournalType === 'all' ? ` | Statut: ${status}` : ''}
        </div>
        <div style="font-size:12px; color:#666; margin-top:5px;">
          Généré le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
        </div>
      </div>
      
      <!-- Résumé -->
      ${summaryHtml}
      
      <!-- Détails des factures -->
      <table style="width:100%; border-collapse:collapse; margin-top:20px;" border="1" cellpadding="8">
        ${tableHeader}
        <tbody>
          ${tableRows}
        </tbody>
        <tfoot style="background:${backgroundColor}; font-weight:bold;">
          <tr>
            <td colspan="${currentJournalType === 'unpaid' ? '4' : currentJournalType === 'paid' ? '4' : '3'}" style="padding:10px; text-align:right;">
              TOTAL${currentJournalType === 'paid' ? ' ENCAISSÉ' : currentJournalType === 'unpaid' ? ' IMPAYÉ' : ''}:
            </td>
            <td style="padding:10px; text-align:right;">
              ${fmtMoney(invoices.reduce((sum, inv) => sum + (+inv.amount_ttc || 0), 0))} DH
            </td>
            <td colspan="${currentJournalType === 'unpaid' ? '2' : currentJournalType === 'paid' ? '2' : '1'}"></td>
          </tr>
        </tfoot>
      </table>
      
      <!-- Notes -->
      ${notesHtml}
    </div>
  `;
  
  const printWindow = window.open('', '_blank');

if (!printWindow) {
  alert("⚠️ Fenêtre d'impression bloquée par le navigateur (popup). Autorise les popups pour ce site.");
  return;
}
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title} - ${startDate} à ${endDate}</title>
      <style>
        body { margin: 0; font-family: Arial; }
        @media print { 
          @page { margin: 15mm; }
          body { margin: 0; }
        }
      </style>
    </head>
    <body>${html}</body>
    </html>
  `);
  printWindow.document.close();
  
  printWindow.onload = () => {
    printWindow.print();
    closeSalesJournalModal();
  };
}

// Écouter les changements de dates pour mettre à jour le résumé
document.getElementById('journalStartDate').addEventListener('change', calculateJournalSummary);
document.getElementById('journalEndDate').addEventListener('change', calculateJournalSummary);
document.getElementById('journalStatus').addEventListener('change', calculateJournalSummary);

// Afficher les détails d'une facture
async function showInvoiceDetails(invoiceId) {
  const { data: invoice, error } = await supabase
    .from('invoices')
    .select('*, contracts(number, clients(legal_name, ice, if, rc, head_address, city))')
    .eq('id', invoiceId)
    .single();
  
  const { data: settings } = await supabase.from('settings').select('*').limit(1).single();
  
  if (error || !invoice || !settings) {
    alert("Facture introuvable");
    return;
  }
  
  document.querySelectorAll('.invoice-details-row').forEach(row => row.remove());
  
  const clickedRow = document.querySelector(`[data-invoice-id="${invoiceId}"]`);
  if (!clickedRow) return;
  
  const detailsRow = document.createElement('tr');
  detailsRow.className = 'invoice-details-row';
  detailsRow.innerHTML = `
    <td colspan="8" style="padding:0; border-bottom:1px solid var(--border);">
      <div class="invoice-details" style="background:var(--card); padding:20px; margin:0;">
        <div class="sp">
          <h4 style="margin:0;">Détails de la facture ${invoice.number}</h4>
          <div class="toolbar">
            <button class="btn" onclick="printInvoice('${invoice.id}')">🖨️ Imprimer</button>
            <button class="btn close-details-btn" data-invoice-id="${invoice.id}">✖ Fermer</button>
          </div>
        </div>
        
        <div class="invoice-header">
          <div>
            <p><strong>Client:</strong> ${invoice.contracts?.clients?.legal_name || ''}</p>
            <p><strong>ICE:</strong> ${invoice.contracts?.clients?.ice || ''}</p>
            <p><strong>Adresse:</strong> ${invoice.contracts?.clients?.head_address || ''} ${invoice.contracts?.clients?.city || ''}</p>
          </div>
          <div style="text-align: right;">
            <p><strong>Date d'émission:</strong> ${fmtFR(invoice.issue_date)}</p>
            <p><strong>Période:</strong> ${fmtFR(invoice.period_start)} au ${fmtFR(invoice.period_end)}</p>
            <p><strong>Statut:</strong> <span class="status-badge status-${invoice.status?.toLowerCase() || 'unpaid'}">${invoice.status || 'Impayé'}</span></p>
          </div>
        </div>
        
        <div class="invoice-header">
          <div>
            <h4>Émetteur</h4>
            <p><strong>${settings.company_name || ''}</strong></p>
            <p>${settings.address || ''} ${settings.city || ''}</p>
            <p>ICE: ${settings.ice || ''} - IF: ${settings.if || ''}</p>
            <p>RC: ${settings.rc || ''} - TP: ${settings.tp || ''}</p>
          </div>
        </div>
        
        <table class="invoice-items">
          <thead>
            <tr>
              <th>Désignation</th>
              <th>Quantité</th>
              <th>Prix Unitaire HT</th>
              <th>TVA</th>
              <th>Total TTC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frais de domiciliation annuelle - Période du ${fmtFR(invoice.period_start)} au ${fmtFR(invoice.period_end)}</td>
              <td style="text-align: center;">1</td>
              <td style="text-align: right;">${fmtMoney(invoice.amount_ht)}</td>
              <td style="text-align: right;">${Math.round((invoice.tva_rate || 0) * 100)}%</td>
              <td style="text-align: right;"><strong>${fmtMoney(invoice.amount_ttc)}</strong></td>
            </tr>
          </tbody>
        </table>
        
        <div class="invoice-totals">
          <table>
            <tr>
              <td>Total HT:</td>
              <td style="text-align: right;">${fmtMoney(invoice.amount_ht)}</td>
            </tr>
            <tr>
              <td>TVA (${Math.round((invoice.tva_rate || 0) * 100)}%):</td>
              <td style="text-align: right;">${fmtMoney(invoice.amount_ht * (invoice.tva_rate || 0))}</td>
            </tr>
            <tr>
              <td><strong>Total TTC:</strong></td>
              <td style="text-align: right;"><strong>${fmtMoney(invoice.amount_ttc)}</strong></td>
            </tr>
          </table>
        </div>
        
        ${invoice.paid_date ? `
          <div style="margin-top: 20px; padding: 15px; background: var(--panel); border-radius: 8px;">
            <p><strong>Date de paiement:</strong> ${fmtFR(invoice.paid_date)}</p>
          </div>
        ` : ''}
      </div>
    </td>
  `;
  
  clickedRow.parentNode.insertBefore(detailsRow, clickedRow.nextSibling);
  
  const closeBtn = detailsRow.querySelector('.close-details-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      detailsRow.remove();
    });
  }
}

// Gestionnaire d'événements pour la page Factures
function setupInvoicePageActions() {
  document.addEventListener('click', function(e) {
    if (e.target.matches('#invoicesTable .act-btn') || e.target.closest('#invoicesTable .act-btn')) {
      const btn = e.target.matches('.act-btn') ? e.target : e.target.closest('.act-btn');
      const menu = btn.nextElementSibling;
      const isHidden = menu.classList.contains('hidden');
      
      document.querySelectorAll('#invoicesTable .menu').forEach(m => {
        if (m !== menu) m.classList.add('hidden');
      });
      
      if (isHidden) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
      e.stopPropagation();
    }
    
    else if (e.target.matches('#invoicesTable .act-item') || e.target.closest('#invoicesTable .act-item')) {
      const item = e.target.matches('.act-item') ? e.target : e.target.closest('.act-item');
      const invoiceId = item.dataset.id;
      const action = item.dataset.action;
      
      document.querySelectorAll('#invoicesTable .menu').forEach(m => m.classList.add('hidden'));
      
      switch(action) {
        case 'view':
          showInvoiceDetails(invoiceId);
          break;
        case 'print':
          printInvoice(invoiceId);
          break;
        
        case 'delete':
          deleteInvoice(invoiceId);
          break;
      }
      e.stopPropagation();
    }
    
    else if (!e.target.closest('#invoicesTable .dropdown')) {
      document.querySelectorAll('#invoicesTable .menu').forEach(m => m.classList.add('hidden'));
    }
  });
  
  const searchInput = document.getElementById('invoiceClientSearch');
  searchInput.addEventListener('input', debounce(() => loadInvoices(), 300));
}

// Effacer les filtres
function clearInvoiceFilters() {
  document.getElementById('invoiceClientSearch').value = '';
  document.getElementById('filterInvoiceStatus').value = '';
  document.getElementById('filterInvoiceMonth').value = '';
  loadInvoices();
}

// Imprimer la facture sélectionnée
function printSelectedInvoice() {
  if (currentInvoice) {
    printInvoice(currentInvoice.id);
  } else {
    alert("Aucune facture sélectionnée");
  }
}

// Marquer comme payée depuis les détails
async function markInvoiceAsPaidFromDetails() {
  if (currentInvoice) {
    await markInvoiceAsPaid(currentInvoice.id);
    showInvoiceDetails(currentInvoice.id);
  } else {
    alert("Aucune facture sélectionnée");
  }
}

/* ======= FACTURES EXISTANTES ======= */
async function editInvoice(contractId){
  const { data: c } = await supabase.from('contracts').select('*, clients(legal_name,ice,if,rc,head_address,city)').eq('id',contractId).maybeSingle();
  const { data: s } = await supabase.from('settings').select('*').limit(1).maybeSingle();
  if(!c || !s) { alert("Données incomplètes (contrat ou mes infos)."); return; }
  const { data: existing, error: exErr } = await supabase.from('invoices').select('*').eq('contract_id', contractId).order('created_at', { ascending: true }).limit(1).maybeSingle();
  if(exErr){ console.error(exErr); alert("Erreur lors de la recherche de facture."); return; }
  let inv, isDuplicate=false;
  if(existing){ inv = existing; isDuplicate = true; }
  else{
    const amount_ttc = +c.annual_fee || 0;
    const amount_ht = amount_ttc / 1.2;
    const tva = amount_ht * 0.20;
    const num = await nextNumber('invoices','F', c.start_date);
    const invRow={ number:num, contract_id:c.id, client_id:c.client_id, issue_date: yyyymmdd(c.start_date),
    period_start:c.start_date, period_end:c.end_date, amount_ht:amount_ht, tva_rate:0.20, amount_ttc:amount_ttc, status:'Impayé' };
    const { data: ins, error: insErr } = await supabase.from('invoices').insert(invRow).select().single();
    if(insErr){ alert(insErr.message); return; }
    inv = ins; refreshKPIs();
  }
  const html = buildInvoiceHTML(inv, c, s, { duplicate:isDuplicate });
  invoicePreview.innerHTML = html;
  document.getElementById('invoiceModal').style.display='flex';
}

function buildInvoiceHTML(inv, contract, settings, opts={}){
  const amount_ttc = +inv.amount_ttc || +contract.annual_fee || 0;
  const amount_ht = amount_ttc / 1.2;
  const tva = amount_ht * 0.20;
  const dup = !!opts.duplicate;
  const dupBanner = dup ? `<div style="position:absolute; top:10px; right:10px; border:2px solid #ef4444; color:#ef4444; padding:4px 10px; font-weight:700; font-size:12px;">DUPLICATA</div>` : "";
  
  return `
    <div style="position:relative; font-family:Arial; font-size:12px; min-height:100vh; display:flex; flex-direction:column;">
      ${dupBanner}
      
      <!-- EN-TÊTE -->
      <div style="border-bottom:2px solid #333; padding-bottom:15px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div style="flex:1;">
            <div style="font-size:24px; font-weight:bold; color:#2f53a5; margin-bottom:10px;">${settings.company_name||""}</div>
            <div style="color:#666; line-height:1.4;">
              ${settings.address||""}<br/>
              ${settings.city||""}<br/>
              ICE: ${settings.ice||""} | IF: ${settings.if||""}<br/>
              RC: ${settings.rc||""} | TP: ${settings.tp||""}<br/>
              Tél: ${settings.phone||""} | Email: ${settings.email||""}
            </div>
          </div>
          <div style="text-align:right; flex:1;">
            <div style="font-size:20px; font-weight:bold; color:#333; margin-bottom:10px;">FACTURE</div>
            <div style="background:#f8f9fa; padding:10px; border-radius:5px; display:inline-block;">
              <div><strong>N°: ${inv.number}</strong></div>
              <div>Date: ${new Date(inv.issue_date).toLocaleDateString('fr-FR')}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CORPS DU DOCUMENT -->
      <div style="flex:1;">
        <!-- Informations client simplifiées -->
        <div style="margin-bottom:20px;">
          <div style="font-weight:bold; color:#2f53a5; margin-bottom:8px;">CLIENT</div>
          <div style="background:#f8f9fa; padding:12px; border-radius:5px;">
            <div><strong>${contract.clients?.legal_name||""}</strong></div>
            <div>ICE: ${contract.clients?.ice||""}</div>
          </div>
        </div>

        <!-- Tableau des articles -->
        <table style="width:100%; border-collapse:collapse; margin-bottom:20px;" border="1" cellpadding="8">
          <thead style="background:#2f53a5; color:white;">
            <tr>
              <th align="left" style="padding:10px;">Désignation</th>
              <th style="padding:10px; width:60px;">Qté</th>
              <th style="padding:10px; width:100px;">PU HT</th>
              <th style="padding:10px; width:80px;">TVA</th>
              <th style="padding:10px; width:120px;">Total TTC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:10px;">
                Frais de domiciliation annuelle<br/>
                <small style="color:#666;">Période du ${new Date(inv.period_start||contract.start_date).toLocaleDateString('fr-FR')} au ${new Date(inv.period_end||contract.end_date).toLocaleDateString('fr-FR')}</small>
              </td>
              <td align="center" style="padding:10px;">1</td>
              <td align="right" style="padding:10px;">${fmtMoney(amount_ht)}</td>
              <td align="right" style="padding:10px;">${Math.round((+inv.tva_rate||0)*100)}%</td>
              <td align="right" style="padding:10px;"><strong>${fmtMoney(amount_ttc)}</strong></td>
            </tr>
          </tbody>
        </table>

        <!-- Totaux -->
        <div style="display:flex; justify-content:flex-end;">
          <table cellpadding="8" border="1" style="border-collapse:collapse; width:300px;">
            <tr>
              <td style="padding:8px;"><strong>Total HT</strong></td>
              <td align="right" style="padding:8px;">${fmtMoney(amount_ht)}</td>
            </tr>
            <tr>
              <td style="padding:8px;">TVA (${Math.round((+inv.tva_rate||0)*100)}%)</td>
              <td align="right" style="padding:8px;">${fmtMoney(tva)}</td>
            </tr>
            <tr style="background:#f8f9fa;">
              <td style="padding:8px;"><strong>Total TTC</strong></td>
              <td align="right" style="padding:8px;"><strong>${fmtMoney(amount_ttc)}</strong></td>
            </tr>
          </table>
        </div>

        <!-- Conditions de paiement -->
        <div style="margin-top:30px; padding:15px; background:#f8f9fa; border-radius:5px;">
          <div style="font-weight:bold; margin-bottom:5px;">Conditions de règlement :</div>
          <div>À régler par virement bancaire dans les 30 jours</div>
          ${settings.rib ? `<div style="margin-top:8px;"><strong>RIB :</strong> ${settings.rib} ${settings.bank ? `(${settings.bank})` : ''}</div>` : ''}
        </div>
      </div>

      <!-- PIED DE PAGE -->
      <div style="border-top:2px solid #333; padding-top:15px; margin-top:20px; text-align:center; color:#666; font-size:11px;">
        <div style="margin-bottom:5px;">
          <strong>${settings.company_name||""}</strong> - 
          ${settings.address||""} ${settings.city||""} - 
          Tél: ${settings.phone||""} - 
          Email: ${settings.email||""}
        </div>
        <div>
          ICE: ${settings.ice||""} | IF: ${settings.if||""} | RC: ${settings.rc||""} | TP: ${settings.tp||""}
          ${settings.rib ? `| RIB: ${settings.rib}` : ''}
        </div>
      </div>
    </div>
  `;
}

function printInvoicePreview() {
  const invoiceContent = document.getElementById('invoicePreview').innerHTML;
  const printWindow = window.open('', '_blank');

if (!printWindow) {
  alert("⚠️ Fenêtre d'impression bloquée par le navigateur (popup). Autorise les popups pour ce site.");
  return;
}
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Facture</title>
      <style>
        body { 
          font-family: Arial; 
          margin: 20px; 
          color: black;
          background: white;
        }
        @media print { 
          body { margin: 0; }
          @page { margin: 20mm; }
        }
      </style>
    </head>
    <body>${invoiceContent}</body>
    </html>
  `);
  printWindow.document.close();
  printWindow.onload = () => {
    printWindow.print();
    setTimeout(() => {
      closeInvoice();
      printWindow.close();
    }, 500);
  };
}

function closeInvoiceDetails() {
  document.getElementById('invoiceDetails').classList.add('hidden');
  currentInvoice = null;
}

function closeInvoice(){ document.getElementById('invoiceModal').style.display='none'; }

/* ====== Routeur d'actions (contrats) ====== */
const contractsTableEl = document.getElementById('contractsTable');
function closeAllActionMenus(){ document.querySelectorAll('#contractsTable .dropdown .menu').forEach(m=>m.classList.add('hidden')); }
contractsTableEl.addEventListener('click', (e)=>{
  const btn  = e.target.closest('.act-btn');
  const item = e.target.closest('.act-item');
  if(btn){
    const menu = btn.parentElement.querySelector('.menu');
    const isHidden = menu.classList.contains('hidden');
    closeAllActionMenus();
    if(isHidden) menu.classList.remove('hidden');
    return;
  }
  if(item){
    const id = item.dataset.id;
    const action = item.dataset.action;
    closeAllActionMenus();
    switch(action){
      case 'renew':   renewContract(id); break;
      case 'invoice': editInvoice(id);   break;
      case 'docx':    printContract(id); break;
      case 'delete':  deleteContract(id); break;
      case 'resiliate': resiliate(id);  break;
    }
  }
});
document.addEventListener('click', (e)=>{ if(!e.target.closest('#contractsTable .dropdown')) closeAllActionMenus(); });


/* ====== FACTURES IMPAYÉES ====== */
async function loadUnpaid(){
  const q=(filterInvClient.value||"").toLowerCase();
  const st=filterInvStatus.value||"";
  const { data } = await supabase.from('invoices').select('*, contracts(number, clients(legal_name))').order('number',{ascending:false});
  const tbody=document.querySelector('#unpaidTable tbody'); tbody.innerHTML="";
  let total=0;
  
  (data||[]).filter(r=>{
    const okClient = !q || r.contracts?.clients?.legal_name?.toLowerCase().includes(q);
    const okSt = !st || r.status===st;
    const isUnpaid = r.status!=="Payé";
    return okClient && okSt && isUnpaid;
  }).forEach(r=>{
    total += +r.amount_ttc||0;
    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td>${r.contracts?.clients?.legal_name||""}</td>
      <td>${r.number||""}</td>
      <td>${r.period_start?new Date(r.period_start).toLocaleDateString('fr-FR'):""} → ${r.period_end?new Date(r.period_end).toLocaleDateString('fr-FR'):""}</td>
      <td>${fmtMoney(r.amount_ttc)}</td>
      <td class="actions">
        <div class="dropdown">
          <button class="btn act-btn" data-id="${r.id}">Actions ▾</button>
          <div class="menu hidden">
            <button class="act-item" data-action="print" data-id="${r.id}">🖨️ Imprimer facture</button>
            <button class="act-item" data-action="pay" data-id="${r.id}">💰 Marquer comme payée</button>
            <button class="act-item danger" data-action="delete" data-id="${r.id}">🗑️ Supprimer facture</button>
          </div>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
  
  document.getElementById('unpaidTotal').textContent = "Total impayé: " + fmtMoney(total);
}

// Gestion des onglets
function showPaymentTab(tab) {
  document.getElementById('paymentTabUnpaid').classList.add('hidden');
  document.getElementById('paymentTabPaid').classList.add('hidden');
  
  document.getElementById('tabUnpaid').classList.remove('acc');
  document.getElementById('tabPaid').classList.remove('acc');
  
  document.getElementById('paymentTab' + (tab === 'unpaid' ? 'Unpaid' : 'Paid')).classList.remove('hidden');
  document.getElementById('tab' + (tab === 'unpaid' ? 'Unpaid' : 'Paid')).classList.add('acc');
  
  if (tab === 'paid') {
    loadPaidInvoices();
  } else {
    loadUnpaid();
  }
}

// Charger les factures payées
async function loadPaidInvoices() {
  const dateFrom = document.getElementById('filterPaidDateFrom').value;
  const dateTo = document.getElementById('filterPaidDateTo').value;
  const sortBy = document.getElementById('sortPaidBy').value;
  
  try {
    let query = supabase
      .from('invoices')
      .select('*, contracts(number, clients(legal_name))')
      .eq('status', 'Payé')
      .order('paid_date', { ascending: false });

    if (dateFrom && dateTo) {
      query = query.gte('paid_date', dateFrom).lte('paid_date', dateTo);
    } else if (dateFrom) {
      query = query.gte('paid_date', dateFrom);
    } else if (dateTo) {
      query = query.lte('paid_date', dateTo);
    }

    const { data: invoices, error } = await query;
    
    if (error) {
      console.error("Erreur chargement factures payées:", error);
      alert("Erreur lors du chargement des factures payées: " + error.message);
      return;
    }

    const { data: allPayments, error: paymentsError } = await supabase
      .from('payments')
      .select('*');

    if (paymentsError) {
      console.error("Erreur chargement paiements:", paymentsError);
    }

    const invoicesWithPayments = (invoices || []).map(invoice => {
      const payment = (allPayments || []).find(p => p.invoice_id === invoice.id);
      return {
        ...invoice,
        payments: payment ? [payment] : []
      };
    });

    let sortedInvoices = [...invoicesWithPayments];
    switch(sortBy) {
      case 'paid_date_asc':
        sortedInvoices.sort((a, b) => new Date(a.paid_date || 0) - new Date(b.paid_date || 0));
        break;
      case 'paid_date_desc':
      default:
        break;
    }

    const tbody = document.querySelector('#paidTable tbody');
    if (!tbody) {
      console.error("Tableau paidTable introuvable");
      return;
    }
    
    tbody.innerHTML = '';
    
    let total = 0;
    
    if (!sortedInvoices || sortedInvoices.length === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td colspan="8" class="muted" style="text-align:center;">Aucune facture payée trouvée</td>`;
      tbody.appendChild(tr);
    } else {
      sortedInvoices.forEach(invoice => {
        total += +(invoice.amount_ttc || 0);
        const payment = invoice.payments?.[0] || {};
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${invoice.contracts?.clients?.legal_name || ''}</td>
          <td><strong>${invoice.number || ''}</strong></td>
          <td>${fmtFR(invoice.issue_date)}</td>
          <td>${fmtMoney(invoice.amount_ttc)}</td>
          <td>${fmtFR(invoice.paid_date)}</td>
          <td>${payment.mode || ''}</td>
          <td>${payment.reference || ''}</td>
          <td class="actions">
            <div class="dropdown">
              <button class="btn act-btn" data-id="${invoice.id}">Actions ▾</button>
              <div class="menu hidden">
                <button class="act-item" data-action="view" data-id="${invoice.id}">👁️ Voir détails</button>
                <button class="act-item" data-action="print" data-id="${invoice.id}">🖨️ Imprimer</button>
                <button class="act-item warn" data-action="unpay" data-id="${invoice.id}">↩ Marquer impayée</button>
              </div>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }
    
    document.getElementById('paidTotal').textContent = `Total payé: ${fmtMoney(total)} (${sortedInvoices.length} facture${sortedInvoices.length > 1 ? 's' : ''})`;
    
    setTimeout(() => {
      setupPaidInvoicesActions();
    }, 100);
    
  } catch (error) {
    console.error("Erreur inattendue:", error);
    alert("Erreur inattendue lors du chargement des factures payées");
  }
}

// Actions pour les factures payées
function setupPaidInvoicesActions() {
  document.addEventListener('click', function(e) {
    if (e.target.matches('#paidTable .act-btn') || e.target.closest('#paidTable .act-btn')) {
      const btn = e.target.matches('.act-btn') ? e.target : e.target.closest('.act-btn');
      const menu = btn.nextElementSibling;
      const isHidden = menu.classList.contains('hidden');
      
      document.querySelectorAll('#paidTable .menu, #unpaidTable .menu').forEach(m => {
        if (m !== menu) m.classList.add('hidden');
      });
      
      if (isHidden) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
      e.stopPropagation();
    }
    
    else if (e.target.matches('#paidTable .act-item') || e.target.closest('#paidTable .act-item')) {
      const item = e.target.matches('.act-item') ? e.target : e.target.closest('.act-item');
      const invoiceId = item.dataset.id;
      const action = item.dataset.action;
      
      document.querySelectorAll('#paidTable .menu').forEach(m => m.classList.add('hidden'));
      
      switch(action) {
        case 'view':
          showInvoiceDetails(invoiceId);
          break;
        case 'print':
          printInvoice(invoiceId);
          break;
        case 'unpay':
          markInvoiceAsUnpaid(invoiceId);
          break;
      }
      e.stopPropagation();
    }
  });
}

// Fonction pour marquer une facture comme impayée
async function markInvoiceAsUnpaid(invoiceId) {
  if (!confirm("Marquer cette facture comme impayée ? Le paiement associé sera supprimé.")) return;
  
  try {
    const { error: updateError } = await supabase
      .from('invoices')
      .update({ 
        status: 'Impayé',
        paid_date: null
      })
      .eq('id', invoiceId);
    
    if (updateError) {
      alert("Erreur: " + updateError.message);
      return;
    }
    
    const { error: deleteError } = await supabase
      .from('payments')
      .delete()
      .eq('invoice_id', invoiceId);
    
    if (deleteError) {
      console.error("Erreur suppression paiement:", deleteError);
    }
    
    alert("✅ Facture marquée comme impayée");
    loadPaidInvoices();
    loadUnpaid();
    refreshKPIs();
    
  } catch (error) {
    console.error("Erreur:", error);
    alert("Erreur lors du traitement");
  }
}

// ========== GESTIONNAIRE D'ÉVÉNEMENTS CORRIGÉ ==========
function setupInvoiceActions() {
  console.log("🔧 Initialisation des actions factures...");
  
  // Utiliser la délégation d'événements sur le document entier
  document.addEventListener('click', function(e) {
    // Vérifier si on clique sur un bouton Actions dans le tableau des factures impayées
    if (e.target.matches('#unpaidTable .act-btn') || e.target.closest('#unpaidTable .act-btn')) {
      const btn = e.target.matches('.act-btn') ? e.target : e.target.closest('.act-btn');
      const menu = btn.nextElementSibling;
      const isHidden = menu.classList.contains('hidden');
      
      // Fermer tous les autres menus
      document.querySelectorAll('#unpaidTable .menu').forEach(m => {
        if (m !== menu) m.classList.add('hidden');
      });
      
      // Ouvrir/fermer le menu actuel
      if (isHidden) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
      e.stopPropagation();
    }
    
    // Vérifier si on clique sur un élément de menu
    else if (e.target.matches('#unpaidTable .act-item') || e.target.closest('#unpaidTable .act-item')) {
      const item = e.target.matches('.act-item') ? e.target : e.target.closest('.act-item');
      const invoiceId = item.dataset.id;
      const action = item.dataset.action;
      
      // Fermer tous les menus
      document.querySelectorAll('#unpaidTable .menu').forEach(m => m.classList.add('hidden'));
      
      // Exécuter l'action
      switch(action) {
        case 'print':
          printInvoice(invoiceId);
          break;
        case 'pay':
          markInvoiceAsPaid(invoiceId);
          break;
        case 'delete':
          deleteInvoice(invoiceId);
          break;
      }
      e.stopPropagation();
    }
    
    // Fermer les menus si on clique ailleurs
    else if (!e.target.closest('#unpaidTable .dropdown')) {
      document.querySelectorAll('#unpaidTable .menu').forEach(m => m.classList.add('hidden'));
    }
  });
}

// Fonction pour imprimer une facture
async function printInvoice(invoiceId) {
  try {
    const { data: invoice, error } = await supabase
      .from('invoices')
      .select('*, contracts(number, clients(legal_name, ice, if, rc, head_address, city))')
      .eq('id', invoiceId)
      .single();
    
    const { data: settings } = await supabase.from('settings').select('*').limit(1).single();
    
    if (error || !invoice || !settings) {
      alert("Facture introuvable");
      return;
    }
    
    const html = buildInvoiceHTML(invoice, invoice.contracts, settings);
    
    const printWindow = window.open('', '_blank');

if (!printWindow) {
  alert("⚠️ Fenêtre d'impression bloquée par le navigateur (popup). Autorise les popups pour ce site.");
  return;
}
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Facture ${invoice.number}</title>
        <style>
          body { font-family: Arial; margin: 20px; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>${html}</body>
      </html>
    `);
    printWindow.document.close();
    
    printWindow.onload = () => {
      printWindow.print();
    };
    
  } catch (error) {
    console.error("Erreur impression:", error);
    alert("Erreur lors de l'impression");
  }
}

// Fonction pour marquer comme payée

// Variables globales
let currentPaymentInvoice = null;
async function markInvoiceAsPaid(invoiceId) {
  currentPaymentInvoice = invoiceId;
  
  try {
    const { data: invoice, error } = await supabase
      .from('invoices')
      .select('*, contracts(number, clients(legal_name))')
      .eq('id', invoiceId)
      .single();
    
    if (error || !invoice) {
      alert("Facture introuvable");
      return;
    }
    
    // Pré-remplir le formulaire
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('paymentDate').value = today;
    document.getElementById('paymentMode').value = 'Virement';
    document.getElementById('paymentReference').value = '';
    document.getElementById('paymentAmount').value = invoice.amount_ttc || '';
    document.getElementById('paymentNotes').value = `Paiement facture ${invoice.number} - ${invoice.contracts?.clients?.legal_name || ''}`;
    
    // Afficher le modal
    document.getElementById('paymentModal').style.display = 'flex';
    
  } catch (error) {
    console.error("Erreur:", error);
    alert("Erreur lors du chargement de la facture");
  }
}

// Fonction pour confirmer le paiement
async function confirmPayment() {
  if (!currentPaymentInvoice) return;
  
  const paymentDate = document.getElementById('paymentDate').value;
  const paymentMode = document.getElementById('paymentMode').value;
  const paymentReference = document.getElementById('paymentReference').value;
  const paymentAmount = parseFloat(document.getElementById('paymentAmount').value);
  const paymentNotes = document.getElementById('paymentNotes').value;
  
  // Validation
  if (!paymentDate) {
    alert("La date de paiement est obligatoire");
    return;
  }
  
  if (!paymentAmount || paymentAmount <= 0) {
    alert("Le montant doit être supérieur à 0");
    return;
  }
  
  try {
    const { data: invoice, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('id', currentPaymentInvoice)
      .single();
    
    if (error || !invoice) {
      alert("Facture introuvable");
      return;
    }
    
    // Mettre à jour la facture
    const { error: updateError } = await supabase
      .from('invoices')
      .update({ 
        status: 'Payé',
        paid_date: paymentDate
      })
      .eq('id', currentPaymentInvoice);
    
    if (updateError) {
      alert("Erreur: " + updateError.message);
      return;
    }
    
    // Créer l'enregistrement de paiement
    const { error: paymentError } = await supabase
      .from('payments')
      .insert({
        contract_id: invoice.contract_id,
        client_id: invoice.client_id,
        invoice_id: currentPaymentInvoice,
        amount: paymentAmount,
        pay_date: paymentDate,
        mode: paymentMode,
        reference: paymentReference,
        notes: paymentNotes,
        status: 'Payé'
      });
    
    if (paymentError) {
      console.error("Erreur création paiement:", paymentError);
      alert("Erreur lors de l'enregistrement du paiement: " + paymentError.message);
      return;
    }
    
    // Fermer le modal
    closePaymentModal();
    
    // Afficher confirmation
    alert(`✅ Paiement enregistré le ${ddmmyyyy(paymentDate)}`);
    
    // Rafraîchir les données
    loadUnpaid();
    loadInvoices();
    refreshKPIs();
  } catch (error) {
    console.error("Erreur paiement:", error);
    alert("Erreur lors du traitement");
  }
}

// Fonction pour fermer le modal
function closePaymentModal() {
  document.getElementById('paymentModal').style.display = 'none';
  currentPaymentInvoice = null;
}

// Remplacer aussi markInvoiceAsPaidFromDetails (si elle existe encore)
async function markInvoiceAsPaidFromDetails() {
  if (currentInvoice) {
    await markInvoiceAsPaid(currentInvoice.id);
  } else {
    alert("Aucune facture sélectionnée");
  }
}

// Fonction pour supprimer une facture
async function deleteInvoice(invoiceId) {
  if (!confirm("Êtes-vous sûr de vouloir supprimer définitivement cette facture ?")) return;
  
  try {
    const { error } = await supabase
      .from('invoices')
      .delete()
      .eq('id', invoiceId);
    
    if (error) {
      alert("Erreur: " + error.message);
      return;
    }
    
    alert("✅ Facture supprimée");
    loadUnpaid();
    loadInvoices(); // Rafraîchir aussi la page Factures
    refreshKPIs();
    
  } catch (error) {
    console.error("Erreur suppression:", error);
    alert("Erreur lors de la suppression");
  }
}
// Fonction pour supprimer tous les filtres de l'onglet Factures payées
function clearPaidFilters() {
  document.getElementById('filterPaidDateFrom').value = '';
  document.getElementById('filterPaidDateTo').value = '';
  document.getElementById('sortPaidBy').value = 'paid_date_desc';
  loadPaidInvoices();
}
/* ====== DOCUMENTS ====== */
async function loadDocClients(){
  const sel=docClientSelect; sel.innerHTML="";
  const { data: clients } = await supabase.from('clients').select('id,legal_name').order('legal_name',{ascending:true});
  const d=document.createElement('option'); d.value=""; d.textContent="— Sélectionner un client —"; sel.appendChild(d);
  (clients||[]).forEach(c=>{ const o=document.createElement('option'); o.value=c.id; o.textContent=c.legal_name; sel.appendChild(o); });
  sel.onchange=loadDocuments; loadDocuments();
}
async function loadDocuments(){
  const clientId=docClientSelect.value||"";
  const type=docTypeFilter.value||"";
  let q=supabase.from('documents').select('*, clients(legal_name)').order('uploaded_at',{ascending:false});
  if(clientId) q=q.eq('client_id', clientId);
  const { data } = await q;
  const tbody=document.querySelector('#docsTable tbody'); tbody.innerHTML="";
  (data||[]).filter(d=>!type || d.file_type===type).forEach(d=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${d.file_name}</td>
      <td>${d.file_type||""}</td>
      <td>${d.uploaded_at?new Date(d.uploaded_at).toLocaleDateString('fr-FR'):""}</td>
      <td>${(d.size_bytes||0)/1024|0} Ko</td>
      <td>${d.clients?.legal_name||""}</td>
      <td class="row">
        <button class="btn" onclick='previewDoc("${d.storage_path}")'>Aperçu</button>
        <button class="btn" onclick='downloadDoc("${d.storage_path}")'>Télécharger</button>
        <button class="btn" onclick='replaceDoc("${d.id}")'>Remplacer</button>
        <button class="btn danger-btn" onclick='deleteDoc("${d.id}","${d.storage_path}")'>Supprimer</button>
        <button class="btn" onclick='signedLink("${d.storage_path}")'>Lien temporaire</button>
      </td>`;
    tbody.appendChild(tr);
  });
}
function triggerUpload(){ if(!docClientSelect.value){ alert("Choisis un client."); return; } document.getElementById('docFileInput').click(); }
document.getElementById('docFileInput').addEventListener('change', async (e)=>{
  const clientId=docClientSelect.value; if(!clientId){ alert("Client requis."); return; }
  const files=[...e.target.files]; if(!files.length) return;
  for(const f of files){
    if(f.type!=="application/pdf"){ alert("PDF uniquement."); continue; }
    if(f.size>50*1024*1024){ alert("Max 50 Mo."); continue; }
    const path=`${clientId}/${Date.now()}-${f.name}`;
    const up = await supabase.storage.from('clients_docs').upload(path, f, { upsert:false });
    if(up.error){ alert(up.error.message); continue; }
    await supabase.from('documents').insert({ client_id:clientId, file_name:f.name, file_type:(docTypeFilter.value||'Autre'), storage_path:path, size_bytes:f.size });
  }
  e.target.value=""; loadDocuments();
});
function previewDoc(path){ const { data } = supabase.storage.from('clients_docs').getPublicUrl(path); window.open(data.publicUrl,'_blank'); }
function downloadDoc(path){ previewDoc(path); }
async function replaceDoc(docId){
  const nd=document.createElement('input'); nd.type='file'; nd.accept='application/pdf';
  nd.onchange=async ()=>{ const f=nd.files[0]; if(!f) return;
    const { data: d } = await supabase.from('documents').select('*').eq('id',docId).maybeSingle();
    if(!d){ alert("Document introuvable"); return; }
    const up = await supabase.storage.from('clients_docs').upload(d.storage_path, f, { upsert:true });
    if(up.error){ alert(up.error.message); return; }
    await supabase.from('documents').update({ file_name:f.name, size_bytes:f.size }).eq('id',docId);
    loadDocuments();
  };
  nd.click();
}
async function deleteDoc(id,path){
  if(!confirmDel("Supprimer ce fichier ?")) return;
  await supabase.from('documents').delete().eq('id', id);
  await supabase.storage.from('clients_docs').remove([path]);
  loadDocuments();
}
async function signedLink(path){
  const { data, error } = await supabase.storage.from('clients_docs').createSignedUrl(path, 60*60);
  if(error){ alert(error.message); return; }
  prompt("URL (valide 1h) :", data.signedUrl);
}
async function downloadZip(){ alert("Sélectionne tous les fichiers côté client puis ZIP — (ZIP serveur possible plus tard)."); }

/* ============== NAV SHORTCUTS ============== */
document.getElementById('btnNewClient').onclick=()=>{ 
  show('clients'); 
  window.openClientCreate?.();
};

document.getElementById('btnNewContract').onclick=()=>{ show('contracts'); document.getElementById('contractClientInput')?.focus(); };
window.addEventListener('error', (e)=>console.error('[GlobalError]', e.message, e.filename, e.lineno+':'+e.colno));
window.addEventListener('unhandledrejection', (e)=>console.error('[PromiseRejection]', e.reason));

/* ================ INIT ===================== */
show('dashboard'); 
loadSettings().then(refreshKPIs);
// Initialiser les actions des factures
setupInvoiceActions();
setupInvoicePageActions();


// ===== Drawer (mobile) + titre header =====
(function initV2UI(){
  const btnMenu = document.getElementById('btnMenu');
  const overlay = document.getElementById('drawerOverlay');

  function openDrawer(){ document.body.classList.add('drawer-open'); }
  function closeDrawer(){ document.body.classList.remove('drawer-open'); }

  btnMenu?.addEventListener('click', openDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Fermer le drawer après navigation (mobile)
  document.querySelectorAll('#nav .btn[data-view]').forEach(b=>{
    b.addEventListener('click', closeDrawer);
  });

  // Titre simple (choix A)
  const titleMap = {
    dashboard: "Tableau de bord",
    clients: "Clients",
    contracts: "Contrats",
    invoices: "Factures",
    payments: "Paiements",
    documents: "Documents",
    settings: "Mes infos"
  };

  // Wrap show() sans toucher à ta logique
  const _show = window.show;
  if (typeof _show === "function") {
    window.show = function(view){
      const el = document.getElementById('pageTitle');
      if(el) el.textContent = titleMap[view] || "DOMAPP";
      return _show(view);
    };
  }

  // Placeholder Mon Compte
  document.getElementById('btnMyAccount')?.addEventListener('click', ()=>{
    alert("Mon Compte (à implémenter)");
  });
})();

/* =========================
   SIDEBAR PRO (accordéon + actions)
========================= */
(function initProSidebar(){
  const sections = Array.from(document.querySelectorAll('#nav details.nav-section'));

  // 1 seul accordéon ouvert
  sections.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) sections.forEach(o => { if (o !== d) o.open = false; });
    });
  });

  // Actions des sous-liens
  document.getElementById('nav')?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;

    const act = btn.dataset.action;

    // NB: show(view) est déjà déclenché par ton listener sur data-view
    // Ici on ajoute juste l'action métier après navigation.
    setTimeout(() => {
      try {
        switch(act){
          // Clients
          case 'newClient':
           if (typeof window.openClientCreate === 'function') window.openClientCreate();
           else if (typeof newClient === 'function') newClient();
           break;
          case 'openIntermediaryModal':
            if (typeof openNewIntermediaryModal === 'function') openNewIntermediaryModal();
            break;
          case 'clientsActive':
           if (window.setClientsMode) setClientsMode('active');
           break;
          case 'clientsArchived':
           // On arrive sur la page clients, puis on met le mode archivés
           if (window.setClientsMode) setClientsMode('archived');
           break;

          // Contrats
          case 'contractsAll':
            if (document.getElementById('filterContractClient')) document.getElementById('filterContractClient').value = '';
            if (document.getElementById('filterContractStatus')) document.getElementById('filterContractStatus').value = '';
            if (typeof loadContracts === 'function') loadContracts();
            break;
          case 'newContract':
            if (typeof newContractFromPicker === 'function') newContractFromPicker();
            break;
          case 'contractsLess30':
            if (typeof filterContractsLess30 === 'function') filterContractsLess30();
            break;
          case 'contractsExpired':
            if (document.getElementById('filterContractStatus')) document.getElementById('filterContractStatus').value = 'Expiré';
            if (typeof loadContracts === 'function') loadContracts();
            break;
          case 'contractsResiliated':
            if (document.getElementById('filterContractStatus')) document.getElementById('filterContractStatus').value = 'Résilié';
            if (typeof loadContracts === 'function') loadContracts();
            break;

          // Facturation
          case 'journalAll':
            if (typeof openSalesJournalModal === 'function') openSalesJournalModal('all');
            break;
          case 'journalUnpaid':
            if (typeof openSalesJournalModal === 'function') openSalesJournalModal('unpaid');
            break;
          case 'journalPaid':
            if (typeof openSalesJournalModal === 'function') openSalesJournalModal('paid');
            break;

          // Documents
          case 'docsUpload':
            if (typeof triggerUpload === 'function') triggerUpload();
            break;
          case 'docsZip':
            if (typeof downloadZip === 'function') downloadZip();
            break;
        }
      } catch (err) {
        console.error('Sidebar action error:', act, err);
      }
    }, 0);
  });

  // Ouverture auto de la section selon la page (optionnel mais pro)
  const map = {
    clients: 'accClients',
    contracts: 'accContracts',
    invoices: 'accBilling',
    payments: 'accBilling',
    documents: 'accDocs',
    settings: 'accSettings'
  };

  const _show = window.show;
  if (typeof _show === 'function') {
    window.show = function(view){
      const res = _show(view);
      const id = map[view];
      if (id) {
        const toOpen = document.getElementById(id);
        if (toOpen && !toOpen.open) toOpen.open = true;
        sections.forEach(o => { if (o.id !== id) o.open = false; });
      } else {
        // dashboard -> fermer tout
        sections.forEach(o => o.open = false);
      }
      return res;
    };
  }
})();

/* =========================
   CLIENTS: Liste + Actions (Consulter) + Formulaire (sans modal)
========================= */

let consultClientId = null;

/* --- Helper écran --- */
function showConsultScreen(show){
  document.getElementById('clientListScreen')?.classList.toggle('hidden', show);
  document.getElementById('clientConsultScreen')?.classList.toggle('hidden', !show);
}

window.backToClientList = function(){
  consultClientId = null;
  showConsultScreen(false);
};

/* --- Remplir formulaire client (sans dépendre de clientTitle) --- */
function setVal(id, v){ const el=document.getElementById(id); if(el) el.value = v ?? ""; }

function fillClientForm(c){
  setVal('c_legal_name', c.legal_name);
  setVal('c_legal_form', c.legal_form);
  setVal('c_ice', c.ice);
  setVal('c_if', c.if);
  setVal('c_rc', c.rc);
  setVal('c_tp', c.tp);
  setVal('c_activity', c.activity);
  setVal('c_capital', c.capital);
  setVal('c_creation_date', c.creation_date);
  setVal('c_head_address', c.head_address);
  setVal('c_city', c.city);
  setVal('c_email', c.email);
  setVal('c_phone', c.phone);
  setVal('c_rib', c.rib);

  setVal('c_rep_name', c.rep_name);
  setVal('c_rep_quality', c.rep_quality);
  setVal('c_rep_birth_date', c.rep_birth_date);
  setVal('c_rep_birth_place', c.rep_birth_place);
  setVal('c_rep_cin', c.rep_cin);
  setVal('c_rep_phone', c.rep_phone);
  setVal('c_rep_address', c.rep_address);

  // intermédiaire (jointure)
  setVal('c_int_name', c.intermediaries?.name || "");
  setVal('c_int_phone', c.intermediaries?.phone || "");
}

function setClientEditable(enable){
  [
    'c_legal_name','c_legal_form','c_ice','c_if','c_rc','c_tp','c_activity','c_capital','c_creation_date',
    'c_head_address','c_city','c_email','c_phone','c_rib',
    'c_rep_name','c_rep_quality','c_rep_birth_date','c_rep_birth_place','c_rep_cin','c_rep_phone','c_rep_address',
    'c_int_name','c_int_phone'
  ].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.disabled = !enable;
  });
}

/* --- LOAD LISTE CLIENTS (avec Actions) --- */
window.loadClients = async function(){
  const searchEl = document.getElementById('clientSearch');
  const q = (searchEl ? searchEl.value : "").trim();

  const isArchivedMode = (window.clientsMode === 'archived');

  let query = supabase
    .from('clients')
    .select('id, legal_name, ice, archived')
    .eq('archived', isArchivedMode)
    .order('creation_date', { ascending: false });

  if(q) query = query.ilike('legal_name', `%${q}%`);

  const { data: clients, error } = await query;
  if(error){ console.error(error); alert("Erreur chargement clients"); return; }

  const tbody = document.querySelector('#clientsTable tbody');
  if(!tbody) return;
  tbody.innerHTML = "";

  if(!clients || clients.length===0){
    tbody.innerHTML = `<tr><td colspan="3" class="muted">Aucun client trouvé</td></tr>`;
    return;
  }

  clients.forEach(c=>{
    const tr=document.createElement('tr');
    const safeName = (c.legal_name || "").replace(/"/g, "&quot;");

    const menuHtml = isArchivedMode
      ? `
        <button class="act-item" data-action="consult" data-id="${c.id}">👁️ Consulter</button>
        <button class="act-item" data-action="restore" data-id="${c.id}">♻️ Restaurer</button>
        <button class="act-item danger" data-action="deleteForever" data-id="${c.id}" data-name="${safeName}">
          🗑️ Supprimer définitivement
        </button>
      `
      : `
        <button class="act-item" data-action="consult" data-id="${c.id}">👁️ Consulter</button>
        <button class="act-item" data-action="edit" data-id="${c.id}">✏️ Modifier</button>
        <button class="act-item warn" data-action="archive" data-id="${c.id}">🗃️ Archiver</button>
      `;

    tr.innerHTML = `
      <td>${c.legal_name || ""}</td>
      <td>${c.ice || ""}</td>
      <td class="actions-cell">
        <div class="dropdown">
          <button class="btn act-btn" data-id="${c.id}">Actions ▾</button>
          <div class="menu hidden">${menuHtml}</div>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
};


/* --- Dropdown Actions (Clients) --- */
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('#clientsTable .act-btn');
  if(btn){
    const menu = btn.nextElementSibling;
    const isHidden = menu.classList.contains('hidden');
    document.querySelectorAll('#clientsTable .menu').forEach(m=> m.classList.add('hidden'));
    if(isHidden) menu.classList.remove('hidden');
    e.stopPropagation();
    return;
  }

  const item = e.target.closest('#clientsTable .act-item');
  if(item){
    const id = item.dataset.id;
    const act = item.dataset.action;
    document.querySelectorAll('#clientsTable .menu').forEach(m=> m.classList.add('hidden'));

    if(act==='consult') openClientConsult(id, false);
    if(act==='edit')    openClientConsult(id, true);
    if(act==='archive') archiveClientById(id);
    if(act==='restore') restoreClientById(id);
    if(act==='deleteForever') deleteClientForeverById(id, item.dataset.name);
    e.stopPropagation();
    return;
  }

  if(!e.target.closest('#clientsTable .dropdown')){
    document.querySelectorAll('#clientsTable .menu').forEach(m=> m.classList.add('hidden'));
  }
});

/* --- Consulter (affiche formulaire + contrats + factures) --- */
async function openClientConsult(clientId, startEdit){
  consultClientId = clientId;

  const { data: c, error } = await supabase
    .from('clients')
    .select('*, intermediaries(id,name,phone,email)')
    .eq('id', clientId)
    .maybeSingle();

  if(error || !c){ alert("Client introuvable"); return; }

  currentClient = c; // réutilise saveClient()

  document.getElementById('consultTitle').textContent = `Consulter — ${c.legal_name || ''}`;
  document.getElementById('consultSubtitle').textContent = `ICE: ${c.ice || '—'}`;

  fillClientForm(c);
  setClientEditable(false);

  // boutons
  document.getElementById('btnConsultArchive').disabled = false;
  document.getElementById('btnConsultEdit').disabled = false;
  document.getElementById('btnConsultSave').disabled = true;

  showConsultScreen(true);
  setSelectedContractUI(null);
  await loadConsultContracts(clientId);
  await loadConsultInvoices(clientId);

  if(startEdit) editClientInline();
}
async function restoreClientById(clientId){
  if(!confirm("Restaurer ce client ?")) return;
  const { error } = await supabase.from('clients').update({ archived:false }).eq('id', clientId);
  if(error){ alert(error.message); return; }
  await loadClients();
  alert("✅ Client restauré.");
}
async function deleteClientForeverSafe(clientId, clientName = "") {
  try {
    // Charger le client complet (pour intermediary_id + legal_name fiable)
    const { data: client, error: cErr } = await supabase
      .from('clients')
      .select('*')
      .eq('id', clientId)
      .maybeSingle();

    if (cErr || !client) {
      alert("Client introuvable.");
      return;
    }

    // Vérifier les données liées
    const checks = await Promise.all([
      supabase.from('contracts').select('id').eq('client_id', clientId),
      supabase.from('invoices').select('id').eq('client_id', clientId),
      supabase.from('payments').select('id').eq('client_id', clientId),
      supabase.from('documents').select('id').eq('client_id', clientId)
    ]);

    const [contracts, invoices, payments, documents] = checks;

    const hasContracts = (contracts.data || []).length > 0;
    const hasInvoices  = (invoices.data || []).length > 0;
    const hasPayments  = (payments.data || []).length > 0;
    const hasDocuments = (documents.data || []).length > 0;

    if (hasContracts || hasInvoices || hasPayments || hasDocuments) {
      let msg = `🚨 IMPOSSIBLE DE SUPPRIMER CE CLIENT\n\n`;
      msg += `Client: ${client.legal_name || clientName || clientId}\n\n`;
      msg += `Des données sont encore associées à ce client :\n\n`;

      if (hasContracts) msg += `• ${(contracts.data || []).length} contrat(s)\n`;
      if (hasInvoices)  msg += `• ${(invoices.data || []).length} facture(s)\n`;
      if (hasPayments)  msg += `• ${(payments.data || []).length} paiement(s)\n`;
      if (hasDocuments) msg += `• ${(documents.data || []).length} document(s) PDF\n`;

      msg += `\nVous devez d'abord supprimer les éléments liés,\nou bien archiver le client.`;
      alert(msg);
      return;
    }

    // Confirmation finale
    if (!confirm(
      `🗑️ SUPPRESSION DÉFINITIVE\n\n` +
      `Client: ${client.legal_name || clientName || clientId}\n\n` +
      `Cette action est IRREVERSIBLE.\nContinuer ?`
    )) {
      return;
    }

    // Supprimer l'intermédiaire si plus aucun client ne l'utilise
    if (client.intermediary_id) {
      const { data: otherClients } = await supabase
        .from('clients')
        .select('id')
        .eq('intermediary_id', client.intermediary_id)
        .neq('id', clientId);

      if (!otherClients || otherClients.length === 0) {
        await supabase.from('intermediaries').delete().eq('id', client.intermediary_id);
      }
    }

    // Suppression client
    const { error } = await supabase.from('clients').delete().eq('id', clientId);
    if (error) {
      alert("Erreur lors de la suppression: " + error.message);
      return;
    }

    // Refresh UI
    await loadClients();
    alert("✅ Client supprimé définitivement.");

  } catch (err) {
    console.error("Erreur suppression safe:", err);
    alert("❌ Erreur lors de la vérification des données liées.");
  }
}

async function deleteClientForeverById(clientId, clientName=""){
  return deleteClientForeverSafe(clientId, clientName);
}

/* --- Contrats client --- */
async function loadConsultContracts(clientId){
  const tbody = document.querySelector('#consultContractsTable tbody');
  tbody.innerHTML = `<tr><td colspan="5" class="muted">Chargement...</td></tr>`;

  const { data, error } = await supabase
    .from('contracts')
    .select('id, number, start_date, end_date, status, annual_fee')
    .eq('client_id', clientId)
    .order('number', { ascending: false });

  if(error){
    tbody.innerHTML = `<tr><td colspan="5" class="muted">Erreur chargement contrats</td></tr>`;
    return;
  }

  document.getElementById('consultContractsHint').textContent = `${(data||[]).length} contrat(s)`;

  if(!data || data.length===0){
    tbody.innerHTML = `<tr><td colspan="5" class="muted">Aucun contrat</td></tr>`;
    return;
  }

  tbody.innerHTML = (data || []).map(r => `
  <tr data-contract-id="${r.id}">
    <td>${r.number || ""}</td>
    <td>${ddmmyyyy(r.start_date)}</td>
    <td>${ddmmyyyy(r.end_date)}</td>
    <td>${r.status || ""}</td>
    <td class="right">${fmtMoney(r.annual_fee)}</td>
  </tr>
`).join('');
// lignes cliquables + highlight sélection
tbody.querySelectorAll('tr[data-contract-id]').forEach(tr => {
  tr.addEventListener('click', () => {
    const id = tr.getAttribute('data-contract-id');
    const contract = (data || []).find(x => x.id === id);
    if (!contract) return;

    // highlight
    tbody.querySelectorAll('tr').forEach(x => x.classList.remove('row-selected'));
    tr.classList.add('row-selected');

    // ✅ set selection + enable buttons
    setSelectedContractUI(contract);
    loadConsultServices(contract.id);

    // ✅ (étape suivante) charger services du contrat
    // loadConsultServices(contract.id);
    });
});
}

/* --- Factures client --- */
async function loadConsultInvoices(clientId){
  const tbody = document.querySelector('#consultInvoicesTable tbody');
  tbody.innerHTML = `<tr><td colspan="4" class="muted">Chargement...</td></tr>`;

  const { data, error } = await supabase
    .from('invoices')
    .select('number,issue_date,amount_ttc,status')
    .eq('client_id', clientId)
    .order('number', { ascending: false });

  if(error){
    tbody.innerHTML = `<tr><td colspan="4" class="muted">Erreur chargement factures</td></tr>`;
    return;
  }

  document.getElementById('consultInvoicesHint').textContent = `${(data||[]).length} facture(s)`;

  if(!data || data.length===0){
    tbody.innerHTML = `<tr><td colspan="4" class="muted">Aucune facture</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map(r=>`
    <tr>
      <td>${r.number||""}</td>
      <td>${ddmmyyyy(r.issue_date)}</td>
      <td class="right">${fmtMoney(r.amount_ttc)}</td>
      <td>${r.status || "Impayé"}</td>
    </tr>
  `).join('');
}

/* --- Actions inline sur la fiche --- */
window.editClientInline = function(){
  if(!currentClient) return;
  setClientEditable(true);
  document.getElementById('btnConsultSave').disabled = false;
  document.getElementById('consultMsg').textContent = "Mode modification activé.";
};

window.saveClientInline = async function(){
  await saveClient();          // ta fonction existante
  setClientEditable(false);
  document.getElementById('btnConsultSave').disabled = true;
  document.getElementById('consultMsg').textContent = "Enregistré ✔";
  if(consultClientId) await openClientConsult(consultClientId, false);
};

window.archiveClientInline = async function(){
  if(!consultClientId) return;
  if(!confirm("Archiver ce client ?")) return;
  await supabase.from('clients').update({ archived:true }).eq('id', consultClientId);
  await loadClients();
  backToClientList();
  alert("Archivé.");
};

async function archiveClientById(clientId){
  if(!confirm("Archiver ce client ?")) return;
  const { error } = await supabase.from('clients').update({ archived:true }).eq('id', clientId);
  if(error){ alert(error.message); return; }
  await loadClients();
}

/* --- Nouveau client (simple : ouvre la fiche en mode création) --- */
window.openClientCreate = function(){
  consultClientId = null;
  currentClient = null;
  document.getElementById('consultTitle').textContent = "Nouveau client";
  document.getElementById('consultSubtitle').textContent = "—";

  // vider champs
  [
    'c_legal_name','c_legal_form','c_ice','c_if','c_rc','c_tp','c_activity','c_capital','c_creation_date',
    'c_head_address','c_city','c_email','c_phone','c_rib',
    'c_rep_name','c_rep_quality','c_rep_birth_date','c_rep_birth_place','c_rep_cin','c_rep_phone','c_rep_address',
    'c_int_name','c_int_phone'
  ].forEach(id => setVal(id, ""));

  // vider tables
  document.querySelector('#consultContractsTable tbody').innerHTML = `<tr><td colspan="5" class="muted">—</td></tr>`;
  document.querySelector('#consultInvoicesTable tbody').innerHTML = `<tr><td colspan="4" class="muted">—</td></tr>`;
  document.getElementById('consultContractsHint').textContent = "—";
  document.getElementById('consultInvoicesHint').textContent = "—";

  setClientEditable(true);
  document.getElementById('btnConsultArchive').disabled = true;
  document.getElementById('btnConsultEdit').disabled = true;
  document.getElementById('btnConsultSave').disabled = false;
  document.getElementById('consultMsg').textContent = "Saisis les infos puis Enregistrer.";

  showConsultScreen(true);
};

// Compat: ancien onclick dans HTML
window.openClientModalNew = function(){
  // s'assurer qu'on est sur la vue clients
  if (typeof show === "function") show("clients");
  // utiliser le nouveau flux (consult screen)
  if (typeof window.openClientCreate === "function") return window.openClientCreate();
  // fallback (ancien flux)
  if (typeof window.newClient === "function") return window.newClient();
};

window.openServiceModal = function(){
  if(!selectedContractId){
    alert("Sélectionne d’abord un contrat dans la liste.");
    return;
  }
  document.getElementById('serviceModal').style.display = 'flex';

  // (optionnel) afficher référence contrat dans le modal
  const ref = document.getElementById('svc_contract_ref');
  if(ref) ref.value = selectedContractNumber || '';
};



function closeServiceModal() {
  document.getElementById('serviceModal').style.display = 'none';

  document.getElementById('svc_code').value = '';
  document.getElementById('svc_periodicity').value = '';
  document.getElementById('svc_name').value = '';
  document.getElementById('svc_description').value = '';
  document.getElementById('svc_price_ttc').value = '';
  document.getElementById('svc_tva_rate').value = '0.20';
  document.getElementById('svc_start_date').value = '';
  document.getElementById('svc_end_date').value = '';
  document.getElementById('svc_is_active').checked = true;
}
function closeServiceInvoiceModal() {
  document.getElementById('serviceInvoiceModal').style.display = 'none';

  document.getElementById('sinv_service_select').value = '';
  document.getElementById('sinv_period_start').value = '';
  document.getElementById('sinv_period_end').value = '';
  document.getElementById('sinv_amount_ttc').value = '';
  document.getElementById('sinv_tva_rate').value = '0.20';
  document.getElementById('sinv_label').value = '';
}
async function loadConsultServices(contractId){
  const hint = document.getElementById('consultServicesHint');
  const tbody = document.querySelector('#consultServicesTable tbody');
  if(!tbody) return;

  tbody.innerHTML = `<tr><td colspan="6" class="muted">Chargement...</td></tr>`;

  const { data, error } = await supabase
    .from('contract_services')
    .select('id, code, name, periodicity, start_date, end_date, unit_price_ttc, is_active')
    .eq('contract_id', contractId)
    .order('start_date', { ascending: false });

  if(error){
    console.error(error);
    tbody.innerHTML = `<tr><td colspan="6" class="muted">Erreur chargement services</td></tr>`;
    if(hint) hint.textContent = "Erreur chargement services";
    return;
  }

  if(hint) hint.textContent = `${(data||[]).length} service(s) — Contrat ${selectedContractNumber||''}`;

  if(!data || data.length===0){
    tbody.innerHTML = `<tr><td colspan="6" class="muted">Aucun service</td></tr>`;
    return;
  }

  const frPeriod = (p)=>{
    const map = {one_time:'Ponctuel', daily:'Journalier', weekly:'Hebdo', monthly:'Mensuel', yearly:'Annuel'};
    return map[p] || p || '';
  };

  tbody.innerHTML = data.map(s => `
    <tr>
      <td>${s.name || s.code || ''}</td>
      <td>${frPeriod(s.periodicity)}</td>
      <td>${ddmmyyyy(s.start_date)}</td>
      <td>${ddmmyyyy(s.end_date)}</td>
      <td class="right">${fmtMoney(s.unit_price_ttc)}</td>
      <td>${s.is_active ? 'Actif' : 'Inactif'}</td>
    </tr>
  `).join('');
}
async function saveService(){
  if(!selectedContractId){
    alert("Sélectionne d’abord un contrat.");
    return;
  }
  if(!consultClientId){
    alert("Client non détecté.");
    return;
  }

  const code = document.getElementById('svc_code')?.value?.trim();
  const periodicity = document.getElementById('svc_periodicity')?.value?.trim();
  const name = document.getElementById('svc_name')?.value?.trim();
  const description = document.getElementById('svc_description')?.value?.trim() || null;

  const unit_price_ttc = parseFloat(document.getElementById('svc_price_ttc')?.value || '0') || 0;
  const tva_rate = parseFloat(document.getElementById('svc_tva_rate')?.value || '0.20');
  const start_date = document.getElementById('svc_start_date')?.value;
  const end_date = document.getElementById('svc_end_date')?.value || null;
  const is_active = !!document.getElementById('svc_is_active')?.checked;

  const msg = document.getElementById('svc_msg');

  // validations simples
  if(!code){ if(msg) msg.textContent="Type de service requis."; else alert("Type de service requis."); return; }
  if(!periodicity){ if(msg) msg.textContent="Périodicité requise."; else alert("Périodicité requise."); return; }
  if(!name){ if(msg) msg.textContent="Nom du service requis."; else alert("Nom du service requis."); return; }
  if(!start_date){ if(msg) msg.textContent="Date début requise."; else alert("Date début requise."); return; }
  if(unit_price_ttc <= 0){ if(msg) msg.textContent="Tarif TTC doit être > 0."; else alert("Tarif TTC doit être > 0."); return; }
  if(end_date && end_date < start_date){ if(msg) msg.textContent="Date fin doit être ≥ date début."; else alert("Date fin invalide."); return; }

  if(msg) msg.textContent = "Enregistrement..." ;

  const row = {
    contract_id: selectedContractId,
    client_id: consultClientId,
    code,
    name,
    description,
    periodicity,
    unit_price_ttc,
    tva_rate,
    start_date,
    end_date,
    is_active
  };

  const { error } = await supabase.from('contract_services').insert(row);

  if(error){
    console.error(error);
    if(msg) msg.textContent = "Erreur: " + error.message;
    else alert("Erreur: " + error.message);
    return;
  }

  if(msg) msg.textContent = "✅ Service ajouté";
  closeServiceModal();

  // refresh liste services
  await loadConsultServices(selectedContractId);
}

async function loadServicesForInvoicePicker(contractId){
  const sel = document.getElementById('sinv_service_select');
  const msg = document.getElementById('sinv_msg');
  if(!sel) return;

  sel.innerHTML = `<option value="">— Choisir un service —</option>`;

  if(!contractId){
    if(msg) msg.textContent = "⚠️ Aucun contrat sélectionné.";
    console.warn("[loadServicesForInvoicePicker] contractId vide");
    return;
  }

  console.log("[loadServicesForInvoicePicker] contractId =", contractId);

  const { data, error } = await supabase
    .from('contract_services')
    .select('id, code, name, periodicity, unit_price_ttc, tva_rate, start_date, end_date, is_active')
    .eq('contract_id', contractId)
    .eq('is_active', true)
    .order('start_date', { ascending: false });

  if(error){
    console.error("[loadServicesForInvoicePicker] error:", error);
    if(msg) msg.textContent = "❌ Erreur chargement services: " + error.message;
    return;
  }

  console.log("[loadServicesForInvoicePicker] services =", data);

  if(!data || data.length === 0){
    if(msg) msg.textContent = "ℹ️ Aucun service actif pour ce contrat. Ajoute d’abord un service.";
    return;
  }

  if(msg) msg.textContent = `${data.length} service(s) disponible(s).`;

  data.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name || s.code} — ${s.periodicity || ''} — ${fmtMoney(s.unit_price_ttc)} DH`;

    opt.dataset.name = s.name || s.code || '';
    opt.dataset.price = s.unit_price_ttc ?? '';
    opt.dataset.tva = s.tva_rate ?? '0.20';

    sel.appendChild(opt);
  });
}

window.openServiceInvoiceModal = async function(){
  const msg = document.getElementById('sinv_msg');

  if(!selectedContractId){
    alert("Sélectionne d’abord un contrat dans la liste.");
    return;
  }

  document.getElementById('serviceInvoiceModal').style.display = 'flex';

  const ref = document.getElementById('sinv_contract_ref');
  if(ref) ref.value = selectedContractNumber || '';

  if(msg) msg.textContent = "Chargement des services...";
  document.getElementById('sinv_amount_ttc').value = '';
  document.getElementById('sinv_label').value = '';

  await loadServicesForInvoicePicker(selectedContractId);
};



async function createServiceInvoice(){
  if(!selectedContractId){
    alert("Sélectionne d’abord un contrat.");
    return;
  }
  if(!consultClientId){
    alert("Client non détecté.");
    return;
  }

  const serviceId = document.getElementById('sinv_service_select').value;
  const period_start = document.getElementById('sinv_period_start').value;
  const period_end = document.getElementById('sinv_period_end').value;

  const amount_ttc = parseFloat(document.getElementById('sinv_amount_ttc').value || '0') || 0;
  const tva_rate = parseFloat(document.getElementById('sinv_tva_rate').value || '0.20');

  const label = (document.getElementById('sinv_label').value || '').trim() || 'Service';
  const msg = document.getElementById('sinv_msg');

  if(!serviceId){ if(msg) msg.textContent="Service requis."; else alert("Service requis."); return; }
  if(!period_start || !period_end){ if(msg) msg.textContent="Période requise."; else alert("Période requise."); return; }
  if(period_end < period_start){ if(msg) msg.textContent="Date fin doit être ≥ date début."; else alert("Dates invalides."); return; }
  if(amount_ttc <= 0){ if(msg) msg.textContent="Montant TTC doit être > 0."; else alert("Montant invalide."); return; }

  if(msg) msg.textContent = "Génération..." ;

  // calcul HT depuis TTC (comme tu fais déjà)
  const amount_ht = amount_ttc / (1 + (tva_rate || 0));
  const today = new Date().toISOString().slice(0,10);

  // numéro de facture (tu as déjà nextNumber())
  const number = await nextNumber('invoices', 'F', period_start);

  // 1) Insert facture (table existante)
  const invRow = {
    number,
    contract_id: selectedContractId,
    client_id: consultClientId,
    issue_date: today,
    period_start,
    period_end,
    amount_ht: +amount_ht.toFixed(2),
    tva_rate: tva_rate,
    amount_ttc: +amount_ttc.toFixed(2),
    status: 'Impayé'
  };

  const { data: inv, error: invErr } = await supabase
    .from('invoices')
    .insert(invRow)
    .select()
    .single();

  if(invErr){
    console.error(invErr);
    if(msg) msg.textContent = "Erreur: " + invErr.message;
    else alert(invErr.message);
    return;
  }

  // 2) Insert ligne de facture (nouvelle table invoice_items)
  const itemRow = {
    invoice_id: inv.id,
    service_id: serviceId,
    label: label,
    qty: 1,
    unit_price_ttc: +amount_ttc.toFixed(2),
    tva_rate: tva_rate,
    amount_ht: +amount_ht.toFixed(2),
    amount_ttc: +amount_ttc.toFixed(2)
  };

  const { error: itemErr } = await supabase.from('invoice_items').insert(itemRow);
  if(itemErr){
    console.error(itemErr);
    // on ne supprime pas la facture automatiquement, mais on informe
    alert("Facture créée, mais erreur ligne facture: " + itemErr.message);
  }

  if(msg) msg.textContent = "✅ Facture créée";
  closeServiceInvoiceModal();

  // refresh UI
  if(typeof loadConsultInvoices === 'function') await loadConsultInvoices(consultClientId);
  if(typeof loadInvoices === 'function') await loadInvoices();
  if(typeof refreshKPIs === 'function') await refreshKPIs();
}
(function initServiceInvoicePicker(){
  const sel = document.getElementById('sinv_service_select');
  if(!sel) return;

  sel.addEventListener('change', (e) => {
    const opt = e.target.selectedOptions?.[0];
    if(!opt || !opt.value) return;

    document.getElementById('sinv_amount_ttc').value = opt.dataset.price || '';
    document.getElementById('sinv_tva_rate').value = String(opt.dataset.tva || '0.20');

    const labelEl = document.getElementById('sinv_label');
    if(labelEl && !labelEl.value){
      labelEl.value = opt.dataset.name || 'Service';
    }
  });
})();
