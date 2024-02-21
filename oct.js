const elements = {
    b: document.getElementById("b"),
    k: document.getElementById("k"),
    t: document.getElementById("t"),
    h: document.getElementById("h"),
    j: document.getElementById("j"),
    i: document.getElementById("TEXT"),
    e: document.getElementById("GEXT"),
    e1: document.getElementById("e1"),
    e2: document.getElementById("e2"),
    e3: document.getElementById("e3"),
    e4: document.getElementById("e4"),
    e5: document.getElementById("e5"),
    e6: document.getElementById("e6"),
    e7: document.getElementById("e7"),
    e8: document.getElementById("e8"),
    s: document.getElementById("FEXT"),
    para: document.getElementById("para"),
    sk:document.querySelector(".sk"),
    rk:document.querySelector(".rk"),
    sks:document.querySelector(".sks"),
    rks:document.querySelector(".rks"),
    skt:document.querySelector(".skt"),
    rkt:document.querySelector(".rkt"),
    skp:document.querySelector(".skp"),
    rkp:document.querySelector(".rkp"),




    si:document.querySelector(".si"),
    ri:document.querySelector(".ri"),
    sia:document.querySelector(".sia"),
    ria:document.querySelector(".ria"),
    sib:document.querySelector(".sib"),
    rib:document.querySelector(".rib"),
    sic:document.querySelector(".sic"),
    ric:document.querySelector(".ric"),
    sid:document.querySelector(".sid"),
    rid:document.querySelector(".rid"),
    sie:document.querySelector(".sie"),
    rie:document.querySelector(".rie"),
    sif:document.querySelector(".sif"),
    rif:document.querySelector(".rif"),
    sig:document.querySelector(".sig"),
    rig:document.querySelector(".rig"),
    
    
};



const month = "october"; 

function saveData() {
    for (const key in elements) {
        if (elements.hasOwnProperty(key) && elements[key].value) {
            localStorage.setItem(`${key}_${month}`, elements[key].value);
        }
    }
}

function loadData() {
    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            const value = localStorage.getItem(`${key}_${month}`); 
            if (value) {
                elements[key].value = value;
            }
        }
    }
}

window.onload = function() {
    loadData();
    d();
    e();
    s();
};

function d() {
    const { b, k, t, h, j, i } = elements;

    j.value = (parseInt(b.value) || 0) + (parseInt(k.value) || 0) + (parseInt(t.value) || 0) + (parseInt(h.value) || 0);

    i.value = j.value;

    saveData(); 
}

function e() {
    const { e1, e2, e3, e4, e5, e6, e7, e8, e } = elements;
    ecal.value= (parseInt(e1.value) || 0) + (parseInt(e2.value) || 0) + (parseInt(e3.value) || 0) + (parseInt(e4.value) || 0) + (parseInt(e5.value) || 0) + (parseInt(e6.value) || 0) + (parseInt(e7.value) || 0) + (parseInt(e8.value) || 0);
    e.value=ecal.value;
    saveData(); 
}

function s() {
    const { j, e, s, para } = elements;
    s.value = parseInt(j.value) - parseInt(e.value);
    
    if(s.value<1000){
        para.innerHTML="Your saving is      "+s.value+"     this month which is less than 1000, you can control on your expenses to save more";
        para.style.color="red";
    } else {
        para.innerHTML="Your saving is      "+s.value+"     this month";
        para.style.color="white";
    }

    saveData(); 
}

Object.values(elements).forEach(element => {
    if (element.tagName == 'INPUT') {
        element.addEventListener('input', () => {
            d();
            e();
            s();
        });
    }
});
