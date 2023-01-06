function login_check()
{
    var userid=document.getElementById("t1").value;
    var pass=document.getElementById("p1").value;
    var ureg= /^\d+$/;
    var preg=/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    if (ureg.test(userid))
    {
        document.getElementById("er1").innerHTML="User Id correct";

    }
    else
    {
        document.getElementById("er1").innerHTML="User Id incorrect";
    }

    if (preg.test(pass))
    {
        document.getElementById("er2").innerHTML="Password correct";

    }
    else
    {
        document.getElementById("er2").innerHTML="Minimum eight characters, at least one uppercase letter, one lowercase letter and one number: ";
    }
}
