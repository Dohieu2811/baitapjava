
        function tinhToan() {
            var banKinh = parseFloat(document.getElementById("banKinhInput").value);
            var duongKinh = 2 * banKinh;
            var chuVi = 2 * banKinh * 3.14;
            var dienTich = banKinh * banKinh * 3.14;
            document.getElementById("ketquachuvi").textContent = "Chu vi của hình tròn là: " + chuVi;
            document.getElementById("ketquadientich").textContent = "Diện tích của hình tròn là: " + dienTich;
        }
    
