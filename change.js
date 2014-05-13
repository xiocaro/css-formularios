var btnDefault=$("#btnDefault"),
    btnVertical=$("#btnVertical"),
    btnNolabel=$("#btnNolabel"),
    frmValidate=$(".frm_validate");

btnDefault.on("click", function(){
              frmValidate.removeClass("vertical").removeClass("lesslabel")
              });

btnVertical.on("click", function(){
              frmValidate.addClass("vertical").removeClass("lesslabel")
              });
btnNolabel.on("click", function(){
              frmValidate.addClass("lesslabel").removeClass("vertical")
              });