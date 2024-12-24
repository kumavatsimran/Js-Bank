

var name='simran';
var pin='4567';

function validated(){
    var password =document.getElementById('password').value;
      var user =document.getElementById('user').value;

      if(user==name && password==pin){
        alert(login.successfully)
      }
      else{
        alert('invalid user')
        return false;
      }
}

var balacnce=1000;
function bank(parameter) {
    
    switch (parameter) {
        case '+':
               diposite()
               console.log("heyyy")
               break;
        case '-':
               withdraw()
               break;
        case '=':
            document.getElementById('currentcash').innerHTML=balacnce
           default:
               break;
    }
}
    function diposite(){
        let damount=parseInt(document.getElementById('damount').value);
        var total =balacnce+damount;
        document.getElementById('depositebal').innerHTML =total
    }
    function withdraw(){
        let wamount=parseInt(document.getElementById('wamount').value);
        var wtotal =balacnce-wamount;
        if( wamount<1000){
            document.getElementById('show').innerHTML =wtotal
        }
        else{
            alert("invalid amount")
        }
       
    }
var d=new Date();
var date=d.getDate();
var month=d.getMonth()+1;
var year=d.getFullYear();
var final=date+'/'+month+'/'+year;

document.getElementById('date').innerHTML=final;

