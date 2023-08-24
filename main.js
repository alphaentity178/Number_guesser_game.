let number;

const generate_number = () =>{
    let n1 = Math.random();
    let n2 = n1*10;
    n2 = Math.trunc(n2);
    n2 = (n2%6)+1;
    number = n2;
    console.log(number);
}

const generate_number_btn_click = () =>{
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "block";

setTimeout(()=>{
    generate_number();

    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "block";
    document.querySelector("#section3").style.display = "none";
},3000)
};

const check_number = () =>{
    let value = document.querySelector("#field").value;
    if(value==number){
        Swal.fire(
            'Congress, You won the game',
            'You clicked the button',
            'success'
        );
    }else{
        Swal.fire(
            'Opps !! your guess is wrong!',
            'You clicked the button',
            'error'
            );
    }
    generate_number_btn_click();
    document.querySelector("#field").value = "";
}
