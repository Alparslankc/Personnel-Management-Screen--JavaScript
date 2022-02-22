const tablo = document.getElementById("giristablo");
const button2 = document.getElementById("button1");
const adgiris = document.getElementById("adGiris");
const soyadgiris = document.getElementById("soyadGiris");
const telgiris = document.getElementById("telGiris");
const tablo11 = document.getElementById("tablo1");


button2.addEventListener("click" ,butonekle)

function butonekle () { 

     var tablo = document.createElement("td");
            var tablo2 = document.createElement("td");
            var tablo3 = document.createElement("td");
            var buton1 =document.createElement("button");
            var buton2 =document.createElement("button");
            var buton3 =document.createElement("button");
            

        
            

            tablo.textContent=adgiris.value;
            tablo2.textContent=soyadgiris.value;
            tablo3.textContent=telgiris.value;
            buton1.textContent="DÜZENLE";
            buton2.textContent="SİL";

            var tr=document.createElement("tr");

            tr.appendChild(tablo);
            tr.appendChild(tablo2);
            tr.appendChild(tablo3);
            tr.appendChild(buton1);
            tr.appendChild(buton2);
            
            tablo11.appendChild(tr);


            buton2.addEventListener("click",tablosil)
            buton1.addEventListener("click",tablodüzenle)


            


            function tablodüzenle () 
            {
                tr.removeChild(buton1);
                
                tr.appendChild(buton3);
                buton3.textContent="Kaydet";

                buton3.addEventListener("click" ,kaydet)
                

                var sontablo1;
                var sontablo2;
                var sontablo3;


                sontablo1 = tablo.textContent;
                sontablo2= tablo2.textContent;
                sontablo3= tablo3.textContent;


                tablo.innerHTML= "<input id = 'ad1düzenle'> </input>";
                tablo2.innerHTML= "<input id = 'soyad1düzenle'> </input>";
                tablo3.innerHTML="<input  id = 'numara1düzenle'> </input>";

                document.getElementById("ad1düzenle").value = sontablo1;
                document.getElementById("soyad1düzenle").value = sontablo2;
                document.getElementById("numara1düzenle").value = sontablo3;

                tr.removeChild(buton2);

                buton2.addEventListener("click",tablosil)

             function kaydet () 
             {
                tablo.innerHTML   = document.getElementById("ad1düzenle").value;
                tablo2.innerHTML = document.getElementById("soyad1düzenle").value;
                tablo3.innerHTML = document.getElementById("numara1düzenle").value;
                tr.appendChild(buton1); 
                tr.appendChild(buton2); 
                tr.removeChild(buton3); 

                
                
             }

            }

            function tablosil () 
            {
                tr.removeChild(tablo);
                tr.removeChild(tablo2);
                tr.removeChild(tablo3);
                tr.removeChild(buton1);
                tr.removeChild(buton2);
                tr.removeChild(buton3);
                
                
                
            }

            


}
            




