function back(){
    window.history.back();
}

let button = document.querySelector('.login');

button.addEventListener('click',function(){
    let a = document.querySelector('#user').value,
        b = document.querySelector('.pass').value;

    if (a == ''){
        swal({
            title: "Please fill in all fields",
            icon: "warning",
            button: true
        });
    }else{
        swal("Good job!", "You clicked the button!", "success");
        document.querySelector('#user').value = '';
        document.querySelector('.pass').value = '';
    }
    if (b == ''){
        swal({
            title: "Please fill in all fields",
            icon: "warning",
            button: true
        });
    }
});