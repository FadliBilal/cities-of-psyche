/**
 * CITIES OF PSYCHE - FINAL VERSION
 */

// --- 1. DATABASE KARTU ---
const cards = {
    funny: [
        "Tantangan untuk kamu! Ajaklah orang asing untuk berkenalan dengan kamu dan berfotolah dengan dia!",
        "Tunjukkanlah gerakan paling aneh yang bisa kamu lakukan selama 15 detik!",
        "Nyanyikan lagu “Abang Tukang Bakso” dengan mengganti huruf vokalnya dengan huruf “E”.",
        "Sambung kata cth: 'G' Gajah untuk melanjutkan ambil kata belakangnya gaja'H' Harus, lanjutkan sampai tidak bisa disambung lagi",
        "Ceritakanlah pengalaman memalukan yang pernah kalian alami dan suruhlah anggota kelompok untuk memberikan judul film untuk ceritamu!",
        "Ucapkanlah kalimat berikut ini “Ha’ah lah (Atok Dalang dari Upin Ipin) dengan ekspresi berikut : 😩😡🤠😭",
        "Sampaikanlah prasaan mu saat ini dengan nada lagu anak-anak!",
        "Kalau kamu jadi sandal kamu mau jadi sandal tipe apa dan kenapa alasannya?",
        "Buatlah perdebatan palsu “Tim Bubur diaduk atau tidak.” atau “Mana yang keluar lebih dulu? Telur atau Ayam.”",
        "Sampaikan suasana hatimu saat ini dengan menggunakan suara binatang."
    ],
    sharing: [
        "Berbagi penglaman tentang buku kesukaan dan ceritakanlah alur cerita dari buku tersebut.",
        "Sebutkanlah genre musik favoritmu dan ceritakan kenapa kamu menyukai genre musik tersebut.",
        "Jika kamu bisa memilih satu kekuatan super yang bisa kamu miliki seumur hidup, kekuatan apa yang akan kamu pilih, dan bagaimana kamu akan menggunakannya untuk dirimu sendiri dan orang lain?",
        "Siapa tokoh (nyata atau fiksi) yang kamu kagumi, dan apa yang membuatmu kagum padanya?",
        "Jika kamu tersesat di sebuah hutan, apa yang akan kamu lakukan?",
        "Kalau kamu bisa menghapus satu emosi dari dunia (misalnya: marah, takut, iri), rasa apa yang akan kamu pilih dan mengapa?",
        "Sebutkanlah salah satu kebiasaan aneh yang kamu lakukan tapi kamu tidak menyadari hal tersebut.",
        "Jika bisa berainkarnasi, kamu ingin berainkarnasi menjadi apa?",
        "Jika kamu bisa melakukan perjalanan waktu, kamu ingin pergi ke masa depan atau masa lalu? Berikan juga alasannya!",
        "Bayangkan kamu bisa mempelajari hal baru secara instan, apa yang akan kamu pilih dan kenapa hal itu penting untuk kamu?"
    ],
    deeptalk: [
        "Ceritakan apakah kamu pernah merasa dekat dengan orang lain, namun tetap aja merasa sendirian",
        "Ceritakan bagimana rasanya jadi orang yang selalu mengerti orang lain, tapi jarang dimengerti",
        "Ceritakan seberapa sering kamu takut jujur karena khawatir orang akan menjauh",
        "Ceritakan momen ketika kamu hanya ingin didengarkan tanpa harus mendapatkan solusi",
        "Ceritakan bagimana kamu menutupi rasa kecewa supaya tidak merepotkan orang lain",
        "Ceritakan apa yang ada di kepalamu saat kamu ingin berhenti overthinking",
        "Ceritakan apakah kamu pernah merasa kesepian padahal lagi dikelilingi teman",
        "Ceritakan tentang teman yang dulu paling dekat, tapi sekarang jadi asing banget",
        "Ceritakan perasaanmu ketika kamu selalu ada, namun waktu kamu butuh, mereka tidak ada",
        "Jika kamu punya waktu 5 menit untuk berbicara dengan versi dirimu saat kecil, apa yang akan kamu katakan padanya?"
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

// --- 2. TILE TYPES (FINAL) ---
const tileTypes = {
    // Kiri: 29, Bawah: 32_alt
    funny: [5, 7, 11, 14, 19, 21, 24, 27, 29, 36, 39, 43, 50, 53, 56, 58, '32_alt'],
    sharing: [6, 13, 25, 48],
    // Kiri: 32, Bawah: 30_alt
    deeptalk: [8, 18, 32, 37, 41, 49, 55, '30_alt'],
    // Kiri: 30, Bawah: 31_alt
    motivation: [10, 17, 22, 30, 35, 44, 52, 57, '31_alt'],
    // Kiri: 31 is Jail
    jail: [15, 20, 31, 38, 42, 54],
    bonus: [9, 33, 46, 51],
    freewill: [28]
};

// --- 3. COORDINATES (FINAL) ---
const coordinates = {
    0: { top: '11.6%', left: '-2%' }, 
    1: { top: '11.6%', left: '7.2%' }, 2: { top: '11.6%', left: '15.2%' }, 3: { top: '11.7%', left: '24.3%' }, 4: { top: '11.9%', left: '31.7%' },
    5: { top: '18.3%', left: '31.7%' }, 6: { top: '25.2%', left: '32.4%' }, 7: { top: '25.1%', left: '40.4%' }, 8: { top: '25.4%', left: '47.6%' },
    9: { top: '18.4%', left: '48.0%' }, 10: { top: '11.1%', left: '48.7%' }, 11: { top: '11.7%', left: '56.3%' }, 12: { top: '11.6%', left: '64.6%' },
    13: { top: '11.6%', left: '72.6%' }, 14: { top: '11.4%', left: '80.5%' }, 15: { top: '11.4%', left: '88.4%' }, 
    16: { top: '19.0%', left: '88.1%' }, 17: { top: '24.9%', left: '88.1%' }, 18: { top: '32.6%', left: '88.4%' }, 19: { top: '38.4%', left: '88.4%' }, 20: { top: '45.1%', left: '88.4%' },
    21: { top: '44.6%', left: '79.5%' }, 22: { top: '44.6%', left: '72.9%' }, 23: { top: '45.5%', left: '64.0%' }, 24: { top: '45.5%', left: '55.5%' }, 25: { top: '45.5%', left: '47.3%' },
    26: { top: '39.2%', left: '48.3%' }, 27: { top: '38.9%', left: '39.5%' }, 
    28: { top: '38.7%', left: '31.7%' }, 
    // Normal Path
    29: { top: '38.5%', left: '24.0%' }, 30: { top: '38.5%', left: '16.1%' }, 31: { top: '38.5%', left: '8.0%' }, 32: { top: '45.1%', left: '8.1%' },
    // Alt Path
    '29_alt': { top: '44.5%', left: '31.6%' }, '30_alt': { top: '52.2%', left: '31.3%' }, '31_alt': { top: '51.4%', left: '23.1%' }, '32_alt': { top: '52.9%', left: '15.5%' },
    // Merge
    33: { top: '51.7%', left: '7.4%' }, 34: { top: '58.7%', left: '7.1%' }, 35: { top: '64.9%', left: '6.6%' }, 36: { top: '71.9%', left: '7.1%' },
    37: { top: '78.1%', left: '6.8%' }, 38: { top: '84.0%', left: '7.1%' }, 39: { top: '84.9%', left: '15.1%' }, 40: { top: '84.4%', left: '21.9%' },
    41: { top: '84.9%', left: '30.5%' }, 42: { top: '79.3%', left: '30.2%' }, 43: { top: '71.7%', left: '31.0%' }, 44: { top: '65.7%', left: '31.0%' },
    45: { top: '64.8%', left: '39.3%' }, 46: { top: '65.1%', left: '46.9%' }, 47: { top: '58.4%', left: '46.3%' }, 48: { top: '58.2%', left: '54.9%' },
    49: { top: '59.0%', left: '62.2%' }, 50: { top: '65.1%', left: '62.2%' }, 51: { top: '72.2%', left: '62.8%' }, 52: { top: '79.0%', left: '62.8%' },
    53: { top: '85.4%', left: '62.5%' }, 54: { top: '85.4%', left: '70.7%' }, 55: { top: '85.5%', left: '78.9%' }, 56: { top: '86.1%', left: '86.7%' },
    57: { top: '78.5%', left: '86.7%' }, 58: { top: '72.3%', left: '87.2%' }, 59: { top: '65.4%', left: '86.6%' }, 60: { top: '65.4%', left: '95.2%' }
};

// --- 4. GAME ENGINE ---
const state = { 
    players: [], 
    turn: 0, 
    processing: false,
    forcedDice: null // FITUR BARU: Untuk menyimpan angka dadu curang
};

const game = {
    init: () => {
        state.players = [];
        state.forcedDice = null; // Reset cheat
        const colors = ['p-red', 'p-blue', 'p-green', 'p-yellow'];
        const hex = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7'];
        
        for(let i=1; i<=setup.count; i++) {
            const name = document.getElementById(`p${i}-name`).value || `Player ${i}`;
            state.players.push({ 
                id: i, name: name, color: colors[i-1], hex: hex[i-1],
                pos: 0, isJailed: false 
            });
        }
        game.renderBoard();
        ui.switchScreen('screen-game');
        game.updateUI();
    },

    renderBoard: () => {
        const layer = document.getElementById('pawn-layer');
        layer.innerHTML = '';
        state.players.forEach(p => {
            const pawn = document.createElement('div');
            pawn.id = `pawn-${p.id}`;
            pawn.className = `pawn ${p.color}`;
            layer.appendChild(pawn);
            game.moveVisual(p, 0);
        });
    },

    spin: () => {
        if(state.processing) return;
        state.processing = true;
        let c = 0;
        const box = document.getElementById('dice-box');
        
        // Animasi acak angka
        const int = setInterval(() => {
            box.innerText = Math.floor(Math.random() * 12) + 1;
            c++;
            if(c > 10) { 
                clearInterval(int); 
                
                // LOGIKA DADU (NORMAL vs CHEAT)
                let finalDice;
                if (state.forcedDice !== null) {
                    finalDice = state.forcedDice; // Pakai angka curang
                    state.forcedDice = null; // Reset setelah dipakai
                } else {
                    finalDice = Math.floor(Math.random() * 12) + 1; // Angka murni acak
                }

                // Tampilkan angka final di layar
                box.innerText = finalDice;
                game.processMove(finalDice); 
            }
        }, 50);
    },

    processMove: (dice) => {
        const p = state.players[state.turn];
        if(p.isJailed) {
            if(dice === 12) {
                ui.showModal('INFO', 'Hore! Bebas dari penjara!', '#2d3436');
                p.isJailed = false;
                game.startWalking(p, dice);
            } else {
                ui.showModal('JAIL', 'Masih dikunci. Butuh angka 12.', '#2d3436');
                game.nextTurn();
            }
            return;
        }
        game.startWalking(p, dice);
    },

    startWalking: (p, steps) => {
        let stepsLeft = steps;
        const walkInterval = setInterval(() => {
            if(stepsLeft > 0) {
                let nextPos = game.calculateNextStep(p.pos);
                p.pos = nextPos;
                game.moveVisual(p, nextPos);
                game.updateUI();
                
                if(p.pos === 60) {
                    clearInterval(walkInterval);
                    game.handleWin(p);
                    return;
                }
                stepsLeft--;
            } else {
                clearInterval(walkInterval);
                setTimeout(() => game.checkTile(p), 400);
            }
        }, 400);
    },

    calculateNextStep: (currentPos) => {
        if(currentPos === 60) return 60;
        if (typeof currentPos === 'number') return currentPos + 1;
        if (typeof currentPos === 'string') {
            const num = parseInt(currentPos);
            return (num < 32) ? `${num + 1}_alt` : 33;
        }
    },

    moveVisual: (p, pos) => {
        const el = document.getElementById(`pawn-${p.id}`);
        const coord = coordinates[pos] || {top:'5%', left:'5%'};
        const offset = (p.id - 1) * 4; 
        el.style.top = coord.top; el.style.left = coord.left;
        el.style.transform = `translate(calc(-50% + ${offset}px), calc(-50% + ${offset}px))`;
    },

    checkTile: (p) => {
        const currentPos = p.pos;
        const posNum = parseInt(p.pos);

        if(posNum === 28) {
            document.getElementById('freewill-modal').classList.remove('hidden');
            return;
        }

        if (tileTypes.jail.includes(currentPos)) {
            p.isJailed = true;
            ui.showModal('JAIL', 'Masuk Penjara!', '#2d3436');
        } else if (tileTypes.bonus.includes(currentPos)) {
            ui.showModal('BONUS', 'Bonus Spin!', '#e84393');
            state.processing = false; return;
        } else if (tileTypes.funny.includes(currentPos)) game.drawCard('funny');
        else if (tileTypes.sharing.includes(currentPos)) game.drawCard('sharing');
        else if (tileTypes.deeptalk.includes(currentPos)) game.drawCard('deeptalk');
        else if (tileTypes.motivation.includes(currentPos)) game.drawCard('motivation');
        else {
            game.nextTurn(); return;
        }
        game.nextTurn();
    },

    drawCard: (type) => {
        const deck = cards[type];
        const text = deck[Math.floor(Math.random() * deck.length)];
        const config = {
            funny: { title: "FUNNY MOMENTS", color: "#fdcb6e" },
            sharing: { title: "SHARING SESSION", color: "#e17055" },
            deeptalk: { title: "DEEP TALK", color: "#00b894" },
            motivation: { title: "MOTIVASI", color: "#74b9ff" }
        };
        ui.showModal(config[type].title, text, config[type].color);
    },

    choosePath: (choice) => {
        document.getElementById('freewill-modal').classList.add('hidden');
        const p = state.players[state.turn];
        if(choice === 'bawah') {
            p.pos = '29_alt'; game.moveVisual(p, '29_alt');
        } else {
            p.pos = 29; game.moveVisual(p, 29);
        }
        game.nextTurn();
    },

    handleWin: (p) => {
        document.getElementById('winner-name').innerText = p.name;
        document.getElementById('winner-avatar').style.backgroundColor = p.hex;
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
            const posDisplay = parseInt(p.pos);
            list.innerHTML += `
                <div class="player-card ${i === state.turn ? 'active' : ''}">
                    <div class="player-name">${p.name}</div>
                    <div class="player-pos">${posDisplay}</div>
                </div>`;
        });
        document.getElementById('active-player-name').innerText = state.players[state.turn].name;
    }
};

// --- 5. UI HELPERS ---
const ui = {
    switchScreen: (id) => {
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
        if(id === 'screen-setup') setup.render();
    },
    showModal: (t, m, c = '#6c5ce7') => {
        const overlay = document.getElementById('modal-overlay');
        overlay.classList.remove('hidden');
        document.getElementById('modal-header').innerText = t;
        document.getElementById('modal-header').style.background = c;
        if(t === 'panduan') {
            document.getElementById('modal-body').innerHTML = `
                <ul style='text-align:left; font-size:0.9rem'>
                    <li>Mulai dari Start. Capai Finish (60) duluan.</li>
                    <li>Kotak Warna = Ambil Kartu Tantangan.</li>
                    <li>Kotak Hitam = Penjara (Keluar jika dapat angka 12).</li>
                    <li>Kotak Pink = Bonus Spin.</li>
                    <li>Kotak 28 (Free Will) = Pilih jalur nasibmu.</li>
                </ul>`;
        } else {
            document.getElementById('modal-body').innerText = m;
        }
    },
    closeModal: () => document.getElementById('modal-overlay').classList.add('hidden')
};

const setup = {
    count: 2,
    render: () => {
        const c = document.getElementById('player-inputs'); c.innerHTML = '';
        const cols = ['#ff7675','#74b9ff','#55efc4','#ffeaa7'];
        for(let i=1; i<=setup.count; i++) c.innerHTML += `
            <div style="display:flex; gap:10px; margin:5px;">
                <div style="width:25px; height:25px; background:${cols[i-1]}; border-radius:50%;"></div>
                <input id="p${i}-name" placeholder="Nama Pemain ${i}" style="flex:1; padding:8px; border-radius:10px; border:1px solid #ddd;">
            </div>`;
    },
    addPlayer: () => { if(setup.count<4) {setup.count++; setup.render();} },
    removePlayer: () => { if(setup.count>2) {setup.count--; setup.render();} }
};

// --- 6. AUTO SCALE ---
function resizeGame() {
    const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
    document.getElementById('game-stage').style.transform = `scale(${s})`;
}
window.addEventListener('resize', resizeGame);
resizeGame();

// --- 7. CHEAT SYSTEM (Sesuai Request) ---
const cheat = {
    // Fungsi ini akan dipanggil oleh tombol cheat
    setupBranchingTest: () => {
        const p = state.players[state.turn];
        
        // 1. Pindah posisi ke 27
        p.pos = 27; 
        game.moveVisual(p, 27);
        game.updateUI();
        
        // 2. Kunci dadu berikutnya jadi 1
        state.forcedDice = 1;

        alert(`TEST MODE AKTIF:\n1. ${p.name} dipindah ke kotak 27.\n2. Spin berikutnya angka 1.\n3. Silakan klik tombol PUTAR DADU.`);
    },

    init: () => {
        const div = document.createElement('div');
        div.style.cssText = "position:fixed; top:10px; left:10px; z-index:9999; background:rgba(0,0,0,0.8); padding:10px; border-radius:8px; color:white; font-size:12px;";
        div.innerHTML = `
            <strong>🔧 DEV</strong><br>
            <button onclick="cheat.setupBranchingTest()" style="cursor:pointer; padding:5px; margin-top:5px;">
               Test Percabangan
            </button>
        `;
        document.body.appendChild(div);
    }
};
cheat.init();

ui.switchScreen('screen-intro');