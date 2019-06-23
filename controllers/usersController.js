var studentMain = require('../studentMain.js')
var sum = 0;

exports.register = async(req,res)=>{

    let name = req.body.name;
    let carNo = req.body.accNo;
    let licNo = req.body.licNo;
    let aadharNo = req.body.aadharNo;
    let mobNo = req.body.mobNo;
    let pswd = req.body.pswd;
    let rpswd = req.body.rpswd;

    console.log("hai");
  /*below code added to register the student in blockchain*/

    var i=sum;
    var stuaddress = [];
    var passbcn=pswd;
    stuaddress[i]= studentMain.web3.personal.newAccount(passbcn);
    var newstu= stuaddress[i];/*new student address*/
    i++;
    console.log('new student registerd at address : ',newstu);
    
     var regstufrm = studentMain.defaultAccount;/*register student from defaultAccount*/
     var defaultPassword = studentMain.defaultPassword;
     
     studentMain.unlockAccountp(regstufrm,defaultPassword);/*unlock the account*/
     /*register the new student in blockchain from defaultAccount*/
     studentMain.setDetails(newstu,name,carNo,licNo,aadharNo,mobNo,pswd,regstufrm,defaultPassword,studentMain.gas);
     console.log('transfering 100 ether to the new student');
     /*transfer 100 ether to the student from main account*/
     studentMain.unlockAccountp(studentMain.defaultAccount,studentMain.defaultPassword);
     var trfether = studentMain.web3.eth.sendTransaction({from:regstufrm, to:newstu, value:studentMain.web3.toWei(1,"ether")});
     console.log('hash of ether transfer :',trfether);

     res.send({
     	"code":200
     })
     /*end of register student in blockchain */
};

/*blockchain initialization of contract*/
    console.log("Initializing the Smart Contract","\n");
    
    studentMain.initialize(studentMain.contractAddress, studentMain.defaultAccount);

    console.log("Completed Contract Initialization","\n","\n");

    console.log("Setting up the Contract ABI","\n");
    
    studentMain.getContract(studentMain.abi);

    console.log("Completed setting up contract ABI","\n","\n");

    console.log("Setting up the Smart Contract Instance","\n");
    
    studentMain.getContractInstance(studentMain.contractAddress);

    console.log("Completed Getting an Instance of the Smart Contract","\n","\n");

    /*blockchain initialization of contract end*/