async function main() {
    const MagicNumber = await ethers.getContractFactory("MagicNumber");
    const magic_number = await MagicNumber.deploy( 44 );   
    console.log("Contract deployed to ADDRESS:", magic_number.address);
}
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
