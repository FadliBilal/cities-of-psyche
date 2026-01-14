/**
 * CITIES OF PSYCHE - FINAL POLISHED
 */

// --- CONFIG ---
const charAssets = ['char.jpg', 'map.png', 'map.png', 'map.png'];
const fallbackImg = "https://cdn-icons-png.flaticon.com/512/847/847969.png"; 

// --- DATA ---
const cards = {
    funny: [
        "Tantangan! Ajak orang asing berkenalan & foto bareng!",
        "Tunjukkan gerakan paling aneh selama 15 detik!",
        "Nyanyi 'Abang Tukang Bakso' ganti vokal jadi 'E'!",
        "Sambung kata: Huruf belakang jadi huruf depan kata baru.",
        "Cerita memalukan & minta teman kasih judul filmnya!",
        "Ucapkan 'Ha’ah lah' (Atok Dalang) ekspresi: 😩😡🤠😭",
        "Sampaikan perasaanmu dengan nada lagu anak-anak!",
        "Kalau jadi sandal, mau jadi sandal apa & kenapa?",
        "Debat palsu: 'Bubur diaduk vs tidak'!",
        "Suara binatang untuk menggambarkan suasana hati."
    ],
    sharing: [
        "Review buku kesukaan & ceritakan alurnya.",
        "Genre musik favorit & alasannya.",
        "Satu kekuatan super yang diinginkan & kegunaannya?",
        "Tokoh yang dikagumi & alasannya.",
        "Apa yang dilakukan jika tersesat di hutan?",
        "Satu emosi yang ingin dihapus dari dunia?",
        "Kebiasaan aneh yang sering tidak disadari.",
        "Ingin reinkarnasi jadi apa?",
        "Time travel: Masa lalu atau masa depan?",
        "Skill instan yang ingin dipelajari."
    ],
    deeptalk: [
        "Pernah merasa dekat tapi tetap kesepian?",
        "Rasanya jadi orang yang mengerti tapi tak dimengerti?",
        "Seberapa sering takut jujur karena takut ditinggal?",
        "Momen ingin didengar tanpa butuh solusi.",
        "Cara menutupi kecewa biar gak ngerepotin orang.",
        "Isi kepala saat ingin berhenti overthinking.",
        "Merasa sepi di tengah keramaian teman?",
        "Tentang teman dekat yang kini jadi asing.",
        "Perasaan saat selalu ada, tapi mereka tiada saat butuh.",
        "Pesan untuk versi kecil dirimu (5 menit)."
    ],
    motivation: [
        "“Kamu jangan merasa sendirian. Banyak orang yang juga sedang belajar cara memahami dan dipahami”",
        "“Kalau orang lain tidak mengerti tentang perasaanmu, bukan berarti perasaanmu salah”",
        "“Setiap langkah kecil yang kamu ambil adalah langkah menuju perubahan besar”",
        "“Kamu tidak harus sempurna untuk layak dicintai dan diterima”",
        "“Bicara jujur soal perasaanmu itu bukan lemah, namun itu sebuah keberanian”",
        "“Setiap orang punya caranya masing-masing untuk dekat dengan orang lain, KAMU JUGA”",
        "“Kamu bisa bilang ‘tidak’ tanpa merasa jahat”",
        "“Hubungan yang sehat tidak mebuatmu takut terus”",
        "“Kamu tetap layak dicintai, bahkan saat sedang merasa kacau”",
        "“Kamu bisa mulai dari satu hal kecil seperti jujur sama dirimu sendiri hari ini”"
    ]
};

const tileTypes = {
    funny: [5, 7, 11, 14, 19, 21, 24, 27, 29, 36, 39, 43, 50, 53, 56, 58, '32_alt'],
    sharing: [6, 13, 25, 48],
    deeptalk: [8, 18, 32, 37, 41, 49, 55, '30_alt'],
    motivation: [10, 17, 22, 30, 35, 44, 52, 57, '31_alt'],
    jail: [15, 20, 31, 38, 42, 54],
    bonus: [9, 33, 46, 51],
    freewill: [28]
};

const coordinates = {
    0: { top: '11.6%', left: '2%' }, 
    1: { top: '11.6%', left: '7.2%' }, 2: { top: '11.6%', left: '15.2%' }, 3: { top: '11.7%', left: '24.3%' }, 4: { top: '11.9%', left: '31.7%' },
    5: { top: '18.3%', left: '31.7%' }, 6: { top: '25.2%', left: '32.4%' }, 7: { top: '25.1%', left: '40.4%' }, 8: { top: '25.4%', left: '47.6%' },
    9: { top: '18.4%', left: '48.0%' }, 10: { top: '11.1%', left: '48.7%' }, 11: { top: '11.7%', left: '56.3%' }, 12: { top: '11.6%', left: '64.6%' },
    13: { top: '11.6%', left: '72.6%' }, 14: { top: '11.4%', left: '80.5%' }, 15: { top: '11.4%', left: '88.4%' }, 
    16: { top: '19.0%', left: '88.1%' }, 17: { top: '24.9%', left: '88.1%' }, 18: { top: '32.6%', left: '88.4%' }, 19: { top: '38.4%', left: '88.4%' }, 20: { top: '45.1%', left: '88.4%' },
    21: { top: '44.6%', left: '79.5%' }, 22: { top: '44.6%', left: '72.9%' }, 23: { top: '45.5%', left: '64.0%' }, 24: { top: '45.5%', left: '55.5%' }, 25: { top: '45.5%', left: '47.3%' },
    26: { top: '39.2%', left: '48.3%' }, 27: { top: '38.9%', left: '39.5%' }, 
    28: { top: '38.7%', left: '31.7%' }, 
    29: { top: '38.5%', left: '24.0%' }, 30: { top: '38.5%', left: '16.1%' }, 31: { top: '38.5%', left: '8.0%' }, 32: { top: '45.1%', left: '8.1%' },
    '29_alt': { top: '44.5%', left: '31.6%' }, '30_alt': { top: '52.2%', left: '31.3%' }, '31_alt': { top: '51.4%', left: '23.1%' }, '32_alt': { top: '52.9%', left: '15.5%' },
    33: { top: '51.7%', left: '7.4%' }, 34: { top: '58.7%', left: '7.1%' }, 35: { top: '64.9%', left: '6.6%' }, 36: { top: '71.9%', left: '7.1%' },
    37: { top: '78.1%', left: '6.8%' }, 38: { top: '84.0%', left: '7.1%' }, 39: { top: '84.9%', left: '15.1%' }, 40: { top: '84.4%', left: '21.9%' },
    41: { top: '84.9%', left: '30.5%' }, 42: { top: '79.3%', left: '30.2%' }, 43: { top: '71.7%', left: '31.0%' }, 44: { top: '65.7%', left: '31.0%' },
    45: { top: '64.8%', left: '39.3%' }, 46: { top: '65.1%', left: '46.9%' }, 47: { top: '58.4%', left: '46.3%' }, 48: { top: '58.2%', left: '54.9%' },
    49: { top: '59.0%', left: '62.2%' }, 50: { top: '65.1%', left: '62.2%' }, 51: { top: '72.2%', left: '62.8%' }, 52: { top: '79.0%', left: '62.8%' },
    53: { top: '85.4%', left: '62.5%' }, 54: { top: '85.4%', left: '70.7%' }, 55: { top: '85.5%', left: '78.9%' }, 56: { top: '86.1%', left: '86.7%' },
    57: { top: '78.5%', left: '86.7%' }, 58: { top: '72.3%', left: '87.2%' }, 59: { top: '65.4%', left: '86.6%' }, 60: { top: '65.4%', left: '95.2%' }
};

// --- LOGIC ---
const state = { players: [], turn: 0, processing: false, forcedDice: null, wheelRot: 0 };

const game = {
    init: () => {
        state.players = [];
        state.forcedDice = null;
        for(let i=1; i<=setup.count; i++) {
            const name = document.getElementById(`p${i}-name`).value || `Player ${i}`;
            const charInput = document.querySelector(`input[name="char_p${i}"]:checked`);
            const avatar = charInput ? charInput.value : fallbackImg;
            state.players.push({ id: i, name: name, avatar: avatar, pos: 0, isJailed: false });
        }
        game.initWheel();
        game.renderBoard();
        ui.switchScreen('screen-game');
        game.updateUI();
    },

    initWheel: () => {
        const wheel = document.getElementById('spinner-wheel');
        const colors = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7', '#a29bfe', '#fab1a0'];
        let grad = 'conic-gradient(';
        for(let i=0; i<12; i++) grad += `${colors[i%6]} ${i*30}deg ${(i+1)*30}deg,`;
        wheel.style.background = grad.slice(0, -1) + ')';
        
        wheel.innerHTML = '';
        for(let i=1; i<=12; i++) {
            const span = document.createElement('span');
            span.innerText = i;
            span.style.position = 'absolute';
            span.style.color = 'white'; span.style.fontWeight = 'bold'; span.style.fontFamily='Fredoka One';
            const angle = (i-1)*30 + 15;
            const rad = (angle - 90) * (Math.PI/180);
            const r = 50; 
            span.style.left = `${70 + r * Math.cos(rad) - 5}px`;
            span.style.top = `${70 + r * Math.sin(rad) - 10}px`;
            wheel.appendChild(span);
        }
    },

    renderBoard: () => {
        const layer = document.getElementById('pawn-layer');
        layer.innerHTML = '';
        state.players.forEach(p => {
            const div = document.createElement('div');
            div.id = `pawn-${p.id}`;
            div.className = 'pawn';
            div.style.backgroundImage = `url('${p.avatar}')`;
            div.onerror = function() { this.style.background = 'white'; };
            layer.appendChild(div);
            game.moveVisual(p, 0);
        });
    },

    spin: () => {
        if(state.processing) return;
        state.processing = true;
        const btn = document.getElementById('btn-spin');
        btn.disabled = true;

        let result = state.forcedDice ? state.forcedDice : Math.floor(Math.random()*12)+1;
        state.forcedDice = null;

        // Calc Rotation (Target is top 0deg, but pointer is top)
        // Wheel numbers start 1 at 0-30deg. Center of 1 is 15deg.
        const segmentCenter = (result - 1) * 30 + 15;
        const targetRot = 360 - segmentCenter; 
        const extra = 360 * 5;
        const currentMod = state.wheelRot % 360;
        const diff = 360 - currentMod;
        
        state.wheelRot += diff + extra + targetRot;
        
        document.getElementById('spinner-wheel').style.transform = `rotate(${state.wheelRot}deg)`;

        setTimeout(() => {
            game.processMove(result);
            btn.disabled = false;
        }, 4000);
    },

    processMove: (dice) => {
        const p = state.players[state.turn];
        if(p.isJailed) {
            if(dice === 12) {
                ui.showModal('INFO', 'Hore! Bebas Penjara!', '#2d3436');
                p.isJailed = false;
                game.startWalking(p, dice);
            } else {
                ui.showModal('JAIL', 'Masih di Penjara (Butuh 12)', '#2d3436');
                game.nextTurn();
            }
            return;
        }
        game.startWalking(p, dice);
    },

    startWalking: (p, steps) => {
        let stepsLeft = steps;
        const int = setInterval(() => {
            if(stepsLeft > 0) {
                p.pos = game.calculateNextStep(p.pos);
                game.moveVisual(p, p.pos);
                game.updateUI();
                if(p.pos === 60) {
                    clearInterval(int);
                    game.handleWin(p);
                    return;
                }
                stepsLeft--;
            } else {
                clearInterval(int);
                setTimeout(() => game.checkTile(p), 400);
            }
        }, 400);
    },

    calculateNextStep: (curr) => {
        if(curr === 60) return 60;
        if(typeof curr === 'number') return curr + 1;
        if(typeof curr === 'string') {
            const n = parseInt(curr);
            return n < 32 ? `${n+1}_alt` : 33;
        }
    },

    moveVisual: (p, pos) => {
        const el = document.getElementById(`pawn-${p.id}`);
        const c = coordinates[pos] || {top:'0', left:'0'};
        const off = (p.id-1)*4;
        el.style.top = c.top; el.style.left = c.left;
        el.style.transform = `translate(calc(-50% + ${off}px), calc(-50% + ${off}px))`;
    },

    checkTile: (p) => {
        const posStr = p.pos;
        const posNum = parseInt(p.pos);

        if(posNum === 28) {
            document.getElementById('freewill-modal').classList.remove('hidden');
            return;
        }

        if(tileTypes.jail.includes(posStr)) {
            p.isJailed = true; ui.showModal('JAIL', 'Masuk Penjara!', '#2d3436');
        } else if(tileTypes.bonus.includes(posStr)) {
            ui.showModal('BONUS', 'Bonus Spin!', '#e84393'); state.processing = false; return;
        } else if(tileTypes.funny.includes(posStr)) game.drawCard('funny');
        else if(tileTypes.sharing.includes(posStr)) game.drawCard('sharing');
        else if(tileTypes.deeptalk.includes(posStr)) game.drawCard('deeptalk');
        else if(tileTypes.motivation.includes(posStr)) game.drawCard('motivation');
        else {
            game.nextTurn(); return;
        }
        game.nextTurn();
    },

    drawCard: (t) => {
        const deck = cards[t];
        const txt = deck[Math.floor(Math.random()*deck.length)];
        const cfg = {
            funny: {t:"FUNNY MOMENTS", c:"#fdcb6e"},
            sharing: {t:"SHARING SESSION", c:"#e17055"},
            deeptalk: {t:"DEEP TALK", c:"#00b894"},
            motivation: {t:"MOTIVATION", c:"#74b9ff"}
        };
        ui.showModal(cfg[t].t, txt, cfg[t].c);
    },

    choosePath: (c) => {
        document.getElementById('freewill-modal').classList.add('hidden');
        const p = state.players[state.turn];
        if(c === 'bawah') { p.pos = '29_alt'; game.moveVisual(p, '29_alt'); }
        else { p.pos = 29; game.moveVisual(p, 29); }
        game.nextTurn();
    },

    handleWin: (p) => {
        document.getElementById('winner-name').innerText = p.name;
        document.getElementById('winner-avatar').src = p.avatar;
        ui.switchScreen('screen-winner');
    },

    nextTurn: () => {
        state.turn = (state.turn + 1) % state.players.length;
        state.processing = false;
        game.updateUI();
    },

    updateUI: () => {
        const list = document.getElementById('player-list');
        list.innerHTML = '';
        state.players.forEach((p, i) => {
            const isActive = i === state.turn ? 'active' : '';
            const pos = parseInt(p.pos);
            list.innerHTML += `
                <div class="player-card ${isActive}">
                    <img src="${p.avatar}" class="p-avatar-small" onerror="this.src='${fallbackImg}'">
                    <div class="p-info">
                        <span>${p.name}</span>
                        <span>Pos: ${pos}</span>
                    </div>
                </div>`;
        });
        document.getElementById('active-player-name').innerText = state.players[state.turn].name;
    }
};

const setup = {
    count: 2,
    render: () => {
        const c = document.getElementById('player-inputs'); c.innerHTML = '';
        document.getElementById('player-count-display').innerText = `${setup.count} Pemain`;
        for(let i=1; i<=setup.count; i++) {
            let opts = '';
            charAssets.forEach((img, idx) => {
                const chk = idx===0 ? 'checked' : '';
                const cls = idx===0 ? 'selected' : '';
                opts += `<label><input type="radio" name="char_p${i}" value="${img}" class="hidden" ${chk} onchange="setup.sel(this)"><img src="${img}" class="char-opt ${cls}" onerror="this.style.display='none'"></label>`;
            });
            c.innerHTML += `
                <div class="input-row">
                    <input id="p${i}-name" placeholder="Nama Pemain ${i}">
                    <div class="char-options">${opts}</div>
                </div>`;
        }
    },
    sel: (el) => {
        el.closest('.char-options').querySelectorAll('img').forEach(i=>i.classList.remove('selected'));
        el.nextElementSibling.classList.add('selected');
    },
    addPlayer: () => { if(setup.count<4){setup.count++; setup.render();} },
    removePlayer: () => { if(setup.count>2){setup.count--; setup.render();} }
};

const ui = {
    switchScreen: (id) => {
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
        if(id === 'screen-setup') setup.render();
    },
    showModal: (t, m, c='#6c5ce7') => {
        const o = document.getElementById('modal-overlay');
        o.classList.remove('hidden');
        document.getElementById('modal-header').innerText = t;
        document.getElementById('modal-header').style.background = c;
        if(t==='panduan'){
            document.getElementById('modal-body').innerHTML = `<ul style='text-align:left; font-size:0.9rem'><li>Pilih Karakter.</li><li>Putar Roda.</li><li>Ikuti Kartu Warna.</li><li>Kotak 28 = Pilih Jalur.</li><li>Finish 60 = Menang.</li></ul>`;
        } else {
            document.getElementById('modal-body').innerText = m;
        }
    },
    closeModal: () => document.getElementById('modal-overlay').classList.add('hidden')
};

function resize() {
    const s = Math.min(window.innerWidth/1280, window.innerHeight/720);
    document.getElementById('game-stage').style.transform = `scale(${s})`;
}
window.onresize = resize; resize();
ui.switchScreen('screen-intro');