<link rel="stylesheet" href="proses.css">

<?php
    if (isset($_POST['fnama']))
        {
            $nama=$_POST['fnama'];
            $email=$_POST['femail'];
            $alamat=$_POST['falamat'];
            $pilihan_paket_booking=$_POST['finfo'];

            echo "Daftar Pemesan :";
            echo "<br />";
            echo "<table id='pemesan'>";
            echo "<tr><th>No</th><th>Nama</th><th>Email</th><th>Alamat</th><th>Pilihan Paket Booking</th></tr>";
            echo "<tr><td>1.</td><td>$nama</td><td>$email</td><td>$alamat</td><td>$pilihan_paket_booking</td></tr>";
        }
?>