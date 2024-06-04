const form = document.getElementById('form-url');
const cp_btn = document.getElementById('cp-btn');
const toggle_btn = document.getElementsByClassName('toggles');
const item_LINK = "aff_fcid=a30bff8fac2d46bfa7d159fdcee3b240-1695520974166-02522-_DCqIlYL&tt=CPS_NORMAL&aff_fsk=_DCqIlYL&aff_platform=shareComponent-detail&sk=_DCqIlYL&aff_trace_key=a30bff8fac2d46bfa7d159fdcee3b240-1695520974166-02522-_DCqIlYL&terminal_id=f8e4816fc0434fc6997372c1ac8d9149&gatewayAdapt=glo2jpn";
const store_LINK = "spm=a2g0o.detail.0.0.2ef3E8wlE8wl3X&aff_fcid=317e5f4fac0f458d82f2471560007ebf-1695540720295-07016-_DdXk8Qx&tt=CPS_NORMAL&aff_fsk=_DdXk8Qx&aff_platform=portals-tool&sk=_DdXk8Qx&aff_trace_key=317e5f4fac0f458d82f2471560007ebf-1695540720295-07016-_DdXk8Qx&terminal_id=d2ec4cae452141a5b8d35ff0f3dec40e";

var shape_mode_item = true;

var shaped_link = "";
var out_text  = document.getElementById('output');

form.addEventListener('change', function(){
    var in_url = document.getElementById('origin-url').value;
    var OUT_modeHUD_item = document.getElementById('output-item');
    var OUT_modeHUD_store = document.getElementById('output-store');
    OUT_modeHUD_item.style.display = 'none';
    OUT_modeHUD_store.style.display = 'none';

    var shaped_link = "";

    if(shape_mode_item){
        shaped_link = in_url.substr(0,in_url.indexOf('html'))+"html?"+item_LINK;
        OUT_modeHUD_item.style.display = 'block';
    }
    else{
        shaped_link = in_url.substr(0,in_url.indexOf('?'))+"?"+store_LINK;
        OUT_modeHUD_store.style.display = 'block';
    }

    out_text.closest('div').style.display = 'block';
    cp_btn.style.display ='block';
    out_text.textContent = shaped_link;
    out_text.setAttribute('href',shaped_link);
});

cp_btn.addEventListener('click',()=>{
    navigator.clipboard.writeText(shaped_link);
});
for (i=0;i < toggle_btn.length; i++){
    toggle_btn[i].addEventListener('click',(e)=>{
        const target = e.target;
        target.classList.toggle("active");
        form.reset();

        if(target.id == "toggle-item"){
            inactive_button = document.getElementById('toggle-store');
            inactive_button.classList.toggle("active");
            shape_mode_item = !shape_mode_item;
        }
        else{
            inactive_button = document.getElementById('toggle-item');
            inactive_button.classList.toggle("active");
            shape_mode_item = !shape_mode_item;
        }
    });
}