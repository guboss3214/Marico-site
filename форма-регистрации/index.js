const button = document.getElementById('button');
let input = document.querySelectorAll('.input');


button.addEventListener('click', function(){
    let a = document.querySelector('#user').value,
        b = document.querySelector('.password').value,
        c = document.querySelector('.email').value;
    if (a == ''){
        swal({
            title: "Please fill in all fields",
            icon: "warning",
            button: true
        });
    }else{
        swal("Good job!", "You clicked the button!", "success");
        document.querySelector('#user').value = '';
        document.querySelector('.password').value = '';
        document.querySelector('.email').value = '';
    }
    if (b == ''){
        swal({
            title: "Please fill in all fields",
            icon: "warning",
            button: true
        });
    }
    if (c == ''){
        swal({
            title: "Please fill in all fields",
            icon: "warning",
            button: true
        });
    }
});


function back(){
    window.history.back();
}