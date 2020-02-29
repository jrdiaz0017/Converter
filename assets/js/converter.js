
function convert_to_ip_mask(slash) {
    var bit_a = [];
    var zeroes = 32-slash;
    var bitmask = "1".repeat(slash)+"0".repeat(zeroes);


    bit_a.push(bitmask.substring(0,8));
    bit_a.push(bitmask.substring(8,16));
    bit_a.push(bitmask.substring(16,24));
    bit_a.push(bitmask.substring(24,32));



    return parseInt(bit_a[0],2)+"."+parseInt(bit_a[1],2)+"."+parseInt(bit_a[2],2)+"."+parseInt(bit_a[3],2);
    }


 function do_convert() {
 var slash = document.getElementById("slash");
 var s_val = parseInt(slash.value);
 var ip = convert_to_ip_mask(s_val);
 var ip_mask = document.getElementById("ip_mask");
 ip_mask.value= ip ;


}