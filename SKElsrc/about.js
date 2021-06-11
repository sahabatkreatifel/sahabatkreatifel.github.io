function anggotaGrup(x,y){
    var statusAnggota = [
        {nama: "Elveria Siahaan",
        posisi: "pemeran utama dan pembuat konsep",
        deskripsi: ""},
        {nama: "Benny Padang",
        posisi: "editor dan kameramen",
        deskripsi: ""}
    ];
    if (y==0){return statusAnggota.length;}
    else if (y==1){return statusAnggota[x].nama}
    else if (y==2){return statusAnggota[x].posisi}
    else if (y==3){return statusAnggota[x].deskripsi}
}