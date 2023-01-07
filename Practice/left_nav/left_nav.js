var btn = document.getElementById("im1");
var list=document.getElementById("ul1");
btn.onclick=function()
{
    if(list.className=="")
    {
        list.className="exp";
    }
    else
    {
        list.className="";
    }
}