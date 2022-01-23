import image from "../img/cg-banner.png"; 

export default function Banner() {
  return (
    <>
    <div style={{ 
      backgroundImage:`url(${image})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:'center',
      backgroundSize:"contain",
      height:'40vw',
      width: '90vw' }}>
      Hello Climate Guardians!
    </div>
    </>
  );
}