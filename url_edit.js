const form = document.getElementById('form-url');
const cp_btn = document.getElementById('cp-btn');
const toggle_btn = document.getElementsByClassName('toggles');
const item_LINK = "aff_fcid=e12457f5253f4e4481753b8cff7e3c2c-1722674175379-01625-_DEhDuIF&tt=CPS_NORMAL&aff_fsk=_DEhDuIF&aff_platform=shareComponent-detail&sk=_DEhDuIF&aff_trace_key=e12457f5253f4e4481753b8cff7e3c2c-1722674175379-01625-_DEhDuIF";
const store_LINK = "spm=a2g0o.detail.0.0.577bngVpngVpcF&aff_fcid=e2470c74d8234449a5a4b0eba3b90fe5-1722674899857-07630-_DEr4fpN&tt=CPS_NORMAL&aff_fsk=_DEr4fpN&aff_platform=portals-tool&sk=_DEr4fpN&aff_trace_key=e2470c74d8234449a5a4b0eba3b90fe5-1722674899857-07630-_DEr4fpN";

var shape_mode_item = true;

var shaped_link = "";
var out_text  = document.getElementById('output');

form.addEventListener('change', function(){
    var in_url = document.getElementById('origin-url').value;
    var OUT_modeHUD_item = document.getElementById('output-item');
    var OUT_modeHUD_store = document.getElementById('output-store');
    OUT_modeHUD_item.style.display = 'none';
    OUT_modeHUD_store.style.display = 'none';

    shaped_link = "";

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