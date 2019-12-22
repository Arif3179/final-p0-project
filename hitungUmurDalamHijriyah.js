function hitungUmurDalamHijriyah(){
// mencari time interval dari dua tanggal yg berbeda menggunakan build in function getTime
// Setelah didapat time interval dalam milisecond,lalu dibagi dengan hasil perkalian dari 1000*60*60*24 
    var dob = document.getElementById("dob").value;
    var today = new Date(); // current date,akan terus berubah tiap hari 
    var tanggalHariIni = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    var date2 = new Date(tanggalHariIni)
    var date1 = new Date(dob)
    var umurInMiliSecond = date2.getTime() - date1.getTime()
    var umurHari = umurInMiliSecond / (1000*60*60*24)

 //kalkulasi usia berdasar kalender masehi dengan metode terakurat:
    var dd = date1.getDate()
    var mm = date1.getMonth()+1;
    var yyyy = date1.getFullYear();
    var tahunMasehi = today.getFullYear()-yyyy
    var bulanMasehi = (today.getMonth()+1)-mm
    var hariMasehi = today.getDate() - dd   
    if(hariMasehi >= 0 && bulanMasehi >= 0 && tahunMasehi >= 0){
        umurTahunMasehi = tahunMasehi
        umurBulanMasehi = bulanMasehi
        umurHariMasehi = hariMasehi
    }else if(bulanMasehi < 0 && tahunMasehi >= 0){
        umurTahunMasehi = tahunMasehi - 1
        if(hariMasehi >= 0){
        umurBulanMasehi = (today.getMonth()+1) + 12 - mm
        umurHariMasehi = hariMasehi
        }else if(hariMasehi < 0){
            umurBulanMasehi = (today.getMonth()+1) + 12 - mm -1
            umurHariMasehi = Math.floor(30.43750 - dd) + today.getDate()
        }
    }else if(bulanMasehi == 0 && hariMasehi < 0 && tahunMasehi >= 0){
        umurTahunMasehi = tahunMasehi - 1
        umurBulanMasehi = 11
        umurHariMasehi = Math.floor(30.43750 - dd) + today.getDate()
    }else if(hariMasehi < 0 && tahunMasehi >= 0 && bulanMasehi > 0){
        umurTahunMasehi = tahunMasehi
        umurBulanMasehi = bulanMasehi - 1
        umurHariMasehi = Math.floor(30.43750 - dd) + today.getDate()
    }
// asumsi rata-rata 1 tahun hijriyah = 354,36708 hari
// asumsi rata-rata 1 bulan hijriyah = 29,53059 hari
    var umurTahunHijriyah = Math.floor(umurHari/354.36708)
    var umurBulanHijriyah = Math.floor((umurHari%354.36708) / 29.53059)
    var umurHariHijriyah = Math.floor((umurHari%354.36708) % 29.53059)
    document.getElementById("hariIni").innerHTML = tanggalHariIni
    document.getElementById("kalenderHijriyah").innerHTML = umurTahunHijriyah+" tahun, "+umurBulanHijriyah+" bulan, "+umurHariHijriyah+" hari"
    document.getElementById("kalenderMasehi").innerHTML =umurTahunMasehi+" tahun, "+umurBulanMasehi+" bulan, "+umurHariMasehi+" hari"
    
 // Tambah titik per seribu agar lebih enak dibaca   
    var strNumber = umurHari.toString()
    let arrHasil = []
    let hitung = 0
    for(let i=strNumber.length-1;i>=0;i--){
        arrHasil.push(strNumber[i])
        hitung++
        if(hitung % 3 == 0 && hitung != strNumber.length){
            arrHasil.push(".");
        }
    }  
    var outputDalamHari =  arrHasil.reverse().join("")
    document.getElementById("dalamHari").innerHTML = outputDalamHari+" hari"
    }
    