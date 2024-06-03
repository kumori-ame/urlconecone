const form = document.getElementById('form-url');
const cp_btn = document.getElementById('cp-btn');
const origin_LINK = "aff_fcid=a30bff8fac2d46bfa7d159fdcee3b240-1695520974166-02522-_DCqIlYL&tt=CPS_NORMAL&aff_fsk=_DCqIlYL&aff_platform=shareComponent-detail&sk=_DCqIlYL&aff_trace_key=a30bff8fac2d46bfa7d159fdcee3b240-1695520974166-02522-_DCqIlYL&terminal_id=f8e4816fc0434fc6997372c1ac8d9149&gatewayAdapt=glo2jpn"
var shaped_link = "";
var out_text  = document.getElementById('output');

form.addEventListener('change', function(){
    var in_url = document.getElementById('origin-url').value;

    shaped_link = in_url.substr(0,in_url.indexOf('html'))+"html?"+origin_LINK;

    out_text.closest('div').style.display = 'block';
    cp_btn.style.display ='block';
    out_text.textContent = shaped_link;
    out_text.setAttribute('href',shaped_link);
});
cp_btn.addEventListener('click',()=>{
    navigator.clipboard.writeText(shaped_link);
});

