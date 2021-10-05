$(document).ready(function () {
var license = $('#license-code').text(),
myLicense = atob(license),
tpllc = $('#myIdBlog').text(),
second = 10;
console.log(myLicense);
if (myLicense == tpllc) {
return false
} else {
$('body').append('<style>body{background:#000!important;overflow:hidden}#peringatan span{font-size:50px}#peringatan{z-index:999999999;position:fixed;top:0;right:0;left:0;padding:20% 0;height:100%;text-align:center;background:rgba(248,40,40,0.97);color:#fff}}</style><div id="peringatan"><h4>Activate Templates</h4><p>Silahkan hubungi <b>www.hartomy.com</b> untuk mendapatkan lisensi Template</p><span id="aktivasi">'+second+'</span></div>');
setInterval(function () {
second <= 1 ? window.location.href = "https://www.hartomy.com/" : $('#aktivasi').text(--second);
}, 1e3)
}
});