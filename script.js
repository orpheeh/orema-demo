async function generateNumeroCompteur(){
    const numeroCompteur = Math.floor((Math.random() * 10000) + 99999);
    console.log("aaa");
    const res = await fetch("https://orema-demo-srv.orpheenve.xyz/orema/compteur/create", {
        method: 'post',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            numero: numeroCompteur.toString(),
            unites: 10.0,
        })
    });
    
    if(res.status == 200){
        const response = await res.json();
        document.querySelector(".numero-compteur").innerHTML = numeroCompteur;
    }
}