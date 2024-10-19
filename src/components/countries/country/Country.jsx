import './country.css'
export default function Country({ country }) {
  console.log(country);
  const { name, flags } = country;
  return (
    <div>
      <div className="country">
        <h3>Name : {name?.common}</h3>
        <img className="wd" src={flags.png} alt="" />
      </div>
    </div>
  );
}
